import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Koliko unapred treba rezervisati termin?',
    a: 'Preporučujemo da termin zakažete 2-3 dana unapred, ali se uvek trudimo da izađemo u susret i hitnim zahtevima u roku od 24 sata.'
  },
  {
    q: 'Da li koristite svoju opremu i sredstva?',
    a: 'Da, naš tim dolazi potpuno opremljen najsavremenijim mašinama i profesionalnim, ekološkim sredstvima visokog kvaliteta.'
  },
  {
    q: 'Da li su vaši radnici provereni i osigurani?',
    a: 'Apsolutno. Svaki član našeg tima prolazi rigorozne bezbednosne provere i profesionalnu obuku. Takođe, naše usluge su potpuno osigurane.'
  },
  {
    q: 'Koliko traje dubinsko čišćenje nameštaja?',
    a: 'Prosečno vreme za dubinsko čišćenje ugaonog garniture je između 1.5 i 2.5 sata, zavisno od stepena zaprljanosti.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-0" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block italic">
            PITANJA I ODGOVORI
          </span>
          <h2 className="text-4xl font-serif font-bold text-white mb-4 tracking-tighter">Često postavljana pitanja.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={false}
              className={`rounded-[32px] border ${openIndex === i ? 'border-cyan-400 bg-white/5' : 'border-white/5 bg-white/2'} transition-all duration-300 overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-serif font-bold tracking-tight ${openIndex === i ? 'text-cyan-400' : 'text-white/70 group-hover:text-cyan-400 transition-colors'}`}>
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${openIndex === i ? 'bg-cyan-400 border-cyan-400 text-white shadow-lg shadow-cyan-400/20' : 'border-white/10 text-white/40'}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-8 pt-0 text-white/40 font-light leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
