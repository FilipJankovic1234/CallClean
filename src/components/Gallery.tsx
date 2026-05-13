import React from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200', size: 'large', title: 'Luksuzna Kuhinja - Vračar' },
  { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200', size: 'small', title: 'Penthouse Kupatilo' },
  { url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200', size: 'small', title: 'Dnevna Soba - Dedinje' },
  { url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200', size: 'medium', title: 'Biznis Centar Ušće' },
  { url: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&q=80&w=1200', size: 'medium', title: 'Apartman - NBG' },
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200', size: 'small', title: 'Elite Lounge' },
  { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200', size: 'small', title: 'Dizajnerski Detalji' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', size: 'large', title: 'Generalna Održavanja' },
];

const Gallery = () => {
  return (
    <section id="galerija" className="py-32 bg-brand-dark overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="meta-label text-cyan-400 mb-6"
            >
              Umetnost Čistoće
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-serif font-black mb-8 leading-[0.85] uppercase italic"
            >
              Galerija <br /> <span className="text-white/20">Savršenstva.</span>
            </motion.h2>
          </div>
          <p className="text-white/40 max-w-sm font-light leading-relaxed text-sm mb-4">
            Svaki projekat u našem portfoliju predstavlja fuziju preciznog inženjeringa čistoće i dubokog poštovanja prema estetici vašeg životnog prostora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[450px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[40px] md:rounded-[60px] overflow-hidden cursor-none border border-white/5 ${
                img.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                img.size === 'medium' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 ease-out grayscale-[0.5] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute inset-x-8 bottom-8 flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">Call Clean • Elite</span>
                  <h3 className="text-white font-serif font-bold text-xl md:text-2xl tracking-tighter opacity-100 group-hover:text-cyan-200 transition-colors">
                    {img.title}
                  </h3>
                </div>
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-700">
                  <Maximize2 size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
