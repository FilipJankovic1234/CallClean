import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, Plus, X, Send, CheckCircle2 } from 'lucide-react';

const initialTestimonials = [
  {
    name: 'Marko Jovanović',
    role: 'Vlasnik IT kompanije',
    content: 'Call Clean je jedina firma u Beogradu koja razume šta znači pravi premium standard. Naše kancelarije nikada nisu izgledale bolje.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Jelena Petrović',
    role: 'Dizajner enterijera',
    content: 'Kao dizajneru, čistoća prostora mi je presudna. Njihova pedantnost nakon renoviranja mojih projekata je bez premca.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    rating: 5
  },
  {
    name: 'Dragan Nikolić',
    role: 'Investitor',
    content: 'Pouzdanost i brzina su ono što ih izdvaja. Topla preporuka za sve koji traže beskompromisan kvalitet.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    rating: 5
  }
];

const Testimonials = () => {
  const [list, setList] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form State
  const [newName, setNewName] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newContent) return;

    const newTestimonial = {
      name: newName,
      role: 'Klijent',
      content: newContent,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newName}`,
      rating: newRating
    };

    setList([newTestimonial, ...list]);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setShowForm(false);
      setIsSubmitted(false);
      setNewName('');
      setNewContent('');
      setNewRating(5);
    }, 2000);
  };

  return (
    <section id="utisci" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block italic">
              POVERENJE KLIJENATA
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tighter">
              Iskustva onih koji <br /> <span className="italic text-white/50">cene najbolje.</span>
            </h2>
          </div>
          
          <button
            onClick={() => setShowForm(true)}
            className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-cyan-400/30 rounded-2xl text-cyan-400 font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 hover:text-white transition-all shadow-xl shadow-cyan-400/5 active:scale-95"
          >
            <Plus size={18} /> Ostavi utisak
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-10 rounded-[50px] border border-white/10 relative group hover:border-cyan-400/30 transition-all duration-500 flex flex-col"
            >
              <Quote className="absolute top-10 right-10 text-cyan-400/20 w-12 h-12" />
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    size={14} 
                    className={`${starIndex < (item.rating || 5) ? 'fill-cyan-400 text-cyan-400' : 'text-white/10'}`} 
                  />
                ))}
              </div>
              <p className="text-white/60 text-lg font-serif font-light leading-relaxed mb-10 italic flex-1">
                "{item.content}"
              </p>
              <div className="flex items-center gap-5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-4 ring-white/5"
                />
                <div>
                  <h4 className="font-serif font-bold text-white tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial Form Modal */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-brand-dark border border-white/10 rounded-[40px] p-10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[100px] -z-10" />
              
              <button 
                onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {isSubmitted ? (
                <div className="py-20 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center text-white mx-auto mb-6"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">Hvala na ukazanom poverenju!</h3>
                  <p className="text-white/50">Vaš utisak je uspešno dodat.</p>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] block mb-2">VAŠE ISKUSTVO</span>
                    <h3 className="text-3xl font-serif font-bold text-white tracking-tight">Ostavite recenziju</h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-white/30 text-[10px] uppercase font-bold px-2 italic">Ime i prezime</label>
                      <input
                        type="text"
                        required
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="Npr. Nikola Nikolić"
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-hidden focus:border-cyan-400 transition-all font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/30 text-[10px] uppercase font-bold px-2 italic">Vaša ocena</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            onClick={() => setNewRating(star)}
                            className="p-1 transition-transform hover:scale-110 active:scale-95"
                          >
                            <Star 
                              size={28} 
                              className={`${(hoverRating || newRating) >= star ? 'fill-cyan-400 text-cyan-400' : 'text-white/10'} transition-colors`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-white/30 text-[10px] uppercase font-bold px-2 italic">Vaš komentar</label>
                      <textarea
                        required
                        rows={4}
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        placeholder="Opišite vaše zadovoljstvo našom uslugom..."
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-hidden focus:border-cyan-400 transition-all font-light resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all active:scale-[0.98]"
                    >
                      POŠALJI UTISAK <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
