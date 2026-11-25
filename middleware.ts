import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Security headers applied to every response.
 *
 * X-Robots-Tag noindex is opt-in via the NOINDEX env var. Set NOINDEX=1 on
 * preview/staging environments to keep them out of search results. Production
 * should leave it unset so the site can be indexed normally.
 */
export function middleware(_request: NextRequest) {
  const response = NextResponse.next();
  const headers = response.headers;

  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  headers.set('X-DNS-Prefetch-Control', 'on');

  if (process.env.NOINDEX === '1' || process.env.NEXT_PUBLIC_NOINDEX === '1') {
    headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match every path except Next.js internals and static asset files.
     * The negative lookaheads keep middleware off hot paths (_next/static,
     * _next/image, favicon, etc.) for minimal overhead.
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?)).*)',
  ],
};
