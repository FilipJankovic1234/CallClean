import React from 'react';
import { motion } from 'motion/react';
import { Home, Sparkles, Building2, Clock, Construction, Layers } from 'lucide-react';

const services = [
  {
    title: 'Čišćenje stanova',
    desc: 'Pedantno održavanje vašeg doma uz pažnju posvećenu svakom detalju i uglu.',
    icon: <Home className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Dubinsko čišćenje',
    desc: 'Najsavremenija tehnologija za obnavljanje svežine vašeg nameštaja i tepiha.',
    icon: <Sparkles className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Savremena Kuhinja',
    desc: 'Specijalizovano čišćenje ekskluzivnih kuhinja sa fokusom na osetljive površine.',
    icon: <Sparkles className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Blistavo Kupatilo',
    desc: 'Vraćanje sjaja mermeru, staklu i hromu u vašem kupatilu do savršenstva.',
    icon: <Sparkles className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Poslovni prostori',
    desc: 'Profesionalna rešenja za korporativne klijente koja inspirišu produktivnost.',
    icon: <Building2 className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Generalno čišćenje',
    desc: 'Sveobuhvatan tretman za prostore kojima je potrebno potpuno osveženje.',
    icon: <Clock className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Nakon renoviranja',
    desc: 'Uklanjanje prašine i ostataka gradnje, pretvarajući gradilište u dom.',
    icon: <Construction className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Održavanje zgrada',
    desc: 'Kontinuirana briga o zajedničkom prostoru za maksimalan komfor stanara.',
    icon: <Layers className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Pranje prozora',
    desc: 'Visinsko i standardno pranje prozora za kristalno čist pogled bez tragova.',
    icon: <Sparkles className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1200'
  }
];

const Services = () => {
  return (
    <section id="usluge" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block italic"
          >
            NAŠA EKSPERTIZA
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight"
          >
            Usluge prilagođene <br /> <span className="italic text-white/50">vašem stilu života.</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            className="h-[1px] bg-cyan-400 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[40px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-light">
                  {service.desc}
                </p>
                <div className="h-[1px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-700" />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-white/10 transition-all duration-500 rounded-[40px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
