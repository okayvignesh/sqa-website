'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/layout'
import * as variants from '@/components/motion/motion-variants'
import { cn } from '@/lib/utils'

// Company logos - using placeholder SVGs representing the brand style
const companies = [
  {
    name: 'Anthem Inc.',
    logo: (
      <svg viewBox="0 0 120 32" className="h-8 w-auto" fill="currentColor">
        <text x="0" y="24" className="font-bold text-2xl" style={{ fontFamily: 'system-ui' }}>Anthem</text>
      </svg>
    ),
  },
  {
    name: 'Talview',
    logo: (
      <svg viewBox="0 0 100 32" className="h-8 w-auto" fill="currentColor">
        <text x="0" y="24" className="font-bold text-2xl" style={{ fontFamily: 'system-ui' }}>Talview</text>
      </svg>
    ),
  },
  {
    name: 'SmartKarrot',
    logo: (
      <svg viewBox="0 0 140 32" className="h-8 w-auto" fill="currentColor">
        <text x="0" y="24" className="font-bold text-2xl" style={{ fontFamily: 'system-ui' }}>SmartKarrot</text>
      </svg>
    ),
  },
  {
    name: 'enVista',
    logo: (
      <svg viewBox="0 0 90 32" className="h-8 w-auto" fill="currentColor">
        <text x="0" y="24" className="font-bold text-2xl" style={{ fontFamily: 'system-ui' }}>enVista</text>
      </svg>
    ),
  },
  {
    name: 'Etiqa Insurance',
    logo: (
      <svg viewBox="0 0 60 32" className="h-8 w-auto" fill="currentColor">
        <text x="0" y="24" className="font-bold text-2xl" style={{ fontFamily: 'system-ui' }}>Etiqa</text>
      </svg>
    ),
  },
]

export function TrustedBy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-12 md:py-16 border-y border-border/50 bg-surface-1/50">
      <Container>
        <motion.div
          ref={ref}
          className="text-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants.staggerContainer}
        >
          <motion.p
            className="text-sm text-text-tertiary mb-10 uppercase tracking-wider font-medium"
            variants={variants.fadeIn}
          >
            Trusted by innovative teams
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
            variants={variants.staggerContainer}
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                className={cn(
                  'text-text-tertiary/60 hover:text-text-secondary',
                  'transition-all duration-300 cursor-default',
                  'grayscale hover:grayscale-0'
                )}
                variants={variants.fadeInUp}
                custom={index}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-8 flex items-center">
                  {company.logo}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
