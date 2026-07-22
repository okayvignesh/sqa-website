import { OG_CONTENT_TYPE, OG_RUNTIME, OG_SIZE, renderOg } from '../../src/lib/og';

export const runtime = OG_RUNTIME;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = 'SimplifyQA customer success — how Fortune 100 quality teams ship faster';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Customer Success',
    title: 'How Fortune 100 teams ship faster.',
    subtitle:
      'Cut regression cycles, scale automation, and release with confidence. Onboarding, white-glove migration, and ongoing partnership.',
    accent: '#FB7185',
    accentTo: '#FBBF24',
  });
}
