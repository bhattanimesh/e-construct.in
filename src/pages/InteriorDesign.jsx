import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight,
  Quote, Phone, Star, Sofa, Palette, Layers,
  Ruler, Lightbulb, Home, PenTool,
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
      <section className="relative w-full h-[65vh] md:h-[80vh] flex items-end overflow-hidden bg-black mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Interior Design Consultancy" className="w-full h-full object-cover opacity-55" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5%] pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-xs">Our Services</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-5 leading-[1.05]">
            Interior Design<br /><span className="accent-text italic">Consultancy</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-xl leading-relaxed mb-8">
            Space planning and interior solutions that balance beauty, function and your unique way of living.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
            <button onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#fbc02d] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center gap-2">
              Start Your Project <ArrowRight size={16} />
            </button>
            <button onClick={() => document.getElementById('int-portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#fbc02d] py-5">
        <div className="max-w-[1400px] mx-auto px-[5%] flex flex-wrap justify-center md:justify-between gap-6 text-black">
          {[['500+', 'Projects Completed'], ['25+', 'Years Experience'], ['650+', 'Happy Clients'], ['100%', 'Design Satisfaction']].map(([v, l]) => (
            <div key={l} className="flex items-center gap-3">
              <span className="text-2xl font-black">{v}</span>
              <span className="text-sm font-bold uppercase tracking-wide opacity-70">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">What We Offer</span>
              <SectionHeading title="Our Services" center={false} />
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              From a single room refresh to a complete build-out — we handle every layer of the interior.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* ── Portfolio bento grid ── */}
      <section id="int-portfolio" className="py-24 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Our Work</span>
              <SectionHeading title="Interior Portfolio" light center={false} />
            </div>
            <p className="text-gray-400 max-w-xs text-sm">A selection of residential and commercial interior projects.</p>
          </div>

          {/* Bento: large left (2×2), 4 tiles right */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[240px]">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="col-span-1 md:col-span-1 row-span-2 relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setLightbox(0)}>
              <img src={portfolioImages[0]} alt="Interior project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-xs font-bold uppercase tracking-widest">View</span>
              </div>
            </motion.div>

            {[1, 2, 3, 4, 5].map((idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => setLightbox(idx)}>
                <img src={portfolioImages[idx]} alt={`Interior ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}>
            <button className="absolute top-5 right-5 text-white/60 hover:text-white text-3xl" onClick={() => setLightbox(null)}>✕</button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#fbc02d] text-white rounded-full flex items-center justify-center transition-colors z-10"
              onClick={e => { e.stopPropagation(); setLightbox(p => (p - 1 + portfolioImages.length) % portfolioImages.length); }}>
              <ChevronLeft size={22} />
            </button>
            <motion.img key={lightbox} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              src={portfolioImages[lightbox]} alt="" className="max-w-5xl max-h-[85vh] w-full object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()} />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#fbc02d] text-white rounded-full flex items-center justify-center transition-colors z-10"
              onClick={e => { e.stopPropagation(); setLightbox(p => (p + 1) % portfolioImages.length); }}>
              <ChevronRight size={22} />
            </button>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {portfolioImages.map((_, i) => (
                <button key={i} onClick={e => { e.stopPropagation(); setLightbox(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? 'bg-[#fbc02d] w-5' : 'bg-white/30'}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Process ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">How We Work</span>
            <SectionHeading title="Our Design Process" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-[5%] grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#fbc02d] text-xs font-bold tracking-[0.2em] uppercase">Why Choose Us</span>
            <SectionHeading title="What You Get" light center={false} />
            <div className="space-y-4">
              {outcomes.map((o, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-[#fbc02d] mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{o}</span>
                </motion.div>
              ))}
            </div>
            <button onClick={() => navigate('/contact')}
              className="mt-10 px-8 py-4 bg-[#fbc02d] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center gap-2 w-fit">
              Get a Free Consultation <ArrowRight size={16} />
            </button>
          </div>
          {/* 2-image collage */}
          <div className="grid grid-cols-2 gap-3 h-[480px]">
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
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-[5%] flex flex-col items-center">
          <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">Client Feedback</span>
          <SectionHeading title="What Our Clients Say" />
          <div className="w-full max-w-3xl bg-white p-10 md:p-14 rounded-3xl relative border border-gray-100 shadow-lg">
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
      <section className="py-20 bg-[#fbc02d]">
        <div className="max-w-[1400px] mx-auto px-[5%] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">Ready to transform your space?</h2>
            <p className="text-black/60 mt-2 font-medium">Let's talk about your project — no obligation, just ideas.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-black text-white font-black uppercase tracking-wider text-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
              Get in Touch <ArrowRight size={16} />
            </button>
            <a href="tel:+919036744017"
              className="px-8 py-4 border-2 border-black text-black font-bold uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors flex items-center gap-2">
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
