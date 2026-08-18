import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import AwardsMediaShowcase from '../components/AwardsMediaShowcase';
import StudentVideoReviewsShowcase from '../components/StudentVideoReviewsShowcase';
import SiteVisitsScroller from '../components/SiteVisitsScroller';
import {
  Clock, Calendar, Monitor, BookOpen, Award, Briefcase,
  Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight,
  CheckCircle, ChevronDown, ArrowRight, Phone, MapPin,
  Play, TrendingUp, Building2, Zap, GraduationCap, Globe,
  Star, Quote, CheckCircle2, X, Check, FileText, Layers, ShieldCheck, Sparkles, Target, Flame, Heart,
  Copy, ExternalLink, QrCode, MessageCircle, Maximize2
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

/* ── Yellow / Dark CTA button ─────────────────────────────────────── */
const Btn = ({ href, children, dark = false, onClick, className = '' }) => {
  if (href) {
    return (
      <a href={href} onClick={onClick}
        className={`group relative inline-block px-7 py-3.5 overflow-hidden transition-all active:scale-95 text-center text-sm font-black uppercase tracking-wider ${dark ? 'bg-slate-900 text-white' : 'bg-yellow-500 text-black'} ${className}`}>
        <span className="relative z-10">{children}</span>
        <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${dark ? 'bg-yellow-500' : 'bg-black'}`} />
        <span className={`absolute inset-0 z-10 flex items-center justify-center text-sm font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${dark ? 'text-black' : 'text-white'}`}>{children}</span>
      </a>
    );
  }
  return (
    <button onClick={onClick}
      className={`group relative inline-block px-7 py-3.5 overflow-hidden transition-all active:scale-95 text-center text-sm font-black uppercase tracking-wider ${dark ? 'bg-slate-900 text-white' : 'bg-yellow-500 text-black'} ${className}`}>
      <span className="relative z-10">{children}</span>
      <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${dark ? 'bg-yellow-500' : 'bg-black'}`} />
      <span className={`absolute inset-0 z-10 flex items-center justify-center text-sm font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${dark ? 'text-black' : 'text-white'}`}>{children}</span>
    </button>
  );
};

const BimHubMSS = () => {
  // Gallery slider images for portfolio showcase
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
  const [portfolioSlide, setPortfolioSlide] = useState(0);
  const prevPortfolioSlide = () => setPortfolioSlide(p => (p === 0 ? sliderImages.length - 1 : p - 1));
  const nextPortfolioSlide = () => setPortfolioSlide(p => (p === sliderImages.length - 1 ? 0 : p + 1));

  useEffect(() => {
    const t = setInterval(() => setPortfolioSlide(p => (p + 1) % sliderImages.length), 4200);
    return () => clearInterval(t);
  }, [sliderImages.length]);

  const [copiedField, setCopiedField] = useState(null);
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

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedField(key);
    setTimeout(() => setCopiedField(null), 2500);
  };

  // Real Live Student Portfolio Documents / Videos for MSS
  const portfolioPdfs = [
    {
      id: 'pdf-1',
      title: 'Structural Design & Analysis Deliverable Annexure',
      desc: 'Watch the video presentation of high-rise ETABS structural model calculations, foundation design, and IS Code compliance reports.',
      type: 'video',
      videoUrl: 'https://youtu.be/6uyEIqfpqR4?si=-gR4CPEo5eTnK4Zv',
      embedUrl: 'https://www.youtube.com/embed/6uyEIqfpqR4',
      badge: 'Structural Deliverable'
    },
    {
      id: 'pdf-2',
      title: 'Luxury Villa Structural & BIM Portfolio (Part 1)',
      desc: 'Architectural centerline plans, structural framing layouts, and concrete quantity estimation.',
      pdfUrl: '/pdfs/Luxury-Villa-2.pdf',
      badge: 'Villa Portfolio · Part 1'
    },
    {
      id: 'pdf-3',
      title: 'Luxury Villa Structural & BIM Portfolio (Part 2)',
      desc: 'Reinforcement detailing, SAFE mat foundation analysis, and 3D structural model documentation.',
      pdfUrl: '/pdfs/Luxury-Villa-3.pdf',
      badge: 'Villa Portfolio · Part 2'
    },
    {
      id: 'pdf-4',
      title: 'Comprehensive Structural Engineering Portfolio & Course Syllabus',
      desc: 'Detailed breakdown of 10+ structural software modules, live project challenges, and interview preparation.',
      pdfUrl: '/pdfs/Details-of-BIM-Course.pdf',
      badge: 'Course Specification'
    }
  ];
  const [activePdf, setActivePdf] = useState(0);

  // Live Project Competition Videos
  const competitionVideos = [
    { title: 'Technical Live Project Competition Overview', src: 'https://www.youtube.com/embed/4V-mT1ISo90?si=8jFBhtkVt_QD23TB', dur: '12:04' },
    { title: 'Team Presentations & Structural Solutions', src: 'https://www.youtube.com/embed/1jePd-E4ZEc?si=W545dJrmLDm5NdyU', dur: '08:15' },
    { title: 'Structural Analysis Highlights & Defense', src: 'https://www.youtube.com/embed/QA8dxpyk8iI?si=aTsCZCz_Jb-ilnnd', dur: '15:30' },
    { title: 'Award Ceremony & Closing Presentations', src: 'https://www.youtube.com/embed/oBZ_4zm7VeM?si=GD2fxp24f4ct17Ie', dur: '05:45' },
  ];
  const [activePlaylistItem, setActivePlaylistItem] = useState(0);

  // Official FAQs directly from live website
  const faqs = [
    { q: 'What is the duration of the course?', a: 'The duration is 12 months for both Online & Offline courses. This is an ON-JOB learning program where you get the opportunity to work on real Live Projects with our technical team. Duration may vary slightly depending on your allotted project and overall performance. Note: Long holidays are not permitted during the course as you are involved in real client projects.' },
    { q: 'When does the next batch start?', a: 'The next batch starts on 21st Sept 2026. Both Online and Offline batches start on the same day.' },
    { q: 'What are the session timings?', a: 'For Online Students: You learn through pre-recorded videos with access to live session recordings. You are welcome to join live sessions.\nFor Offline Students: You report to the office premises from 8:55 am to 7:00 pm (minimum 7 to 8 hours daily, Monday to Friday) for on-job practice. Biometric attendance is enforced.' },
    { q: 'Who can join this course?', a: 'Polytechnic Diploma (Civil Engineering), B.Tech / B.E (Civil Engineering), M.Tech / M.E (Structural Engineering), CAD Structures.' },
    { q: 'What candidate qualities (3 P\'s) are required?', a: '1. Passion for Structural Engineering — Key to a successful structural design career.\n2. Patience to learn — Structural engineering requires patience to master codes & software.\n3. Practice — Constant practice is required to gain expertise on live projects.' },
    { q: 'What learning activities are included in the program?', a: 'Activities include:\n• 48-hr Group Structural Challenge\n• 24-hr Individual Live Project Challenge\n• MASS Mock Technical Interviews\n• Tuesday Code Reading & Analysis\n• Weekly Objective & Concept Tests\n• Monthly Comprehensive Project Reviews' },
    {
      q: 'What is the Evaluation & Exam Pattern (800 Marks Total)?',
      type: 'examPattern',
      a: 'Certification and 12-month work experience letter are awarded upon clearing the 800-mark evaluation criteria:\n\n• Written Technical Test (200 Marks): Structural theory, IS codes & mechanics concepts\n• Practical Exam on Live Project (200 Marks): ETABS modeling, loading & rebar detailing\n• Technical Interview (200 Marks): Panel interview with principal structural engineer\n• Assignments & Attendance (200 Marks): 80% min attendance, habits & project annexures\n\n* Note: Econstruct will prepare you for the final examination right from Day 1, so do not worry! We conduct multiple technical mock interviews and regular reviews throughout the course for a superior student experience.'
    },
    { q: 'What certification & experience letter will I receive?', a: 'Upon successful exam completion, you receive:\n• Working experience letter of 12 months\n• PG Diploma Certification of 12 months issued by Econstruct Design & Build Pvt Ltd\n• Professional Portfolio creation assistance\n• Visual / Video resume building guidance\n• Formals photoshoot for LinkedIn profile & resume' },
    { q: 'How does 100% Placement Assistance work?', a: 'Our placement Strategy includes imparting technical skills + real project experience + portfolio creation + 12 months experience letter to remove freshers tag. Upon exam completion, candidates get minimum 6–8 genuine interview opportunities in India, UAE, and Oman.' },
    {
      q: 'What is the fee structure & payment policy?',
      type: 'feeStructure',
      a: 'Total Programme Fee: ₹3,50,000/- (Inclusive of 18% GST)\n\n• Base Programme Fee: ₹2,96,610/-\n• GST @ 18%: ₹53,390/-\n• Total Fee (Inclusive of GST): ₹3,50,000/-\n\nThe above fee is inclusive of all applicable GST and represents the complete programme fee for the PG Diploma in Structural Engineering.\n\nFees need to be paid upfront; maximum 2 installments can be approved by the admission counselor. Fee is strictly non-refundable & non-transferable.'
    },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  // Official 10 Software Tools Stack from live site
  const softwares = [
    { name: 'ETABS Basic', level: 'Fundamental', desc: '3D structural modeling & gravity load analysis' },
    { name: 'ETABS Advance', level: 'Mastery', desc: 'Dynamic seismic, wind & high-rise non-linear analysis' },
    { name: 'STAADPro', level: 'Core', desc: 'Steel & concrete frame analysis per IS / AISC codes' },
    { name: 'SAFE', level: 'Specialist', desc: 'Slab, mat & post-tensioned foundation design' },
    { name: 'SAP2000', level: 'Advanced', desc: 'Complex structural systems & bridge loading' },
    { name: 'CSI Bridge', level: 'Specialized', desc: 'Parametric bridge modeling & design' },
    { name: 'CSI Detailer', level: 'Detailing', desc: 'Automated rebar generation & CAD exports' },
    { name: 'RCDC', level: 'Execution', desc: 'Automatic structural design & BBS creation' },
    { name: 'Prokon', level: 'Analysis', desc: 'Component analysis & retaining wall design' },
    { name: 'AutoCAD', level: 'Drafting', desc: 'Centerline plans & structural drawing layouts' },
    { name: '40+ Spreadsheets', level: 'Design Tools', desc: 'Custom structural calculation & estimation sheets' },
    { name: 'In-House Software', level: 'Collaboration', desc: 'Internal project management & CRM collaboration platform' }
  ];

  // Modes of Training
  const modes = [
    { n: '01', title: 'Offline', icon: Building2, pts: ['Report to Bangalore HQ (Kudlu) on batch start date.', 'Work Mon–Fri, 8:55 am to 7:00 pm (Biometric access).', 'Live sessions with technical mentors & reporting manager.', 'Real projects — team & individual challenges.', 'Mock technical interviews & daily timesheets.'] },
    { n: '02', title: 'Online — Working Professionals', icon: Monitor, pts: ['Self-paced with pre-recorded videos.', 'Dedicate 2–4 hours per day without leaving current job.', 'Weekly / monthly assignment submissions via portal.', 'Doubt Clearing Sessions (DCS) & 1-on-1 Zoom calls.', 'Minimum 12–15 real projects throughout course.'] },
    { n: '03', title: 'Online — Non-Working', icon: Globe, pts: ['100% online mode replicating office work environment.', 'Dashboard user ID access for assignments & videos.', 'Stay connected via Zoom (9 am to 7 pm, Mon–Fri).', 'Dedicated Doubt Clearing Sessions (DCS).', 'Online mock technical interview rounds.'] },
    { n: '04', title: 'Hybrid', icon: Zap, pts: ['Report to Bangalore HQ for 7, 15, or 30 days at start.', 'Continue online with videos, live sessions, DCS & mocks.', 'Return to Bangalore office for 7, 15, or 30 days near end.', 'Flexibility to work from home between offline sessions.'] },
  ];

  // Program Highlights Posters switcher
  const posterList = [
    { id: 'poster-1', title: 'Program Overview Poster', src: '/MSS new.jpg.jpeg', alt: 'PG Diploma In Structural Engineering Overview Poster' },
    { id: 'poster-2', title: 'Syllabus & Software Poster', src: '/mss2.webp', alt: 'PG Diploma In Structural Engineering Software & Syllabus Poster' }
  ];
  const [activePoster, setActivePoster] = useState(0);

  const fin = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55 } };

  return (
    <div className="bg-white overflow-x-hidden text-slate-900 font-sans">



      {/* ── 01. HERO SECTION ────────────────────────────────────────── */}
      <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-slate-950 flex flex-col justify-between">
        <div className="absolute inset-0">
          <img src="/StructuralDesignConsultancy.jpeg" alt="Structural Engineering Background" className="w-full h-full object-cover brightness-[0.82] saturate-[1.15]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent hidden md:block" />
        </div>

        <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-5 sm:px-10 flex flex-col justify-center pt-24 sm:pt-28 pb-8 flex-1">
          <motion.div initial="i" animate="a" variants={{ a: { transition: { staggerChildren: 0.1 } } }} className="lg:max-w-4xl pt-4">

            {/* Collaboration & Accreditation Showcase */}
            <motion.div variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              
              {/* IIT Bhubaneswar High-Visibility Partnership Card */}
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

              {/* Secondary Trust Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-slate-900/80 backdrop-blur-md text-yellow-400 border border-yellow-500/40 text-[11px] font-extrabold uppercase px-3 py-2 rounded-xl tracking-wider flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-yellow-500" /> ISO 9001:2015
                </span>
                <span className="bg-slate-900/80 backdrop-blur-md text-blue-300 border border-blue-500/40 text-[11px] font-extrabold uppercase px-3 py-2 rounded-xl tracking-wider flex items-center gap-1.5 shadow-md">
                  <Building2 className="w-4 h-4 text-blue-400" /> MSME Certified
                </span>
              </div>
            </motion.div>

            <motion.h1 variants={{ i: { opacity: 0, y: 40 }, a: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.6, 0.05, 0.01, 0.9] } } }}
              className="font-medium text-white tracking-tight leading-[1.1] mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem]">
              PG Diploma In<br /><span className="text-yellow-400 italic font-serif drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">Structural Engineering</span>
            </motion.h1>

            <motion.p variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              ON-JOB Learning Program · Master 10 Structural Tools (ETABS, SAFE, SAP2000, STAADPro, RCDC, CSI Bridge) on real RCC, Steel & Composite high-rise projects.
            </motion.p>

            <motion.div variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-wrap gap-4">
              <Btn href="#apply-now">Apply Now — 21st Sept 2026</Btn>
              <a href="#program-video" className="px-7 py-3.5 border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all inline-flex items-center gap-2">
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
                { to: '12', s: ' Months', label: 'Duration (ON-JOB)', icon: Clock },
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

      {/* ── 02. DETAILED PROGRAM VIDEO ─────────────────────────────── */}
      <section id="program-video" className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <motion.div {...fin} className="lg:col-span-5 flex flex-col justify-center">
              <Label>02 · Program Detailed Video</Label>
              <h2 className="text-3xl sm:text-4xl xl:text-[44px] font-black text-slate-900 tracking-tight leading-[1.15] mb-4">
                See What <span className="text-yellow-600 italic font-serif">PG Diploma in Structural Engg</span> Is All About
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Watch how our hands-on structural engineering curriculum bridges the gap between college theory and real consultancy work.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  'Live Project Execution (CLP to GFC)',
                  'Industry-Grade ETABS, SAFE & REVIT Workflow',
                  '100% Placement & Technical Interview Prep'
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-semibold">
                    <div className="w-5 h-5 rounded-full bg-yellow-500/20 text-yellow-600 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div>
                <a
                  href="#training-details"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-950 bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  <span>Explore Curriculum Specifications</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Video Player Column */}
            <motion.div {...fin} className="lg:col-span-7">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)] border border-slate-800 bg-slate-950">
                <div className="absolute top-0 left-0 w-24 h-1 bg-yellow-500 z-10" />
                <iframe
                  src="https://www.youtube.com/embed/YkimCw_Nu1M?si=TMB-qf3YXr24j9-r"
                  className="w-full h-full border-0"
                  title="PG Diploma In Structural Engineering Overview Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 03. TRAINING DETAILS – DURATION, SOFTWARE, CURRICULUM ─── */}
      <section id="training-details" className="py-16 md:py-24 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-12">
            <Label>03 · Training Specifications</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Duration, Software & <span className="text-yellow-600 italic font-serif">Curriculum</span>
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mt-3">
              Comprehensive structural engineering program structured specifically to build design confidence on real live projects.
            </p>
          </motion.div>

          {/* Top Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Duration Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-lg text-black">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">Duration & Batch</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-1">12 Months</h3>
                <p className="text-yellow-500 font-semibold text-sm mb-6">ON-JOB Learning Program (Until Placed)</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Hands-on training working on real RCC, Steel, and Composite structure projects up to G+62 stories.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm">
                <span className="text-gray-400">Next Batch Starts:</span>
                <span className="text-yellow-400 font-bold">21st Sept 2026</span>
              </div>
            </div>

            {/* Program Features Card */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-lg text-yellow-500">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Program Perks</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Learning Infrastructure</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    ['750+', 'Hours Video'],
                    ['1000+', 'Technical Books'],
                    ['24/7', 'Library Access'],
                    ['G+62', 'Story Height'],
                  ].map(([v, l]) => (
                    <div key={l} className="bg-slate-50 p-3 rounded-xl border border-gray-100">
                      <div className="text-lg font-black text-slate-900">{v}</div>
                      <div className="text-[11px] text-gray-500 uppercase font-bold tracking-wider mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-500 font-medium">Includes 48-hr Group & 24-hr Individual challenges</div>
            </div>

            {/* Certificate Card */}
            <div className="bg-yellow-500 text-slate-900 rounded-2xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-lg text-yellow-500">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-900/60">Certification</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-slate-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-md border border-slate-800">
                    <img src="/iit-bhubaneswar-crest.png" alt="IIT Bhubaneswar" className="w-8 h-8 object-contain bg-white rounded-lg p-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] text-yellow-400 font-extrabold uppercase leading-none">In Association With</div>
                      <div className="text-xs font-black text-white leading-tight mt-0.5">IIT Bhubaneswar</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black mb-4">Industry Credentials</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    '12 Months Official Work Experience Letter',
                    'PG Diploma Certification by IIT Bhubaneswar & Econstruct',
                    'Professional Portfolio Assistance',
                    'LinkedIn Photoshoot & Video Resume',
                    '100% Core Technical Placement Support'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-bold">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-900/70 border-t border-slate-900/10 pt-3">Recognized Across AEC Industry</span>
            </div>
          </div>

          {/* Software Stack Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm mb-12">
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Software Tools Stack (10 Tools + 40+ Spreadsheets)</h3>
                <p className="text-gray-500 text-sm mt-1">Master industry-standard structural analysis & design tools used by principal consultancies.</p>
              </div>
              <span className="bg-yellow-500/20 text-yellow-700 text-xs font-extrabold uppercase px-4 py-2 rounded-full w-max">
                Hands-On Practical Training
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {softwares.map((sw, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:border-yellow-500/50 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-extrabold text-slate-900 text-base">{sw.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-700">{sw.level}</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{sw.desc}</p>
                </div>
              ))}
            </div>
          </div>


          {/* Design Codes Standards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-sm">IS</span>
                Indian Standard Codes (IS Codes)
              </h4>
              <div className="space-y-3">
                {[
                  { code: 'IS-456 2000', title: 'Code of Practice for Plain and Reinforced Concrete' },
                  { code: 'IS-800 2007', title: 'General Construction In Steel — Code of Practice' },
                  { code: 'IS-1893 2016', title: 'Criteria for Earthquake Resistant Design of Structures' },
                  { code: 'IS-13920 2016', title: 'Ductile Design and Detailing of Reinforced Concrete' },
                  { code: 'IS-16700 2017', title: 'Criteria for Design of High Rise Concrete Buildings' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-gray-100">
                    <span className="bg-slate-900 text-yellow-400 text-xs font-bold px-2.5 py-1 rounded shrink-0">{c.code}</span>
                    <span className="text-slate-700 text-xs font-medium mt-0.5">{c.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold text-sm">INT</span>
                International Structural Codes
              </h4>
              <div className="space-y-3">
                {[
                  { code: 'BS 8110', title: 'Structural Use of Concrete (British Standard)' },
                  { code: 'ACI 318', title: 'Building Code Requirements for Structural Concrete (US Code)' },
                  { code: 'CEB FIP 90', title: 'Model Code for Concrete Structures (European Standard)' },
                  { code: 'UBC 97', title: 'Uniform Building Code for Lateral Force Provisions' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-gray-100">
                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-2.5 py-1 rounded shrink-0">{c.code}</span>
                    <span className="text-slate-700 text-xs font-medium mt-0.5">{c.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 04. PLACEMENT ASSISTANCE & CAREER OPPORTUNITIES ───────── */}
      <section id="placement-assistance" className="relative py-16 md:py-24 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <img src="/prj4.webp" alt="Placement Background" className="w-full h-full object-cover brightness-[0.25] saturate-[0.5]" />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
        <div className="absolute left-0 top-0 w-1 h-full bg-yellow-500" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div {...fin} className="lg:w-5/12 shrink-0">
              <Label>04 · Placement Ecosystem</Label>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                Placement Assistance & <span className="text-yellow-400 italic font-serif">Career Opportunities</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Designed to ensure you excel in core technical interviews and secure high-paying structural design positions across India, UAE, Oman, and internationally.
              </p>

              <div className="bg-slate-800/90 border border-yellow-500/40 p-6 rounded-2xl mb-8 backdrop-blur-md">
                <div className="text-yellow-400 font-extrabold text-xl mb-1">6–8 Genuine Job Interviews</div>
                <div className="text-gray-300 text-sm mb-4 font-medium">100% Placement Support in Structural Consultancies</div>
                <Btn href="#apply-now">Enroll now and get Placed!</Btn>
              </div>
            </motion.div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Mic, label: 'Technical & HR Mock Interviews', desc: 'Rigorous mock interview series conducted by principal structural engineers.' },
                { icon: MessageSquare, label: 'Professional Communication', desc: 'Verbal, technical report writing & client coordination training.' },
                { icon: Users, label: 'Group Discussions', desc: 'Corporate group discussion techniques to express engineering logic with clarity.' },
                { icon: Video, label: 'Video Resume & LinkedIn', desc: 'Build video resumes showcasing your ETABS models and GFC drawing sheets.' },
              ].map((card, i) => (
                <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.08}s` }}
                  className="bg-slate-800/80 border border-white/10 p-6 rounded-2xl hover:border-yellow-500/50 hover:bg-slate-800 transition-all duration-300">
                  <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-xl mb-4 shrink-0 text-black">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{card.label}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 05. HOW YOUR PORTFOLIO WILL LOOK ───────────────────────── */}
      <section id="portfolio-showcase" className="py-12 md:py-16 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector Column */}
            <motion.div {...fin} className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <Label>05 · Portfolio Showcase</Label>
                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-tight mb-3">
                  How Your Portfolio Will Look <span className="text-yellow-600 italic font-serif">After Training</span>
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Explore authentic student portfolios to get a clear idea of what your structural engineering deliverables will look like after completing the program.
                </p>
              </div>

              {/* Vertical Card Selectors */}
              <div className="space-y-2.5">
                {portfolioPdfs.map((doc, idx) => (
                  <button
                    key={doc.id}
                    onClick={() => setActivePdf(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all duration-300 border flex items-center gap-3.5 ${
                      activePdf === idx
                        ? 'bg-slate-900 text-white border-slate-800 shadow-xl ring-2 ring-yellow-500/50 scale-[1.01]'
                        : 'bg-slate-50 text-slate-700 border-gray-200 hover:bg-slate-100 hover:border-gray-300'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      activePdf === idx ? 'bg-yellow-500 text-slate-950 font-bold shadow-sm' : 'bg-white border border-gray-200 text-slate-600'
                    }`}>
                      {doc.type === 'video' ? <Video className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-xs font-extrabold truncate ${activePdf === idx ? 'text-yellow-400' : 'text-slate-900'}`}>
                        {doc.badge}
                      </div>
                      <div className={`text-[11px] truncate mt-0.5 ${activePdf === idx ? 'text-gray-300' : 'text-gray-500'}`}>
                        {doc.title}
                      </div>
                    </div>
                    {activePdf === idx && <ChevronRight className="w-4 h-4 text-yellow-400 shrink-0" />}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right Active Viewer Column */}
            <motion.div {...fin} className="lg:col-span-8">
              <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 border border-slate-800 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
                  <div className="min-w-0">
                    <span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                      {portfolioPdfs[activePdf].badge}
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-white tracking-tight truncate">
                      {portfolioPdfs[activePdf].title}
                    </h3>
                  </div>

                  <div className="shrink-0">
                    {portfolioPdfs[activePdf].type === 'video' ? (
                      <a
                        href={portfolioPdfs[activePdf].videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-xl transition-all shadow-md inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Watch on YouTube
                      </a>
                    ) : (
                      <a
                        href={portfolioPdfs[activePdf].pdfUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-xl transition-all shadow-md inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Open Full PDF
                      </a>
                    )}
                  </div>
                </div>

                {/* Embedded Viewer Container */}
                <div className={`w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative ${
                  portfolioPdfs[activePdf].type === 'video'
                    ? 'aspect-video'
                    : 'h-[440px] sm:h-[480px] lg:h-[500px]'
                }`}>
                  {portfolioPdfs[activePdf].type === 'video' ? (
                    <iframe
                      src={portfolioPdfs[activePdf].embedUrl}
                      title={portfolioPdfs[activePdf].title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <iframe
                      src={`${portfolioPdfs[activePdf].pdfUrl}#toolbar=1`}
                      title={portfolioPdfs[activePdf].title}
                      className="w-full h-full border-0"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 06. CLP TO GFC EXPLANATION ──────────────────────────────── */}
      <section id="clp-to-gfc" className="py-16 md:py-24 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-14">
            <Label>06 · Engineering Workflow</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Experience from <span className="text-yellow-600 italic font-serif">CLP to GFC</span>
            </h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto mt-3 leading-relaxed">
              Work alongside the Econstruct senior technical team from 9:55 AM to 7:00 PM, Monday to Friday. Master the full journey from initial Center Line Planning to final Good For Construction drawing release.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* CLP Card */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img src="/msc2.webp" alt="Center Line Plan (CLP)" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-slate-900 text-yellow-400 font-extrabold px-4 py-1.5 rounded-full text-xs shadow-md">
                  STAGE 01 · CLP
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Layers size={18} />
                    </span>
                    Center Line Plan (CLP)
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Architectural plan interpretation & grid alignment',
                      'Column location finalization & preliminary orientation',
                      'Beam structural system layout & load path establishment',
                      'Preliminary dimensions and foundation grid planning'
                    ].map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs font-bold text-slate-400 border-t border-gray-100 pt-4 uppercase tracking-wider">
                  Initial Structural Modeling & Grid Setup
                </div>
              </div>
            </div>

            {/* GFC Card */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img src="/msc3.webp" alt="Good for Construction (GFC)" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 font-extrabold px-4 py-1.5 rounded-full text-xs shadow-md">
                  STAGE 02 · GFC
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                      <FileText size={18} />
                    </span>
                    Good for Construction (GFC)
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Final ETABS dynamic analysis & code compliance verification',
                      'Detailed rebar schedule creation & ducting coordination',
                      'Bar Bending Schedule (BBS) generation using RCDC',
                      'Site-ready executable drawings for columns, beams, labs & footing'
                    ].map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs font-bold text-slate-400 border-t border-gray-100 pt-4 uppercase tracking-wider">
                  Final Execution Deliverable & Site Detailing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. PROGRAM HIGHLIGHTS / Core Modules ───────────────── */}
      <section id="program-highlights" className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-10">
            <Label>07 · Program Posters & Details</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Program Highlights & <span className="text-yellow-600 italic font-serif">Core Modules</span>
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto mt-2">
              Select and view complete high-resolution program posters highlighting syllabus, project scale, and structure.
            </p>
          </motion.div>

          {/* Poster Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {posterList.map((poster, idx) => (
              <button
                key={poster.id}
                onClick={() => setActivePoster(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 border ${activePoster === idx
                  ? 'bg-slate-900 text-yellow-400 border-slate-900 shadow-md scale-105'
                  : 'bg-slate-100 text-slate-700 border-gray-200 hover:bg-slate-200'
                  }`}
              >
                {poster.title}
              </button>
            ))}
          </div>

          {/* Active Poster Display */}
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-50 p-4 md:p-8 border border-gray-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={posterList[activePoster].id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                src={posterList[activePoster].src}
                alt={posterList[activePoster].alt}
                className="w-full h-auto object-contain max-h-[1000px] mx-auto rounded-2xl shadow-sm"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 08. REAL SITE VISITS SCROLLER ─────────────────────────── */}
      <SiteVisitsScroller
        badge="PRACTICAL SITE EXPOSURE"
        title="Structural Site Visits"
        highlight="in Action"
        subtitle="Real-world site inspections, RCC casting, steel fabrication & structural auditing visits"
      />

      {/* ── 09. MODE OF TRAINING ────────────────────────────────────── */}
      <section id="mode-of-training" className="py-16 md:py-24 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-12 text-center">
            <Label>08 · Flexible Learning Modes</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Modes of <span className="text-yellow-600 italic font-serif">Training</span>
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto mt-2">
              Choose the learning format that matches your current schedule, location, and career requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {modes.map((m, i) => (
              <motion.div key={i} {...fin} style={{ transitionDelay: `${i * 0.08}s` }}
                className="bg-white rounded-3xl p-7 border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl font-black text-yellow-500/40 group-hover:text-yellow-500 transition-colors">{m.n}</span>
                    <div className="w-px h-8 bg-gray-200" />
                    <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-yellow-400 shrink-0">
                      <m.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-4">{m.title}</h3>
                  <ul className="space-y-2.5 mb-6">
                    {m.pts.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed font-medium">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Mode Option #{m.n}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09. ABOUT THE MENTOR ────────────────────────────────────── */}
      <section id="about-mentor" className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative">
                <img src="https://e-construct.in/wp-content/uploads/2024/08/Media-e1768631671611.jpeg"
                  alt="Mr. Sandeep Pingale" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md rounded-2xl p-4 grid grid-cols-3 divide-x divide-white/20 text-white shadow-lg">
                {[
                  ['20+', 'Years Exp'],
                  ['7000 CR', 'Delivered'],
                  ['G+81', 'Story Height'],
                ].map(([v, l]) => (
                  <div key={l} className="text-center px-2">
                    <div className="text-base font-black text-yellow-400">{v}</div>
                    <div className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="lg:col-span-7">
              <Label>09 · Founder & Principal Mentor</Label>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                About the <span className="text-yellow-600 italic font-serif">Mentor</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-6 border-l-4 border-yellow-500 pl-4">Mr. Sandeep Pingale</h3>

              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Founder & Managing Director of Econstruct Design & Build Pvt Ltd. Returning to India from Dubai in 2010 with vast structural design experience up to G+81 story towers, Mr. Pingale established Econstruct to deliver high-rise RCC, Steel, and Composite structures while bridging the gap between academic education and corporate industry expectations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: GraduationCap, t: 'Unlimited Structural Licence', d: 'Holds Unlimited Structural Licence of High Rise Committee, Mumbai Municipal Corp' },
                  { icon: TrendingUp, t: '7,000 CR Projects Delivered', d: 'Designed & executed 7,000+ Crore worth structural projects in India & Abroad' },
                  { icon: Globe, t: '500+ Technical Workshops', d: 'Delivered technical workshops across PAN India & trained 1,000+ engineers' },
                  { icon: Award, t: 'Founder & Career Coach', d: 'Personal career coach to civil engineers, working professionals & consultants' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl border border-gray-100 bg-slate-50">
                    <div className="w-9 h-9 bg-yellow-500 rounded-lg flex items-center justify-center shrink-0 text-slate-900">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{item.t}</p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 10. ONE-TO-ONE MEETING & MENTORSHIP ─────────────────────── */}
      <section id="mentorship" className="py-16 md:py-24 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500" />

              <Label>10 · Personalized Guidance</Label>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                One-to-One Meeting & <span className="text-yellow-600 italic font-serif">Mentorship</span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed mb-8">
                We understand that every civil engineer's journey is unique. Schedule a 1-on-1 session to address career gaps, salary expectations, and customized skill roadmaps.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Discuss your current career situation & salary expectations',
                  'Identify skill gaps in ETABS, SAFE & structural detailing',
                  'Build a personalized roadmap for core technical placement'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-slate-800 font-bold text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                <div>
                  <h4 className="font-black text-slate-900 mb-1 text-lg">Schedule Your Session</h4>
                  <p className="text-gray-500 font-bold text-xs">Mon–Fri · 10 AM to 7 PM</p>
                </div>
                <Btn href="https://wa.me/919036744017">Book Now!</Btn>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4 border-t border-gray-100 text-xs">
                <div>
                  <span className="font-bold text-gray-400 uppercase tracking-wider block mb-2">WhatsApp Consultation:</span>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://wa.me/919036744017" target="_blank" rel="noreferrer" className="text-slate-900 font-bold hover:text-yellow-600 transition flex items-center gap-1.5">
                      💬 +91 90367 44017
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic / Image Container */}
            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-200 p-4">
              <img src="/msb/career_discussion.png" alt="1-on-1 Mentorship Discussion" className="w-full h-auto object-contain rounded-2xl" />
            </div>

          </div>
        </div>
      </section>

      {/* ── 11. STUDENT FEEDBACK & EXPERIENCE VIDEOS ────────────────── */}
      <StudentVideoReviewsShowcase
        subtitle="Hear directly from our PG Diploma In Structural Engineering (MSS) trainees and alumni placed across India, UAE, Muscat, and London."
      />

      {/* ── 12. LIVE PROJECTS & PRACTICAL EXPOSURE ─────────────────── */}
      <section id="live-projects" className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-10">
            <Label>12 · Practical Challenge</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Live Projects & <span className="text-yellow-400 italic font-serif">Practical Exposure</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mt-2">
              Watch our PG Diploma trainees participate in live structural design competitions and defend their engineering models.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-slate-800 rounded-3xl p-6 border border-slate-700">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden bg-black aspect-video relative">
              <iframe
                src={competitionVideos[activePlaylistItem].src}
                className="absolute inset-0 w-full h-full"
                title={competitionVideos[activePlaylistItem].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className="font-bold text-sm text-yellow-400 flex items-center gap-2">
                  <Video className="w-4 h-4" /> Competition Playlist (10 Videos)
                </span>
                <span className="text-xs text-gray-400">{activePlaylistItem + 1} / {competitionVideos.length}</span>
              </div>

              {competitionVideos.map((video, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePlaylistItem(idx)}
                  className={`text-left p-4 rounded-xl transition-all flex items-start gap-3 ${activePlaylistItem === idx
                    ? 'bg-yellow-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-700/50 hover:bg-slate-700 text-gray-300'
                    }`}
                >
                  <span className="text-xs font-mono font-bold mt-0.5">{idx + 1}</span>
                  <div>
                    <h4 className="text-sm line-clamp-1">{video.title}</h4>
                    <p className={`text-xs mt-1 ${activePlaylistItem === idx ? 'text-slate-800' : 'text-gray-400'}`}>Duration: {video.dur}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. FAQ ─────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 md:py-24 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-12">
            <Label>13 · Got Questions?</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Frequently Asked <span className="text-yellow-600 italic font-serif">Questions</span>
            </h2>
            <p className="text-gray-600 text-base max-w-xl mx-auto mt-2">
              Everything you need to know about the PG Diploma In Structural Engineering program.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base md:text-lg hover:text-yellow-600 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-yellow-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.type === 'examPattern' ? (
                      <div>
                        <p className="text-gray-600 text-xs sm:text-sm mb-4">
                          Certification and 12-month work experience letter are awarded upon clearing the 800-mark evaluation criteria:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mt-2">
                          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-200">
                            <div className="text-xl sm:text-2xl font-black text-yellow-600 mb-1">200 Marks</div>
                            <div className="font-bold text-slate-900 text-sm mb-1">Written Technical Test</div>
                            <div className="text-gray-500 text-xs">Structural theory, IS codes & mechanics concepts</div>
                          </div>
                          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-200">
                            <div className="text-xl sm:text-2xl font-black text-yellow-600 mb-1">200 Marks</div>
                            <div className="font-bold text-slate-900 text-sm mb-1">Practical Exam on Live Project</div>
                            <div className="text-gray-500 text-xs">ETABS modeling, loading & rebar detailing</div>
                          </div>
                          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-200">
                            <div className="text-xl sm:text-2xl font-black text-yellow-600 mb-1">200 Marks</div>
                            <div className="font-bold text-slate-900 text-sm mb-1">Technical Interview</div>
                            <div className="text-gray-500 text-xs">Panel interview with principal structural engineer</div>
                          </div>
                          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-200">
                            <div className="text-xl sm:text-2xl font-black text-yellow-600 mb-1">200 Marks</div>
                            <div className="font-bold text-slate-900 text-sm mb-1">Assignments & Attendance</div>
                            <div className="text-gray-500 text-xs">80% min attendance, habits & project annexures</div>
                          </div>
                        </div>

                        {/* Exam Prep & Mock Interview Reassurance Disclaimer */}
                        <div className="mt-4 p-4 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3.5 shadow-sm">
                          <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-amber-600" />
                          </div>
                          <div>
                            <div className="text-xs font-black uppercase tracking-wider text-amber-900 mb-0.5">
                              Exam Preparation &amp; Mentorship Support
                            </div>
                            <p className="text-xs text-amber-950/85 leading-relaxed font-medium">
                              <strong>Econstruct will prepare you for the final examination right from Day 1</strong> — so you do not need to worry at all! We conduct multiple technical mock interviews, regular practice tests, and guided project reviews throughout the course to ensure maximum student confidence and a superior learning experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : faq.type === 'feeStructure' ? (
                      <div className="space-y-4">
                        <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-gray-400 font-bold uppercase tracking-wider text-xs block">Total Programme Fee</span>
                            <span className="text-2xl sm:text-3xl font-black text-yellow-400">₹3,50,000/-</span>
                            <span className="text-xs text-gray-300 ml-2">(Inclusive of 18% GST)</span>
                          </div>
                          <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-500/30 self-start sm:self-auto">
                            Complete Programme Fee
                          </span>
                        </div>

                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                            <thead>
                              <tr className="bg-slate-100 text-slate-800 border-b border-gray-200">
                                <th className="p-3.5 font-bold">Fee Component</th>
                                <th className="p-3.5 font-bold text-right">Amount</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              <tr>
                                <td className="p-3.5 text-slate-700 font-medium">Base Programme Fee</td>
                                <td className="p-3.5 text-slate-900 font-bold text-right font-mono">₹2,96,610/-</td>
                              </tr>
                              <tr>
                                <td className="p-3.5 text-slate-700 font-medium">GST @ 18%</td>
                                <td className="p-3.5 text-slate-900 font-bold text-right font-mono">₹53,390/-</td>
                              </tr>
                              <tr className="bg-yellow-50 font-bold text-slate-900">
                                <td className="p-3.5 text-yellow-900 font-bold">Total Fee (Inclusive of GST)</td>
                                <td className="p-3.5 text-yellow-900 text-right font-mono text-base font-black">₹3,50,000/-</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm">
                          The above fee is inclusive of all applicable GST and represents the complete programme fee for the PG Diploma in Structural Engineering.
                        </p>

                        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80">
                          <div className="text-xs font-black uppercase tracking-wider text-amber-900 mb-1 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Investment in Your Professional Growth
                          </div>
                          <p className="text-xs text-amber-950 leading-relaxed font-medium">
                            This programme is designed to provide practical, industry-oriented learning, combining structural engineering fundamentals, design knowledge, software skills, codes and standards, and exposure to real-world projects.
                          </p>
                        </div>

                        <p className="text-gray-500 text-xs italic">
                          * Fees need to be paid upfront; maximum 2 installments can be approved by the admission counselor. Fee is strictly non-refundable &amp; non-transferable under any circumstances.
                        </p>
                      </div>
                    ) : (
                      <div className="whitespace-pre-line">{faq.a}</div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. PROGRAM ADMISSION & FEE (COMPACT) ────────────────────── */}
      <section id="apply-now" className="py-10 md:py-14 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-gray-200">
            <div>
              <Label>14 · Program Investment</Label>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Fee Structure & <span className="text-yellow-600 italic font-serif">Inclusions</span>
              </h2>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm font-medium max-w-md">
              Complete 12-Month PG Diploma in Structural Engineering with live high-rise project execution and 100% placement support.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Course Inclusions & Professional Growth */}
            <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border border-blue-200/60">
                    Complete 12-Month Structural Engineering Track
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium">Batch Seats: Limited</span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-3">Course Inclusions & Perks:</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Live project execution up to G+62 stories",
                    "12 Months Official Work Experience Letter",
                    "ETABS, STAADPro, SAFE, SAP2000 & RCDC",
                    "IS Codes (456, 800, 1893, 13920, 16700)",
                    "International codes: ACI 318, BS 8110, UBC 97",
                    "Digital Library — 1000+ Technical Books Access",
                    "100% Placement Assistance & CRM Access",
                    "1-on-1 Senior Consultant Mentorship"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 border border-slate-200/60 rounded-lg p-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-slate-800 font-bold text-xs leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Growth Callout */}
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-900 font-black uppercase tracking-wider text-[11px] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Investment in Your Professional Growth
                  </div>
                  <p className="text-amber-950/90 text-xs leading-relaxed font-medium">
                    This programme is designed to provide practical, industry-oriented learning, combining structural engineering fundamentals, design knowledge, software skills, codes and standards, and exposure to real-world projects.
                  </p>
                </div>
              </div>

              <p className="text-red-500 text-[11px] font-semibold italic mt-3">* Fee is non-refundable & non-transferable under any circumstances.</p>
            </div>

            {/* Right: Pricing Table Card */}
            <div className="lg:col-span-5 bg-slate-950 text-white p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-baseline justify-between gap-2 mb-3">
                  <div>
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-[10px] block">Total Programme Fee</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-yellow-400">₹</span>
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">3,50,000</span>
                      <span className="text-gray-400 text-xs font-bold">/-</span>
                    </div>
                  </div>
                  <span className="bg-yellow-500/15 text-yellow-400 border border-yellow-500/30 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Incl. 18% GST
                  </span>
                </div>

                {/* Structured Fee Table */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 mb-3.5 backdrop-blur-sm text-xs">
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-wider mb-2 pb-1.5 border-b border-white/10 flex justify-between">
                    <span>Fee Component</span>
                    <span>Amount</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-gray-300">
                      <span>Base Programme Fee</span>
                      <span className="font-mono font-bold text-white">₹2,96,610/-</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-300">
                      <span>GST @ 18%</span>
                      <span className="font-mono font-bold text-white">₹53,390/-</span>
                    </div>
                    <div className="flex justify-between items-center text-yellow-400 font-bold border-t border-white/10 pt-2 text-xs sm:text-sm">
                      <span>Total Fee (Inclusive of GST)</span>
                      <span className="font-mono font-black">₹3,50,000/-</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
                  The above fee is inclusive of all applicable GST and represents the complete programme fee for the PG Diploma in Structural Engineering.
                </p>
              </div>

              <a
                href="#enrollment"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black py-3 rounded-xl transition text-center uppercase tracking-widest text-xs shadow-lg block"
              >
                Proceed to Enrollment Steps ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 15. ENROLLMENT PROCESS / STEP-BY-STEP ADMISSION (COMPACT) ── */}
      <section id="enrollment" className="py-10 md:py-14 bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-gray-100">
            <div>
              <Label>15 · Step-by-Step Admission</Label>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Enrollment <span className="text-yellow-600 italic font-serif">Process</span>
              </h2>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm font-medium max-w-md">
              Follow 3 simple steps to register, submit documents, and confirm your seat for the upcoming batch.
            </p>
          </div>

          {/* 3 Step Stepper Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {[
              { step: '01', title: 'Initial Registration', desc: 'Online application & core engineering details' },
              { step: '02', title: 'Document Verification', desc: 'Submit mark sheets, degree/diploma & photo ID' },
              { step: '03', title: 'Payment & Onboarding', desc: 'Fee confirmation, LMS credentials & onboarding kit' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 sm:p-4 flex items-center gap-3.5 hover:border-yellow-400/70 transition-all">
                <span className="w-9 h-9 rounded-xl bg-yellow-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-sm">
                  {s.step}
                </span>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-black text-slate-900 truncate">{s.title}</h4>
                  <p className="text-[11px] text-gray-500 truncate">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Payment Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* Left: Bank Account Details */}
            <div className="lg:col-span-7 bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-yellow-500 text-slate-950 flex items-center justify-center font-black text-sm">₹</div>
                    <div>
                      <h3 className="text-sm sm:text-base font-black text-white leading-tight">Direct Bank Transfer</h3>
                      <p className="text-[11px] text-yellow-400 font-medium">HDFC Corporate Account · Harlur Rd, Bangalore</p>
                    </div>
                  </div>
                  <span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Primary Account
                  </span>
                </div>

                <div className="bg-slate-800/90 border border-slate-700/80 rounded-xl p-3.5 mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {[
                      { label: 'Account Number', value: '50200000209630', key: 'account' },
                      { label: 'Account Name', value: 'ECONSTRUCT DESIGN & BUILD PVT LTD.', key: 'name' },
                      { label: 'IFSC Code', value: 'HDFC0009196', key: 'ifsc' },
                      { label: 'SWIFT Code', value: 'HDFCINBBNG', key: 'swift' },
                    ].map((item) => (
                      <div key={item.key} className="bg-slate-900/60 border border-slate-700/50 p-2.5 rounded-lg flex items-center justify-between gap-2">
                        <div className="min-w-0 flex-1">
                          <span className="text-[10px] text-gray-400 block font-medium uppercase tracking-wider">{item.label}</span>
                          <span className="font-bold text-white font-mono text-xs truncate block">{item.value}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(item.key, item.value)}
                          className="p-1.5 rounded bg-yellow-500/10 hover:bg-yellow-500 hover:text-slate-950 text-yellow-400 text-[10px] font-bold transition-all border border-yellow-500/20 shrink-0"
                          title="Copy to clipboard"
                        >
                          {copiedField === item.key ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-1">
                  <span className="text-[11px] text-gray-400 font-medium">Send payment screenshot to WhatsApp:</span>
                  <div className="flex flex-wrap gap-2">
                    {['+91 90367 44017', '+91 72599 21111'].map((num) => (
                      <a
                        key={num}
                        href={`https://wa.me/${num.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/10 hover:bg-yellow-500 hover:text-slate-950 text-white font-bold text-[11px] py-1 px-2.5 rounded-lg border border-white/10 transition-all flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-400" />
                        <span>{num}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                <span className="text-gray-400 font-medium">Supported Modes:</span>
                <div className="flex gap-1.5">
                  {['NEFT', 'IMPS', 'RTGS', 'UPI'].map((m) => (
                    <span key={m} className="bg-white/5 border border-white/10 text-yellow-400 font-bold px-2 py-0.5 rounded text-[10px]">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Compact UPI QR Card */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-sm">
              <div>
                <div className="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-4 shadow-sm mb-3">
                  <div
                    onClick={() => setIsQrExpanded(true)}
                    className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 bg-white p-1 rounded-lg border border-slate-200 shadow-sm flex items-center justify-center hover:scale-[1.03] transition-all cursor-pointer group relative overflow-hidden"
                    title="Click to expand QR"
                  >
                    <img src="/qr.webp" alt="Payment QR Code" className="w-full h-full object-contain" />
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center backdrop-blur-[1px]">
                      <span className="bg-yellow-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Maximize2 className="w-2.5 h-2.5" /> Zoom
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="bg-yellow-500/10 text-yellow-800 text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider inline-block mb-1">
                      UPI Merchant QR
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight mb-1">
                      ECONSTRUCT DESIGN & BUILD
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-tight mb-2">Scan with GPay, PhonePe, Paytm, BHIM</p>
                    <button
                      onClick={() => setIsQrExpanded(true)}
                      className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-yellow-50 hover:border-yellow-300 transition-colors px-2.5 py-1 rounded-md border border-slate-200 text-[11px] font-bold text-slate-800"
                    >
                      <QrCode className="w-3 h-3 text-yellow-600" /> Click to Zoom
                    </button>
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
              </div>

              <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-slate-200/80 text-[11px]">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <MapPin className="w-3.5 h-3.5 text-slate-900 shrink-0" />
                  <span className="truncate">Bangalore HQ · </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Econstruct+Bangalore"
                  target="_blank"
                  rel="noreferrer"
                  className="text-yellow-600 hover:underline font-bold shrink-0 flex items-center gap-0.5 text-[11px]"
                >
                  Maps <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS, MAGAZINE & NEWSLETTER HIGHLIGHT ───────────────── */}
      <AwardsMediaShowcase />

      {/* ── 16. READY TO TRANSFORM YOUR CAREER? ────────────────────── */}
      <section id="final-cta" className="relative py-20 md:py-28 overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img src="/prj6.jpg" alt="Final Banner Background" className="w-full h-full object-cover brightness-[0.3] saturate-[0.7]" />
          <div className="absolute inset-0 bg-slate-950/85" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-yellow-500" />
                <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs font-bold">16 · Final Step</span>
              </div>
              <h2 className="font-medium text-white tracking-tight leading-tight mb-4"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
                Ready to Transform<br /><span className="text-yellow-500 italic font-serif">Your Career?</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Join 2,000+ structural engineers who have successfully launched high-growth careers in top engineering consultancies.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex flex-col items-center lg:items-end gap-5 shrink-0">
              <Btn href="https://wa.me/919036744017">Apply Now — 21st Sept 2026 Batch</Btn>
              <div className="flex gap-6">
                {['+91 90367 44017', '+91 72599 21111'].map(n => (
                  <a key={n} href={`https://wa.me/${n.replace(/\D/g, '')}`} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 text-gray-400 text-xs font-semibold hover:text-yellow-400 transition">
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

export default BimHubMSS;
