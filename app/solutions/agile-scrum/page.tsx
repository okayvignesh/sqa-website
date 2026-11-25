import AgileScrumPage from '../../../src/redesign/pages/solutions/AgileScrumPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Agile & Scrum',
  description:
    'Sprint-ready test plans, in-sprint automation, and shift-left quality for agile teams.',
  path: '/solutions/agile-scrum',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',         path: '/' },
  { name: 'Solutions',     path: '/solutions' },
  { name: 'Agile & Scrum', path: '/solutions/agile-scrum' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <AgileScrumPage />
    </>
  );
}
