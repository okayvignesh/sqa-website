import { notFound } from 'next/navigation';
import PostEditor, { type EditablePost } from '../../../../../../src/components/admin/PostEditor';
import { connectMongo } from '../../../../../../src/lib/mongodb';
import { Post } from '../../../../../../src/lib/models/Post';

export const dynamic = 'force-dynamic';

type Ctx = { params: Promise<{ slug: string }> };

export default async function EditPostPage({ params }: Ctx) {
  const { slug } = await params;
  await connectMongo();
  const doc = await Post.findOne({ slug }).lean<any>();
  if (!doc) notFound();

  const initial: EditablePost = {
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt || '',
    content: doc.content || '',
    category: doc.category || 'Engineering',
    author: {
      name: doc.author?.name || '',
      role: doc.author?.role || '',
      avatar: doc.author?.avatar || '',
    },
    tags: doc.tags || [],
    readTime: doc.readTime || '5 min read',
    featuredImage: doc.featuredImage || '',
    publishedAt: doc.publishedAt
      ? new Date(doc.publishedAt).toISOString()
      : new Date().toISOString(),
    published: !!doc.published,
    seo: {
      metaTitle: doc.seo?.metaTitle || '',
      metaDescription: doc.seo?.metaDescription || '',
      ogImage: doc.seo?.ogImage || '',
    },
  };

  return <PostEditor mode="edit" initial={initial} />;
}
