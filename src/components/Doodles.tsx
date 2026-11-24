import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const EASE_BEZIER = [0.16, 1, 0.3, 1] as const;

// Exact Neon Green Hand-Drawn Hashtag # symbol matching reference image
export const HeroHashtag: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 130 130" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: shouldReduceMotion ? 1 : 0, rotate: -18, opacity: 0 }}
      animate={{ scale: 1, rotate: -4, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 18,
        delay: 0.15,
      }}
      className={`select-none filter drop-shadow-[0_0_18px_rgba(168,255,0,0.7)] drop-shadow-[0_8px_16px_rgba(0,10,40,0.3)] ${className}`}
    >
      <motion.path 
        d="M 52 14 L 32 116" 
        stroke="#A8FF00" 
        strokeWidth="16" 
        strokeLinecap="round"
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: EASE_BEZIER }}
      />
      <motion.path 
        d="M 88 12 L 68 118" 
        stroke="#A8FF00" 
        strokeWidth="16" 
        strokeLinecap="round" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.35, ease: EASE_BEZIER }}
      />
      <motion.path 
        d="M 12 44 L 118 40" 
        stroke="#A8FF00" 
        strokeWidth="16" 
        strokeLinecap="round" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, delay: 0.5, ease: EASE_BEZIER }}
      />
      <motion.path 
        d="M 8 84 L 114 80" 
        stroke="#A8FF00" 
        strokeWidth="16" 
        strokeLinecap="round" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, delay: 0.65, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// Hand-Drawn Neon Green Top-Right Looping Arrow pointing toward pearl.eth card
export const TopRightArrow: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 180 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [-3, 3, -3],
        rotate: [-1, 2, -1],
      }}
      transition={{
        repeat: Infinity,
        duration: 4.5,
        ease: 'easeInOut',
      }}
      className={`select-none filter drop-shadow-[0_0_15px_rgba(168,255,0,0.6)] ${className}`}
    >
      <motion.path 
        d="M 50 110 C 35 25, 145 15, 140 85 C 136 125, 105 145, 80 160" 
        stroke="#A8FF00" 
        strokeWidth="12" 
        strokeLinecap="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 1.1, delay: 0.6, ease: EASE_BEZIER },
          opacity: { duration: 0.2, delay: 0.6 }
        }}
      />
      <motion.path 
        d="M 104 148 L 76 162 L 82 134" 
        stroke="#A8FF00" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 0.35, delay: 1.5, ease: EASE_BEZIER },
          opacity: { duration: 0.1, delay: 1.5 }
        }}
      />
    </motion.svg>
  );
};

// Hand-Drawn Neon Green Bottom-Left Curving Arrow pointing toward baseclub.eth card
export const BottomLeftArrow: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 180 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [3, -3, 3],
        rotate: [1, -2, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: 'easeInOut',
      }}
      className={`select-none filter drop-shadow-[0_0_15px_rgba(168,255,0,0.6)] ${className}`}
    >
      <motion.path 
        d="M 45 145 C 20 120, 25 75, 55 55 C 80 38, 115 50, 142 80" 
        stroke="#A8FF00" 
        strokeWidth="13" 
        strokeLinecap="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 1.1, delay: 0.75, ease: EASE_BEZIER },
          opacity: { duration: 0.2, delay: 0.75 }
        }}
      />
      <motion.path 
        d="M 116 78 L 144 80 L 138 108" 
        stroke="#A8FF00" 
        strokeWidth="13" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 0.35, delay: 1.65, ease: EASE_BEZIER },
          opacity: { duration: 0.1, delay: 1.65 }
        }}
      />
    </motion.svg>
  );
};

// Circular Neon Green "START A PROJECT" Rotating Badge with Center Arrow
export const GetStartedBadge: React.FC<{ onClick?: () => void; className?: string }> = ({ 
  onClick, 
  className = '' 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`relative rounded-full bg-neon-lime flex items-center justify-center cursor-pointer shadow-badge-neon transition-all duration-300 hover:scale-105 hover:shadow-[0_18px_45px_-6px_rgba(0,0,0,0.3),0_0_35px_rgba(168,255,0,0.65)] active:scale-95 group select-none ${className}`}
      title="Start a Project"
    >
      {/* Rotating Circular Text */}
      <svg 
        viewBox="0 0 200 200" 
        className="absolute inset-0 w-full h-full spin-slow group-hover:[animation-duration:8s]"
      >
        <path 
          id="badgeCirclePath" 
          d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" 
          fill="none"
        />
        <text className="font-archivo text-[14.5px] uppercase tracking-[0.22em] font-black fill-primary-black">
          <textPath href="#badgeCirclePath" startOffset="0%">
            START A PROJECT • EXPLORE SERVICES •
          </textPath>
        </text>
      </svg>

      {/* Center Black Doodle Curved Arrow with speed lines */}
      <svg 
        viewBox="0 0 80 80" 
        fill="none" 
        className="w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:rotate-12 duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
      >
        <path 
          d="M 26 54 C 30 40, 42 30, 58 26" 
          stroke="#080808" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        <path 
          d="M 44 24 L 59 26 L 57 41" 
          stroke="#080808" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M 23 42 C 28 32, 36 26, 46 22" 
          stroke="#080808" 
          strokeWidth="4" 
          strokeLinecap="round" 
          opacity="0.85" 
        />
      </svg>
    </div>
  );
};

// Hand-drawn Black connector arrow between Card 1 and Card 2 (Exact curve matching user's image)
export const ConnectorArrow1: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 70 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-9 h-9 lg:w-11 lg:h-11 select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Arch curving up-right and pointing downwards into Card 2 */}
      <motion.path 
        d="M 14 50 C 16 22, 42 16, 52 38" 
        stroke="#080808" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE_BEZIER }}
      />
      {/* Arrowhead pointing downwards */}
      <motion.path 
        d="M 40 32 L 53 40 L 55 24" 
        stroke="#080808" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.75, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// Hand-drawn Black connector arrow between Card 2 and Card 3 (Exact diagonal matching user's image)
export const ConnectorArrow2: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 70 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-9 h-9 lg:w-11 lg:h-11 select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Diagonal line pointing up-right into Card 3 */}
      <motion.path 
        d="M 16 52 L 52 18" 
        stroke="#080808" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE_BEZIER }}
      />
      {/* Arrowhead */}
      <motion.path 
        d="M 34 16 L 54 17 L 53 36" 
        stroke="#080808" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.85, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// Small neon circular sticker with black doodle arrow pointing up-right ↗ (matching Card 2 in user's image)
export const SmallNeonSticker: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neon-lime flex items-center justify-center shadow-pill-neon transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_24px_rgba(168,255,0,0.65)] select-none border border-black/15 ${className}`}
    >
      <svg 
        viewBox="0 0 32 32" 
        fill="none" 
        className="w-6 h-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
      >
        {/* Curving arrow pointing up-right ↗ */}
        <path 
          d="M 10 22 C 12 16, 17 12, 23 9" 
          stroke="#080808" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />
        <path 
          d="M 16 9 L 23 9 L 23 16" 
          stroke="#080808" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
};
