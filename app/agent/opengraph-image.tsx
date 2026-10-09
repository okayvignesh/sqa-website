import { renderOg } from '../../src/lib/og';
import { SigAgentDark } from '../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA MCP: an MCP server for any AI client';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Product · MCP',
    title: 'Run all of SimplifyQA from your AI.',
    subtitle:
      'A SimplifyQA MCP server that plugs into any AI. It performs every SimplifyQA action, records the tests, runs them, and files the defects.',
    path: 'simplifyqa.ai/agent',
    theme: 'dark',
    darkInk: '#08111F',
    accent: '#38BDF8',
    signature: <SigAgentDark />,
  });
}
