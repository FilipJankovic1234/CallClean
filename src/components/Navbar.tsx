import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', href: '#' },
    { name: 'Usluge', href: '#usluge' },
    { name: 'Zašto mi', href: '#zasto-mi' },
    { name: 'Galerija', href: '#galerija' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <>
      {/* Luxury Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-400 z-[120] origin-left"
        style={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled ? 'py-3 glass-dark border-b border-white/5' : 'py-6 md:py-10 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center group relative z-[110]"
          >
            <div className="relative w-16 h-16 md:w-28 md:h-28 flex items-center justify-center -my-2 md:-my-6">
              <img 
                src="/logo.svg" 
                alt="Profesionalno čišćenje Beograd - Call Clean logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] scale-150 transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.2 }}
                className="meta-label hover:text-cyan-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="tel:+381653201671"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 hover:text-white transition-all shadow-premium"
            >
              Pozovi odmah
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-[110] p-4 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-[1px] bg-white transition-all duration-500 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-[1px] bg-white transition-all duration-500 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[100] bg-brand-dark flex flex-col p-8 md:hidden overflow-hidden"
            >
              {/* Decorative Circle in Mobile Menu */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

              <div className="flex flex-col gap-6 mt-32 px-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className={`text-6xl font-serif font-black flex items-center gap-4 ${
                      i % 2 !== 0 ? 'italic text-white' : 'text-white/20'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-xs font-mono text-cyan-400/40">0{i + 1}</span>
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-auto flex flex-col gap-8 mb-12 px-4">
                <div className="h-[1px] w-full bg-white/5" />
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  href="tel:+381653201671"
                  className="w-full py-6 bg-white text-black rounded-3xl flex items-center justify-center gap-4 font-bold text-xs tracking-widest uppercase"
                >
                  <Phone size={16} /> Elite Support
                </motion.a>
                <div className="flex justify-center gap-10 text-white/20 text-[8px] tracking-[0.4em] uppercase font-bold">
                  <a href="#">Instagram</a>
                  <a href="#">WhatsApp</a>
                  <a href="#">Email</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
