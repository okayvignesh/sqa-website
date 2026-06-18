import { NextResponse } from 'next/server';
import { z } from 'zod';
import slugify from 'slugify';
import { connectMongo } from '../../../../src/lib/mongodb';
import { Post } from '../../../../src/lib/models/Post';
import { requireAdmin } from '../../../../src/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const PostBody = z.object({
  slug: z.string().min(1).optional(),
  title: z.string().min(1),
  excerpt: z.string().default(''),
  content: z.string().min(1),
  category: z.string().default('General'),
  author: z.object({
    name: z.string().min(1),
    role: z.string().default(''),
    avatar: z.string().default(''),
  }),
  publishedAt: z.string().datetime().optional(),
  readTime: z.string().default('5 min read'),
  featuredImage: z.string().default(''),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(false),
  seo: z
    .object({
      metaTitle: z.string().default(''),
      metaDescription: z.string().default(''),
      ogImage: z.string().default(''),
    })
    .default({ metaTitle: '', metaDescription: '', ogImage: '' }),
});

function handleAuthError(err: unknown) {
  const e = err as Error & { status?: number };
  if (e.status === 401) return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  if (e.status === 403) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  return null;
}

export async function GET() {
  try {
    await requireAdmin();
  } catch (err) {
    const r = handleAuthError(err);
    if (r) return r;
    throw err;
  }
  await connectMongo();
  const docs = await Post.find({}).sort({ updatedAt: -1 }).lean();
  return NextResponse.json({ posts: docs });
}

export async function POST(req: Request) {
  try {
    await requireAdmin();
  } catch (err) {
    const r = handleAuthError(err);
    if (r) return r;
    throw err;
  }

  let parsed;
  try {
    parsed = PostBody.parse(await req.json());
  } catch (err) {
    return NextResponse.json({ error: 'Invalid payload', details: (err as Error).message }, { status: 400 });
  }

  const slug = (parsed.slug && parsed.slug.trim()) || slugify(parsed.title, { lower: true, strict: true });

  await connectMongo();
  try {
    const doc = await Post.create({
      ...parsed,
      slug,
      publishedAt: parsed.publishedAt ? new Date(parsed.publishedAt) : new Date(),
    });
    return NextResponse.json({ post: doc }, { status: 201 });
  } catch (err) {
    const e = err as Error & { code?: number };
    if (e.code === 11000) {
      return NextResponse.json({ error: 'A post with this slug already exists.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to create post', details: e.message }, { status: 500 });
  }
}
