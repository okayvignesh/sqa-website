'use client'

import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  tiltEnabled?: boolean
  glowEnabled?: boolean
  hoverScale?: number
}

export function GlassCard({
  children,
  className,
  tiltEnabled = true,
  glowEnabled = true,
  hoverScale = 1.02,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !tiltEnabled) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-2xl',
        // Glass effect - light mode uses solid bg with subtle shadow
        'bg-white dark:bg-white/[0.03]',
        'backdrop-blur-xl backdrop-saturate-150',
        // Border - visible in both modes
        'border border-gray-200/80 dark:border-white/[0.08]',
        // Shadow - more visible in light mode
        'shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)]',
        'dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]',
        // Transition
        'transition-shadow duration-500',
        className
      )}
      style={{
        rotateX: tiltEnabled ? rotateX : 0,
        rotateY: tiltEnabled ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Light refraction highlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(
            105deg,
            transparent 40%,
            rgba(255, 255, 255, 0.1) 45%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.1) 55%,
            transparent 60%
          )`,
          opacity: isHovered ? 1 : 0,
        }}
        animate={{
          x: isHovered ? ['0%', '200%'] : '0%',
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Glow effect */}
      {glowEnabled && (
        <motion.div
          className="absolute -inset-px rounded-2xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(173, 25, 39, 0.2), transparent 50%)',
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Inner glow on hover - subtle in light mode, visible in dark */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none dark:block hidden"
        style={{
          boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)',
          opacity: isHovered ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

// Floating glass panel with depth
interface FloatingPanelProps {
  children: React.ReactNode
  className?: string
  depth?: 'shallow' | 'medium' | 'deep'
}

export function FloatingPanel({
  children,
  className,
  depth = 'medium',
}: FloatingPanelProps) {
  const depthStyles = {
    shallow: 'translate-z-4',
    medium: 'translate-z-8',
    deep: 'translate-z-16',
  }

  const shadowStyles = {
    shallow: 'shadow-lg',
    medium: 'shadow-xl',
    deep: 'shadow-2xl',
  }

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl',
        'bg-white dark:bg-zinc-900/70',
        'backdrop-blur-xl backdrop-saturate-150',
        'border border-gray-200/80 dark:border-white/10',
        shadowStyles[depth],
        className
      )}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -4,
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  )
}
