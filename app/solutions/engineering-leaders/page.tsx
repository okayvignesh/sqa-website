import EngineeringLeadersPage from '../../../src/redesign/pages/solutions/EngineeringLeadersPage';
import { buildMetadata, buildBreadcrumbJsonLd } from '../../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'For Engineering Leaders',
  description:
    'Executive visibility into quality, velocity, and risk across every product, team, and release train.',
  path: '/solutions/engineering-leaders',
});

const breadcrumb = buildBreadcrumbJsonLd([
  { name: 'Home',                  path: '/' },
  { name: 'Solutions',              path: '/solutions' },
  { name: 'For Engineering Leaders', path: '/solutions/engineering-leaders' },
]);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <EngineeringLeadersPage />
    </>
  );
}
