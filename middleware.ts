import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Security + crawl hint headers applied to every response.
 *
 * X-Robots-Tag is set to "noindex" for any host that isn't the canonical
 * production origin so previews/staging deploys don't leak into search results.
 */
export function middleware(request: NextRequest) {
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

  const host = request.headers.get('host') || '';
  const isCanonical = host === 'www.simplifyqa.app' || host === 'simplifyqa.app';
  if (!isCanonical) {
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
