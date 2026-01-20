'use client';

import { motion } from 'motion/react';

export const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Primary Blob */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] h-[50vh] w-[50vh] rounded-full bg-primary/20 blur-[100px] will-change-transform"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Blob */}
      <motion.div
        className="absolute top-[20%] right-[0%] h-[60vh] w-[60vh] rounded-full bg-accent/20 blur-[120px] will-change-transform"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Tertiary Blob (Bottom) */}
      <motion.div
        className="absolute -bottom-[20%] left-[20%] h-[70vh] w-[70vh] rounded-full bg-secondary/10 blur-[140px] will-change-transform"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay opacity-20 dark:opacity-40" />
    </div>
  );
};
