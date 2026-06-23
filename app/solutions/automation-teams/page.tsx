import AutomationTeamsPage from '../../../src/redesign/pages/solutions/AutomationTeamsPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'For Automation Teams',
  description:
    'A modern automation platform built for SDETs — code-or-no-code, self-healing, and CI-native.',
  path: '/solutions/automation-teams',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',                 path: '/' },
  { name: 'Solutions',             path: '/solutions' },
  { name: 'For Automation Teams',  path: '/solutions/automation-teams' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AutomationTeamsPage />
    </>
  );
}
