import { NextResponse } from 'next/server';
import { connectMongo } from '../../../src/lib/mongodb';
import { Post } from '../../../src/lib/models/Post';
import { listPosts } from '../../../src/lib/posts';

export const dynamic = 'force-dynamic';

export async function GET() {
  const posts = await listPosts();
  return NextResponse.json({ posts });
}

export async function POST(req: Request) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json(
      { error: 'MONGODB_URI not configured on this server' },
      { status: 503 },
    );
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { slug, title, content } = body ?? {};
  if (!slug || !title || !content) {
    return NextResponse.json(
      { error: 'slug, title, and content are required' },
      { status: 400 },
    );
  }

  try {
    await connectMongo();
    const created = await Post.create({
      slug,
      title,
      excerpt: body.excerpt ?? '',
      content,
      category: body.category ?? 'General',
      author: body.author ?? { name: 'SimplifyQA', role: '' },
      publishedAt: body.publishedAt ? new Date(body.publishedAt) : new Date(),
      readTime: body.readTime ?? '5 min read',
      featuredImage: body.featuredImage ?? '',
      tags: Array.isArray(body.tags) ? body.tags : [],
      published: body.published ?? true,
    });
    return NextResponse.json({ post: created }, { status: 201 });
  } catch (err: any) {
    if (err?.code === 11000) {
      return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: err.message ?? 'Server error' }, { status: 500 });
  }
}
