import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const FounderCard = ({ founder }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex-shrink-0 w-[72vw] sm:w-[45vw] md:w-full snap-center group"
    >
      <div className="relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
        
        {/* Image Container with Inward Hover Drawer */}
        <div className="relative aspect-[4/3] sm:aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={founder.image}
            alt={founder.name}
            className="h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            style={founder.objectPosition ? { objectPosition: founder.objectPosition } : { objectPosition: 'top' }}
          />

          {/* Inward Expanding Drawer Overlay on Hover */}
          <div
            className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 pt-6 text-white transform transition-all duration-300 ease-out z-10 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
            }`}
          >
            <p className="text-[10px] sm:text-[10.5px] text-gray-200 leading-relaxed line-clamp-3 mb-2">
              {founder.bio}
            </p>
            <div className="flex justify-between items-center pt-1.5 border-t border-white/15">
              <a
                href={founder.linkedin || "https://www.linkedin.com/company/econstruct-design-and-build-pvt-ltd/"}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 bg-white/20 rounded-full hover:bg-orange-500 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={11} className="text-white" />
              </a>
              <span className="text-[8px] font-bold text-gray-300 uppercase tracking-wider">
                E-Construct
              </span>
            </div>
          </div>
        </div>

        {/* Static Info Area (Card outer height remains fixed) */}
        <div className="p-2.5 sm:p-3 bg-white">
          <h3 className="text-[13px] sm:text-[14px] font-bold text-gray-900 tracking-tight leading-snug">
            {founder.name}
          </h3>
          <p className="text-orange-600 text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider mt-0.5">
            {founder.position}
          </p>
        </div>
      </div>
      
      {/* Mobile-only Bio Hint */}
      <div className="mt-1 md:hidden px-1">
        <p className="text-gray-500 text-[10px] italic line-clamp-2">"{founder.bio}"</p>
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
    <section className="bg-white overflow-hidden py-10 md:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-10 h-[2px] bg-amber-500"></span>
              <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">Our Team</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-black leading-tight tracking-tight"
            >
              Meet Our <br /> 
              <span className="accent-text italic">Founders</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-4 items-start md:items-end">
            <p className="text-gray-500 text-xs sm:text-sm md:text-right max-w-sm leading-relaxed">
              Leading the transformation of construction education with over two decades of engineering expertise and strategic vision.
            </p>
          </div>
        </div>

        {/* Carousel / Grid Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-5 lg:gap-6 md:overflow-visible"
        >
          {founders.map((founder, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <FounderCard founder={founder} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-2">
            <div className="w-10 h-1 bg-orange-500 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
            <div className="w-2 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>

    </section>
  );
};

export default FoundersSection;