import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Instagram } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
      <motion.a
        href="https://wa.me/+381653201671"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1, x: 5 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
      </motion.a>
      
      <motion.a
        href="https://www.instagram.com/ciscenje_call_clean1/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, x: 5 }}
        className="w-14 h-14 bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white rounded-full shadow-[0_10px_30px_rgba(221,42,123,0.4)] flex items-center justify-center group"
      >
        <Instagram size={28} className="group-hover:rotate-12 transition-transform" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
