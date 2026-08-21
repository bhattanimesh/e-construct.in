import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import ConceptAImg from "../assets/concept_a.png";
import ConceptBImg from "../assets/concept_b.png";
import ConceptCImg from "../assets/concept_c.png";
import ConceptDImg from "../assets/concept_d.png";
import SchematicAImg from "../assets/schematic_a.png";
import SchematicBImg from "../assets/schematic_b.png";
import SchematicCImg from "../assets/schematic_c.png";
import SchematicDImg from "../assets/schematic_d.png";
import SchematicEImg from "../assets/schematic_e.png";
import DetailedAImg from "../assets/detailed_a.png";
import DetailedBImg from "../assets/detailed_b.png";
import DetailedCImg from "../assets/detailed_c.png";
import DetailedEImg from "../assets/detailed_e.png";
import IfcAImg from "../assets/ifc_a.png";
import IfcBImg from "../assets/ifc_b.png";
import IfcCImg from "../assets/ifc_c.png";
import IfcDImg from "../assets/ifc_d.png";
import IfcEImg from "../assets/ifc_e.png";
import IfcFImg from "../assets/ifc_f.png";
import ExecAImg from "../assets/exec_a.png";
import ExecBImg from "../assets/exec_b.png";
import ExecCImg from "../assets/exec_c.png";
import ExecDImg from "../assets/exec_d.png";
import ArchImg from "../assets/ArchitecturalConsultancy.jpg";
import StructImg from "../assets/StructuralDesignConsultancy.jpeg";
import VillaImg from "../assets/LuxuryVillaDesign.jpg";
import KalpataruImg from "../assets/KALPATARUParkRiviera.webp";
import B1Img from "../assets/b1.webp";
import B4Img from "../assets/b4.webp";
import C1Img from "../assets/c1.jpg";
import C3Img from "../assets/c3.jpg";
import PMImg from "../assets/ProjectManagementConsultancy.jpg";
import Part6Img from "../assets/part6.png";
import Part7Img from "../assets/part7.avif";
import Img1 from "../assets/img1.jpg";

const phases = [
  {
    num: "01", title: "Concept Design", tagline: "Where every great project begins.",
    cover: ArchImg,
    steps: [
      { letter: "A", title: "Client Briefing",              desc: "Understanding project vision, functional requirements, and budget constraints.",    img: ConceptAImg  },
      { letter: "B", title: "Reconnaissance & Feasibility", desc: "Assessment of site conditions, soil characteristics, and infrastructure.",          img: ConceptBImg  },
      { letter: "C", title: "Climatic & Orientation",       desc: "Evaluation of sun path and wind patterns to optimise placement.",                   img: ConceptCImg  },
      { letter: "D", title: "Conceptual Massing",           desc: "Development of preliminary 3D massing models to explore form.",                    img: ConceptDImg  },
      { letter: "E", title: "Theme Finalization",           desc: "Establishing architectural language and design narrative.",                         img: VillaImg     },
    ],
  },
  {
    num: "02", title: "Schematic Design", tagline: "Defining layout, space & structure.",
    cover: B1Img,
    steps: [
      { letter: "A", title: "Space Programming",    desc: "Functional segregation and spatial organisation through zoning.",                          img: SchematicAImg },
      { letter: "B", title: "Floor Plans",          desc: "Development of preliminary layouts and vertical distribution.",                            img: SchematicBImg },
      { letter: "C", title: "Structural Selection", desc: "Identification of suitable structural system (RCC, steel).",                               img: SchematicCImg },
      { letter: "D", title: "Elevations & Facade",  desc: "Refinement of building form and conceptual facade.",                                       img: SchematicDImg },
      { letter: "E", title: "Client Approval",      desc: "Alignment with project brief and client sign-off.",                                        img: SchematicEImg },
    ],
  },
  {
    num: "03", title: "Detailed Design", tagline: "Precision drawings & full specifications.",
    cover: C1Img,
    steps: [
      { letter: "A", title: "Architectural Drawings",  desc: "Dimensioned plans, sections, and elevations with material specs.",                      img: DetailedAImg },
      { letter: "B", title: "Structural Design",       desc: "Load calculations, member sizing, and foundation design.",                              img: DetailedBImg },
      { letter: "C", title: "MEP Coordination",        desc: "Integration of HVAC, electrical, and plumbing systems.",                                img: DetailedCImg },
      { letter: "D", title: "Material Specifications", desc: "Finalisation of materials and inputs for quantity estimation.",                         img: C3Img        },
      { letter: "E", title: "Construction Detailing",  desc: "Detailed sections, joinery details, and execution-level drawings.",                     img: DetailedEImg },
    ],
  },
  {
    num: "04", title: "IFC / GFC Drawings", tagline: "Finalised drawings ready for site.",
    cover: IfcFImg,
    steps: [
      { letter: "A", title: "IFC Drawing Set",         desc: "Compilation of coordinated drawings for construction release.",                         img: IfcAImg },
      { letter: "B", title: "GFC Drawings",            desc: "Approved drawings issued for site execution.",                                          img: IfcBImg },
      { letter: "C", title: "Reinforcement Detailing", desc: "RCC/steel detailing including bar bending schedules.",                                  img: IfcCImg },
      { letter: "D", title: "Coordinated Services",    desc: "Integrated MEP layouts ensuring clash-free installation.",                              img: IfcDImg },
      { letter: "E", title: "Document Management",     desc: "Tracking drawing revisions and ensuring latest issue on site.",                         img: IfcEImg },
    ],
  },
  {
    num: "05", title: "Execution Assistance", tagline: "On-site support from start to finish.",
    cover: PMImg,
    steps: [
      { letter: "A", title: "Site Supervision",         desc: "Periodic monitoring to ensure adherence to design.",                                   img: ExecAImg },
      { letter: "B", title: "RFI Resolution",           desc: "Addressing site queries and technical clarifications.",                                img: ExecBImg },
      { letter: "C", title: "Interdisciplinary Co-Ord", desc: "Synchronisation between architecture, structure, and MEP.",                           img: ExecCImg },
      { letter: "D", title: "Quality Assurance",        desc: "Ensuring execution meets codes, standards, and specifications.",                       img: ExecDImg },
    ],
  },
  {
    num: "06", title: "Completion & Handover", tagline: "Seamless delivery & client sign-off.",
    cover: B4Img,
    steps: [
      { letter: "A", title: "Snagging & Rectification", desc: "Identification and closure of pending works (punch list).",                            img: Part6Img    },
      { letter: "B", title: "Final Quality Audit",      desc: "Ensuring readiness for occupancy and compliance.",                                     img: Part7Img    },
      { letter: "C", title: "As-Built Drawings",        desc: "Documentation of final executed conditions.",                                          img: StructImg   },
      { letter: "D", title: "Close-Out Documents",      desc: "Submission of manuals, warranties, and technical documents.",                          img: KalpataruImg },
      { letter: "E", title: "Client Sign-Off",          desc: "Formal project completion and transfer.",                                              img: Img1        },
    ],
  },
];

// ─── Phase accordion item ─────────────────────────────────────────────────────
const PhaseItem = ({ phase, phaseIdx, isOpen, onToggle, activeStep, onStep }) => {
  const step = phase.steps[activeStep];

  return (
    <div className={`rounded-xl border transition-all duration-200 overflow-hidden ${
      isOpen ? "border-amber-200 shadow-sm" : "border-slate-100 hover:border-slate-200"
    }`}>

      {/* ── Header ── */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-3.5 py-3 bg-white text-left"
      >
        {/* Number */}
        <span className={`text-[10px] font-black tracking-widest flex-shrink-0 transition-colors duration-200 ${
          isOpen ? "text-amber-500" : "text-slate-300"
        }`}>
          {phase.num}
        </span>

        {/* Cover thumb */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-md overflow-hidden transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-40"
        }`}>
          <img src={phase.cover} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </div>

        {/* Title + tagline */}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-bold leading-none transition-colors duration-200 ${
            isOpen ? "text-slate-900" : "text-slate-600"
          }`}>
            {phase.title}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5 truncate">{phase.tagline}</p>
        </div>

        {/* Step count */}
        <span className={`hidden sm:flex flex-shrink-0 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full transition-all duration-200 ${
          isOpen ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-400"
        }`}>
          {phase.steps.length}
        </span>

        {/* Chevron */}
        <ChevronDown
          size={14}
          className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* ── Expanded body ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-100">

              {/* Image — mobile only, shown above steps */}
              <div className="lg:hidden relative h-36 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeStep}
                    src={step.img}
                    alt={step.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-3 pb-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-amber-400 text-[9px] font-black uppercase tracking-widest">Step {step.letter}</p>
                      <p className="text-white text-xs font-bold leading-snug">{step.title}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Steps list */}
              <div className="px-3 py-2 flex flex-col gap-0.5">
                {phase.steps.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => onStep(phaseIdx, i)}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-all duration-150 group ${
                      activeStep === i
                        ? "bg-amber-50 border border-amber-200"
                        : "border border-transparent hover:bg-slate-50"
                    }`}
                  >
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black transition-all duration-150 ${
                      activeStep === i
                        ? "bg-amber-500 text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}>
                      {s.letter}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-semibold leading-snug ${
                        activeStep === i ? "text-slate-900" : "text-slate-600"
                      }`}>
                        {s.title}
                      </p>
                      {activeStep === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.18 }}
                          className="text-slate-400 text-[11px] mt-0.5 leading-relaxed"
                        >
                          {s.desc}
                        </motion.p>
                      )}
                    </div>
                    <ArrowRight
                      size={11}
                      className={`flex-shrink-0 transition-opacity duration-150 ${
                        activeStep === i ? "text-amber-500 opacity-100" : "text-slate-300 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Progress bar */}
              <div className="px-3 pb-2.5 pt-1">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-[3px] bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-amber-400 rounded-full"
                      animate={{ width: `${((activeStep + 1) / phase.steps.length) * 100}%` }}
                      transition={{ duration: 0.25 }}
                    />
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 flex-shrink-0 tabular-nums">
                    {activeStep + 1}/{phase.steps.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────
const AllProcessSliders = () => {
  const [openPhase, setOpenPhase]   = useState(0);
  const [activeSteps, setActiveSteps] = useState(phases.map(() => 0));

  const togglePhase = (i) => setOpenPhase((p) => (p === i ? -1 : i));
  const setStep = (pi, si) =>
    setActiveSteps((prev) => { const n = [...prev]; n[pi] = si; return n; });

  const curPhase = openPhase >= 0 ? phases[openPhase] : null;
  const curStep  = curPhase ? curPhase.steps[activeSteps[openPhase]] : null;

  return (
    <section className="pt-6 pb-12 md:pt-8 md:pb-16 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-amber-500" />
              <span className="text-amber-600 font-black uppercase tracking-[0.25em] text-[9px]">Detailed Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium text-slate-900 leading-tight tracking-tight">
              Phase-by-Phase <span className="accent-text italic">Breakdown</span>
            </h2>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-[220px] sm:text-right">
            6 phases · from brief to handover
          </p>
        </div>

        {/* ── Body: accordion + sticky panel ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-5 xl:gap-8 items-start">

          {/* Accordion */}
          <div className="flex flex-col gap-1.5">
            {phases.map((phase, i) => (
              <PhaseItem
                key={i}
                phase={phase}
                phaseIdx={i}
                isOpen={openPhase === i}
                onToggle={() => togglePhase(i)}
                activeStep={activeSteps[i]}
                onStep={setStep}
              />
            ))}
          </div>

          {/* Sticky image panel — desktop only */}
          <div className="hidden lg:block sticky top-20">
            <AnimatePresence mode="wait">
              {curPhase && curStep ? (
                <motion.div
                  key={`${openPhase}-${activeSteps[openPhase]}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-white"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: 220 }}>
                    <img
                      src={curStep.img}
                      alt={curStep.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="bg-amber-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                        Phase {curPhase.num}
                      </span>
                      <span className="bg-white/90 text-slate-700 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">
                        Step {curStep.letter}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
                      <p className="text-white text-sm font-bold leading-snug">{curStep.title}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-4 py-3.5">
                    <p className="text-[9px] font-black uppercase tracking-widest text-amber-600 mb-1">
                      {curPhase.title}
                    </p>
                    <p className="text-slate-500 text-xs leading-relaxed">{curStep.desc}</p>

                    {/* Step dots */}
                    <div className="flex items-center gap-1.5 mt-3">
                      {curPhase.steps.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setStep(openPhase, i)}
                          className={`h-1.5 rounded-full transition-all duration-250 ${
                            i === activeSteps[openPhase]
                              ? "w-5 bg-amber-500"
                              : "w-1.5 bg-slate-200 hover:bg-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-8"
                  style={{ height: 280 }}
                >
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                    <ArrowRight size={14} className="text-slate-400" />
                  </div>
                  <p className="text-slate-400 text-xs font-medium">Select a phase to preview</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Phase thumbnail strip */}
            <div className="mt-2.5 grid grid-cols-6 gap-1.5">
              {phases.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setOpenPhase(i)}
                  className={`relative rounded-lg overflow-hidden transition-all duration-200 ${
                    openPhase === i
                      ? "ring-2 ring-amber-500 ring-offset-1 opacity-100"
                      : "opacity-40 hover:opacity-70"
                  }`}
                  style={{ height: 38 }}
                  title={p.title}
                >
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-black/25" />
                  <span className="absolute inset-0 flex items-center justify-center text-[9px] font-black text-white">
                    {p.num}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer strip ── */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-400 text-xs">
            From <span className="text-slate-700 font-semibold">idea to execution</span> — guided at every step.
          </p>
          <div className="flex items-center gap-1">
            {phases.map((_, i) => (
              <button
                key={i}
                onClick={() => setOpenPhase(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i <= (openPhase >= 0 ? openPhase : -1) ? "bg-amber-500" : "bg-slate-200"
                }`}
                style={{ width: i === openPhase ? 20 : 6 }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AllProcessSliders;
