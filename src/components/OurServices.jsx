import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'; // Added Framer Motion
import { ChevronLeft, ChevronRight, PenTool, Ruler, Layers, Briefcase, Home, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

// Icon mapping by index
const SERVICE_ICONS = [PenTool, Ruler, Layers, Briefcase, Home, GraduationCap, GraduationCap, GraduationCap];

const Services = () => {
  const { data } = useAdmin();
  const services = data.services;
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  // --- PARALLAX LOGIC ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Header move hoga
  const yHeader = useTransform(smoothProgress, [0, 1], [50, -50]);
  // Carousel thoda oppose direction mein move hoga
  const yCarousel = useTransform(smoothProgress, [0, 1], [30, -30]);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -400, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="mt20 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area with Parallax */}
        <motion.div 
          style={{ y: yHeader }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-yellow-500"></div>
              <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight tracking-tight">
              Complete Construction <br /> 
              <span className="accent-text italic">Solutions Under One Roof</span>
            </h2>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="group p-4 border-2 border-black hover:bg-black transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={24} className="text-black group-hover:text-white" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="group p-4 bg-black border-2 border-black hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={24} className="text-white group-hover:text-black" />
            </button>
          </div>
        </motion.div>

        {/* Carousel Wrapper with Parallax */}
        <motion.div 
          style={{ y: yCarousel, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10"
        >
          {services.map((service, idx) => {
            const IconComp = SERVICE_ICONS[idx] || GraduationCap;
            return (
            <div 
              key={service.id}
              className="min-w-[320px] md:min-w-[420px] h-[550px] relative group overflow-hidden rounded-2xl bg-gray-100 snap-start shadow-sm"
            >
              {/* Service Image (Internal Parallax Scale) */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale rounded-2xl group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" loading="lazy" decoding="async" />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

              {/* Title & Icon */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 transition-transform duration-500 group-hover:-translate-y-48">
                <div className="flex items-center gap-4 mb-2">
                   <div className="p-2 bg-yellow-500 text-black">
                      <IconComp size={28} />
                   </div>
                   <h4 className="text-2xl font-bold text-white leading-tight">
                    {service.title}
                  </h4>
                </div>
              </div>

              {/* Hover Details */}
              <div className="absolute bottom-0 left-0 rounded-t-3xl w-full p-8 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-30">
                <h4 className="text-xl font-extrabold text-black mb-4 uppercase">{service.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link to="/services" className="flex items-center gap-2 text-black font-bold uppercase text-xs tracking-[0.2em] group/btn">
                  Learn More 
                  <ArrowRight size={18} className="text-yellow-600 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>

            </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
};

export default Services;