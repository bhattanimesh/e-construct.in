import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, MapPin, ArrowRight } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const categories = ["All", "Residential", "Commercial", "Industrial"];

const Projects = () => {
  const { data } = useAdmin();
  const projects = data.projects;
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);

  // Parallax Effect Logic
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth movement for parallax
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yParallax = useSpring(yRange, { stiffness: 100, damping: 30 });

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  // Animation Variants for Cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      transition: { duration: 0.2 } 
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className=" px-2 sm:px-2 py-10 md:py-20 lg:px-4 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header & Filter Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-20">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-12 h-[2px] bg-amber-500"></span>
              <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">Our Portfolio</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium text-white leading-tight tracking-tight"
            >
              Latest Infrastructure & <br /> 
              <span className="accent-text italic">Construction Projects</span>
            </motion.h2>

           
          </div>

          {/* Filter Buttons */}
       <div className="flex flex-wrap gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200 shadow-inner justify-center">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveFilter(cat)}
      className={`
        px-4 py-2 sm:px-6 sm:py-3
        rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest
        transition-all duration-300
        ${activeFilter === cat 
          ? "bg-slate-900 text-white shadow-xl scale-105"
          : "text-slate-500 hover:text-slate-900 hover:bg-white"
        }
      `}
    >
      {cat}
    </button>
  ))}
</div>
        </div>

        {/* Projects Grid with Parallax */}
        <motion.div 
          style={{ y: yParallax }} // This creates the vertical parallax
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id} // Fixed Key
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  {/* Card Main Container */}
                  <div className="relative h-[266px] sm:h-[308px] md:h-[350px] overflow-hidden rounded-[2rem] bg-slate-200 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" loading="lazy" decoding="async" />
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>

                    {/* Badge */}
                    <div className="absolute top-8 left-8">
                        <span className="bg-amber-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                          {project.category}
                        </span>
                    </div>

                    {/* Project Info */}
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h4 className="text-xl font-bold text-white mb-2 leading-tight tracking-tight">
                          {project.title}
                        </h4>
                        <div className="flex items-center text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                          <MapPin size={16} className="mr-2 text-amber-500" />
                          {project.location}
                        </div>
                        
                        {/* Interactive Button */}
                        <div className="flex items-center gap-4">
                          <button className="h-12 w-12 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-xl">
                            <ArrowRight size={20} />
                          </button>
                          <span className="text-white font-black text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Explore
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* External Link Hover Icon */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                        <div className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-white/20 text-white">
                          <ExternalLink size={20} />
                        </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-32 text-center border-2 border-dashed border-slate-200 rounded-[3rem]"
              >
                <div className="max-w-xs mx-auto">
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Coming Soon</p>
                  <p className="text-slate-600 text-lg">We are currently working on new {activeFilter} projects.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;