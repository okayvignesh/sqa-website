import DemosPage from '../../src/redesign/pages/DemosPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: 'SimplifyQA demos',
  description:
    'Short demo clips of SimplifyQA: the SimplifyQA MCP recording web, mobile, desktop, mainframe, API and database tests, and walkthroughs of the platform.',
  path: '/demos',
  absoluteTitle: true,
});

// ponytail: not in the footer or sitemap yet; add it there once the first clips are uploaded.
export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: 'Demos', path: '/demos' }]} />
      <DemosPage />
    </>
  );
}
