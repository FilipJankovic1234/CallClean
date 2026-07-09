import React from 'react';
import { motion, useInView } from 'motion/react';

const StatCard = ({ label, val, suffix = '' }: any) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-12 glass rounded-[60px] border-white/5 relative group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-400/10 transition-colors" />
      
      <div className="text-6xl font-serif font-black text-white mb-4 tracking-tighter leading-none group-hover:text-cyan-100 transition-colors">
        <Counter value={isInView ? val : 0} />
        <span className="text-cyan-400">{suffix}</span>
      </div>
      <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] font-sans">
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
    const duration = 2500;
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
    <section id="o-nama" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-[1px] bg-linear-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-end mb-32">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="meta-label text-cyan-400 mb-6"
            >
              Proven Excellence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-serif font-black mb-8 leading-[0.85] uppercase italic"
            >
              Standard <br /> <span className="text-white/20">iznad konkurencije.</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-4 lg:mb-4">
            <p className="text-white/40 font-light leading-relaxed text-sm">
              Naši brojevi nisu samo statistika; oni su digitalni pečat kvaliteta koji Call Clean tim ostavlja za sobom u najprestižnijim objektima Beograda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard val={2500} label="Klijentskih ugovora" suffix="+" />
          <StatCard val={15000} label="Servisnih sati" suffix="+" />
          <StatCard val={32} label="Elite higijeničara" suffix="" />
          <StatCard val={12} label="Godina liderstva" suffix="" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
