import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';

interface GenoraPreloaderProps {
  onComplete?: () => void;
}

const EASE_SPRING = [0.175, 0.885, 0.32, 1.275] as const;
const EASE_WOBBLE = [0.34, 1.56, 0.64, 1] as const;
const EASE_SETTLE = [0.19, 1, 0.22, 1] as const;

export const GenoraPreloader: React.FC<GenoraPreloaderProps> = ({ onComplete }) => {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<'initial' | 'reveal' | 'morph' | 'settled' | 'exit' | 'done'>('initial');

  useEffect(() => {
    // Lock body scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Sequence timeline:
    // 0.0s – 0.5s: Initial reveal through liquid clipping mask
    const t0 = setTimeout(() => {
      setPhase('reveal');
    }, 50);

    // 0.5s – 2.0s: Typography fluid stretch, morph and staggered letter wave
    const t1 = setTimeout(() => {
      setPhase('morph');
    }, shouldReduceMotion ? 100 : 500);

    // 2.0s – 2.7s: Final elastic settle into perfectly sharp logo
    const t2 = setTimeout(() => {
      setPhase('settled');
    }, shouldReduceMotion ? 250 : 2000);

    // 2.7s – 3.0s: Exit transition via circular/liquid mask wipe revealing site
    const t3 = setTimeout(() => {
      setPhase('exit');
    }, shouldReduceMotion ? 400 : 2700);

    // Complete at 3.15s, restore scroll and unmount
    const t4 = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = originalOverflow;
      if (onComplete) onComplete();
    }, shouldReduceMotion ? 500 : 3150);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldReduceMotion, onComplete]);

  if (phase === 'done') return null;

  // Individual letter animation variants with elastic bounce & fluid squash/stretch
  const letterVariants: Variants = {
    initial: {
      scale: 0.8,
      scaleY: 0.65,
      scaleX: 1.25,
      y: 40,
      opacity: 0,
    },
    reveal: (i: number) => ({
      scale: 1,
      scaleY: 1,
      scaleX: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        delay: shouldReduceMotion ? 0 : 0.08 + i * 0.07,
        ease: EASE_SPRING,
      },
    }),
    morph: (i: number) => ({
      scale: [1, 1.05, 0.98, 1.02, 1],
      scaleY: [1, 1.14, 0.93, 1.03, 1],
      scaleX: [1, 0.92, 1.06, 0.98, 1],
      y: [0, -14, 4, -2, 0],
      transition: {
        duration: shouldReduceMotion ? 0.2 : 1.35,
        delay: shouldReduceMotion ? 0 : 0.1 + i * 0.09,
        ease: EASE_WOBBLE,
      },
    }),
    settled: {
      scale: 1,
      scaleY: 1,
      scaleX: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: EASE_SETTLE,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key="genora-preloader-overlay"
        initial={{
          clipPath: 'circle(150% at 50% 50%)',
        }}
        animate={
          phase === 'exit'
            ? {
                clipPath: 'circle(0% at 50% 50%)',
                transition: { duration: 0.45, ease: [0.77, 0, 0.175, 1] as const },
              }
            : {
                clipPath: 'circle(150% at 50% 50%)',
              }
        }
        className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center select-none overflow-hidden"
        style={{ willChange: 'clip-path' }}
      >
        <div className="relative w-full max-w-[960px] px-6 sm:px-12 flex flex-col items-center justify-center">
          
          {/* Main Logo Container */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{
              scale: phase === 'exit' ? 1.08 : phase === 'settled' ? 1 : 0.98,
              opacity: 1,
            }}
            transition={{
              duration: 0.65,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="w-full flex items-center justify-center"
          >
            {/*
              CUSTOM VECTOR ORGANIC BUBBLE TYPOGRAPHY: GENORA
              Inspired by chunky 70s psych-rock bubble lettering (Cutpile Studio reference).
              Color: Vibrant Royal Blue #2857CC on clean white background.
            */}
            <svg
              viewBox="0 0 1060 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto max-h-[36vh] drop-shadow-[0_18px_45px_rgba(40,87,204,0.15)]"
            >
              <defs>
                {/* Pure Vibrant Royal Blue Gradient */}
                <linearGradient id="genoraRoyalBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3064E8" />
                  <stop offset="45%" stopColor="#2857CC" />
                  <stop offset="100%" stopColor="#1E44B0" />
                </linearGradient>

                {/* Organic Liquid Reveal Clip Mask */}
                <clipPath id="liquidRevealPath">
                  <motion.circle
                    cx="530"
                    cy="140"
                    initial={{ r: 0 }}
                    animate={{ r: phase === 'initial' ? 0 : 700 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  />
                </clipPath>
              </defs>

              <g clipPath="url(#liquidRevealPath)">
                {/* =========================================================
                    LETTER 1: 'G' (Bulbous bubble loop with inner teardrop)
                   ========================================================= */}
                <motion.g
                  custom={0}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : phase === 'settled' || phase === 'exit' ? 'settled' : 'reveal'}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M115 28C164 24 196 54 200 100C203 128 191 150 174 162C167 167 159 170 148 171C146 181 149 190 160 192C175 195 193 189 204 183C211 179 217 184 216 193C213 220 201 252 170 264C134 278 76 276 43 238C13 205 9 152 15 103C22 51 64 32 115 28ZM118 84C94 86 76 105 73 137C69 171 84 207 117 209C134 210 147 200 149 183C136 181 125 178 114 174C105 170 104 156 113 152C126 146 141 145 151 144C153 124 150 101 138 90C133 85 126 83 118 84Z"
                    fill="url(#genoraRoyalBlue)"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 2: 'E' (Curved squishy spine with 3 pillowy arms)
                   ========================================================= */}
                <motion.g
                  custom={1}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : phase === 'settled' || phase === 'exit' ? 'settled' : 'reveal'}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M238 36C286 30 351 27 361 65C367 88 351 100 327 104C306 107 286 108 282 121C298 118 319 117 336 124C351 130 353 147 344 157C333 169 312 170 283 171C282 187 286 196 306 197C327 198 349 190 365 181C372 177 379 184 377 196C373 224 356 257 318 266C276 276 235 264 223 224C210 183 213 99 220 60C223 43 230 37 238 36Z"
                    fill="url(#genoraRoyalBlue)"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 3: 'N' (Plump bulbous pillars & fluid diagonal)
                   ========================================================= */}
                <motion.g
                  custom={2}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : phase === 'settled' || phase === 'exit' ? 'settled' : 'reveal'}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M400 42C420 36 443 46 447 67C451 86 452 110 455 137C471 105 494 65 519 44C541 26 569 36 575 64C581 92 578 189 576 228C575 251 558 265 539 264C520 263 514 246 515 226C517 195 519 152 520 131C503 162 478 210 456 241C442 260 422 267 408 255C394 245 392 226 393 202C396 156 395 89 392 58C391 50 394 45 400 42Z"
                    fill="url(#genoraRoyalBlue)"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 4: 'O' (Tilted plump pebble with organic counter)
                   ========================================================= */}
                <motion.g
                  custom={3}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : phase === 'settled' || phase === 'exit' ? 'settled' : 'reveal'}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M682 30C736 28 782 65 784 120C786 177 756 249 697 268C639 285 587 254 577 197C567 139 591 60 652 37C662 33 673 31 682 30ZM680 89C653 90 631 117 633 153C635 192 652 215 677 214C703 213 725 186 723 150C721 113 705 88 680 89Z"
                    fill="url(#genoraRoyalBlue)"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 5: 'R' (Huge round head with sweeping flared leg)
                   ========================================================= */}
                <motion.g
                  custom={4}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : phase === 'settled' || phase === 'exit' ? 'settled' : 'reveal'}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M804 38C853 31 922 32 928 80C933 117 913 145 875 155C895 172 915 201 929 234C940 256 926 272 906 269C888 266 874 251 863 230C848 202 833 179 818 175C813 174 811 179 811 189C810 210 810 241 808 254C807 266 797 272 784 269C772 266 767 254 767 239C769 187 769 95 774 59C777 44 788 40 804 38ZM813 87C812 105 812 126 813 138C829 138 853 136 862 126C871 116 874 102 869 92C862 80 840 81 824 83C819 84 815 85 813 87Z"
                    fill="url(#genoraRoyalBlue)"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 6: 'A' (Plump dome with splayed feet & drop counter)
                   ========================================================= */}
                <motion.g
                  custom={5}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : phase === 'settled' || phase === 'exit' ? 'settled' : 'reveal'}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1000 28C1038 26 1067 51 1072 87C1078 128 1080 198 1085 238C1087 256 1074 269 1055 268C1037 267 1029 252 1027 234C1025 216 1023 202 1022 190C1001 191 974 192 958 194C955 210 952 230 948 244C942 261 928 270 911 266C897 262 891 247 896 229C905 187 929 101 959 55C970 38 985 30 1000 28ZM996 91C983 116 971 148 965 165C980 163 1000 161 1015 160C1013 141 1011 120 1007 100C1005 91 1000 86 996 91Z"
                    fill="url(#genoraRoyalBlue)"
                  />
                </motion.g>
              </g>
            </svg>
          </motion.div>

          {/* Subtitle tag beneath the lettering */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={
              phase === 'morph' || phase === 'settled'
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10 }
            }
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 sm:mt-8 flex items-center space-x-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#2857CC] animate-ping" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.34em] text-[#2857CC] uppercase">
              CREATIVE TECHNOLOGY &bull; AI STUDIO
            </span>
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};
