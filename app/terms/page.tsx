import LegalPage from '../../src/redesign/pages/LegalPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'The terms governing use of the SimplifyQA platform and website.',
  path: '/terms',
});

export default function Page() {
  return <LegalPage kind="terms" />;
}
