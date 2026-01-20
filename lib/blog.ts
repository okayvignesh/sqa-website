export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorImage?: string
  image?: string
  category: string
  tags?: string[]
  featured?: boolean
  readingTime: string
  content: string
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    slug: 'codeless-automation-architecture',
    title: 'Why Codeless Doesn\'t Mean Compromised',
    description: 'The architecture behind SimplifyQA\'s visual automation engine and how it delivers enterprise-grade reliability without requiring code.',
    date: '2025-01-15',
    author: 'Engineering Team',
    category: 'Engineering',
    tags: ['automation', 'architecture', 'codeless'],
    featured: true,
    readingTime: '8 min read',
    content: `
# Why Codeless Doesn't Mean Compromised

When people hear "codeless automation," there's often skepticism. Can a visual tool really handle complex enterprise testing scenarios? At SimplifyQA, we've spent years proving that the answer is a resounding yes.

## The Architecture Behind the Simplicity

Our visual test builder isn't just a drag-and-drop interface slapped on top of traditional scripting. It's built from the ground up with a sophisticated execution engine that compiles visual workflows into optimized test scripts.

### Key Components

1. **Visual DSL (Domain-Specific Language)** - Our proprietary language captures user intent without exposing implementation complexity.

2. **Smart Element Resolution** - AI-powered locator strategies that adapt to UI changes automatically.

3. **Parallel Execution Engine** - Distribute tests across unlimited cloud infrastructure seamlessly.

## Real-World Performance

Enterprise customers running 250,000+ test cases have seen:
- 50-75% reduction in test creation time
- Zero degradation in test reliability
- Faster onboarding for manual testers

The key insight? Abstraction done right doesn't limit power—it amplifies it.
    `,
  },
  {
    slug: 'manual-to-automated-transformation',
    title: 'From Manual to Automated: A 90-Day Transformation Playbook',
    description: 'A step-by-step guide for QA teams transitioning from manual testing to comprehensive automation coverage.',
    date: '2025-01-10',
    author: 'QA Solutions Team',
    category: 'Best Practices',
    tags: ['automation', 'transformation', 'guide'],
    featured: false,
    readingTime: '12 min read',
    content: `
# From Manual to Automated: A 90-Day Transformation Playbook

Transitioning from manual to automated testing doesn't have to be overwhelming. Here's our proven framework for making the shift in just 90 days.

## Phase 1: Assessment (Days 1-15)

Start by auditing your current testing landscape. Identify which tests are candidates for automation based on:
- Frequency of execution
- Stability of the feature
- Business criticality
- Complexity of test steps

## Phase 2: Foundation (Days 16-45)

Set up your automation infrastructure and begin with high-value, low-complexity tests. Quick wins build momentum and stakeholder confidence.

## Phase 3: Scale (Days 46-90)

Expand coverage systematically. Integrate with CI/CD pipelines and establish metrics for success.
    `,
  },
  {
    slug: 'tool-fragmentation-cost',
    title: 'The True Cost of Tool Fragmentation in Enterprise Testing',
    description: 'How using disconnected testing tools creates hidden costs and how unified platforms solve this challenge.',
    date: '2025-01-05',
    author: 'Product Team',
    category: 'Industry Insights',
    tags: ['enterprise', 'tools', 'efficiency'],
    featured: false,
    readingTime: '6 min read',
    content: `
# The True Cost of Tool Fragmentation in Enterprise Testing

Most enterprise QA teams use 5-7 different tools for their testing workflow. This fragmentation creates costs that aren't immediately visible but compound over time.

## Hidden Costs

1. **Context Switching** - Engineers lose 20+ minutes every time they switch between tools
2. **Data Silos** - Requirements in one system, tests in another, defects in a third
3. **Integration Maintenance** - Custom integrations that break and require constant upkeep
4. **Training Overhead** - New team members must learn multiple systems

## The Unified Alternative

A single platform that handles requirements, test management, automation, and reporting eliminates these friction points while providing complete traceability.
    `,
  },
  {
    slug: 'ai-in-qa-substance-vs-hype',
    title: 'AI in QA: Separating Substance from Hype',
    description: 'A practical look at where AI adds real value in testing and where it falls short.',
    date: '2024-12-28',
    author: 'AI Research Team',
    category: 'AI & Automation',
    tags: ['AI', 'machine learning', 'testing'],
    featured: false,
    readingTime: '10 min read',
    content: `
# AI in QA: Separating Substance from Hype

AI is transforming software testing, but not every AI feature is equally valuable. Let's separate what works from what's mostly marketing.

## Where AI Delivers Real Value

### Test Generation
AI can analyze user stories and generate meaningful test cases. This works because the mapping from requirements to tests follows learnable patterns.

### Self-Healing Locators
When UI changes break element selectors, AI can identify the same element using alternative attributes. This dramatically reduces maintenance burden.

### Predictive Analytics
Historical test data reveals patterns that predict where bugs are likely to occur, enabling smarter test prioritization.

## Where to Be Skeptical

- "AI that writes all your tests" - Still requires human oversight
- "Zero maintenance automation" - AI helps but doesn't eliminate maintenance
- "AI that understands your application" - Context still matters

The best approach: Use AI to augment human testers, not replace their judgment.
    `,
  },
  {
    slug: 'mainframe-testing-modern-solutions',
    title: 'Mainframe Testing in 2025: Modern Solutions for Legacy Systems',
    description: 'How to bring modern automation practices to mainframe and legacy application testing.',
    date: '2024-12-20',
    author: 'Enterprise Solutions Team',
    category: 'Enterprise',
    tags: ['mainframe', 'legacy', 'enterprise'],
    featured: false,
    readingTime: '7 min read',
    content: `
# Mainframe Testing in 2025: Modern Solutions for Legacy Systems

Mainframe systems power critical business operations at thousands of organizations. Yet they're often left out of automation initiatives because traditional tools don't support them well.

## The Challenge

Mainframe applications typically use terminal-based interfaces (3270 emulators) that don't work with web automation frameworks. This forces teams to either:
- Test manually (slow, error-prone)
- Build custom automation (expensive, fragile)
- Skip mainframe testing (risky)

## Modern Approaches

SimplifyQA's mainframe module provides:
- Native 3270 terminal automation
- Record and playback for green screen applications
- Integration with web and API tests for end-to-end coverage
- Cloud execution without local emulator setup

The result: Mainframe applications get the same automation coverage as modern web apps.
    `,
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)))
}
