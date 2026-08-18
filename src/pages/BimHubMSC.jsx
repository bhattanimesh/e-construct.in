import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import AwardsMediaShowcase from '../components/AwardsMediaShowcase';
import StudentVideoReviewsShowcase from '../components/StudentVideoReviewsShowcase';
import {
  Clock, Calendar, Monitor, BookOpen, Award, Briefcase,
  Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight,
  CheckCircle, ChevronDown, ArrowRight, Phone, MapPin,
  Play, TrendingUp, Building2, Zap, GraduationCap, Globe,
  Star, Quote, CheckCircle2, X, Maximize2, QrCode, ShieldCheck
} from 'lucide-react';

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

const BimHubMSC = () => {
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
  const [isQrExpanded, setIsQrExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsQrExpanded(false);
    };
    if (isQrExpanded) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isQrExpanded]);

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % sliderImages.length), 4200);
    return () => clearInterval(t);
  }, [sliderImages.length]);

  const playlist = [
    { title: 'Competition Overview', src: 'https://www.youtube.com/embed/4V-mT1ISo90?si=8jFBhtkVt_QD23TB', dur: '12:04' },
    { title: 'Team Presentations & Solutions', src: 'https://www.youtube.com/embed/1jePd-E4ZEc?si=W545dJrmLDm5NdyU', dur: '08:15' },
    { title: 'Structural Analysis Highlights', src: 'https://www.youtube.com/embed/QA8dxpyk8iI?si=aTsCZCz_Jb-ilnnd', dur: '15:30' },
    { title: 'Award Ceremony & Closing', src: 'https://www.youtube.com/embed/oBZ_4zm7VeM?si=GD2fxp24f4ct17Ie', dur: '05:45' },
  ];
  const [activeVid, setActiveVid] = useState(0);

  const faqs = [
    {
      q: 'What is the duration of the course?',
      a: '12 Months Training + 12 Months Internship = Total 24 Months. This is an ON-JOB learning program where you get the opportunity to work on real Live Projects with our technical team. Duration may vary slightly depending on your allotted project and overall performance.\n\nNote: Long holidays are not permitted during the course as you are involved in Real Projects.'
    },
    { q: 'Who can join this course?', a: 'Polytechnic Diploma (Civil Engineering), B.Tech / B.E (Civil Engineering), M.Tech / M.E (Structural Engineering), CAD Structures.' },
    { q: 'What learning activities are included?', a: '48 hrs Challenge (Group Activity), 24 hrs Challenge (Individual Activity), MASS Mock Interviews, Tuesday code reading sessions, weekly objective tests, and monthly project reviews.' },
    {
      q: 'What certification will I receive?',
      a: 'Certification is offered upon successful completion of criteria:\n• Working experience letter of 24 months after successful completion of Exam criteria\n• PG Diploma Certification of 24 months issued by Econstruct Design & Build Pvt Ltd\n• Assistance to make a Portfolio for each candidate\n• Visual OR Video resume building assistance\n• Photoshoot in formals for LinkedIn profile and Resume Photo\n\nPLEASE NOTE: Certification is backed by 24 months of genuine live project execution and technical expertise.'
    },
    { q: 'How does placement assistance work?', a: 'We offer dedicated career guidance, portfolio development, video resume creation, and 6–8 genuine job interview arrangements across India, UAE, and abroad.' },
    { q: 'Can payment be made in installments?', a: 'Contact administration for detailed installment schedules and fee structure details.' },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const softwares = ['ETABS', 'ETABS Advanced', 'STAADPro', 'SAFE', 'SAP2000', 'CSI Bridge', 'CSI Detailer', 'RCDC/Prokon', 'AutoCAD', 'REVIT Architecture', 'REVIT Structures', 'REVIT MEP', 'Synchro', 'Navisworks', 'Infraworks', 'Primavera', '40+ Design Spreadsheets'];

  const modes = [
    { n: '01', title: 'Offline (Bangalore HQ)', icon: Building2, pts: ['Report to Bangalore HQ on batch start date.', 'Work Mon–Fri, 9 am to 7 pm in a live office setting.', 'Duration: 12 Months Training + 12 Months Internship = Total 24 Months.', 'Live project mentoring with senior structural consultants.', 'Mock technical interview rounds & timesheet management.'] },
    { n: '02', title: 'Online — Working Professionals', icon: Monitor, pts: ['Designed for working professionals (dedicate 2–4 hours/day).', 'Self-paced training with pre-recorded videos & weekend live calls.', 'Complete 12 to 15 real project assignments.', 'Doubt Clearing Sessions (DCS) & 1-on-1 Zoom support.', 'Full 24 Months program structure (12M Training + 12M Internship).'] },
    { n: '03', title: 'Online — Non-Working', icon: Globe, pts: ['100% online mode replicating office environment (9 am–7 pm).', 'Dashboard access to videos, models & drawings.', 'Stay connected via Zoom with reporting managers.', 'Participate in online mock technical interviews.', '24 Months On-Job learning experience & certification.'] },
    { n: '04', title: 'Hybrid', icon: Zap, pts: ['Report to Bangalore HQ for 7, 15, or 30 days initially.', 'Continue online with live sessions, DCS, and assignments.', 'Return to HQ for 7 to 30 days near completion.', 'Work from home between offline modules seamlessly.', '12 Months Training + 12 Months Internship = Total 24 Months.'] },
  ];

  const fin = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55 } };

  return (
    <div className="bg-white overflow-x-hidden">

      {/* ── 01. HERO SECTION ────────────────────────────────────────── */}
      <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-slate-950 flex flex-col justify-between">
        <div className="absolute inset-0">
          <img src="/msc_hero_bg.jpg" alt="PG Diploma in Entrepreneurship in Structures, BIM and Project Management Background" className="w-full h-full object-cover brightness-[0.82] saturate-[1.15]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent hidden md:block" />
        </div>

        <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-5 sm:px-10 flex flex-col justify-center pt-24 sm:pt-28 pb-8 flex-1">
          <motion.div initial="i" animate="a" variants={{ a: { transition: { staggerChildren: 0.1 } } }} className="lg:max-w-4xl pt-4">

            {/* Accreditation Badges */}
            <motion.div variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="flex flex-wrap items-center gap-3 mb-5">
              <span className="bg-slate-900/80 backdrop-blur-md text-yellow-400 border border-yellow-500/40 text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-md tracking-wider flex items-center gap-1.5 shadow-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-500" /> ISO 9001:2015 Certified
              </span>
              <span className="bg-slate-900/80 backdrop-blur-md text-blue-300 border border-blue-500/40 text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-md tracking-wider flex items-center gap-1.5 shadow-lg">
                <Building2 className="w-3.5 h-3.5 text-blue-400" /> MSME Certified
              </span>
              <span className="bg-slate-900/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40 text-[11px] font-extrabold uppercase px-3 py-1.5 rounded-md tracking-wider flex items-center gap-1.5 shadow-lg">
                <Zap className="w-3.5 h-3.5 text-emerald-400" /> 24 Months On-Job Program
              </span>
            </motion.div>

            <motion.h1 variants={{ i: { opacity: 0, y: 40 }, a: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.6, 0.05, 0.01, 0.9] } } }}
              className="font-medium text-white tracking-tight leading-[1.12] mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              PG Diploma In<br />
              <span className="text-yellow-400 italic font-serif drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Entrepreneurship in Structures, BIM & Project Management
              </span>
            </motion.h1>

            <motion.p variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              A comprehensive program structured as <strong className="text-yellow-400 font-bold">12 Months Training + 12 Months Internship = Total 24 Months</strong> on live high-rise projects.
            </motion.p>

            <motion.div variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-wrap gap-4">
              <Btn href="#enrollment">Apply Now — 21st Sept 2026</Btn>
              <a href="#overview" className="px-7 py-3.5 border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all inline-flex items-center gap-2">
                <Play className="w-4 h-4 text-yellow-500" /> Watch Overview Video
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="relative z-20 bg-slate-900/90 backdrop-blur-md border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { to: '2000', s: '+', label: 'Graduates Placed', icon: GraduationCap },
                { to: '100', s: '+', label: 'Hiring Partners', icon: Building2 },
                { to: '100', s: '%', label: 'Placement Assistance', icon: TrendingUp },
                { to: '24', s: ' Months', label: 'Duration (ON-JOB)', icon: Clock },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 py-4 px-4 sm:px-6">
                  <div className="w-9 h-9 bg-yellow-500/10 flex items-center justify-center shrink-0 rounded-lg">
                    <s.icon className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-yellow-500 leading-none">
                      <Counter to={s.to} suffix={s.s} />
                    </div>
                    <div className="text-white/50 text-[10px] uppercase tracking-widest mt-1 font-bold">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. OVERVIEW VIDEO ───────────────────────────────────────── */}
      <section id="overview" className="py-8 md:py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Column: Heading & Program Highlights */}
            <motion.div {...fin}>
              <Label>02 · Program Detailed Video</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                See What <span className="text-yellow-600 italic font-serif">PG Diploma in Entrepreneurship & BIM</span> Is All About
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                Entrepreneurship in Structures, BIM & Project Management (24 Months On-Job Program). Discover how our on-job training prepares you to deliver real-world projects or launch your own firm.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  'Real On-Job Training on Live High-Rise & Commercial Projects',
                  'Mastery in Structural Design, BIM Technology & Primavera PM',
                  'Practical Guidance on Client Acquisition, Billing & Firm Setup',
                  '100% Placement Assistance & Lifelong Mentorship Support'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-yellow-600" />
                    </div>
                    <span className="text-slate-700 text-xs sm:text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Btn href="#curriculum">Explore Curriculum</Btn>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-yellow-600 transition-colors py-2.5 px-2">
                  Talk to Course Advisor <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: 50% Video Player */}
            <motion.div {...fin} className="relative w-full bg-black aspect-video overflow-hidden shadow-[0_15px_45px_-10px_rgba(0,0,0,0.2)] rounded-2xl border border-slate-800">
              <div className="absolute top-0 left-0 w-20 h-1 bg-yellow-500 z-10" />
              <iframe src="https://www.youtube.com/embed/I4QyIdbupvs?si=CwmIf_njoy5v3_zc"
                className="absolute inset-0 w-full h-full" title="PG Diploma in Entrepreneurship in Structures, BIM and Project Management Video" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROGRAM AT A GLANCE (UPDATED DURATION) ───────────────── */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-6">
            <Label>Program Details</Label>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black tracking-tight">
              Everything You Need <span className="accent-text italic">to Know</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200">
            <div className="flex flex-col gap-px bg-gray-200">
              <motion.div {...fin} className="bg-slate-800 p-6 md:p-7">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 bg-yellow-500 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-black" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-yellow-500">Course Duration</span>
                </div>
                {/* Standardized Course Duration */}
                <div className="mb-3">
                  <p className="text-yellow-400 font-bold text-lg md:text-xl tracking-tight leading-snug">
                    12 Months Training + 12 Months Internship
                  </p>
                  <p className="text-white font-black text-xl md:text-2xl tracking-tight mt-0.5">
                    = Total 24 Months
                  </p>
                </div>
                <p className="text-white/60 text-xs sm:text-sm mb-4 font-medium border-l-2 border-yellow-500 pl-3">
                  ON-JOB Learning Program working directly on real live projects alongside senior structural engineers.
                </p>
                <div className="flex items-center gap-2.5 pt-3.5 border-t border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-yellow-500 shrink-0" />
                  <span className="text-white/70 text-xs sm:text-sm">Next Batch: <span className="text-yellow-500 font-bold">21st Sept 2026</span></span>
                </div>
              </motion.div>
              <motion.div {...fin} className="bg-white p-6 md:p-7">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-7 h-7 bg-black flex items-center justify-center shrink-0">
                    <Monitor className="w-3.5 h-3.5 text-yellow-500" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">Mode of Learning</span>
                </div>
                <p className="text-black font-medium text-lg sm:text-xl tracking-tight mb-4">Online / Offline / Hybrid</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {[['750+', 'Hours of Video'], ['1000+', 'Technical Books'], ['24/7', 'Library Access'], ['3', 'Learning Modes']].map(([v, l]) => (
                    <div key={l} className="border border-gray-100 p-2.5">
                      <div className="text-base font-bold text-black">{v}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col gap-px bg-gray-200">
              <motion.div {...fin} className="bg-white p-6 md:p-7 flex-1">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-7 h-7 bg-yellow-500 flex items-center justify-center shrink-0">
                    <BookOpen className="w-3.5 h-3.5 text-black" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-yellow-600">Software Stack</span>
                </div>
                <p className="text-black font-medium text-base sm:text-lg tracking-tight mb-3.5">
                  Master <span className="accent-text italic">17 industry tools</span> on real projects
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {softwares.map((s, i) => (
                    <span key={i} className={`px-2.5 py-1 text-[11px] font-semibold border ${i < 8 ? 'bg-yellow-500 border-yellow-500 text-black' : 'border-gray-200 text-gray-600'}`}>{s}</span>
                  ))}
                </div>
              </motion.div>
              <motion.div {...fin} className="bg-yellow-500 p-6 md:p-7">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-7 h-7 bg-black flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-yellow-500" />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-black/60">Certification & Credentials</span>
                </div>
                <p className="text-black font-bold text-lg sm:text-xl tracking-tight mb-3">24-Month PG Diploma Certification</p>
                <div className="space-y-1.5">
                  {[
                    '24 Months Working Experience Letter',
                    '24 Months PG Diploma Certification',
                    'Comprehensive Portfolio Building',
                    'LinkedIn Photoshoot & Video Resume',
                    '6–8 Job Interview Arrangements'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 bg-black flex items-center justify-center shrink-0">
                        <CheckCircle className="w-2 h-2 text-yellow-500" />
                      </div>
                      <span className="text-black font-bold text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLP & GFC CARDS ──────────────────────────────────────── */}
      <section className="bg-white py-8 md:py-12 px-4 md:px-6 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto text-center mb-8">
          <Label>Real Project Exposure</Label>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">
            Center Line Plan to <span className="accent-text italic">GFC Drawings</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Work alongside the Econstruct technical team from 9:55 am to 7:00 pm, Monday to Friday, producing actual client-deliverable structural drawings.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* CLP Card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden group">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img src="/msc2.webp" alt="Center Line Plan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-[#fbc02d] text-gray-900 font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                CLP
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} />
                </span>
                Center Line Plan (CLP)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5 text-gray-600 font-medium">
                  <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                  Initial structural layout planning & column grid setup
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 font-medium">
                  <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                  Foundation positioning, shear wall locations & alignments
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 font-medium">
                  <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                  Preliminary structural dimensioning according to IS codes
                </li>
              </ul>
            </div>
          </div>

          {/* GFC Card */}
          <div className="bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden group">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <img src="/msc3.webp" alt="Good for Construction Drawings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-[#fbc02d] text-gray-900 font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                GFC
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-3 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={16} />
                </span>
                Good for Construction (GFC)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5 text-gray-600 font-medium">
                  <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                  Detailed structural execution specifications & beam schedules
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 font-medium">
                  <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                  Rebar layout detailing, BBS generation & ductile detailing
                </li>
                <li className="flex items-start gap-2.5 text-gray-600 font-medium">
                  <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                  Final site-ready GFC drawings approved by chief structural consultants
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIMENSIONS IN BIM DEPARTMENT ───────────────────────── */}
      <section className="bg-slate-50 py-8 md:py-12 px-4 md:px-6 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight leading-tight">
              Experience All the Dimensions in the <span className="text-[#fbc02d]">BIM Department</span>
            </h2>
            <div className="w-16 h-[3px] bg-[#fbc02d] mx-auto rounded-full mt-3"></div>
          </div>
          <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] bg-white p-2.5 sm:p-3">
            <img src="/msc_dimensions.png" alt="Dimensions in BIM Department" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* ── PLACEMENT PREP SERIES ────────────────────────────────── */}
      <section className="relative py-8 md:py-12 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/prj4.webp" alt="" className="w-full h-full object-cover brightness-[0.3] saturate-[0.5]" />
          <div className="absolute inset-0 bg-slate-900/65" />
        </div>
        <div className="absolute left-0 top-0 w-0.5 h-full bg-yellow-500" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <motion.div {...fin} className="lg:w-2/5 shrink-0">
              <Label>Career Readiness</Label>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-3">
                Placement Preparation <span className="accent-text italic">Series</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
                Designed to ensure you excel in interviews and secure top positions across India, UAE, and international firms.
              </p>
              <div className="border border-yellow-500/30 p-4 rounded-xl bg-slate-900/40 backdrop-blur-sm">
                <p className="text-yellow-500 font-bold text-base mb-0.5">6–8 Genuine Job Interviews</p>
                <p className="text-white/40 text-xs mb-3.5">India, UAE & Abroad — Placement Support</p>
                <Btn href="#enrollment">Apply Now</Btn>
              </div>
            </motion.div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden">
              {[
                { icon: Mic, label: 'Interview Preparation', desc: 'Technical & HR interview coaching for roles across India, UAE, and abroad.' },
                { icon: MessageSquare, label: 'Communication Skills', desc: 'Verbal and non-verbal communication training for professional engineering setups.' },
                { icon: Users, label: 'Group Discussion', desc: 'Techniques to excel in group discussions with confidence and authority.' },
                { icon: Video, label: 'Video Resume', desc: 'Build compelling video resumes showcasing your live project models and drawings.' },
              ].map((card, i) => (
                <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.06}s` }}
                  className="border border-white/10 p-4 sm:p-5 flex flex-col hover:bg-white/5 transition-colors duration-200">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center mb-3 shrink-0 rounded">
                    <card.icon className="w-3.5 h-3.5 text-black" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1.5">{card.label}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MODES OF LEARNING (WITH DURATION HIGHLIGHTS) ─────────── */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-6 text-center">
            <Label>Flexibility</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
              Modes of <span className="accent-text italic">Learning</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1.5 font-medium">
              All modes follow the standardized duration: <strong className="text-black font-bold">12 Months Training + 12 Months Internship = Total 24 Months</strong>
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {modes.map((m, i) => (
              <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.06}s` }}
                className="bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.05)] border border-gray-100 p-5 flex flex-col hover:-translate-y-1 transition-transform duration-300 group">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="text-2xl font-medium text-yellow-500/40 leading-none group-hover:text-yellow-500 transition-colors duration-200">{m.n}</span>
                  <div className="w-px h-6 bg-gray-200" />
                  <div className="w-7 h-7 bg-yellow-500 flex items-center justify-center shrink-0">
                    <m.icon className="w-3.5 h-3.5 text-black" />
                  </div>
                </div>
                <h3 className="font-bold text-black text-sm mb-3 leading-snug">{m.title}</h3>
                <ul className="space-y-2 flex-1">
                  {m.pts.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                      <div className="w-1 h-1 bg-yellow-500 rounded-full mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVAMPED STUDENT REVIEWS / TESTIMONIALS SECTION ─────── */}
      <StudentVideoReviewsShowcase
        subtitle="Hear directly from our PG Diploma in Entrepreneurship in Structures, BIM and Project Management (MSC) trainees and alumni working in top structural design & BIM firms."
      />

      {/* ── POSTERS SHOWCASE ─────────────────────────────────────── */}
      <section className="bg-slate-50 py-6 md:py-8 px-4 md:px-6 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] bg-white p-2.5 sm:p-3">
            <img src="/msc_training_poster_2.png" alt="MSC Training Poster" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* ── FOUNDER / LEADERSHIP SECTION ───────────────────────── */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Image */}
            <div className="relative max-w-sm mx-auto w-full rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] aspect-[4/5]">
              <img src="https://e-construct.in/wp-content/uploads/2024/08/Media-e1768631671611.jpeg" alt="Mr. Sandeep Pingale" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-8 h-[2px] bg-[#fbc02d]" />
                <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-xs">Our Leadership</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 leading-tight tracking-tight">
                Meet Our Founder & <br className="hidden xl:block" /> Managing Director
              </h2>
              <h3 className="text-lg sm:text-xl font-bold text-gray-600 mb-4 border-l-4 border-[#fbc02d] pl-3">Mr. Sandeep Pingale</h3>

              <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed mb-5">
                With over two decades of experience in structural engineering, Mr. Pingale has been instrumental in shaping the future of structural engineering education. His vision of practical, hands-on learning has helped thousands of students transition into successful professionals.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                  <div className="text-xl sm:text-2xl font-black text-[#fbc02d] mb-1">20+</div>
                  <div className="text-gray-800 font-bold text-[11px] uppercase tracking-wide text-center sm:text-left">Years Exp.</div>
                </div>
                <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                  <div className="text-xl sm:text-2xl font-black text-[#fbc02d] mb-1">1000+</div>
                  <div className="text-gray-800 font-bold text-[11px] uppercase tracking-wide text-center sm:text-left">Projects</div>
                </div>
                <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-gray-100 flex flex-col items-center sm:items-start">
                  <div className="text-xl sm:text-2xl font-black text-[#fbc02d] mb-1">500+</div>
                  <div className="text-gray-800 font-bold text-[11px] uppercase tracking-wide text-center sm:text-left">Mentored</div>
                </div>
              </div>

              <a href="/about" className="self-start bg-[#fbc02d] text-gray-900 font-black px-7 py-3 rounded-lg shadow-sm hover:bg-[#ffe066] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider text-xs inline-block">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS, MAGAZINE & NEWSLETTER HIGHLIGHT ───────────────── */}
      <AwardsMediaShowcase />

      {/* ── COMPETITION PLAYLIST ─────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-slate-900 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-5">
            <Label>Live Competition</Label>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight">
              Live Project <span className="accent-text italic">Competition</span>
            </h2>
            <p className="text-white/40 text-xs sm:text-sm mt-1">Between PG Diploma Trainees at Econstruct</p>
          </motion.div>
          <motion.div {...fin} className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
            <div className="lg:col-span-2 bg-slate-900 overflow-hidden aspect-video relative">
              <iframe src={playlist[activeVid].src} className="absolute inset-0 w-full h-full"
                title={playlist[activeVid].title} frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="bg-slate-800 flex flex-col max-h-[250px] lg:max-h-none overflow-y-auto">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 sticky top-0 bg-slate-800 z-10">
                <Video className="w-3.5 h-3.5 text-yellow-500" />
                <span className="font-bold text-white text-xs sm:text-sm">Playlist</span>
                <span className="ml-auto text-white/30 text-xs">{activeVid + 1}/{playlist.length}</span>
              </div>
              {playlist.map((v, i) => (
                <button key={i} onClick={() => setActiveVid(i)}
                  className={`text-left px-4 py-3 flex items-start gap-2.5 border-b border-white/5 transition-colors duration-200 ${activeVid === i ? 'bg-yellow-500' : 'hover:bg-white/5'}`}>
                  <span className={`font-bold font-mono text-xs mt-0.5 shrink-0 ${activeVid === i ? 'text-black' : 'text-white/30'}`}>0{i + 1}</span>
                  <div>
                    <p className={`font-semibold text-xs sm:text-sm line-clamp-2 ${activeVid === i ? 'text-black' : 'text-white'}`}>{v.title}</p>
                    <p className={`text-[10px] mt-0.5 ${activeVid === i ? 'text-black/60' : 'text-white/30'}`}>{v.dur}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ENROLLMENT PROCESS & PAYMENT / FEE DETAILS ───────────── */}
      <section id="enrollment" className="bg-white py-8 md:py-14 px-4 md:px-6 border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-1.5">Get Started</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Enrollment Process</h3>
            <div className="w-16 h-[3px] mx-auto bg-[#fbc02d] rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 text-center">
            <div className="bg-white p-5 rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-11 h-11 bg-[#fbc02d]/20 text-[#fbc02d] rounded-full flex items-center justify-center text-lg font-black mx-auto mb-3">1</div>
              <h4 className="text-base font-bold text-gray-900">Step 1</h4>
              <p className="text-gray-500 mt-1 text-xs sm:text-sm font-medium">Initial Registration & Profile Submission</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-11 h-11 bg-[#fbc02d]/20 text-[#fbc02d] rounded-full flex items-center justify-center text-lg font-black mx-auto mb-3">2</div>
              <h4 className="text-base font-bold text-gray-900">Step 2</h4>
              <p className="text-gray-500 mt-1 text-xs sm:text-sm font-medium">Document Submission & Evaluation</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-[0_6px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-11 h-11 bg-[#fbc02d]/20 text-[#fbc02d] rounded-full flex items-center justify-center text-lg font-black mx-auto mb-3">3</div>
              <h4 className="text-base font-bold text-gray-900">Step 3</h4>
              <p className="text-gray-500 mt-1 text-xs sm:text-sm font-medium">Payment & 24-Month Onboarding</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Payment Account Details */}
            <div className="bg-slate-900 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.15)] p-5 sm:p-7 text-white relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#fbc02d]/10 rounded-full blur-[40px] pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-black mb-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#fbc02d] flex items-center justify-center text-slate-900 text-base font-bold">₹</div>
                Make Payment
              </h3>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 mb-5 backdrop-blur-sm">
                <h4 className="text-[#fbc02d] font-bold text-sm mb-3.5 uppercase tracking-wider border-b border-white/10 pb-2.5">Primary Account — HDFC Bank</h4>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 border-b border-white/5 pb-2">
                    <span className="text-gray-400 font-medium whitespace-nowrap">Account Number:</span>
                    <span className="font-bold text-base text-yellow-400">50200000209630</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 border-b border-white/5 pb-2">
                    <span className="text-gray-400 font-medium whitespace-nowrap">Account Name:</span>
                    <span className="font-bold text-right leading-tight">ECONSTRUCT DESIGN & BUILD PVT LTD.</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 border-b border-white/5 pb-2">
                    <span className="text-gray-400 font-medium whitespace-nowrap">IFSC Code:</span>
                    <span className="font-bold">HDFC0009196</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 border-b border-white/5 pb-2">
                    <span className="text-gray-400 font-medium whitespace-nowrap">SWIFT Code:</span>
                    <span className="font-bold">HDFCINBBNG</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5 pt-0.5">
                    <span className="text-gray-400 font-medium whitespace-nowrap">Branch:</span>
                    <span className="font-bold">Harlur Road, Bangalore</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-xs mb-2.5">Please share the payment screenshot to the following contact numbers:</p>
                <div className="flex flex-wrap gap-2.5">
                  {["+91 9036744017", "+91 7259921111"].map(num => (
                    <span key={num} className="bg-white/10 text-white font-bold py-1.5 px-3 rounded-lg border border-white/10 text-xs flex items-center gap-1.5">
                      <Phone size={12} /> {num}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-white/10 text-center">
                <p className="text-gray-400 text-xs mb-2.5 font-medium uppercase tracking-wider">Payment Methods Supported</p>
                <div className="flex flex-wrap justify-center gap-2 text-white font-bold text-xs">
                  <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">NEFT</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">IMPS</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded border border-white/10">RTGS</span>
                  <span className="bg-[#fbc02d] text-slate-900 px-2.5 py-1 rounded">UPI / GPay</span>
                </div>
              </div>
            </div>

            {/* Information & QR Notice */}
            <div className="flex flex-col justify-between h-full space-y-4">
              <div className="bg-amber-50 rounded-xl p-4 border-l-4 border-[#fbc02d]">
                <h4 className="text-amber-900 font-black text-sm mb-1 flex items-center gap-1.5"><span className="text-lg">⚠️</span> Important Notice</h4>
                <p className="text-amber-800 text-xs sm:text-sm font-medium leading-relaxed">Please take admission <strong className="font-black underline decoration-[#fbc02d] decoration-2">at least 2 months before</strong> the batch starting date to confirm seat allotment.</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {['Priority Seat Access', 'Pre-Batch Preparation', 'Limited Batch Size', 'Smooth Onboarding'].map(item => (
                  <div key={item} className="bg-white p-3 rounded-lg border border-gray-100 flex items-center gap-2 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    <span className="font-bold text-gray-800 text-xs">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.15)] relative overflow-hidden group flex flex-col sm:flex-row items-center gap-5">
                <div
                  onClick={() => setIsQrExpanded(true)}
                  className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white p-1.5 rounded-lg shadow-md ring-2 ring-white/10 z-10 hover:scale-[1.04] transition-all cursor-pointer relative group/qr overflow-hidden"
                  title="Click to expand QR Code"
                >
                  <img src="/qr.webp" alt="Econstruct QR Code" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover/qr:opacity-100 transition-opacity rounded-lg flex items-center justify-center backdrop-blur-[2px]">
                    <span className="bg-yellow-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full shadow flex items-center gap-1">
                      <Maximize2 className="w-2.5 h-2.5" /> Expand
                    </span>
                  </div>
                </div>

                {/* Expanded QR Modal Lightbox */}
                <AnimatePresence>
                  {isQrExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsQrExpanded(false)}
                      className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-zoom-out"
                    >
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-3xl p-5 sm:p-7 max-w-sm sm:max-w-md w-full border border-slate-200 shadow-2xl relative text-center cursor-default my-auto max-h-[92vh] flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2 pr-8 relative">
                          <div className="text-left">
                            <span className="bg-yellow-500/10 text-yellow-700 border border-yellow-500/30 text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block mb-1">
                              Official Merchant QR
                            </span>
                            <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-tight">ECONSTRUCT DESIGN & BUILD</h3>
                            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Scan using any UPI App (GPay, PhonePe, Paytm, BHIM)</p>
                          </div>
                          <button
                            onClick={() => setIsQrExpanded(false)}
                            className="absolute top-0 right-0 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors shadow-sm shrink-0"
                            title="Close"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200 my-2 flex items-center justify-center shadow-inner overflow-hidden">
                          <img
                            src="/qr.webp"
                            alt="Payment QR Code Expanded"
                            className="max-h-[50vh] sm:max-h-[56vh] w-auto mx-auto object-contain rounded-xl shadow-sm"
                          />
                        </div>

                        <p className="text-[11px] text-slate-400 font-medium mt-1">Click anywhere outside or tap ✕ to close</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="text-center sm:text-left z-10">
                  <h3 className="text-base sm:text-lg font-black mb-1.5 leading-snug">
                    This is ON-THE-JOB Learning <br />
                    <span className="text-[#fbc02d]">12 Months Training + 12 Months Internship</span>
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                    Step out of traditional classrooms and gain 24 months of genuine engineering experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-stone-50 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <motion.div {...fin} className="lg:w-2/5 shrink-0 lg:sticky lg:top-24 self-start">
              <Label>FAQ</Label>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-black tracking-tight mb-2.5">
                Frequently<br />Asked <span className="accent-text italic">Questions</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">Common questions about the PG Diploma in Entrepreneurship in Structures, BIM and Project Management program.</p>
              <Btn href="#enrollment">Still Have Questions?</Btn>
            </motion.div>
            <div className="flex-1 border-t border-gray-200">
              {faqs.map((faq, i) => {
                const open = openFaq === i;
                return (
                  <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.03}s` }} className="border-b border-gray-200">
                    <button onClick={() => setOpenFaq(open ? null : i)}
                      className="w-full py-3.5 text-left flex items-center justify-between gap-3 focus:outline-none group">
                      <span className={`font-semibold text-xs sm:text-sm md:text-base transition-colors duration-200 ${open ? 'text-yellow-600' : 'text-black group-hover:text-yellow-600'}`}>{faq.q}</span>
                      <div className={`shrink-0 w-6 h-6 flex items-center justify-center transition-all duration-300 ${open ? 'bg-yellow-500 text-black rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-yellow-500 group-hover:text-black'}`}>
                        <ChevronDown size={14} />
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-64 pb-3.5 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed whitespace-pre-line">{faq.a}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/prj6.jpg" alt="" className="w-full h-full object-cover brightness-[0.35] saturate-[0.6]" />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-500" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:max-w-xl">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                <span className="text-yellow-500 uppercase tracking-[0.25em] text-[11px] font-bold">12 Months Training + 12 Months Internship</span>
              </div>
              <h2 className="font-medium text-white tracking-tight leading-tight mb-2.5"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}>
                Ready to Transform<br /><span className="accent-text italic">Your Career?</span>
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Join 2,000+ graduates who have already built successful careers through our 24-month on-job learning program.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex flex-col items-center lg:items-end gap-3.5 shrink-0">
              <Btn href="#enrollment">Apply Now — 21st Sept 2026</Btn>
              <div className="flex gap-4">
                {['+91 90367 44017', '+91 72592 22888'].map(n => (
                  <a key={n} href={`https://wa.me/${n.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1 text-white/40 text-[11px] font-semibold hover:text-white transition-colors">
                    <Phone className="w-3 h-3" />{n}
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

export default BimHubMSC;
