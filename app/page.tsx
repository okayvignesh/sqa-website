import { Metadata } from 'next'
import {
  Hero,
  TrustedBy,
  Capabilities,
  Results,
  HowItWorks,
  Testimonial,
  Certifications,
  CTASection,
} from '@/components/sections'

export const metadata: Metadata = {
  title: 'SimplifyQA - AI-Powered Test Automation & ALM Platform',
  description: 'Unify test automation, ALM, and AI-powered intelligence into one platform. Zero-code automation, cloud execution, multi-platform coverage. Trusted by 100+ enterprises worldwide.',
  openGraph: {
    title: 'SimplifyQA - AI-Powered Test Automation & ALM Platform',
    description: 'Unify test automation, ALM, and AI-powered intelligence into one platform. Zero-code automation, cloud execution, multi-platform coverage.',
    url: 'https://simplifyqa.ai',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SimplifyQA - Testing complexity, simplified',
      },
    ],
  },
  twitter: {
    title: 'SimplifyQA - AI-Powered Test Automation & ALM Platform',
    description: 'Unify test automation, ALM, and AI-powered intelligence into one platform. Ship confidently, without the chaos.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://simplifyqa.ai',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Capabilities />
      <Results />
      <HowItWorks />
      <Testimonial />
      <Certifications />
      <CTASection />
    </>
  )
}
