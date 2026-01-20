import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header, Footer } from '@/components/layout'
import { siteConfig } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - AI-Powered Test Automation Platform`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'SimplifyQA is an AI-powered test automation and ALM platform that unifies your entire testing workflow. Zero-code automation, cloud execution, and enterprise-grade security.',
  keywords: [
    'test automation',
    'QA automation',
    'software testing',
    'ALM platform',
    'application lifecycle management',
    'codeless test automation',
    'no-code testing',
    'AI testing',
    'AI test generation',
    'continuous testing',
    'DevOps testing',
    'regression testing',
    'API testing',
    'mobile testing',
    'web testing',
    'test management',
    'defect tracking',
    'SimplifyQA',
    'Simplify3x',
  ],
  authors: [{ name: 'Simplify3x Software Pvt Ltd', url: siteConfig.url }],
  creator: 'Simplify3x Software Pvt Ltd',
  publisher: 'Simplify3x Software Pvt Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} - AI-Powered Test Automation Platform`,
    description: 'Unify test automation, ALM, and AI-powered intelligence into one platform. Ship confidently with zero-code automation and enterprise-grade security.',
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SimplifyQA - AI-Powered Test Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - AI-Powered Test Automation Platform`,
    description: 'Unify test automation, ALM, and AI-powered intelligence into one platform. Ship confidently with zero-code automation.',
    creator: '@simplifyqa',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
