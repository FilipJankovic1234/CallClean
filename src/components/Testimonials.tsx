import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const initialTestimonials = [
  {
    name: 'Marko Jovanović',
    role: 'Vlasnik Biznisa, Novi Beograd',
    content: 'Call Clean je jedini servis u Beogradu koji zaista razume šta znači beskompromisna čistoća u premijum objektima.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Jelena Petrović',
    role: 'Arhitekta, Vračar',
    content: 'Njihov pristup čišćenju enterijera je naučan. Nakon renoviranja, transformisali su gradilište u čist luksuz za samo par sati.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Dragan Nikolić',
    role: 'Investitor, Dedinje',
    content: 'Pouzdanost je ključna. Call Clean tim je diskretan, brz i neverovatno temeljan. Standard koji Beograd zaslužuje.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    rating: 5
  }
];

const Testimonials = () => {
  const list = initialTestimonials;

  return (
    <section id="utisci" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-400/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-end mb-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="meta-label text-cyan-400 mb-6"
            >
              Elite Social Proof
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-serif font-black mb-8 leading-[0.85] uppercase italic"
            >
              Reč onih <br /> <span className="text-white/20">koji znaju razliku.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:mb-4">
             <p className="text-white/40 font-light leading-relaxed text-base italic">
               "Kvalitet nikada nije slučajan; on je uvek rezultat visoke namere, iskrenog napora i inteligentne egzekucije."
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-10 md:p-14 glass rounded-[60px] relative border-white/5 group hover:border-cyan-400/20 transition-all duration-700"
            >
              <Quote className="text-cyan-400/10 w-20 h-20 absolute top-10 right-10 group-hover:text-cyan-400/20 transition-colors" />
              
              <div className="flex gap-1 mb-10">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={12} className="fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-serif font-bold text-white mb-12 leading-relaxed tracking-tight group-hover:text-cyan-50 transition-colors">
                "{item.content}"
              </p>

              <div className="flex items-center gap-6 border-t border-white/5 pt-10">
                <img
                  src={item.avatar}
                  alt={"Klijent Call Clean agencije - " + item.name + ", " + item.role}
                  className="w-16 h-16 rounded-3xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div>
                  <h4 className="font-serif font-bold text-white text-lg tracking-tighter">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
