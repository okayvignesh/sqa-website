import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, Home, LifeBuoy, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'We could not find the page you were looking for. Try one of the quick links, or jump back to the SimplifyQA homepage.',
  robots: { index: false, follow: true },
};

const QUICK_LINKS = [
  { label: 'Platform',          href: '/platform/test-management', desc: 'Test management, automation, AI, reports.' },
  { label: 'Pricing',           href: '/pricing',                  desc: 'Plans, add-ons, and enterprise.' },
  { label: 'Customer success',  href: '/customer-success',         desc: 'Onboarding, migration, partnership.' },
  { label: 'Blog',              href: '/blog',                     desc: 'Writing on quality engineering.' },
  { label: 'Request demo',      href: '/request-demo',             desc: 'Walkthrough with the team.' },
  { label: 'Contact',           href: '/contact',                  desc: 'Sales, support, partners.' },
];

export default function NotFound() {
  return (
    <main className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-32 -left-20 w-[620px] h-[620px] rounded-full bg-brand-soft blur-3xl opacity-50" />
        <div className="absolute bottom-0 -right-20 w-[520px] h-[520px] rounded-full bg-brand-soft blur-3xl opacity-40" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-50 border border-brand-100 text-[11.5px] font-semibold uppercase tracking-wider text-brand-700">
            <Compass className="w-3.5 h-3.5" /> 404 · Off the map
          </div>

          <h1 className="mt-6 font-display text-display-lg text-ink-900 text-balance">
            That page wandered off.
          </h1>

          <p className="mt-5 text-[17px] text-ink-500 leading-relaxed max-w-xl">
            The URL might be mistyped, the page may have moved, or it never existed. Either way —
            here are the most useful places to go next.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/" className="btn-primary">
              <Home className="w-4 h-4" /> Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-ink-900/[0.08] bg-white text-ink-800 text-[14px] font-semibold hover:text-ink-900"
            >
              <LifeBuoy className="w-4 h-4" /> Tell us what you were looking for
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-500">
            <Search className="w-3.5 h-3.5" /> Try one of these
          </div>

          <ul className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="group block rounded-2xl bg-white border border-ink-900/[0.06] p-5 lift"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[14.5px] font-semibold text-ink-900">{l.label}</span>
                    <ArrowRight className="w-4 h-4 text-ink-400 group-hover:text-brand-700 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="mt-1.5 text-[13px] text-ink-500 leading-relaxed">{l.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
