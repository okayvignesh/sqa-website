import type { Variants } from 'framer-motion';

export const easeSpring = [0.22, 1, 0.36, 1] as const;
export const easeExpo   = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeExpo } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.7, ease: easeExpo } },
};

export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay, delayChildren: 0.05 },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeSpring } },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeExpo } },
};

export const tiltOnHover = {
  whileHover: { y: -4 },
  transition: { type: 'spring' as const, stiffness: 220, damping: 18 },
};
