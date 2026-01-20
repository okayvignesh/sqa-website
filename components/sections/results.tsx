'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/layout'
import { SectionHeader, AnimatedCounter } from '@/components/shared'
import { GradientOrb, FloatingOrb } from '@/components/effects/gradient-orbs'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { metrics } from '@/lib/constants'
import { ArrowDown, ArrowUp, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import * as variants from '@/components/motion/motion-variants'

export function Results() {
  const sectionRef = useRef<HTMLElement>(null)
  const ref = useRef(null)
  const quoteRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const quoteInView = useInView(quoteRef, { once: true, margin: '-50px' })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background layers */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-surface-1/50 via-surface-1 to-surface-1/50" />
      </motion.div>
      <NoiseTexture opacity={0.02} />

      {/* Gradient orbs with parallax */}
      <GradientOrb
        size="xl"
        color="brand"
        intensity="subtle"
        className="top-[-20%] left-[50%] -translate-x-1/2"
        parallaxSpeed={0.4}
      />
      <FloatingOrb
        size="md"
        color="accent"
        className="bottom-[10%] right-[10%]"
      />

      <Container className="relative z-10">
        <SectionHeader
          badge="Results"
          title="Measured impact across every metric"
          description="Real outcomes from teams using SimplifyQA to transform their testing workflows."
        />

        <motion.div
          ref={ref}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants.staggerContainer}
        >
          {metrics.map((metric, index) => {
            const isIncrease = metric.label.includes('Improved')

            return (
              <motion.div
                key={metric.label}
                className={cn(
                  'relative text-center p-6 rounded-2xl',
                  'bg-white dark:bg-white/[0.02]',
                  'backdrop-blur-lg backdrop-saturate-150',
                  'border border-gray-200/80 dark:border-white/[0.05]',
                  'shadow-[0_1px_3px_rgba(0,0,0,0.04)]',
                  'group hover:shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08)] dark:hover:bg-white/[0.04]',
                  'transition-all duration-500'
                )}
                variants={variants.scaleIn}
                custom={index}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
              >
                {/* Glow on hover */}
                <div className={cn(
                  'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                  'bg-gradient-to-b from-brand-500/5 to-transparent'
                )} />

                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <AnimatedCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      className="text-4xl md:text-5xl font-bold text-brand-700 dark:text-brand-400"
                    />
                    {isIncrease ? (
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                      >
                        <ArrowUp className="w-5 h-5 text-emerald-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ scale: 0, rotate: 45 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                      >
                        <ArrowDown className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                      </motion.div>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary">{metric.label}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quote - glass panel */}
        <motion.div
          ref={quoteRef}
          className="mt-20 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: variants.easings.outExpo }}
        >
          <div className={cn(
            'relative p-8 md:p-10 rounded-3xl',
            'bg-white dark:bg-white/[0.02]',
            'backdrop-blur-xl backdrop-saturate-150',
            'border border-gray-200/80 dark:border-white/[0.06]',
            'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_40px_rgba(0,0,0,0.06)]',
            'dark:shadow-[0_8px_40px_rgba(0,0,0,0.2)]'
          )}>
            {/* Quote mark */}
            <div className="absolute -top-4 left-8">
              <span className="text-6xl font-serif text-brand-500/20">&ldquo;</span>
            </div>

            {/* Accent line */}
            <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-brand-500 to-brand-600" />

            <blockquote className="relative pl-4 text-center">
              <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                We automated 250,000 test cases with our existing team—reducing testing costs by 30%.
              </p>
              <footer className="mt-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-text-primary">Enterprise Healthcare</p>
                  <p className="text-xs text-text-tertiary">Fortune 500 Client</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
