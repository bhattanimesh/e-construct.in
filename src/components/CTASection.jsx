import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

const CTASection = () => {
  const { data } = useAdmin();
  const cta = data.ctaSection;
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-auto py-20 md:py-28 overflow-hidden flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/projects/blv_10.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'scroll', // 'fixed' breaks on iOS Safari
        }}
      >
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-6"
        >
          {cta.headline}
          <br />
          <span className="accent-text italic">{cta.subheadline}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10"
        >
          {cta.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 items-center"
        >
          <button className="group relative px-8 py-5 bg-amber-500 rounded-2xl overflow-hidden shadow-xl shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95" onClick={() => navigate('/contact')}>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="flex items-center gap-3">
              <span className="text-slate-900 font-black uppercase tracking-widest text-sm">
                {cta.btnText}
              </span>
              <ArrowRight size={20} className="text-slate-900 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default CTASection;
