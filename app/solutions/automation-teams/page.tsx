import AutomationTeamsPage from '../../../src/redesign/pages/solutions/AutomationTeamsPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'For Automation Teams',
  description:
    'A modern automation platform built for SDETs — code-or-no-code, self-healing, and CI-native.',
  path: '/solutions/automation-teams',
});

export default function Page() {
  return <AutomationTeamsPage />;
}
