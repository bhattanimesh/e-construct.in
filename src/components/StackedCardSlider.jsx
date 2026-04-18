import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Use available images from assets
import PlanningImg from '../assets/planning.jpg';
import DesignImg from '../assets/design.webp';
import ArchImg from '../assets/ArchitecturalConsultancy.jpg';
import InteriorImg from '../assets/InteriorDesignConsultancy.webp';
import DevImg from '../assets/development.jpg';

const sliderData = [
  {
    id: 1,
    title: "Client Briefing & Requirement Analysis",
    subtitle: "a.",
    desc: "Understanding project vision, functional requirements, budget constraints, and aesthetic preferences.",
    image: PlanningImg
  },
  {
    id: 2,
    title: "Site Reconnaissance & Feasibility Study",
    subtitle: "b.",
    desc: "Assessment of site conditions including topography, soil characteristics, zoning regulations, and infrastructure availability.",
    image: ArchImg
  },
  {
    id: 3,
    title: "Climatic & Orientation Analysis",
    subtitle: "c.",
    desc: "Evaluation of sun path, wind patterns, and surrounding context to optimize building placement.",
    image: InteriorImg
  },
  {
    id: 4,
    title: "Conceptual Massing & Volumetric Studies",
    subtitle: "d.",
    desc: "Development of preliminary 3D massing models to explore form, scale, and spatial relationships.",
    image: DesignImg
  },
  {
    id: 5,
    title: "Design Intent Development & Theme Finalization",
    subtitle: "e.",
    desc: "Establishing architectural language, design narrative, and overall project direction.",
    image: DevImg
  }
];

const StackedCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < sliderData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Header Text */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-4 text-yellow-500 mb-4">
            <div className="w-12 h-[2px] bg-yellow-500"></div>
            <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm">How We Work</span>
            <div className="w-12 h-[2px] bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-6 tracking-tight">
            Concept <span className="accent-text italic">Design</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We begin by understanding your requirements, vision, and site conditions to develop initial design ideas and project direction.
          </p>
        </div>

        {/* Stacked Cards Area */}
        <div className="relative h-[450px] md:h-[500px] w-full max-w-5xl mx-auto flex justify-center perspective-[1000px] mt-10">
          
          {sliderData.map((card, index) => {
            const offset = index - currentIndex;

            // Don't render cards that are too far left or right to save DOM size
            if (offset > 3 || offset < -1) return null;

            const isCurrent = offset === 0;

            return (
              <motion.div
                key={card.id}
                drag={isCurrent ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset: dragOffset }) => {
                  const swipe = dragOffset.x;
                  if (swipe < -60) handleNext();
                  else if (swipe > 60) handlePrev();
                }}
                initial={false}
                animate={{
                  opacity: offset < 0 ? 0 : 1 - offset * 0.2,
                  scale: offset < 0 ? 0.95 : 1 - offset * 0.05,
                  x: offset < 0 ? -300 : offset * 30, // Previous card slides left
                  y: offset < 0 ? 0 : offset * 25, // Stacking offset downwards
                  zIndex: 10 - offset,
                }}
                whileHover={isCurrent ? { scale: 1.02 } : {}}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className={`absolute top-0 w-[90%] md:w-[80%] h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] bg-slate-900 ${
                  isCurrent ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
                } border border-white/20`}
                style={{
                  transformOrigin: "top center"
                }}
              >
                {/* Background Image */}
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Card Content */}
                <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
                  <div className="flex items-start gap-3 md:gap-5 mb-3 md:mb-5">
                    <span className="text-yellow-500 font-bold text-5xl md:text-6xl leading-none drop-shadow-md">
                      {card.subtitle}
                    </span>
                    <div>
                      <h3 className="text-white font-bold text-2xl md:text-4xl leading-tight drop-shadow-lg mb-2">
                        {card.title}
                      </h3>
                      <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-100 text-[15px] md:text-lg max-w-3xl font-medium md:ml-[80px] drop-shadow-md leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
            <button 
              onClick={handlePrev} 
              disabled={currentIndex === 0}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                currentIndex === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' 
                  : 'bg-white hover:bg-yellow-500 hover:text-white text-slate-800 border border-gray-100 active:scale-95'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="text-slate-900 font-bold tracking-[0.2em] text-sm bg-white px-6 py-2 rounded-full shadow-md border border-gray-100">
               {currentIndex + 1} / {sliderData.length}
            </div>

            <button 
              onClick={handleNext} 
              disabled={currentIndex === sliderData.length - 1}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                currentIndex === sliderData.length - 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' 
                  : 'bg-white hover:bg-yellow-500 hover:text-white text-slate-800 border border-gray-100 active:scale-95'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCardSlider;
