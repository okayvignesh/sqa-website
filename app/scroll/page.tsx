import ScrollPage from '../../src/redesign/pages/ScrollPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';
import { SITE_URL } from '../../src/lib/site';

export const metadata = buildMetadata({
  title: 'SimplifyQA Scroll | AI-native documentation for every team',
  description:
    'Scroll is an AI-native documentation platform for every team: product, engineering, QA, design, sales, ops. A real-time collaborative wiki with live co-editing, full document version history, AI writing, semantic search, and diagrams. For SimplifyQA teams, live test cases and execution reports embed as first-class blocks.',
  path: '/scroll',
  image: '/scroll/opengraph-image',
  absoluteTitle: true,
});

// Product-scoped SoftwareApplication JSON-LD - sharpens rich-result cards on
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
    'AI-native documentation platform with real-time collaboration, document version history, semantic search, MCP-powered AI writing, diagram generation, and QA-native blocks for teams on SimplifyQA.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', category: 'Free trial' },
  featureList: [
    'Real-time collaborative editing with live cursors',
    'Document version history with restore',
    'AI writing, tone control, and summarization',
    'AI diagram generation (Mermaid)',
    'Semantic search over pages and spaces',
    'Grounded Q&A with citations',
    'Wiki-linked knowledge base with automatic backlinks',
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
