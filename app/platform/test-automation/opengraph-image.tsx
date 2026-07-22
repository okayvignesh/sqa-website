import { renderOg } from '../../../src/lib/og';
import { SigTestAutomation } from '../../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA Test Automation — self-healing tests across web, mobile, API, and desktop';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Automation',
    title: 'Self-healing at scale.',
    subtitle:
      'Low-code automation across web, mobile, API, desktop, SAP, and Salesforce. Parallel grids, self-healing locators.',
    path: 'simplifyqa.ai/platform/test-automation',
    signature: <SigTestAutomation />,
  });
}
