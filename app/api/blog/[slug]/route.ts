import { NextResponse } from 'next/server';
import { connectMongo } from '../../../../src/lib/mongodb';
import { Post } from '../../../../src/lib/models/Post';
import { getPostBySlug } from '../../../../src/lib/posts';

export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: Request, ctx: Ctx) {
  const { slug } = await ctx.params;
  const post = await getPostBySlug(slug);
  if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ post });
}

export async function PUT(req: Request, ctx: Ctx) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ error: 'MONGODB_URI not configured' }, { status: 503 });
  }
  const { slug } = await ctx.params;
  let body: any;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }
  await connectMongo();
  const updated = await Post.findOneAndUpdate({ slug }, body, { new: true });
  if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ post: updated });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ error: 'MONGODB_URI not configured' }, { status: 503 });
  }
  const { slug } = await ctx.params;
  await connectMongo();
  const deleted = await Post.findOneAndDelete({ slug });
  if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
