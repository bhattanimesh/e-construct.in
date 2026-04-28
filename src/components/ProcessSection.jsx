import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import Planning from '../assets/planning.jpg'
import Design from '../assets/design.webp'
import Development from '../assets/development.jpg'
import SectionHeading from './SectionHeading';

const steps = [
  {
    id: "01",
    title: "Concept",
    subtitle: "Visualizing the Vision",
    desc: "The first step and the most important in planning has to do with understanding your project's requirements and expectations.",
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

// ─── MOBILE VERTICAL LAYOUT ───────────────────────────────────────────────────

const MobileProcess = () => (
  <section className="bg-white py-16 px-4">
    <div className="max-w-xl mx-auto">
      {/* Intro */}
      <div className="mb-12">
        <div className="flex items-center gap-4 text-yellow-500 mb-5">
          <div className="w-10 h-[2px] bg-yellow-500"></div>
          <span className="font-bold tracking-[0.3em] uppercase text-xs">Our Workflow</span>
        </div>
        <h2 className="text-4xl font-medium text-slate-900 leading-[0.9] mb-5 tracking-tight">
          How We <br />
          <span className="accent-text italic">Work</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-sm border-l-2 border-yellow-500 pl-4 leading-relaxed">
          Engineering excellence through a structured 3-step delivery process.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative overflow-hidden rounded-3xl p-6 ${step.bg} border border-gray-100 shadow-sm`}
          >
            {/* Background Number */}
            <span className="absolute -top-6 -right-4 text-[8rem] font-black text-gray-200/50 select-none z-0 leading-none">
              {step.id}
            </span>

            <div className="relative z-10">
              {/* Badge */}
              <div className={`inline-block px-3 py-1 rounded-full bg-white shadow-sm font-bold uppercase text-[10px] tracking-widest ${step.accent} mb-4`}>
                Step {step.id} • {step.subtitle}
              </div>

              {/* Image */}
              <div className="h-48 w-full rounded-2xl overflow-hidden shadow-lg mb-5">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Text */}
              <h3 className="text-3xl font-black text-slate-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{step.desc}</p>

              <button className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-yellow-500 transition-all duration-300">
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="font-bold uppercase text-[10px] tracking-[0.2em] text-slate-900 group-hover:text-yellow-600 transition-colors">
                  Discover More
                </span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── DESKTOP HORIZONTAL SCROLL ────────────────────────────────────────────────

const DesktopProcess = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateRange = () => {
      if (contentRef.current) {
        setScrollRange(contentRef.current.scrollWidth - window.innerWidth);
      }
    };
    updateRange();
    const timer = setTimeout(updateRange, 500);
    window.addEventListener('resize', updateRange);
    return () => {
      window.removeEventListener('resize', updateRange);
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const xMovement = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  const x = useSpring(xMovement, { stiffness: 50, damping: 20, mass: 0.5 });

  return (
    <section ref={sectionRef} className="relative bg-white" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          ref={contentRef}
          style={{ x }}
          className="flex items-center gap-16 px-20 w-max"
        >
          {/* Section Intro Slide */}
          <div className="w-[45vw] flex-shrink-0 flex flex-col justify-center py-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-yellow-500 mb-6"
            >
              <div className="w-12 h-[2px] bg-yellow-500"></div>
              <span className="font-bold tracking-[0.3em] uppercase text-sm">Our Workflow</span>
            </motion.div>

            <h2 className="text-8xl lg:text-9xl font-medium text-slate-900 leading-[0.85] mb-6 tracking-tight">
              How We <br />
              <span className="accent-text italic">Work</span>
            </h2>

            <p className="text-gray-500 text-lg max-w-sm border-l-2 border-yellow-500 pl-6 leading-relaxed">
              Engineering excellence through a structured 3-step delivery process. Scroll down to explore.
            </p>

            <div className="mt-8 flex items-center gap-2 text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] animate-pulse">
              Scroll Down <MoveRight className="rotate-90" size={14} />
            </div>
          </div>

          {/* Process Steps */}
          {steps.map((step, index) => (
            <div key={index} className="w-[75vw] lg:w-[70vw] h-[70vh] md:h-[80vh] flex-shrink-0 py-10">
              <div className={`relative w-full h-full overflow-hidden rounded-[4rem] p-16 ${step.bg} border border-gray-100 shadow-sm flex items-center`}>
                <span className="absolute -top-10 -right-10 text-[25rem] font-black text-gray-200/40 select-none z-0">
                  {step.id}
                </span>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
                  <div className="order-2 lg:order-1 h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl transform -rotate-2">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="order-1 lg:order-2">
                    <div className={`inline-block px-4 py-1 rounded-full bg-white shadow-sm font-bold uppercase text-[10px] tracking-widest ${step.accent} mb-4`}>
                      Step {step.id} • {step.subtitle}
                    </div>
                    <h3 className="text-6xl font-black text-slate-900 mt-2 mb-6">{step.title}</h3>
                    <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-md">{step.desc}</p>
                    <button className="flex items-center gap-4 group">
                      <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-yellow-500 transition-all duration-300">
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                      <span className="font-bold uppercase text-xs tracking-[0.2em] text-slate-900 group-hover:text-yellow-600 transition-colors">
                        Discover More
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="w-[10vw] flex-shrink-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── MAIN EXPORT — switches between mobile and desktop ────────────────────────

const ImmersiveProcess = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile ? <MobileProcess /> : <DesktopProcess />;
};

export default ImmersiveProcess;
