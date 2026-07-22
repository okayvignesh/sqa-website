import TestAutomationPage from '../../../src/redesign/pages/platform/TestAutomationPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Test Automation',
  description:
    'Low-code, self-healing automation across web, mobile, API, and desktop. Scale coverage without scaling fragility.',
  path: '/platform/test-automation',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',             path: '/' },
  { name: 'Platform',          path: '/#platform' },
  { name: 'Test Automation',   path: '/platform/test-automation' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <TestAutomationPage />
    </>
  );
}
