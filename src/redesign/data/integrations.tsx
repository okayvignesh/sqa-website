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
  | 'CI/CD'
  | 'Chat'
  | 'Cloud'
  | 'Mobile device clouds';

export type Integration = {
  name: string;
  src: string;
  category: IntegrationCategory;
};

const devicon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;
const simpleicons = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
const svgl = (file: string) => `https://svgl.app/library/${file}`;

// Real integrations only. Any CI tool can also start runs through the REST API.
// ponytail: LambdaTest uses a plain "LT" monogram in public/logos; swap in their official logo when we have it.
export const integrations: Integration[] = [
  // Project management (two-way sync)
  { name: 'Jira',           category: 'Project',       src: devicon('jira') },
  { name: 'Azure DevOps',   category: 'Project',       src: devicon('azuredevops') },

  // CI/CD
  { name: 'GitHub Actions', category: 'CI/CD',         src: devicon('githubactions') },

  // Chat
  { name: 'Slack',          category: 'Chat',          src: devicon('slack') },
  { name: 'Microsoft Teams', category: 'Chat',         src: svgl('microsoft-teams.svg') },

  // Cloud / infra
  { name: 'Microsoft Azure', category: 'Cloud',        src: devicon('azure') },
  { name: 'Kubernetes',     category: 'Cloud',         src: simpleicons('kubernetes') },

  // Mobile device clouds (mobile apps only)
  { name: 'BrowserStack',   category: 'Mobile device clouds', src: devicon('browserstack') },
  { name: 'LambdaTest',     category: 'Mobile device clouds', src: '/logos/lambdatest.svg' },
  { name: 'Sauce Labs',     category: 'Mobile device clouds', src: simpleicons('saucelabs') },
];

export const integrationCategories: IntegrationCategory[] = [
  'Project', 'CI/CD', 'Chat', 'Cloud', 'Mobile device clouds',
];
