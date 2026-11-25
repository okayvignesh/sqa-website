import { renderOg } from '../../../src/lib/og';
import { SigTestAutomation } from '../../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA Test Automation: low-code tests across eight technologies';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Automation',
    title: 'One test, eight technologies.',
    subtitle:
      'Low-code automation across Web, Android, iOS, Desktop, Mainframe, SAP, API and Database. Parallel runs, rule-based self-healing locators.',
    path: 'simplifyqa.ai/platform/test-automation',
    signature: <SigTestAutomation />,
  });
}
