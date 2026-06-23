import ReleaseOrchestrationPage from '../../../src/redesign/pages/platform/ReleaseOrchestrationPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Release Orchestration',
  description:
    'Quality gates, smart promotion, and end-to-end pipeline visibility across every release train.',
  path: '/platform/release-orchestration',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',                   path: '/' },
  { name: 'Platform',                path: '/platform/release-orchestration' },
  { name: 'Release Orchestration',   path: '/platform/release-orchestration' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ReleaseOrchestrationPage />
    </>
  );
}
