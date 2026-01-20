import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SectionHeader, GradientOrb, FeatureIcon } from '@/components/shared'
import { CTASection } from '@/components/sections'
import { features } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Features - Zero-Code Automation & AI-Powered Testing',
  description: 'Explore SimplifyQA features: zero-code test automation, AI-powered test generation, self-healing scripts, unified ALM, infinite cloud scale, and multi-platform coverage for web, mobile, API, desktop.',
  keywords: ['codeless automation', 'AI test generation', 'self-healing tests', 'cloud test execution', 'parallel testing', 'cross-browser testing', 'mobile testing', 'API testing'],
  openGraph: {
    title: 'SimplifyQA Features - Zero-Code Automation & AI Testing',
    description: 'Zero-code test automation, AI-powered test generation, self-healing scripts, and infinite cloud scale. Built for modern QA teams.',
    url: 'https://simplifyqa.ai/features',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SimplifyQA Features - Built for Modern QA Teams',
      },
    ],
  },
  twitter: {
    title: 'SimplifyQA Features - Zero-Code Automation & AI Testing',
    description: 'Zero-code test automation, AI-powered test generation, and infinite cloud scale.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://simplifyqa.ai/features',
  },
}

const detailedFeatures = [
  {
    ...features[0],
    benefits: [
      'No programming knowledge required',
      'Record user actions with one click',
      'Visual test builder with drag-and-drop',
      'Reusable test components library',
      'Data-driven testing support',
    ],
  },
  {
    ...features[1],
    benefits: [
      'Requirements to test case traceability',
      'Integrated defect management',
      'Release and sprint planning',
      'Version control for test assets',
      'Custom workflow automation',
    ],
  },
  {
    ...features[2],
    benefits: [
      'Generate tests from user stories',
      'Auto-generate synthetic test data',
      'Self-healing element locators',
      'Intelligent test prioritization',
      'Predictive failure analysis',
    ],
  },
  {
    ...features[3],
    benefits: [
      'Run 1000+ tests in parallel',
      'Cross-browser matrix testing',
      'Real iOS & Android devices',
      'Zero infrastructure management',
      'Pay only for execution time',
    ],
  },
  {
    ...features[4],
    benefits: [
      'Single interface for all platforms',
      'End-to-end journey testing',
      'Consistent test syntax across platforms',
      'Unified reporting and metrics',
      'Legacy system support',
    ],
  },
  {
    ...features[5],
    benefits: [
      'Real-time execution dashboards',
      'Coverage gap identification',
      'Flaky test detection',
      'Executive summary reports',
      'Custom report builder',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GradientOrb className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="primary" className="mb-4">Features</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
              Built for modern QA teams
            </h1>
            <p className="mt-6 text-xl text-text-secondary">
              Every feature designed to reduce complexity and accelerate your testing workflow.
            </p>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <Container>
          <div className="space-y-12 md:space-y-24">
            {detailedFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <FeatureIcon name={feature.icon} className="mb-6" />
                  <p className="text-sm font-medium text-coral-500 mb-2">
                    {feature.headline}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg text-text-secondary">
                    {feature.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link href="/contact">
                      <Button variant="secondary" className="gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-surface-1 to-surface-2">
                    <div className="text-center p-4 md:p-8">
                      <FeatureIcon name={feature.icon} className="mx-auto mb-4 w-16 h-16" />
                      <p className="text-text-tertiary text-sm">
                        {feature.title} Preview
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
