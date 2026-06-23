import DefectManagementPage from '../../../src/redesign/pages/platform/DefectManagementPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Defect Management',
  description:
    'Capture, triage, and resolve defects without leaving the test workflow. Bi-directional Jira and ADO sync built-in.',
  path: '/platform/defect-management',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',              path: '/' },
  { name: 'Platform',           path: '/platform/defect-management' },
  { name: 'Defect Management',  path: '/platform/defect-management' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <DefectManagementPage />
    </>
  );
}
