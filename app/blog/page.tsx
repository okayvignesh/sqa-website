import BlogPage from '../../src/redesign/pages/BlogPage';
import { listPosts } from '../../src/lib/posts';
import { buildMetadata } from '../../src/lib/seo';
import { SITE_NAME, SITE_URL, absoluteUrl } from '../../src/lib/site';

export const metadata = buildMetadata({
  title: 'Blog',
  description:
    'Engineering deep dives, product updates, and opinions from the SimplifyQA team, covering AI, automation, and modern QA.',
  path: '/blog',
});
export const dynamic = 'force-dynamic';

export default async function Page() {
  const posts = await listPosts();

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    blogPost: posts.slice(0, 25).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: absoluteUrl(`/blog/${p.slug}`),
      datePublished: p.publishedAt,
      author: { '@type': 'Person', name: p.author.name },
      keywords: p.tags.join(', '),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogPage posts={posts} />
    </>
  );
}
