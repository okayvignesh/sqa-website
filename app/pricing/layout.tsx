import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Flexible Plans for Teams of All Sizes',
  description: 'SimplifyQA pricing plans for teams, businesses, and enterprises. Unlimited users, cloud execution, AI-powered testing, and dedicated support. Contact sales for custom pricing.',
  keywords: ['test automation pricing', 'QA platform pricing', 'enterprise testing plans', 'unlimited users', 'cloud testing pricing'],
  openGraph: {
    title: 'SimplifyQA Pricing - Plans for Teams of All Sizes',
    description: 'Flexible pricing for teams, businesses, and enterprises. Unlimited users included. Contact sales for custom pricing.',
    url: 'https://simplifyqa.ai/pricing',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SimplifyQA Pricing Plans',
      },
    ],
  },
  twitter: {
    title: 'SimplifyQA Pricing - Plans for Teams of All Sizes',
    description: 'Flexible pricing for teams, businesses, and enterprises. Unlimited users included.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://simplifyqa.ai/pricing',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
