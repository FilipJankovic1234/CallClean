import React from 'react';
import { motion } from 'motion/react';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-brand-dark"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="text-4xl md:text-6xl font-display font-bold text-white tracking-widest mb-4">
          CALL<span className="text-brand-accent">CLEAN</span>
        </div>
        <motion.div
          className="h-0.5 bg-brand-accent w-0"
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5 }}
        className="text-white/60 text-sm mt-8 tracking-[0.3em] font-light"
      >
        PREMIUM ČIŠĆENJE ZA PREMIJUM PROSTORE
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
