import React from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

// Silk luxury cubic-bezier easing curve for organic mask expansions
const LUXURY_MASK_EASE = [0.16, 1, 0.3, 1] as const;

interface ScrollMaskRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'center';
  threshold?: number;
  id?: string;
}

export const ScrollMaskReveal: React.FC<ScrollMaskRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 1.1,
  direction = 'up',
  threshold = 0.15,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Natural vertical clipping mask progression
  const initialClip =
    direction === 'up'
      ? 'inset(14% 0% 0% 0% round 32px)'
      : direction === 'down'
      ? 'inset(0% 0% 14% 0% round 32px)'
      : 'inset(10% 2% 10% 2% round 32px)';

  const targetClip = 'inset(0% 0% 0% 0% round 48px)';

  const maskVariants: Variants = {
    hidden: {
      clipPath: shouldReduceMotion ? 'none' : initialClip,
      opacity: shouldReduceMotion ? 1 : 0.35,
      y: shouldReduceMotion ? 0 : 36,
      scale: shouldReduceMotion ? 1 : 0.985,
    },
    visible: {
      clipPath: shouldReduceMotion ? 'none' : targetClip,
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: LUXURY_MASK_EASE,
      },
    },
  };

  return (
    <motion.div
      id={id}
      variants={maskVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      className={className}
      style={{ willChange: 'clip-path, transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

// Staggered Card Mask Reveal for inner grid items
export const CardMaskReveal: React.FC<{
  children: React.ReactNode;
  index?: number;
  className?: string;
  baseDelay?: number;
}> = ({ children, index = 0, className = '', baseDelay = 0.05 }) => {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants: Variants = {
    hidden: {
      clipPath: shouldReduceMotion ? 'none' : 'inset(0% 0% 16% 0% round 24px)',
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      clipPath: shouldReduceMotion ? 'none' : 'inset(0% 0% 0% 0% round 32px)',
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.85,
        delay: shouldReduceMotion ? 0 : baseDelay + (index % 4) * 0.1,
        ease: LUXURY_MASK_EASE,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className={className}
      style={{ willChange: 'clip-path, transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};
