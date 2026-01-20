import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - The SimplifyQA Story',
  description: 'Learn about Simplify3x and the SimplifyQA platform. Founded in 2015, we are on a mission to democratize test automation with AI-powered, zero-code solutions. 500+ team members across 4 global offices.',
  keywords: ['Simplify3x', 'SimplifyQA company', 'test automation company', 'QA software company', 'Bengaluru software company', 'AI testing company'],
  openGraph: {
    title: 'About SimplifyQA - Turning Complexity into Clarity',
    description: 'Founded in 2015, Simplify3x is on a mission to democratize test automation. 500+ team members, 4 global offices, 100+ enterprise customers.',
    url: 'https://simplifyqa.ai/about',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About SimplifyQA - The Story Behind the Platform',
      },
    ],
  },
  twitter: {
    title: 'About SimplifyQA - Turning Complexity into Clarity',
    description: 'Founded in 2015, Simplify3x is on a mission to democratize test automation with AI-powered solutions.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://simplifyqa.ai/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
