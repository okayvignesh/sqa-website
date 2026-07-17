'use client';

// Integration catalog, every entry points to a properly-colored brand SVG
// hosted on a reliable CDN. Sources chosen per brand:
//
//   • devicon (jsDelivr), multi-color official logos (preferred when available)
//   • simpleicons.org   , brand-colored silhouettes (falls back here)
//   • svgl.app          , multi-color logos for brands missing from the two above
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
  | 'Testing';

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
  { name: 'Notion',         category: 'Project',       src: devicon('notion') },
  { name: 'Confluence',     category: 'Project',       src: devicon('confluence') },
  { name: 'Atlassian',      category: 'Project',       src: simpleicons('atlassian') },

  // Source control
  { name: 'GitHub',         category: 'SCM',           src: devicon('github') },
  { name: 'GitLab',         category: 'SCM',           src: devicon('gitlab') },
  { name: 'Bitbucket',      category: 'SCM',           src: devicon('bitbucket') },

  // CI/CD
  { name: 'Jenkins',        category: 'CI/CD',         src: devicon('jenkins') },
  { name: 'Azure DevOps',   category: 'CI/CD',         src: devicon('azuredevops') },

  // Chat
  { name: 'Slack',          category: 'Chat',          src: devicon('slack') },
  { name: 'Microsoft Teams', category: 'Chat',         src: svgl('microsoft-teams.svg') },

  // Cloud / infra
  { name: 'Microsoft Azure', category: 'Cloud',        src: devicon('azure') },

  // Identity
  { name: 'Okta',           category: 'Identity',      src: devicon('okta') },

  // Testing
  { name: 'Postman',        category: 'Testing',       src: devicon('postman') },
  { name: 'Selenium',       category: 'Testing',       src: devicon('selenium') },
  { name: 'BrowserStack',   category: 'Testing',       src: devicon('browserstack') },
  { name: 'Sauce Labs',     category: 'Testing',       src: simpleicons('saucelabs') },
];

export const integrationCategories: IntegrationCategory[] = [
  'Project', 'SCM', 'CI/CD', 'Chat', 'Cloud', 'Identity', 'Testing',
];
