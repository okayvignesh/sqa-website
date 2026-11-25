import ProjectManagementPage from '../../../src/redesign/pages/platform/ProjectManagementPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Project Management',
  description:
    'Plan epics, features, user stories and tasks, run sprints on the Sprint Board and My Board, plan releases and track defects, with two-way Jira and Azure DevOps sync.',
  path: '/platform/project-management',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',               path: '/' },
  { name: 'Platform',           path: '/#platform' },
  { name: 'Project Management', path: '/platform/project-management' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <ProjectManagementPage />
    </>
  );
}
