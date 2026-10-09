import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import { createElement } from 'react';
import { SITE_NAME, SITE_TWITTER, SITE_URL } from './site';

type Args = {
  title: string;
  description: string;
  path: string;
  /**
   * Absolute path to this route's OG image. Defaults to the site-wide
   * `/opengraph-image` card so every page always ships an og:image (the
   * file-convention image only applies to routes that have one in their own
   * segment). Pass this on routes that have a bespoke opengraph-image.tsx.
   */
  image?: string;
  keywords?: string[];
  /**
   * Skip the layout's `%s | SimplifyQA` title template. Use when the title
   * already reads naturally with the brand and appending it would duplicate
   * "SimplifyQA".
   */
  absoluteTitle?: boolean;
  ogType?: 'website' | 'article';
};

// Site-wide fallback OG card (app/opengraph-image.tsx).
const DEFAULT_OG_IMAGE = '/opengraph-image';

// Builds per-page metadata. metadataBase is set in app/layout.tsx so relative
// paths in alternates/openGraph.url/images resolve against the canonical host.
export function buildMetadata({
  title,
  description,
  path,
  image,
  keywords,
  absoluteTitle,
  ogType = 'website',
}: Args): Metadata {
  const url = path.startsWith('/') ? path : `/${path}`;
  const ogImageUrl = image ?? DEFAULT_OG_IMAGE;
  const ogImage = [{ url: ogImageUrl, width: 1200, height: 630, alt: title }];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      siteName: SITE_NAME,
      title,
      description,
      url,
      images: ogImage,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SITE_TWITTER,
      creator: SITE_TWITTER,
      images: [ogImageUrl],
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

// Convenience wrapper: renders a BreadcrumbList JSON-LD <script> tag straight
// from a trail. Keeps top-level pages down to one line of markup instead of
// hoisting a `const breadcrumb = ...` per file.
export function BreadcrumbJsonLd({ trail }: { trail: Breadcrumb[] }): ReactElement {
  return createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: JSON.stringify(buildBreadcrumbJsonLd(trail)) },
  });
}

