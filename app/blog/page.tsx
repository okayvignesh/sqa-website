import BlogPage from '../../src/redesign/pages/BlogPage';
import { listPosts } from '../../src/lib/posts';

export const metadata = { title: 'Blog — SimplifyQA' };
export const dynamic = 'force-dynamic';

export default async function Page() {
  const posts = await listPosts();
  return <BlogPage posts={posts} />;
}
