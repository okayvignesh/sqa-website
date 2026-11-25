import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '../../src/lib/site';

export const dynamic = 'force-static';

export function GET() {
  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} is an enterprise ALM and test management platform that brings project management, test management, no-code test automation, defects, and reporting into one workspace, with AI built in. It is built for QA leaders, SDETs, automation engineers, and release managers.

## Platform

- [Test Management](${SITE_URL}/platform/test-management): Manual and automated test cases, review and approval, links to user stories, and e-signature on manual runs.
- [Test Automation](${SITE_URL}/platform/test-automation): About 370 no-code actions across eight technologies: Web, Android, iOS, Desktop (Windows), Mainframe, SAP, API and Database. Mix technologies in one test case. Rule-based self-healing locators for web and iOS.
- [AI Test Assistant, Story Studio](${SITE_URL}/platform/ai-test-assistant): Write with AI on stories, test cases and defects; test cases from a user story; Story Studio; AI DataGen for test data; ask the AI assistant why a run failed. Runs on your own AI model keys and chosen provider.
- [Defect Management](${SITE_URL}/platform/defect-management): Defects logged automatically from failed runs, linked to test cases and stories, with two-way Jira and Azure DevOps sync.
- [Release Orchestration](${SITE_URL}/platform/release-orchestration): Releases, local or remote agents, cloud machines or Kubernetes, parallel runs, automatic re-run of failed tests, and schedules (once, every few minutes, hourly, daily, weekly or monthly). Any CI tool starts runs through the REST API.
- [Insights & Reports](${SITE_URL}/platform/insights-reports): Step-by-step execution reports with screenshots, PDF exports, and built-in dashboards with about 80 ready-made charts.

## Products

- [Scroll](${SITE_URL}/scroll): Documentation workspace with live co-editing, version history and AI writing (AI built in), plus live SimplifyQA test case and report blocks.
- [SimplifyQA MCP](${SITE_URL}/mcp): Use SimplifyQA from your AI assistant (Claude, Cursor, VS Code with Copilot, Windsurf, Codex, Devin). Create test cases from user stories, record and run tests on seven technologies (all but SAP), write custom methods while recording, and find out why a run failed. You review every recording before it is saved. Install with npx -y simplify3x-connect.

## Solutions

- [Enterprise QA](${SITE_URL}/solutions/enterprise-qa): Scale QA across regulated, multi-team enterprises.
- [Agile & Scrum](${SITE_URL}/solutions/agile-scrum): Lightweight QA workflows for high-velocity squads.
- [Engineering Leaders](${SITE_URL}/solutions/engineering-leaders): Quality signals and release readiness for VPs and directors.
- [Automation Teams](${SITE_URL}/solutions/automation-teams): No-code automation, parallel runs and schedules for SDETs.
- [Industries](${SITE_URL}/solutions/industries): BFSI, healthcare, retail, telecom, and more.

## Resources

- [Pricing](${SITE_URL}/pricing): Per-seat plans, add-ons, and enterprise contracts. Includes a 14-day pilot.
- [Integrations](${SITE_URL}/integrations): Jira, Azure DevOps, Slack, Microsoft Teams, BrowserStack, LambdaTest and Sauce Labs (mobile device clouds), Kubernetes, Azure, and CI through the REST API (including GitHub Actions).
- [Customer Success](${SITE_URL}/customer-success): How Fortune 100 quality teams use SimplifyQA. Onboarding, white-glove migration, and ongoing partnership.
- [Resources Hub](${SITE_URL}/resources): Guides and reading material on quality engineering.
- [Blog](${SITE_URL}/blog): Articles on test automation, AI in QA, release management, and engineering leadership.

## Company

- [About](${SITE_URL}/about): Mission, team, and the offices behind ${SITE_NAME}.
- [Careers](${SITE_URL}/careers): Open roles in engineering, AI, and customer success.
- [Contact](${SITE_URL}/contact): Sales, support, and partner inquiries.
- [Security](${SITE_URL}/security): SOC 2, ISO 27001, GDPR, HIPAA. SSO/SAML, SCIM, RBAC, audit logs, BYOK.

## Trust & compliance

- SOC 2 Type II, ISO 27001, GDPR, HIPAA aligned.
- SaaS (global and India regions) or on-premise deployment.
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
