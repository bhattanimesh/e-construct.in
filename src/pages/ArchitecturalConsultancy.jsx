import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, ChevronLeft, ChevronRight,
  Quote, Phone, Star, PenTool, Layers, Building2,
  FileText, Compass, LayoutDashboard, Ruler,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';

import heroImg  from '../assets/s1.jpg';
import arch1    from '../assets/cs_arch1.jpg';
import arch2    from '../assets/cs_arch2.jpg';
import arch3    from '../assets/cs_arch3.jpg';
import arch4    from '../assets/cs_arch4.jpg';
import arch5    from '../assets/cs_arch5.jpg';
import arch6    from '../assets/cs_arch6.jpg';
import archN1   from '../assets/cs_arch_n1.png';
import archN2   from '../assets/cs_arch_n2.png';
import archN3   from '../assets/cs_arch_n3.png';
import archN4   from '../assets/cs_arch_n4.png';
import archN5   from '../assets/cs_arch_n5.png';

const portfolioImages = [arch1, arch2, arch3, arch4, arch5, arch6];
const drawingImages   = [archN1, archN2, archN3, archN4, archN5];

const services = [
  { icon: Compass,         title: 'Concept Design',           desc: 'Translating your brief into compelling spatial concepts — massing, orientation, form and character.' },
  { icon: PenTool,         title: 'Schematic Design',         desc: 'Refined floor plans, sections and elevations that establish the full design intent.' },
  { icon: Layers,          title: 'Design Development',       desc: 'Detailed resolution of all architectural elements — materials, openings, structure and services coordination.' },
  { icon: FileText,        title: 'Construction Documents',   desc: 'Complete working drawing sets and specifications ready for contractor tendering and site execution.' },
  { icon: Building2,       title: 'Statutory Approvals',      desc: 'Preparation and submission of drawings for BBMP, BDA, RERA and other regulatory approvals.' },
  { icon: LayoutDashboard, title: 'Interior Architecture',    desc: 'Architectural detailing of internal spaces — ceiling design, wall treatments, openings and built-ins.' },
  { icon: Ruler,           title: 'Site Supervision',         desc: 'Periodic site visits and quality checks to ensure construction matches the approved design.' },
  { icon: FileText,        title: 'BOQ & Cost Estimation',    desc: 'Accurate bill of quantities and cost estimates to keep your project on budget from day one.' },
];

const process = [
  { step: '01', title: 'Brief & Site Analysis',   desc: 'We study your requirements, site constraints, orientation, local regulations and context before a line is drawn.' },
  { step: '02', title: 'Concept & Schematic',     desc: 'Multiple concept options are explored, refined and presented with 3D visualisations for your feedback.' },
  { step: '03', title: 'Design Development',      desc: 'The approved concept is developed into a fully coordinated design with all technical details resolved.' },
  { step: '04', title: 'Drawings & Approvals',    desc: 'Construction documents are issued and statutory submissions are managed on your behalf.' },
];

const outcomes = [
  'Designs that respond to site, climate and context — not just aesthetics',
  'Full coordination between architecture, structure and MEP from the start',
  '3D renders and walkthroughs before construction begins',
  'Statutory approval drawings handled end-to-end',
  'Transparent cost estimates at every design stage',
  'Dedicated architect as single point of contact throughout',
];

const testimonials = [
  { text: 'E-Construct delivered an architectural design that was both stunning and deeply practical. The approval process was handled seamlessly — we barely had to lift a finger.', role: 'Developer, Bangalore' },
  { text: 'The 3D visualisations were so accurate that the finished building looked exactly like the renders. Exceptional attention to detail at every stage.', role: 'Homeowner, Hyderabad' },
  { text: 'From concept to construction documents, the team was thorough, responsive and creative. Our commercial project came in on time and on budget.', role: 'Business Owner, Chennai' },
];

const ArchitecturalConsultancy = () => {
  const [lightbox, setLightbox]         = useState(null);
  const [lightboxSet, setLightboxSet]   = useState('portfolio'); // 'portfolio' | 'drawings'
  const [activeTestimonial, setActiveT] = useState(0);
  const navigate = useNavigate();

  const activeImages = lightboxSet === 'portfolio' ? portfolioImages : drawingImages;

  const openLightbox = (set, idx) => { setLightboxSet(set); setLightbox(idx); };

  const nextT = () => setActiveT(p => (p + 1) % testimonials.length);
  const prevT = () => setActiveT(p => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <section className="relative w-full h-[55vh] md:h-[75vh] flex items-end overflow-hidden bg-black mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Architectural Consultancy" className="w-full h-full object-cover opacity-50" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-[5%] pb-12 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-xs">Our Services</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-4 leading-[1.05]">
            Architectural<br /><span className="accent-text italic">Consultancy</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-sm md:text-lg max-w-xl leading-relaxed mb-6">
            Concept to execution drawings — architecture that is purposeful, buildable and enduring.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => navigate('/contact')}
              className="px-6 py-3 md:px-8 md:py-4 bg-[#fbc02d] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={16} />
            </button>
            <a 
              href="https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQAmFV9pR-ZR65T0tBJkYn9AaYbYw0QdCxSkxwRTll14o4?e=oFL4Qv"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQAmFV9pR-ZR65T0tBJkYn9AaYbYw0QdCxSkxwRTll14o4?e=oFL4Qv', '_blank', 'noopener,noreferrer');
              }}
              className="px-6 py-3 md:px-8 md:py-4 bg-white/10 border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all flex items-center justify-center gap-2 cursor-pointer relative z-10"
            >
              Download Hospitality Project PDF <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#fbc02d] py-4">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%] grid grid-cols-2 md:flex md:flex-wrap md:justify-between gap-4 text-black">
          {[['650+', 'Projects Delivered'], ['25+', 'Years Experience'], ['500+', 'Happy Clients'], ['100%', 'Approval Success']].map(([v, l]) => (
            <div key={l} className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-black">{v}</span>
              <span className="text-xs font-bold uppercase tracking-wide opacity-70">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
            <div>
              <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">What We Offer</span>
              <SectionHeading title="Our Services" center={false} />
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Full-spectrum architectural services from the first sketch to the final inspection.
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

      {/* ── Portfolio bento grid ── */}
      <section id="arch-portfolio" className="py-16 md:py-24 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
            <div>
              <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Our Work</span>
              <SectionHeading title="Project Portfolio" light center={false} />
            </div>
            <p className="text-gray-400 max-w-xs text-sm">Residential, commercial and institutional projects across India.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[240px]">
            {/* Large featured */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="col-span-1 row-span-2 relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openLightbox('portfolio', 0)}>
              <img src={portfolioImages[0]} alt="Architectural project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-xs font-bold uppercase tracking-widest">View</span>
              </div>
            </motion.div>

            {[1, 2, 3, 4, 5].map(idx => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => openLightbox('portfolio', idx)}>
                <img src={portfolioImages[idx]} alt={`Project ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Drawings section ── */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-[5%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
            <div>
              <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Technical Work</span>
              <SectionHeading title="Drawings & Documentation" light center={false} />
            </div>
            <p className="text-gray-400 max-w-xs text-sm">Precision construction documents produced to international standards.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px]">
            {/* Wide tile */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="col-span-2 relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => openLightbox('drawings', 0)}>
              <img src={drawingImages[0]} alt="Architectural drawing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </motion.div>

            {[1, 2, 3, 4].map(idx => (
              <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => openLightbox('drawings', idx)}>
                <img src={drawingImages[idx]} alt={`Drawing ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
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
              onClick={e => { e.stopPropagation(); setLightbox(p => (p - 1 + activeImages.length) % activeImages.length); }}>
              <ChevronLeft size={22} />
            </button>
            <motion.img key={`${lightboxSet}-${lightbox}`} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              src={activeImages[lightbox]} alt="" className="max-w-5xl max-h-[85vh] w-full object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()} />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#fbc02d] text-white rounded-full flex items-center justify-center transition-colors z-10"
              onClick={e => { e.stopPropagation(); setLightbox(p => (p + 1) % activeImages.length); }}>
              <ChevronRight size={22} />
            </button>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {activeImages.map((_, i) => (
                <button key={i} onClick={e => { e.stopPropagation(); setLightbox(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? 'bg-[#fbc02d] w-5' : 'bg-white/30'}`} />
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
                className="relative bg-slate-50 rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300">
                <span className="text-6xl md:text-7xl font-black text-[#fbc02d]/10 absolute -top-3 -left-2 select-none">{s.step}</span>
                <div className="w-9 h-9 bg-[#fbc02d] text-black text-xs font-black rounded-full flex items-center justify-center mb-5 relative z-10">{s.step}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2 relative z-10">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes + collage ── */}
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
          {/* 2-col image collage */}
          <div className="grid grid-cols-2 gap-3 h-[280px] sm:h-[360px] md:h-[480px]">
            <div className="rounded-2xl overflow-hidden row-span-2">
              <img src={arch3} alt="Architectural project" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={arch5} alt="Architectural project" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={arch6} alt="Architectural project" className="w-full h-full object-cover" loading="lazy" />
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
                <p className="text-base md:text-xl font-serif italic text-gray-700 leading-relaxed mb-8">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">Have a project in mind?</h2>
            <p className="text-black/60 mt-2 font-medium text-sm md:text-base">Let's talk — from a quick sketch to a full set of drawings.</p>
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

export default ArchitecturalConsultancy;
