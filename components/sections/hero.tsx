'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { Magnetic } from '@/components/motion'
import { cn } from '@/lib/utils'

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const dashboardScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
    >
      {/* === BACKGROUND === */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950" />
      <NoiseTexture opacity={0.02} />

      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-radial from-brand-500/8 via-transparent to-transparent pointer-events-none" />

      {/* === CONTENT === */}
      <Container className="relative z-10">
        {/* Text Content */}
        <div className="pt-32 pb-16 md:pt-40 md:pb-20 max-w-4xl mx-auto text-center">
          {/* Eyebrow Pill */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full',
              'text-sm font-medium text-brand-700 dark:text-brand-300',
              'bg-brand-50 dark:bg-brand-500/10',
              'border border-brand-200 dark:border-brand-500/20'
            )}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
              </span>
              AI-Powered Test Automation Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Testing complexity,{' '}
            <span className="text-brand-600 dark:text-brand-500">simplified</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Unify test automation, ALM, and AI-powered intelligence into one platform.
            Ship confidently, without the chaos.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Magnetic strength={0.1}>
              <Link href="/contact">
                <Button size="lg" className="gap-2 px-8 h-12 text-base shadow-lg shadow-brand-500/25">
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </Magnetic>
            <Magnetic strength={0.1}>
              <Link href="/platform">
                <Button variant="outline" size="lg" className="gap-2 px-8 h-12 text-base">
                  <Play className="w-4 h-4" />
                  Watch Tour
                </Button>
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        {/* === DASHBOARD PREVIEW === */}
        <motion.div
          className="relative pb-8"
          style={{ y: dashboardY, scale: dashboardScale }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Dashboard Frame */}
          <div className="relative mx-auto max-w-5xl">
            <div
              className={cn(
                'relative rounded-xl overflow-hidden',
                'bg-white dark:bg-zinc-900',
                'border border-gray-200 dark:border-zinc-800',
                'shadow-2xl shadow-gray-900/10 dark:shadow-black/50'
              )}
            >
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100/80 dark:bg-zinc-800/80 border-b border-gray-200 dark:border-zinc-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-white dark:bg-zinc-700 text-xs text-text-tertiary">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    app.simplifyqa.ai
                  </div>
                </div>
                <div className="w-12" />
              </div>

              {/* Dashboard Content */}
              <div className="relative bg-gray-50 dark:bg-zinc-900">
                <div className="p-4 md:p-6">
                  {/* Top Navigation */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">S</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1">
                        {['Dashboard', 'Tests', 'Reports', 'Settings'].map((item, i) => (
                          <div
                            key={item}
                            className={cn(
                              'px-3 py-1.5 rounded-md text-xs font-medium',
                              i === 0 ? 'bg-white dark:bg-zinc-800 text-text-primary shadow-sm' : 'text-text-tertiary'
                            )}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700" />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                    {[
                      { label: 'Total Tests', value: '2,847', change: '+12%', positive: true },
                      { label: 'Pass Rate', value: '98.5%', change: '+2.3%', positive: true },
                      { label: 'Avg Duration', value: '1.2s', change: '-18%', positive: true },
                      { label: 'Coverage', value: '94%', change: '+5%', positive: true },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className={cn(
                          'p-4 rounded-lg',
                          'bg-white dark:bg-zinc-800',
                          'border border-gray-100 dark:border-zinc-700'
                        )}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      >
                        <p className="text-xs text-text-tertiary mb-1">{stat.label}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl md:text-2xl font-semibold text-text-primary">{stat.value}</span>
                          <span className={cn(
                            'text-xs font-medium',
                            stat.positive ? 'text-emerald-500' : 'text-red-500'
                          )}>
                            {stat.change}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Section */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Main Chart */}
                    <motion.div
                      className="md:col-span-2 p-4 rounded-lg bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <p className="text-sm font-medium text-text-primary">Test Executions</p>
                        <div className="flex gap-2">
                          {['7D', '30D', '90D'].map((period, i) => (
                            <button
                              key={period}
                              className={cn(
                                'px-2 py-1 text-xs rounded',
                                i === 1 ? 'bg-brand-500 text-white' : 'text-text-tertiary hover:bg-gray-100 dark:hover:bg-zinc-700'
                              )}
                            >
                              {period}
                            </button>
                          ))}
                        </div>
                      </div>
                      {/* Chart Bars */}
                      <div className="flex items-end gap-1.5 h-24 md:h-32">
                        {[35, 52, 48, 70, 45, 80, 62, 90, 55, 85, 72, 95].map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-400"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.9 + i * 0.03, duration: 0.4, ease: 'easeOut' }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Recent Tests */}
                    <motion.div
                      className="p-4 rounded-lg bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      <p className="text-sm font-medium text-text-primary mb-3">Recent Tests</p>
                      <div className="space-y-2">
                        {[
                          { name: 'User Login Flow', status: 'passed', time: '0.8s' },
                          { name: 'Checkout Process', status: 'passed', time: '1.2s' },
                          { name: 'Payment Gateway', status: 'failed', time: '2.1s' },
                          { name: 'Search Feature', status: 'passed', time: '0.5s' },
                        ].map((test, i) => (
                          <motion.div
                            key={test.name}
                            className="flex items-center justify-between p-2 rounded-md bg-gray-50 dark:bg-zinc-700/50"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                          >
                            <div className="flex items-center gap-2">
                              <div className={cn(
                                'w-2 h-2 rounded-full',
                                test.status === 'passed' ? 'bg-emerald-500' : 'bg-red-500'
                              )} />
                              <span className="text-xs text-text-secondary truncate max-w-[120px]">{test.name}</span>
                            </div>
                            <span className="text-[10px] text-text-tertiary">{test.time}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
