import LegalPage from '../../src/redesign/pages/LegalPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How SimplifyQA collects, uses, and protects your information.',
  path: '/privacy',
});

export default function Page() {
  return <LegalPage kind="privacy" />;
}
