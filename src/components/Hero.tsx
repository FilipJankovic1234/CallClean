import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-accent/30 rounded-full blur-[120px] z-0"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px] z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-8 border border-cyan-400/30 rounded-full bg-cyan-400/5 backdrop-blur-sm"
          >
            <span className="text-cyan-400 text-[10px] uppercase tracking-[0.4em] font-bold italic">
              Ekskluzivni servis u Beogradu
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-[84px] font-serif leading-[0.9] tracking-tighter mb-8"
          >
            Profesionalno čišćenje <br />
            <span className="italic text-white/50">koje vaš prostor zaslužuje.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light"
          >
            Hiper-detaljni pristup održavanju higijene za najprestižnije enterijere. Spoj moderne tehnologije i besprekorne pedantnosti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a
              href="#kontakt"
              className="px-12 py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm uppercase tracking-widest rounded-xl transition-all hover:scale-105 shadow-xl shadow-cyan-500/20 active:scale-95"
            >
              Zakaži Termin
            </a>
            
            <a
              href="#usluge"
              className="px-12 py-5 border border-white/10 bg-white/5 backdrop-blur-sm text-white font-bold text-sm uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all active:scale-95"
            >
              Naše Usluge
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-[400px] h-[500px] rounded-[60px] border border-white/10 bg-white/5 backdrop-blur-2xl relative flex items-center justify-center p-12 overflow-hidden group shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
            alt="Premium Detail"
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-brand-dark/40" />
          <div className="absolute top-[-20px] right-[-20px] w-48 h-48 bg-cyan-400/20 rounded-full blur-[60px] group-hover:bg-cyan-400/30 transition-colors" />
          <div className="relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-7xl font-serif mb-3 tracking-tighter"
            >
              99.9%
            </motion.div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">Zadovoljstvo klijenta</div>
            <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-5xl font-serif mb-2 tracking-tighter"
            >
              24/7
            </motion.div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Premium podrška</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-medium">Scroll down</span>
        <div className="w-[1px] h-12 bg-linear-to-b from-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
