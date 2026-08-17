import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import AwardsMediaShowcase from '../components/AwardsMediaShowcase';
import StudentVideoReviewsShowcase from '../components/StudentVideoReviewsShowcase';
import {
  Clock, Calendar, Monitor, BookOpen, Award, Briefcase,
  Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight,
  CheckCircle, ChevronDown, ArrowRight, Phone, MapPin,
  Play, TrendingUp, Building2, Zap, GraduationCap, Globe,
  Star, Quote, CheckCircle2, X, FileText, Layers, ShieldCheck, Heart, Flame, Target,
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

const BimHubMSB = () => {
  // Gallery slider images for portfolio showcase
  const sliderImages = [
    '/msb/sr8.webp', '/msb/sr7.webp', '/msb/sr6.webp', '/msb/sr5.webp',
    '/msb/sr4.webp', '/msb/sr3.webp', '/msb/sr2.webp', '/msb/sr1.webp', '/msb/s2.webp',
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

  // Real Live Student Portfolio Documents & Videos
  const portfolioPdfs = [
    {
      id: 'video-1',
      title: 'BIM Trainee Deliverable & Live Project Walkthrough',
      desc: 'Watch the authentic video presentation of live BIM trainee architectural REVIT modeling, 3D coordination, and project execution standards.',
      type: 'video',
      videoUrl: 'https://youtu.be/uFkFN2dDfDk?si=YrbdPicoyy1QJO0I',
      embedUrl: 'https://www.youtube.com/embed/uFkFN2dDfDk',
      badge: 'BIM Trainee Video'
    },
    {
      id: 'pdf-1',
      title: 'Luxury Villa Project Management & BIM Portfolio (Part 1)',
      desc: 'Complete architectural REVIT modeling, GFC drawings, and structural quantity estimation report created by trainees.',
      pdfUrl: '/pdfs/Luxury-Villa-2.pdf',
      badge: 'BIM Portfolio · Part 1'
    },
    {
      id: 'pdf-2',
      title: 'Luxury Villa Project Management & BIM Portfolio (Part 2)',
      desc: 'Advanced 4D Synchro construction sequencing, MEP coordination, and Navisworks clash detection documentation.',
      pdfUrl: '/pdfs/Luxury-Villa-3.pdf',
      badge: 'BIM Portfolio · Part 2'
    },
    {
      id: 'pdf-3',
      title: 'PG Diploma in Project Management with BIM Technology Syllabus Specification',
      desc: 'Detailed course structure, practical project milestones, and software tool modules.',
      pdfUrl: '/pdfs/Details-of-BIM-Course.pdf',
      badge: 'Course Specification'
    },
    {
      id: 'pdf-4',
      title: 'Econstruct Comprehensive BIM Engineering Deliverables',
      desc: 'High-rise structural analysis, Primavera P6 scheduling, and client submission annexures.',
      pdfUrl: '/pdfs/econstruct_bim.pdf',
      badge: 'Full Student Annexure'
    }
  ];
  const [activePdf, setActivePdf] = useState(0);

  // Live Project Competition Videos
  const competitionVideos = [
    { title: 'Technical Live Project Competition Overview', src: 'https://www.youtube.com/embed/4V-mT1ISo90?si=8jFBhtkVt_QD23TB', dur: '12:04' },
    { title: 'Team Presentations & BIM Solutions', src: 'https://www.youtube.com/embed/1jePd-E4ZEc?si=W545dJrmLDm5NdyU', dur: '08:15' },
    { title: 'BIM Clash Detection Highlights & Defense', src: 'https://www.youtube.com/embed/QA8dxpyk8iI?si=aTsCZCz_Jb-ilnnd', dur: '15:30' },
    { title: 'Award Ceremony & Closing Presentations', src: 'https://www.youtube.com/embed/oBZ_4zm7VeM?si=GD2fxp24f4ct17Ie', dur: '05:45' },
  ];
  const [activePlaylistItem, setActivePlaylistItem] = useState(0);

  // Official FAQs directly from live website
  const faqs = [
    { q: 'What is the duration of the PG Diploma in Project Management with BIM Technology program?', a: 'The program lasts between 7 to 12 months (until you are placed), depending on the mode of learning and the pace at which you progress. Long holidays are not permitted as you work directly on live client projects.' },
    { q: 'When does the next batch start?', a: 'The next batch starts on 15th April 2026. Both Online and Offline batches start on the same day.' },
    { q: 'What is included in the "On-job Learning Program"?', a: 'The On-job Learning Program allows you to gain hands-on experience in real-world project execution. You will work alongside the Econstruct technical team from Center Line Plan (CLP) to Good for Construction (GFC) drawings, covering project coordination, scheduling with Primavera P6, 4D BIM with Synchro, and clash detection with Navisworks.' },
    { q: 'Will I receive a certification upon completing the program?', a: 'Yes, upon successful completion of the program, you will receive an industry-recognized certification provided by Econstruct Design & Build Pvt Ltd. Additionally, you will also be given an official experience letter and 100% placement assistance.' },
    { q: 'What software tools will I learn during the program?', a: 'The program covers 8+ BIM and project management tools plus custom spreadsheets: AutoCAD, REVIT Architecture, REVIT Structures, REVIT MEP, Synchro 4D BIM, Navisworks Manage, Infraworks, Primavera P6, and 40+ Design Spreadsheets.' },
    { q: 'Is there any placement assistance after completing the program?', a: 'Yes, the program offers a 100% Placement Assistance. You will receive 6–8 genuine interview opportunities in India, UAE, and internationally, supported by video resumes, mock interviews, and portfolio building.' },
    { q: 'Can I choose the mode of learning for this program?', a: 'Yes, the program offers flexible learning modes: Offline (Bangalore HQ), Online Working Professionals, Online Non-Working (WFH environment), and Hybrid mode.' },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  // Software tools stack for MSB
  const softwares = [
    { name: 'AutoCAD', level: 'Fundamental', desc: '2D drafting, centerline plans & architectural layouts' },
    { name: 'REVIT Architecture', level: 'Core BIM', desc: '3D architectural modeling & parametric design' },
    { name: 'REVIT Structures', level: 'Core BIM', desc: 'Structural BIM modeling, rebar placement & framing' },
    { name: 'REVIT MEP', level: 'Core BIM', desc: 'Mechanical, electrical & plumbing system modeling' },
    { name: 'Synchro 4D BIM', level: 'Specialist', desc: '4D construction sequence simulation & time management' },
    { name: 'Navisworks Manage', level: 'Clash Detection', desc: 'Multi-disciplinary clash detection & coordination' },
    { name: 'Infraworks', level: 'Infrastructure', desc: 'Preliminary site context & infrastructure BIM' },
    { name: 'Primavera P6', level: 'Project Mgmt', desc: 'Enterprise project scheduling, CPM & resource leveling' },
    { name: '40+ Spreadsheets', level: 'Management', desc: 'Estimation, BOQ, billing & project control tools' }
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
    { id: 'poster-1', title: 'Program Overview Poster', src: '/msb/msb poster 2.png', alt: 'PG Diploma in Project Management with BIM Technology Matrix Table Poster' },
    { id: 'poster-2', title: 'BIM Software Matrix Poster', src: '/assets/msb_poster_orange.jpeg', alt: 'PG Diploma BIM Software Tools & Program Overview Poster' }
  ];
  const [activePoster, setActivePoster] = useState(0);

  const fin = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.55 } };

  return (
    <div className="bg-white overflow-x-hidden text-slate-900 font-sans">



      {/* ── 01. HERO SECTION ────────────────────────────────────────── */}
      <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-slate-950 flex flex-col justify-between">
        <div className="absolute inset-0">
          <img src="/ProjectManagementConsultancy.jpg" alt="BIM & Project Management Background" className="w-full h-full object-cover brightness-[0.82] saturate-[1.15]" />
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

            </motion.div>

            <motion.h1 variants={{ i: { opacity: 0, y: 40 }, a: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.6, 0.05, 0.01, 0.9] } } }}
              className="font-medium text-white tracking-tight leading-[1.1] mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              PG Diploma In<br /><span className="text-yellow-400 italic font-serif drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">Project Management with BIM Technology</span>
            </motion.h1>

            <motion.p variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="max-w-xl text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              India's most comprehensive on-job training program. Master 9+ BIM tools (REVIT Arch/Struct/MEP, Synchro 4D, Navisworks, Primavera P6) on real live projects.
            </motion.p>

            <motion.div variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-wrap gap-4">
              <Btn href="#apply-now">Apply Now — April 2026</Btn>
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
                { to: '100', s: '%', label: 'Placement Rate', icon: TrendingUp },
                { to: '7–12', s: ' Months', label: 'Duration (ON-JOB)', icon: Clock },
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
      <section id="program-video" className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <Label>02 · Program Detailed Video</Label>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                See What <span className="text-yellow-600 italic font-serif">PG Diploma in PM & BIM</span> Is All About
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-md md:text-right leading-relaxed">
              Watch how our project management with BIM technology curriculum equips you for real site & consultancy roles.
            </p>
          </motion.div>

          <motion.div {...fin} className="relative w-full bg-slate-950 aspect-video rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-slate-800">
            <div className="absolute top-0 left-0 w-24 h-1 bg-yellow-500 z-10" />
            <iframe src="https://www.youtube.com/embed/-__P90GFjBI?si=NsKBJTlJDBoXCtHU"
              className="absolute inset-0 w-full h-full" title="PG Diploma in Project Management with BIM Technology Overview Video" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          </motion.div>
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
              Comprehensive BIM & Project Management training designed to give you end-to-end practical project mastery.
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
                <h3 className="text-4xl font-black text-white mb-1">7–12 Months</h3>
                <p className="text-yellow-500 font-semibold text-sm mb-6">Until You Are Placed</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Hands-on corporate ON-JOB learning on real commercial, residential, and infrastructure BIM projects.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm">
                <span className="text-gray-400">Next Batch Starts:</span>
                <span className="text-yellow-400 font-bold">15th April 2026</span>
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
                    ['40+', 'Spreadsheets'],
                  ].map(([v, l]) => (
                    <div key={l} className="bg-slate-50 p-3 rounded-xl border border-gray-100">
                      <div className="text-lg font-black text-slate-900">{v}</div>
                      <div className="text-[11px] text-gray-500 uppercase font-bold tracking-wider mt-0.5">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-xs text-gray-500 font-medium">Includes 4D Time Simulation & Clash Detection</div>
            </div>

            {/* Certificate Card */}
            <div className="bg-yellow-500 text-slate-900 rounded-2xl p-8 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-lg text-yellow-500">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900/60">Certification</span>
                </div>
                <h3 className="text-2xl font-black mb-4">Industry Credentials</h3>
                <ul className="space-y-3 mb-6">
                  {[
                    'Official Work Experience Letter',
                    'Econstruct PG Diploma Certificate',
                    'BIM & Project Portfolio Assistance',
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
              <span className="text-xs font-black uppercase tracking-wider text-slate-900/70 border-t border-slate-900/10 pt-3">Recognized Across Top AEC Consultancies</span>
            </div>
          </div>

          {/* Software Stack Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm mb-12">
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Software Tools Stack (9 Tools)</h3>
                <p className="text-gray-500 text-sm mt-1">Master industry-standard BIM modeling, scheduling & clash detection software.</p>
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
                Designed to ensure you excel in BIM & Project Management interviews and secure high-paying positions across India, UAE, Oman, and internationally.
              </p>

              <div className="bg-slate-800/90 border border-yellow-500/40 p-6 rounded-2xl mb-8 backdrop-blur-md">
                <div className="text-yellow-400 font-extrabold text-xl mb-1">6–8 Genuine Job Interviews</div>
                <div className="text-gray-300 text-sm mb-4 font-medium">100% Placement Support in BIM Consultancies & Contracting Firms</div>
                <Btn href="#apply-now">Enroll for Guaranteed Placement</Btn>
              </div>
            </motion.div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Mic, label: 'Technical & HR Mock Interviews', desc: 'Rigorous mock interview series conducted by principal BIM managers & project heads.' },
                { icon: MessageSquare, label: 'Professional Communication', desc: 'Verbal, technical report writing & client coordination training.' },
                { icon: Users, label: 'Group Discussions', desc: 'Corporate group discussion techniques to express project logic with clarity.' },
                { icon: Video, label: 'Video Resume & Portfolio', desc: 'Build video resumes showcasing your 4D BIM simulations and Navisworks clash reports.' },
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
      <section id="portfolio-showcase" className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-10 text-center">
            <Label>05 · Portfolio Showcase</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              How Your Portfolio Will Look <span className="text-yellow-600 italic font-serif">After Training</span>
            </h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto mt-3 leading-relaxed">
              Explore authentic student portfolios to get a clear idea of what your portfolio will look like after completing our PG Diploma in Project Management with BIM Technology program.
            </p>
          </motion.div>

          {/* Portfolio PDF & Video Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {portfolioPdfs.map((doc, idx) => (
              <button
                key={doc.id}
                onClick={() => setActivePdf(idx)}
                className={`px-5 py-3 rounded-2xl text-xs font-extrabold transition-all duration-300 border flex items-center gap-2 ${activePdf === idx
                  ? 'bg-slate-900 text-yellow-400 border-slate-900 shadow-lg scale-105'
                  : 'bg-slate-50 text-slate-700 border-gray-200 hover:bg-slate-100'
                  }`}
              >
                {doc.type === 'video' ? (
                  <Video className="w-4 h-4 text-yellow-500" />
                ) : (
                  <FileText className="w-4 h-4 text-yellow-500" />
                )}
                <span>{doc.badge}</span>
              </button>
            ))}
          </div>

          {/* Active Portfolio Item Viewer Container */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
              <div>
                <span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                  {portfolioPdfs[activePdf].badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {portfolioPdfs[activePdf].title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 max-w-2xl">
                  {portfolioPdfs[activePdf].desc}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                {portfolioPdfs[activePdf].type === 'video' ? (
                  <a
                    href={portfolioPdfs[activePdf].videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Watch on YouTube
                  </a>
                ) : (
                  <a
                    href={portfolioPdfs[activePdf].pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Open Full PDF
                  </a>
                )}
              </div>
            </div>

            {/* Embedded Viewer Container */}
            <div className="w-full h-[550px] sm:h-[650px] md:h-[750px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 relative">
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

        </div>
      </section>

      {/* ── 06. CAREER GROWTH BLUEPRINT & WORKFLOW ──────────────────── */}
      <section id="workflow" className="py-16 md:py-24 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-10">
            <Label>06 · Execution Blueprint</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Career Growth <span className="text-yellow-600 italic font-serif">Blueprint</span>
            </h2>
            <p className="text-gray-600 text-base max-w-3xl mx-auto mt-3 leading-relaxed">
              Step-by-step roadmap from initial enrollment to project execution, placement preparation, and core technical career landing.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xl overflow-hidden">
            <img src="/msb/career_growth_blueprint.jpeg" alt="Career Growth Blueprint Flowchart" className="w-full h-auto object-contain rounded-2xl bg-white" />
          </div>
        </div>
      </section>

      {/* ── 07. PROGRAM HIGHLIGHTS / DETAILED POSTER ───────────────── */}
      <section id="program-highlights" className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-10">
            <Label>07 · Program Posters & Details</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Program Highlights & <span className="text-yellow-600 italic font-serif">Detailed Poster</span>
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

      {/* ── 08. MODE OF TRAINING ────────────────────────────────────── */}
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
                  ['1000+', 'Projects'],
                  ['500+', 'Mentored'],
                ].map(([v, l]) => (
                  <div key={l} className="text-center px-2">
                    <div className="text-lg font-black text-yellow-400">{v}</div>
                    <div className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="lg:col-span-7">
              <Label>09 · Expert Mentorship</Label>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
                About the <span className="text-yellow-600 italic font-serif">Mentor</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-6 border-l-4 border-yellow-500 pl-4">Mr. Sandeep Pingale</h3>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                With over two decades of experience in civil engineering, project management, and BIM technology, Mr. Sandeep Pingale has guided over 1,000+ professionals into successful careers across India, UAE, and international markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: GraduationCap, t: 'Industry Veteran', d: '20+ years leading BIM & Project Management implementations' },
                  { icon: TrendingUp, t: 'Proven Placements', d: 'Over 1,000+ BIM professionals placed globally' },
                  { icon: Globe, t: 'Global Reach', d: 'Direct corporate ties in India, UAE, Oman & international consultancies' },
                  { icon: Award, t: 'Practical Pedagogy', d: 'Focus on 4D BIM, Primavera P6 scheduling, and Navisworks clash detection' },
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
                Every civil engineer's career journey is unique. Schedule a 1-on-1 session to address career gaps, salary expectations, and build a tailored BIM career roadmap.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Discuss your current career situation & salary progression goals',
                  'Identify skill gaps in REVIT, Navisworks, Primavera P6 & 4D BIM',
                  'Build a personalized roadmap for corporate technical placement'
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
        subtitle="Hear directly from our PG Diploma in Project Management with BIM Technology (MSB) trainees and alumni placed in top BIM & structural engineering firms across India, UAE, Muscat, and London."
      />

      {/* ── 12. LIVE PROJECTS, IMPACT & PRACTICAL EXPOSURE ──────────── */}
      <section id="live-projects" className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="mb-10">
            <Label>12 · Practical Exposure & Impact</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Live Projects & <span className="text-yellow-400 italic font-serif">Impact Video</span>
            </h2>
            <p className="text-gray-400 text-base max-w-xl mt-2">
              Explore live BIM project competitions and watch how our hands-on training transforms engineering careers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Left: Competition Playlist */}
            <div className="lg:col-span-7 bg-slate-800 rounded-3xl p-6 border border-slate-700 flex flex-col justify-between">
              <div className="rounded-2xl overflow-hidden bg-black aspect-video relative mb-4">
                <iframe
                  src={competitionVideos[activePlaylistItem].src}
                  className="absolute inset-0 w-full h-full"
                  title={competitionVideos[activePlaylistItem].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                  <span className="font-bold text-xs text-yellow-400 flex items-center gap-2">
                    <Video className="w-4 h-4" /> Competition Playlist
                  </span>
                  <span className="text-[11px] text-gray-400">{activePlaylistItem + 1} / {competitionVideos.length}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {competitionVideos.map((video, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePlaylistItem(idx)}
                      className={`text-left p-3 rounded-xl transition-all flex items-start gap-2 ${activePlaylistItem === idx
                        ? 'bg-yellow-500 text-slate-950 font-bold shadow-md'
                        : 'bg-slate-700/50 hover:bg-slate-700 text-gray-300'
                        }`}
                    >
                      <span className="text-xs font-mono font-bold mt-0.5">{idx + 1}</span>
                      <div className="overflow-hidden">
                        <h4 className="text-xs line-clamp-1">{video.title}</h4>
                        <p className={`text-[10px] mt-0.5 ${activePlaylistItem === idx ? 'text-slate-800' : 'text-gray-400'}`}>{video.dur}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Impact Story & Facts */}
            <div className="lg:col-span-5 bg-slate-800 rounded-3xl p-6 border border-slate-700 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">See the Impact We Create</h3>
                <p className="text-gray-400 text-xs mb-4">Real graduates. Real project simulation. Real career transformations.</p>

                <div className="space-y-2.5 border-t border-slate-700 pt-4 text-xs">
                  {[
                    ['Program Duration', '7–12 Months'],
                    ['Next Batch', '15th April 2026'],
                    ['Learning Mode', 'Online / Offline / Hybrid'],
                    ['Job Placement', '100% Placement Assistance'],
                    ['Software Stack', 'AutoCAD, REVIT, Synchro, Navisworks, Primavera P6'],
                    ['Certification', 'Industry Certificate + Experience Letter'],
                  ].map(([l, v]) => (
                    <div key={l} className="flex justify-between items-center border-b border-slate-700/50 pb-2">
                      <span className="text-gray-400 font-medium">{l}:</span>
                      <span className="text-yellow-400 font-bold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700">
                <Btn href="#apply-now" className="w-full">Apply Now — April 2026</Btn>
              </div>
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
              Everything you need to know about the PG Diploma in Project Management with BIM Technology.
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
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 whitespace-pre-line">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. ENROLLMENT / ENROLL NOW ─────────────────────────────── */}
      <section id="enrollment" className="py-16 md:py-24 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-14">
            <Label>14 · Step-by-Step Admission</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Enrollment <span className="text-yellow-600 italic font-serif">Process</span>
            </h2>
            <p className="text-gray-600 text-base max-w-lg mx-auto mt-2">
              Follow 3 simple steps to register and reserve your seat for the upcoming batch.
            </p>
          </motion.div>

          {/* 3 Step Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              { step: '01', title: 'Initial Registration', desc: 'Fill out the online application form and register your civil / BIM engineering details.' },
              { step: '02', title: 'Document Submission', desc: 'Submit academic mark sheets, degree/diploma certificates, and photo ID for verification.' },
              { step: '03', title: 'Payment & Onboarding', desc: 'Complete course fee payment and receive your LMS access credentials and onboarding kit.' },
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-gray-200 hover:border-yellow-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-yellow-500 text-slate-950 rounded-2xl flex items-center justify-center font-black text-lg mb-6 shadow-sm">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Card & Bank Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Account Card */}
            <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl font-black text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500 text-slate-950 flex items-center justify-center font-black text-lg shadow">₹</div>
                    Make Direct Bank Payment
                  </h3>
                  <span className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 text-xs font-bold px-3 py-1 rounded-full">
                    HDFC Corporate Account
                  </span>
                </div>

                <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 mb-6">
                  <div className="text-yellow-400 font-extrabold text-xs uppercase tracking-widest border-b border-slate-700/80 pb-3 mb-4 flex justify-between items-center">
                    <span>Primary Account · HDFC Bank</span>
                    <span className="text-gray-400 normal-case font-normal text-xs">Branch: Harlur Road, Bangalore</span>
                  </div>
                  <div className="space-y-3.5">
                    {[
                      { label: 'Account Number', value: '50200000209630', key: 'account' },
                      { label: 'Account Name', value: 'ECONSTRUCT DESIGN & BUILD PVT LTD.', key: 'name' },
                      { label: 'IFSC Code', value: 'HDFC0009196', key: 'ifsc' },
                      { label: 'SWIFT Code', value: 'HDFCINBBNG', key: 'swift' },
                    ].map((item) => (
                      <div key={item.key} className="flex justify-between items-center border-b border-slate-700/50 pb-2.5 last:border-0 text-xs md:text-sm">
                        <div className="flex flex-col">
                          <span className="text-gray-400 font-medium text-xs">{item.label}</span>
                          <span className="font-bold text-white tracking-wide font-mono">{item.value}</span>
                        </div>
                        <button
                          onClick={() => handleCopy(item.key, item.value)}
                          className="bg-yellow-500/10 hover:bg-yellow-500 hover:text-slate-950 text-yellow-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-yellow-500/30 transition-all flex items-center gap-1.5 shrink-0"
                        >
                          {copiedField === item.key ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400 font-bold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-2 font-medium">Share payment confirmation screenshot to:</div>
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {['+91 90367 44017', '+91 72592 22888', '+91 72599 21111'].map((num) => (
                    <a
                      key={num}
                      href={`https://wa.me/${num.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white/10 hover:bg-yellow-500 hover:text-slate-950 text-white font-bold text-xs py-2 px-3.5 rounded-xl border border-white/10 transition-all flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{num}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-gray-400">Accepted Payment Modes:</span>
                <div className="flex gap-2">
                  {['NEFT', 'IMPS', 'RTGS', 'UPI'].map((m) => (
                    <span key={m} className="bg-white/10 text-yellow-400 font-bold px-2.5 py-1 rounded text-xs">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* QR Code, Office Address & Notice Card */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              <div>
                <div className="bg-amber-50 border-l-4 border-yellow-500 p-5 rounded-2xl border border-amber-200/80 shadow-sm mb-6">
                  <div className="font-extrabold text-amber-950 text-sm flex items-center gap-2">
                    <span>⚠️</span> Important Admission Notice
                  </div>
                  <p className="text-amber-900 text-xs mt-1 leading-relaxed">
                    Please take admission <strong>at least 2 months prior</strong> to batch start date due to high candidate volume & seat limitations.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 text-center shadow-lg hover:shadow-xl transition-all mb-6">
                  <div
                    onClick={() => setIsQrExpanded(true)}
                    className="w-56 h-56 sm:w-72 sm:h-72 max-w-full mx-auto mb-5 bg-white p-3 sm:p-4 rounded-3xl border-2 border-slate-200 shadow-md flex items-center justify-center hover:scale-[1.03] transition-all cursor-pointer group relative overflow-hidden"
                    title="Click to expand QR Code"
                  >
                    <img src="/qr.webp" alt="Payment QR Code" className="w-full h-full object-contain" />
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl flex items-center justify-center backdrop-blur-[2px]">
                      <span className="bg-yellow-400 text-slate-950 font-black text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform scale-95 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-3.5 h-3.5" /> Click to Expand
                      </span>
                    </div>
                  </div>
                  <h4
                    onClick={() => setIsQrExpanded(true)}
                    className="text-base sm:text-lg font-black text-slate-900 mb-1 cursor-pointer hover:text-yellow-600 transition-colors"
                  >
                    Scan QR Code for Instant UPI Payment
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium mb-3">Supports GPay, PhonePe, Paytm & BHIM UPI</p>
                  <button
                    onClick={() => setIsQrExpanded(true)}
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-yellow-50 hover:border-yellow-300 transition-colors px-4 py-2 rounded-full border border-slate-200 text-xs font-bold text-slate-800 cursor-pointer"
                  >
                    <QrCode className="w-4 h-4 text-yellow-600" /> Official Corporate Merchant QR (Click to Zoom)
                  </button>
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

              <div className="bg-slate-50 p-6 rounded-3xl border border-gray-200 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-yellow-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 text-xs block mb-1">Bangalore HQ Office:</span>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    2nd Floor, Venkatdhari Heights, Parappana Agrahara Main Rd, opp. SAI POORNA PREMIER, Kudlu, Bengaluru 560068
                  </p>
                  <a
                    href="https://maps.google.com/?q=Econstruct+Bangalore"
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-600 hover:underline text-xs font-bold inline-flex items-center gap-1 mt-2"
                  >
                    View on Google Maps <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 15. APPLY NOW / PROGRAM FEES & PRICING CARD ─────────────── */}
      <section id="apply-now" className="py-16 md:py-24 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-12">
            <Label>15 · Program Admission & Fee</Label>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              BIM & Project Management <span className="text-yellow-600 italic font-serif">100% Placement Program</span>
            </h2>
          </motion.div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 flex flex-col lg:flex-row">
            {/* Benefits List */}
            <div className="p-8 md:p-12 lg:w-2/3 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                  Complete PG Diploma in Project Management with BIM Technology Track
                </span>
                <h3 className="text-2xl font-black text-slate-900 mb-6">Course Inclusions & Perks</h3>

                <ul className="space-y-3.5 mb-8">
                  {[
                    "Live project experience on REVIT 3D BIM, Synchro 4D time simulation & Navisworks clash detection",
                    "Official Work Experience Letter",
                    "AutoCAD · REVIT Architecture · REVIT Structures · REVIT MEP · Synchro · Navisworks · Infraworks · Primavera P6",
                    "40+ Customized Design Spreadsheets for estimation, BOQ & project control",
                    "Full Digital Library — 1000+ Technical Books Access",
                    "100% Placement Assistance Support & CRM Access"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-slate-800 font-bold text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-red-500 text-xs font-semibold italic">* Fee is non-refundable & non-transferable under any circumstances.</p>
            </div>

            {/* Fee Card */}
            <div className="bg-slate-950 text-white lg:w-1/3 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/20 rounded-full blur-3xl pointer-events-none" />

              <div>
                <span className="text-gray-400 font-extrabold uppercase tracking-widest text-xs mb-4 block">PG Diploma Program Fee</span>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-yellow-400">₹</span>
                  <span className="text-5xl font-black text-white tracking-tight">2,10,000</span>
                </div>
                <p className="text-gray-300 text-xs font-semibold mb-6">Equivalent: AED 9,000 or US$ 2,510</p>

                <div className="bg-white/10 border border-white/20 p-3.5 rounded-xl mb-8 text-center text-xs text-gray-200">
                  Base Fee: ₹ 1,77,967 + 18% GST
                </div>
              </div>

              <a href="https://wa.me/919036744017" target="_blank" rel="noreferrer"
                className="w-full bg-yellow-500 text-slate-950 font-black py-4 rounded-xl hover:bg-yellow-400 transition text-center uppercase tracking-widest text-xs shadow-lg block">
                Take Admission Now
              </a>
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
                Join 2,000+ BIM and project management engineers who have successfully launched high-growth careers in top consultancies.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex flex-col items-center lg:items-end gap-5 shrink-0">
              <Btn href="https://wa.me/919036744017">Apply Now — April 2026 Batch</Btn>
              <div className="flex gap-6">
                {['+91 90367 44017', '+91 72592 22888'].map(n => (
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

export default BimHubMSB;
