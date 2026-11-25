import type { MetadataRoute } from 'next';
import { SITE_URL } from '../src/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Never disallow /_next/ — Googlebot needs the JS/CSS chunks to render
        // the page. Admin, API, and uploads are private surfaces.
        disallow: ['/api/', '/admin', '/uploads/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
