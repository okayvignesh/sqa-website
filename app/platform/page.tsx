import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Check, Globe, Smartphone, Server, Database, Monitor, Cpu } from 'lucide-react'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeader, GradientOrb } from '@/components/shared'
import { CTASection } from '@/components/sections'
import { cn } from '@/lib/utils'

// Integration tools with actual logo images
const integrationTools = [
  { name: 'Jira', logo: '/logos/jira.svg' },
  { name: 'Jenkins', logo: '/logos/jenkins.svg' },
  { name: 'GitHub', logo: '/logos/github.svg' },
  { name: 'GitLab', logo: '/logos/gitlab.svg' },
  { name: 'Azure DevOps', logo: '/logos/azure.svg' },
  { name: 'Slack', logo: '/logos/slack.svg' },
  { name: 'BrowserStack', logo: '/logos/browserstack.svg' },
  { name: 'Sauce Labs', logo: '/logos/saucelabs.svg' },
  { name: 'Teams', logo: '/logos/teams.svg' },
  { name: 'Bitbucket', logo: '/logos/bitbucket.svg' },
]

export const metadata: Metadata = {
  title: 'Platform - Unified Test Automation & ALM Solution',
  description: 'One platform for your entire testing lifecycle. SimplifyQA unifies test automation, ALM, cloud execution, and AI intelligence. Supports web, mobile, API, desktop, and mainframe testing.',
  keywords: ['test automation platform', 'ALM solution', 'unified testing', 'cloud test execution', 'multi-platform testing', 'Jira integration', 'Jenkins integration'],
  openGraph: {
    title: 'SimplifyQA Platform - Unified Test Automation & ALM',
    description: 'One platform for your entire testing lifecycle. Test automation, ALM, cloud execution, and AI intelligence unified.',
    url: 'https://simplifyqa.ai/platform',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SimplifyQA Platform - Unified Testing Solution',
      },
    ],
  },
  twitter: {
    title: 'SimplifyQA Platform - Unified Test Automation & ALM',
    description: 'One platform for your entire testing lifecycle. Supports web, mobile, API, desktop, and mainframe.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://simplifyqa.ai/platform',
  },
}

const modules = [
  {
    title: 'Test Automation',
    description: 'Codeless test creation with record-and-playback, visual test builder, and AI-generated test cases.',
    features: ['Point-and-click interface', 'Record & playback', 'AI test generation', 'Self-healing scripts'],
  },
  {
    title: 'ALM & Management',
    description: 'Complete application lifecycle management from requirements to release.',
    features: ['Requirements management', 'Test case management', 'Defect tracking', 'Release planning'],
  },
  {
    title: 'Cloud Execution',
    description: 'Scalable test execution across browsers, devices, and environments.',
    features: ['Parallel execution', 'Cross-browser testing', 'Real device testing', 'Pay-per-use model'],
  },
  {
    title: 'AI Intelligence',
    description: 'Machine learning capabilities that make testing smarter over time.',
    features: ['Test case generation', 'Synthetic test data', 'Predictive analytics', 'Impact analysis'],
  },
]

const platforms = [
  { name: 'Web', icon: Globe, description: 'Chrome, Firefox, Safari, Edge' },
  { name: 'Mobile', icon: Smartphone, description: 'iOS & Android native and hybrid' },
  { name: 'API', icon: Server, description: 'REST, SOAP, GraphQL' },
  { name: 'Database', icon: Database, description: 'SQL & NoSQL validation' },
  { name: 'Desktop', icon: Monitor, description: '.NET, Java, SAP applications' },
  { name: 'Mainframe', icon: Cpu, description: 'Legacy system automation' },
]

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GradientOrb className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-4">Platform</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
              One platform for your entire testing lifecycle
            </h1>
            <p className="mt-6 text-xl text-text-secondary max-w-2xl">
              SimplifyQA unifies test automation, ALM, and analytics into a single, AI-powered platform that scales with your team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="secondary" size="lg">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Modules */}
      <section className="section-padding bg-surface-1">
        <Container>
          <SectionHeader
            badge="Core Modules"
            title="Four pillars of modern testing"
            description="Each module works independently or together as a unified system."
          />

          <div className="mt-8 md:mt-16 grid md:grid-cols-2 gap-4 md:gap-6">
            {modules.map((module) => (
              <Card key={module.title} className="p-4 md:p-8">
                <h3 className="text-xl font-semibold text-text-primary">
                  {module.title}
                </h3>
                <p className="mt-2 text-text-secondary">
                  {module.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {module.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-coral-500 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Coverage */}
      <section className="section-padding">
        <Container>
          <SectionHeader
            badge="Technology Coverage"
            title="Test anything, anywhere"
            description="One platform supporting your entire technology stack."
          />

          <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className={cn(
                  'text-center p-4 md:p-6 rounded-xl md:rounded-2xl border border-border',
                  'bg-surface-elevated hover:shadow-md transition-all'
                )}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-coral-500/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <platform.icon className="w-5 h-5 md:w-6 md:h-6 text-coral-500" />
                </div>
                <h3 className="font-semibold text-text-primary">{platform.name}</h3>
                <p className="mt-1 text-xs text-text-tertiary">{platform.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-surface-1" id="integrations">
        <Container>
          <SectionHeader
            badge="Integrations"
            title="Connects with your existing tools"
            description="Native integrations with the tools your team already uses."
          />

          <div className="mt-8 md:mt-16 grid grid-cols-2 sm:grid-cols-5 gap-3 md:gap-4">
            {integrationTools.map((tool) => (
              <div
                key={tool.name}
                className={cn(
                  'flex flex-col items-center justify-center p-4 md:p-6 rounded-xl md:rounded-2xl',
                  'bg-white dark:bg-white/[0.03]',
                  'border border-border/50',
                  'hover:border-brand-500/30 hover:shadow-lg hover:-translate-y-1',
                  'transition-all duration-300'
                )}
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={40}
                  height={40}
                  className="mb-3"
                />
                <span className="text-sm font-medium text-text-primary">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
