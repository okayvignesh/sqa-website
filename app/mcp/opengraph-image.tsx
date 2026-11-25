import { renderOg } from '../../src/lib/og';
import { SigAgentDark } from '../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA MCP: use SimplifyQA from your AI assistant';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Product · MCP',
    title: 'Use SimplifyQA from your AI assistant.',
    subtitle:
      'Create test cases from user stories, record and run tests on seven technologies, and find out why a run failed. You review every recording before it is saved.',
    path: 'simplifyqa.ai/mcp',
    theme: 'dark',
    darkInk: '#08111F',
    accent: '#38BDF8',
    signature: <SigAgentDark />,
  });
}
