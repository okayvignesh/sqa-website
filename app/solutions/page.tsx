import SolutionsPage from '../../src/redesign/pages/SolutionsPage';
import { buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Solutions',
  description:
    'Purpose-built solutions for enterprise QA, agile teams, engineering leaders, and regulated industries.',
  path: '/solutions',
});

export default function Page() {
  return <SolutionsPage />;
}
