import { motion, Variants, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, ReactNode } from 'react';

type Direction = 'left' | 'right' | 'up' | 'none';

interface CustomValues {
  delay: number;
  stiffness: number;
  damping: number;
}

interface AnimateOnViewProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  stiffness?: number;
  damping?: number;
  amount?: number | 'some' | 'all';
  disableInView?: boolean;
}

const createVariants = (direction: Direction): Variants => {
  let initialX = 0;
  let initialY = 0;

  if (direction === 'left') {
    initialX = -50;
  } else if (direction === 'right') {
    initialX = 50;
  } else if (direction === 'up') {
    initialY = 50;
  }

  return {
    hidden: { opacity: 0, x: initialX, y: initialY },
    visible: (custom: CustomValues) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: custom.stiffness,
        damping: custom.damping,
        delay: custom.delay,
      },
    }),
    reset: { opacity: 0, x: initialX, y: initialY },
  };
};

export default function AnimateOnView({
  children,
  direction = 'none',
  delay = 0,
  stiffness = 100,
  damping = 15,
  amount = 'some',
  disableInView = false,
}: AnimateOnViewProps) {
  const controls = useAnimation();
  const ref = useRef(null);

  const actualInView = useInView(ref, { once: false, amount: amount });
  const shouldAnimate = disableInView ? true : actualInView;
  const variants = createVariants(direction);
  const customValues: CustomValues = { stiffness, damping, delay };

  useEffect(() => {
    if (disableInView) return;

    if (shouldAnimate) {
      controls.start('visible');
    } else {
      controls.start('reset');
    }
  }, [controls, shouldAnimate, disableInView]);

  const commonProps = {
    ref,
    variants,
    custom: customValues,
    initial: 'hidden' as const,
  };

  if (disableInView) {
    return <motion.div {...commonProps}>{children}</motion.div>;
  }

  return (
    <motion.div {...commonProps} animate={controls}>
      {children}
    </motion.div>
  );
}
