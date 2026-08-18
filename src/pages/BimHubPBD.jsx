import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Clock, Calendar, Monitor, BookOpen, Award, Briefcase,
  Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight,
  CheckCircle, ChevronDown, ArrowRight, Phone, MapPin,
  Play, TrendingUp, Building2, Zap, GraduationCap, Globe,
  Star, Quote, CheckCircle2, FileText
} from 'lucide-react';
import SiteVisitsScroller from '../components/SiteVisitsScroller';

function Counter({ to, suffix = '' }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const target = parseInt(String(to).replace(/,/g, ''), 10);
    let v = 0; const step = target / (1600 / 16);
    const t = setInterval(() => {
      v += step;
      if (v >= target) { setN(target); clearInterval(t); }
      else setN(Math.floor(v));
    }, 16);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{n >= 1000 ? n.toLocaleString() : n}{suffix}</span>;
}

const Label = ({ children }) => (
  <div className="flex items-center gap-2 mb-3">
    <div className="w-8 h-0.5 bg-yellow-500" />
    <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs">{children}</span>
  </div>
);

const Btn = ({ href, children, dark = false }) => (
  <a href={href}
    className={`group relative inline-block px-7 py-3.5 overflow-hidden transition-all active:scale-95 text-center text-sm font-black uppercase tracking-wider ${dark ? 'bg-slate-900 text-white' : 'bg-yellow-500 text-black'}`}>
    <span className="relative z-10">{children}</span>
    <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${dark ? 'bg-yellow-500' : 'bg-black'}`} />
    <span className={`absolute inset-0 z-10 flex items-center justify-center text-sm font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${dark ? 'text-black' : 'text-white'}`}>{children}</span>
  </a>
);

const BimHubPBD = () => {
  const sliderImages = [
    'https://e-construct.in/wp-content/uploads/2026/02/event6_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event5_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event4_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event-3_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event2_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event1_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2025/02/gallery7.jpg',
    'https://e-construct.in/wp-content/uploads/2022/02/X-CM-2-1.jpg',
  ];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % sliderImages.length), 4200);
    return () => clearInterval(t);
  }, [sliderImages.length]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => setCurrentSlide(p => (p === 0 ? sliderImages.length - 1 : p - 1));
  const nextSlide = () => setCurrentSlide(p => (p === sliderImages.length - 1 ? 0 : p + 1));

  const competitionVideos = [
    { title: 'PBD Masterclass Overview', src: 'https://www.youtube.com/embed/4V-mT1ISo90?si=8jFBhtkVt_QD23TB', dur: '12:04' },
    { title: 'Non-Linear Dynamic Analysis Case Study', src: 'https://www.youtube.com/embed/1jePd-E4ZEc?si=W545dJrmLDm5NdyU', dur: '08:15' },
    { title: 'Seismic Performance Levels & Acceptance', src: 'https://www.youtube.com/embed/QA8dxpyk8iI?si=aTsCZCz_Jb-ilnnd', dur: '15:30' },
    { title: 'High-Rise Structural Modeling in ETABS', src: 'https://www.youtube.com/embed/oBZ_4zm7VeM?si=GD2fxp24f4ct17Ie', dur: '05:45' },
  ];
  const [activePlaylistItem, setActivePlaylistItem] = useState(0);
  const playlist = competitionVideos;
  const activeVid = activePlaylistItem;
  const setActiveVid = setActivePlaylistItem;

  const faqs = [
    { q: 'Is Performance Based Design (PBD) a full 12-month course or a Webinar?', a: 'PBD is an advanced Technical Webinar & Masterclass Topic conducted by Econstruct for structural engineering professionals, design consultants, and M.Tech scholars.' },
    { q: 'Who should attend this PBD Webinar Masterclass?', a: 'Civil Engineering Professionals, Structural Designers, M.Tech/B.Tech Engineers, Project Managers, and BIM Specialists seeking expertise in non-linear dynamic analysis and seismic design.' },
    { q: 'What topics are covered in the PBD Technical Webinar?', a: 'Key topics include Non-Linear Dynamic Analysis, Pushover Analysis, Target Displacement, Performance Levels (IO, LS, CP), ETABS & PERFORM-3D modeling, and ASCE 41 / LATBSDC code provisions.' },
    { q: 'Will participants receive a Certificate of Participation?', a: 'Yes! All registered participants will receive an official Econstruct Certificate of Participation.' },
    { q: 'Will webinar presentation slides and PDF resources be provided?', a: 'Yes, attendees receive digital access to the PBD reference presentation, spreadsheets, and webinar session resources.' },
    { q: 'How can I register for the upcoming PBD Live Masterclass?', a: 'You can register online by clicking the "Register Now" button or contacting our team via WhatsApp at +91 90367 44017 / +91 72599 21111.' },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  const keyTopics = [
    { title: 'Fundamentals of PBSD', desc: 'Understanding Performance-Based Seismic Design versus traditional prescriptive code provisions.' },
    { title: 'Non-Linear Static (Pushover) Analysis', desc: 'Evaluating plastic hinge formation, capacity curves, and structural inelastic displacement demands.' },
    { title: 'Non-Linear Dynamic Time History Analysis', desc: 'Simulating complex earthquake ground motions on high-rise RCC & Steel structures.' },
    { title: 'Performance Levels & Acceptance Criteria', desc: 'Defining Operational (OP), Immediate Occupancy (IO), Life Safety (LS), and Collapse Prevention (CP).' },
    { title: 'ETABS & PERFORM-3D Modeling', desc: 'Hands-on demonstration of non-linear structural modeling, hinge properties, and fiber sections.' },
    { title: 'International Codes & Case Studies', desc: 'Practical implementation of ASCE 41-17, TALL BUILDINGS INITIATIVE (PEER/TBI), and LATBSDC guidelines.' },
  ];

  const fin = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55 } };

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative w-full min-h-[100dvh] lg:h-[700px] overflow-hidden bg-black">
        <div className="absolute inset-0 scale-105">
          <img src="/prj8.jpg" alt="Performance Based Design Webinar" className="w-full h-full object-cover brightness-[0.4] saturate-[0.8]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent hidden md:block" />
        </div>
        <div className="relative z-10 h-[100dvh] lg:h-full w-full max-w-[1400px] px-5 sm:px-10 flex flex-col justify-end pb-16 lg:pb-20">
          <motion.div initial="i" animate="a" variants={{ a: { transition: { staggerChildren: 0.1 } } }} className="lg:max-w-4xl">
            <motion.div variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-3.5 bg-slate-900/95 backdrop-blur-md border border-yellow-500/50 p-2 sm:p-2.5 pr-4 sm:pr-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl p-1 flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                  <img 
                    src="/iit-bhubaneswar-crest.png" 
                    alt="IIT Bhubaneswar Official Logo" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="bg-yellow-500/20 text-yellow-400 text-[10px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded border border-yellow-500/30">
                      In Collaboration With
                    </span>
                  </div>
                  <div className="text-white font-black text-sm sm:text-base tracking-tight leading-tight mt-0.5">
                    IIT Bhubaneswar
                  </div>
                  <div className="text-gray-300 text-[11px] font-medium hidden sm:block">
                    Indian Institute of Technology Bhubaneswar
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-0.5 bg-yellow-500 hidden sm:block" />
                <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-bold">Technical Masterclass Series</span>
              </div>
            </motion.div>
            <motion.h1 variants={{ i: { opacity: 0, y: 40 }, a: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.6, 0.05, 0.01, 0.9] } } }}
              className="font-medium text-white tracking-tight leading-[0.95] mb-5"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}>
              Performance<br /><span className="accent-text italic">Based Design</span>
            </motion.h1>
            <motion.p variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              An advanced technical webinar masterclass on Non-Linear Dynamic Analysis, Seismic Performance Evaluation & High-Rise Structural Design.
            </motion.p>
            <motion.div variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-wrap gap-4">
              <Btn href="#register">Register For Webinar</Btn>
              <a href="#pdf-presentation" className="px-7 py-3.5 border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all inline-flex items-center gap-2">
                <FileText className="w-4 h-4 text-yellow-500" /> View PBD PDF Presentation
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 left-0 h-1 bg-yellow-500 z-20" />
      </section>

      {/* ── STATS / WEBINAR HIGHLIGHTS BAR ────────────────────── */}
      <section className="bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: 'Webinar Topic Focus', val: 'Non-Linear & Seismic PBD', icon: Building2 },
              { label: 'Masterclass Format', val: 'Live Interactive Session', icon: Monitor },
              { label: 'Expert Speaker', val: 'Mr. Sandeep Pingale', icon: Award },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4 py-8 px-6">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-500/20">
                  <s.icon className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest font-bold">{s.label}</div>
                  <div className="text-xl md:text-2xl font-bold text-yellow-500 mt-0.5">{s.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEBINAR OVERVIEW & VIDEO SHOWCASE ───────────────────── */}
      <section id="overview" className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <Label>Masterclass Topic</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
                PBD Webinar <span className="accent-text italic">Overview</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-md sm:text-right leading-relaxed">
              Performance Based Design evaluates how structural components deform under dynamic seismic loads beyond traditional linear elasticity.
            </p>
          </motion.div>
          <motion.div {...fin} className="relative w-full bg-black aspect-video overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] rounded-2xl border border-gray-200">
            <div className="absolute top-0 left-0 w-16 h-1 bg-yellow-500 z-10" />
            <iframe src="https://www.youtube.com/embed/YkimCw_Nu1M?si=TMB-qf3YXr24j9-r"
              className="absolute inset-0 w-full h-full" title="PBD Webinar Overview Video" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </motion.div>
        </div>
      </section>

      {/* ── WEBINAR TECHNICAL TOPICS BREAKDOWN ─────────────────── */}
      <section className="py-14 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-12 text-center">
            <Label>Webinar Agenda &amp; Curriculum</Label>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-black tracking-tight mt-2">
              Key Technical Topics <span className="accent-text italic">Covered</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyTopics.map((topic, i) => (
              <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.08}s` }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-black font-mono text-yellow-500/40 group-hover:text-yellow-500 transition-colors">0{i + 1}</span>
                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 font-bold">
                      <BookOpen size={20} />
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3 leading-snug">{topic.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{topic.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-yellow-600 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle size={14} /> Masterclass Module
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICIAL PBD PRESENTATION PDF SHOWCASE ─────────────── */}
      <section id="pdf-presentation" className="py-14 md:py-20 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <Label>Official Technical Document</Label>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-white tracking-tight">
                PBD Presentation <span className="accent-text italic">Reference Document</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base mt-2 max-w-xl">
                Browse through the comprehensive technical presentation slides for Performance Based Design.
              </p>
            </div>
            <a href="/pdfs/PBD_compressed.pdf" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 font-black px-6 py-3.5 rounded-xl hover:bg-yellow-400 transition-all uppercase tracking-wider text-xs shadow-lg shrink-0">
              <FileText size={16} /> View Presentation PDF
            </a>
          </motion.div>

          <motion.div {...fin} className="w-full bg-slate-800 rounded-3xl p-4 md:p-8 border border-white/10 shadow-2xl">
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-white/10">
              <iframe
                src="/pdfs/PBD_compressed.pdf"
                title="PBD Technical Presentation PDF"
                className="w-full h-full border-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SPEAKER / LEADERSHIP SECTION ───────────────────────── */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img src="https://e-construct.in/wp-content/uploads/2024/08/Media-e1768631671611.jpeg"
                  alt="Mr. Sandeep Pingale" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md rounded-b-3xl px-6 py-4 grid grid-cols-3 divide-x divide-white/20">
                {[['20+', 'Years Exp'], ['1000+', 'Projects'], ['Webinar', 'Speaker']].map(([v, l]) => (
                  <div key={l} className="text-center px-3">
                    <div className="text-lg font-bold text-yellow-500">{v}</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest">{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-7/12">
              <Label>Webinar Masterclass Mentor</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight mb-2">
                Meet Our <span className="accent-text italic">Chief Structural Consultant</span>
              </h2>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-yellow-500" />
                <span className="text-gray-700 font-bold text-lg">Mr. Sandeep Pingale</span>
              </div>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                With over two decades of expert structural design consultancy experience, Mr. Sandeep Pingale leads Econstruct's technical masterclasses. His session breaks down complex seismic dynamics, non-linear hinge behavior, and performance-based evaluation for modern engineering practices.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: GraduationCap, t: 'PBD Expert Mentor', d: '20+ years in structural design and dynamic analysis' },
                  { icon: TrendingUp, t: 'Real Project Insights', d: 'Case studies from G+60 story tall buildings' },
                  { icon: Globe, t: 'Global Codes', d: 'ASCE 41, TBI, LATBSDC & IS-1893 guidelines' },
                  { icon: Award, t: 'Industry Speaker', d: 'Keynote webinars for top engineering forums' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 border border-gray-100 rounded-xl hover:border-yellow-300 transition-colors duration-200 bg-gray-50">
                    <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center shrink-0 rounded-lg">
                      <item.icon className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-sm">{item.t}</p>
                      <p className="text-gray-500 text-xs leading-snug mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WEBINAR REGISTRATION & CERTIFICATION ────────────────── */}
      <section id="register" className="py-14 md:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-12">
            <Label>Participation</Label>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium text-black tracking-tight">
              Webinar Registration <span className="accent-text italic">&amp; Certificate</span>
            </h2>
            <p className="text-gray-500 text-base mt-2 max-w-xl mx-auto">
              Join the live technical session, interact with structural experts, and earn a Certificate of Participation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Registration Box */}
            <motion.div {...fin} className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-slate-900 font-bold">
                    <Monitor size={20} />
                  </div>
                  <div>
                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest block">Live Online Webinar</span>
                    <h3 className="text-2xl font-bold text-white">Register For PBD Masterclass</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    'Live 2-Hour Technical Presentation & Q&A Session',
                    'Comprehensive PBD Reference Slide Deck (PDF)',
                    'Certificate of Participation from Econstruct',
                    'Direct Interaction with Senior Structural Mentors'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" />
                      <span className="text-gray-200 font-medium text-sm md:text-base">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-gray-400 text-xs font-semibold block">Need Assistance? Contact Us:</span>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="text-yellow-400 font-mono text-sm font-bold">📞 +91 90367 44017</span>
                    <span className="text-yellow-400 font-mono text-sm font-bold">📞 +91 72599 21111</span>
                  </div>
                </div>
                <Btn href="https://wa.me/919036744017?text=Hi%20Econstruct,%20I%20want%20to%20register%20for%20the%20PBD%20Webinar">
                  Register Now
                </Btn>
              </div>
            </motion.div>

            {/* Certificate Box */}
            <motion.div {...fin} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-500/20 text-yellow-600 rounded-xl flex items-center justify-center font-bold">
                    <Award size={22} />
                  </div>
                  <div>
                    <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest block">Recognized Credential</span>
                    <h3 className="text-2xl font-bold text-gray-900">Certificate of Participation</h3>
                  </div>
                </div>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Upon attending the PBD Masterclass webinar session, participants receive an official digital <strong>Certificate of Participation</strong> issued by Econstruct Design &amp; Build Pvt. Ltd.
                </p>

                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl mb-6">
                  <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-2">
                    <Star size={16} className="fill-yellow-500 text-yellow-500" /> Certificate Benefits:
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm font-medium">
                    <li>• Enhances your structural engineering resume &amp; LinkedIn profile</li>
                    <li>• Validates technical knowledge in non-linear dynamic analysis</li>
                    <li>• Endorsed by Econstruct chief structural consultants</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Issued to all verified attendees</span>
                <span className="text-xs font-bold text-yellow-600 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/30">Official Econstruct Badge</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPETITION / WEBINAR PLAYLIST ─────────────────────── */}
      <section className="py-14 md:py-20 bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-8">
            <Label>Technical Playlist</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight">
              PBD &amp; Structural Analysis <span className="accent-text italic">Playlist</span>
            </h2>
            <p className="text-white/40 text-sm mt-2">Technical presentations and case studies by Econstruct Mentors</p>
          </motion.div>
          <motion.div {...fin} className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            <div className="lg:col-span-2 bg-slate-900 overflow-hidden aspect-video relative">
              <iframe src={playlist[activeVid].src} className="absolute inset-0 w-full h-full"
                title={playlist[activeVid].title} frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="bg-slate-800 flex flex-col max-h-[300px] lg:max-h-none overflow-y-auto">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 sticky top-0 bg-slate-800 z-10">
                <Video className="w-4 h-4 text-yellow-500" />
                <span className="font-bold text-white text-sm">Session Playlist</span>
                <span className="ml-auto text-white/30 text-xs">{activeVid + 1}/{playlist.length}</span>
              </div>
              {playlist.map((v, i) => (
                <button key={i} onClick={() => setActiveVid(i)}
                  className={`text-left px-5 py-4 flex items-start gap-3 border-b border-white/5 transition-colors duration-200 ${activeVid === i ? 'bg-yellow-500' : 'hover:bg-white/5'}`}>
                  <span className={`font-bold font-mono text-xs mt-0.5 shrink-0 ${activeVid === i ? 'text-black' : 'text-white/30'}`}>0{i + 1}</span>
                  <div>
                    <p className={`font-semibold text-sm line-clamp-2 ${activeVid === i ? 'text-black' : 'text-white'}`}>{v.title}</p>
                    <p className={`text-xs mt-0.5 ${activeVid === i ? 'text-black/60' : 'text-white/30'}`}>{v.dur}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Real Site Visits Scroller ── */}
      <SiteVisitsScroller
        badge="PERFORMANCE-BASED STRUCTURAL SITES"
        title="High-Rise Site Visits"
        highlight="in Action"
        subtitle="Exploring seismic detailing, shear wall systems & high-rise structural execution in the field"
      />

      {/* ── FAQ SECTION ─────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <motion.div {...fin} className="lg:w-2/5 shrink-0 lg:sticky lg:top-28 self-start">
              <Label>FAQ</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight mb-4">
                Frequently<br />Asked <span className="accent-text italic">Questions</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Common questions regarding the Performance Based Design Webinar &amp; Masterclass.</p>
              <Btn href="#register">Register For Webinar</Btn>
            </motion.div>
            <div className="flex-1 border-t border-gray-200">
              {faqs.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.04}s` }} className="border-b border-gray-200">
                    <button onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full py-5 text-left flex items-center justify-between gap-4 focus:outline-none group">
                      <span className={`font-semibold text-sm md:text-base transition-colors duration-200 ${open ? 'text-yellow-600' : 'text-black group-hover:text-yellow-600'}`}>{faq.q}</span>
                      <div className={`shrink-0 w-7 h-7 flex items-center justify-center transition-all duration-300 ${open ? 'bg-yellow-500 text-black rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-yellow-500 group-hover:text-black'}`}>
                        <ChevronDown size={16} />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-64 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{faq.a}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA SECTION ──────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/prj8.jpg" alt="PBD Masterclass Banner" className="w-full h-full object-cover brightness-[0.35] saturate-[0.6]" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-500" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-bold">Limited Webinar Seats</span>
              </div>
              <h2 className="font-medium text-white tracking-tight leading-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                Master Performance<br /><span className="accent-text italic">Based Design</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Elevate your structural engineering expertise with non-linear dynamic analysis insights from industry leaders.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex flex-col items-center lg:items-end gap-5 shrink-0">
              <Btn href="#register">Register For Webinar</Btn>
              <div className="flex gap-6">
                {['+91 90367 44017', '+91 72599 21111'].map(n => (
                  <a key={n} href={`https://wa.me/${n.replace(/\D/g,'')}`} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-white/40 text-xs font-semibold hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />{n}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BimHubPBD;
