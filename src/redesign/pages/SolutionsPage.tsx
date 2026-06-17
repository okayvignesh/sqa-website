import { motion } from 'framer-motion';
import {
  ArrowRight, Bot, Building2, Cpu, FlaskConical, GitBranch, LayoutDashboard,
  LineChart, ShieldCheck, Sparkles, Users, Workflow, Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Container, Eyebrow, GradientOrb, Reveal, RevealGroup, fadeUp,
} from '../../design';
import CTA from '../sections/CTA';

type Audience = {
  id: string;
  eyebrow: string;
  title: string;
  blurb: string;
  bullets: { icon: React.ReactNode; t: string; d: string }[];
  ctaTo: string;
};

const audiences: Audience[] = [
  {
    id: 'enterprise',
    eyebrow: 'Enterprise QA',
    title: 'Govern quality across 1000+ teams.',
    blurb: 'A single platform for portfolio-wide test management, automation, and release gating — with the controls regulated industries require.',
    bullets: [
      { icon: <ShieldCheck className="w-3.5 h-3.5" />, t: 'Compliance built in',  d: 'SOC 2, ISO 27001, GDPR, HIPAA — single-tenant, on-prem, or VPC.' },
      { icon: <Users className="w-3.5 h-3.5" />,       t: 'Role-based governance', d: 'Granular RBAC, SCIM provisioning, audit logs, SIEM streaming.' },
      { icon: <Workflow className="w-3.5 h-3.5" />,    t: 'Portfolio rollouts',    d: 'Template suites, environments, and approval flows at scale.' },
    ],
    ctaTo: '/request-demo',
  },
  {
    id: 'automation-teams',
    eyebrow: 'Automation Teams',
    title: 'Replace fragile scripts with intelligence.',
    blurb: 'Author once; run anywhere. Self-healing automation across web, mobile, API, mainframe, SAP, Salesforce, and Siebel — backed by AI Studio.',
    bullets: [
      { icon: <Zap className="w-3.5 h-3.5" />,         t: 'Low-code authoring',    d: 'A visual canvas your QA team can drive — no Selenium expertise required.' },
      { icon: <Bot className="w-3.5 h-3.5" />,         t: 'Self-healing locators', d: 'AI keeps suites green across UI drift and frontend rewrites.' },
      { icon: <Cpu className="w-3.5 h-3.5" />,         t: 'Parallel grids',         d: 'Scale to 1000s of nodes across BrowserStack, Sauce, LambdaTest, or your own.' },
    ],
    ctaTo: '/request-demo',
  },
  {
    id: 'leaders',
    eyebrow: 'Engineering Leaders',
    title: 'Real-time quality, end-to-end.',
    blurb: 'Executive dashboards, release readiness scoring, and predictive risk — straight from your test data, not from a spreadsheet.',
    bullets: [
      { icon: <LayoutDashboard className="w-3.5 h-3.5" />, t: 'Quality KPIs',         d: 'Pass rate, escape rate, flake rate, MTTR — by team, service, release.' },
      { icon: <LineChart className="w-3.5 h-3.5" />,       t: 'Predictive risk',      d: 'AI flags releases likely to regress before code freeze.' },
      { icon: <GitBranch className="w-3.5 h-3.5" />,       t: 'Release readiness',    d: 'Quality gates wired into Jenkins, GitLab CI, GitHub Actions, Azure DevOps.' },
    ],
    ctaTo: '/request-demo',
  },
  {
    id: 'agile',
    eyebrow: 'Agile / Scrum',
    title: 'Plan sprints around quality, not the other way.',
    blurb: 'Native two-way sync with Jira, Linear, and Azure DevOps. Tests live next to the user story — and follow it through every status change.',
    bullets: [
      { icon: <FlaskConical className="w-3.5 h-3.5" />, t: 'Story-linked tests', d: 'Every requirement carries its tests through the sprint lifecycle.' },
      { icon: <Sparkles className="w-3.5 h-3.5" />,     t: 'AI test drafting',   d: 'Paste a user story; get coverage in seconds.' },
      { icon: <Workflow className="w-3.5 h-3.5" />,     t: 'Sprint dashboards',  d: 'See test progress live in your standup — without leaving Jira.' },
    ],
    ctaTo: '/request-demo',
  },
];

const platform: { eyebrow: string; title: string; desc: string; icon: React.ReactNode; hash: string }[] = [
  { eyebrow: 'Test Management',       title: 'Plan, design and trace.',          desc: 'Requirements, suites, cycles, with native traceability.', icon: <FlaskConical className="w-4 h-4" />, hash: '#test-management' },
  { eyebrow: 'Test Automation',       title: 'Low-code automation.',             desc: 'Web, mobile, API, mainframe, SAP, Salesforce, Siebel.',  icon: <Zap className="w-4 h-4" />, hash: '#automation' },
  { eyebrow: 'AI Test Assistant',     title: 'Generate, repair, explain.',        desc: 'Tuned on quality data. Grounded in your workflows.',    icon: <Sparkles className="w-4 h-4" />, hash: '#ai' },
  { eyebrow: 'Defect Intelligence',   title: 'Smart triage on autopilot.',        desc: 'Clustering, severity scoring, root-cause hints.',       icon: <Bot className="w-4 h-4" />, hash: '#defects' },
  { eyebrow: 'Release Orchestration', title: 'Gate every release with quality.', desc: 'Pipelines, environments, approvals, quality gates.',     icon: <GitBranch className="w-4 h-4" />, hash: '#release' },
  { eyebrow: 'Insights & Reports',    title: 'Quality, in real time.',            desc: 'Executive dashboards, predictive risk, KPIs.',          icon: <LineChart className="w-4 h-4" />, hash: '#insights' },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 pb-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.4} />
          <GradientOrb className="-top-32 -right-20" color="rose" size={560} opacity={0.35} />
        </div>

        <Container size="wide">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <Eyebrow icon={<Building2 className="w-3.5 h-3.5" />}>Solutions</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-display-xl text-ink-900 text-balance">
                Built for every team that <span className="gradient-text">ships quality</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[18px] leading-relaxed text-ink-500 max-w-2xl mx-auto">
                Whether you're a 5-person QA team or a global engineering org of 10,000 —
                SimplifyQA bends to fit your structure, not the other way around.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to="/request-demo" className="btn-primary h-12 px-6 text-[15px]">
                  Book a demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="#audiences" className="btn-ghost h-12 px-6 text-[15px]">
                  Explore by role
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Platform tiles */}
      <section id="platform" className="relative py-20 sm:py-24 bg-surface-soft">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>The Platform</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                Six capabilities. One intelligent platform.
              </h2>
            </Reveal>
          </div>

          <RevealGroup className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {platform.map((p) => (
              <motion.div
                key={p.eyebrow}
                id={p.hash.slice(1)}
                variants={fadeUp}
                className="group rounded-3xl bg-white border border-ink-900/[0.06] p-7 lift relative overflow-hidden"
              >
                <div aria-hidden className="absolute -top-20 -right-20 w-44 h-44 bg-brand-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <span className="grid place-items-center w-11 h-11 rounded-2xl bg-brand-50 text-brand-700 border border-brand-100">
                    {p.icon}
                  </span>
                  <div className="mt-5 text-[11.5px] font-semibold uppercase tracking-wider text-brand-700">{p.eyebrow}</div>
                  <h3 className="mt-2 font-display text-[20px] text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] text-ink-500 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Audiences — alternating layout */}
      <section id="audiences" className="relative py-24 sm:py-28 bg-white">
        <Container size="wide">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow icon={<Users className="w-3.5 h-3.5" />}>By role</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-display-md text-ink-900 text-balance">
                The way your team works, supported.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 space-y-24">
            {audiences.map((a, i) => (
              <div key={a.id} id={a.id}>
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <Reveal>
                      <Eyebrow>{a.eyebrow}</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.05}>
                      <h3 className="mt-4 font-display text-3xl sm:text-4xl text-ink-900 tracking-tight text-balance">
                        {a.title}
                      </h3>
                    </Reveal>
                    <Reveal delay={0.08}>
                      <p className="mt-4 text-[16px] text-ink-500 leading-relaxed max-w-xl">
                        {a.blurb}
                      </p>
                    </Reveal>
                    <RevealGroup className="mt-7 space-y-3" delay={0.08}>
                      {a.bullets.map((b) => (
                        <motion.div
                          key={b.t}
                          variants={fadeUp}
                          className="flex items-start gap-3 rounded-2xl p-4 border border-ink-900/[0.06] bg-white lift"
                        >
                          <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-50 text-brand-700 border border-brand-100 shrink-0">
                            {b.icon}
                          </span>
                          <div>
                            <div className="text-[14.5px] font-semibold text-ink-900">{b.t}</div>
                            <div className="mt-1 text-[13.5px] text-ink-500 leading-relaxed">{b.d}</div>
                          </div>
                        </motion.div>
                      ))}
                    </RevealGroup>
                    <Reveal delay={0.2}>
                      <div className="mt-7">
                        <Link to={a.ctaTo} className="btn-primary">
                          Book a tailored demo <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </Reveal>
                  </div>

                  <Reveal delay={0.12}>
                    <AudienceVisual id={a.id} />
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}

/* ---------- Per-audience visual mockups ---------- */
function AudienceVisual({ id }: { id: string }) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-brand-soft -z-10" />
      <div className="rounded-3xl glass-strong shadow-plate overflow-hidden">
        <div className="px-5 py-3 border-b border-ink-900/[0.06] bg-white/70 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="text-[11.5px] font-medium text-ink-500 capitalize">{id.replace(/-/g, ' ')}</div>
        </div>

        <div className="p-5 sm:p-6 bg-gradient-to-b from-white to-surface-warm">
          {id === 'enterprise' && <EnterpriseMockup />}
          {id === 'automation-teams' && <AutomationMockup />}
          {id === 'leaders' && <LeadersMockup />}
          {id === 'agile' && <AgileMockup />}
        </div>
      </div>
    </div>
  );
}

function EnterpriseMockup() {
  const rows = [
    { team: 'Payments',   policies: 'SOC 2 · HIPAA · BYOK',     status: 'Active' },
    { team: 'Wallets',    policies: 'SOC 2 · GDPR · SSO',       status: 'Active' },
    { team: 'KYC',        policies: 'ISO 27001 · GDPR',         status: 'Active' },
    { team: 'Insights',   policies: 'SOC 2',                    status: 'Pending audit' },
  ];
  return (
    <div className="space-y-3">
      <div className="text-[12px] font-semibold text-ink-700">Governance · 42 teams</div>
      <div className="rounded-2xl border border-ink-900/[0.06] bg-white overflow-hidden">
        {rows.map((r, i) => (
          <div key={r.team} className={`px-4 py-3 grid grid-cols-12 gap-3 text-[12.5px] items-center ${i ? 'border-t border-ink-900/[0.05]' : ''}`}>
            <span className="col-span-3 text-ink-800 font-medium">{r.team}</span>
            <span className="col-span-7 text-ink-500">{r.policies}</span>
            <span className={`col-span-2 justify-self-end text-[11px] px-2 py-0.5 rounded-full border ${r.status === 'Active' ? 'text-emerald-700 bg-emerald-50 border-emerald-100' : 'text-amber-700 bg-amber-50 border-amber-100'}`}>{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[12px] font-semibold text-ink-700">
        <span>Suite · payments / checkout-e2e</span>
        <span className="text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5 text-[11px]">All green</span>
      </div>
      <div className="rounded-2xl border border-ink-900/[0.06] bg-white p-4 grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`h-12 rounded-lg ${i === 3 ? 'bg-brand-50 border border-brand-100' : 'bg-ink-50 border border-ink-100'} flex items-center justify-center text-[11px] font-medium text-ink-600`}>
            {`step ${i + 1}`}
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-3 text-[12.5px] text-ink-700">
        <span className="font-semibold text-brand-700">Self-healed:</span> selector for #checkout-cta auto-repaired after frontend rewrite.
      </div>
    </div>
  );
}

function LeadersMockup() {
  const vals = [38, 52, 41, 68, 60, 84, 91];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          ['Pass rate', '98.4%'],
          ['Flake rate', '0.6%'],
          ['Escape rate', '1.8%'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white border border-ink-900/[0.06] p-3">
            <div className="text-[11px] uppercase tracking-wider text-ink-400 font-medium">{k}</div>
            <div className="mt-1 font-display text-lg text-ink-900">{v}</div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl border border-ink-900/[0.06] bg-white p-3">
        <div className="text-[12px] font-semibold text-ink-700 mb-2">Release readiness · v4.18</div>
        <div className="flex items-end gap-1.5 h-20">
          {vals.map((v, i) => (
            <div key={i} className="flex-1 rounded-md bg-gradient-to-t from-brand-200 to-brand-600" style={{ height: `${v}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AgileMockup() {
  return (
    <div className="space-y-3">
      <div className="text-[12px] font-semibold text-ink-700">Sprint 42 · QA progress</div>
      {[
        ['EPIC-218 · 3DS auth', 86],
        ['EPIC-231 · KYC limits', 64],
        ['EPIC-244 · Refunds', 41],
      ].map(([l, v]) => (
        <div key={String(l)} className="rounded-xl border border-ink-900/[0.06] bg-white p-3">
          <div className="flex items-center justify-between text-[12px] text-ink-700">
            <span>{l}</span>
            <span className="font-semibold text-ink-900">{v}%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-ink-100 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-700" style={{ width: `${v}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
