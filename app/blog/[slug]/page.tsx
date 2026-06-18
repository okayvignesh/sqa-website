import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogDetailPage from '../../../src/redesign/pages/BlogDetailPage';
import { getPostBySlug, listPosts } from '../../../src/lib/posts';
import { SITE_NAME, SITE_TWITTER, SITE_URL, absoluteUrl } from '../../../src/lib/site';

export const dynamic = 'force-dynamic';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };

  const url = absoluteUrl(`/blog/${post.slug}`);
  const title = post.seo?.metaTitle?.trim() || post.title;
  const description = post.seo?.metaDescription?.trim() || post.excerpt;
  const ogImage = post.seo?.ogImage?.trim() || post.featuredImage || undefined;

  return {
    title,
    description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      siteName: SITE_NAME,
      title,
      description,
      url,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      ...(ogImage ? { images: [{ url: ogImage, alt: title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_TWITTER,
      creator: SITE_TWITTER,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const all = await listPosts();
  const related = all
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category || p.tags.some((t) => post.tags.includes(t))),
    )
    .slice(0, 3);

  const url = absoluteUrl(`/blog/${post.slug}`);

  const heroImage = post.seo?.ogImage?.trim() || post.featuredImage;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seo?.metaTitle?.trim() || post.title,
    description: post.seo?.metaDescription?.trim() || post.excerpt,
    image: heroImage ? [heroImage] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      ...(post.author.role ? { jobTitle: post.author.role } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/simplify_logo.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    url,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogDetailPage post={post} related={related} />
    </>
  );
}
