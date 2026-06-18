import PostsList from './PostsList';
import { connectMongo } from '../../../../src/lib/mongodb';
import { Post } from '../../../../src/lib/models/Post';

export const dynamic = 'force-dynamic';

async function listAll() {
  try {
    await connectMongo();
    const docs = await Post.find({}).sort({ updatedAt: -1 }).lean();
    return docs.map((d: any) => ({
      _id: String(d._id),
      slug: d.slug,
      title: d.title,
      excerpt: d.excerpt || '',
      category: d.category,
      author: { name: d.author?.name || '' },
      tags: d.tags || [],
      published: !!d.published,
      publishedAt: d.publishedAt ? new Date(d.publishedAt).toISOString() : '',
      updatedAt: d.updatedAt ? new Date(d.updatedAt).toISOString() : '',
    }));
  } catch {
    return [];
  }
}

export default async function Page() {
  const posts = await listAll();
  return <PostsList initial={posts} />;
}
