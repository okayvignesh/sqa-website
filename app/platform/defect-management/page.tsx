import DefectManagementPage from '../../../src/redesign/pages/platform/DefectManagementPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Defect Management',
  description:
    'Capture, triage, and resolve defects without leaving the test workflow. Bi-directional Jira and ADO sync built-in.',
  path: '/platform/defect-management',
});

export default function Page() {
  return <DefectManagementPage />;
}
