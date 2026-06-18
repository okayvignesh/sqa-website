import TestManagementPage from '../../../src/redesign/pages/platform/TestManagementPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Test Management',
  description:
    'Plan releases, organise test suites, and trace requirements to results in one collaborative workspace.',
  path: '/platform/test-management',
});

export default function Page() {
  return <TestManagementPage />;
}
