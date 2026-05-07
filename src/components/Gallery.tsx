import React from 'react';
import { motion } from 'motion/react';
import { Maximize2 } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200', size: 'large', title: 'Savremena Kuhinja' },
  { url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200', size: 'small', title: 'Blistavo Kupatilo' },
  { url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=1200', size: 'small', title: 'Luksuzni Dnevni Boravak' },
  { url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200', size: 'medium', title: 'Korporativni Prostor' },
  { url: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&q=80&w=1200', size: 'medium', title: 'Ekskluzivna Spavaća Soba' },
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200', size: 'small', title: 'Elite Lounge' },
  { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200', size: 'small', title: 'Dizajnerski Detalji' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', size: 'large', title: 'Penthouse Apartman' },
];

const Gallery = () => {
  return (
    <section id="galerija" className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[100px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block italic">
              NAŠI REZULTATI
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter">
              Gde pedantnost <br /> <span className="italic text-white/50">postaje umetnost.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm font-light leading-relaxed text-sm">
            Pogledajte transformacije prostora koje smo realizovali. Svaka slika svedoči o našoj posvećenosti vrhunskom kvalitetu i luksuzu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className={`group relative rounded-[3rem] overflow-hidden cursor-pointer border border-white/5 ${
                img.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                img.size === 'medium' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-[4px]">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={24} />
                </div>
                <span className="text-white font-serif font-bold mt-6 tracking-wide opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-lg uppercase tracking-[0.2em]">
                  {img.title}
                </span>
              </div>
              
              <div className="absolute top-8 left-8 px-4 py-1.5 glass-dark rounded-full">
                <span className="text-[10px] text-white/80 font-bold uppercase tracking-[0.2em]">
                  Premium Clean
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
