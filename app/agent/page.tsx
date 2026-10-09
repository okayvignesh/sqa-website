import AgentPage from '../../src/redesign/pages/AgentPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';
import { SITE_URL } from '../../src/lib/site';

export const metadata = buildMetadata({
  title: 'SimplifyQA MCP | An MCP server for any AI',
  description:
    'Run all of SimplifyQA from your AI. A SimplifyQA MCP server that plugs into Claude, ChatGPT, Cursor, Windsurf, and any AI you already use. Perform every SimplifyQA action, record test cases with AI, and execute them across every supported platform.',
  path: '/agent',
  image: '/agent/opengraph-image',
  absoluteTitle: true,
});

// Product-scoped SoftwareApplication JSON-LD. Complements the site-wide entity
// with concrete integrations + capabilities for rich SERP cards.
const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SimplifyQA MCP',
  applicationCategory: 'DeveloperApplication',
  applicationSubCategory: 'MCP server for AI-driven test automation',
  operatingSystem: 'Web, MCP-compatible AI clients',
  url: `${SITE_URL}/agent`,
  publisher: { '@type': 'Organization', name: 'SimplifyQA', url: SITE_URL },
  description:
    'A SimplifyQA MCP server that plugs into Claude, ChatGPT, Cursor, Windsurf, and any AI you already use. Perform every SimplifyQA action, record test cases with AI, and execute them across every supported platform.',
  featureList: [
    'MCP server for AI clients (Claude, ChatGPT, Cursor, Windsurf, and others)',
    'Perform every SimplifyQA action over MCP',
    'AI-assisted test recording across every supported platform',
    'Test execution with defect filing',
    'Multi-technology coverage (web, mobile, API, desktop, DB, mainframe, hybrid)',
  ],
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'SimplifyQA MCP', path: '/agent' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <AgentPage />
    </>
  );
}
