import {
  ShieldCheck, Building2, KeyRound, Workflow, Globe2, Layers, FileLock,
} from 'lucide-react';
import ProductPage from '../ProductPage';

export default function EnterpriseQAPage() {
  return (
    <ProductPage
      config={{
        eyebrow: 'Enterprise QA',
        eyebrowIcon: <Building2 className="w-3.5 h-3.5" />,
        title: (
          <>
            Govern quality across <span className="gradient-text">thousands of teams</span>.
          </>
        ),
        subtitle:
          'A single platform for portfolio-wide test management, automation, and release gating — with the controls regulated industries require.',
        bullets: [
          'Single-tenant, on-prem, or VPC',
          'SOC 2 · ISO 27001 · GDPR · HIPAA',
          'SSO/SAML + SCIM provisioning',
          'Role-based access control',
          'BYOK encryption at rest',
          'Audit logs + SIEM streaming',
        ],
        features: [
          { icon: <ShieldCheck className="w-4 h-4" />, title: 'Compliance built-in',  body: 'Independently audited against SOC 2 Type II and ISO 27001. GDPR and HIPAA workflows out of the box.' },
          { icon: <KeyRound className="w-4 h-4" />,    title: 'Identity at scale',    body: 'SSO via SAML/OIDC, automated provisioning via SCIM, customer-managed encryption keys.' },
          { icon: <Workflow className="w-4 h-4" />,    title: 'Portfolio rollouts',   body: 'Templates, defaults, and policy inheritance across hundreds of projects. Roll a change out once.' },
          { icon: <Layers className="w-4 h-4" />,      title: 'Governed multi-tenant', body: 'Per-team isolation with org-wide visibility for QA leaders, security, and compliance officers.' },
          { icon: <Globe2 className="w-4 h-4" />,      title: 'Regional residency',   body: 'Host data where you need it — US, EU, India, APAC. Single-tenant deployments available.' },
          { icon: <FileLock className="w-4 h-4" />,    title: 'Audit + retention',    body: 'Immutable audit logs, configurable retention policies, and one-click compliance reports.' },
        ],
        capabilityList: [
          'SAML 2.0 + OIDC SSO',
          'SCIM 2.0 user provisioning',
          'Granular RBAC (resource + action)',
          'BYOK / customer-managed keys',
          'Field-level encryption',
          'IP allow-listing',
          'Audit logs to SIEM (Splunk, Datadog)',
          'DLP-friendly export controls',
        ],
        related: [
          { label: 'Security overview',          to: '/security' },
          { label: 'Release Orchestration',      to: '/platform/release-orchestration' },
          { label: 'Insights & Reports',          to: '/platform/insights-reports' },
        ],
      }}
    />
  );
}
