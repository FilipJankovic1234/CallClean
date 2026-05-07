import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ClipboardCheck, Brush, Heart } from 'lucide-react';

const steps = [
  {
    title: 'Kontakt & Upit',
    desc: 'Pošaljite nam upit putem sajta ili nas pozovite. Naš tim odgovara u roku od 30 minuta.',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    title: 'Besplatna Procena',
    desc: 'Vršimo brzu procenu vašeg prostora i kreiramo personalizovan plan čišćenja.',
    icon: <ClipboardCheck className="w-6 h-6" />
  },
  {
    title: 'Premium Čišćenje',
    desc: 'Naši profesionalci dolaze sa kompletnom opremom i transformišu vaš prostor.',
    icon: <Brush className="w-6 h-6" />
  },
  {
    title: 'Potpuno Zadovoljstvo',
    desc: 'Završna provera kvaliteta sa klijentom. Vaša sreća je naša najveća nagrada.',
    icon: <Heart className="w-6 h-6" />
  }
];

const Process = () => {
  return (
    <section id="proces" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1581578736444-5954ef12f4e8?auto=format&fit=crop&q=80&w=2000" 
          alt="Process Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block italic">
            PUT DO SAVRŠENSTVA
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tighter">
            Kako kreiramo <br /> <span className="italic text-white/50">vašu oazu svežine.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="relative z-10 group"
              >
                <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 group-hover:border-cyan-400/30 backdrop-blur-sm transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-white/10 text-cyan-400 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 relative">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-cyan-400 text-white flex items-center justify-center font-bold text-xs">
                      0{i + 1}
                    </div>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-5 group-hover:text-cyan-400 transition-colors tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
