import EnterpriseQAPage from '../../../src/redesign/pages/solutions/EnterpriseQAPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'Enterprise QA',
  description:
    'Govern, scale, and modernise QA across thousands of testers, without losing speed or compliance.',
  path: '/solutions/enterprise-qa',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',          path: '/' },
  { name: 'Solutions',      path: '/solutions' },
  { name: 'Enterprise QA',  path: '/solutions/enterprise-qa' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <EnterpriseQAPage />
    </>
  );
}
