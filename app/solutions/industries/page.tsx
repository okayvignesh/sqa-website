import IndustriesPage from '../../../src/redesign/pages/solutions/IndustriesPage';
import { buildMetadata } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Industries We Serve',
  description:
    'Banking, healthcare, retail, manufacturing — SimplifyQA fits the compliance, scale, and complexity of your industry.',
  path: '/solutions/industries',
});

export default function Page() {
  return <IndustriesPage />;
}
