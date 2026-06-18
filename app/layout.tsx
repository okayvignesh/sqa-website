import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '../src/redesign/Navbar';
import Footer from '../src/redesign/Footer';
import ScrollToTop from './ScrollToTop';
import './globals.css';

export const metadata: Metadata = {
  title: 'SimplifyQA — Intelligent ALM & Test Management Platform',
  description:
    'SimplifyQA is an enterprise-grade ALM and test management platform. Plan, automate, execute, and report — across the entire software lifecycle with AI-powered intelligence.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap"
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body className="bg-white text-ink-900">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9R081RHN52"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9R081RHN52');
        `}</Script>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
