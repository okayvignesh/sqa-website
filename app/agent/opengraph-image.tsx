import { renderOg } from '../../src/lib/og';
import { SigAgent } from '../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA Zero-Touch Agent — an MCP server for any AI client';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Product · Agent',
    title: 'Give your AI a URL.',
    subtitle:
      'An MCP server that plugs into any AI. It explores your app, writes the tests, runs them, files the defects.',
    path: 'simplifyqa.app/agent',
    accent: '#38BDF8',
    ink: '#08111F',
    signature: <SigAgent />,
  });
}
