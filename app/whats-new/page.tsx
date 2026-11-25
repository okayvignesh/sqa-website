import WhatsNewPage from '../../src/redesign/pages/WhatsNewPage';
import { BreadcrumbJsonLd, buildMetadata } from '../../src/lib/seo';

export const metadata = buildMetadata({
  title: "What's new in SimplifyQA",
  description:
    'SimplifyQA releases in 2026, from 6.1 to 6.10: SimplifyQA MCP, Scroll, e-signature on manual runs, automatic re-runs, new dashboards and more, plus what is coming next.',
  path: '/whats-new',
  absoluteTitle: true,
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd trail={[{ name: 'Home', path: '/' }, { name: "What's new", path: '/whats-new' }]} />
      <WhatsNewPage />
    </>
  );
}
