export const siteConfig = {
  name: 'SimplifyQA',
  description: 'AI-powered test automation and ALM platform that unifies your entire testing workflow.',
  url: 'https://simplifyqa.ai',
  ogImage: 'https://simplifyqa.ai/og.png',
  links: {
    twitter: 'https://twitter.com/simplifyqa',
    linkedin: 'https://linkedin.com/company/simplify3x',
    github: 'https://github.com/simplify3x',
  },
  contact: {
    phone: '+91 8041116728',
    email: 'info@simplify3x.com',
  },
}

export const navLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
]

export const footerLinks = {
  product: [
    { label: 'Platform', href: '/platform' },
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/platform#integrations' },
  ],
  resources: [
    // { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: 'https://docs.simplifyqa.app' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}

export const features = [
  {
    title: 'Zero-Code Automation',
    headline: 'Point. Click. Automate.',
    description: 'Build comprehensive test suites without writing a single line of code. Our visual interface transforms manual testers into automation experts within days.',
    icon: 'MousePointer',
  },
  {
    title: 'Unified ALM Platform',
    headline: 'One platform. Complete visibility.',
    description: 'Requirements, test cases, defects, releases—managed in perfect sync. Eliminate tool sprawl and the friction of context-switching.',
    icon: 'Layers',
  },
  {
    title: 'AI-Native Intelligence',
    headline: 'Tests that write themselves.',
    description: 'Generate test cases from user stories automatically. Self-healing scripts adapt to UI changes. Predictive analytics surface issues before production.',
    icon: 'Sparkles',
  },
  {
    title: 'Infinite Cloud Scale',
    headline: 'Parallel execution without infrastructure.',
    description: 'Run thousands of tests simultaneously across browsers, devices, and environments. Scale instantly, pay only for execution time.',
    icon: 'Cloud',
  },
  {
    title: 'Multi-Platform Coverage',
    headline: 'Web. Mobile. API. Desktop. Mainframe.',
    description: 'One interface for every technology in your stack. Validate end-to-end user journeys that span modern and legacy systems.',
    icon: 'Monitor',
  },
  {
    title: 'Actionable Analytics',
    headline: 'Insights that drive decisions.',
    description: 'Real-time dashboards reveal test coverage gaps, flaky tests, and release readiness. Bidirectional traceability keeps everything linked.',
    icon: 'BarChart3',
  },
]

export const metrics = [
  { value: 75, suffix: '%', label: 'Test Creation Time Reduced' },
  { value: 80, suffix: '%', label: 'Regression Effort Reduced' },
  { value: 200, suffix: '%', label: 'Test Coverage Improved' },
  { value: 30, suffix: '%', label: 'Testing Costs Saved' },
]

export const trustedBy = [
  'Anthem Inc.',
  'Talview',
  'SmartKarrot',
  'enVista',
  'Etiqa Insurance',
]

export const integrations = [
  'Jira',
  'Jenkins',
  'GitHub',
  'GitLab',
  'Bitbucket',
  'Azure DevOps',
  'TeamCity',
  'Slack',
]

export const testimonials = [
  {
    quote: 'SimplifyQA transformed our QA process. What used to take 5 days now runs overnight. We automated 250,000 test cases with our existing team.',
    author: 'Director of QA',
    company: 'Enterprise Healthcare Client',
  },
]

export const pricingPlans = [
  {
    name: 'Team',
    description: 'For growing teams getting started with automation',
    features: [
      'Unlimited users',
      'Core ALM features',
      'Web & API testing',
      'Standard integrations',
      'Community support',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
  {
    name: 'Business',
    description: 'For organizations scaling test coverage across products',
    features: [
      'Everything in Team',
      'Mobile testing',
      'Cloud execution',
      'Advanced analytics',
      'Priority support',
      'SSO integration',
    ],
    cta: 'Contact Sales',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large teams requiring advanced security and support',
    features: [
      'Everything in Business',
      'Mainframe & desktop testing',
      'Unlimited cloud minutes',
      'Custom integrations',
      'Dedicated success manager',
      'SLA guarantee',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]
