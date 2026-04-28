import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import ConceptAImg from '../assets/concept_a.png';
import ConceptBImg from '../assets/concept_b.png';
import ConceptCImg from '../assets/concept_c.png';
import ConceptDImg from '../assets/concept_d.png';

import SchematicAImg from '../assets/schematic_a.png';
import SchematicBImg from '../assets/schematic_b.png';
import SchematicCImg from '../assets/schematic_c.png';
import SchematicDImg from '../assets/schematic_d.png';
import SchematicEImg from '../assets/schematic_e.png';

import DetailedAImg from '../assets/detailed_a.png';
import DetailedBImg from '../assets/detailed_b.png';
import DetailedCImg from '../assets/detailed_c.png';
import DetailedEImg from '../assets/detailed_e.png';

import IfcAImg from '../assets/ifc_a.png';
import IfcBImg from '../assets/ifc_b.png';
import IfcCImg from '../assets/ifc_c.png';
import IfcDImg from '../assets/ifc_d.png';
import IfcEImg from '../assets/ifc_e.png';
import IfcFImg from '../assets/ifc_f.png';

import ExecAImg from '../assets/exec_a.png';
import ExecBImg from '../assets/exec_b.png';
import ExecCImg from '../assets/exec_c.png';
import ExecDImg from '../assets/exec_d.png';

import PlanningImg from '../assets/planning.jpg';
import DesignImg from '../assets/design.webp';
import ArchImg from '../assets/ArchitecturalConsultancy.jpg';
import InteriorImg from '../assets/InteriorDesignConsultancy.webp';
import DevImg from '../assets/development.jpg';

import B1Img from '../assets/b1.webp';
import B2Img from '../assets/b2.webp';
import B3Img from '../assets/b3.webp';
import B4Img from '../assets/b4.webp';
import B5Img from '../assets/b5.jpeg';

import C1Img from '../assets/c1.jpg';
import C2Img from '../assets/c2.jpg';
import StructuralImg from '../assets/StructuralDesignConsultancy.jpeg';
import BIMImg from '../assets/BIMTechnologyconsultancy.webp';
import C3Img from '../assets/c3.jpg';
import C4Img from '../assets/c4.jpg';

import C5Img from '../assets/c5.jpg';
import Part1Img from '../assets/part1.jpg';
import Part2Img from '../assets/part2.jpg';
import Part3Img from '../assets/part3.jpg';
import Part4Img from '../assets/part4.jpg';
import Part5Img from '../assets/part5.jpg';

import PMImg from '../assets/ProjectManagementConsultancy.jpg';
import VillaImg from '../assets/villa.jpg';

import Part6Img from '../assets/part6.png';
import Part7Img from '../assets/part7.avif';
import Img1 from '../assets/img1.jpg';

const sectionsData = [
  {
    sectionTitle: "Concept Design",
    sliderData: [
      { id: 1, title: "1. Concept Design", subtitle: "", desc: "We begin by understanding your requirements, vision, and site conditions to develop initial design ideas.", image: PlanningImg },
      { id: 2, title: "Client Briefing", subtitle: "a.", desc: "Understanding project vision, functional requirements, budget constraints.", image: ConceptAImg },
      { id: 3, title: "Reconnaissance & Feasibility", subtitle: "b.", desc: "Assessment of site conditions, soil characteristics, and infrastructure.", image: ConceptBImg },
      { id: 4, title: "Climatic & Orientation", subtitle: "c.", desc: "Evaluation of sun path and wind patterns to optimize placement.", image: ConceptCImg },
      { id: 5, title: "Conceptual Massing", subtitle: "d.", desc: "Development of preliminary 3D massing models to explore form.", image: ConceptDImg },
      { id: 6, title: "Theme Finalization", subtitle: "e.", desc: "Establishing architectural language and design narrative.", image: DevImg }
    ]
  },
  {
    sectionTitle: "Schematic Design",
    sliderData: [
      { id: 1, title: "2. Schematic Design", subtitle: "", desc: "In this stage, we define the overall layout, space planning, and basic structure.", image: B1Img },
      { id: 2, title: "Space Programming", subtitle: "a.", desc: "Functional segregation and spatial organization through zoning.", image: SchematicAImg },
      { id: 3, title: "Floor Plans", subtitle: "b.", desc: "Development of preliminary layouts and vertical distribution.", image: SchematicBImg },
      { id: 4, title: "Structural Selection", subtitle: "c.", desc: "Identification of suitable structural system (RCC, steel).", image: SchematicCImg },
      { id: 5, title: "Elevations & Façade", subtitle: "d.", desc: "Refinement of building form and conceptual façade.", image: SchematicDImg },
      { id: 6, title: "Client Approval", subtitle: "e.", desc: "Alignment with project brief and client sign-off.", image: SchematicEImg }
    ]
  },
  {
    sectionTitle: "Detailed Design",
    sliderData: [
      { id: 1, title: "3. Detailed Design", subtitle: "", desc: "We prepare detailed drawings with dimensions, materials, and technical specifications.", image: C1Img },
      { id: 2, title: "Architectural Drawings", subtitle: "a.", desc: "Dimensioned plans, sections, and elevations with material specs.", image: DetailedAImg },
      { id: 3, title: "Structural Design", subtitle: "b.", desc: "Load calculations, member sizing, and foundation design.", image: DetailedBImg },
      { id: 4, title: "MEP Coordination", subtitle: "c.", desc: "Integration of HVAC, electrical, and plumbing systems.", image: DetailedCImg },
      { id: 5, title: "Material Specifications", subtitle: "d.", desc: "Finalization of materials and inputs for quantity estimation.", image: C3Img },
      { id: 6, title: "Construction Detailing", subtitle: "e.", desc: "Detailed sections, joinery details, and execution-level drawings.", image: DetailedEImg }
    ]
  },
  {
    sectionTitle: "IFC / GFC Drawings",
    sliderData: [
      { id: 1, title: "4. IFC / GFC Drawings", subtitle: "", desc: "We provide IFC and GFC drawings, finalized for on-site execution.", image: IfcFImg },
      { id: 2, title: "IFC Drawing Set", subtitle: "a.", desc: "Compilation of coordinated drawings for construction release.", image: IfcAImg },
      { id: 3, title: "GFC Drawings", subtitle: "b.", desc: "Approved drawings issued for site execution.", image: IfcBImg },
      { id: 4, title: "Reinforcement Detailing", subtitle: "c.", desc: "RCC/steel detailing including bar bending schedules.", image: IfcCImg },
      { id: 5, title: "Coordinated Services", subtitle: "d.", desc: "Integrated MEP layouts ensuring clash-free installation.", image: IfcDImg },
      { id: 6, title: "Document Management", subtitle: "e.", desc: "Tracking drawing revisions and ensuring latest issue on site.", image: IfcEImg }
    ]
  },
  {
    sectionTitle: "Assistance During Execution",
    sliderData: [
      { id: 1, title: "5. Execution Assistance", subtitle: "", desc: "Our team supports construction with site visits, clarifications, and guidance.", image: PMImg },
      { id: 2, title: "Site Supervision", subtitle: "a.", desc: "Periodic monitoring to ensure adherence to design.", image: ExecAImg },
      { id: 3, title: "RFI Resolution", subtitle: "b.", desc: "Addressing site queries and technical clarifications.", image: ExecBImg },
      { id: 4, title: "Interdisciplinary Co-Ord", subtitle: "c.", desc: "Synchronization between architecture, structure, and MEP.", image: ExecCImg },
      { id: 5, title: "Quality Assurance", subtitle: "d.", desc: "Ensuring execution meets codes, standards, and specs.", image: ExecDImg }
    ]
  },
  {
    sectionTitle: "Completion & Handover",
    sliderData: [
      { id: 1, title: "6. Handover", subtitle: "", desc: "We ensure smooth project completion and client handover as per standards.", image: B4Img },
      { id: 2, title: "Snagging & Rectification", subtitle: "a.", desc: "Identification and closure of pending works (punch list).", image: Part6Img },
      { id: 3, title: "Final Quality Audit", subtitle: "b.", desc: "Ensuring readiness for occupancy and compliance.", image: Part7Img },
      { id: 4, title: "As-Built Drawings", subtitle: "c.", desc: "Documentation of final executed conditions.", image: DesignImg },
      { id: 5, title: "Close-Out Docs", subtitle: "d.", desc: "Submission of manuals, warranties, and tech documents.", image: PlanningImg },
      { id: 6, title: "Client Sign-Off", subtitle: "e.", desc: "Formal project completion and transfer.", image: Img1 }
    ]
  }
];

const SmallStackedSlider = ({ sliderData, sectionTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < sliderData.length - 1) setCurrentIndex(prev => prev + 1);
  };
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="relative h-[294px] sm:h-[336px] w-full flex justify-center perspective-[1000px]">
        {sliderData.map((card, index) => {
          const offset = index - currentIndex;

          if (offset > 2 || offset < -1) return null;

          const isCurrent = offset === 0;
          const isFirstIntroCard = card.id === 1;

          return (
            <motion.div
              key={card.id + card.title}
              drag={isCurrent ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset: dragOffset }) => {
                const swipe = dragOffset.x;
                if (swipe < -40) handleNext();
                else if (swipe > 40) handlePrev();
              }}
              initial={false}
              animate={{
                opacity: offset < 0 ? 0 : 1 - offset * 0.25,
                scale: offset < 0 ? 0.95 : 1 - offset * 0.05,
                x: offset < 0 ? -150 : offset * 15,
                y: offset < 0 ? 0 : offset * 15,
                zIndex: 10 - offset,
              }}
              whileHover={isCurrent ? { scale: 1.01 } : {}}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className={`absolute top-0 w-full h-[252px] sm:h-[280px] rounded-[1.5rem] overflow-hidden shadow-2xl bg-white ${
                isCurrent ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'
              } border border-gray-100`}
              style={{ transformOrigin: "top center" }}
            >
              <img src={card.image} alt={card.title} className={`absolute inset-0 w-full h-full ${isFirstIntroCard ? 'object-cover' : 'object-contain p-3 pb-[6rem]'}`} />
              {isFirstIntroCard ? (
                <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center backdrop-blur-[2px] bg-black/30">
                  <div className="w-full">
                    <div className="flex justify-center items-center gap-3 text-yellow-500 mb-4 drop-shadow-md">
                      <div className="w-6 h-[2px] bg-yellow-500"></div>
                      <span className="font-bold tracking-[0.2em] uppercase text-[9px] text-white">Project Phase</span>
                      <div className="w-6 h-[2px] bg-yellow-500"></div>
                    </div>
                    <h2 className="text-white font-black text-xl mb-3 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-tight uppercase">
                      {card.title.replace(/^\d+\.\s*/, "")} 
                    </h2>
                    <p className="text-gray-100 text-sm font-medium drop-shadow-md leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] h-[6rem] justify-center">
                  <div className="flex items-start gap-2 mb-1">
                    <span className="text-yellow-600 font-bold text-2xl leading-none">
                      {card.subtitle}
                    </span>
                    <div>
                      <h3 className="text-slate-900 font-bold text-sm leading-snug mb-1">
                        {card.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs max-w-3xl font-medium leading-relaxed ml-8 overflow-hidden text-ellipsis line-clamp-2">
                    {card.desc}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              currentIndex === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' : 'bg-white hover:bg-yellow-500 hover:text-white text-slate-800 border border-gray-100 active:scale-95'
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-slate-900 font-bold tracking-[0.2em] text-[11px] bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
             {currentIndex + 1} / {sliderData.length}
          </div>
          <button 
            onClick={handleNext} 
            disabled={currentIndex === sliderData.length - 1}
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              currentIndex === sliderData.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' : 'bg-white hover:bg-yellow-500 hover:text-white text-slate-800 border border-gray-100 active:scale-95'
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const AllProcessSliders = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-[1500px]">
        {/* Header Title */}
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-4 text-yellow-500 mb-4">
            <div className="w-10 h-[2px] bg-yellow-500"></div>
            <span className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm">How We Work</span>
            <div className="w-10 h-[2px] bg-yellow-500"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Our Complete <span className="accent-text italic">Process</span>
          </h2>
        </div>

        {/* CSS GRID FOR FLIPBOOKS: 3 COLUMNS, 2 ROWS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
          {sectionsData.map((section, index) => (
            <SmallStackedSlider key={index} sliderData={section.sliderData} sectionTitle={section.sectionTitle} />
          ))}
        </div>

        {/* Premium Execution Line */}
        <div className="mt-16 md:mt-28 mb-10 text-center relative max-w-5xl mx-auto flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent z-0"></div>
          <div className="relative z-10 bg-slate-50 px-5 md:px-8 py-4 border border-yellow-500/20 shadow-sm rounded-full flex flex-col md:flex-row items-center gap-3 md:gap-4 hover:shadow-md transition-shadow">
            <span className="text-yellow-500 text-3xl font-serif">"</span>
            <p className="text-lg sm:text-xl md:text-3xl font-medium tracking-wide text-slate-800 text-center">
              From <span className="font-black italic">idea to execution</span> — we guide you at every step.
            </p>
            <span className="text-yellow-500 text-3xl font-serif">"</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllProcessSliders;
