'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/layout'
import { SectionHeader } from '@/components/shared'
import { GradientOrb } from '@/components/effects/gradient-orbs'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { Link2, MousePointer, Rocket } from 'lucide-react'
import { cn } from '@/lib/utils'
import * as variants from '@/components/motion/motion-variants'

const steps = [
  {
    number: '01',
    title: 'Connect',
    description:
      'Link SimplifyQA to your applications, repositories, and CI/CD pipelines in minutes. Native integrations with Jira, Jenkins, GitHub, and 30+ tools.',
    icon: Link2,
    color: 'from-blue-500 to-blue-600',
  },
  {
    number: '02',
    title: 'Create',
    description:
      'Record user journeys, point-and-click through test steps, or let AI generate tests from your requirements. No coding—ever.',
    icon: MousePointer,
    color: 'from-violet-500 to-violet-600',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Run tests in parallel across cloud infrastructure. Get instant feedback, automatic defect logging, and release-ready reports.',
    icon: Rocket,
    color: 'from-brand-500 to-brand-600',
  },
]

function StepCard({
  step,
  index,
  isInView,
}: {
  step: (typeof steps)[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      variants={variants.fadeInUp}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Connector line to next step */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-16 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px">
          <motion.div
            className="h-full bg-gradient-to-r from-border via-brand-500/30 to-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 + index * 0.2, ease: variants.easings.outExpo }}
            style={{ originX: 0 }}
          />
        </div>
      )}

      <motion.div
        className={cn(
          'relative p-6 rounded-2xl h-full',
          'bg-white dark:bg-white/[0.02]',
          'backdrop-blur-xl backdrop-saturate-150',
          'border border-gray-200/80 dark:border-white/[0.06]',
          'shadow-[0_1px_3px_rgba(0,0,0,0.04)]',
          'transition-all duration-500',
          isHovered && 'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08)] dark:bg-white/[0.04]'
        )}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Step number badge */}
        <motion.div
          className={cn(
            'absolute -top-4 left-6',
            'w-10 h-10 rounded-xl',
            'bg-gradient-to-br',
            step.color,
            'flex items-center justify-center',
            'text-sm font-bold text-white',
            'shadow-lg'
          )}
          style={{
            boxShadow: isHovered
              ? '0 8px 24px rgba(173, 25, 39, 0.3)'
              : '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          {step.number}
        </motion.div>

        {/* Icon */}
        <div className="mt-6 mb-4">
          <div className={cn(
            'w-14 h-14 rounded-2xl',
            'bg-surface-1 dark:bg-zinc-800/50',
            'border border-border/50',
            'flex items-center justify-center',
            'transition-all duration-300',
            isHovered && 'border-brand-500/30'
          )}>
            <step.icon className={cn(
              'w-6 h-6 text-text-secondary transition-colors duration-300',
              isHovered && 'text-brand-600 dark:text-brand-400'
            )} />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {step.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {step.description}
        </p>

        {/* Hover glow */}
        <div className={cn(
          'absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-3xl',
          'bg-brand-500/10',
          'opacity-0 transition-opacity duration-500',
          isHovered && 'opacity-100'
        )} />
      </motion.div>
    </motion.div>
  )
}

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface-1/30" />
      <NoiseTexture opacity={0.02} />

      {/* Gradient orbs */}
      <GradientOrb
        size="lg"
        color="brand"
        intensity="subtle"
        className="top-[20%] left-[-10%]"
        parallaxSpeed={0.3}
      />
      <GradientOrb
        size="md"
        color="neutral"
        intensity="subtle"
        className="bottom-[10%] right-[-5%]"
        parallaxSpeed={0.4}
      />

      <Container className="relative z-10">
        <SectionHeader
          badge="How It Works"
          title="From setup to results in three steps"
          description="Get your team up and running with automated testing faster than you thought possible."
        />

        <motion.div
          ref={ref}
          className="mt-20 grid md:grid-cols-3 gap-8 lg:gap-12"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants.staggerContainer}
        >
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
