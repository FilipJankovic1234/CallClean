import React from 'react';
import { motion, useInView } from 'motion/react';
import { Users, Truck, ShieldCheck, Zap, Award, History } from 'lucide-react';

const StatCard = ({ icon, label, val, suffix = '' }: any) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-8 glass rounded-[2.5rem] border border-brand-accent/5 hover:border-brand-accent/20 transition-all group"
    >
      <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div className="text-4xl font-display font-bold text-white mb-1">
        <Counter value={isInView ? val : 0} />
        {suffix}
      </div>
      <div className="text-sm font-medium text-white/40 uppercase tracking-widest">
        {label}
      </div>
    </motion.div>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (value === 0) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}</>;
};

const Stats = () => {
  return (
    <section id="o-nama" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block italic">
              O KOMPANIJI
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight tracking-tighter">
              Savršenstvo nije cilj, <br /> <span className="italic text-white/50 text-glow">to je naš standard.</span>
            </h2>
            <p className="text-lg text-white/50 font-light mb-12 leading-relaxed max-w-xl">
              Više od decenije posvećeni smo pružanju besprekorne usluge klijentima koji ne pristaju na kompromise. Naš tim čine sertifikovani profesionalci koji koriste isključivo ekološki prihvatljiva i sigurna sredstva.
            </p>

            <div className="relative rounded-3xl overflow-hidden h-48 mb-12 group">
              <img 
                src="https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/20" />
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <ShieldCheck size={24} />
                </div>
                <span className="font-bold text-white/80 text-xs uppercase tracking-widest">Osiguran tim</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <Award size={24} />
                </div>
                <span className="font-bold text-white/80 text-xs uppercase tracking-widest">Premium oprema</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            <StatCard icon={<Users />} val={2500} label="Srećnih klijenata" suffix="+" />
            <StatCard icon={<Zap />} val={15000} label="Očišćenih sati" suffix="+" />
            <StatCard icon={<Award />} val={48} label="Profesionalca" suffix="" />
            <StatCard icon={<History />} val={12} label="Godina iskustva" suffix="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
