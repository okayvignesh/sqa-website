'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import * as variants from '@/components/motion/motion-variants'

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants.staggerContainer}
    >
      {badge && (
        <motion.div variants={variants.fadeInUp}>
          <Badge variant="primary" className="mb-3">
            {badge}
          </Badge>
        </motion.div>
      )}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary text-balance"
        variants={variants.fadeInUp}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className="mt-3 text-base text-text-secondary max-w-xl mx-auto text-balance"
          variants={variants.fadeInUp}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
