import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SiteVisitsScroller from '../components/SiteVisitsScroller';
import StudentVideoReviewsShowcase from '../components/StudentVideoReviewsShowcase';
import AwardsMediaShowcase from '../components/AwardsMediaShowcase';
import {
  Clock, Calendar, Monitor, BookOpen, Award, Briefcase,
  Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight,
  CheckCircle, ChevronDown, ArrowRight, Phone, MapPin,
  Play, TrendingUp, Building2, Zap, GraduationCap, Globe,
  Star, Quote, CheckCircle2, X, Maximize2, QrCode, ShieldCheck, Sparkles,
  Copy, ExternalLink
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
    {
      q: 'What is the fee structure & payment policy?',
      type: 'feeStructure',
      a: 'Total Programme Fee: ₹7,08,000/- (Inclusive of 18% GST)\n\n• Base Programme Fee: ₹6,00,000/-\n• GST @ 18%: ₹1,08,000/-\n• Total Fee (Inclusive of GST): ₹7,08,000/-\n\nInvestment in Your Professional Growth:\nThis comprehensive programme is designed for professionals and aspiring entrepreneurs who want to build expertise across Structural Engineering, BIM Technology, and Project Management, while developing the skills required to establish and successfully manage an engineering and construction-focused business.\n\nThe programme combines technical expertise, BIM workflows, project management, business development, entrepreneurship, leadership, and real-world project exposure to help participants progress from technical professionals to entrepreneurial leaders in the AEC industry.\n\nThe above fee is exclusive of any additional charges not specifically mentioned and is subject to applicable statutory requirements.'
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

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
                <span className="bg-slate-900/80 backdrop-blur-md text-emerald-300 border border-emerald-500/40 text-[11px] font-extrabold uppercase px-3 py-2 rounded-xl tracking-wider flex items-center gap-1.5 shadow-md">
                  <Zap className="w-4 h-4 text-emerald-400" /> 24 Months
                </span>
              </div>
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
              <motion.div {...fin} className="bg-yellow-500 p-6 md:p-7 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3.5 flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 bg-black flex items-center justify-center shrink-0">
                      <Award className="w-3.5 h-3.5 text-yellow-500" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-black/60">Certification & Credentials</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-black text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-sm border border-black/40">
                    <img src="/iit-bhubaneswar-crest.png" alt="IIT Bhubaneswar" className="w-8 h-8 object-contain bg-white rounded-lg p-0.5 shrink-0" />
                    <div>
                      <div className="text-[10px] text-yellow-400 font-extrabold uppercase leading-none">In Association With</div>
                      <div className="text-xs font-black text-white leading-tight mt-0.5">IIT Bhubaneswar</div>
                    </div>
                  </div>
                </div>
                <p className="text-black font-bold text-lg sm:text-xl tracking-tight mb-3">24-Month PG Diploma Certification</p>
                <div className="space-y-1.5">
                  {[
                    '24 Months Working Experience Letter',
                    '24 Months PG Diploma Certification by IIT Bhubaneswar & Econstruct',
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

      {/* ── REAL SITE VISITS SCROLLER ────────────────────────────── */}
      <SiteVisitsScroller
        badge="REAL-WORLD CONSTRUCTION EXPOSURE"
        title="Live Project & Site Visits"
        highlight="in Action"
        subtitle="On-site techno-management, site execution, quality inspection & live engineering coordination"
      />

      {/* ── REVAMPED STUDENT REVIEWS / TESTIMONIALS SECTION ─────── */}
      <StudentVideoReviewsShowcase
        subtitle="Hear directly from our PG Diploma in Entrepreneurship in Structures, BIM and Project Management (MSC) trainees and alumni working in top structural design & BIM firms."
      />

      {/* ── POSTERS SHOWCASE ─────────────────────────────────────── */}
      <section className="bg-slate-50 py-6 md:py-8 px-4 md:px-6 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto space-y-6">
          <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.08)] bg-white p-2.5 sm:p-3">
            <img src="/MSC New.jpg.jpeg" alt="MSC Training Poster" className="w-full h-auto object-contain" />
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

      {/* ── PROGRAM ADMISSION & FEE (COMPACT) ────────────────────── */}
      <section id="apply-now" className="py-10 md:py-14 bg-slate-50 border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-gray-200">
            <div>
              <Label>Program Investment</Label>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Fee Structure & <span className="text-yellow-600 italic font-serif">Inclusions</span>
              </h2>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm font-medium max-w-md">
              Complete 24-Month PG Diploma (12M Training + 12M Internship) with full Structures, BIM, Project Management & Business Setup.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Course Inclusions & Professional Growth */}
            <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-blue-50 text-blue-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border border-blue-200/60">
                    Complete 24-Month Track (12M Training + 12M Internship)
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium">Batch Seats: Limited</span>
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 mb-3">Course Inclusions & Perks:</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                  {[
                    "Live project exposure on high-rise structures up to G+62 stories",
                    "Complete 5D BIM Mastery (REVIT Arch/Struct/MEP, Synchro, Navisworks)",
                    "Project Management & Scheduling (Primavera P6, BOQ, Billing)",
                    "24 Months Official Work Experience Letter & PG Diploma Certification",
                    "Techno-Entrepreneurship & Engineering Firm Business Setup Blueprint",
                    "IS & International Codes (ACI 318, BS 8110, UBC 97)",
                    "Digital Library — 1000+ Technical Books & 40+ Spreadsheets Access",
                    "100% Placement Assistance Support, Portfolio Building & CRM Access"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 bg-slate-50 border border-slate-200/60 rounded-lg p-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-slate-800 font-bold text-xs leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Growth Callout */}
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs space-y-2">
                  <div className="flex items-center gap-1.5 text-amber-900 font-black uppercase tracking-wider text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Investment in Your Professional Growth
                  </div>
                  <p className="text-amber-950/90 text-xs leading-relaxed font-medium">
                    This comprehensive programme is designed for professionals and aspiring entrepreneurs who want to build expertise across Structural Engineering, BIM Technology, and Project Management, while developing the skills required to establish and successfully manage an engineering and construction-focused business.
                  </p>
                  <p className="text-amber-950/80 text-xs leading-relaxed font-medium">
                    The programme combines technical expertise, BIM workflows, project management, business development, entrepreneurship, leadership, and real-world project exposure to help participants progress from technical professionals to entrepreneurial leaders in the AEC industry.
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
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">7,08,000</span>
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
                      <span className="font-mono font-bold text-white">₹6,00,000/-</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-300">
                      <span>GST @ 18%</span>
                      <span className="font-mono font-bold text-white">₹1,08,000/-</span>
                    </div>
                    <div className="flex justify-between items-center text-yellow-400 font-bold border-t border-white/10 pt-2 text-xs sm:text-sm">
                      <span>Total Fee (Inclusive of GST)</span>
                      <span className="font-mono font-black">₹7,08,000/-</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
                  The above fee is exclusive of any additional charges not specifically mentioned and is subject to applicable statutory requirements.
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

      {/* ── ENROLLMENT PROCESS & PAYMENT DETAILS (COMPACT) ─────────── */}
      <section id="enrollment" className="py-10 md:py-14 bg-white border-t border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-gray-100">
            <div>
              <Label>Admission</Label>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Enrollment <span className="text-yellow-600 italic font-serif">Process</span>
              </h2>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm font-medium max-w-md">
              Complete your registration, academic evaluation, and direct payment in 3 simple steps.
            </p>
          </div>

          {/* 3 Step Stepper Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {[
              { step: '01', title: 'Initial Registration', desc: 'Online application & profile submission' },
              { step: '02', title: 'Document Evaluation', desc: 'Certificates & academic background review' },
              { step: '03', title: 'Payment & Onboarding', desc: 'Fee confirmation & 24-Month LMS onboarding' },
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
                          onClick={() => {
                            navigator.clipboard.writeText(item.value);
                            setCopiedField(item.key);
                            setTimeout(() => setCopiedField(null), 2500);
                          }}
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
                        <Phone className="w-3 h-3 text-emerald-400" />
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
              <Btn href="#apply-now">Still Have Questions?</Btn>
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
                    {open && (
                      <div className="pb-4 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {faq.type === 'feeStructure' ? (
                          <div className="space-y-3.5 mt-2">
                            <div className="p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                              <div>
                                <span className="text-gray-400 font-bold uppercase tracking-wider text-xs block">Total Programme Fee</span>
                                <span className="text-2xl sm:text-3xl font-black text-yellow-400">₹7,08,000/-</span>
                                <span className="text-xs text-gray-300 ml-2">(Inclusive of 18% GST)</span>
                              </div>
                              <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-full border border-yellow-500/30 self-start sm:self-auto">
                                24-Month Track
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
                                    <td className="p-3.5 text-slate-900 font-bold text-right font-mono">₹6,00,000/-</td>
                                  </tr>
                                  <tr>
                                    <td className="p-3.5 text-slate-700 font-medium">GST @ 18%</td>
                                    <td className="p-3.5 text-slate-900 font-bold text-right font-mono">₹1,08,000/-</td>
                                  </tr>
                                  <tr className="bg-yellow-50 font-bold text-slate-900">
                                    <td className="p-3.5 text-yellow-900 font-bold">Total Fee (Inclusive of GST)</td>
                                    <td className="p-3.5 text-yellow-900 text-right font-mono text-base font-black">₹7,08,000/-</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-2">
                              <div className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Investment in Your Professional Growth
                              </div>
                              <p className="text-xs text-amber-950 leading-relaxed font-medium">
                                This comprehensive programme is designed for professionals and aspiring entrepreneurs who want to build expertise across Structural Engineering, BIM Technology, and Project Management, while developing the skills required to establish and successfully manage an engineering and construction-focused business.
                              </p>
                              <p className="text-xs text-amber-950/80 leading-relaxed font-medium">
                                The programme combines technical expertise, BIM workflows, project management, business development, entrepreneurship, leadership, and real-world project exposure to help participants progress from technical professionals to entrepreneurial leaders in the AEC industry.
                              </p>
                            </div>

                            <p className="text-gray-500 text-xs italic">
                              * The above fee is exclusive of any additional charges not specifically mentioned and is subject to applicable statutory requirements. Fee is strictly non-refundable &amp; non-transferable under any circumstances.
                            </p>
                          </div>
                        ) : (
                          <p className="whitespace-pre-line">{faq.a}</p>
                        )}
                      </div>
                    )}
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
                {['+91 90367 44017', '+91 72599 21111'].map(n => (
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
