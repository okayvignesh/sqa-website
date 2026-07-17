import CareersPage from '../../src/redesign/pages/CareersPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Careers at SimplifyQA',
  description:
    'Join SimplifyQA, help build the most intelligent ALM and test management platform on the market.',
  path: '/careers',
});

export default function Page() {
  return <CareersPage />;
}
