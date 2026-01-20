import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Request a Demo',
  description: 'Contact SimplifyQA to schedule a demo, get pricing information, or discuss your testing needs. Reach our team via email at info@simplify3x.com or call +91 8041116728.',
  keywords: ['contact SimplifyQA', 'request demo', 'test automation demo', 'SimplifyQA support', 'Simplify3x contact'],
  openGraph: {
    title: 'Contact SimplifyQA - Request a Demo',
    description: 'Schedule a demo, get pricing information, or discuss your testing needs with our team.',
    url: 'https://simplifyqa.ai/contact',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact SimplifyQA - Get in Touch',
      },
    ],
  },
  twitter: {
    title: 'Contact SimplifyQA - Request a Demo',
    description: 'Schedule a demo or discuss your testing needs with our team.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://simplifyqa.ai/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
