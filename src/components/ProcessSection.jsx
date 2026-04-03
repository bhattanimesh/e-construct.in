import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import Planning from '../assets/planning.jpg'
import Design from '../assets/design.webp'
import Development from '../assets/development.jpg'

const steps = [
  {
    id: "01",
    title: "Concept",
    subtitle: "Visualizing the Vision",
    desc: "The first step and the most important in planning has to do with understanding your project’s requirements and expectations.",
    img: Planning,
    accent: "text-blue-600",
    bg: "bg-blue-50/50"
  },
  {
    id: "02",
    title: "Design",
    subtitle: "Precision & Aesthetics",
    desc: "We create sketches and ensure compliance with regulations while shaping your vision into structured plans.",
    img: Design,
    accent: "text-pink-600",
    bg: "bg-pink-50/50"
  },
  {
    id: "03",
    title: "Development",
    subtitle: "Building Excellence",
    desc: "We finalize materials, refine structure, and transform concepts into a complete, build-ready solution.",
    img: Development,
    accent: "text-green-600",
    bg: "bg-green-50/50"
  }
];

const ImmersiveProcess = () => {
  return (
    <section className="relative py-16 md:py-32 bg-white overflow-hidden">
      
      {/* Scrollable Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-16 px-6 md:px-20 pb-12 cursor-grab active:cursor-grabbing no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        
        {/* --- Section Intro Slide --- */}
        <div className="w-[85vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-center snap-start py-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-yellow-500 mb-6"
          >
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Our Workflow</span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-slate-900 uppercase leading-[0.85] mb-6">
            How We <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #f59e0b' }}>Work</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg max-w-sm border-l-2 border-yellow-500 pl-6 leading-relaxed">
            Engineering excellence through a structured 3-step delivery process. Scroll right to explore.
          </p>
          
          <div className="mt-8 flex items-center gap-2 text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] animate-pulse">
            Scroll Right <MoveRight size={14} />
          </div>
        </div>

        {/* --- Process Steps --- */}
        {steps.map((step, index) => (
          <div key={index} className="w-[85vw] md:w-[75vw] lg:w-[65vw] flex-shrink-0 snap-center py-10">
            <div className={`relative w-full h-full overflow-hidden rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-16 ${step.bg} border border-gray-100 shadow-sm`}>
              
              {/* Background Large Number */}
              <span className="absolute -top-10 -right-10 text-[15rem] md:text-[25rem] font-black text-gray-200/40 select-none z-0">
                {step.id}
              </span>

              <div className="relative z-10 grid lg:grid-cols-2 gap-8 md:gap-16 items-center h-full">
                
                {/* Image Container */}
                <div className="order-2 lg:order-1 h-[250px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl transform md:-rotate-2">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Text Content */}
                <div className="order-1 lg:order-2">
                  <div className={`inline-block px-4 py-1 rounded-full bg-white shadow-sm font-bold uppercase text-[10px] tracking-widest ${step.accent} mb-4`}>
                    Step {step.id} • {step.subtitle}
                  </div>

                  <h3 className="text-4xl md:text-7xl font-black text-slate-900 mt-2 mb-4 md:mb-6">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-md">
                    {step.desc}
                  </p>

                  <button className="flex items-center gap-4 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-yellow-500 transition-all duration-300">
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <span className="font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] text-slate-900 group-hover:text-yellow-600 transition-colors">
                      Discover More
                    </span>
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Small gap at the end to allow for a little overscroll bounce on mobile */}
        <div className="w-[5vw] flex-shrink-0"></div>

      </div>
    </section>
  );
};

export default ImmersiveProcess;