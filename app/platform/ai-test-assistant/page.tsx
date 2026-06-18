import AITestAssistantPage from '../../../src/redesign/pages/platform/AITestAssistantPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'AI Test Assistant',
  description:
    'Quality-tuned LLMs that draft tests, suggest fixes, and review releases — grounded in your own product context.',
  path: '/platform/ai-test-assistant',
});

export default function Page() {
  return <AITestAssistantPage />;
}
