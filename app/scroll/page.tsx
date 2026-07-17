import ScrollPage from '../../src/redesign/pages/ScrollPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'SimplifyQA Scroll | AI-native documentation for every team',
  description:
    'Scroll is an AI-native documentation platform for every team: product, engineering, QA, design, sales, ops. Real-time collaborative wiki with AI writing, semantic search, diagrams, decks, and, for SimplifyQA teams, live test cases and execution reports as first-class blocks.',
  path: '/scroll',
});

export default function Page() {
  return <ScrollPage />;
}
