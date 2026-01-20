'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CursorGlowProps {
  className?: string
  size?: number
  color?: string
}

export function CursorGlow({ className, size = 400, color }: CursorGlowProps) {
  const [mounted, setMounted] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 150 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - size / 2)
      cursorY.set(e.clientY - size / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY, size])

  if (!mounted) return null

  return (
    <motion.div
      className={cn(
        'fixed pointer-events-none z-0',
        'rounded-full blur-3xl',
        'bg-gradient-radial from-brand-500/10 via-brand-400/5 to-transparent',
        'dark:from-brand-500/15 dark:via-brand-400/8 dark:to-transparent',
        className
      )}
      style={{
        x: smoothX,
        y: smoothY,
        width: size,
        height: size,
      }}
      aria-hidden="true"
    />
  )
}

// Spotlight effect that follows cursor within a container
interface SpotlightProps {
  className?: string
  size?: number
}

export function Spotlight({ className, size = 300 }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
    })
  }

  const handleMouseEnter = () => setOpacity(1)
  const handleMouseLeave = () => setOpacity(0)

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: size,
          height: size,
          left: position.x,
          top: position.y,
          background: 'radial-gradient(circle, rgba(173, 25, 39, 0.15) 0%, transparent 70%)',
        }}
        animate={{ opacity }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />
    </div>
  )
}
