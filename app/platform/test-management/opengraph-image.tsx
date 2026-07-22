import { renderOg } from '../../../src/lib/og';
import { SigTestManagement } from '../../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA Test Management — requirements to tests to defects, traced automatically';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Test Management',
    title: 'Trace every test.',
    subtitle:
      'Requirements, suites, cycles, and traceability, linked to tickets and code, in one collaborative workspace.',
    path: 'simplifyqa.app/platform/test-management',
    signature: <SigTestManagement />,
  });
}
