import { NextResponse } from 'next/server';
import { z } from 'zod';
import { connectMongo } from '../../../../../src/lib/mongodb';
import { Post } from '../../../../../src/lib/models/Post';
import { requireAdmin } from '../../../../../src/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ slug: string }> };

const PostPatch = z.object({
  slug: z.string().min(1).optional(),
  title: z.string().min(1).optional(),
  excerpt: z.string().optional(),
  content: z.string().min(1).optional(),
  category: z.string().optional(),
  author: z
    .object({
      name: z.string().min(1),
      role: z.string().default(''),
      avatar: z.string().default(''),
    })
    .optional(),
  publishedAt: z.string().datetime().optional(),
  readTime: z.string().optional(),
  featuredImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  seo: z
    .object({
      metaTitle: z.string().default(''),
      metaDescription: z.string().default(''),
      ogImage: z.string().default(''),
    })
    .optional(),
});

function handleAuthError(err: unknown) {
  const e = err as Error & { status?: number };
  if (e.status === 401) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  if (e.status === 403) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  return null;
}

export async function GET(_: Request, ctx: Ctx) {
  try {
    await requireAdmin();
  } catch (err) {
    const r = handleAuthError(err);
    if (r) return r;
    throw err;
  }
  const { slug } = await ctx.params;
  await connectMongo();
  const doc = await Post.findOne({ slug }).lean();
  if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ post: doc });
}

export async function PUT(req: Request, ctx: Ctx) {
  try {
    await requireAdmin();
  } catch (err) {
    const r = handleAuthError(err);
    if (r) return r;
    throw err;
  }
  const { slug } = await ctx.params;

  let parsed;
  try {
    parsed = PostPatch.parse(await req.json());
  } catch (err) {
    return NextResponse.json({ error: 'Invalid payload', details: (err as Error).message }, { status: 400 });
  }

  await connectMongo();
  const update: Record<string, unknown> = { ...parsed };
  if (parsed.publishedAt) update.publishedAt = new Date(parsed.publishedAt);

  try {
    const doc = await Post.findOneAndUpdate({ slug }, update, { new: true });
    if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ post: doc });
  } catch (err) {
    const e = err as Error & { code?: number };
    if (e.code === 11000) {
      return NextResponse.json({ error: 'Another post already uses this slug.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to update post', details: e.message }, { status: 500 });
  }
}

export async function DELETE(_: Request, ctx: Ctx) {
  try {
    await requireAdmin();
  } catch (err) {
    const r = handleAuthError(err);
    if (r) return r;
    throw err;
  }
  const { slug } = await ctx.params;
  await connectMongo();
  const doc = await Post.findOneAndDelete({ slug });
  if (!doc) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
