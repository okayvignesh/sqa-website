import SolutionsPage from '../../src/redesign/pages/SolutionsPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Solutions',
  description:
    'Purpose-built solutions for enterprise QA, agile teams, engineering leaders, and regulated industries.',
  path: '/solutions',
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions' }]} />
      <SolutionsPage />
    </>
  );
}
