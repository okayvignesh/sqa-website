import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA Defect Management — smart triage, clustering, and root-cause hints';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Platform · Defect Management',
    title: 'Catch flakes before they cost a release.',
    subtitle:
      'Smart triage, clustering, severity scoring, root-cause hints. Bi-directional Jira and ADO sync built in.',
    accent: '#FBBF24',
    accentTo: '#FB7185',
  });
}
