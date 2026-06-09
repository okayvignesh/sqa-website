import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Youtube, ArrowUpRight, Sparkles } from 'lucide-react';

const col = (title: string, items: { label: string; to: string }[]) => ({ title, items });

const columns = [
  col('Platform', [
    { label: 'Test Management',  to: '/platform/test-management' },
    { label: 'Test Automation',  to: '/platform/test-automation' },
    { label: 'AI Test Assistant', to: '/platform/ai-test-assistant' },
    { label: 'Defect Management', to: '/platform/defect-management' },
    { label: 'Release Orchestration', to: '/platform/release-orchestration' },
    { label: 'Insights & Reports', to: '/platform/insights-reports' },
  ]),
  col('Solutions', [
    { label: 'Enterprise QA',       to: '/solutions/enterprise-qa' },
    { label: 'Automation Teams',    to: '/solutions/automation-teams' },
    { label: 'Engineering Leaders', to: '/solutions/engineering-leaders' },
    { label: 'Agile / Scrum',       to: '/solutions/agile-scrum' },
    { label: 'Industries',          to: '/solutions/industries' },
  ]),
  col('Resources', [
    { label: 'Docs',         to: '/resources' },
    { label: 'Blog',         to: '/blog' },
    { label: 'Case Studies', to: '/customer-success' },
    { label: 'Webinars',     to: '/resources' },
    { label: 'Integrations', to: '/integrations' },
  ]),
  col('Company', [
    { label: 'About',     to: '/about' },
    { label: 'Customers', to: '/customer-success' },
    { label: 'Pricing',   to: '/pricing' },
    { label: 'Contact',   to: '/contact' },
    { label: 'Careers',   to: '/careers' },
  ]),
];

export default function FooterV2() {
  return (
    <footer className="relative bg-white border-t border-ink-900/[0.06] overflow-hidden">
      {/* Soft brand glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-soft" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-10">
        {/* Top CTA */}
        <div className="rounded-3xl p-8 sm:p-12 glass-card overflow-hidden relative">
          <div aria-hidden className="absolute -inset-1 bg-mesh opacity-90 -z-10" />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="eyebrow"><Sparkles className="w-3.5 h-3.5" /> Start your free pilot</span>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl text-ink-900 tracking-tight">
                Bring the entire QA lifecycle <span className="gradient-text">under one intelligent platform.</span>
              </h3>
              <p className="mt-3 text-ink-500 text-[15px]">
                Enterprise-ready in days, not months. Talk to our solutions team and see SimplifyQA on your real workflows.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/request-demo" className="btn-primary">Book a demo <ArrowUpRight className="w-4 h-4" /></Link>
              <Link to="/pricing" className="btn-ghost">View pricing</Link>
            </div>
          </div>
        </div>

        {/* Link grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-flex items-center" aria-label="SimplifyQA home">
              <img src="/SimplifyQA%20logo%20Grey.png" alt="SimplifyQA" className="h-5 w-auto" draggable={false} />
            </Link>
            <p className="mt-3 text-[13.5px] text-ink-500 leading-relaxed max-w-[260px]">
              The intelligent ALM and test management platform for modern QA teams.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[Linkedin, Twitter, Youtube, Github].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center w-9 h-9 rounded-full border border-ink-900/10 text-ink-500 hover:text-brand-700 hover:border-brand-200 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                {c.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <Link to={i.to} className="text-[14px] text-ink-700 hover:text-brand-700">
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Base bar */}
        <div className="mt-14 pt-6 border-t border-ink-900/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12.5px] text-ink-400">
            © {new Date().getFullYear()} SimplifyQA. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-[12.5px] text-ink-400">
            <Link to="/privacy" className="hover:text-ink-700">Privacy</Link>
            <Link to="/terms" className="hover:text-ink-700">Terms</Link>
            <Link to="/security" className="hover:text-ink-700">Security</Link>
            <Link to="/status" className="hover:text-ink-700">Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
