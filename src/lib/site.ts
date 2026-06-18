// Central place for the canonical site URL used by metadata, sitemap, robots,
// and JSON-LD. Override in production by setting NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.simplifyqa.app'
).replace(/\/$/, '');

export const SITE_NAME = 'SimplifyQA';

export const SITE_DESCRIPTION =
  'SimplifyQA is an enterprise-grade ALM and test management platform. Plan, automate, execute, and report — across the entire software lifecycle with AI-powered intelligence.';

export const SITE_TWITTER = '@simplifyqa';

export function absoluteUrl(path = '/') {
  if (!path.startsWith('/')) path = `/${path}`;
  return `${SITE_URL}${path}`;
}
