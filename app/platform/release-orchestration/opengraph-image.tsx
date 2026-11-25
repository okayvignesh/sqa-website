import { renderOg } from '../../../src/lib/og';
import { SigReleaseOrchestration } from '../../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA Release Orchestration: quality gates and pipeline visibility across every release train';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Release',
    title: 'The gate that stops bad ships.',
    subtitle:
      'Quality gates and scheduled runs. Any CI tool, GitHub Actions included, starts runs through the REST API.',
    path: 'simplifyqa.ai/platform/release-orchestration',
    signature: <SigReleaseOrchestration />,
  });
}
