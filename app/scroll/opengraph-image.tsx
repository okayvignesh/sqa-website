import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA Scroll — AI-native documentation for every team';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Product · Scroll',
    title: 'Your docs, wired like a brain.',
    subtitle:
      'AI-native documentation with wiki-linked knowledge graph, semantic search, and grounded Q&A. Live test cases and traceability included for SimplifyQA teams.',
    accent: '#A78BFA',
    accentTo: '#F59E0B',
  });
}
