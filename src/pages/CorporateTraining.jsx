import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap, Users, Award, CheckCircle2, ArrowRight,
  ChevronLeft, ChevronRight, Quote, Phone,
  Monitor, BookOpen, Globe, Clock, Star, Briefcase, Maximize2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import heroImg from '../assets/CorporateON-JOBTraining.webp';

// All real training session photos (from /training/ folder + MSB sessions)
const galleryImages = [
  '/training/1.jpeg', '/training/2.jpeg', '/training/3.jpeg', '/training/4.jpeg', '/training/5.jpeg',
  '/training/7.jpeg', '/training/8.jpeg', '/training/9.jpeg', '/training/10.jpeg', '/training/11.jpeg',
  '/training/12.jpeg', '/training/13.jpeg', '/training/14.jpeg', '/training/15.jpeg', '/training/16.jpeg',
  '/training/17.jpeg', '/training/18.jpeg', '/training/19.jpeg', '/training/20.jpeg', '/training/21.jpeg',
  '/training/22.jpeg', '/training/23.jpeg', '/training/24.jpeg', '/training/25.jpeg', '/training/26.jpeg',
  '/training/27.jpeg', '/training/28.jpeg', '/training/29.jpeg', '/training/30.jpeg', '/training/31.jpeg',
  '/training/32.jpeg', '/training/33.jpeg', '/training/34.jpg', '/training/35.jpg', '/training/36.jpg',
  '/training/37.jpg', '/training/38.jpg', '/training/39.jpg', '/training/40.jpg', '/training/41.jpeg',
  '/training/42.jpeg', '/training/43.jpeg', '/training/44.jpeg', '/training/45.jpeg', '/training/46.jpeg',
  '/training/47.jpeg', '/training/48.jpeg', '/training/49.jpeg', '/training/50.jpeg', '/training/51.jpeg',
  '/training/52.jpeg', '/training/53.jpeg', '/training/54.jpeg', '/training/55.jpeg', '/training/56.jpeg',
  '/training/57.jpeg', '/training/58.jpeg', '/training/59.jpeg', '/training/60.jpeg', '/training/61.jpeg',
  '/training/62.jpeg', '/training/63.jpeg', '/training/64.jpeg', '/training/65.jpeg', '/training/67.jpeg',
  '/training/68.jpeg', '/training/69.jpeg', '/training/70.jpeg',
  '/msb/sr1.webp', '/msb/sr2.webp', '/msb/sr6.webp', '/msb/sr7.webp', '/msb/sr8.webp', '/msb/s2.webp', '/msb/career_discussion.png'
];

const programs = [
  {
    icon: Monitor,
    title: 'Master Study in Structural Engineering',
    desc: 'Hands-on structural analysis and design using ETABS, SAFE and Revit Structure — from RC frames to PT slabs.',
    tag: 'Most Popular',
  },
  {
    icon: Globe,
    title: 'Master Study in Project Management with BIM',
    desc: 'End-to-end BIM project management — BEP, CDE, ISO 19650, 4D/5D simulation and Primavera P6.',
    tag: 'In Demand',
  },
  {
    icon: Briefcase,
    title: 'Composite: Structure + BIM + PM',
    desc: 'A combined program covering structural engineering, BIM technology and project management in one curriculum.',
    tag: 'Comprehensive',
  },
  {
    icon: BookOpen,
    title: 'Master Study in Interior Design with PM',
    desc: 'Space planning, material selection, AutoCAD, SketchUp and project management for interior professionals.',
    tag: 'Creative Track',
  },
  {
    icon: GraduationCap,
    title: 'Masters in Project Management & Contracts',
    desc: 'Contract administration, FIDIC, claims management and construction law for senior professionals.',
    tag: 'Senior Level',
  },
  {
    icon: Award,
    title: 'Master Study in Engineering Drawing & Drafting',
    desc: 'Production-grade 2D/3D drafting using AutoCAD and Civil 3D for roads, grading and site development.',
    tag: 'Foundation',
  },
];

const outcomes = [
  'Industry-ready skills applicable from day one on site',
  'Certified engineers recognised across global AEC markets',
  'Experience letter + 100% job placement support',
  'Faster project delivery through digital workflows',
  'Compliance with ISO 19650 & BIM Level 2 standards',
  '6 months post-training mentorship and support',
];

const stats = [
  { value: '1000+', label: 'Students Trained' },
  { value: '25+',   label: 'Years Experience' },
  { value: '200+',  label: 'Partner Consultancies' },
  { value: '100%',  label: 'Placement Support' },
];

const process = [
  { title: 'Apply & Get Selected', desc: 'Only 50 students selected per batch — apply early to secure your spot in this exclusive program.' },
  { title: 'Custom Curriculum', desc: 'A bespoke training plan designed around your chosen track, software stack and career goals.' },
  { title: 'On-Job Training', desc: 'Work on live projects at our office — real tools, real workflows, real deliverables.' },
  { title: 'Certification & Placement', desc: 'Receive your certificate, experience letter and dedicated placement support.' },
];

const testimonials = [
  { text: 'The on-job training at E-Construct transformed my career. Within weeks I was producing BIM models that impressed every employer I interviewed with.', role: 'Structural Engineer, Bangalore' },
  { text: 'Practical, structured and immediately applicable. The Revit and ETABS modules were exactly what I needed to land my first job.', role: 'Graduate Engineer, Mumbai' },
  { text: 'E-Construct\'s trainers bring real project experience into every session. I now lead BIM implementation across all our company\'s projects.', role: 'BIM Manager, Construction Company' },
];

const CorporateTraining = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const navigate = useNavigate();

  const nextT = () => setActiveTestimonial(p => (p + 1) % testimonials.length);
  const prevT = () => setActiveTestimonial(p => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (lightbox !== null) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    const handler = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => (p + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setLightbox((p) => (p - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', handler);
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [lightbox]);

  const track1 = galleryImages.slice(0, Math.ceil(galleryImages.length / 2));
  const track2 = galleryImages.slice(Math.ceil(galleryImages.length / 2));

  return (
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <section className="relative w-full h-[65vh] md:h-[75vh] flex items-end overflow-hidden bg-black mt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Corporate On-Job Training" className="w-full h-full object-cover opacity-50" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5%] pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-xs">Training Programs</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-5 leading-[1.05]">
            Corporate<br /><span className="accent-text italic">On-Job Training</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-xl leading-relaxed mb-8">
            World-class engineering training programs designed to produce certified professionals who can work across the globe.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
            <button onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#fbc02d] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center gap-2">
              Apply Now <ArrowRight size={16} />
            </button>
            <a 
              href="https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQD2kcK5CKwmTb6-5IkyT7a3AQFGXzrGKRuHWUm1sv_QxB8?e=DGwmPE" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                window.open('https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQD2kcK5CKwmTb6-5IkyT7a3AQFGXzrGKRuHWUm1sv_QxB8?e=DGwmPE', '_blank', 'noopener,noreferrer');
              }}
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all flex items-center gap-2 cursor-pointer relative z-10"
            >
              Download Corporate Training Portfolio PDF <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#fbc02d] py-5">
        <div className="max-w-[1400px] mx-auto px-[5%] flex flex-wrap justify-center md:justify-between gap-6 text-black">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-2xl font-black">{value}</span>
              <span className="text-sm font-bold uppercase tracking-wide opacity-70">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Programs ── */}
      <section id="ct-programs" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">What We Teach</span>
              <SectionHeading title="Training Programs" center={false} />
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Each program is built around live projects — not just theory — so you can apply skills from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#fbc02d]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-[#fbc02d]/10 rounded-xl flex items-center justify-center group-hover:bg-[#fbc02d]/20 transition-colors">
                      <Icon size={22} className="text-[#fbc02d]" />
                    </div>
                    <span className="text-[0.6rem] font-black uppercase tracking-widest text-[#fbc02d] bg-[#fbc02d]/10 px-2.5 py-1 rounded-full">{p.tag}</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-2 group-hover:text-[#fbc02d] transition-colors leading-snug flex-1">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mt-2">{p.desc}</p>
                  <button onClick={() => navigate('/contact')}
                    className="mt-5 self-start flex items-center gap-1.5 text-[#fbc02d] font-black uppercase tracking-widest text-[0.65rem] hover:text-slate-900 transition-colors">
                    Enquire <ArrowRight size={12} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery Section — Continuous Marquee Stream ── */}
      <section className="py-16 bg-slate-950 text-white border-t border-b border-slate-900 overflow-hidden relative">
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
                Inside Our Live Sessions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Training <span className="accent-text italic text-yellow-500 font-serif">in Action</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>75 Live Session Moments · Hover to Pause · Click to Expand</span>
            </div>
          </div>
        </div>

        {/* Marquee Row 1 (Right to Left) */}
        <div className="mb-4 flex overflow-hidden select-none">
          <div className="flex gap-3 animate-marquee-left shrink-0">
            {[...track1, ...track1].map((imgUrl, idx) => {
              const globalIndex = galleryImages.indexOf(imgUrl);
              return (
                <div
                  key={`t1-${idx}`}
                  onClick={() => setLightbox(globalIndex >= 0 ? globalIndex : idx)}
                  className="group relative w-48 sm:w-64 h-32 sm:h-40 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-md hover:border-yellow-500/80 hover:scale-[1.03] transition-all duration-300"
                >
                  <img
                    src={imgUrl}
                    alt={`Training session ${idx + 1}`}
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
            {[...track2, ...track2].map((imgUrl, idx) => {
              const globalIndex = galleryImages.indexOf(imgUrl);
              return (
                <div
                  key={`t2-${idx}`}
                  onClick={() => setLightbox(globalIndex >= 0 ? globalIndex : idx)}
                  className="group relative w-48 sm:w-64 h-32 sm:h-40 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-md hover:border-yellow-500/80 hover:scale-[1.03] transition-all duration-300"
                >
                  <img
                    src={imgUrl}
                    alt={`Training session ${idx + 1}`}
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

      {/* ── Solid 100% Opaque High-Contrast Lightbox Popup ── */}
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
                  PHOTO {lightbox + 1} OF {galleryImages.length}
                </span>
                <span className="text-gray-300 text-xs font-semibold hidden sm:inline">
                  Use Arrow Keys ← → to navigate
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
                  setLightbox((p) => (p - 1 + galleryImages.length) % galleryImages.length);
                }}
                title="Previous (←)"
              >
                <ChevronLeft size={26} />
              </button>

              <motion.img
                key={lightbox}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 28, stiffness: 350 }}
                src={galleryImages[lightbox]}
                alt={`Training Session ${lightbox + 1}`}
                className="max-w-[88vw] max-h-[68vh] md:max-h-[72vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                className="absolute right-2 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 hover:bg-yellow-400 hover:text-slate-950 text-white rounded-full flex items-center justify-center transition-all border border-slate-700 z-30 shadow-2xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((p) => (p + 1) % galleryImages.length);
                }}
                title="Next (→)"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            {/* Bottom Thumbnail Strip — 100% Solid & Hidden Scrollbar */}
            <div
              className="w-full max-w-3xl mx-auto flex items-center gap-2 overflow-x-auto py-2.5 px-3.5 bg-slate-900 rounded-2xl border border-slate-800 shrink-0 cursor-default shadow-2xl z-30 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.map((img, i) => (
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
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">How It Works</span>
            <SectionHeading title="Our Training Process" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="relative bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-yellow-200 transition-all duration-300">
                <span className="absolute -top-4 -left-3 text-6xl font-black text-[#fbc02d]/12 select-none">{idx + 1}</span>
                <div className="w-8 h-8 bg-[#fbc02d] text-black text-sm font-black rounded-full flex items-center justify-center mb-5 relative z-10">{idx + 1}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2 relative z-10">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes + Program Details ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-[5%] grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#fbc02d] text-xs font-bold tracking-[0.2em] uppercase">What You Gain</span>
            <SectionHeading title="Training Outcomes" light center={false} />
            <div className="space-y-4 mb-10">
              {outcomes.map((o, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-[#fbc02d] mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{o}</span>
                </motion.div>
              ))}
            </div>
            {/* Photo strip */}
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.slice(7, 10).map((src, i) => (
                <div key={i} className="aspect-video rounded-xl overflow-hidden cursor-pointer" onClick={() => setLightbox(7 + i)}>
                  <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            <span className="text-[#fbc02d] text-xs font-bold tracking-[0.2em] uppercase block mb-5">Program Details</span>
            <h3 className="text-2xl font-bold text-white mb-6">At a Glance</h3>
            <div className="space-y-4 mb-8">
              {[
                ['Duration', '2 weeks – 3 months (customisable)'],
                ['Format', 'On-site at our Bangalore office'],
                ['Batch Size', 'Max 50 students per batch'],
                ['Certification', 'E-Construct recognised certificate'],
                ['Support', 'Experience letter + placement support'],
                ['Language', 'English / Hindi / Kannada'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-white/10 pb-3 text-sm">
                  <span className="font-bold text-white uppercase tracking-wide text-xs">{label}</span>
                  <span className="text-gray-400 text-right max-w-[55%]">{value}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/contact')}
              className="w-full py-4 bg-[#fbc02d] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
              Apply Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-[5%] flex flex-col items-center">
          <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">Student Feedback</span>
          <SectionHeading title="What Our Students Say" />
          <div className="w-full max-w-3xl bg-slate-50 p-10 md:p-14 rounded-3xl relative border border-gray-100">
            <div className="absolute top-8 right-8 text-gray-200"><Quote size={64} /></div>
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
              <button onClick={prevT} className="w-10 h-10 bg-white text-slate-900 shadow rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors border border-gray-200"><ChevronLeft size={18} /></button>
              <button onClick={nextT} className="w-10 h-10 bg-slate-900 text-white shadow rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 bg-[#fbc02d]">
        <div className="max-w-[1400px] mx-auto px-[5%] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">Ready to transform your career?</h2>
            <p className="text-black/60 mt-2 font-medium">Only 50 seats per batch — apply before they fill up.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-black text-white font-black uppercase tracking-wider text-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
              Apply Now <ArrowRight size={16} />
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

export default CorporateTraining;
