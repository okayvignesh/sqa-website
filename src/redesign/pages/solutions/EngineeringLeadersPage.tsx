'use client';

import {
  LayoutDashboard, Gauge, TrendingUp, GitBranch, Users, ShieldCheck, AlertTriangle,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function EngineeringLeadersPage() {
  return (
    <ProductPage
      config={{
        eyebrow: 'Engineering Leaders',
        eyebrowIcon: <LayoutDashboard className="w-3.5 h-3.5" />,
        title: (
          <>
            Real-time quality, <span className="gradient-text">end-to-end</span>.
          </>
        ),
        subtitle:
          'See what\'s shipping, what\'s blocked, and what\'s about to regress — without chasing spreadsheets or scheduling another sync.',
        bullets: [
          'Executive dashboards',
          'Release readiness scoring',
          'Predictive risk per release',
          'Quality KPIs by team / service',
          'CI/CD-connected reports',
          'Scheduled exec emails',
        ],
        features: [
          { icon: <Gauge className="w-4 h-4" />,         title: 'One score that matters',  body: 'Release readiness rolls up coverage, flake, defect density, and historical regressions into one number you can trust.' },
          { icon: <TrendingUp className="w-4 h-4" />,    title: 'Predictive risk',          body: 'AI flags releases that look like ones that regressed in production — before code freeze, not after.' },
          { icon: <Users className="w-4 h-4" />,         title: 'Per-team accountability',  body: 'Scorecards by team, by service, by sprint. Trends over 90-day and 1-year windows.' },
          { icon: <GitBranch className="w-4 h-4" />,     title: 'Wired to your CI/CD',      body: 'Jenkins, GitLab, GitHub Actions, Azure Pipelines — quality data flows the same direction as your code.' },
          { icon: <ShieldCheck className="w-4 h-4" />,   title: 'Compliance-grade',         body: 'Reports auditors actually accept: signed, time-stamped, and traceable back to the test evidence.' },
          { icon: <AlertTriangle className="w-4 h-4" />, title: 'Escape rate visibility',   body: 'Track defects that escaped to prod, root-cause them, and feed the lesson back into the suite automatically.' },
        ],
        capabilityList: [
          'Live executive dashboards',
          'Per-team scorecards',
          'Predictive release risk',
          'Escape-rate trending',
          'PDF / Excel / Word exports',
          'Scheduled stakeholder emails',
          'API for BI tools',
          'Audit-ready compliance reports',
        ],
        related: [
          { label: 'Insights & Reports',         to: '/platform/insights-reports' },
          { label: 'Release Orchestration',      to: '/platform/release-orchestration' },
          { label: 'Enterprise QA',              to: '/solutions/enterprise-qa' },
        ],
      }}
    />
  );
}
