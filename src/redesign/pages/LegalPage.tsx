import type { ReactNode } from 'react';
import { FileText, ScrollText, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Container, Eyebrow, GradientOrb, Reveal,
} from '../../design';

type LegalSection = { heading: string; body: ReactNode };

type LegalConfig = {
  kind: 'privacy' | 'terms' | 'security' | 'status';
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated?: string;
  icon: ReactNode;
  sections: LegalSection[];
};

const configs: Record<LegalConfig['kind'], LegalConfig> = {
  privacy: {
    kind: 'privacy',
    eyebrow: 'Privacy',
    title: 'Privacy notice',
    subtitle:
      "How SimplifyQA collects, uses, and protects information you share with us — and the choices you have.",
    icon: <FileText className="w-3.5 h-3.5" />,
    sections: [
      { heading: 'Information we collect', body: 'Account and contact details you provide, product usage data, support communications, and (with your consent) marketing preferences. We do not sell personal data.' },
      { heading: 'How we use it',          body: 'To operate and improve the service, send service-related communications, provide support, and comply with legal obligations. Aggregated and anonymized data may be used for product analytics.' },
      { heading: 'Data residency',         body: 'Customer data is hosted in the region you select at provisioning time — currently the US, EU, India, or APAC. Enterprise customers can choose single-tenant or on-prem deployments.' },
      { heading: 'Subprocessors',          body: 'We engage a limited set of subprocessors (cloud, email, analytics). A current list is available on request.' },
      { heading: 'Your rights',            body: 'Depending on your jurisdiction you may have rights to access, rectify, port, or delete your personal data. Contact us at info@simplify3x.com for any such request.' },
      { heading: 'Contact',                body: <>For privacy questions, email <a className="text-brand-700 font-medium" href="mailto:info@simplify3x.com">info@simplify3x.com</a>.</> },
      { heading: 'Note',                    body: 'This page describes the policy in plain summary. A full, legally binding privacy policy is available on request and will replace this summary once published.' },
    ],
  },
  terms: {
    kind: 'terms',
    eyebrow: 'Terms',
    title: 'Terms of service',
    subtitle:
      'A plain-language summary of the agreement between SimplifyQA and customers. The full legal terms apply when you sign a master service agreement.',
    icon: <ScrollText className="w-3.5 h-3.5" />,
    sections: [
      { heading: 'Service description',     body: 'SimplifyQA provides ALM and test management software via SaaS, dedicated, or on-prem deployments, as specified in your order form.' },
      { heading: 'Acceptable use',           body: 'You agree not to abuse the service: no reverse engineering, no resale without permission, no use to develop a competing product, no uploading of unlawful content.' },
      { heading: 'Fees and term',            body: 'Subscription fees, billing cadence, and renewal terms are set in each customer order form. Pricing for self-serve plans is published on /pricing.' },
      { heading: 'Customer data',            body: 'You own all data you upload. We process it only to provide the service and as instructed in the agreement. Confidentiality and security commitments are spelled out in our DPA.' },
      { heading: 'Limitation of liability',  body: 'Liability is limited to the fees paid in the prior 12 months, except for breaches of confidentiality, IP infringement, and gross negligence.' },
      { heading: 'Termination',              body: 'Either party may terminate for material breach with notice. On termination, you can export your data for 30 days.' },
      { heading: 'Governing law',            body: 'Governed by the law specified in your order form, with reasonable carve-outs for local mandatory consumer protections.' },
      { heading: 'Note',                     body: 'This page is a summary for orientation only. The binding agreement is the signed MSA or click-through agreement, which will supersede this summary.' },
    ],
  },
  security: {
    kind: 'security',
    eyebrow: 'Security',
    title: 'Security at SimplifyQA',
    subtitle:
      'The controls, certifications, and engineering practices that make SimplifyQA safe to deploy in regulated environments.',
    icon: <ShieldCheck className="w-3.5 h-3.5" />,
    sections: [
      { heading: 'Certifications',        body: 'SOC 2 Type II, ISO 27001, GDPR, and HIPAA-compliant deployments are available. Reports and attestation letters are available under NDA.' },
      { heading: 'Identity & access',     body: 'SAML 2.0 / OIDC single sign-on, SCIM 2.0 provisioning, granular role-based access control, IP allow-listing, MFA enforcement.' },
      { heading: 'Encryption',            body: 'TLS 1.2+ in transit, AES-256 at rest. Customer-managed keys (BYOK) available for enterprise plans.' },
      { heading: 'Network & infrastructure', body: 'Hosted on AWS / Azure across regional zones. Defense-in-depth network controls, WAF, DDoS protection, and continuous vulnerability scanning.' },
      { heading: 'Application security',  body: 'Mandatory code review, static + dynamic analysis, third-party penetration tests at least annually, and a public responsible-disclosure program.' },
      { heading: 'Audit & logging',       body: 'Immutable audit logs for every state-changing action. Stream to your SIEM (Splunk, Datadog, Sumo Logic, Elastic) via webhook or API.' },
      { heading: 'Deployment options',    body: 'Multi-tenant SaaS, single-tenant SaaS, dedicated VPC, or fully air-gapped on-prem — depending on your compliance needs.' },
      { heading: 'Incident response',     body: '24/7 on-call engineering, documented incident-response runbooks, and customer notification within contractual SLAs.' },
    ],
  },
  status: {
    kind: 'status',
    eyebrow: 'Status',
    title: 'Platform status',
    subtitle:
      'Real-time availability across the SimplifyQA platform. Subscribe to incident updates or follow the public RSS feed.',
    icon: <Activity className="w-3.5 h-3.5" />,
    sections: [],
  },
};

export default function LegalPage({ kind }: { kind: LegalConfig['kind'] }) {
  const cfg = configs[kind];

  return (
    <>
      <section className="relative pt-20 sm:pt-24 pb-16 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid" />
          <div className="absolute inset-0 bg-mesh opacity-90" />
          <GradientOrb className="-top-32 -left-20" color="brand" size={620} opacity={0.35} />
        </div>
        <Container size="sm">
          <Reveal>
            <Eyebrow icon={cfg.icon}>{cfg.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-display-md text-ink-900 text-balance">{cfg.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-500 max-w-2xl">{cfg.subtitle}</p>
          </Reveal>
        </Container>
      </section>

      {/* Status page has live indicators instead of long-form sections */}
      {kind === 'status' ? (
        <StatusBoard />
      ) : (
        <article className="relative py-12">
          <Container size="sm">
            <div className="space-y-12">
              {cfg.sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="font-display text-2xl text-ink-900">{s.heading}</h2>
                  <div className="mt-3 text-[15.5px] leading-[1.75] text-ink-700">{s.body}</div>
                </section>
              ))}
            </div>

            <div className="mt-16 pt-6 border-t border-ink-900/[0.06] flex items-center justify-between text-[13px] text-ink-400">
              <span>Questions? <Link to="/contact" className="text-brand-700 font-medium">Contact us</Link>.</span>
              <span>SimplifyQA · part of Simplify3x</span>
            </div>
          </Container>
        </article>
      )}
    </>
  );
}

function StatusBoard() {
  const services = [
    'Web Application',
    'API Gateway',
    'Test Execution Engine',
    'Reports & Analytics',
    'AI Studio',
    'Jira / ADO Integrations',
    'Notifications (Slack / Teams / Email)',
    'Public CDN',
  ];

  return (
    <section className="relative py-12 pb-20">
      <Container size="sm">
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-6 flex items-center gap-4">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700">
            <Activity className="w-5 h-5" />
          </span>
          <div>
            <div className="text-[14.5px] font-semibold text-emerald-800">All systems operational</div>
            <div className="text-[12.5px] text-ink-500">
              For the live, real-time dashboard please refer to your account status page.
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-ink-900/[0.06] bg-white overflow-hidden">
          {services.map((s, i) => (
            <div key={s} className={`px-6 py-4 flex items-center justify-between ${i ? 'border-t border-ink-900/[0.05]' : ''}`}>
              <span className="text-[14px] text-ink-800">{s}</span>
              <span className="inline-flex items-center gap-2 text-[12.5px] font-medium text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Operational
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[12.5px] text-ink-400">
          Updated continuously. For SLA reporting and historical uptime, please contact your account team.
        </p>
      </Container>
    </section>
  );
}
