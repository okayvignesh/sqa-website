import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA solutions — enterprise QA, agile teams, engineering leaders, and regulated industries';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Solutions',
    title: 'Built for the shape of your team.',
    subtitle:
      'Purpose-built solutions for enterprise QA, agile squads, engineering leaders, SDETs, and regulated industries.',
    accent: '#A78BFA',
    accentTo: '#F472B6',
  });
}
