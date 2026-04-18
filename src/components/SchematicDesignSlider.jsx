import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Use available images from assets
import B1Img from '../assets/b1.webp';
import B2Img from '../assets/b2.webp';
import B3Img from '../assets/b3.webp';
import B4Img from '../assets/b4.webp';
import B5Img from '../assets/b5.jpeg';
import C1Img from '../assets/c1.jpg';

const sliderData = [
  {
    id: 1,
    title: "2. Schematic Design",
    subtitle: "",
    desc: "In this stage, we define the overall layout, space planning, and basic structure to give a clear idea of the project.",
    image: B1Img
  },
  {
    id: 2,
    title: "Space Programming & Zoning",
    subtitle: "a.",
    desc: "Functional segregation and spatial organization through zoning diagrams.",
    image: B2Img
  },
  {
    id: 3,
    title: "Schematic Floor Plans & Stacking Strategy",
    subtitle: "b.",
    desc: "Development of preliminary layouts and vertical distribution of spaces.",
    image: B3Img
  },
  {
    id: 4,
    title: "Preliminary Structural System Selection",
    subtitle: "c.",
    desc: "Identification of suitable structural system (RCC, steel, composite, etc.).",
    image: B4Img
  },
  {
    id: 5,
    title: "Massing Models, Elevations & Façade Articulation",
    subtitle: "d.",
    desc: "Refinement of building form and conceptual façade design.",
    image: B5Img
  },
  {
    id: 6,
    title: "Design Validation & Client Approval",
    subtitle: "e.",
    desc: "Alignment with project brief and formal client sign-off.",
    image: C1Img
  }
];

const SchematicDesignSlider = () => {
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
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">

        {/* Stacked Cards Area */}
        <div className="relative h-[450px] md:h-[500px] w-full max-w-5xl mx-auto flex justify-center perspective-[1000px]">
          
          {sliderData.map((card, index) => {
            const offset = index - currentIndex;

            // Don't render cards that are too far left or right to save DOM size
            if (offset > 3 || offset < -1) return null;

            const isCurrent = offset === 0;
            const isFirstIntroCard = card.id === 1;

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
                  className="absolute inset-0 w-full h-full object-cover opacity-70" 
                />
                
                {/* Overlays for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Card Content */}
                <div className={`absolute inset-0 p-6 md:p-12 flex flex-col ${isFirstIntroCard ? 'justify-center items-center text-center backdrop-blur-sm bg-black/20' : 'justify-end'}`}>
                  
                  {isFirstIntroCard ? (
                    <div className="w-full max-w-3xl">
                      <div className="flex justify-center items-center gap-4 text-yellow-500 mb-6 drop-shadow-md">
                        <div className="w-12 h-[2px] bg-yellow-500"></div>
                        <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm text-white">How We Work</span>
                        <div className="w-12 h-[2px] bg-yellow-500"></div>
                      </div>
                      <h2 className="text-white font-black text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg tracking-tight uppercase">
                        {card.title.replace("2. ", "")} <span className="text-yellow-500">2.0</span>
                      </h2>
                      <p className="text-gray-100 text-lg md:text-2xl font-medium drop-shadow-md leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-start gap-3 md:gap-5 mb-3 md:mb-5">
                        <span className="text-yellow-500 font-bold text-5xl md:text-6xl leading-none drop-shadow-md">
                          {card.subtitle}
                        </span>
                        <div>
                          <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight drop-shadow-lg mb-2">
                            {card.title}
                          </h3>
                          <div className="w-16 h-1 bg-yellow-500 rounded-full"></div>
                        </div>
                      </div>
                      <p className="text-gray-100 text-[15px] md:text-lg max-w-3xl font-medium md:ml-[80px] drop-shadow-md leading-relaxed">
                        {card.desc}
                      </p>
                    </>
                  )}

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

export default SchematicDesignSlider;
