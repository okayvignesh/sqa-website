import { Variants } from 'framer-motion'

// ═══════════════════════════════════════════════════════════
// GLOBAL MOTION PRINCIPLES
// ═══════════════════════════════════════════════════════════
// Duration: 0.4-0.8s for most animations
// Easing: cubic-bezier(0.16, 1, 0.3, 1) — "out-expo" for smooth deceleration
// Spring: stiffness 100-300, damping 20-30 for natural feel
// Stagger: 0.05-0.1s between children

export const easings = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  outQuint: [0.22, 1, 0.36, 1] as const,
  outBack: [0.34, 1.56, 0.64, 1] as const,
  inOutCubic: [0.65, 0, 0.35, 1] as const,
}

export const spring = {
  gentle: { type: 'spring', stiffness: 100, damping: 20 },
  snappy: { type: 'spring', stiffness: 300, damping: 25 },
  bouncy: { type: 'spring', stiffness: 400, damping: 15 },
}

// ═══════════════════════════════════════════════════════════
// FADE VARIANTS
// ═══════════════════════════════════════════════════════════

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easings.outExpo },
  },
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.outExpo },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.outExpo },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easings.outExpo },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: easings.outExpo },
  },
}

// ═══════════════════════════════════════════════════════════
// SCALE VARIANTS
// ═══════════════════════════════════════════════════════════

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easings.outExpo },
  },
}

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring.bouncy,
  },
}

// ═══════════════════════════════════════════════════════════
// BLUR VARIANTS
// ═══════════════════════════════════════════════════════════

export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easings.outExpo },
  },
}

// ═══════════════════════════════════════════════════════════
// STAGGER CONTAINER VARIANTS
// ═══════════════════════════════════════════════════════════

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

// ═══════════════════════════════════════════════════════════
// HERO SPECIFIC VARIANTS
// ═══════════════════════════════════════════════════════════

export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easings.outExpo },
  },
}

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easings.outExpo, delay: 0.2 },
  },
}

export const heroCTA: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easings.outExpo, delay: 0.4 },
  },
}

export const heroVisual: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: easings.outExpo, delay: 0.5 },
  },
}

// ═══════════════════════════════════════════════════════════
// CARD VARIANTS
// ═══════════════════════════════════════════════════════════

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: { duration: 0.3, ease: easings.outExpo },
  },
}

export const cardTap = {
  tap: { scale: 0.98 },
}

// ═══════════════════════════════════════════════════════════
// BUTTON VARIANTS
// ═══════════════════════════════════════════════════════════

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
}

export const buttonGlow = {
  rest: { boxShadow: '0 0 0 rgba(173, 25, 39, 0)' },
  hover: { boxShadow: '0 0 30px rgba(173, 25, 39, 0.3)' },
}

// ═══════════════════════════════════════════════════════════
// FLOAT ANIMATION (for ambient elements)
// ═══════════════════════════════════════════════════════════

export const float = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-8, 8, -8],
    rotate: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const floatDelayed = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [8, -8, 8],
    rotate: [1, -1, 1],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1,
    },
  },
}

// ═══════════════════════════════════════════════════════════
// SCROLL PROGRESS VARIANTS
// ═══════════════════════════════════════════════════════════

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easings.outExpo },
  },
}

export const scrollRevealLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easings.outExpo },
  },
}

export const scrollRevealRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easings.outExpo },
  },
}
