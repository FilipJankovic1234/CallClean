import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Molimo popunite sva obavezna polja.');
      return;
    }

    setIsSubmitting(true);
    // Simple simulation of message sending for demo
    setTimeout(() => {
      toast.success('Poruka je uspešno poslata! Javićemo Vam se ubrzo.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="kontakt" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Visual Context */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="meta-label text-cyan-400 mb-6"
            >
              Get In Touch
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-black mb-8 leading-[0.9] uppercase italic"
            >
              Portal za <br /> <span className="text-white/20">Savršenstvo.</span>
            </motion.h2>
            <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-white/40 font-light max-w-sm mb-12"
            >
              Bilo da Vam je potrebno redovno održavanje stana na <span className="text-white/60">Zvezdari</span> ili generalno čišćenje kuće u <span className="text-white/60">Malom Mokrom Lugu</span>, naš tim je spreman.
            </motion.p>

            <div className="space-y-12 mb-12">
              <a href="tel:+381653201671" className="group flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="meta-label text-xs block mb-1">Pozovite odmah</span>
                  <span className="text-xl md:text-2xl font-serif font-bold group-hover:text-cyan-400 transition-colors tracking-tight">065 320 1671</span>
                </div>
              </a>
              
              <a href="https://wa.me/381653201671" className="group flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-400 group-hover:text-black transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <span className="meta-label text-xs block mb-1">WhatsApp / Viber</span>
                  <span className="text-xl md:text-2xl font-serif font-bold group-hover:text-green-400 transition-colors tracking-tight">Dostupni 08-20h</span>
                </div>
              </a>
            </div>

            <div className="p-8 glass-dark rounded-[40px] border-white/5">
              <h3 className="meta-label mb-4">Radno Vreme</h3>
              <div className="flex justify-between text-xs text-white/60 font-mono mb-2">
                <span>Ponedeljak - Subota</span>
                <span>08:00 - 20:00</span>
              </div>
              <div className="flex justify-between text-xs text-white/60 font-mono">
                <span>Nedelja</span>
                <span className="text-cyan-400">Po dogovoru</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 p-8 md:p-16 glass rounded-[60px] border-white/10"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="meta-label px-2 italic">Ime i Prezime</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-hidden focus:border-cyan-400/50 transition-all font-light"
                    placeholder="Npr. Marko Marković"
                  />
                </div>
                <div className="space-y-4">
                  <label className="meta-label px-2 italic">Email / Telefon</label>
                  <input
                    type="text"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/10 focus:outline-hidden focus:border-cyan-400/50 transition-all font-light"
                    placeholder="email@primer.rs"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="meta-label px-2 italic">Vaša Poruka / Adresa</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-6 text-white placeholder:text-white/10 focus:outline-hidden focus:border-cyan-400/50 transition-all font-light resize-none"
                  placeholder="Kratko opišite šta Vam je potrebno čišćenje..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-5 bg-white text-black font-bold uppercase tracking-[0.2em] rounded-full hover:bg-cyan-400 hover:text-white transition-all flex items-center justify-center gap-4 text-[10px] shadow-premium disabled:opacity-50"
              >
                {isSubmitting ? 'Slanje...' : 'Pošalji Zahtev'}
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
