import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const FounderCard = ({ founder }) => {
      const [hovered, setHovered] = useState(false);

  return (
    <div onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)} className="relative flex-shrink-0 w-[80vw] sm:w-[65vw] md:w-full snap-center group">
      <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 ">
        
        {/* Image - Increased Aspect Ratio for better framing */}
        <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
          <img
            src={founder.image}
            alt={founder.name}
            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" loading="lazy" decoding="async"
            style={founder.objectPosition ? { objectPosition: founder.objectPosition } : undefined} />
        </div>

        {/* Info Overlay - Premium Slide-up */}
        <div className="absolute inset-0 flex flex-col justify-end">
          {/* Default Info (Gradient for readability) */}
          <div className="p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-none md:bg-white md:relative">
            <div className="transform md:translate-y-0 transition-transform duration-500">
              <h3 className="text-xl font-bold text-white md:text-gray-900 tracking-tight">
                {founder.name}
              </h3>
              <p className="text-orange-400 md:text-orange-600 text-xs font-bold uppercase tracking-[0.15em] mt-1">
                {founder.position}
              </p>
            </div>

            {/* Hidden Content (Desktop Only Hover or Mobile subtle reveal) */}
           <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          height: hovered ? "auto" : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="mt-4 overflow-hidden border-t border-gray-100 pt-4 hidden md:block"
      >
        <p className="text-sm text-gray-600 mb-4">
          {founder.bio}
        </p>

        <div className="flex justify-between items-center">
          <a className="p-2 bg-gray-50 rounded-full hover:bg-orange-50 hover:text-orange-600">
            <Linkedin size={18} />
          </a>
          <span className="text-[10px] font-bold text-gray-400 uppercase">
            E-Construct
          </span>
        </div>
      </motion.div>
    </div>
          </div>
        </div>
      </div>
      
      {/* Mobile-only Bio (Below card for clarity) */}
      <div className="mt-4 md:hidden px-2">
         <p className="text-gray-500 text-sm italic">"{founder.bio}"</p>
      </div>
    </div>
  );
};

const FoundersSection = () => {
  const { data } = useAdmin();
  const founders = data.team;
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className=" bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
         

           <div>
            <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-4"
                      >
                        <span className="w-12 h-[2px] bg-amber-500"></span>
                        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">Our Team</span>
                      </motion.div>
                      
                      <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-medium text-black leading-tight tracking-tight"
                      >
                        Meet Our <br /> 
                        <span className="accent-text italic">Founders</span>
                      </motion.h2>

           </div>
          <div className="flex flex-col gap-6 items-start md:items-end">
            <p className="text-gray-500 text-sm md:text-right max-w-sm leading-relaxed">
              Leading the transformation of construction education with over two decades of engineering expertise and strategic vision.
            </p>
           
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-8 lg:gap-12 md:overflow-visible"
        >
          {founders.map((founder, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FounderCard founder={founder} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-2">
            <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>

    </section>
  );
};

export default FoundersSection;