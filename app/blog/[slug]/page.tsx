import { notFound } from 'next/navigation';
import BlogDetailPage from '../../../src/redesign/pages/BlogDetailPage';
import { getPostBySlug, listPosts } from '../../../src/lib/posts';

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post not found — SimplifyQA' };
  return {
    title: `${post.title} — SimplifyQA`,
    description: post.excerpt,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const all = await listPosts();
  const related = all
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  return <BlogDetailPage post={post} related={related} />;
}
