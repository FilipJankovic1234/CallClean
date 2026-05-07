import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-4 mb-8 group">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <img 
                  src="/logo.svg" 
                  alt="CALL CLEAN Logo" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl font-serif font-black tracking-tighter leading-none">
                  CALL<span className="text-cyan-400">CLEAN</span>
                </span>
                <span className="text-[6px] text-white/40 font-bold uppercase tracking-[0.4em] mt-0.5 italic">
                  Elite Cleaning
                </span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed font-light mb-8 max-w-xs">
              Vodeća snaga u domenu profesionalnog čišćenja u Srbiji. Transformišemo prostore, podižemo standarde i gradimo poverenje kroz hiper-pedantnost.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/ciscenje_call_clean1/" },
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-8 italic">Usluge</h4>
            <ul className="space-y-4">
              {['Čišćenje stanova', 'Dubinsko čišćenje', 'Poslovni prostori', 'Luksuzno održavanje'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-white/40 hover:text-cyan-400 transition-colors uppercase tracking-widest font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-8 italic">Kompanija</h4>
            <ul className="space-y-4">
              {['O nama', 'Galerija radova', 'Karijera', 'Politika privatnosti'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-white/40 hover:text-cyan-400 transition-colors uppercase tracking-widest font-bold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-8 italic">Newsletter</h4>
            <p className="text-xs text-white/40 mb-6 font-light uppercase tracking-widest">Prijavite se za elite savete.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Vaša email adresa"
                className="w-full px-6 py-4 bg-white/5 rounded-2xl border border-white/10 focus:outline-hidden focus:border-cyan-400 transition-all text-xs text-white"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-cyan-400 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-cyan-500 transition-colors">
                Pridruži se
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.2em]">
            © 2026 CALL CLEAN PREMIUM. Sva prava zadržana.
          </p>
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-cyan-500 hover:text-white transition-all shadow-xl"
          >
            <ArrowUp size={22} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
