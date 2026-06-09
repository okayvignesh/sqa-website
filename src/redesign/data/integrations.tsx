// Integration catalog — every entry points to a properly-colored brand SVG
// hosted on a reliable CDN. Sources chosen per brand:
//
//   • devicon (jsDelivr) — multi-color official logos (preferred when available)
//   • simpleicons.org    — brand-colored silhouettes (falls back here)
//   • svgl.app           — multi-color logos for brands missing from the two above
//                          (notably AWS and Microsoft Teams, which Simple Icons
//                          removed for trademark reasons).
//
// All URLs verified to return HTTP 200 with valid SVG content.

export type IntegrationCategory =
  | 'Project'
  | 'SCM'
  | 'CI/CD'
  | 'Chat'
  | 'Cloud'
  | 'Identity'
  | 'Testing'
  | 'Observability'
  | 'Automation';

export type Integration = {
  name: string;
  src: string;
  category: IntegrationCategory;
};

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;
const simpleicons = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
const svgl = (file: string) => `https://svgl.app/library/${file}`;

export const integrations: Integration[] = [
  // Project management
  { name: 'Jira',           category: 'Project',       src: devicon('jira') },
  { name: 'Linear',         category: 'Project',       src: simpleicons('linear') },
  { name: 'Trello',         category: 'Project',       src: devicon('trello') },
  { name: 'Asana',          category: 'Project',       src: simpleicons('asana') },
  { name: 'Notion',         category: 'Project',       src: devicon('notion') },
  { name: 'ClickUp',        category: 'Project',       src: simpleicons('clickup') },
  { name: 'Confluence',     category: 'Project',       src: devicon('confluence') },
  { name: 'Atlassian',      category: 'Project',       src: simpleicons('atlassian') },

  // Source control
  { name: 'GitHub',         category: 'SCM',           src: devicon('github') },
  { name: 'GitLab',         category: 'SCM',           src: devicon('gitlab') },
  { name: 'Bitbucket',      category: 'SCM',           src: devicon('bitbucket') },

  // CI/CD
  { name: 'Jenkins',        category: 'CI/CD',         src: devicon('jenkins') },
  { name: 'CircleCI',       category: 'CI/CD',         src: simpleicons('circleci') },
  { name: 'Azure DevOps',   category: 'CI/CD',         src: devicon('azuredevops') },

  // Chat
  { name: 'Slack',          category: 'Chat',          src: devicon('slack') },
  { name: 'Microsoft Teams', category: 'Chat',         src: svgl('microsoft-teams.svg') },
  { name: 'Google Chat',    category: 'Chat',          src: simpleicons('googlechat') },

  // Cloud / infra
  { name: 'AWS',            category: 'Cloud',         src: svgl('aws_light.svg') },
  { name: 'Microsoft Azure', category: 'Cloud',        src: devicon('azure') },
  { name: 'Google Cloud',   category: 'Cloud',         src: devicon('googlecloud') },
  { name: 'Docker',         category: 'Cloud',         src: devicon('docker') },
  { name: 'Kubernetes',     category: 'Cloud',         src: devicon('kubernetes') },

  // Identity
  { name: 'Okta',           category: 'Identity',      src: devicon('okta') },

  // Testing
  { name: 'Postman',        category: 'Testing',       src: devicon('postman') },
  { name: 'Selenium',       category: 'Testing',       src: devicon('selenium') },
  { name: 'Cypress',        category: 'Testing',       src: simpleicons('cypress') },
  { name: 'Playwright',     category: 'Testing',       src: devicon('playwright') },
  { name: 'BrowserStack',   category: 'Testing',       src: devicon('browserstack') },
  { name: 'Sauce Labs',     category: 'Testing',       src: simpleicons('saucelabs') },

  // Observability
  { name: 'Datadog',        category: 'Observability', src: devicon('datadog') },
  { name: 'Splunk',         category: 'Observability', src: simpleicons('splunk') },

  // Automation
  { name: 'Zapier',         category: 'Automation',    src: simpleicons('zapier') },
];

export const integrationCategories: IntegrationCategory[] = [
  'Project', 'SCM', 'CI/CD', 'Chat', 'Cloud', 'Identity', 'Testing', 'Observability', 'Automation',
];
