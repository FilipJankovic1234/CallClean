import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ClipboardCheck, Brush, Heart } from 'lucide-react';

const steps = [
  {
    title: 'Consultation',
    desc: 'Pošaljite nam upit. Naši savetnici analiziraju vaše specifične potrebe i kvadraturu prostora.',
    icon: <MessageSquare size={24} />
  },
  {
    title: 'Precision Plan',
    desc: 'Kreiramo personalizovan protokol čišćenja sa fokusom na kritične tačke i materijale.',
    icon: <ClipboardCheck size={24} />
  },
  {
    title: 'Elite Execution',
    desc: 'Naš tim dolazi na teren sa najmodernijom opremom i transformiše prostor do perfekcije.',
    icon: <Brush size={24} />
  },
  {
    title: 'Final Audit',
    desc: 'Zajednička verifikacija kvaliteta. Vaše zadovoljstvo je potvrda naše premium usluge.',
    icon: <Heart size={24} />
  }
];

const Process = () => {
  return (
    <section id="proces" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="meta-label text-cyan-400 mb-6"
          >
            Temporal Roadmap
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif font-black mb-8 leading-[0.85] uppercase italic"
          >
            Arhitektura <br /> <span className="text-white/20">Čistoće.</span>
          </motion.h2>
          <div className="h-20 w-[1px] bg-linear-to-b from-cyan-400 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[60px] overflow-hidden">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 md:p-14 bg-brand-dark relative flex flex-col justify-between h-[450px]"
            >
              <div className="absolute top-0 right-0 p-10 md:p-14 font-mono text-[80px] font-bold text-white/[0.03] group-hover:text-cyan-400/[0.05] transition-colors leading-none">
                0{i + 1}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  {step.icon}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-6 uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed font-light font-sans max-w-xs transition-colors group-hover:text-white/60">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
