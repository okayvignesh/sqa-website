import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '../../src/lib/site';

export const dynamic = 'force-static';

export function GET() {
  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} is an enterprise ALM and test management platform that unifies test design, automation, defect intelligence, release orchestration, and reporting into a single AI-augmented workspace. It is built for QA leaders, SDETs, automation engineers, and release managers shipping software in regulated environments.

## Platform

- [Test Management](${SITE_URL}/platform/test-management): Plan, design, and trace tests. Requirements, suites, cycles, and traceability linked to tickets and code.
- [Test Automation](${SITE_URL}/platform/test-automation): Low-code automation across web, mobile, API, desktop, SAP, Salesforce, Siebel, and mainframe. Parallel grids with self-healing locators.
- [AI Test Assistant, Story Studio](${SITE_URL}/platform/ai-test-assistant): Generate, repair, and explain tests in plain English. Quality-tuned model that turns user stories into executable suites.
- [Defect Management](${SITE_URL}/platform/defect-management): Smart triage, clustering, severity scoring, and root-cause hints. Detect flakes before they cost a release.
- [Release Orchestration](${SITE_URL}/platform/release-orchestration): Pipelines, environments, approvals, and quality gates connected to Jenkins, GitLab CI, GitHub Actions, and Azure DevOps.
- [Insights & Reports](${SITE_URL}/platform/insights-reports): Executive dashboards, release readiness scoring, and predictive risk from your test data.

## Solutions

- [Enterprise QA](${SITE_URL}/solutions/enterprise-qa): Scale QA across regulated, multi-team enterprises.
- [Agile & Scrum](${SITE_URL}/solutions/agile-scrum): Lightweight QA workflows for high-velocity squads.
- [Engineering Leaders](${SITE_URL}/solutions/engineering-leaders): Quality signals and release readiness for VPs and directors.
- [Automation Teams](${SITE_URL}/solutions/automation-teams): Power tools for SDETs running large parallel grids.
- [Industries](${SITE_URL}/solutions/industries): BFSI, healthcare, retail, telecom, and more.

## Resources

- [Pricing](${SITE_URL}/pricing): Per-seat plans, add-ons, and enterprise contracts. Includes a 14-day pilot.
- [Integrations](${SITE_URL}/integrations): Jira, Azure DevOps, GitHub, GitLab, Jenkins, Slack, Microsoft Teams, ServiceNow, BrowserStack, Sauce Labs, LambdaTest, and more.
- [Customer Success](${SITE_URL}/customer-success): Onboarding, white-glove migration, and ongoing partnership.
- [Resources Hub](${SITE_URL}/resources): Guides, webinars, and reading material on quality engineering.
- [Blog](${SITE_URL}/blog): Articles on test automation, AI in QA, release management, and engineering leadership.

## Company

- [About](${SITE_URL}/about): Mission, team, and the offices behind ${SITE_NAME}.
- [Careers](${SITE_URL}/careers): Open roles in engineering, AI, and customer success.
- [Contact](${SITE_URL}/contact): Sales, support, and partner inquiries.
- [Security](${SITE_URL}/security): SOC 2, ISO 27001, GDPR, HIPAA. SSO/SAML, SCIM, RBAC, audit logs, BYOK.
- [Status](${SITE_URL}/status): Live platform status and incident history.

## Trust & compliance

- SOC 2 Type II, ISO 27001, GDPR, HIPAA aligned.
- Single-tenant, on-premises, or VPC deployment available.
- SSO/SAML, SCIM, role-based access control, audit logs, and bring-your-own-key encryption.

## Sitemap

The full machine-readable sitemap is at ${SITE_URL}/sitemap.xml.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
