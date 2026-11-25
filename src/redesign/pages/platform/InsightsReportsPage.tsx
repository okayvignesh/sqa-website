'use client';

import {
  LineChart, BarChart3, PieChart, Gauge, FileText, ShieldCheck, TrendingUp,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function InsightsReportsPage() {
  return (
    <ProductPage
      config={{
        video: 'dashboards',
        eyebrow: 'Insights & Reports',
        eyebrowIcon: <LineChart className="w-3.5 h-3.5" />,
        title: (
          <>
            Quality, in <span className="gradient-text">real time</span>.
          </>
        ),
        subtitle:
          'Built-in dashboards, release readiness, and step-by-step execution reports, straight from your test data, not from a spreadsheet someone updates on Fridays.',
        bullets: [
          'Pass rate, flake rate, escape rate',
          'Per-team and per-service KPIs',
          'About 80 ready-made charts',
          'Step-by-step execution reports',
          'Export to PDF, Word, Excel',
          'Schedule + email reports',
        ],
        features: [
          { icon: <Gauge className="w-4 h-4" />,       title: 'Release readiness score', body: 'A single number that rolls up coverage, flake, defect density, and historical regressions. Show it to execs; let the team act on it.' },
          { icon: <BarChart3 className="w-4 h-4" />,   title: 'Quality KPIs',            body: 'Pass rate, flake rate, escape rate, MTTR, and time-to-detect, sliced by team, service, release, or environment.' },
          { icon: <PieChart className="w-4 h-4" />,    title: 'Custom dashboards',       body: 'Drag-and-drop widgets, saved views per role, and shared dashboards. Set what the CEO sees; let leads dig deeper.' },
          { icon: <TrendingUp className="w-4 h-4" />, title: 'Defects from failed runs', body: 'Failed runs log defects automatically, so the numbers on your dashboards reflect what actually broke.' },
          { icon: <FileText className="w-4 h-4" />,    title: 'Audit-ready reports',     body: 'One-click compliance reports for SOX, HIPAA, FDA, and internal QMS. Schedule and email them to stakeholders.' },
          { icon: <ShieldCheck className="w-4 h-4" />, title: 'Real-time, all the time', body: 'No nightly ETLs. The dashboards reflect what\'s happening right now, across every team and pipeline.' },
        ],
        capabilityList: [
          'Pre-built executive dashboards', 'Custom widget library',
          'Per-team scorecards',           'Trend charts (90-day, 1-year)',
          'PDF / Excel / Word exports',    'Scheduled email reports',
          'Webhook + Slack push',           'API access to raw metrics',
        ],
        related: [
          { label: 'Release Orchestration',  to: '/platform/release-orchestration' },
          { label: 'Defect Management',      to: '/platform/defect-management' },
          { label: 'AI Test Assistant',       to: '/platform/ai-test-assistant' },
        ],
      }}
    />
  );
}
