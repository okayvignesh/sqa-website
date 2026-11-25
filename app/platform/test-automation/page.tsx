import TestAutomationPage from '../../../src/redesign/pages/platform/TestAutomationPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Test Automation',
  description:
    'Low-code automation across Web, Android, iOS, Desktop, Mainframe, SAP, API and Database, with rule-based self-healing locators.',
  path: '/platform/test-automation',
  image: '/platform/test-automation/opengraph-image',
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
