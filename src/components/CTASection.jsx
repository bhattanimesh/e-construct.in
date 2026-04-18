import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import CtaBG from '../assets/ctaBG.avif'

const CTASection = () => {
  return (
    <section className="relative w-full h-auto py-20 md:py-28 overflow-hidden flex items-center">
      
      {/* Background Image with Fixed/Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
backgroundImage: `url(${CtaBG})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed', // Simple Parallax
        }}
      >
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        
       

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-6"
        >
          Got A Project?
          <br />
          <span className="accent-text italic">
            Small Or Big, We Design For All!
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10"
        >
          At <span className="text-white font-bold italic">Econstruct</span>, we
          promise to deliver industry-leading designs. Whether it’s a small home
          or a large project, we create something exceptional for you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 items-center"
        >
          {/* Primary Button */}
          <button className="group relative px-8 py-5 bg-amber-500 rounded-2xl overflow-hidden shadow-xl shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <div className="flex items-center gap-3">
              <span className="text-slate-900 font-black uppercase tracking-widest text-sm">
                Get In Touch
              </span>
              <ArrowRight
                size={20}
                className="text-slate-900 group-hover:translate-x-1 transition-transform"
              />
            </div>
          </button>

          
        </motion.div>
      </div>


      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default CTASection;