import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Clock, Calendar, Monitor, BookOpen, Award, Briefcase,
  Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight,
  CheckCircle, ChevronDown, ArrowRight, Phone, MapPin,
  Play, TrendingUp, Building2, Zap, GraduationCap, Globe
} from 'lucide-react';

/* ── Animated counter ─────────────────────────────────────────────── */
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

/* ── Section label ────────────────────────────────────────────────── */
const Label = ({ children }) => (
  <div className="flex items-center gap-2 mb-3">
    <div className="w-8 h-0.5 bg-yellow-500" />
    <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs">{children}</span>
  </div>
);

/* ── Yellow CTA button ────────────────────────────────────────────── */
const Btn = ({ href, children, dark = false }) => (
  <a href={href}
    className={`group relative inline-block px-7 py-3.5 overflow-hidden transition-all active:scale-95 text-center text-sm font-black uppercase tracking-wider ${dark ? 'bg-slate-900 text-white' : 'bg-yellow-500 text-black'}`}>
    <span className="relative z-10">{children}</span>
    <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${dark ? 'bg-yellow-500' : 'bg-black'}`} />
    <span className={`absolute inset-0 z-10 flex items-center justify-center text-sm font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${dark ? 'text-black' : 'text-white'}`}>{children}</span>
  </a>
);

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════════ */
const BimHubMSB = () => {

  const sliderImages = [
    '/msb/sr8.webp','/msb/sr7.webp','/msb/sr6.webp','/msb/sr5.webp',
    '/msb/sr4.webp','/msb/sr3.webp','/msb/sr2.webp','/msb/sr1.webp','/msb/s2.webp',
  ];
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % sliderImages.length), 4200);
    return () => clearInterval(t);
  }, [sliderImages.length]);

  const reviewVideos = [
    'https://www.youtube.com/embed/1AehbURvS8k?si=X_CqYO8icVVjcnzQ',
    'https://www.youtube.com/embed/wEpeR0jE5Q0?si=UrhcqFSAU1Fnia0k',
    'https://www.youtube.com/embed/FY7LHMlyFj0?si=7Sw4lmhimBKD0z46',
    'https://www.youtube.com/embed/KdZkMiMLA5A?si=3avZv6ndP2bt0q27',
    'https://www.youtube.com/embed/EwosIIAxHQw?si=cUSoU7UjqC8KXlUS',
  ];
  const [vidSlide, setVidSlide] = useState(0);

  const playlist = [
    { title: 'Competition Overview', src: 'https://www.youtube.com/embed/4V-mT1ISo90?si=8jFBhtkVt_QD23TB', dur: '12:04' },
    { title: 'Team Presentations & Solutions', src: 'https://www.youtube.com/embed/1jePd-E4ZEc?si=W545dJrmLDm5NdyU', dur: '08:15' },
    { title: 'Structural Analysis Highlights', src: 'https://www.youtube.com/embed/QA8dxpyk8iI?si=aTsCZCz_Jb-ilnnd', dur: '15:30' },
    { title: 'Award Ceremony & Closing', src: 'https://www.youtube.com/embed/oBZ_4zm7VeM?si=GD2fxp24f4ct17Ie', dur: '05:45' },
  ];
  const [activeVid, setActiveVid] = useState(0);

  const faqs = [
    { q: 'What is the duration of the program?', a: 'The program runs 7 to 12 months — until you are successfully placed in the industry.' },
    { q: 'What is the On-Job Learning Program?', a: 'Hands-on experience from Center Line Plan (CLP) to Good for Construction (GFC), working on real RCC, STEEL, and Composite Structures in a corporate environment.' },
    { q: 'Will I receive a certification?', a: 'Yes — an industry-recognized certificate from Econstruct plus an official Experience Letter and portfolio assistance.' },
    { q: 'What software tools will I learn?', a: 'AutoCAD, REVIT Architecture, REVIT Structures, REVIT MEP, Synchro, Navisworks, Infraworks, Primavera, and 40+ Design Spreadsheets.' },
    { q: 'Is there placement assistance?', a: '100% placement guarantee. Our placement cell handles resume building, mock interviews, and direct corporate alignment via our CRM system.' },
    { q: 'Can I choose the mode of learning?', a: 'Yes — Offline (Bangalore HQ), Online (self-paced), or Hybrid.' },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  const modes = [
    { n: '01', title: 'Offline', icon: Building2, pts: ['Report to Bangalore HQ on batch start date.','Work Mon–Fri, 9 am to 7 pm.','Live sessions with technical mentors.','Real projects — team and individual.','Mock technical interviews.'] },
    { n: '02', title: 'Online — Working Professionals', icon: Monitor, pts: ['Self-paced with pre-recorded videos.','Dedicate 2–4 hours per day.','Flexible hours without leaving your job.','Doubt Clearing Sessions or 1-on-1 Zoom calls.','Minimum 12–15 projects throughout.'] },
    { n: '03', title: 'Online — Non-Working', icon: Globe, pts: ['100% online, replicating office environment.','Dashboard access to assignments and videos.','Stay connected via Zoom (9 am–7 pm, Mon–Fri).','Dedicated Doubt Clearing Sessions.','Online mock technical interview rounds.'] },
    { n: '04', title: 'Hybrid', icon: Zap, pts: ['Report to Bangalore HQ for 7–30 days at start.','Continue online with videos, live sessions, mocks.','Return to Bangalore for 7–30 days near end.','Work from home between offline sessions.'] },
  ];

  const fin = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55 } };

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[100dvh] lg:h-[700px] overflow-hidden bg-black">
        <div className="absolute inset-0 scale-105">
          <img src="/prj6.jpg" alt="" className="w-full h-full object-cover brightness-[0.45] saturate-[0.8]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent hidden md:block" />
        </div>
        <div className="relative z-10 h-[100dvh] lg:h-full w-full max-w-[1400px] px-5 sm:px-10 flex flex-col justify-end pb-16 lg:pb-20">
          <motion.div initial="i" animate="a" variants={{ a: { transition: { staggerChildren: 0.1 } } }} className="lg:max-w-4xl">
            <motion.div variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-yellow-500" />
              <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-bold">On-Job Learning · Batch Starts April 2026</span>
            </motion.div>
            <motion.h1 variants={{ i: { opacity: 0, y: 40 }, a: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.6, 0.05, 0.01, 0.9] } } }}
              className="font-medium text-white tracking-tight leading-[0.95] mb-5"
              style={{ fontSize: 'clamp(2.8rem, 9vw, 8rem)' }}>
              Master Study in<br /><span className="accent-text italic">Project Management with BIM</span>
            </motion.h1>
            <motion.p variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="max-w-md text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Project Management with BIM Technology — India's most comprehensive on-job training program.
            </motion.p>
            <motion.div variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-wrap gap-3">
              <Btn href="#enrollment">Apply Now</Btn>
              <a href="#overview" className="px-7 py-3.5 border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all inline-flex items-center gap-2">
                <Play className="w-4 h-4" /> Watch Overview
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 left-0 h-1 bg-yellow-500 z-20" />
      </section>

      {/* ── STATS ────────────────────────────────────────────────── */}
      <section className="bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {[
              { to: '1000', s: '+', label: 'Graduates Placed', icon: GraduationCap },
              { to: '50',   s: '+', label: 'Hiring Partners',  icon: Building2 },
              { to: '100',  s: '%', label: 'Placement Rate',   icon: TrendingUp },
            ].map((s, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 py-8 px-4 sm:px-6">
                <div className="w-9 h-9 bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-4 h-4 text-yellow-500" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl md:text-4xl font-medium text-yellow-500 leading-none">
                    <Counter to={s.to} suffix={s.s} />
                  </div>
                  <div className="text-white/40 text-[10px] uppercase tracking-widest mt-1 font-bold">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW VIDEO ───────────────────────────────────────── */}
      <section id="overview" className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <Label>Program Overview</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
                See What <span className="accent-text italic">MSB</span> Is About
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs sm:text-right leading-relaxed">
              Master Study in Project Management with BIM Technology.
            </p>
          </motion.div>
          <motion.div {...fin} className="w-full bg-black aspect-video overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 left-0 w-12 h-0.5 bg-yellow-500 z-10 relative" />
            <iframe src="https://www.youtube.com/embed/-__P90GFjBI?si=NsKBJTlJDBoXCtHU"
              className="w-full h-full" title="MSB" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAM AT A GLANCE ──────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-10">
            <Label>Program Details</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
              Everything You Need <span className="accent-text italic">to Know</span>
            </h2>
          </motion.div>

          {/* Two-column info table */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200">

            {/* Left col — Duration + Mode stacked */}
            <div className="flex flex-col gap-px bg-gray-200">
              <motion.div {...fin} className="bg-slate-800 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-yellow-500">Duration & Batch</span>
                </div>
                <p className="text-white font-medium text-3xl md:text-4xl tracking-tight leading-none mb-2">7–12 Months</p>
                <p className="text-white/40 text-sm mb-6">Until you are successfully placed</p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <Calendar className="w-4 h-4 text-yellow-500 shrink-0" />
                  <span className="text-white/50 text-sm">Next batch: <span className="text-yellow-500 font-bold">15th April 2026</span></span>
                </div>
              </motion.div>

              <motion.div {...fin} className="bg-white p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-black flex items-center justify-center shrink-0">
                    <Monitor className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">Mode of Learning</span>
                </div>
                <p className="text-black font-medium text-2xl tracking-tight mb-5">Online / Offline / Hybrid</p>
                <div className="grid grid-cols-2 gap-3">
                  {[['750+', 'Hours of Video'], ['1000+', 'Technical Books'], ['24/7', 'Library Access'], ['3', 'Learning Modes']].map(([v, l]) => (
                    <div key={l} className="border border-gray-100 p-3">
                      <div className="text-lg font-bold text-black">{v}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right col — Software + Certification stacked */}
            <div className="flex flex-col gap-px bg-gray-200">
              <motion.div {...fin} className="bg-white p-8 md:p-10 flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Software Stack</span>
                </div>
                <p className="text-black font-medium text-xl tracking-tight mb-5">
                  Master <span className="accent-text italic">9 industry tools</span> on real projects
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AutoCAD','REVIT Architecture','REVIT Structures','REVIT MEP','Synchro','Navisworks','Infraworks','Primavera','40+ Spreadsheets'].map((s, i) => (
                    <span key={i} className={`px-3 py-1.5 text-xs font-semibold border ${i < 4 ? 'bg-yellow-500 border-yellow-500 text-black' : 'border-gray-200 text-gray-600'}`}>{s}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fin} className="bg-yellow-500 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-black flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-black/50">Certification</span>
                </div>
                <p className="text-black font-medium text-xl tracking-tight mb-4">Industry-Recognized Certificate</p>
                <div className="space-y-2">
                  {['Experience Letter', 'Portfolio assistance', 'LinkedIn photoshoot', '100% Placement Guarantee'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-black flex items-center justify-center shrink-0">
                        <CheckCircle className="w-2.5 h-2.5 text-yellow-500" />
                      </div>
                      <span className="text-black font-semibold text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLACEMENT PREP ───────────────────────────────────────── */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/prj4.webp" alt="" className="w-full h-full object-cover brightness-[0.3] saturate-[0.5]" />
          <div className="absolute inset-0 bg-slate-900/65" />
        </div>
        <div className="absolute left-0 top-0 w-0.5 h-full bg-yellow-500" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <motion.div {...fin} className="lg:w-2/5 shrink-0">
              <Label>Career Readiness</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight mb-4">
                Placement Preparation <span className="accent-text italic">Series</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                Designed to ensure you excel in interviews and secure top positions in India, UAE, and internationally.
              </p>
              <div className="border border-yellow-500/30 p-5 mb-0">
                <p className="text-yellow-500 font-bold text-lg mb-1">6–8 Genuine Job Interviews</p>
                <p className="text-white/40 text-sm mb-5">India, UAE &amp; Abroad — 100% Job Guarantee</p>
                <Btn href="#enrollment" className="w-full">Apply Now</Btn>
              </div>
            </motion.div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
              {[
                { icon: Mic, label: 'Interview Preparation', desc: 'Technical and HR interview coaching for roles across India, UAE, and abroad.' },
                { icon: MessageSquare, label: 'Communication Skills', desc: 'Verbal and non-verbal communication training for professional success.' },
                { icon: Users, label: 'Group Discussion', desc: 'Techniques to stand out in group discussions with confidence.' },
                { icon: Video, label: 'Video Resume', desc: 'Build compelling video resumes that showcase your personality and skills.' },
              ].map((card, i) => (
                <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.08}s` }}
                  className="border border-white/10 p-6 flex flex-col hover:bg-white/5 transition-colors duration-200">
                  <div className="w-9 h-9 bg-yellow-500 flex items-center justify-center mb-4 shrink-0">
                    <card.icon className="w-4 h-4 text-black" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{card.label}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY SLIDER ───────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="flex items-end justify-between mb-8 gap-4">
            <div>
              <Label>Gallery</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
                Achievements <span className="accent-text italic">Showcase</span>
              </h2>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => setSlide(p => (p - 1 + sliderImages.length) % sliderImages.length)}
                className="p-3 border-2 border-black hover:bg-black group transition-all" aria-label="Prev">
                <ChevronLeft size={18} className="text-black group-hover:text-white" />
              </button>
              <button onClick={() => setSlide(p => (p + 1) % sliderImages.length)}
                className="p-3 bg-black border-2 border-black hover:bg-yellow-500 hover:border-yellow-500 group transition-all" aria-label="Next">
                <ChevronRight size={18} className="text-white group-hover:text-black" />
              </button>
            </div>
          </motion.div>
          <motion.div {...fin} className="relative overflow-hidden bg-black aspect-video md:aspect-[21/9] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)]">
            <div className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${slide * 100}%)` }}>
              {sliderImages.map((src, i) => (
                <div key={i} className="w-full h-full flex-shrink-0">
                  <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-contain bg-black" />
                </div>
              ))}
            </div>
            <div className="absolute top-4 right-4 bg-black/60 text-white text-xs font-bold px-2.5 py-1 z-10">
              {String(slide + 1).padStart(2, '0')} / {String(sliderImages.length).padStart(2, '0')}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {sliderImages.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)}
                  className={`transition-all duration-300 h-1 ${slide === i ? 'w-6 bg-yellow-500' : 'w-1.5 bg-white/30'}`} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CAREER DISCUSSION ────────────────────────────────────── */}
      <section className="overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row min-h-[560px]">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-[45%] relative min-h-[320px] overflow-hidden bg-gray-100">
              <img src="/msb/career_discussion.png" alt="Career Discussion" className="w-full h-full object-cover" />
              {/* Floating contact strip */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-white/95 px-6 py-4 flex items-center gap-4 border-t-2 border-yellow-500">
                  <Phone className="w-4 h-4 text-yellow-600 shrink-0" />
                  <div className="flex flex-col gap-0.5">
                    {['+91 90367 44017', '+91 72592 22888'].map(n => (
                      <a key={n} href={`https://wa.me/${n.replace(/\D/g,'')}`} target="_blank" rel="noreferrer"
                        className="text-black font-semibold text-sm hover:text-yellow-600 transition-colors flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />{n}
                      </a>
                    ))}
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-gray-400 text-xs">
                    <MapPin className="w-3.5 h-3.5" /> Bangalore HQ
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-[55%] px-8 md:px-12 lg:px-14 py-12 md:py-16 flex flex-col justify-center border-l-4 border-yellow-500">
              <Label>1-on-1 Session</Label>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-4">
                One-on-One<br /><span className="accent-text italic">Career Discussion</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
                Discuss your career gaps, salary issues, and skill enhancement — and build a clear roadmap forward.
              </p>
              <div className="border-t border-gray-100">
                {[
                  { n: '01', text: 'Discuss your current career situation and goals.' },
                  { n: '02', text: 'Overcome skill gaps and project-related challenges.' },
                  { n: '03', text: 'Plan your career growth and salary hikes.' },
                ].map(item => (
                  <div key={item.n} className="flex items-start gap-4 py-4 border-b border-gray-100">
                    <span className="text-lg font-medium text-yellow-500/50 leading-none mt-0.5 w-7 shrink-0">{item.n}</span>
                    <span className="text-gray-700 font-medium text-sm leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-slate-900 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-base mb-0.5">Schedule Your Meeting</p>
                  <p className="text-white/40 text-xs">Mon–Fri · 10 AM to 7 PM · Free</p>
                </div>
                <Btn href="#enrollment">Book Now</Btn>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CAREER BLUEPRINT ─────────────────────────────────────── */}
      <section className="bg-slate-900 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-12 md:py-16">
          <motion.div {...fin} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <Label>Process</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight">
                Career Growth <span className="accent-text italic">Blueprint</span>
              </h2>
            </div>
            <div className="flex gap-6">
              {[['7–12 mo', 'Duration'], ['100%', 'Placement'], ['1000+', 'Placed']].map(([v, l]) => (
                <div key={l} className="text-right">
                  <div className="text-lg font-medium text-yellow-500">{v}</div>
                  <div className="text-white/30 text-[10px] uppercase tracking-widest">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Step labels */}
          <motion.div {...fin} className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 mb-px">
            {['Enrollment', 'Training & Projects', 'Placement Prep', 'Job Placement'].map((s, i) => (
              <div key={i} className="bg-slate-900 px-5 py-3 flex items-center gap-3 hover:bg-slate-800 transition-colors duration-200">
                <span className="text-yellow-500/40 font-medium text-sm">0{i + 1}</span>
                <span className="text-white/50 text-xs font-semibold">{s}</span>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Flowchart full-width */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="h-0.5 bg-yellow-500" />
          <div className="bg-white">
            <img src="/msb/flowchart.webp" alt="Career Growth Blueprint" className="w-full h-auto object-contain" />
          </div>
        </motion.div>
      </section>

      {/* ── MODES OF LEARNING ────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-10">
            <Label>Flexibility</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
              Modes of <span className="accent-text italic">Learning</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-gray-100">
            {modes.map((m, i) => (
              <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.08}s` }}
                className="bg-white p-7 flex flex-col hover:bg-gray-50 transition-colors duration-200 group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl font-medium text-yellow-500/30 leading-none group-hover:text-yellow-500 transition-colors duration-200">{m.n}</span>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center shrink-0">
                    <m.icon className="w-4 h-4 text-black" />
                  </div>
                </div>
                <h3 className="font-bold text-black text-sm mb-4 leading-snug">{m.title}</h3>
                <ul className="space-y-2 flex-1">
                  {m.pts.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-500 leading-snug">
                      <div className="w-1 h-1 bg-yellow-500 mt-1.5 shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT REVIEWS ──────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="flex items-end justify-between mb-8 gap-4">
            <div>
              <Label>Testimonials</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
                Student <span className="accent-text italic">Reviews</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-gray-400 text-sm font-medium hidden sm:block">
                {vidSlide + 1}–{Math.min(vidSlide + 3, reviewVideos.length)} of {reviewVideos.length}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setVidSlide(p => Math.max(0, p - 1))}
                  disabled={vidSlide === 0}
                  className="p-3 border-2 border-black hover:bg-black group transition-all disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Prev">
                  <ChevronLeft size={18} className="text-black group-hover:text-white" />
                </button>
                <button
                  onClick={() => setVidSlide(p => Math.min(reviewVideos.length - 3, p + 1))}
                  disabled={vidSlide >= reviewVideos.length - 3}
                  className="p-3 bg-black border-2 border-black hover:bg-yellow-500 hover:border-yellow-500 group transition-all disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Next">
                  <ChevronRight size={18} className="text-white group-hover:text-black" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* 3-up carousel */}
          <motion.div {...fin} className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${vidSlide * (100 / 3)}%)` }}
            >
              {reviewVideos.map((src, i) => (
                <div key={i} className="shrink-0 px-2" style={{ width: '33.333%' }}>
                  <div className="relative bg-black overflow-hidden aspect-video shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)]">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500 z-10" />
                    <iframe
                      src={src}
                      className="absolute inset-0 w-full h-full"
                      title={`Review ${i + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="mt-2 px-1 flex items-center gap-2">
                    <div className="w-1 h-4 bg-yellow-500 shrink-0" />
                    <span className="text-gray-500 text-xs font-medium">Student Review {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dot indicators */}
          <div className="flex gap-1.5 mt-6 justify-center">
            {Array.from({ length: reviewVideos.length - 2 }).map((_, i) => (
              <button key={i} onClick={() => setVidSlide(i)}
                className={`transition-all duration-300 h-1 rounded-full ${vidSlide === i ? 'w-6 bg-yellow-500' : 'w-1.5 bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12 relative">
              <div className="aspect-[4/5] overflow-hidden">
                <img src="https://e-construct.in/wp-content/uploads/2024/08/Media-e1768631671611.jpeg"
                  alt="Mr. Sandeep Pingale" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 px-6 py-4 grid grid-cols-3 divide-x divide-white/20">
                {[['20+', 'Years'], ['1000+', 'Projects'], ['500+', 'Students']].map(([v, l]) => (
                  <div key={l} className="text-center px-3">
                    <div className="text-lg font-medium text-yellow-500">{v}</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-widest">{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-7/12">
              <Label>Our Leadership</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight mb-2">
                Meet Our <span className="accent-text italic">Founder</span>
              </h2>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-yellow-500" />
                <span className="text-gray-500 font-semibold text-base">Mr. Sandeep Pingale</span>
              </div>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                With over two decades of experience in structural engineering, Mr. Pingale has shaped the future of engineering education. His vision of practical, hands-on learning has helped thousands of students transition into successful careers.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: GraduationCap, t: 'Industry Expert', d: '20+ years in structural engineering and BIM' },
                  { icon: TrendingUp, t: 'Proven Results', d: '1000+ students placed in top firms' },
                  { icon: Globe, t: 'Global Reach', d: 'Placements in India, UAE, and abroad' },
                  { icon: Award, t: 'Certified Trainer', d: 'Industry-recognized training methodology' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 border border-gray-100 hover:border-yellow-300 transition-colors duration-200">
                    <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <p className="font-bold text-black text-sm">{item.t}</p>
                      <p className="text-gray-400 text-xs leading-snug mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Btn href="/about">Read More</Btn>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM TABLE ────────────────────────────────────────── */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="overflow-hidden shadow-[0_8px_40px_-10px_rgba(0,0,0,0.15)]">
            <div className="h-0.5 bg-yellow-500" />
            <img src="/msb/table.webp" alt="Program Details Table" className="w-full h-auto object-contain bg-white" />
          </motion.div>
        </div>
      </section>

      {/* ── ORANGE MSB TRAINING POSTER ────────────────────────────── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 flex justify-center">
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-4">
            <img src="/assets/msb_poster_orange.jpeg" alt="Master Study in Project Management with BIM Technology Training Poster" className="w-full h-auto object-contain rounded-2xl" loading="lazy" />
          </div>
        </div>
      </section>



      {/* ── IMPACT VIDEO ─────────────────────────────────────────── */}
      <section className="bg-slate-900 py-10 md:py-14">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">

          {/* Header row */}
          <motion.div {...fin} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <Label>Our Story</Label>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                See the <span className="accent-text italic">Impact</span> We Create
              </h2>
            </div>
            <Btn href="#enrollment">Apply Now — April 2026</Btn>
          </motion.div>

          {/* Content row — facts left, video right */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

            {/* Facts table — fills naturally */}
            <motion.div {...fin} className="flex-1 min-w-0">
              <p className="text-white/40 text-sm leading-relaxed mb-5">
                Real graduates. Real projects. Real careers built at Econstruct.
              </p>
              <div className="border-t border-white/10">
                {[
                  ['Program Duration', '7–12 Months'],
                  ['Next Batch', '15th April 2026'],
                  ['Learning Mode', 'Online / Offline / Hybrid'],
                  ['Job Placement', '100% Placement Guarantee'],
                  ['Alumni Network', '1000+ Graduates'],
                  ['Hiring Partners', '50+ Companies'],
                  ['Software Tools', 'AutoCAD, REVIT, Synchro, Navisworks + more'],
                  ['Certification', 'Industry-Recognized + Experience Letter'],
                ].map(([l, v]) => (
                  <div key={l} className="flex items-start justify-between gap-4 py-3 border-b border-white/10">
                    <span className="text-white/30 text-xs uppercase tracking-widest shrink-0">{l}</span>
                    <span className="text-white font-semibold text-sm text-right">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Video — fixed height, natural width from aspect ratio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="shrink-0"
            >
              <div className="relative bg-black overflow-hidden shadow-[0_12px_40px_-8px_rgba(0,0,0,0.5)]"
                style={{ height: '460px', aspectRatio: '9/16' }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-500 z-10" />
                <iframe
                  src="https://www.youtube.com/embed/LQhaTP3iyGc?si=x06qRKFvAgAifK6F"
                  title="Our Impact Video"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── ENROLLMENT + PAYMENT ─────────────────────────────────── */}
      <section id="enrollment" className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-10">
            <Label>Get Started</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
              Enrollment <span className="accent-text italic">Process</span>
            </h2>
          </motion.div>

          {/* 3 steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 mb-10">
            {[
              { n: '01', t: 'Initial Registration', d: 'Fill out the application form and submit your details.' },
              { n: '02', t: 'Document Submission', d: 'Submit your academic and identity documents for verification.' },
              { n: '03', t: 'Payment & Onboarding', d: 'Complete payment and receive your onboarding kit.' },
            ].map((s, i) => (
              <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.08}s` }}
                className="bg-white p-7 hover:bg-yellow-50 transition-colors duration-200 group">
                <span className="text-5xl font-medium text-yellow-500/20 leading-none block mb-3 group-hover:text-yellow-500/40 transition-colors duration-200">{s.n}</span>
                <h4 className="font-bold text-black text-base mb-1">{s.t}</h4>
                <p className="text-gray-400 text-sm">{s.d}</p>
              </motion.div>
            ))}
          </div>

          {/* Payment + Info */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Payment */}
            <motion.div {...fin} className="bg-slate-800 p-7 md:p-9 text-white">
              <h3 className="text-xl font-medium mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-yellow-500 flex items-center justify-center text-black font-black text-base">₹</span>
                Make Payment
              </h3>
              <div className="border border-white/10 p-5 mb-6 space-y-3">
                <p className="text-yellow-500 font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-3 mb-3">Primary Account — HDFC Bank</p>
                {[['Account Number','50200000209630'],['Account Name','ECONSTRUCT DESIGN & BUILD PVT LTD.'],['IFSC Code','HDFC0009196'],['SWIFT Code','HDFCINBBNG'],['Branch','Harlur Road, Bangalore']].map(([k,v]) => (
                  <div key={k} className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                    <span className="text-white/40 text-xs">{k}</span>
                    <span className="font-semibold text-sm">{v}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-xs mb-2">Share payment screenshot to:</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['+91 9036744017','+91 7259222888','+91 7259921111'].map(n => (
                  <span key={n} className="border border-white/10 text-white text-xs font-semibold py-1.5 px-3 flex items-center gap-1.5">
                    <Phone className="w-3 h-3" />{n}
                  </span>
                ))}
              </div>
              <div className="border-t border-white/10 pt-5">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-2">Payment Methods</p>
                <div className="flex gap-2">
                  {['NEFT','IMPS','RTGS','UPI'].map(m => (
                    <span key={m} className={`px-3 py-1 text-xs font-bold ${m === 'UPI' ? 'bg-yellow-500 text-black' : 'border border-white/10 text-white'}`}>{m}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div {...fin} className="flex flex-col gap-4">
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-yellow-600" />
                  <p className="font-bold text-black text-sm">Important Notice</p>
                </div>
                <p className="text-gray-600 text-sm">Take admission <strong>at least 2 months before</strong> the batch starting date to secure your seat.</p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-gray-100">
                {['Priority Access','Pre-Batch Preparation','Limited Seats','Smooth Onboarding'].map(item => (
                  <div key={item} className="bg-white p-4 flex items-center gap-2 hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-4 h-4 bg-yellow-500 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-2.5 h-2.5 text-black" />
                    </div>
                    <span className="font-semibold text-black text-xs">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900 text-white p-7 flex-1 border-l-4 border-yellow-500">
                <h3 className="text-lg font-medium mb-2">This is not just a training program.</h3>
                <p className="text-yellow-500 font-bold mb-3">This is ON-THE-JOB Learning.</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">Step out of the classroom and into a real corporate environment from day one.</p>
                <Btn href="#overview">Welcome Aboard</Btn>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="flex flex-col lg:flex-row overflow-hidden shadow-[0_8px_40px_-10px_rgba(0,0,0,0.15)]">
            <div className="p-8 md:p-12 lg:w-3/5 flex flex-col justify-center bg-white border border-gray-100">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 text-yellow-700 font-bold text-xs uppercase tracking-wider border border-yellow-200 mb-5 max-w-max">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full" /> 100% Placement Program
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-black mb-2 tracking-tight">
                BIM &amp; Project Management <span className="accent-text italic">Redefined</span>
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-yellow-500" />
                <p className="text-gray-400 text-sm">Complete Master Study in Project Management with BIM Technology</p>
              </div>
              <ul className="space-y-2.5 mb-6">
                {['Live project experience from CLP to GFC','12 Month Experience Letter','AutoCAD · REVIT Architecture · REVIT Structures · REVIT MEP · Synchro · Navisworks · Infraworks · Primavera','Digital Library — 1000+ Technical Books','100% Placement Guarantee','World-class CRM system'].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 bg-yellow-500 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-2.5 h-2.5 text-black" />
                    </div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-red-500 text-xs italic">* Fee is non-refundable &amp; non-transferable under any circumstance.</p>
            </div>
            <div className="bg-slate-900 text-white lg:w-2/5 p-8 md:p-12 flex flex-col justify-center border-l-4 border-yellow-500">
              <p className="text-white/30 font-bold uppercase tracking-widest text-xs mb-3">Master Study Program</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-xl font-medium text-yellow-500">₹</span>
                <span className="text-5xl font-medium text-white tracking-tight">2,10,000</span>
              </div>
              <p className="text-white/30 text-sm mb-1">AED 9,000 · US$ 2,510</p>
              <p className="text-white/20 text-xs mb-8">(₹1,77,967 + 18% GST)</p>
              <Btn href="#enrollment">Take Admission Now</Btn>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED PROGRAMS ─────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-10">
            <Label>Also Explore</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
              Related <span className="accent-text italic">Programs</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { img: '/prj4.webp', tag: 'ON-JOB Learning', title: 'Master Study In Structural Engineering', desc: 'Experience from CLP to GFC. Work on RCC, STEEL, Composite Structures.' },
              { img: '/prj1.jpg', tag: 'Structures, BIM & PM', title: 'Techno-Management Entrepreneurship Training', desc: 'For aspiring professionals looking to excel and lead in construction.' },
              { img: '/prj6.jpg', tag: 'With Project Management', title: 'Master Study In Interior Designing', desc: 'ON-JOB Learning Program for passionate interior designers.' },
            ].map((card, i) => (
              <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.08}s` }}
                className="group overflow-hidden border border-gray-100 hover:border-yellow-300 transition-colors duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={card.img} alt={card.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-5">
                  <span className="text-yellow-600 font-bold text-xs uppercase tracking-widest">{card.tag}</span>
                  <h3 className="font-bold text-black text-base mt-1 mb-2 leading-snug">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <button className="flex items-center gap-1.5 text-black font-bold text-xs uppercase tracking-widest group/btn">
                    Learn More <ArrowRight size={14} className="text-yellow-600 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPETITION PLAYLIST ─────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-slate-900">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-8">
            <Label>Live Competition</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight">
              Live Project <span className="accent-text italic">Competition</span>
            </h2>
            <p className="text-white/40 text-sm mt-2">Between Master Study Trainees at Econstruct</p>
          </motion.div>
          <motion.div {...fin} className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10">
            <div className="lg:col-span-2 bg-slate-900 overflow-hidden aspect-video relative">
              <iframe src={playlist[activeVid].src} className="absolute inset-0 w-full h-full"
                title={playlist[activeVid].title} frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="bg-slate-800 flex flex-col max-h-[300px] lg:max-h-none overflow-y-auto">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 sticky top-0 bg-slate-800 z-10">
                <Video className="w-4 h-4 text-yellow-500" />
                <span className="font-bold text-white text-sm">Playlist</span>
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

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <motion.div {...fin} className="lg:w-2/5 shrink-0 lg:sticky lg:top-28 self-start">
              <Label>FAQ</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight mb-4">
                Frequently<br />Asked <span className="accent-text italic">Questions</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Common questions about the Master Study in Project Management with BIM Technology program.</p>
              <Btn href="#enrollment">Still Have Questions?</Btn>
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
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/prj6.jpg" alt="" className="w-full h-full object-cover brightness-[0.35] saturate-[0.6]" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-500" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-bold">Limited Seats Available</span>
              </div>
              <h2 className="font-medium text-white tracking-tight leading-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
                Ready to Transform<br /><span className="accent-text italic">Your Career?</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Join 1,000+ graduates who have already built successful careers through our on-job learning program.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex flex-col items-center lg:items-end gap-5 shrink-0">
              <Btn href="#enrollment">Apply Now — April 2026</Btn>
              <div className="flex gap-6">
                {['+91 90367 44017', '+91 72592 22888'].map(n => (
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

export default BimHubMSB;
