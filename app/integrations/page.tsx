import IntegrationsPage from '../../src/redesign/pages/IntegrationsPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Integrations',
  description:
    'Connect SimplifyQA to Jira, GitHub, Jenkins, Slack, Azure DevOps, and 50+ tools across your engineering stack.',
  path: '/integrations',
});

export default function Page() {
  return <IntegrationsPage />;
}
