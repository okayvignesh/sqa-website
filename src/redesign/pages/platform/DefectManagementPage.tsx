'use client';

import {
  Bot, Bug, AlertTriangle, GitMerge, Microscope, LineChart, Layers,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function DefectManagementPage() {
  return (
    <ProductPage
      config={{
        video: 'mcp-why-failed',
        eyebrow: 'Defect Management',
        eyebrowIcon: <Bot className="w-3.5 h-3.5" />,
        title: (
          <>
            Defects, caught <span className="gradient-text">at the source</span>.
          </>
        ),
        subtitle:
          'Failed runs log defects automatically. Route them to the right team and sync both ways with Jira and Azure DevOps, all without leaving SimplifyQA, and without yet another tool.',
        bullets: [
          'Native defect tracking',
          'Automatic logging from failed runs',
          'Auto-link to failing tests',
          'Write with AI on defects',
          'Bi-directional Jira / ADO sync',
          'Audit log on every state change',
        ],
        features: [
          { icon: <Bug className="w-4 h-4" />,           title: 'Capture in context',     body: 'File defects directly from a test failure. Logs, screenshots, traces, and environment data come along for free.' },
          { icon: <Microscope className="w-4 h-4" />,    title: 'Ask why a run failed',   body: 'Ask the AI assistant why a run failed before you file or assign the defect.' },
          { icon: <Layers className="w-4 h-4" />,        title: 'Logged from failed runs', body: 'Failed automated runs log defects automatically, so nobody re-types what the execution report already shows.' },
          { icon: <AlertTriangle className="w-4 h-4" />, title: 'Write with AI',          body: 'Draft clear defect descriptions with Write with AI, on the AI provider you choose.' },
          { icon: <GitMerge className="w-4 h-4" />,      title: 'Two-way Jira / ADO',     body: 'Comments, statuses, attachments, sync both ways. Engineers stay in their tool; QA stays in theirs.' },
          { icon: <LineChart className="w-4 h-4" />,     title: 'Escape rate analytics',  body: 'Track which defects escaped to production, root-cause them, and feed lessons back into your suites.' },
        ],
        capabilityList: [
          'Custom severity matrices', 'Reproducible env capture',
          'Bulk triage + auto-assignment', 'Linked to failing tests',
          'Automatic defect logging', 'SLA tracking + escalation',
          'Mobile defect filing', 'Audit log with timeline view',
        ],
        related: [
          { label: 'Test Management',          to: '/platform/test-management' },
          { label: 'Test Automation',          to: '/platform/test-automation' },
          { label: 'Insights & Reports',       to: '/platform/insights-reports' },
        ],
      }}
    />
  );
}
