import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Sistemska greška. Pokušajte ponovo kasnije.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=2000" 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-1">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block italic">
              REZERVACIJE
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tighter">
              Spremni za <br /> <span className="italic text-white/50">savršenu čistoću?</span>
            </h2>
            <p className="text-white/40 text-lg mb-12 font-light max-w-md">
              Javite nam se još danas i dozvolite našem timu da transformiše vaš prostor u prepoznatljivo Call Clean remek-delo.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Telefon</p>
                  <a href="tel:+381653201671" className="text-white text-2xl font-serif font-bold hover:text-cyan-400 transition-colors">
                    065 320 1671
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mb-1">Email</p>
                  <a href="mailto:callclean83@gmail.com" className="text-white text-2xl font-serif font-bold hover:text-cyan-400 transition-colors">
                    callclean83@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-white/5 backdrop-blur-2xl rounded-[50px] border border-white/10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white/30 text-[10px] uppercase tracking-widest font-bold px-4 italic">Ime i prezime</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Vaše ime"
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-hidden focus:border-cyan-400 transition-all font-light text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/30 text-[10px] uppercase tracking-widest font-bold px-4 italic">Email adresa</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@primer.rs"
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-hidden focus:border-cyan-400 transition-all font-light text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/30 text-[10px] uppercase tracking-widest font-bold px-4 italic">Vaša poruka</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Opišite vaše potrebe..."
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-white/20 focus:outline-hidden focus:border-cyan-400 transition-all resize-none font-light text-sm"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full group py-5 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'SLANJE...' : 'POŠALJI PORUKU'} 
                {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
