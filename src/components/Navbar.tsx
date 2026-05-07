import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

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
    { name: 'O nama', href: '#o-nama' },
    { name: 'Galerija', href: '#galerija' },
    { name: 'Proces', href: '#proces' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500 ${
        scrolled ? 'py-4 glass border-b border-white/5 shadow-2xl' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group"
        >
          <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center -my-4 md:-my-6">
            <img 
              src="/logo.svg" 
              alt="CALL CLEAN Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xl md:text-2xl font-serif font-black tracking-tighter leading-none flex items-center">
              CALL<span className="text-cyan-400 group-hover:text-blue-400 transition-colors">CLEAN</span>
            </span>
            <span className="text-[8px] md:text-[10px] text-white/40 font-bold uppercase tracking-[0.4em] mt-1 italic">
              Elite Cleaning
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-medium text-white/70 tracking-widest uppercase transition-all relative group hover:text-cyan-400"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            href="tel:+381653201671"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all border border-white/20 shadow-lg shadow-cyan-400/10"
          >
            Pozovi odmah
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white mix-blend-difference"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-brand-accent/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-display font-medium text-brand-dark"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+381653201671"
                className="w-full py-4 bg-brand-accent text-white rounded-xl flex items-center justify-center gap-3 font-bold"
              >
                <Phone size={18} /> POZOVI ODMAH
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
