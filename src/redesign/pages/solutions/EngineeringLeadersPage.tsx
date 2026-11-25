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
          'See what\'s shipping, what\'s blocked, and what\'s failing, without chasing spreadsheets or scheduling another sync.',
        bullets: [
          'Executive dashboards',
          'Release readiness scoring',
          'Automatic defects from failed runs',
          'Quality KPIs by team / service',
          'Step-by-step execution reports',
          'Scheduled exec emails',
        ],
        features: [
          { icon: <Gauge className="w-4 h-4" />,         title: 'One score that matters',  body: 'Release readiness rolls up coverage, pass rate and open defects from your own test data.' },
          { icon: <TrendingUp className="w-4 h-4" />,    title: 'Built-in dashboards',      body: 'About 80 ready-made charts across tests, runs, defects and releases.' },
          { icon: <Users className="w-4 h-4" />,         title: 'Per-team accountability',  body: 'Scorecards by team, by service, by sprint. Trends over 90-day and 1-year windows.' },
          { icon: <GitBranch className="w-4 h-4" />,     title: 'Wired to your CI/CD',      body: 'Any CI tool starts runs through the REST API, and GitHub Actions is supported. Results land back in SimplifyQA.' },
          { icon: <ShieldCheck className="w-4 h-4" />,   title: 'Compliance-grade',         body: 'Reports auditors actually accept: signed, time-stamped, and traceable back to the test evidence.' },
          { icon: <AlertTriangle className="w-4 h-4" />, title: 'Escape rate visibility',   body: 'Track defects that escaped to production and link them back to the tests and stories they belong to.' },
        ],
        capabilityList: [
          'Live executive dashboards',
          'Per-team scorecards',
          'Automatic defect logging',
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
