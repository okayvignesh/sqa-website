import type { Metadata } from 'next';
import { SITE_NAME, SITE_TWITTER, SITE_URL } from './site';

type Args = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
};

// Builds per-page metadata. metadataBase is set in app/layout.tsx so relative
// paths in alternates/openGraph.url/images resolve against the canonical host.
export function buildMetadata({ title, description, path, image, keywords }: Args): Metadata {
  const url = path.startsWith('/') ? path : `/${path}`;
  const ogImage = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : undefined; // falls back to app/opengraph-image.tsx

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      description,
      url,
      ...(ogImage ? { images: ogImage } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_TWITTER,
      creator: SITE_TWITTER,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export type Breadcrumb = { name: string; path: string };

export function buildBreadcrumbJsonLd(trail: Breadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((b, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: b.name,
      item: `${SITE_URL}${b.path.startsWith('/') ? b.path : `/${b.path}`}`,
    })),
  };
}

