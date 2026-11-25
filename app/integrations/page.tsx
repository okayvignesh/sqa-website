import IntegrationsPage from '../../src/redesign/pages/IntegrationsPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Integrations',
  description:
    'Connect SimplifyQA to Jira, Azure DevOps, Slack, Microsoft Teams, BrowserStack, LambdaTest, Sauce Labs, Kubernetes, Azure, and any CI tool through the REST API.',
  path: '/integrations',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Integrations', path: '/integrations' }]} />
      <IntegrationsPage />
    </>
  );
}
