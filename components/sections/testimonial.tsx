'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/layout'
import { GradientOrb } from '@/components/effects/gradient-orbs'
import { NoiseTexture } from '@/components/effects/noise-texture'
import { testimonials } from '@/lib/constants'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import * as variants from '@/components/motion/motion-variants'

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonial = testimonials[activeIndex] || testimonials[0]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/30 via-surface-1 to-surface-1/30" />
      <NoiseTexture opacity={0.02} />

      {/* Gradient orbs */}
      <GradientOrb
        size="lg"
        color="brand"
        intensity="subtle"
        className="top-[-10%] left-[20%]"
        parallaxSpeed={0.3}
      />
      <GradientOrb
        size="md"
        color="accent"
        intensity="subtle"
        className="bottom-[-10%] right-[10%]"
        parallaxSpeed={0.4}
      />

      <Container className="relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={variants.fadeInUp}
        >
          {/* Glass panel */}
          <div className={cn(
            'relative p-8 md:p-12 lg:p-16 rounded-3xl',
            'bg-white dark:bg-white/[0.02]',
            'backdrop-blur-xl backdrop-saturate-150',
            'border border-gray-200/80 dark:border-white/[0.06]',
            'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_60px_rgba(0,0,0,0.06)]',
            'dark:shadow-[0_8px_60px_rgba(0,0,0,0.3)]'
          )}>
            {/* Quote icon - floating */}
            <motion.div
              className="absolute -top-6 left-8 md:left-12"
              initial={{ scale: 0, rotate: -20 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              <div className={cn(
                'w-12 h-12 rounded-xl',
                'bg-gradient-to-br from-brand-500 to-brand-600',
                'flex items-center justify-center',
                'shadow-lg shadow-brand-500/25'
              )}>
                <Quote className="w-6 h-6 text-white" />
              </div>
            </motion.div>

            {/* Testimonial content with animation */}
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                className="relative z-10 text-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: variants.easings.outExpo }}
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-text-primary font-medium leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-8 flex flex-col items-center">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900 dark:to-brand-800 flex items-center justify-center mb-3">
                    <span className="text-lg font-bold text-brand-600 dark:text-brand-400">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <p className="font-semibold text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {testimonial.company}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center',
                    'bg-gray-100 dark:bg-white/5',
                    'border border-gray-200 dark:border-white/10',
                    'text-text-secondary hover:text-text-primary',
                    'transition-all duration-300',
                    'hover:bg-gray-200 dark:hover:bg-white/10'
                  )}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        'w-2 h-2 rounded-full transition-all duration-300',
                        index === activeIndex
                          ? 'w-6 bg-brand-600 dark:bg-brand-400'
                          : 'bg-text-tertiary/30 hover:bg-text-tertiary/50'
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center',
                    'bg-gray-100 dark:bg-white/5',
                    'border border-gray-200 dark:border-white/10',
                    'text-text-secondary hover:text-text-primary',
                    'transition-all duration-300',
                    'hover:bg-gray-200 dark:hover:bg-white/10'
                  )}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-500/5 to-transparent rounded-tr-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-500/5 to-transparent rounded-bl-3xl pointer-events-none" />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
