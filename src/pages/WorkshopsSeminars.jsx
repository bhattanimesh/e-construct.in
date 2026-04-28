import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Users, Calendar, MapPin, ArrowRight, CheckCircle2,
  ChevronLeft, ChevronRight, Quote, Phone, Star, Mic,
  Lightbulb, Globe, Award, Clock, Play,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import heroSession from '../assets/CorporateON-JOBTraining.webp';

// All real session photos from the website
const sessionPhotos = [
  '/msb/sr1.webp',
  '/msb/sr2.webp',
  '/msb/sr3.webp',
  '/msb/sr4.webp',
  '/msb/sr5.webp',
  '/msb/sr6.webp',
  '/msb/sr7.webp',
  '/msb/sr8.webp',
  '/msb/s2.webp',
  '/msb/career_discussion.png',
];

const upcomingWorkshops = [
  {
    title: 'ETABS Basic Workshop',
    date: '1st, 2nd, 3rd June',
    format: 'On-site · Bangalore',
    duration: '3 Days · 10AM–6PM',
    fees: '₹50,000 (incl. GST)',
    desc: 'Hands-on ETABS training covering structural modelling, analysis and design of RC buildings from scratch.',
    tag: 'POPULAR',
    color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  },
  {
    title: 'ETABS Advanced Workshop',
    date: '24th, 25th, 26th June',
    format: 'On-site · Bangalore',
    duration: '3 Days · 10AM–6PM',
    fees: '₹50,000 (incl. GST)',
    desc: 'Advanced ETABS — seismic analysis, post-tensioned slabs, composite structures and performance-based design.',
    tag: 'ADVANCED',
    color: 'bg-purple-100 text-purple-700 border-purple-200',
  },
  {
    title: 'SAFE Workshop',
    date: '30th–31st July',
    format: 'On-site · Bangalore',
    duration: '2 Days · 10AM–6PM',
    fees: '₹50,000 (incl. GST)',
    desc: 'Comprehensive SAFE training for slab and foundation design — flat slabs, mat foundations and PT design.',
    tag: 'PROFESSIONAL',
    color: 'bg-blue-100 text-blue-700 border-blue-200',
  },
  {
    title: 'Performance-Based Design (PBD) Webinar',
    date: 'Upcoming — Register Now',
    format: 'Online · Zoom',
    duration: '2 hours',
    fees: 'FREE',
    desc: 'A free live webinar covering the fundamentals of Performance-Based Design for structural engineers and architects.',
    tag: 'FREE',
    color: 'bg-green-100 text-green-700 border-green-200',
  },
];

const topics = [
  { icon: Lightbulb, title: 'BIM Fundamentals', desc: 'Introduction to BIM concepts, dimensions and industry applications.' },
  { icon: Globe,     title: 'Digital Construction', desc: 'How digital tools are reshaping construction delivery — from design to handover.' },
  { icon: Award,     title: 'Structural Engineering', desc: 'Latest advances in structural analysis, PT slabs, composite structures and seismic design.' },
  { icon: Mic,       title: 'Career Development', desc: 'Insights on career growth, certifications and job opportunities in the AEC domain.' },
  { icon: BookOpen,  title: 'Sustainability', desc: 'Green building practices, LEED/GRIHA frameworks and energy-efficient design strategies.' },
  { icon: Users,     title: 'Project Management', desc: 'Practical sessions on scheduling, cost control and risk management.' },
];

const benefits = [
  'Learn from practitioners with 25+ years of industry experience',
  'Network with engineers, architects and construction professionals',
  'Receive certificates of participation recognised by the industry',
  'Access to recorded sessions and resource materials post-event',
  'Practical exercises and real project case studies',
  'Live Q&A sessions with expert speakers',
];

const testimonials = [
  { text: 'The PBD webinar was eye-opening. The concepts were explained with real project examples I could immediately apply to my work.', role: 'Structural Engineer, Bangalore' },
  { text: 'Best BIM workshop I\'ve attended. The hands-on exercises made the learning stick. Highly recommend to any AEC professional.', role: 'Architect, Mumbai' },
  { text: 'E-Construct\'s seminars are always packed with practical insights. I\'ve attended three and each one has added real value to my career.', role: 'Civil Engineer, Hyderabad' },
];

const WorkshopsSeminars = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lightbox, setLightbox] = useState(null); // index of open image
  const navigate = useNavigate();

  const nextT = () => setActiveTestimonial(p => (p + 1) % testimonials.length);
  const prevT = () => setActiveTestimonial(p => (p - 1 + testimonials.length) % testimonials.length);

  // Keyboard close for lightbox
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <section className="relative w-full h-[65vh] md:h-[75vh] flex items-end overflow-hidden bg-black mt-20">
        <div className="absolute inset-0">
          <img src={sessionPhotos[0]} alt="Workshop session" className="w-full h-full object-cover opacity-50" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5%] pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-xs">Knowledge Events</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-5 leading-[1.05]">
            Workshops &<br /><span className="accent-text italic">Seminars</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg max-w-xl leading-relaxed mb-8">
            Hands-on learning sessions and expert-led seminars to sharpen your skills in the AEC industry.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
            <button onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#fbc02d] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center gap-2">
              Register Now <ArrowRight size={16} />
            </button>
            <button onClick={() => document.getElementById('workshops-events')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors">
              View Events
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-[#fbc02d] py-5">
        <div className="max-w-[1400px] mx-auto px-[5%] flex flex-wrap justify-center md:justify-between gap-6 text-black">
          {[['1000+', 'Students Trained'], ['25+', 'Years Experience'], ['50', 'Seats Per Batch'], ['100%', 'Placement Support']].map(([v, l]) => (
            <div key={l} className="flex items-center gap-3">
              <span className="text-2xl font-black">{v}</span>
              <span className="text-sm font-bold uppercase tracking-wide opacity-70">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section id="workshops-events" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">What's On</span>
              <SectionHeading title="Upcoming Events" center={false} />
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Join our community of construction enthusiasts and learn from industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingWorkshops.map((w, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group flex flex-col md:flex-row bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-[#fbc02d]/30 transition-all duration-300">
                {/* Left accent bar */}
                <div className="w-full md:w-1.5 h-1.5 md:h-auto bg-[#fbc02d] shrink-0" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-[0.6rem] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${w.color}`}>{w.tag}</span>
                    <span className="text-lg font-black text-[#fbc02d]">{w.fees}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#fbc02d] transition-colors leading-snug">{w.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{w.desc}</p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-400 font-medium mb-5">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#fbc02d]" /> {w.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-[#fbc02d]" /> {w.duration}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#fbc02d]" /> {w.format}</span>
                  </div>
                  <button onClick={() => navigate('/contact')}
                    className="self-start flex items-center gap-2 text-[#fbc02d] font-black uppercase tracking-widest text-[0.65rem] hover:text-slate-900 transition-colors">
                    Register Now <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery — bento grid ── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">From Our Events</span>
              <SectionHeading title="Workshop Highlights" light center={false} />
            </div>
            <p className="text-gray-400 max-w-xs text-sm">Real moments from our training sessions and seminars.</p>
          </div>

          {/* Bento grid — 5 cols × 2 rows */}
          <div className="grid grid-cols-2 md:grid-cols-5 grid-rows-2 gap-3 auto-rows-[220px]">
            {/* Large featured — col-span 2, row-span 2 */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setLightbox(0)}>
              <img src={sessionPhotos[0]} alt="Workshop session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <span className="text-white text-xs font-bold uppercase tracking-widest">View Photo</span>
              </div>
            </motion.div>

            {/* 3 medium tiles — col-span 1 each, row 1 */}
            {[1, 2, 3].map((idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => setLightbox(idx)}>
                <img src={sessionPhotos[idx]} alt={`Session ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}

            {/* 3 more tiles — row 2 */}
            {[4, 5, 6].map((idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => setLightbox(idx)}>
                <img src={sessionPhotos[idx]} alt={`Session ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                {/* Last tile — show +more overlay */}
                {idx === 6 && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-2 cursor-pointer"
                    onClick={(e) => { e.stopPropagation(); setLightbox(7); }}>
                    <span className="text-white text-3xl font-black">+{sessionPhotos.length - 7}</span>
                    <span className="text-gray-300 text-xs font-bold uppercase tracking-widest">More Photos</span>
                  </div>
                )}
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
            <button className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl font-light" onClick={() => setLightbox(null)}>✕</button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#fbc02d] text-white rounded-full flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightbox(p => (p - 1 + sessionPhotos.length) % sessionPhotos.length); }}>
              <ChevronLeft size={22} />
            </button>
            <motion.img key={lightbox} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              src={sessionPhotos[lightbox]} alt="" className="max-w-5xl max-h-[85vh] w-full object-contain rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()} />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-[#fbc02d] text-white rounded-full flex items-center justify-center transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); setLightbox(p => (p + 1) % sessionPhotos.length); }}>
              <ChevronRight size={22} />
            </button>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {sessionPhotos.map((_, i) => (
                <button key={i} onClick={e => { e.stopPropagation(); setLightbox(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? 'bg-[#fbc02d] w-5' : 'bg-white/30'}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Topics ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Areas of Focus</span>
            <SectionHeading title="Topics We Cover" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-[#fbc02d]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group flex gap-5 items-start">
                  <div className="w-11 h-11 bg-[#fbc02d]/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#fbc02d]/20 transition-colors mt-0.5">
                    <Icon size={20} className="text-[#fbc02d]" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-slate-900 mb-1.5 group-hover:text-[#fbc02d] transition-colors">{t.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Benefits + Private Event ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-[5%] grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[#fbc02d] text-xs font-bold tracking-[0.2em] uppercase">Why Attend</span>
            <SectionHeading title="What You Get" light center={false} />
            <div className="space-y-4 mb-10">
              {benefits.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-[#fbc02d] mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{b}</span>
                </motion.div>
              ))}
            </div>
            {/* Photo strip */}
            <div className="grid grid-cols-3 gap-2">
              {sessionPhotos.slice(7, 10).map((src, i) => (
                <div key={i} className="aspect-video rounded-xl overflow-hidden">
                  <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
            <span className="text-[#fbc02d] text-xs font-bold tracking-[0.2em] uppercase block mb-5">Host a Private Event</span>
            <h3 className="text-2xl font-bold text-white mb-3">Want a workshop for your organisation?</h3>
            <p className="text-gray-400 text-sm mb-7 leading-relaxed">
              We organise private workshops and seminars tailored to your team's needs — at your premises or online. Ideal for companies, universities and professional associations.
            </p>
            <div className="space-y-3 mb-7">
              {[
                ['Audience', 'Engineers, Architects, Students'],
                ['Min. Group Size', '10 participants'],
                ['Duration', 'Half-day to 2 days'],
                ['Certificate', 'Provided to all participants'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-white/10 pb-3 text-sm">
                  <span className="font-bold text-white uppercase tracking-wide text-xs">{label}</span>
                  <span className="text-gray-400 text-right">{value}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/contact')}
              className="w-full py-4 bg-[#fbc02d] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
              Enquire Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-[5%] flex flex-col items-center">
          <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">Attendee Feedback</span>
          <SectionHeading title="What Attendees Say" />
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
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">Don't miss the next event.</h2>
            <p className="text-black/60 mt-2 font-medium">Register your interest and we'll keep you updated.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <button onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-black text-white font-black uppercase tracking-wider text-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
              Register Interest <ArrowRight size={16} />
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

export default WorkshopsSeminars;
