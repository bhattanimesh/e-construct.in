import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight,
  Quote, Phone, Star, Sofa, Palette, Layers,
  Ruler, Lightbulb, Home, PenTool, Maximize2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';

import heroImg    from '../assets/InteriorDesignConsultancy.webp';
import int1       from '../assets/cs_int_1.jpg';
import int2       from '../assets/cs_int_2.jpg';
import int3       from '../assets/cs_int_3.jpg';
import int4       from '../assets/cs_int_4.jpg';
import int5       from '../assets/cs_int_5.jpg';
import int6       from '../assets/cs_int_6.jpg';

const interiorTrack1 = [
  '/uploads/interior/LIVING V1.png',
  '/uploads/interior/KITCHEN V1.png',
  '/uploads/interior/DINING V1.png',
  '/uploads/interior/S B R V1.png',
  '/uploads/interior/SF HT - V1.png',
  '/uploads/interior/S Bath R V1.png',
  '/uploads/interior/SWIMMING V3.png',
  '/uploads/interior/PASSAGE V1.png',
  '/uploads/interior/M O (1).jpeg',
  '/uploads/interior/GARDEN V1.png',
  '/uploads/interior/AA M I V1.png',
  '/uploads/interior/LI (1).jpeg',
  '/uploads/interior/Bird EYE View .png',
  '/uploads/interior/HM V2.png',
  '/uploads/interior/SF B 3 - V1.png',
  '/uploads/interior/Scene 1.png',
  '/uploads/interior/Scene 5.png',
  '/uploads/interior/Shot 2 IMG.png',
  '/uploads/interior/AS M V (1).png',
  '/uploads/interior/Lift V1.png',
];

const interiorTrack2 = [
  '/uploads/interior/LIVING V3.png',
  '/uploads/interior/DINING V2.png',
  '/uploads/interior/S B L V1.png',
  '/uploads/interior/SF HT - V3.png',
  '/uploads/interior/S Bath L V1.png',
  '/uploads/interior/SWIMMING V4.png',
  '/uploads/interior/PASSAGE V 3.png',
  '/uploads/interior/M O (3).jpeg',
  '/uploads/interior/GARDEN V2.png',
  '/uploads/interior/AA M I V5.png',
  '/uploads/interior/LI (3).jpeg',
  '/uploads/interior/HM V4.png',
  '/uploads/interior/SF B 3 -Bathroom V1.png',
  '/uploads/interior/Scene 11.png',
  '/uploads/interior/Scene 25.png',
  '/uploads/interior/Scene 27.png',
  '/uploads/interior/Shot 4 - IMG.png',
  '/uploads/interior/AS M V (3).png',
  '/uploads/interior/1.png',
  '/uploads/interior/4.png',
];

const allInteriorGalleryImages = [...interiorTrack1, ...interiorTrack2];
const portfolioImages = [int1, int2, int3, int4, int5, int6];

const services = [
  { icon: Sofa,      title: 'Space Planning',          desc: 'Functional layouts that maximise every square foot — from open-plan living to compact apartments.' },
  { icon: Palette,   title: 'Concept & Theme Design',  desc: 'Cohesive design narratives — contemporary, traditional, minimalist or bespoke — tailored to your lifestyle.' },
  { icon: Layers,    title: 'Material & Finish Selection', desc: 'Curated palettes of flooring, wall finishes, ceilings, joinery and soft furnishings.' },
  { icon: Lightbulb, title: 'Lighting Design',          desc: 'Layered ambient, task and accent lighting schemes that set the mood in every room.' },
  { icon: Ruler,     title: 'Furniture & Joinery',      desc: 'Custom-designed furniture, built-ins and millwork crafted to fit your space precisely.' },
  { icon: PenTool,   title: 'Working Drawings & BOQ',   desc: 'Detailed construction drawings, specifications and bill of quantities for seamless execution.' },
  { icon: Home,      title: 'Residential Interiors',    desc: 'Villas, apartments and bungalows — from single rooms to complete home transformations.' },
  { icon: Layers,    title: 'Commercial Interiors',     desc: 'Offices, retail spaces, hospitality and institutional interiors designed for impact and function.' },
];

const process = [
  { step: '01', title: 'Brief & Discovery',    desc: 'We understand your lifestyle, preferences, budget and timeline through an in-depth consultation.' },
  { step: '02', title: 'Concept Development',  desc: 'Mood boards, 3D visualisations and material samples bring the design vision to life before a single wall is touched.' },
  { step: '03', title: 'Design Development',   desc: 'Detailed drawings, specifications and BOQ are prepared — every element resolved before execution begins.' },
  { step: '04', title: 'Execution & Handover', desc: 'We oversee contractors, manage quality and deliver a finished space that matches the design exactly.' },
];

const outcomes = [
  'Spaces designed around how you actually live and work',
  'Coordinated design — no mismatched finishes or afterthoughts',
  '3D visualisations before any work begins',
  'Transparent BOQ — no hidden costs',
  'Single point of contact from concept to handover',
  'Post-handover support and snagging resolution',
];

const testimonials = [
  { text: 'E-Construct transformed our apartment into something we never imagined possible. Every detail was considered and the execution was flawless.', role: 'Homeowner, Bangalore' },
  { text: 'The 3D visualisations gave us complete confidence before we committed. What was delivered matched the renders perfectly.', role: 'Villa Owner, Hyderabad' },
  { text: 'Professional, creative and on budget. Our office redesign has genuinely improved how our team works and how clients perceive us.', role: 'Business Owner, Mumbai' },
];

const InteriorDesign = () => {
  const [lightbox, setLightbox]           = useState(null);
  const [activeTestimonial, setActiveT]   = useState(0);
  const navigate = useNavigate();

  const nextT = () => setActiveT(p => (p + 1) % testimonials.length);
  const prevT = () => setActiveT(p => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <section className="relative w-full h-[55vh] md:h-[75vh] flex items-end overflow-hidden bg-black mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Interior Design Consultancy" className="w-full h-full object-cover opacity-55" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-[5%] pb-12 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-xs">Our Services</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-4 leading-[1.05]">
            Interior Design<br /><span className="accent-text italic">Consultancy</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-sm md:text-lg max-w-xl leading-relaxed mb-6">
            Space planning and interior solutions that balance beauty, function and your unique way of living.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => navigate('/contact')}
              className="px-6 py-3 md:px-8 md:py-4 bg-[#fbc02d] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={16} />
            </button>
            <button onClick={() => document.getElementById('int-portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 md:px-8 md:py-4 border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors text-center">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#fbc02d] py-4">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%] grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-4 text-black">
          {[['500+', 'Projects Completed'], ['25+', 'Years Experience'], ['650+', 'Happy Clients'], ['100%', 'Design Satisfaction']].map(([v, l]) => (
            <div key={l} className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black">{v}</span>
              <span className="text-xs font-bold uppercase tracking-wide opacity-70">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">What We Offer</span>
              <SectionHeading title="Our Services" center={false} />
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              From a single room refresh to a complete build-out — we handle every layer of the interior.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="group bg-slate-50 border border-gray-100 rounded-2xl p-6 hover:border-[#fbc02d]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 bg-[#fbc02d]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#fbc02d]/20 transition-colors">
                    <Icon size={20} className="text-[#fbc02d]" />
                  </div>
                  <h3 className="text-sm font-black text-slate-900 mb-2 group-hover:text-[#fbc02d] transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery Section — Continuous Marquee Stream (2 Rows) ── */}
      <section id="int-portfolio" className="py-16 bg-slate-950 text-white border-t border-b border-slate-900 overflow-hidden relative">
        <style>{`
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marqueeLeft 65s linear infinite;
          }
          .animate-marquee-right {
            animation: marqueeRight 65s linear infinite;
          }
          .animate-marquee-left:hover,
          .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-[5%] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-900">
            <div>
              <span className="text-yellow-500 text-[11px] font-bold tracking-[0.2em] uppercase block mb-1">
                Explore Our Renders & Projects
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Interior Design <span className="accent-text italic text-yellow-500 font-serif">Showcase</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>30+ Interior Designs · Hover to Pause · Click to Expand</span>
            </div>
          </div>
        </div>

        {/* Marquee Row 1 (Right to Left) */}
        <div className="mb-4 flex overflow-hidden select-none">
          <div className="flex gap-3 animate-marquee-left shrink-0">
            {[...interiorTrack1, ...interiorTrack1].map((imgUrl, idx) => {
              const globalIndex = allInteriorGalleryImages.indexOf(imgUrl);
              return (
                <div
                  key={`t1-${idx}`}
                  onClick={() => setLightbox(globalIndex >= 0 ? globalIndex : idx % allInteriorGalleryImages.length)}
                  className="group relative w-48 sm:w-64 h-32 sm:h-40 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-md hover:border-yellow-500/80 hover:scale-[1.03] transition-all duration-300"
                >
                  <img
                    src={imgUrl}
                    alt={`Interior design showcase ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-yellow-500 text-slate-950 p-2.5 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Row 2 (Left to Right) */}
        <div className="flex overflow-hidden select-none">
          <div className="flex gap-3 animate-marquee-right shrink-0">
            {[...interiorTrack2, ...interiorTrack2].map((imgUrl, idx) => {
              const globalIndex = allInteriorGalleryImages.indexOf(imgUrl);
              return (
                <div
                  key={`t2-${idx}`}
                  onClick={() => setLightbox(globalIndex >= 0 ? globalIndex : idx % allInteriorGalleryImages.length)}
                  className="group relative w-48 sm:w-64 h-32 sm:h-40 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-md hover:border-yellow-500/80 hover:scale-[1.03] transition-all duration-300"
                >
                  <img
                    src={imgUrl}
                    alt={`Interior design showcase ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-yellow-500 text-slate-950 p-2.5 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Solid High-Contrast Lightbox Popup ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen w-screen bg-slate-950 z-[999999] flex flex-col justify-between p-4 md:p-6 overflow-hidden select-none"
            onClick={() => setLightbox(null)}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto text-white z-30 shrink-0">
              <div className="flex items-center gap-3">
                <span className="bg-yellow-500 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  INTERIOR DESIGN {lightbox + 1} OF {allInteriorGalleryImages.length}
                </span>
              </div>
              <button
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-yellow-400 hover:text-slate-950 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg font-bold"
                onClick={() => setLightbox(null)}
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>

            {/* Center Stage Image */}
            <div className="relative flex items-center justify-center flex-1 my-2 overflow-hidden cursor-default">
              <button
                className="absolute left-2 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 hover:bg-yellow-400 hover:text-slate-950 text-white rounded-full flex items-center justify-center transition-all border border-slate-700 z-30 shadow-2xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((p) => (p - 1 + allInteriorGalleryImages.length) % allInteriorGalleryImages.length);
                }}
                title="Previous"
              >
                <ChevronLeft size={26} />
              </button>

              <motion.img
                key={lightbox}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 28, stiffness: 350 }}
                src={allInteriorGalleryImages[lightbox]}
                alt={`Interior Design ${lightbox + 1}`}
                className="max-w-[88vw] max-h-[68vh] md:max-h-[72vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                className="absolute right-2 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 hover:bg-yellow-400 hover:text-slate-950 text-white rounded-full flex items-center justify-center transition-all border border-slate-700 z-30 shadow-2xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((p) => (p + 1) % allInteriorGalleryImages.length);
                }}
                title="Next"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            {/* Bottom Thumbnail Strip */}
            <div
              className="w-full max-w-3xl mx-auto flex items-center gap-2 overflow-x-auto py-2.5 px-3.5 bg-slate-900 rounded-2xl border border-slate-800 shrink-0 cursor-default shadow-2xl z-30 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={(e) => e.stopPropagation()}
            >
              {allInteriorGalleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    i === lightbox
                      ? 'border-yellow-400 scale-105 shadow-lg ring-2 ring-yellow-500/50 opacity-100'
                      : 'border-transparent opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Process ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%]">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">How We Work</span>
            <SectionHeading title="Our Design Process" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {process.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative bg-slate-50 rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300">
                <span className="text-7xl font-black text-[#fbc02d]/10 absolute -top-3 -left-2 select-none">{s.step}</span>
                <div className="w-9 h-9 bg-[#fbc02d] text-black text-xs font-black rounded-full flex items-center justify-center mb-5 relative z-10">{s.step}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2 relative z-10">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes + split image ── */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%] grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <span className="text-[#fbc02d] text-xs font-bold tracking-[0.2em] uppercase">Why Choose Us</span>
            <SectionHeading title="What You Get" light center={false} />
            <div className="space-y-3 md:space-y-4">
              {outcomes.map((o, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-[#fbc02d] mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{o}</span>
                </motion.div>
              ))}
            </div>
            <button onClick={() => navigate('/contact')}
              className="mt-8 md:mt-10 px-6 py-3 md:px-8 md:py-4 bg-[#fbc02d] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center gap-2 w-fit">
              Get a Free Consultation <ArrowRight size={16} />
            </button>
          </div>
          {/* 2-image collage */}
          <div className="grid grid-cols-2 gap-3 h-[320px] sm:h-[400px] md:h-[480px]">
            <div className="rounded-2xl overflow-hidden row-span-2">
              <img src={int2} alt="Interior project" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={int4} alt="Interior project" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={int6} alt="Interior project" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%] flex flex-col items-center">
          <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">Client Feedback</span>
          <SectionHeading title="What Our Clients Say" />
          <div className="w-full max-w-3xl bg-white p-7 sm:p-10 md:p-14 rounded-3xl relative border border-gray-100 shadow-lg">
            <div className="absolute top-8 right-8 text-gray-100"><Quote size={64} /></div>
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="relative z-10 text-center">
                <div className="flex justify-center text-yellow-400 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-lg md:text-xl font-serif italic text-gray-700 leading-relaxed mb-8">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="w-12 h-0.5 bg-yellow-500 mx-auto mb-4" />
                <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-3 mt-8">
              <button onClick={prevT} className="w-10 h-10 bg-slate-50 text-slate-900 shadow rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors border border-gray-200"><ChevronLeft size={18} /></button>
              <button onClick={nextT} className="w-10 h-10 bg-slate-900 text-white shadow rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 md:py-20 bg-[#fbc02d]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">Ready to transform your space?</h2>
            <p className="text-black/60 mt-2 font-medium text-sm md:text-base">Let's talk about your project — no obligation, just ideas.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button onClick={() => navigate('/contact')}
              className="px-6 py-3 md:px-8 md:py-4 bg-black text-white font-black uppercase tracking-wider text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              Get in Touch <ArrowRight size={16} />
            </button>
            <a href="tel:+919036744017"
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-black text-black font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
              <Phone size={16} /> +91 90367 44017
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default InteriorDesign;
