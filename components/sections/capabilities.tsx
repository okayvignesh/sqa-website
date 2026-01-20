'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Container } from '@/components/layout'
import { SectionHeader, FeatureIcon } from '@/components/shared'
import { GradientOrb } from '@/components/effects/gradient-orbs'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { features } from '@/lib/constants'
import { cn } from '@/lib/utils'
import * as variants from '@/components/motion/motion-variants'

// Glass card with tilt effect
function FeatureCard({
  feature,
  index,
  isHighlighted,
}: {
  feature: (typeof features)[0]
  index: number
  isHighlighted: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={cardRef}
      variants={variants.fadeInUp}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      className="h-full"
    >
      <div
        className={cn(
          'relative h-full p-6 rounded-2xl overflow-hidden',
          'bg-white dark:bg-white/[0.02]',
          'backdrop-blur-xl backdrop-saturate-150',
          'border border-gray-200/80 dark:border-white/[0.06]',
          'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.04)]',
          'dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)]',
          'transition-all duration-500',
          isHovered && 'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)]',
          isHighlighted && 'border-brand-500/30 dark:border-brand-500/20'
        )}
      >
        {/* Highlight gradient for AI card */}
        {isHighlighted && (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-transparent dark:from-brand-500/10 pointer-events-none" />
        )}

        {/* Light refraction on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              105deg,
              transparent 40%,
              rgba(255, 255, 255, 0.15) 45%,
              rgba(255, 255, 255, 0.25) 50%,
              rgba(255, 255, 255, 0.15) 55%,
              transparent 60%
            )`,
            opacity: isHovered ? 1 : 0,
          }}
          animate={{
            x: isHovered ? ['0%', '200%'] : '0%',
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center',
            'bg-gradient-to-br from-brand-600/10 to-brand-700/5',
            'dark:from-brand-500/15 dark:to-brand-600/10'
          )}>
            <FeatureIcon name={feature.icon} size="lg" />
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1.5">
              {feature.headline}
            </p>
            <h3 className="text-lg font-semibold text-text-primary">
              {feature.title}
            </h3>
          </div>

          <p className="mt-3 text-sm text-text-secondary leading-relaxed">
            {feature.description}
          </p>

          <Link
            href="/features"
            className={cn(
              'inline-flex items-center gap-1.5 mt-5 text-sm font-medium',
              'text-brand-600 dark:text-brand-400',
              'opacity-0 translate-y-2 transition-all duration-300',
              isHovered && 'opacity-100 translate-y-0'
            )}
          >
            Learn more
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Corner accent */}
        <div className={cn(
          'absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl',
          'bg-brand-500/10 dark:bg-brand-500/15',
          'opacity-0 transition-opacity duration-500',
          isHovered && 'opacity-100'
        )} />
      </div>
    </motion.div>
  )
}

export function Capabilities() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface-1/30 to-background" />
      <NoiseTexture opacity={0.02} />

      {/* Gradient orbs */}
      <GradientOrb
        size="lg"
        color="brand"
        intensity="subtle"
        className="top-[10%] right-[-15%]"
        parallaxSpeed={0.3}
      />
      <GradientOrb
        size="md"
        color="accent"
        intensity="subtle"
        className="bottom-[20%] left-[-10%]"
        parallaxSpeed={0.5}
      />

      <Container className="relative z-10">
        <SectionHeader
          badge="Capabilities"
          title="Everything you need to ship quality software"
          description="A unified platform that replaces fragmented tools with intelligent, connected workflows."
        />

        <motion.div
          ref={ref}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants.staggerContainer}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isHighlighted={feature.title === 'AI-Native Intelligence'}
            />
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: variants.easings.outExpo }}
        />
      </Container>
    </section>
  )
}
