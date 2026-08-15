/**
 * ProcessSection — Scroll-driven horizontal pan
 *
 * Structure:
 *   <outer div>  height = scrollDistance + 100vh   ← provides scroll distance
 *     <sticky div>  top:0, height:100vh             ← stays on screen
 *       <motion track>  translateX(0 → -scrollDistance)  ← pans left
 *
 * IMPORTANT: No overflow:hidden on outer div or any ancestor —
 * that breaks position:sticky in Safari and Chrome.
 */

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import Planning    from '../assets/planning.jpg';
import Design      from '../assets/design.webp';
import Development from '../assets/development.jpg';

const STEPS = [
  {
    id: '01', title: 'Concept',     subtitle: 'Visualizing the Vision',
    desc: "Understanding your project requirements and expectations — the most critical first step in planning.",
    img: Planning,    accent: 'text-blue-600',  bg: 'bg-blue-50/60',
  },
  {
    id: '02', title: 'Design',      subtitle: 'Precision & Aesthetics',
    desc: 'We create sketches and ensure compliance with regulations while shaping your vision into structured plans.',
    img: Design,      accent: 'text-pink-600',  bg: 'bg-pink-50/60',
  },
  {
    id: '03', title: 'Development', subtitle: 'Building Excellence',
    desc: 'We finalize materials, refine structure, and transform concepts into a complete, build-ready solution.',
    img: Development, accent: 'text-green-600', bg: 'bg-green-50/60',
  },
];

// ─── mobile ───────────────────────────────────────────────────────────────────

function MobileProcess() {
  return (
    <section className="bg-white pt-12 pb-6 px-4">
      <div className="max-w-xl mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-yellow-500" />
            <span className="text-yellow-600 font-bold tracking-[0.3em] uppercase text-xs">Our Workflow</span>
          </div>
          <h2 className="text-4xl font-medium text-slate-900 leading-tight mb-4 tracking-tight">
            How We <br /><span className="accent-text italic">Work</span>
          </h2>
          <p className="text-gray-500 text-sm border-l-2 border-yellow-500 pl-4 leading-relaxed">
            Engineering excellence through a structured 3-step delivery process.
          </p>
        </div>
        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <div key={i} className={`relative overflow-hidden rounded-3xl p-6 ${step.bg} border border-gray-100 shadow-sm`}>
              <span className="absolute -top-4 -right-3 text-[7rem] font-black text-gray-200/50 select-none z-0 leading-none">
                {step.id}
              </span>
              <div className="relative z-10">
                <span className={`inline-block px-3 py-1 rounded-full bg-white shadow-sm font-bold uppercase text-[10px] tracking-widest ${step.accent} mb-4`}>
                  Step {step.id} · {step.subtitle}
                </span>
                <div className="h-44 w-full rounded-2xl overflow-hidden shadow-md mb-4">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── desktop ──────────────────────────────────────────────────────────────────

function DesktopProcess() {
  const outerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDist, setScrollDist] = useState(0);

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const dist = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
    setScrollDist(dist);
  }, []);

  useEffect(() => {
    measure();
    const imgs = trackRef.current?.querySelectorAll('img') ?? [];
    imgs.forEach(img => { if (!img.complete) img.addEventListener('load', measure, { once: true }); });
    const t = setTimeout(measure, 600);
    window.addEventListener('resize', measure);
    return () => { clearTimeout(t); window.removeEventListener('resize', measure); };
  }, [measure]);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ['start 80px', 'end 100vh'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDist]);

  // Height = scroll distance + 1 viewport minus sticky offset
  const outerH = scrollDist > 0 ? scrollDist + window.innerHeight - 80 : window.innerHeight;

  return (
    <div
      ref={outerRef}
      style={{
        height: outerH,
        position: 'relative',
        background: 'white',
        // NO overflow property here — overflow:hidden/clip breaks sticky
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '80px',
          height: 'calc(100vh - 80px)',
          width: '100%',
          overflow: 'hidden', // only on the sticky panel itself, not the outer
          display: 'flex',
          alignItems: 'center',
          background: 'white',
        }}
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex items-stretch gap-0 w-max h-full will-change-transform"
        >
          {/* Intro */}
          <div style={{ width: '50vw', minWidth: 480, flexShrink: 0 }}
            className="flex flex-col justify-center px-16 py-4">
            <div className="flex items-center gap-4 text-yellow-500 mb-4">
              <div className="w-12 h-[2px] bg-yellow-500" />
              <span className="font-bold tracking-[0.3em] uppercase text-sm">Our Workflow</span>
            </div>
            <h2 className="text-7xl lg:text-8xl font-medium text-slate-900 leading-[0.85] mb-5 tracking-tight">
              How We <br /><span className="accent-text italic">Work</span>
            </h2>
            <p className="text-gray-500 text-base lg:text-lg max-w-sm border-l-2 border-yellow-500 pl-6 leading-relaxed">
              Engineering excellence through a structured 3-step delivery process. Scroll down to explore.
            </p>
            <div className="mt-6 flex items-center gap-2 text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] animate-pulse">
              Scroll Down <MoveRight className="rotate-90" size={14} />
            </div>
          </div>

          {/* Steps */}
          {STEPS.map((step, i) => (
            <div key={i} style={{ width: '85vw', maxWidth: 1100, flexShrink: 0 }}
              className="flex items-center px-12 py-4">
              <div className={`relative w-full h-[calc(100vh-140px)] max-h-[660px] overflow-hidden rounded-[3rem] p-10 lg:p-14 ${step.bg} border border-gray-100 shadow-sm flex items-center`}>
                <span className="absolute -top-10 -right-10 text-[20rem] font-black text-gray-200/40 select-none z-0 leading-none pointer-events-none">
                  {step.id}
                </span>
                <div className="relative z-10 grid grid-cols-2 gap-12 items-center w-full">
                  <div className="h-[340px] lg:h-[380px] w-full rounded-3xl overflow-hidden shadow-2xl -rotate-2">
                    <img src={step.img} alt={step.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy" />
                  </div>
                  <div>
                    <div className={`inline-block px-4 py-1 rounded-full bg-white shadow-sm font-bold uppercase text-[10px] tracking-widest ${step.accent} mb-3`}>
                      Step {step.id} · {step.subtitle}
                    </div>
                    <h3 className="text-5xl lg:text-6xl font-black text-slate-900 mt-1 mb-4">{step.title}</h3>
                    <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-md">{step.desc}</p>
                    <button className="flex items-center gap-4 group">
                      <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white group-hover:bg-yellow-500 transition-all duration-300">
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

          <div style={{ width: '2vw', flexShrink: 0 }} />
        </motion.div>
      </div>
    </div>
  );
}

// ─── root ─────────────────────────────────────────────────────────────────────

export default function ImmersiveProcess() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return isMobile ? <MobileProcess /> : <DesktopProcess />;
}
