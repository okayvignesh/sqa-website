import { renderOg } from '../../src/lib/og';
import { SigScroll } from '../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA Scroll — AI-native documentation with a live knowledge graph';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Product · Scroll',
    title: 'Docs wired like a brain.',
    subtitle:
      'AI-native documentation with a live knowledge graph, semantic search, and grounded Q&A.',
    path: 'simplifyqa.app/scroll',
    accent: '#A78BFA',
    ink: '#100826',
    signature: <SigScroll />,
  });
}
