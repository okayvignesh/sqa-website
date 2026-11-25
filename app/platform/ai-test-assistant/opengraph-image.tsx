import { renderOg } from '../../../src/lib/og';
import { SigAITestAssistant } from '../../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA AI Test Assistant: test cases from user stories, AI test data, and answers on why a run failed';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · AI Assistant',
    title: 'Tests, drafted in plain English.',
    subtitle:
      'Write with AI, test cases from user stories, AI DataGen for test data, and plain-English answers on why a run failed, on the AI provider you choose.',
    path: 'simplifyqa.ai/platform/ai-test-assistant',
    signature: <SigAITestAssistant />,
  });
}
