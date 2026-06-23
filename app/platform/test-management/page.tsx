import TestManagementPage from '../../../src/redesign/pages/platform/TestManagementPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Test Management',
  description:
    'Plan releases, organise test suites, and trace requirements to results in one collaborative workspace.',
  path: '/platform/test-management',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',             path: '/' },
  { name: 'Platform',          path: '/platform/test-management' },
  { name: 'Test Management',   path: '/platform/test-management' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <TestManagementPage />
    </>
  );
}
