import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA Zero-Touch Agent — an MCP server for any AI';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Product · Zero-Touch Agent',
    title: 'Give your AI a URL. Get a tested app back.',
    subtitle:
      'An MCP server that plugs into Claude, ChatGPT, Cursor, and any AI client. It explores your app, writes the tests, runs them, and files the defects.',
    accent: '#38BDF8',
    accentTo: '#818CF8',
  });
}
