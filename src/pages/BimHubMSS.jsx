import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Clock, Calendar, Monitor, BookOpen, Award, Briefcase,
  Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight,
  CheckCircle, ChevronDown, ArrowRight, Phone, MapPin,
  Play, TrendingUp, Building2, Zap, GraduationCap, Globe,
  Star, Quote, CheckCircle2, X
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

const BimHubMSS = () => {
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

  // Authentic Student Reviews Sourced Directly from e-construct.in
  const studentReviews = [
    {
      id: 1,
      name: 'Meeval',
      role: 'Structural Design Engineer',
      company: 'Placed in UAE',
      rating: 5,
      videoId: 'SAJhiHZDYeQ',
      quote: 'Meeval — Placed in UAE as a Structural Design Engineer after completing the Master Study program at Econstruct.'
    },
    {
      id: 2,
      name: 'Lijin M Varughese',
      role: 'Trainee Structural Design Engineer',
      company: 'Econstruct Master Study Alumni',
      rating: 5,
      videoId: '4V8Q1GR7dbY',
      quote: 'Lijin M Varughese shares his hands-on experience working directly on Center Line Plans, GFC drawings, and structural analysis under senior Econstruct mentors.'
    },
    {
      id: 3,
      name: 'Swapnil Katiyar',
      role: 'Civil & Structural Design Engineer',
      company: 'Econstruct Graduate',
      rating: 5,
      videoId: '1AehbURvS8k',
      quote: 'Journey of a Civil Engineer — Swapnil Katiyar shares how the 12 Months Training + 12 Months Internship built his confidence in real corporate design environments.'
    },
    {
      id: 4,
      name: 'Preethi Prasad',
      role: 'Structural Engineer',
      company: 'Placed in Muscat, Oman',
      rating: 5,
      videoId: 'wEpeR0jE5Q0',
      quote: 'Alumni Talk with Preethi Prasad (Master Study, Structures Batch) who is now working as a successful Structural Engineer in Muscat, Oman.'
    },
    {
      id: 5,
      name: 'Construction Management Trainee',
      role: 'Project Planning & BIM Specialist',
      company: 'Master Study Trainee',
      rating: 5,
      videoId: 'FY7LHMlyFj0',
      quote: 'Comprehensive student review on construction management, Primavera scheduling, site planning, and BIM technology integration.'
    },
    {
      id: 6,
      name: 'Structural Design Intern',
      role: 'Junior Design Engineer',
      company: 'Master Study Trainee',
      rating: 5,
      videoId: 'KdZkMiMLA5A',
      quote: 'Students share their journey of learning advanced structural design concepts through practical applications on high-rise live projects.'
    },
    {
      id: 7,
      name: 'Civil Engineering Intern',
      role: 'Site & Structural Intern',
      company: 'Econstruct Intern',
      rating: 5,
      videoId: 'EwosIIAxHQw',
      quote: 'Learn about the hands-on experience and practical knowledge gained during the civil engineering internship program at Econstruct.'
    },
    {
      id: 8,
      name: 'Professional Training Graduate',
      role: 'BIM & Structural Detailer',
      company: 'Econstruct Alum',
      rating: 5,
      videoId: '5WPiCu6UopM',
      quote: 'Discover how our training programs help students bridge the gap between academics and core industry requirements.'
    },
    {
      id: 9,
      name: 'Civil Master Study Trainee',
      role: 'Structural Modeler',
      company: 'Master Study Alum',
      rating: 5,
      videoId: 'C43g7pneGRE',
      quote: 'Practical knowledge and real project exposure gained during the 24-month Master Study civil engineering internship.'
    },
    {
      id: 10,
      name: 'Training Program Reviewer',
      role: 'Assistant Design Engineer',
      company: 'Econstruct Graduate',
      rating: 5,
      videoId: 'Wp3yw4YzfNM',
      quote: 'Understanding real structural execution requirements and dynamic analysis software training at Econstruct.'
    },
    {
      id: 11,
      name: 'Master Study Professional',
      role: 'Structural Engineer',
      company: 'Econstruct Trainee',
      rating: 5,
      videoId: 'g_OcxyVbRec',
      quote: 'Hands-on live project training on 17+ software tools like ETABS, REVIT, and SAFE in a professional corporate environment.'
    },
    {
      id: 12,
      name: 'Training Review Graduate',
      role: 'Civil Design Coordinator',
      company: 'Placed Trainee',
      rating: 5,
      videoId: 'rLGY5maXVwo',
      quote: 'Real structural engineering design experience working on live client projects from Center Line Plan to final GFC drawings.'
    },
    {
      id: 13,
      name: 'Core Technical Graduate',
      role: 'Structural & Site Coordinator',
      company: 'Core Technical Placement',
      rating: 5,
      videoId: 'CyCcNnYyzI4',
      quote: 'Story of a Civil Engineer from 24 months On-Job internship training to securing a core technical placement in an engineering firm.'
    },
    {
      id: 14,
      name: 'Tathagata Biswas',
      role: 'Civil & Structural Engineer',
      company: 'Econstruct Alumni',
      rating: 5,
      videoId: 'N5V0WDW01-M',
      quote: 'Journey of a Civil Engineer — Tathagata Biswas shares his career transformation and placement experience through Econstruct Master Study.'
    },
    {
      id: 15,
      name: 'Offline Batch Trainee',
      role: 'Structural Design Trainee',
      company: 'Bangalore HQ Batch',
      rating: 5,
      videoId: '7hOBkzfEGHA',
      quote: 'Master Study OFFLINE Batch Student Review & Feedback on working in the Bangalore Head Office alongside chief structural consultants.'
    },
    {
      id: 16,
      name: 'Placement Record Alum',
      role: 'Structural BIM Engineer',
      company: 'Core Corporate Placement',
      rating: 5,
      videoId: 'krlphlgKoB8',
      quote: 'Core Technical Placement Record of Econstruct Master Study Trainees across top AEC companies in India and UAE.'
    },
    {
      id: 17,
      name: 'Design Specialist',
      role: 'Structural Analysis Engineer',
      company: 'Econstruct Trainee',
      rating: 5,
      videoId: 'mHBWyiARjWI',
      quote: 'Beyond basic software: mastering complete structural engineering, IS codes, rebar detailing, and BBS generation.'
    },
    {
      id: 18,
      name: 'Sreerag Ravindra',
      role: 'Senior Structural Engineer',
      company: '2013 Econstruct Passout',
      rating: 5,
      videoId: 'FTuyLX5W63w',
      quote: 'Alumni Talk — Sreerag Ravindra (2013 Passout) shares his 10+ year structural engineering career journey after Econstruct training.'
    }
  ];

  const [currentVidSlide, setCurrentVidSlide] = useState(0);
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  const competitionVideos = [
    { title: 'Competition Overview', src: 'https://www.youtube.com/embed/4V-mT1ISo90?si=8jFBhtkVt_QD23TB', dur: '12:04' },
    { title: 'Team Presentations & Solutions', src: 'https://www.youtube.com/embed/1jePd-E4ZEc?si=W545dJrmLDm5NdyU', dur: '08:15' },
    { title: 'Structural Analysis Highlights', src: 'https://www.youtube.com/embed/QA8dxpyk8iI?si=aTsCZCz_Jb-ilnnd', dur: '15:30' },
    { title: 'Award Ceremony & Closing', src: 'https://www.youtube.com/embed/oBZ_4zm7VeM?si=GD2fxp24f4ct17Ie', dur: '05:45' },
  ];
  const [activePlaylistItem, setActivePlaylistItem] = useState(0);
  const playlist = competitionVideos;
  const activeVid = activePlaylistItem;
  const setActiveVid = setActivePlaylistItem;

  const faqs = [
    { q: 'What is the duration of the course?', a: 'Roughly 12 months for both Online & Offline. ON-JOB learning on real Live Projects. Duration may vary based on your project and performance. Long holidays are not permitted.' },
    { q: 'Who can join this course?', a: 'Polytechnic Diploma (Civil Engineering), B.Tech / B.E (Civil Engineering), M.Tech / M.E (Structural Engineering), CAD Structures.' },
    { q: 'What learning activities are included?', a: '48 hrs Challenge (Group), 24 hrs Challenge (Individual), MASS Mock Interviews, Tuesday code reading, weekly objective tests, monthly project reviews.' },
    { q: 'What is the exam pattern?', a: 'Written Technical Test: 200 Marks, Practical Exam on Live Project: 200 Marks, Technical Interview: 200 Marks, Project Assignments, Attendance & Professional Attitude: 200 Marks.' },
    { q: 'What certification will I receive?', a: 'Experience letter (7 months), Master Study Certification from Econstruct, portfolio assistance, video resume assistance, and LinkedIn photoshoot.' },
    { q: 'How does placement assistance work?', a: 'Contact administration for more details.' },
  ];
  const [openFaq, setOpenFaq] = useState(null);

  const softwares = ['ETABS Basic','ETABS Advanced','StaadPRO','SAFE','SAP2000','CSI Bridge','CSI Detailer','RCDC','Prokon'];


  const modes = [
    { n: '01', title: 'Offline', icon: Building2, pts: ['Report to Bangalore HQ on batch start date.', 'Work Mon–Fri, 9 am to 7 pm.', 'Live sessions with technical mentors.', 'Real projects — team and individual.', 'Mock technical interviews.'] },
    { n: '02', title: 'Online — Working Professionals', icon: Monitor, pts: ['Self-paced with pre-recorded videos.', 'Dedicate 2–4 hours per day.', 'Flexible hours without leaving your job.', 'Doubt Clearing Sessions or 1-on-1 Zoom calls.', 'Minimum 12–15 projects throughout.'] },
    { n: '03', title: 'Online — Non-Working', icon: Globe, pts: ['100% online, replicating office environment.', 'Dashboard access to assignments and videos.', 'Stay connected via Zoom (9 am–7 pm, Mon–Fri).', 'Dedicated Doubt Clearing Sessions.', 'Online mock technical interview rounds.'] },
    { n: '04', title: 'Hybrid', icon: Zap, pts: ['Report to Bangalore HQ for 7–30 days at start.', 'Continue online with videos, live sessions, mocks.', 'Return to Bangalore for 7–30 days near end.', 'Work from home between offline sessions.'] },
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
              Master Study In<br /><span className="accent-text italic">Structural Engineering</span>
            </motion.h1>
            <motion.p variants={{ i: { opacity: 0, y: 20 }, a: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
              className="max-w-md text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              Structural Engineering with ETABS, SAFE, SAP2000, RCDC and more — on real live projects.
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
                See What <span className="accent-text italic">MSS</span> Is About
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-xs sm:text-right leading-relaxed">
              Master Study In Structural Engineering — structural analysis on real projects.
            </p>
          </motion.div>
          <motion.div {...fin} className="relative w-full bg-black aspect-video overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 left-0 w-12 h-0.5 bg-yellow-500 z-10" />
            <iframe src="https://www.youtube.com/embed/YkimCw_Nu1M?si=TMB-qf3YXr24j9-r"
              className="absolute inset-0 w-full h-full" title="MSS Video" frameBorder="0"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200">
            <div className="flex flex-col gap-px bg-gray-200">
              <motion.div {...fin} className="bg-slate-800 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-yellow-500">Duration & Batch</span>
                </div>
                <p className="text-white font-medium text-3xl md:text-4xl tracking-tight leading-none mb-2">12 Months</p>
                <p className="text-white/40 text-sm mb-6">ON-JOB Learning Program</p>
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

            <div className="flex flex-col gap-px bg-gray-200">
              <motion.div {...fin} className="bg-white p-8 md:p-10 flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-yellow-600">Software Stack</span>
                </div>
                <p className="text-black font-medium text-xl tracking-tight mb-5">
                  Master <span className="accent-text italic">9 structural tools</span> on real projects
                </p>
                <div className="flex flex-wrap gap-2">
                  {softwares.map((s, i) => (
                    <span key={i} className={`px-3 py-1.5 text-xs font-semibold border ${i < 5 ? 'bg-yellow-500 border-yellow-500 text-black' : 'border-gray-200 text-gray-600'}`}>{s}</span>
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
                  {['Experience Letter (7 months)', 'Portfolio assistance', 'LinkedIn photoshoot', '100% Placement Guarantee'].map(item => (
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
              <div className="border border-yellow-500/30 p-5">
                <p className="text-yellow-500 font-bold text-lg mb-1">6–8 Genuine Job Interviews</p>
                <p className="text-white/40 text-sm mb-5">India, UAE &amp; Abroad — 100% Job Guarantee</p>
                <Btn href="#enrollment">Apply Now</Btn>
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

      {/* ── ORANGE MSS POSTER SHOWCASE (AFTER PLACEMENT SERIES) ──── */}
      <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <div className="mb-8 text-center">
            <Label>Program Overview Poster</Label>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
              Master Study in <span className="text-[#fbc02d]">Structural Engineering</span>
            </h2>
            <div className="w-20 h-[3px] bg-[#fbc02d] mx-auto rounded-full mt-3"></div>
          </div>
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-white p-3 md:p-6 border border-gray-100 transition-all hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
            <img 
              src="/mss1.webp" 
              alt="MSS Master Study in Structural Engineering Orange Poster" 
              className="w-full h-auto object-contain rounded-[20px] transition-transform duration-500 hover:scale-[1.01]" 
            />
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
                  <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover bg-black" />
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

      {/* Added mss_training_poster_2.png */}
      <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto flex justify-center">
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-4">
            <img 
              src="/mss_training_poster_2.png" 
              alt="MSS Training Poster 2" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Achievements Showcase</h2>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full"></div>
          </div>
          
          <div className="relative group rounded-[16px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] bg-white aspect-video md:aspect-[21/9]">
            {/* Images */}
            <div 
              className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {sliderImages.map((src, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0 relative">
                  <img 
                    src={src} 
                    alt={`Gallery Slide ${idx + 1}`} 
                    className="w-full h-full object-cover bg-slate-100"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-gray-800 hover:bg-[#fbc02d] hover:text-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-10 duration-300"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-gray-800 hover:bg-[#fbc02d] hover:text-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-10 duration-300"
            >
              <ChevronRight size={28} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 z-10 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-500 rounded-full ${
                    currentSlide === idx 
                      ? 'w-10 h-3 bg-[#fbc02d] shadow-[0_0_10px_#fbc02d]' 
                      : 'w-3 h-3 bg-white/60 hover:bg-white hover:scale-125'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1-on-1 Career Discussion Section */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content Card */}
            <div className="bg-white rounded-[24px] shadow-[0_10px_50px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-14 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#fbc02d]"></div>
              
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                One-on-One <br className="hidden md:block"/>
                <span className="text-[#fbc02d] drop-shadow-sm">Career Discussion</span>
              </h2>
              
              <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-10">
                We understand that every career journey is unique. Join our session to discuss your career gaps, salary issues, and skill enhancement. Get tailored solutions and build a roadmap for your career growth.
              </p>
              
              <div className="space-y-5 mb-12">
                {[
                  'Discuss your current career situation.',
                  'Overcome skill & project-related challenges.',
                  'Plan your career growth & salary hikes.'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-green-100 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-gray-800 font-bold text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-8 pt-10 border-t border-gray-100">
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <h4 className="font-black text-gray-900 mb-2 text-xl">
                      Schedule Your Meeting with Us
                    </h4>
                    <p className="text-gray-600 font-bold text-sm tracking-wide">
                      Mon-Fri <span className="mx-2">•</span> 10 AM to 7 PM
                    </p>
                  </div>
                  <button className="bg-[#fbc02d] text-gray-900 font-black px-10 py-4 rounded-xl shadow-[0_10px_25px_rgba(251,192,45,0.4)] hover:bg-[#ffe066] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(251,192,45,0.5)] transition-all duration-300 uppercase tracking-widest text-sm shrink-0">
                    Book Now!
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-8 pt-6">
                  <div className="flex-1">
                    <h4 className="font-extrabold text-gray-900 mb-4 text-xs uppercase tracking-[0.15em] text-gray-400">Meet Us Offline in Bangalore</h4>
                    <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition group">
                      <span className="border-b border-blue-600 border-dashed group-hover:border-solid">View Offline Meeting Details</span>
                    </button>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-extrabold text-gray-900 mb-4 text-xs uppercase tracking-[0.15em] text-gray-400">Chat With Us</h4>
                    <div className="space-y-4">
                      <a href="https://wa.me/919036744017" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-800 font-bold hover:text-[#25D366] transition group">
                        <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">✅</span>
                        +91 90367 44017 <span className="text-xs font-normal text-gray-400 border border-gray-200 px-2 py-1 rounded-md ml-auto">Click to Chat</span>
                      </a>
                      <a href="https://wa.me/917259222888" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-800 font-bold hover:text-[#25D366] transition group">
                        <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">✅</span>
                        +91 72592 22888 <span className="text-xs font-normal text-gray-400 border border-gray-200 px-2 py-1 rounded-md ml-auto">Click to Chat</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Container */}
            <div className="rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white relative group h-full flex items-center justify-center p-2 md:p-6 border border-gray-100">
              <img 
                src="/msb/career_discussion.png" 
                alt="1-on-1 Career Discussion Session" 
                className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Master Study in Structural Engineering (MSS) Orange Poster */}
      <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto flex justify-center">
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-4">
            <img src="/assets/mss_poster_orange.jpeg" alt="Master Study in Structural Engineering Training Poster" className="w-full h-auto object-contain rounded-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Experience from CLP to GFC */}
      <section className="bg-slate-50 py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto text-center">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Experience from <span className="text-[#fbc02d]">CLP to GFC</span> <br className="hidden md:block"/> in the Structure Department
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-4xl mx-auto">
              Get the opportunity to work alongside the Econstruct technical team from 9:55 am to 7:00 pm, Monday to Friday, and explore plans such as Centerline to GFC.
            </p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start mt-16 text-left">
            {/* CLP Card */}
            <div className="bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src="/msc2.webp" 
                  alt="Center Line Plan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#fbc02d] text-gray-900 font-bold px-4 py-1.5 rounded-full text-sm shadow-md">
                  CLP
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </span>
                  Center Line Plan
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                    <span className="text-gray-600 font-medium">Initial structural layout planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                    <span className="text-gray-600 font-medium">Basic structural elements positioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                    <span className="text-gray-600 font-medium">Preliminary dimensions and alignments</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* GFC Card */}
            <div className="bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 group">
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src="/msc3.webp" 
                  alt="Good for Construction Drawings (GFC)" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#fbc02d] text-gray-900 font-bold px-4 py-1.5 rounded-full text-sm shadow-md">
                  GFC
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </span>
                  Good for Construction Drawings (GFC)
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                    <span className="text-gray-600 font-medium">Detailed construction specifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                    <span className="text-gray-600 font-medium">Complete structural detailing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#fbc02d] font-bold mt-0.5">•</span>
                    <span className="text-gray-600 font-medium">Final execution drawings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modes of Learning Section */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Modes of Learning</h2>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#fbc02d]/20 text-[#fbc02d] flex items-center justify-center text-sm">1</span>
                Offline
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm font-medium leading-relaxed flex-1">
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Report to the Bangalore Head Office of Econstruct on the batch start date.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Work at the office with our team from Monday to Friday, 9 am to 7 pm.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Access pre-recorded videos for certain topics in the offline training mode.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Participate in live sessions with our technical mentors periodically.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Report to an assigned employee who will be your Reporting manager.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Engage in real projects, working both in teams and individually.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Attend mock technical interviews.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Fill out a time sheet on a daily basis.</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#fbc02d]/20 text-[#fbc02d] flex items-center justify-center text-sm">2</span>
                Online <br className="hidden md:block xl:hidden"/><span className="text-sm font-semibold text-gray-500 xl:ml-2">(Working Professionals)</span>
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm font-medium leading-relaxed flex-1">
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Designed for working professionals who cannot invest 8-9 hours daily.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Offers a self-paced training program with pre-recorded videos.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Candidates should dedicate at least 2 hours to 4 hours per day to watch videos and complete assignments.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Submit assignments via the dashboard or email to the reporting manager.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Flexible working hours without leaving your current job.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Projects must be submitted weekly or monthly as directed by the reporting manager.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Attend Doubt Clearing Sessions (DCS) or schedule one-on-one Zoom calls with technical mentors for assistance.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Ask questions via the official chat server or WhatsApp for urgent queries.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Complete a minimum of 12 to 15 projects throughout the course.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Maintain a consistent routine to balance job responsibilities and the training program for effective results.</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#fbc02d]/20 text-[#fbc02d] flex items-center justify-center text-sm">3</span>
                Online <br className="hidden md:block xl:hidden"/><span className="text-sm font-semibold text-gray-500 xl:ml-2">(Non-Working)</span>
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm font-medium leading-relaxed flex-1">
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Ideal for those who can invest the whole day in training but prefer not to relocate to Bangalore.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>100% online mode, replicating the office work environment.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Receive a user ID and password for dashboard access to assignments and pre-recorded videos.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Stay connected via Zoom during working hours (9 am to 7 pm, Monday to Friday) for a work-from-home experience.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Ask questions through the online chat box in Zoom or Teams.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Attend dedicated Doubt Clearing Sessions (DCS) with reporting managers.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Complete and submit assignments online, staying in touch with the technical team throughout the day.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Participate in online mock technical interview rounds.</li>
              </ul>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#fbc02d]/20 text-[#fbc02d] flex items-center justify-center text-sm">4</span>
                Hybrid
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm font-medium leading-relaxed flex-1">
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Combination of offline and online training.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Report to the Bangalore Head Office for 7, 15, or 30 days at the start of the batch.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Continue training online with pre-recorded videos, live sessions, DCS, mocks, and Zoom calls.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Return to the Bangalore office for 7, 15, or 30 days near the end of the training.</li>
                <li className="flex items-start gap-2"><span className="text-[#fbc02d] mt-1">•</span>Flexibility to work from home in between the initial and final offline sessions.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── STUDENT REVIEWS & TESTIMONIALS SECTION ──────────────── */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-0.5 bg-yellow-500" />
                <span className="text-yellow-500 uppercase tracking-[0.2em] text-xs font-bold">Verified Student Feedback</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Student <span className="accent-text italic">Reviews & Testimonials</span>
              </h2>
              <p className="text-gray-400 text-base max-w-xl mt-3 leading-relaxed">
                Hear directly from our Master Study in Structural Engineering alumni placed in leading engineering consultancies across India, UAE, and Oman.
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-gray-400 text-sm font-semibold hidden sm:block">
                {currentVidSlide + 1} of {studentReviews.length}
              </span>
              <div className="flex gap-2">
                <button onClick={() => setCurrentVidSlide(prev => (prev === 0 ? studentReviews.length - 1 : prev - 1))}
                  className="w-12 h-12 rounded-full border-2 border-white/20 bg-slate-800 text-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-black flex items-center justify-center transition-all duration-300 shadow-lg"
                  aria-label="Previous Review">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={() => setCurrentVidSlide(prev => (prev === studentReviews.length - 1 ? 0 : prev + 1))}
                  className="w-12 h-12 rounded-full border-2 border-yellow-500 bg-yellow-500 text-black hover:bg-yellow-400 flex items-center justify-center transition-all duration-300 shadow-lg shadow-yellow-500/20"
                  aria-label="Next Review">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Carousel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const reviewIndex = (currentVidSlide + offset) % studentReviews.length;
              const review = studentReviews[reviewIndex];
              return (
                <motion.div key={review.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: offset * 0.1 }}
                  className="bg-slate-800/90 border border-white/10 rounded-[24px] overflow-hidden flex flex-col justify-between hover:border-yellow-500/50 transition-all duration-300 shadow-xl group">
                  
                  {/* Top Video Preview Header */}
                  <div className="relative aspect-video bg-black overflow-hidden cursor-pointer" onClick={() => setActiveModalVideo(review)}>
                    <img src={`https://img.youtube.com/vi/${review.videoId}/hqdefault.jpg`} alt={review.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-yellow-500 text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play size={24} className="ml-1 fill-black" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-yellow-400 text-xs font-bold px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                      <Video size={12} /> Video Testimonial
                    </div>
                    <div className="absolute bottom-3 right-3 bg-yellow-500 text-slate-900 text-xs font-black px-2.5 py-0.5 rounded">
                      5.0 ★
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 text-yellow-400 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400" />
                        ))}
                      </div>

                      {/* Feedback Quote */}
                      <div className="relative mb-6">
                        <Quote size={28} className="text-yellow-500/20 absolute -top-3 -left-2" />
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed italic relative z-10 pl-4">
                          "{review.quote}"
                        </p>
                      </div>
                    </div>

                    {/* Student Info Footer */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-white text-base tracking-wide">{review.name}</h4>
                        <p className="text-yellow-500 text-xs font-semibold">{review.role}</p>
                        <p className="text-gray-400 text-xs">{review.company}</p>
                      </div>
                      <button onClick={() => setActiveModalVideo(review)}
                        className="px-3.5 py-1.5 rounded-lg border border-yellow-500/30 text-yellow-400 text-xs font-bold hover:bg-yellow-500 hover:text-black transition-colors">
                        Watch
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Sleek Pagination & Interactive Progress Bar */}
          <div className="flex flex-col items-center justify-center gap-4 mt-12">
            <div className="flex items-center gap-4 w-full max-w-xs px-4 py-2 bg-slate-800/80 rounded-full border border-white/10 shadow-inner">
              <span className="text-xs font-mono font-bold text-yellow-400 shrink-0">
                {String(currentVidSlide + 1).padStart(2, '0')}
              </span>
              
              {/* Dynamic Smooth Progress Track */}
              <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden relative cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const pct = clickX / rect.width;
                  const newIdx = Math.min(studentReviews.length - 1, Math.max(0, Math.floor(pct * studentReviews.length)));
                  setCurrentVidSlide(newIdx);
                }}>
                <div 
                  className="h-full bg-yellow-500 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${((currentVidSlide + 1) / studentReviews.length) * 100}%` }}
                />
              </div>

              <span className="text-xs font-mono font-bold text-gray-400 shrink-0">
                {String(studentReviews.length).padStart(2, '0')}
              </span>
            </div>

            {/* Mobile Nav Controls */}
            <div className="flex items-center gap-3 sm:hidden">
              <button onClick={() => setCurrentVidSlide(prev => (prev === 0 ? studentReviews.length - 1 : prev - 1))}
                className="w-10 h-10 rounded-full border border-white/20 bg-slate-800 text-white active:bg-yellow-500 active:text-black flex items-center justify-center transition-colors"
                aria-label="Previous Review">
                <ChevronLeft size={18} />
              </button>
              <span className="text-gray-300 text-xs font-semibold px-2">
                Slide {currentVidSlide + 1} of {studentReviews.length}
              </span>
              <button onClick={() => setCurrentVidSlide(prev => (prev === studentReviews.length - 1 ? 0 : prev + 1))}
                className="w-10 h-10 rounded-full border border-yellow-500 bg-yellow-500 text-black active:bg-yellow-400 flex items-center justify-center transition-colors shadow-md"
                aria-label="Next Review">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO TESTIMONIAL MODAL ────────────────────────────── */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn" onClick={() => setActiveModalVideo(null)}>
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10" onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-800">
              <div>
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <span>{activeModalVideo.name}</span>
                  <span className="text-yellow-500 text-xs font-semibold px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30">
                    {activeModalVideo.company}
                  </span>
                </h3>
                <p className="text-gray-400 text-xs">{activeModalVideo.role}</p>
              </div>
              <button onClick={() => setActiveModalVideo(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-yellow-500 hover:text-black text-white flex items-center justify-center transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Video iFrame Container */}
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeModalVideo.videoId}?autoplay=1`}
                title={`${activeModalVideo.name} Student Review`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Quote Subtext */}
            <div className="p-6 bg-slate-800/90 border-t border-white/10">
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{activeModalVideo.quote}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Our Leadership / Founder Section */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img 
                src="https://e-construct.in/wp-content/uploads/2024/08/Media-e1768631671611.jpeg" 
                alt="Mr. Sandeep Pingale" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent hidden md:block pointer-events-none"></div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
                <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Our Leadership</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight tracking-tight">
                Meet Our Founder & <br className="hidden xl:block"/> Managing Director
              </h2>
              <h3 className="text-2xl font-bold text-gray-600 mb-8 border-l-4 border-[#fbc02d] pl-4">Mr. Sandeep Pingale</h3>
              
              <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-10">
                With over two decades of experience in structural engineering, Mr. Pingale has been instrumental in shaping the future of structural engineering education. His vision of practical, hands-on learning has helped countless students transition into successful professionals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center sm:items-start transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl font-black text-[#fbc02d] mb-2">20+</div>
                  <div className="text-gray-800 font-bold text-sm uppercase tracking-wide text-center sm:text-left">Years Industry <br/> Experience</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center sm:items-start transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl font-black text-[#fbc02d] mb-2">1000+</div>
                  <div className="text-gray-800 font-bold text-sm uppercase tracking-wide text-center sm:text-left">Projects <br/> Completed</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center sm:items-start transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl font-black text-[#fbc02d] mb-2">500+</div>
                  <div className="text-gray-800 font-bold text-sm uppercase tracking-wide text-center sm:text-left">Students <br/> Mentored</div>
                </div>
              </div>

              <button className="self-start bg-[#fbc02d] text-gray-900 font-black px-10 py-4 rounded-xl shadow-[0_10px_25px_rgba(251,192,45,0.4)] hover:bg-[#ffe066] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Added section with mss2.webp */}
      <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto flex justify-center">
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-4">
            <img src="/mss2.webp" alt="MSS Additional Information" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Enrollment Process & Get Started */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[1500px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Get Started</h2>
            <h3 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">Enrollment Process</h3>
            <div className="w-24 h-[4px] mx-auto bg-[#fbc02d] rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-[#fbc02d]/20 text-[#fbc02d] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">1</div>
              <h4 className="text-xl font-bold text-gray-900">Step 1</h4>
              <p className="text-gray-500 mt-2 font-medium">Initial Registration</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 bg-[#fbc02d]/20 text-[#fbc02d] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">2</div>
              <h4 className="text-xl font-bold text-gray-900">Step 2</h4>
              <p className="text-gray-500 mt-2 font-medium">Document Submission</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <div className="w-16 h-16 bg-[#fbc02d]/20 text-[#fbc02d] rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">3</div>
              <h4 className="text-xl font-bold text-gray-900">Step 3</h4>
              <p className="text-gray-500 mt-2 font-medium">Payment & Onboarding</p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
            
            {/* Payment Details Card */}
            <div className="bg-slate-900 rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-8 md:p-12 text-white relative overflow-hidden">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#fbc02d]/10 rounded-full blur-[50px] pointer-events-none"></div>
               
               <h3 className="text-3xl font-black mb-8 flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#fbc02d] flex items-center justify-center text-slate-900 text-xl">₹</div>
                 Make Payment
               </h3>

               <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm">
                 <h4 className="text-[#fbc02d] font-bold text-lg mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Primary Account</h4>
                 <div className="space-y-4 text-sm md:text-base">
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-white/5 pb-3">
                     <span className="text-gray-400 font-medium whitespace-nowrap">Account Number:</span>
                     <span className="font-bold text-lg overflow-hidden text-ellipsis">50200000209630</span>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-white/5 pb-3">
                     <span className="text-gray-400 font-medium whitespace-nowrap">Account Name:</span>
                     <span className="font-bold text-right leading-tight">ECONSTRUCT DESIGN & <br className="hidden sm:block"/> BUILD PVT LTD.</span>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-white/5 pb-3">
                     <span className="text-gray-400 font-medium whitespace-nowrap">IFSC Code:</span>
                     <span className="font-bold">HDFC0009196</span>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 border-b border-white/5 pb-3">
                     <span className="text-gray-400 font-medium whitespace-nowrap">SWIFT Code:</span>
                     <span className="font-bold">HDFCINBBNG</span>
                   </div>
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 pt-1">
                     <span className="text-gray-400 font-medium whitespace-nowrap">Branch:</span>
                     <span className="font-bold">Harlur Road, Bangalore</span>
                   </div>
                 </div>
               </div>
               
               <div>
                  <p className="text-gray-400 text-sm mb-4">Please share the payment screenshot to the following numbers:</p>
                  <div className="flex flex-wrap gap-4">
                    {["+91 9036744017", "+91 7259222888", "+91 7259921111"].map(num => (
                      <span key={num} className="bg-white/10 text-white font-bold py-2 px-4 rounded-lg border border-white/10 text-sm">
                        📞 {num}
                      </span>
                    ))}
                  </div>
               </div>

               <div className="mt-8 pt-8 border-t border-white/10 text-center">
                 <p className="text-gray-400 text-sm mb-4 font-medium uppercase tracking-widest">Payment Methods</p>
                 <div className="flex flex-wrap justify-center gap-4 text-white font-bold text-sm md:text-base">
                   <span className="bg-white/5 px-3 py-1 rounded">NEFT</span>
                   <span className="bg-white/5 px-3 py-1 rounded">IMPS</span>
                   <span className="bg-white/5 px-3 py-1 rounded">RTGS</span>
                   <span className="bg-[#fbc02d] text-slate-900 px-3 py-1 rounded">UPI</span>
                 </div>
               </div>
            </div>

            {/* Information Card */}
            <div className="flex flex-col justify-center h-full">
              <div className="bg-amber-50 rounded-2xl p-6 border-l-4 border-[#fbc02d] mb-10">
                <h4 className="text-amber-900 font-black text-lg mb-2 flex items-center gap-2"><span className="text-2xl">⚠️</span> Important Notice</h4>
                <p className="text-amber-800 font-medium leading-relaxed">Please take admission <strong className="font-black underline decoration-[#fbc02d] decoration-2">at least 2 months before</strong> the batch starting date.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                  <span className="font-bold text-gray-800">Priority Access</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                  <span className="font-bold text-gray-800">Pre-Batch Preparation</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                  <span className="font-bold text-gray-800">Limited Seats</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                  <span className="font-bold text-gray-800">Smooth Onboarding</span>
                </div>
              </div>

              {/* QR and Text section requested */}
              <div className="bg-slate-900 text-white p-8 rounded-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.2)] relative overflow-hidden group flex flex-col sm:flex-row items-center gap-8">
                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-[#fbc02d] to-green-500"></div>
                 <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                 
                 <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-white p-2 rounded-xl shadow-lg ring-4 ring-white/10 z-10">
                   <img src="/qr.webp" alt="Econstruct QR Code" className="w-full h-full object-contain" />
                 </div>
                 
                 <div className="text-center sm:text-left z-10">
                   <h3 className="text-xl md:text-2xl font-black mb-3 leading-snug">
                     This is not just a training program. <br/>
                     <span className="text-[#fbc02d]">This is ON-THE-JOB Learning</span> <span className="text-white text-lg font-medium">in a real professional setting.</span>
                   </h3>
                   <p className="text-gray-300 text-base leading-relaxed font-medium">
                     If you’re ready to step out of the classroom and into the corporate world, welcome aboard!
                   </p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing / Program Details for MSS */}
      <section className="bg-slate-50 py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row shadow-xl">
            
            {/* Left Content */}
            <div className="p-8 md:p-14 lg:w-2/3 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 max-w-max">100% Placement Program</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Structural Engineering Redefined: <br className="hidden md:block"/> <span className="text-[#fbc02d]">100% Placement Program</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-8 border-l-4 border-[#fbc02d] pl-4">Complete Structural Engineering Course</h3>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Live project experience on RCC, Steel, and Composite Structures | Up to G+62 Story Structures.",
                  "12 Month Experience Letter",
                  "ETABS Basic | ETABS Advanced | STAAD pro | SAFE | SAP2000 | CSI Bridge & Detailer | RCDC | Prokon",
                  "Indian Codes: IS-456 2000 | IS-800 | IS-1893 2016 | IS-13920 | IS-16700",
                  "International Codes: BS 8110 | ACI 318 | CEB FIP 90 | UBC 97",
                  "Digital Library",
                  "100% Placement Guarantee",
                  "World class CRM system"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                     <div className="bg-green-100 p-1 rounded-full shrink-0">
                       <CheckCircle2 className="w-5 h-5 text-green-600" />
                     </div>
                     <span className="text-gray-700 font-bold text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-red-500 font-semibold text-sm italic">* Fee is non-refundable & non-transferable under any circumstance.</p>
            </div>

            {/* Right Pricing */}
            <div className="bg-slate-900 text-white lg:w-1/3 p-8 md:p-14 flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#fbc02d]/20 rounded-full blur-[60px] group-hover:bg-[#fbc02d]/30 transition-colors duration-500"></div>
               <p className="text-gray-400 font-bold uppercase tracking-widest text-xs lg:text-sm mb-4">Master Study Program</p>
               <div className="flex items-baseline gap-2 mb-2">
                 <span className="text-3xl font-bold text-[#fbc02d]">₹</span>
                 <span className="text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter">2,10,000</span>
               </div>
               <p className="text-gray-300 font-medium mb-6">AED 9,000 or US$ 2,510</p>
               <div className="bg-white/10 border border-white/20 p-4 rounded-xl mb-10">
                 <p className="text-sm font-bold text-white text-center">(₹ 1,77,967 + 18% GST)</p>
               </div>
               
               <button className="w-full bg-[#fbc02d] text-slate-900 font-black px-8 py-5 rounded-xl hover:bg-[#ffe066] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm lg:text-base shadow-[0_15px_30px_rgba(251,192,45,0.3)]">
                 Take Admission Now
               </button>
            </div>

          </div>
        </div>
      </section>

      {/* Related Master Study Programs */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="mb-16 text-center">
             <span className="inline-block bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-4">Corporate ON-JOB Training</span>
             <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">RELATED COURSES</h2>
             <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-500 h-full">
               <div className="h-60 overflow-hidden relative">
                 <img src="/msc5.jpg" alt="Structural Engineering" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               </div>
               <div className="p-8 flex flex-col flex-1">
                 <h3 className="text-2xl font-black text-gray-900 mb-4 leading-snug">Master Study In Structural Engineering</h3>
                 <span className="text-[#fbc02d] font-bold text-xs uppercase tracking-widest mb-4 inline-block">(ON-JOB Learning Program)</span>
                 <p className="text-gray-600 font-medium leading-relaxed mb-6 flex-1">
                   Experience From Center Line Plan (CLP) to Good for Construction (GFC). Work on RCC, STEEL, Composite Structures with hands-on industry experience.
                 </p>
                 <div className="flex items-center gap-2 mb-8 border-t border-gray-100 pt-6 mt-auto">
                   <div className="flex text-amber-400">{'★'.repeat(4)}<span className="text-amber-400">★</span></div>
                   <span className="font-bold text-gray-900 text-lg">4.5</span>
                   <span className="text-gray-500 font-medium text-sm">(10,678)</span>
                 </div>
                 <button className="self-start bg-[#fbc02d] text-slate-900 font-black uppercase tracking-widest text-xs px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
                   Read More
                 </button>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-500 h-full">
               <div className="h-60 overflow-hidden relative">
                 <img src="/msc6.webp" alt="Project Management" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               </div>
               <div className="p-8 flex flex-col flex-1">
                 <h3 className="text-2xl font-black text-gray-900 mb-4 leading-snug">Master Study In Project Management</h3>
                 <span className="text-[#fbc02d] font-bold text-xs uppercase tracking-widest mb-4 inline-block">With BIM Technology</span>
                 <p className="text-gray-600 font-medium leading-relaxed mb-6 flex-1">
                   Specialized program on managing projects using BIM technology in construction.
                 </p>
                 <div className="flex items-center gap-2 mb-8 border-t border-gray-100 pt-6 mt-auto">
                   <div className="flex text-amber-400">{'★'.repeat(5)}</div>
                   <span className="font-bold text-gray-900 text-lg">5.0</span>
                   <span className="text-gray-500 font-medium text-sm">(11,677)</span>
                 </div>
                 <button className="self-start bg-[#fbc02d] text-slate-900 font-black uppercase tracking-widest text-xs px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
                   Read More
                 </button>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100 flex flex-col group hover:-translate-y-2 transition-transform duration-500 h-full">
               <div className="h-60 overflow-hidden relative">
                 <img src="/msc7.webp" alt="Interior Designing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               </div>
               <div className="p-8 flex flex-col flex-1">
                 <h3 className="text-2xl font-black text-gray-900 mb-4 leading-snug">Master Study In Interior Designing</h3>
                 <span className="text-[#fbc02d] font-bold text-xs uppercase tracking-widest mb-4 inline-block">With Project Management</span>
                 <p className="text-gray-600 font-medium leading-relaxed mb-6 flex-1">
                   ON-JOB Learning Program for Passionate Interior Designers.
                 </p>
                 <div className="flex items-center gap-2 mb-8 border-t border-gray-100 pt-6 mt-auto">
                   <div className="flex text-amber-400">{'★'.repeat(4)}<span className="text-amber-400">★</span></div>
                   <span className="font-bold text-gray-900 text-lg">4.6</span>
                   <span className="text-gray-500 font-medium text-sm">(9,678)</span>
                 </div>
                 <button className="self-start bg-[#fbc02d] text-slate-900 font-black uppercase tracking-widest text-xs px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
                   Read More
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Playlist Video Section */}
      <section className="bg-slate-900 text-white py-24 px-4 md:px-8 border-t-[4px] border-[#fbc02d]">
         <div className="max-w-[1500px] mx-auto">
            <div className="mb-12">
               <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Live Project Competition</h2>
               <p className="text-gray-400 font-medium text-lg border-l-4 border-[#fbc02d] pl-4">between Master Study Trainees at Econstruct</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 bg-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700">
               {/* Main Video Player */}
               <div className="lg:col-span-2 rounded-2xl overflow-hidden bg-black aspect-video shadow-lg ring-1 ring-white/10 relative">
                  <iframe 
                    src={competitionVideos[activePlaylistItem].src}
                    className="absolute top-0 left-0 w-full h-full"
                    title={competitionVideos[activePlaylistItem].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
               </div>

               {/* Playlist Menu */}
               <div className="flex flex-col h-full max-h-[400px] lg:max-h-none overflow-y-auto pr-2 custom-scrollbar">
                 <div className="flex items-center gap-3 mb-6 sticky top-0 bg-slate-800 py-2 z-10 border-b border-slate-700">
                   <Video className="w-5 h-5 text-[#fbc02d]" />
                   <h3 className="font-bold text-lg">Competition Playlist</h3>
                   <span className="ml-auto bg-slate-700 text-xs px-2 py-1 rounded font-bold">{activePlaylistItem + 1} / {competitionVideos.length}</span>
                 </div>
                 
                 <div className="flex flex-col gap-3">
                   {competitionVideos.map((video, idx) => {
                     const isActive = activePlaylistItem === idx;
                     return (
                       <button 
                         key={idx}
                         onClick={() => setActivePlaylistItem(idx)}
                         className={`text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-4 ${
                           isActive 
                             ? 'bg-[#fbc02d] text-slate-900 shadow-md transform scale-[1.02]' 
                             : 'bg-slate-700/50 hover:bg-slate-700 text-gray-300'
                         }`}
                       >
                         <div className={`mt-1 flex-shrink-0 ${isActive ? 'text-slate-900' : 'text-gray-500'}`}>
                            {isActive ? <div className="w-4 h-4 bg-slate-900 rounded-sm animate-pulse"></div> : <span className="font-bold font-mono">{idx + 1}</span>}
                         </div>
                         <div>
                           <h4 className={`font-bold line-clamp-2 ${isActive ? 'text-slate-900' : 'text-white'}`}>{video.title}</h4>
                           <p className={`text-xs mt-2 font-medium ${isActive ? 'text-slate-700' : 'text-gray-400'}`}>Duration: {video.duration}</p>
                         </div>
                       </button>
                     );
                   })}
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our Master Study in Structural Engineering program
            </p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-gray-900 text-lg hover:text-[#fbc02d] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#fbc02d]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0 text-gray-600 font-medium leading-relaxed border-t border-gray-100 mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
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

      {/* ── ENROLLMENT + PAYMENT ─────────────────────────────────── */}
      <section id="enrollment" className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
          <motion.div {...fin} className="text-center mb-10">
            <Label>Get Started</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black tracking-tight">
              Enrollment <span className="accent-text italic">Process</span>
            </h2>
          </motion.div>
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
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
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
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Common questions about the Master Study In Structural Engineering program.</p>
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
                      <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{faq.a}</p>
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

export default BimHubMSS;

