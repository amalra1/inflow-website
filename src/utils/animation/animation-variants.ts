import { Variants } from 'framer-motion';

export const standardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const introImageFloatingVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    y: ['0%', '-5%', '0%'],
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      delay: 0.4,
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut',
      },
    },
  },
  reset: {
    opacity: 0,
    scale: 0.95,
    y: '0%',
    transition: {
      duration: 0.1,
    },
  },
};
