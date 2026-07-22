import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA Release Orchestration — quality gates and pipelines across every release train';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Release Orchestration',
    title: 'Ship with the gates already closed.',
    subtitle:
      'Quality gates, smart promotion, and pipeline visibility across every release train. Jenkins, GitLab CI, GitHub Actions, Azure DevOps.',
    accent: '#34D399',
    accentTo: '#38BDF8',
  });
}
