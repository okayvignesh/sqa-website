// Central place for the canonical site URL used by metadata, sitemap, robots,
// and JSON-LD. Override in production by setting NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://simplifyqa.ai'
).replace(/\/$/, '');

export const SITE_NAME = 'SimplifyQA';

export const SITE_DESCRIPTION =
  'SimplifyQA is an AI-powered test automation and test management platform for web, mobile, API, SAP, and mainframe teams. Plan, automate, execute, report.';

export const SITE_TWITTER = '@simplifyqa';

export function absoluteUrl(path = '/') {
  if (!path.startsWith('/')) path = `/${path}`;
  return `${SITE_URL}${path}`;
}
