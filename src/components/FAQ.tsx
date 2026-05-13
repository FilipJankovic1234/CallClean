import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Koliko traje čišćenje stanova ili kuća?',
    a: 'Trajanje zavisi od kvadrature i stanja prostora. Redovno čišćenje prosečnog stana traje 3-5 sati, dok generalno čišćenje nakon renoviranja može trajati ceo radni dan sa više radnika.'
  },
  {
    q: 'Da li dolazite na adresu u svim delovima Beograda?',
    a: 'Da, pokrivamo celu teritoriju Beograda, uključujući uži centar, Novi Beograd, Zvezdaru, Voždovac, Čukaricu, Zemun, kao i naselja poput Malog Mokrog Luga.'
  },
  {
    q: 'Koje usluge čišćenja nudite za poslovne prostore?',
    a: 'Nudimo redovno održavanje kancelarija, dubinsko pranje itisona, pranje staklenih fasada i prozora, kao i generalno čišćenje nakon građevinskih radova ili renoviranja poslovnih objekata.'
  },
  {
    q: 'Kako se vrši zakazivanje termina?',
    a: 'Termin možete zakazati veoma brzo putem poziva, WhatsApp-a ili kontakt forme na sajtu. Preporučujemo zakazivanje 2-3 dana unapred kako biste osigurali željeni termin.'
  },
  {
    q: 'Koje delove Beograda najčešće pokrivate?',
    a: 'Iako dolazimo svuda, najviše intervencija imamo na Novom Beogradu, Vračaru, Dedinju, Zvezdari i Voždovcu gde su naši klijenti sa najvišim zahtevima za higijenu.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="meta-label text-cyan-400 mb-4"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-black mb-8 leading-tight uppercase italic"
          >
            Sve što Vas <br /> <span className="text-white/20">zanima.</span>
          </motion.h2>
          <div className="h-20 w-[1px] bg-linear-to-b from-cyan-400 to-transparent" />
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={false}
              className={`rounded-[40px] border border-white/5 transition-all duration-500 overflow-hidden ${openIndex === i ? 'glass-dark' : 'bg-transparent'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 md:p-10 flex items-center justify-between text-left group"
              >
                <span className={`text-lg md:text-2xl font-serif font-bold tracking-tight transition-colors duration-500 ${openIndex === i ? 'text-white' : 'text-white/40 group-hover:text-white/60'}`}>
                  {faq.q}
                </span>
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-white text-black border-white' : 'border-white/10 text-white/20'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 md:px-10 pb-10 text-white/40 font-light leading-relaxed text-base">
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
