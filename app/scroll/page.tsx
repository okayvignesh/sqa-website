import ScrollPage from '../../src/redesign/pages/ScrollPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';
import { SITE_URL } from '../../src/lib/site';

export const metadata = buildMetadata({
  title: 'SimplifyQA Scroll | AI-native documentation for every team',
  description:
    'Scroll is an AI-native documentation platform for every team: product, engineering, QA, design, sales, ops. Real-time collaborative wiki with AI writing, semantic search, diagrams, decks, and, for SimplifyQA teams, live test cases and execution reports as first-class blocks.',
  path: '/scroll',
});

// Product-scoped SoftwareApplication JSON-LD — sharpens rich-result cards on
// SERPs for "SimplifyQA Scroll" queries beyond the site-wide entity in
// app/layout.tsx.
const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SimplifyQA Scroll',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Knowledge base and documentation software',
  operatingSystem: 'Web',
  url: `${SITE_URL}/scroll`,
  publisher: { '@type': 'Organization', name: 'SimplifyQA', url: SITE_URL },
  description:
    'AI-native documentation platform with real-time collaboration, semantic search, MCP-powered AI writing, diagram and presentation generation, and QA-native blocks for teams on SimplifyQA.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', category: 'Free trial' },
  featureList: [
    'Wiki-linked knowledge base with automatic backlinks',
    'Force-directed knowledge graph',
    'Semantic search over pages and spaces',
    'Grounded Q&A with citations',
    'AI writing, tone control, and summarization',
    'AI diagram generation (Mermaid)',
    'AI presentation generation',
    'Live test case, execution report, and traceability blocks',
    'SAML SSO, RBAC, and full audit log',
  ],
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Scroll', path: '/scroll' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <ScrollPage />
    </>
  );
}
