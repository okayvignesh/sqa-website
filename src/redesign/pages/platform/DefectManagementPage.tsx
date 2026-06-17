import {
  Bot, Bug, AlertTriangle, GitMerge, Microscope, LineChart, Layers,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function DefectManagementPage() {
  return (
    <ProductPage
      config={{
        eyebrow: 'Defect Management',
        eyebrowIcon: <Bot className="w-3.5 h-3.5" />,
        title: (
          <>
            Smart triage <span className="gradient-text">on autopilot</span>.
          </>
        ),
        subtitle:
          'Catch defects at the source. Cluster duplicates. Score severity. Route to the right team — all without leaving SimplifyQA, and without yet another tool.',
        bullets: [
          'Native defect tracking',
          'AI clustering + de-duplication',
          'Auto-link to failing tests',
          'Severity & priority scoring',
          'Bi-directional Jira / ADO sync',
          'Audit log on every state change',
        ],
        features: [
          { icon: <Bug className="w-4 h-4" />,           title: 'Capture in context',     body: 'File defects directly from a test failure. Logs, screenshots, traces, and environment data come along for free.' },
          { icon: <Microscope className="w-4 h-4" />,    title: 'Root-cause hints',       body: 'The AI scans recent commits, deploys, and similar past defects to suggest the most likely cause.' },
          { icon: <Layers className="w-4 h-4" />,        title: 'Clustering & de-dup',    body: 'Stop drowning in the same defect filed 12 times. SimplifyQA groups related reports and surfaces one canonical entry.' },
          { icon: <AlertTriangle className="w-4 h-4" />, title: 'Severity scoring',       body: 'Weight by user impact, frequency, and blast radius — not just by what the reporter ticked.' },
          { icon: <GitMerge className="w-4 h-4" />,      title: 'Two-way Jira / ADO',     body: 'Comments, statuses, attachments — sync both ways. Engineers stay in their tool; QA stays in theirs.' },
          { icon: <LineChart className="w-4 h-4" />,     title: 'Escape rate analytics',  body: 'Track which defects escaped to production, root-cause them, and feed lessons back into your suites.' },
        ],
        capabilityList: [
          'Custom severity matrices', 'Reproducible env capture',
          'Bulk triage + auto-assignment', 'Linked to failing tests',
          'Recurrence detection', 'SLA tracking + escalation',
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
