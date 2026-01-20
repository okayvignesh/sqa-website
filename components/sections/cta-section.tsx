'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Container } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import * as variants from '@/components/motion/motion-variants'

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      <Container>
        <motion.div
          ref={ref}
          className="relative"
          style={{ scale }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: variants.easings.outExpo }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main card */}
          <div className={cn(
            'relative overflow-hidden rounded-3xl',
            'bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800',
            'p-8 md:p-12 lg:p-16'
          )}>
            {/* Noise texture */}
            <NoiseTexture opacity={0.04} />

            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ y: backgroundY }}
            >
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="ctaGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#ctaGrid)" />
                </svg>
              </div>

              {/* Glowing orbs */}
              <motion.div
                className="absolute top-[-50%] right-[-20%] w-[60%] h-[120%] rounded-full bg-white/10 blur-3xl"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  opacity: isHovered ? 0.15 : 0.1,
                }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                className="absolute bottom-[-30%] left-[-10%] w-[40%] h-[80%] rounded-full bg-brand-400/20 blur-3xl"
                animate={{
                  scale: isHovered ? 1.15 : 1,
                  opacity: isHovered ? 0.25 : 0.2,
                }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />
            </motion.div>

            {/* Light streak effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
              }}
              animate={{
                x: isHovered ? ['0%', '200%'] : '-100%',
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-brand-200" />
                <span className="text-sm font-medium text-white/90">Get started today</span>
              </motion.div>

              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1, ease: variants.easings.outExpo }}
              >
                Ready to simplify your testing?
              </motion.h2>
              <motion.p
                className="mt-4 text-lg text-white/70"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2, ease: variants.easings.outExpo }}
              >
                Join hundreds of teams shipping quality software faster with SimplifyQA.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3, ease: variants.easings.outExpo }}
              >
                <Link href="/contact">
                  <Button
                    size="lg"
                    className={cn(
                      'gap-2 relative overflow-hidden group',
                      'bg-white text-brand-700 hover:bg-white/90',
                      'shadow-[0_8px_32px_rgba(0,0,0,0.2)]'
                    )}
                  >
                    <span className="relative z-10">Request a Demo</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    {/* Shine */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className={cn(
                      'border-white/30 text-white',
                      'bg-white/5 backdrop-blur-sm',
                      'hover:bg-white/10 hover:border-white/40'
                    )}
                  >
                    View Pricing
                  </Button>
                </Link>
              </motion.div>

            </div>

            {/* Corner glow effects */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-400/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
