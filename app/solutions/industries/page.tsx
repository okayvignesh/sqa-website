import IndustriesPage from '../../../src/redesign/pages/solutions/IndustriesPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Industries We Serve',
  description:
    'Banking, healthcare, retail, manufacturing — SimplifyQA fits the compliance, scale, and complexity of your industry.',
  path: '/solutions/industries',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',         path: '/' },
  { name: 'Solutions',     path: '/solutions' },
  { name: 'Industries',    path: '/solutions/industries' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <IndustriesPage />
    </>
  );
}
