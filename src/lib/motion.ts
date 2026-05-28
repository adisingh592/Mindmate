import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const springTransition = {
  type: 'spring' as const,
  stiffness: 120,
  damping: 18,
  mass: 0.8,
};

export const viewportOnce = { once: true, margin: '-80px' as const, amount: 0.2 };
