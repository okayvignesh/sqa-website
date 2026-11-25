import AgentPage from '../../src/redesign/pages/AgentPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';
import { SITE_URL } from '../../src/lib/site';

export const metadata = buildMetadata({
  title: 'SimplifyQA MCP | Test from your AI assistant',
  description:
    'Use SimplifyQA from Claude, Cursor, VS Code with Copilot, Windsurf, Codex or Devin. Create test cases from user stories, record and run tests on seven technologies, and find out why a run failed. You review every recording before it is saved.',
  path: '/mcp',
  image: '/mcp/opengraph-image',
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
  operatingSystem: 'Web',
  url: `${SITE_URL}/mcp`,
  publisher: { '@type': 'Organization', name: 'SimplifyQA', url: SITE_URL },
  description:
    'Use SimplifyQA from Claude, Cursor, VS Code with Copilot, Windsurf, Codex or Devin. Create test cases from user stories, record and run tests on seven technologies, and find out why a run failed. You review every recording before it is saved.',
  featureList: [
    'MCP server for Claude, Cursor, VS Code with Copilot, Windsurf, Codex and Devin',
    'Create test cases from user stories',
    'Record and run tests on Web, Android, iOS, Desktop, Mainframe, API and Database',
    'Write custom methods while recording',
    'Find out why a run failed',
    'You review every recording before it is saved',
  ],
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'SimplifyQA MCP', path: '/mcp' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <AgentPage />
    </>
  );
}
