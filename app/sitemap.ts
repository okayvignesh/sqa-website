import type { MetadataRoute } from 'next';
import { SITE_URL } from '../src/lib/site';
import { listPosts } from '../src/lib/posts';

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/careers', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/customer-success', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/integrations', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/request-demo', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/resources', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
  { path: '/platform/test-management', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/test-automation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/ai-test-assistant', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/defect-management', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/release-orchestration', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/platform/insights-reports', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/solutions', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/enterprise-qa', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/agile-scrum', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/engineering-leaders', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/automation-teams', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/solutions/industries', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/security', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/status', changeFrequency: 'weekly', priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await listPosts();
    postEntries = posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  } catch {
    postEntries = [];
  }

  return [...staticEntries, ...postEntries];
}
