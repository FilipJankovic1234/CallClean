import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-dark pt-32 pb-20 md:py-0">
      {/* Immersive Atmospheric Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-brand-dark/20 via-brand-dark/40 to-brand-dark z-10" />
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
          alt="Luksuzno očišćen enterijer Beograd"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dynamic Gradients */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-cyan-500/20 blur-[150px] animate-premium-float" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[150px] animate-premium-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity: opacityText }}
          className="mb-8"
        >
          <span className="meta-label text-cyan-400">Elite Cleaning Service Belgrade</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[8vw] md:text-[6vw] lg:text-[80px] font-serif font-black leading-[1.0] tracking-[-0.03em] mb-12 uppercase italic"
        >
          Vaš dom, naša briga. <br />
          <span className="text-gradient text-[4.5vw] md:text-[3.5vw] lg:text-[42px] font-sans font-normal tracking-[0.02em] block mt-4 normal-case not-italic text-white">
            Profesionalno čišćenje stanova – Call Clean Beograd
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl text-white/50 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-12 md:px-0"
        >
          Specijalizovani smo za čišćenje najluksuznijih objekata u Beogradu. Od stanova na <span className="text-white">Novom Beogradu</span> do prestižnih rezidencija na <span className="text-white">Dedinju</span> i <span className="text-white">Zvezdari</span>.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8 }}
           className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#kontakt"
            className="group relative px-12 py-5 bg-white text-black font-bold text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-premium"
          >
            <span className="relative z-10">Zakaži Besplatnu Procenu</span>
            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
          
          <a
            href="#usluge"
            className="group px-12 py-5 border border-white/10 glass rounded-full text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-3"
          >
            Istraži Usluge <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Local SEO Text in Hero */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20 text-[10px] uppercase tracking-[0.3em] font-bold text-white/30"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white">01</span>
            <span>Novi Beograd</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white">02</span>
            <span>Zvezdara</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white">03</span>
            <span>Voždovac</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-white">04</span>
            <span>Vračar</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-20 bg-linear-to-b from-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
