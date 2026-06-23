import InsightsReportsPage from '../../../src/redesign/pages/platform/InsightsReportsPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Insights & Reports',
  description:
    'Real-time dashboards, flake analytics, and executive reporting that answer "are we ready to ship?"',
  path: '/platform/insights-reports',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',                path: '/' },
  { name: 'Platform',             path: '/platform/insights-reports' },
  { name: 'Insights & Reports',   path: '/platform/insights-reports' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <InsightsReportsPage />
    </>
  );
}
