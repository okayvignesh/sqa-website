import { renderOg } from '../../src/lib/og';
import { SigSolutions } from '../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA solutions — enterprise QA, engineering leaders, automation teams, regulated industries';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Solutions',
    title: 'Built for the shape of your team.',
    subtitle:
      'Purpose-built solutions for enterprise QA, engineering leaders, automation teams, and regulated industries.',
    path: 'simplifyqa.ai/solutions',
    signature: <SigSolutions />,
  });
}
