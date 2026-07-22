import AgentPage from '../../src/redesign/pages/AgentPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';
import { SITE_URL } from '../../src/lib/site';

export const metadata = buildMetadata({
  title: 'SimplifyQA Zero-Touch Agent | An MCP server for any AI',
  description:
    'Give your AI a URL. Get a tested app back. An MCP server that plugs into Claude, ChatGPT, Cursor, Windsurf, and any AI you already use. Explores your app, writes the tests, runs them, files the defects.',
  path: '/agent',
});

// Product-scoped SoftwareApplication JSON-LD. Complements the site-wide entity
// with concrete integrations + capabilities for rich SERP cards.
const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SimplifyQA Zero-Touch Agent',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'MCP server for AI-driven test automation',
  operatingSystem: 'Web, MCP-compatible AI clients',
  url: `${SITE_URL}/agent`,
  publisher: { '@type': 'Organization', name: 'SimplifyQA', url: SITE_URL },
  description:
    'An MCP server that plugs into Claude, ChatGPT, Cursor, Windsurf, and any AI you already use. Explores your app, writes the tests, runs them, and files the defects.',
  featureList: [
    'MCP server for AI clients (Claude, ChatGPT, Cursor, Windsurf, and others)',
    'Autonomous app exploration and test generation',
    'Test execution with defect filing',
    'Multi-technology coverage (web, mobile, API, desktop, SAP, Salesforce)',
  ],
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Zero-Touch Agent', path: '/agent' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <AgentPage />
    </>
  );
}
