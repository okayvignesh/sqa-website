import { renderOg } from '../../../src/lib/og';
import { SigAITestAssistant } from '../../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA AI Test Assistant — quality-tuned LLMs that draft, repair, and review tests';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · AI Assistant',
    title: 'Tests, drafted in plain English.',
    subtitle:
      'Quality-tuned LLMs that draft tests, suggest fixes, and review releases — grounded in your own product context.',
    path: 'simplifyqa.app/platform/ai-test-assistant',
    signature: <SigAITestAssistant />,
  });
}
