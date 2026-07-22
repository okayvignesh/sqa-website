import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA Test Automation — low-code, self-healing tests across web, mobile, API, and desktop';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Test Automation',
    title: 'Self-healing tests. Every surface.',
    subtitle:
      'Low-code automation across web, mobile, API, desktop, SAP, Salesforce, Siebel, and mainframe. Parallel grids, self-healing locators.',
    accent: '#2DD4BF',
    accentTo: '#38BDF8',
  });
}
