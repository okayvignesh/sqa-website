import { renderOg } from '../../src/lib/og';
import { SigCustomerSuccess } from '../../src/lib/og-signatures';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'SimplifyQA customer success — how Fortune 100 quality teams ship faster';

export default function OgImage() {
  return renderOg({
    eyebrow: 'Customer Success',
    title: 'How Fortune 100 teams ship faster.',
    subtitle:
      'Cut regression cycles, scale automation, release with confidence. White-glove onboarding, migration, and partnership.',
    path: 'simplifyqa.ai/customer-success',
    signature: <SigCustomerSuccess />,
  });
}
