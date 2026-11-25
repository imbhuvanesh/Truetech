import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DesignerAvatar, DeveloperAvatar, PunkAvatar, ApeAvatar } from './Avatars';

interface FloatingNFTCardProps {
  type: 'designer' | 'developer' | 'punk' | 'ape';
  name: string;
  points: string;
  role?: string;
  defaultRotate: number;
  className?: string;
  floatDelay?: number;
}

export const FloatingNFTCard: React.FC<FloatingNFTCardProps> = ({
  type,
  name,
  points,
  role,
  defaultRotate,
  className = '',
  floatDelay = 0,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics using spring motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 28 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 28 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const renderAvatar = () => {
    switch (type) {
      case 'designer':
        return <DesignerAvatar size={66} className="sm:w-[74px] sm:h-[74px] shadow-md border-[2.5px] border-white" />;
      case 'developer':
        return <DeveloperAvatar size={66} className="sm:w-[74px] sm:h-[74px] shadow-md border-[2.5px] border-white" />;
      case 'punk':
        return <PunkAvatar size={66} className="sm:w-[74px] sm:h-[74px] shadow-md border-[2.5px] border-white" />;
      case 'ape':
      default:
        return <ApeAvatar size={66} className="sm:w-[74px] sm:h-[74px] shadow-md border-[2.5px] border-white" />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.88, y: 35 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, delay: floatDelay, ease: [0.19, 1, 0.22, 1] }}
      style={{
        transformStyle: 'preserve-3d',
      }}
      className={`relative z-20 cursor-pointer select-none ${className}`}
    >
      <motion.div
        animate={{
          y: [-5, 5, -5],
          rotate: [defaultRotate - 1, defaultRotate + 1, defaultRotate - 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 8.5,
          ease: 'easeInOut',
          delay: floatDelay,
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.45, ease: [0.19, 1, 0.22, 1] },
        }}
        /* Clean, visually independent container without murky overlays or fuzzy layers */
        className="bg-[#031B5B] border-2 border-white/40 rounded-[28px] p-5 sm:p-6 flex flex-col items-center justify-center min-w-[155px] sm:min-w-[180px] md:min-w-[200px] shadow-[0_20px_50px_rgba(0,10,50,0.55)] hover:border-white hover:shadow-[0_25px_60px_rgba(0,10,60,0.7)] transition-all duration-300"
      >
        {/* Avatar with pure white border ring */}
        <div className="relative mb-3 sm:mb-3.5">
          {renderAvatar()}
        </div>

        {/* Name in DM Sans Bold */}
        <div className="font-sans text-white text-sm sm:text-[15px] font-bold tracking-tight text-center drop-shadow-[0_2px_4px_rgba(0,10,40,0.6)]">
          {name}
        </div>

        {/* Role */}
        {role && (
          <div className="font-sans text-neon-lime text-[11px] font-semibold tracking-wide mt-0.5 text-center">
            {role}
          </div>
        )}

        {/* Points / Rating Badge */}
        <div className="mt-3 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-sans text-[11px] font-medium tracking-tight text-center">
          {points}
        </div>
      </motion.div>
    </motion.div>
  );
};
