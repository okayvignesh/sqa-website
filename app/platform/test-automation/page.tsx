import TestAutomationPage from '../../../src/redesign/pages/platform/TestAutomationPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Test Automation',
  description:
    'Low-code, self-healing automation across web, mobile, API, and desktop. Scale coverage without scaling fragility.',
  path: '/platform/test-automation',
});

export default function Page() {
  return <TestAutomationPage />;
}
