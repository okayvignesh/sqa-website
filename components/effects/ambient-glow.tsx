'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AmbientGlowProps {
  className?: string
  color?: 'brand' | 'blue' | 'purple'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animate?: boolean
}

export function AmbientGlow({
  className,
  color = 'brand',
  size = 'lg',
  animate = true,
}: AmbientGlowProps) {
  const colorMap = {
    brand: 'from-brand-700/20 via-brand-600/10',
    blue: 'from-blue-500/20 via-blue-400/10',
    purple: 'from-purple-500/20 via-purple-400/10',
  }

  const sizeMap = {
    sm: 'w-[300px] h-[300px]',
    md: 'w-[500px] h-[500px]',
    lg: 'w-[700px] h-[700px]',
    xl: 'w-[1000px] h-[1000px]',
  }

  return (
    <motion.div
      className={cn(
        'absolute pointer-events-none',
        'rounded-full blur-3xl',
        'bg-gradient-radial',
        colorMap[color],
        'to-transparent',
        sizeMap[size],
        className
      )}
      initial={{ opacity: 0.4, scale: 1 }}
      animate={animate ? {
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.1, 1],
      } : undefined}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        background: `radial-gradient(ellipse at center, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to))`,
      }}
    />
  )
}
