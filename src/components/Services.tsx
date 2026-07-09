import React from 'react';
import { motion } from 'motion/react';
import { Home, Sparkles, Building2, Clock, Construction, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Čišćenje stanova',
    desc: 'Ekskluzivno čišćenje stanova u Beogradu, od Novog Beograda do Zvezdare. Pedantnost bez kompromisa.',
    icon: <Home className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1200',
    alt: 'Agencija Call Clean - profesionalno čišćenje dnevne sobe i stanova u Beogradu'
  },
  {
    title: 'Poslovni prostori',
    desc: 'Profesionalno održavanje kancelarija i poslovnih objekata. Higijena koja podiže vaš poslovni ugled.',
    icon: <Building2 className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
    alt: 'Call Clean Beograd - čišćenje i održavanje kancelarija i poslovnih prostora'
  },
  {
    title: 'Dubinsko čišćenje',
    desc: 'Specijalizovano dubinsko čišćenje nameštaja i tepiha najsavremenijim mašinama u svim delovima grada.',
    icon: <Sparkles className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1200',
    alt: 'Dubinsko pranje i čišćenje nameštaja u Beogradu - Call Clean servis'
  },
  {
    title: 'Generalno čišćenje',
    desc: 'Sveobuhvatna higijenska rešenja za kuće i stanove. Idealno za sezonsko održavanje i praznike.',
    icon: <Clock className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=1200',
    alt: 'Generalno čišćenje i održavanje kuća i stanova Beograd - Call Clean'
  },
  {
    title: 'Nakon renoviranja',
    desc: 'Grubi i fini radovi čišćenja nakon građevinskih intervencija. Brzo uklanjanje prašine i fleka.',
    icon: <Construction className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=1200',
    alt: 'Čišćenje nakon građevinskih radova i renoviranja u Beogradu - Call Clean'
  },
  {
    title: 'Pranje prozora',
    desc: 'Profesionalno pranje staklenih površina na svim visinama. Kristalno čist pogled za vaš dom ili kancelariju.',
    icon: <Layers className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=1200',
    alt: 'Profesionalno pranje prozora i staklenih površina na visinama u Beogradu'
  }
];

const Services = () => {
  return (
    <section id="usluge" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Structural Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="meta-label text-cyan-400 mb-4 inline-block"
            >
              Premium Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-black mb-8 leading-[0.9] uppercase italic"
            >
              Ekskluzivne <br /> <span className="text-white/20">Usluge.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white/40 font-light max-w-md"
            >
              Nudimo sveobuhvatna rešenja za higijenu vašeg prostora na teritoriji celog <span className="text-white/60">Beograda</span>, koristeći ekološku hemiju i profesionalnu opremu.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex gap-4 md:mb-4"
          >
            <div className="px-6 py-3 glass rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">
              Personalizovan pristup
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] bg-brand-dark p-12 flex flex-col justify-between overflow-hidden"
            >
              {/* Background Reveal on Hover */}
              <div className="absolute inset-0 z-0 transition-all duration-1000">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-all duration-1000 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent" />
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <div className="font-mono text-white/10 text-4xl font-bold group-hover:text-cyan-400/20 transition-colors">
                  0{i + 1}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs group-hover:text-white/80 transition-colors duration-500">
                  {service.desc}
                </p>
                <motion.a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  Zakaži odmah <ArrowRight className="w-3 h-3" />
                </motion.a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-400/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity translate-x-12 translate-y-12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
