import React from 'react';
import { motion } from 'motion/react';
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-cyan-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center mb-10 group">
              <div className="relative w-32 h-32 flex items-center justify-center -ml-6">
                <img 
                  src="/logo.svg" 
                  alt="CALL CLEAN Logo" 
                  className="w-full h-full object-contain opacity-90 group-hover:scale-105 transition-transform"
                />
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed font-light mb-10 max-w-xs">
              Elite higijenski sistemi za <span className="text-white/60">Beograd</span>. Postavljamo nove standarde u održavanju luksuznih stambenih i poslovnih objekata.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/ciscenje_call_clean1/" },
                { Icon: MessageCircle, href: "https://wa.me/381653201671" }
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/40 hover:bg-cyan-400 hover:text-white transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="meta-label text-cyan-400 mb-10">Usluge</h4>
            <ul className="space-y-5">
              {[
                { label: 'Čišćenje stanova', href: '#usluge' },
                { label: 'Poslovni prostori', href: '#usluge' },
                { label: 'Dubinsko pranje', href: '#usluge' },
                { label: 'Prozori i stakla', href: '#usluge' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-white/30 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] font-bold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="meta-label text-cyan-400 mb-10">Brzi Linkovi</h4>
            <ul className="space-y-5">
              {[
                { label: 'Zašto Mi?', href: '#zasto-mi' },
                { label: 'Galerija Radova', href: '#galerija' },
                { label: 'FAQ - Pitanja', href: '#faq' },
                { label: 'Kontakt Portal', href: '#kontakt' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-white/30 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] font-bold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="meta-label text-cyan-400 mb-10">Lokacije</h4>
            <p className="text-[10px] text-white/40 font-mono leading-loose uppercase tracking-widest">
              Novi Beograd • Vračar • Zvezdara • Voždovac • Dedinje • Senjak • Zemun • Centar • Mali Mokri Lug
            </p>
            <div className="mt-10 p-6 glass-dark rounded-3xl border-white/5">
              <span className="text-[10px] text-cyan-400 font-bold block mb-2 uppercase">Call Centar</span>
              <a href="tel:+381653201671" className="text-xl font-serif font-bold tracking-tighter">065 320 1671</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-white/20 text-[10px] uppercase font-bold tracking-[0.2em]">
              © {currentYear} CALL CLEAN BEOGRAD. PREMIUM HYGIENE SYSTEMS.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[8px] uppercase tracking-widest text-white/10 hover:text-white/30 transition-colors">Politika Privatnosti</a>
              <a href="#" className="text-[8px] uppercase tracking-widest text-white/10 hover:text-white/30 transition-colors">Uslovi Korišćenja</a>
            </div>
          </div>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-white/20 hover:bg-cyan-400 hover:text-white transition-all shadow-premium"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
      
      {/* SEO Bottom Text */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pb-8">
        <p className="text-[8px] leading-relaxed text-white/5 uppercase tracking-[0.2em] text-justify">
          Profesionalno čišćenje stanova Beograd, čišćenje kuća, kancelarija i poslovnih prostora. Dubinsko pranje nameštaja Novi Beograd, Zvezdara, Voždovac. Servis za čišćenje Beograd sa garancijom kvaliteta. Generalno čišćenje nakon renoviranja i građevinskih radova. Pranje prozora na visini. Elite hygiene solutions for Belgrade.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
