'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import * as variants from './motion-variants'

// ═══════════════════════════════════════════════════════════
// SCROLL REVEAL COMPONENT
// ═══════════════════════════════════════════════════════════

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  variant?: 'fade' | 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur'
  delay?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })

  const variantMap = {
    fade: variants.fadeIn,
    fadeUp: variants.fadeInUp,
    fadeLeft: variants.fadeInLeft,
    fadeRight: variants.fadeInRight,
    scale: variants.scaleIn,
    blur: variants.blurIn,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variantMap[variant]}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// STAGGER CHILDREN COMPONENT
// ═══════════════════════════════════════════════════════════

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  speed?: 'fast' | 'normal' | 'slow'
}

export function StaggerChildren({
  children,
  className,
  speed = 'normal',
}: StaggerChildrenProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    fast: variants.staggerContainerFast,
    normal: variants.staggerContainer,
    slow: variants.staggerContainerSlow,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants[speed]}
    >
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// STAGGER ITEM COMPONENT
// ═══════════════════════════════════════════════════════════

interface StaggerItemProps {
  children: React.ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={variants.fadeInUp}>
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// MAGNETIC BUTTON COMPONENT
// ═══════════════════════════════════════════════════════════

interface MagneticProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className, strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = (e.clientX - centerX) * strength
    const distanceY = (e.clientY - centerY) * strength

    x.set(distanceX)
    y.set(distanceY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={cn('magnetic', className)}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// PARALLAX COMPONENT
// ═══════════════════════════════════════════════════════════

interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export function Parallax({
  children,
  className,
  speed = 0.5,
  direction = 'up',
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [elementTop, setElementTop] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const updatePosition = () => {
      const rect = element.getBoundingClientRect()
      setElementTop(rect.top + window.scrollY)
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const y = useTransform(
    useMotionValue(scrollY),
    [elementTop - window.innerHeight, elementTop + window.innerHeight],
    direction === 'up' ? [speed * 100, -speed * 100] : [-speed * 100, speed * 100]
  )

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// FLOATING ELEMENT COMPONENT
// ═══════════════════════════════════════════════════════════

interface FloatingProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Floating({ children, className, delay = 0 }: FloatingProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [-8, 8, -8],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// ANIMATED COUNTER COMPONENT (Enhanced)
// ═══════════════════════════════════════════════════════════

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  className,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(value * easeOut))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

// ═══════════════════════════════════════════════════════════
// TEXT REVEAL COMPONENT (Character by character)
// ═══════════════════════════════════════════════════════════

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      className={cn('inline-block', className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.02,
            delayChildren: delay,
          },
        },
      }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4, ease: variants.easings.outExpo },
            },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// ═══════════════════════════════════════════════════════════
// CURSOR FOLLOWER COMPONENT
// ═══════════════════════════════════════════════════════════

export function CursorFollower() {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springX = useSpring(cursorX, { stiffness: 500, damping: 50 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-brand-700/20 pointer-events-none z-50 mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  )
}
