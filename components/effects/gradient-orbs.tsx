'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GradientOrbProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'brand' | 'accent' | 'neutral'
  intensity?: 'subtle' | 'medium' | 'strong'
  animate?: boolean
  parallaxSpeed?: number
}

const sizeMap = {
  sm: 'w-[300px] h-[300px]',
  md: 'w-[500px] h-[500px]',
  lg: 'w-[700px] h-[700px]',
  xl: 'w-[900px] h-[900px]',
}

const colorMap = {
  brand: {
    light: 'from-brand-500/20 via-brand-400/10 to-transparent',
    dark: 'dark:from-brand-500/25 dark:via-brand-400/15 dark:to-transparent',
  },
  accent: {
    light: 'from-brand-600/15 via-rose-400/10 to-transparent',
    dark: 'dark:from-brand-500/20 dark:via-rose-400/15 dark:to-transparent',
  },
  neutral: {
    light: 'from-slate-400/10 via-slate-300/5 to-transparent',
    dark: 'dark:from-slate-500/15 dark:via-slate-400/10 dark:to-transparent',
  },
}

const intensityMap = {
  subtle: 'opacity-40',
  medium: 'opacity-60',
  strong: 'opacity-80',
}

export function GradientOrb({
  className,
  size = 'md',
  color = 'brand',
  intensity = 'medium',
  animate = true,
  parallaxSpeed = 0.5,
}: GradientOrbProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxSpeed * 200])
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 })

  return (
    <motion.div
      ref={ref}
      className={cn(
        'absolute rounded-full pointer-events-none',
        'bg-gradient-radial',
        sizeMap[size],
        colorMap[color].light,
        colorMap[color].dark,
        intensityMap[intensity],
        'blur-3xl',
        className
      )}
      style={{ y: animate ? smoothY : 0 }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: [1, 1.05, 1],
        opacity: 1,
      }}
      transition={{
        scale: {
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        },
        opacity: {
          duration: 1.5,
        },
      }}
      aria-hidden="true"
    />
  )
}

// Floating orb that follows a gentle path
export function FloatingOrb({
  className,
  size = 'md',
  color = 'brand',
}: Omit<GradientOrbProps, 'animate' | 'parallaxSpeed'>) {
  return (
    <motion.div
      className={cn(
        'absolute rounded-full pointer-events-none',
        'bg-gradient-radial',
        sizeMap[size],
        colorMap[color].light,
        colorMap[color].dark,
        'blur-3xl opacity-50',
        className
      )}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    />
  )
}

// Ambient orbs layer for backgrounds
interface AmbientOrbsProps {
  variant?: 'hero' | 'section' | 'minimal'
  className?: string
}

export function AmbientOrbs({ variant = 'section', className }: AmbientOrbsProps) {
  if (variant === 'hero') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <GradientOrb
          size="xl"
          color="brand"
          intensity="medium"
          className="-top-1/4 -right-1/4"
          parallaxSpeed={0.3}
        />
        <GradientOrb
          size="lg"
          color="accent"
          intensity="subtle"
          className="top-1/2 -left-1/4"
          parallaxSpeed={0.5}
        />
        <FloatingOrb
          size="md"
          color="neutral"
          className="bottom-1/4 right-1/3"
        />
      </div>
    )
  }

  if (variant === 'minimal') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <GradientOrb
          size="md"
          color="brand"
          intensity="subtle"
          className="top-0 right-0"
          parallaxSpeed={0.2}
        />
      </div>
    )
  }

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <GradientOrb
        size="lg"
        color="brand"
        intensity="subtle"
        className="-top-1/3 -right-1/4"
        parallaxSpeed={0.4}
      />
      <GradientOrb
        size="md"
        color="accent"
        intensity="subtle"
        className="bottom-0 -left-1/4"
        parallaxSpeed={0.3}
      />
    </div>
  )
}
