import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Users, Award, GlassWater, Heart } from 'lucide-react';

const benefits = [
  {
    title: 'Profesionalna Oprema',
    desc: 'Koristimo isključivo Karcher i Dyson tehnologiju najnovije generacije.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Pouzdan Tim',
    desc: 'Naši radnici prolaze stroge provere i kontinuiranu obuku za premium standarde.',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Eko Hemija',
    desc: 'Bezbedna za decu i kućne ljubimce. Vrhunski rezultati bez toksičnih isparenja.',
    icon: <GlassWater className="w-6 h-6" />
  },
  {
    title: 'Brzo Zakazivanje',
    desc: 'Vaše vreme je dragoceno. Odgovaramo na upite i izlazimo na teren u najkraćem roku.',
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: 'Garancija Kvaliteta',
    desc: 'Ukoliko niste 100% zadovoljni, vraćamo se da popravimo bez dodatne nadoknade.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Lokalna Ekspertiza',
    desc: 'Pokrivamo ceo Beograd: Voždovac, Zvezdara, Novi Beograd, Centar i širu okolinu.',
    icon: <Award className="w-6 h-6" />
  }
];

const WhyUs = () => {
  return (
    <section id="zasto-mi" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="meta-label text-cyan-400 mb-4"
            >
              Naša Vrednost
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-black mb-8 leading-[0.9] uppercase italic"
            >
              Zašto <br /> <span className="text-white/20">Call Clean?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/40 font-light max-w-md mb-12"
            >
              Mi nismo samo servis za čišćenje. Mi smo vaši partneri u kreiranju zdravog i inspirativnog okruženja za rad i život.
            </motion.p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <Heart size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Više od 500+ zadovoljnih klijenata</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest">Osigurani radovi i tim</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass rounded-[32px] hover:border-cyan-400/30 transition-all group"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform inline-block">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-serif font-bold mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed font-light">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
