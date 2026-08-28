import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import {
  Building2, Calendar as CalendarIcon, Users, CheckCircle2, ChevronDown, ChevronUp,
  ArrowRight, BookOpen, Presentation, Code2, MonitorPlay, MessageSquare,
  FileCheck2, GraduationCap, MapPin, Briefcase, IndianRupee, ShieldCheck,
  Play, Award, Sparkles, Check, Phone, ExternalLink, Globe, Layers, Star,
  Clock, Monitor, Zap, HelpCircle, CheckCircle, Calculator, User, Mail, FileText
} from 'lucide-react';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import SiteVisitsScroller from '../components/SiteVisitsScroller';
import StudentVideoReviewsShowcase from '../components/StudentVideoReviewsShowcase';
import heroImg from '../assets/CorporateON-JOBTraining.webp';

/* ── Animated Counter Component ───────────────────────────────────── */
function Counter({ to, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const target = parseInt(String(to).replace(/,/g, ''), 10);
    let current = 0;
    const step = target / (1600 / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count >= 1000 ? count.toLocaleString() : count}{suffix}</span>;
}

/* ── Label Tag ────────────────────────────────────────────────────── */
const Label = ({ children, light = false }) => (
  <div className="flex items-center gap-2 mb-3">
    <div className="w-8 h-0.5 bg-[#fbc02d]" />
    <span className={`font-bold uppercase tracking-widest text-xs ${light ? 'text-yellow-400' : 'text-yellow-600'}`}>
      {children}
    </span>
  </div>
);

const faqs = [
  {
    q: 'Who is eligible to participate in the ETABS Level 1 Campus Workshop?',
    a: 'Final-year and pre-final-year B.Tech / B.E. Civil Engineering students, as well as M.Tech Structural Engineering students, faculty members, and academic researchers seeking industry-grade software expertise.'
  },
  {
    q: 'What is the minimum batch size required for the campus workshop?',
    a: 'A minimum batch size of 50 registered students is required for our senior structural engineering team to travel and conduct the intensive 3-day offline workshop at your institution campus.'
  },
  {
    q: 'Where is the 3-day workshop conducted?',
    a: 'The 3-day workshop is conducted directly on your college / institution campus in your computer lab or seminar hall. The eConstruct technical team travels to your location with all course materials.'
  },
  {
    q: 'What is included in the ₹12,000 + GST fee structure?',
    a: 'The package includes: (1) 3-Day intensive offline hands-on campus workshop, (2) 45-day online project practice phase, (3) Guidance on two real-world structural high-rise projects, (4) Pre-recorded video lecture library, (5) Weekly live doubt-clearing sessions on Zoom, and (6) Authorized Joint Certification in association with IIT Bhubaneswar and Econstruct.'
  },
  {
    q: 'What happens during the 45-day online practice phase?',
    a: 'Following the 3-day campus training, students enter a 45-day guided phase where they model, analyze, and detail two complete structural projects with ongoing support and weekly doubt sessions.'
  },
  {
    q: 'How does the commercial payment schedule work?',
    a: 'A 50% advance payment is required at the time of online date reservation to lock the workshop schedule on our master calendar. The remaining 50% balance is payable after the successful completion of the 3-day offline campus workshop.'
  },
  {
    q: 'What infrastructure does the host institution need to provide?',
    a: 'The institution provides a computer lab with ETABS installed (or student laptops), projector & sound system, high-speed internet, and a campus coordinator to facilitate student logistics.'
  },
  {
    q: 'What certification will the participants receive upon completion?',
    a: 'All qualifying students who complete the workshop assignments and project deliverables receive an authorized Certificate of Completion jointly issued in association with IIT Bhubaneswar and Econstruct Design & Build Pvt Ltd.'
  }
];

const CorporateTraining = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('day1');

  // Booking state
  const [blockedDates, setBlockedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    collegeName: '', contactPerson: '', designation: '', email: '', mobile: '',
    collegeAddress: '', studentCount: 50, department: '', additionalReq: ''
  });
  const [bookingStatus, setBookingStatus] = useState('idle'); // idle, loading, success, error
  const [bookingMessage, setBookingMessage] = useState('');

  // Fetch blocked dates
  useEffect(() => {
    fetch('http://localhost:5000/api/calendar')
      .then(res => res.json())
      .then(data => {
        setBlockedDates(data.map(d => new Date(d.date).toDateString()));
      })
      .catch(err => {
        // Fallback for dev mode
        console.warn("Calendar service running in local fallback mode", err);
      });
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      if (date < new Date(new Date().setHours(0, 0, 0, 0))) return true;
      return blockedDates.includes(date.toDateString());
    }
    return false;
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitBooking = async (e) => {
    e.preventDefault();
    if (!selectedDate) {
      setBookingMessage('Please select a workshop start date from the calendar.');
      return;
    }
    if (formData.studentCount < 50) {
      setBookingMessage('Minimum batch size must be 50 students.');
      return;
    }

    setBookingStatus('loading');
    setBookingMessage('');

    try {
      const payload = {
        ...formData,
        preferredDate: format(selectedDate, 'yyyy-MM-dd')
      };

      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to book');
      }

      // Simulate payment step confirmation
      const payRes = await fetch(`http://localhost:5000/api/bookings/${data.bookingId}/mock-pay`, { method: 'POST' });
      if (!payRes.ok) throw new Error('Payment simulation failed');

      setBookingStatus('success');
      setBookingMessage('Booking confirmed successfully! Our academic coordination team will contact your institution shortly.');
      setFormData({
        collegeName: '', contactPerson: '', designation: '', email: '', mobile: '',
        collegeAddress: '', studentCount: 50, department: '', additionalReq: ''
      });
      setSelectedDate(null);

      // Refresh calendar
      const calRes = await fetch('http://localhost:5000/api/calendar');
      const calData = await calRes.json();
      setBlockedDates(calData.map(d => new Date(d.date).toDateString()));

    } catch (err) {
      setBookingStatus('error');
      setBookingMessage(err.message || 'Error processing reservation. Please call +91 90367 44017 directly.');
    }
  };

  const totalFeeEstimate = (formData.studentCount || 50) * 12000;

  return (
    <div className="w-full bg-white text-slate-900 font-sans overflow-x-hidden">

      <style>{`
        .custom-calendar {
          width: 100%;
          border: none;
          background: transparent;
          font-family: inherit;
        }
        .custom-calendar .react-calendar__navigation {
          margin-bottom: 0.35rem;
          height: 30px;
        }
        .custom-calendar .react-calendar__navigation button {
          color: #fbc02d;
          font-weight: 800;
          font-size: 0.9rem;
          min-width: 28px;
          background: none;
          border-radius: 6px;
          padding: 2px 4px;
        }
        .custom-calendar .react-calendar__navigation button:enabled:hover {
          background-color: rgba(251, 192, 45, 0.15);
        }
        .custom-calendar .react-calendar__month-view__weekdays {
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.65rem;
          padding-bottom: 0.25rem;
        }
        .custom-calendar .react-calendar__month-view__days__day {
          color: #e2e8f0;
          font-weight: 600;
          padding: 0.4rem 0.15rem;
          font-size: 0.78rem;
          transition: all 0.15s ease;
          border-radius: 6px;
        }
        .custom-calendar .react-calendar__month-view__days__day--neighboringMonth {
          color: #475569;
          opacity: 0.35;
        }
        .custom-calendar .react-calendar__tile:enabled:hover {
          background-color: rgba(251, 192, 45, 0.2);
          border-radius: 6px;
          color: #fbc02d;
        }
        .custom-calendar .react-calendar__tile--active {
          background: #fbc02d !important;
          color: #000 !important;
          font-weight: 900 !important;
          border-radius: 6px;
          box-shadow: 0 2px 10px rgba(251, 192, 45, 0.4);
        }
        .custom-calendar .react-calendar__tile:disabled {
          background-color: rgba(255, 255, 255, 0.02);
          color: #334155;
          text-decoration: line-through;
          border-radius: 6px;
          opacity: 0.3;
        }
      `}</style>

      {/* ── 01. CINEMATIC HERO SECTION ────────────────────────────────────────── */}
      <section id="hero" className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden bg-slate-950 pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Civil Engineers On-Job ETABS Training"
            className="w-full h-full object-cover object-[75%_center] md:object-right opacity-75 filter brightness-95 saturate-110"
            loading="eager"
          />
          {/* Left-to-right gradient for text legibility while keeping the background image vibrant on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 md:via-slate-950/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-10 pt-12 pb-14 flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >

            {/* IIT Bhubaneswar High-Visibility Partnership Card & Badges */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 mb-8">
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

              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-slate-900/80 backdrop-blur-md text-yellow-400 border border-yellow-500/40 text-[11px] font-extrabold uppercase px-3 py-2 rounded-xl tracking-wider flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-yellow-500" /> ISO 9001:2015
                </span>
                <span className="bg-slate-900/80 backdrop-blur-md text-blue-300 border border-blue-500/40 text-[11px] font-extrabold uppercase px-3 py-2 rounded-xl tracking-wider flex items-center gap-1.5 shadow-md">
                  <Building2 className="w-4 h-4 text-blue-400" /> Academic–Industry MOU
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-[#fbc02d] font-extrabold tracking-[0.25em] uppercase text-xs md:text-sm">
                Hands-on Structural Engineering Mastery
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-black text-white tracking-tight leading-[1.08] mb-6 drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]">
              ETABS Level 1 <br />
              <span className="text-yellow-400 italic font-serif">3-Day Campus Workshop</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-9 border-l-4 border-yellow-500 pl-4">
              Learn ETABS. Model Real High-Rise Buildings. Master IS Codes. Bring practical structural consultancy training directly to your college campus.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-wider text-sm hover:bg-yellow-400 transition-all rounded-none shadow-[0_10px_30px_rgba(234,179,8,0.3)] hover:scale-[1.02] active:scale-95"
              >
                <span>Book Campus Workshop</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#curriculum"
                className="px-7 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <BookOpen size={16} className="text-yellow-400" />
                <span>Explore Syllabus</span>
              </a>

              <a
                href="tel:+919036744017"
                className="px-5 py-4 text-slate-300 hover:text-yellow-400 font-bold text-sm tracking-wide transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                <span>+91 90367 44017</span>
              </a>
            </div>

          </motion.div>
        </div>

        {/* Hero Bottom Stats Ribbon */}
        <div className="relative z-20 bg-slate-900/90 backdrop-blur-md border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { to: '5000', s: '+', label: 'Engineers Trained', icon: GraduationCap },
                { to: '50', s: '+', label: 'Campus Workshops', icon: Building2 },
                { to: '100', s: '%', label: 'Practical Hands-on', icon: Zap },
                { to: '48', s: ' Days', label: '3-Day On-Campus + 45-Day Online', icon: Clock },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3.5 py-4 px-4 sm:px-6">
                  <div className="w-10 h-10 bg-yellow-500/10 flex items-center justify-center shrink-0 rounded-xl">
                    <s.icon className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-yellow-500 leading-none">
                      <Counter to={s.to} suffix={s.s} />
                    </div>
                    <div className="text-white/60 text-[10px] sm:text-[11px] uppercase tracking-widest mt-1 font-bold">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. PROGRAM OVERVIEW & 4 PILLAR CARDS ───────────────────────────── */}
      <section className="bg-white py-16 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Card 1: Duration & Schedule */}
            <div className="bg-white rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.07)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-[#fbc02d]" />
                  <h3 className="text-xl font-bold text-gray-900">Duration</h3>
                </div>
                <p className="text-gray-900 font-extrabold text-lg leading-snug">
                  3 Days Offline + 45 Days Online = 48 Days Total
                </p>
                <p className="text-gray-500 text-xs font-bold mt-1.5 uppercase tracking-wider">
                  Campus Intensive &amp; Mentorship
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <CalendarIcon className="w-5 h-5 text-[#fbc02d]" />
                  <h4 className="text-sm font-bold text-gray-900">Workshop Schedule</h4>
                </div>
                <p className="text-[#fbc02d] font-extrabold text-base">Custom College Dates Available</p>
              </div>
            </div>

            {/* Card 2: Mode of Delivery */}
            <div className="bg-white rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.07)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full">
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-3">
                  <Monitor className="w-6 h-6 text-[#fbc02d]" />
                  <h3 className="text-xl font-bold text-gray-900">Mode of Delivery</h3>
                </div>
                <p className="text-gray-900 font-extrabold text-lg">Direct Campus Workshop</p>
              </div>
              <div className="space-y-4 mt-auto">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-1">Offline Campus Phase</h4>
                  <p className="text-gray-600 text-xs font-medium">3 Days In-Person Lab Training</p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wide mb-1">Online Mentorship</h4>
                  <p className="text-gray-600 text-xs font-medium">45 Days Video Access &amp; Live Q&amp;A</p>
                </div>
              </div>
            </div>

            {/* Card 3: Software & Codes */}
            <div className="bg-white rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.07)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#fbc02d]" />
                <h3 className="text-xl font-bold text-gray-900">Softwares &amp; Codes</h3>
              </div>
              <ul className="text-gray-700 space-y-2.5 font-medium flex-1 text-xs sm:text-sm">
                {[
                  'CSI ETABS Basic & Advance',
                  'IS 1893:2016 Seismic Standard',
                  'IS 456:2000 Concrete Frame Design',
                  'IS 875 (Part 1, 2, 3) Wind Loads',
                  'IS 13920:2016 Ductile Detailing',
                  'SAFE Foundation Reaction Export'
                ].map((software, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#fbc02d] shrink-0"></span>
                    <span>{software}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4: Certification */}
            <div className="bg-white rounded-[20px] shadow-[0_4px_25px_rgba(0,0,0,0.07)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full relative overflow-hidden">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#fbc02d]" />
                  <h3 className="text-xl font-bold text-gray-900">Certification</h3>
                </div>
                <div className="flex items-center gap-2 bg-slate-950 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-md border border-slate-800">
                  <img src="/iit-bhubaneswar-crest.png" alt="IIT Bhubaneswar" className="w-7 h-7 object-contain bg-white rounded-lg p-0.5 shrink-0" />
                  <div>
                    <div className="text-[9px] text-yellow-400 font-extrabold uppercase leading-none">Joint Award</div>
                    <div className="text-[11px] font-black text-white leading-tight mt-0.5">IIT Bhubaneswar</div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                Official verified Certificate of Completion jointly issued in association with IIT Bhubaneswar &amp; Econstruct.
              </p>
              <div className="mt-auto bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
                <p className="text-gray-900 font-bold text-xs sm:text-sm">
                  Includes guidance for <span className="text-[#fbc02d] font-black">2 Real High-Rise Structural Projects</span> and calculation sheets.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 03. STEP-BY-STEP LEARNING ROADMAP (COMPACT) ───────────────────────── */}
      <section className="bg-slate-950 py-10 md:py-12 px-4 md:px-8 border-y-2 border-yellow-500/80 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* Compact Section Heading */}
          <div className="text-center mb-7">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-400 font-extrabold uppercase tracking-[0.2em] text-[10px]">
                Structured Learning Curve
              </span>
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1.5">
              The 4-Step Structural Engineer's Journey
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              From coordinate grid initialization to full dynamic seismic analysis and consultant-level project deliverables.
            </p>
          </div>

          {/* 4 Compact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                badge: 'Foundation',
                icon: Layers,
                title: 'Learn ETABS Interface & 3D Modeling',
                chips: ['Grid Setup', 'Materials M25-M50', 'Diaphragms'],
                desc: 'Set up Cartesian grids, material grades, column/beam sections, and rigid floor diaphragms.'
              },
              {
                step: '02',
                badge: 'Analysis',
                icon: Zap,
                title: 'Apply Real IS Codes & Dynamic Loads',
                chips: ['IS 1893:2016', 'IS 875 Wind', 'Response Spectrum'],
                desc: 'Calculate gravity loads, wind pressure, and seismic response spectrum functions with modal checks.'
              },
              {
                step: '03',
                badge: 'Live Projects',
                icon: Building2,
                title: 'Complete 2 Live High-Rise Projects',
                chips: ['G+5 Residential', 'G+12 Commercial', 'SAFE Raft'],
                desc: 'Execute real client blueprints end-to-end, checking bending moments, shear wall rebar, and base reactions.'
              },
              {
                step: '04',
                badge: 'Certification',
                icon: Award,
                isHighlight: true,
                title: 'Joint Certification & Placement Edge',
                chips: ['IIT Bhubaneswar', 'Project Annexures', 'Interview Ready'],
                desc: 'Receive authorized joint certification and calculation sheets to eliminate the fresher tag in interviews.'
              },
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className={`rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 ${st.isHighlight
                      ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-yellow-500 shadow-[0_4px_20px_rgba(234,179,8,0.15)]'
                      : 'bg-slate-900/90 border border-slate-800/80 hover:border-yellow-500/40 shadow-md'
                    }`}
                >
                  <div>
                    {/* Compact Top Row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${st.isHighlight ? 'bg-yellow-500 text-black font-bold' : 'bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black'
                        }`}>
                        <Icon size={16} />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded tracking-wider ${st.isHighlight ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40' : 'bg-slate-800 text-slate-300'
                          }`}>
                          {st.badge}
                        </span>
                        <span className="text-sm font-black text-white/30 group-hover:text-yellow-400 transition-colors">
                          {st.step}
                        </span>
                      </div>
                    </div>

                    {/* Compact Title */}
                    <h3 className="text-white font-bold text-sm leading-snug mb-2 group-hover:text-yellow-400 transition-colors">
                      {st.title}
                    </h3>

                    {/* Compact Chips */}
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {st.chips.map((chip, idx) => (
                        <span key={idx} className="text-[9px] font-bold px-1.5 py-0.5 bg-slate-800/70 text-slate-300 rounded border border-slate-700/40">
                          {chip}
                        </span>
                      ))}
                    </div>

                    {/* Compact Description */}
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  {/* Compact Bottom Row */}
                  <div className="pt-3 mt-3 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-bold">
                    <span className={st.isHighlight ? 'text-yellow-400' : 'text-slate-500'}>
                      {st.isHighlight ? 'Verified Credential' : `Milestone ${st.step}`}
                    </span>
                    <span className="text-yellow-500 font-extrabold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      {st.isHighlight ? '🏆 Certified' : 'Complete →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 04. WHY THIS WORKSHOP / VALUE PROPOSITION (COMPACT) ────────────── */}
      <section className="py-10 md:py-12 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

          {/* Compact Heading */}
          <div className="text-center mb-7">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-600 font-extrabold uppercase tracking-[0.2em] text-[10px]">
                Academic–Industry Synergy
              </span>
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-1.5">
              Why Colleges Choose Our ETABS Workshop
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              We bridge academic curriculum with real structural engineering design consultancy requirements.
            </p>
          </div>

          {/* 6 Compact Cards in 3x2 Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: MapPin, tag: 'Zero Travel Friction', title: 'Campus-Based On-Site Workshop', desc: 'No travel required. Our senior practicing structural mentors come directly to your institution.' },
              { icon: Briefcase, tag: 'Industry Vetted', title: 'Consultancy-Level Standards', desc: 'Learn live project workflows used across top consulting firms in India and the Middle East.' },
              { icon: MonitorPlay, tag: '45-Day Portal', title: 'Extended Online Support', desc: '45 days of recorded video access, assignment reviews, and continuous mentorship.' },
              { icon: FileCheck2, tag: '2 Real Blueprints', title: 'Two Mandatory Projects', desc: 'Hands-on execution of multi-storey structural models with complete reinforcement drawings.' },
              { icon: Users, tag: 'Weekly Zoom Q&A', title: 'Weekly Live Doubt Clearing', desc: 'Direct interactive sessions with senior structural engineers to resolve project modeling hurdles.' },
              { icon: ShieldCheck, tag: 'IIT Bhubaneswar', title: 'Joint IIT Certification', desc: 'Authorized verified joint credential giving students a competitive edge in technical job interviews.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200/80 p-4 sm:p-5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-yellow-400 transition-all duration-200 flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-600 flex items-center justify-center shrink-0 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  <item.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h3 className="text-slate-900 font-bold text-sm sm:text-[15px] leading-snug group-hover:text-yellow-600 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed mb-2">{item.desc}</p>
                  <span className="text-[9px] font-black uppercase text-yellow-700 bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-200/70 inline-block">
                    ✓ {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05. DETAILED CURRICULUM & TIMELINE (COMPACT) ─────────────────────── */}
      <section id="curriculum" className="py-10 md:py-12 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

          {/* Compact Heading */}
          <div className="text-center mb-7">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-600 font-extrabold uppercase tracking-[0.2em] text-[10px]">
                Comprehensive Syllabus
              </span>
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-1.5">
              What Students Learn Across 3 Days
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Step-by-step curriculum taking students from 3D modeling to dynamic seismic analysis and ductile detailing.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 items-start">

            {/* Left: Compact Day Selector Tabs */}
            <div className="lg:col-span-4 space-y-2.5">
              {[
                { id: 'day1', day: 'Day 01 (Offline)', title: 'Fundamentals & Structural Modeling', badge: 'Campus Intensive' },
                { id: 'day2', day: 'Day 02 (Offline)', title: 'Dynamic Analysis & Lateral Loading', badge: 'IS 1893 Seismic' },
                { id: 'day3', day: 'Day 03 (Offline)', title: 'RCC Design & Structural Detailing', badge: 'IS 456 / IS 13920' },
                { id: 'day45', day: '45-Day Phase (Online)', title: '2 Live Projects & Weekly Mentorship', badge: 'Post-Workshop' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-3 sm:p-3.5 rounded-xl border transition-all duration-200 flex flex-col ${activeTab === tab.id
                      ? 'bg-slate-950 text-white border-yellow-500 shadow-md border-l-4'
                      : 'bg-slate-50 text-slate-700 border-gray-200 hover:bg-slate-100/90'
                    }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className={`text-[11px] font-black uppercase tracking-wider ${activeTab === tab.id ? 'text-yellow-400' : 'text-yellow-600'}`}>
                      {tab.day}
                    </span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${activeTab === tab.id ? 'bg-yellow-500 text-black' : 'bg-gray-200 text-gray-700'}`}>
                      {tab.badge}
                    </span>
                  </div>
                  <span className="font-bold text-xs sm:text-sm leading-snug mt-0.5">{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Right: Compact Tab Content Display */}
            <div className="lg:col-span-8 bg-slate-950 text-white p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-[60px] pointer-events-none" />

              {activeTab === 'day1' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
                    <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">Day 01 · 6 Hours On-Campus</span>
                    <span className="text-[10px] text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded">Core Foundations</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white mb-3">Structural Modeling &amp; Section Definition</h3>
                  <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">ETABS GUI &amp; Navigation:</strong> Cartesian/Cylindrical grids, storey data setup, and architectural CAD coordination.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Material &amp; Section Definition:</strong> Concrete grades (M25–M40), rebar (Fe500/Fe550), rectangular/circular columns, and T/L beams.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Framing &amp; Slabs:</strong> Columns, beams, one-way/two-way floor slabs, and elevator shear walls with boundary restraints.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Diaphragms &amp; Verification:</strong> Rigid vs Semi-rigid diaphragm constraints and geometric 3D model validation.</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>🎯 Day 1 Outcome: Complete 3D Geometric Structural Model</span>
                    <span className="text-yellow-400">Ready for Loads →</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 'day2' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
                    <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">Day 02 · 6 Hours On-Campus</span>
                    <span className="text-[10px] text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded">Dynamic Analysis</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white mb-3">Load Patterns, Wind &amp; Seismic Analysis</h3>
                  <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Dead &amp; Live Loads (IS 875 Parts 1 &amp; 2):</strong> Self-weight multiplier, floor finishes, wall loads, and live load reduction rules.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Wind Load Analysis (IS 875 Part 3:2015):</strong> Basic wind speed ($V_b$), terrain factors ($k_1–k_4$), and face pressure coefficients.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Seismic Analysis (IS 1893:2016):</strong> Zone factor ($Z$), response reduction ($R$), importance ($I$), and Response Spectrum generation.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Torsion &amp; Storey Drift:</strong> Limit state load combinations, eccentricity checks, and modal mass participation verification.</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>🎯 Day 2 Outcome: Validated Lateral &amp; Dynamic Seismic Model</span>
                    <span className="text-yellow-400">Ready for Design →</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 'day3' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
                    <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">Day 03 · 6 Hours On-Campus</span>
                    <span className="text-[10px] text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded">Design &amp; Detailing</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white mb-3">Concrete Member Design &amp; Detailing</h3>
                  <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">RCC Frame Design (IS 456:2000):</strong> Concrete frame sizing, demand/capacity ratios, and column $P-M-M$ interaction curves.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Shear Wall Design (IS 13920:2016):</strong> Boundary elements and vertical/horizontal rebar ductile detailing standards.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Foundation Reaction Export:</strong> Base axial, shear &amp; moment forces exported for isolated/raft footing design in SAFE.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">2 Live Project Allocation:</strong> Kickoff of 2 real client building blueprints for the 45-day online project mentorship phase.</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>🎯 Day 3 Outcome: Complete Structural Member Schedules</span>
                    <span className="text-yellow-400">45-Day Online Phase →</span>
                  </div>
                </motion.div>
              )}

              {activeTab === 'day45' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
                  <div className="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
                    <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">45-Day Online Phase · Extended Mentorship</span>
                    <span className="text-[10px] text-slate-400 font-bold bg-slate-800 px-2 py-0.5 rounded">Live Projects</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white mb-3">2 Real-World Projects &amp; Live Doubt Resolution</h3>
                  <div className="space-y-2 text-slate-300 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Project 1: G+5 Residential Apartment:</strong> Full structural modeling from architectural CAD, gravity/lateral analysis, and schedules.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Project 2: G+12 Commercial Landmark Tower:</strong> Advanced modeling with shear wall core, Response Spectrum dynamic analysis, and P-Delta checks.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Weekly Live Zoom Mentorship:</strong> Direct doubt resolution with practicing structural consultants.</div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                      <div><strong className="text-white">Portfolio &amp; Certification Evaluation:</strong> Project review for IIT Bhubaneswar &amp; eConstruct joint certification.</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span>🎯 45-Day Outcome: 2 Real Portfolio High-Rise Projects</span>
                    <span className="text-yellow-400">🏆 Joint IIT Certificate</span>
                  </div>
                </motion.div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* ── 06. REAL CAMPUS SESSIONS & SITE VISITS SCROLLER ───────────────────── */}
      <SiteVisitsScroller
        badge="HANDS-ON CAMPUS WORKSHOPS & SITE IMMERSION"
        title="Workshops & Site Visits"
        highlight="in Action"
        subtitle="Real classroom sessions, ETABS modeling workshops, and on-site structural inspections conducted across Indian campuses."
      />

      {/* ── 07. STUDENT REVIEWS SHOWCASE ──────────────────────────────────────── */}
      <StudentVideoReviewsShowcase
        title="Student Experiences & Workshop Reviews"
        subtitle="Hear directly from civil engineering students and faculty who attended eConstruct's ETABS workshops."
      />

      {/* ── 08. FOUNDER & LEAD TRAINER SPOTLIGHT (COMPACT & BEAUTIFUL) ──────── */}
      <section className="py-10 md:py-14 bg-slate-950 text-white border-y-2 border-yellow-500/80 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">

            {/* Left: Founder Photo & Title */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.25)] relative bg-slate-900 group">
                <img
                  src="/founder.webp"
                  alt="Prof. Sandeep Pingale - Founder & MD"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-3.5">
                <h3 className="text-lg sm:text-xl font-black text-white">Prof. Sandeep Pingale</h3>
                <p className="text-yellow-400 text-xs font-bold uppercase tracking-wider mt-0.5">Founder &amp; Managing Director</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Econstruct Design &amp; Build Pvt Ltd</p>
              </div>
            </div>

            {/* Right: Mentor Biography & Credentials */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
                <span className="text-yellow-400 font-extrabold uppercase tracking-[0.2em] text-[10px]">
                  Chief Technical Mentor
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-3 text-white leading-tight">
                Mentorship by Practicing High-Rise Structural Consultants
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                Returning to India after extensive structural design consultancy experience in Dubai on towers up to <span className="text-yellow-400 font-bold">G+81 stories</span>, Mr. Sandeep Pingale established eConstruct to bridge the critical gap between university academic theory and actual engineering consultancy execution.
              </p>
              <p className="text-slate-400 text-xs leading-relaxed mb-5">
                Our workshop curriculum is crafted directly from live commercial projects, ensuring every formula and ETABS model concept is grounded in real-world economy, feasibility, and IS code compliance.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <div className="bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-bold text-yellow-400 flex items-center gap-1.5 shadow-sm">
                  🏆 25+ Years Experience
                </div>
                <div className="bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-bold text-yellow-400 flex items-center gap-1.5 shadow-sm">
                  🏢 High-Rise Design up to G+81
                </div>
                <div className="bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 text-xs font-bold text-yellow-400 flex items-center gap-1.5 shadow-sm">
                  🎓 5,000+ Engineers Trained
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 09. INTERACTIVE BOOKING & REGISTRATION SYSTEM (COMPACT) ─────────── */}
      <section id="booking-section" className="py-10 md:py-12 bg-slate-100/80 relative border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

          {/* Compact Section Heading */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-600 font-extrabold uppercase tracking-[0.2em] text-[10px]">
                Campus Dates Reservation Portal
              </span>
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-1">
              Book Your College Campus Workshop
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-xs leading-relaxed">
              Select your 3-day start date on the interactive calendar, configure student batch size, and reserve your dates.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 items-start">

            {/* ── LEFT COLUMN: UNIFIED COMPACT SIDEBAR ───────────────── */}
            <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-[50px] pointer-events-none" />

              {/* 1. Transparent Program Investment */}
              <div className="relative z-10 mb-4">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 text-yellow-400">
                    <Calculator size={14} />
                    <span className="font-black tracking-widest uppercase text-[9px]">Program Investment</span>
                  </div>
                  <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-[8px] font-black uppercase px-1.5 py-0.5 rounded">
                    Institutional Rate
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl sm:text-3xl font-black text-white">₹12,000</span>
                  <span className="text-slate-400 font-medium text-[11px]">+ 18% GST / Student</span>
                </div>
                <p className="text-slate-400 text-[10px] leading-relaxed">
                  3-Day On-Campus Lab + 45-Day Online LMS + IIT Bhubaneswar Joint Certification.
                </p>

                {/* Quick Batch Presets */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-300 mb-1.5">
                    <span>Quick Select Batch:</span>
                    <span className="text-yellow-400 font-extrabold">{formData.studentCount || 50} Students</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {[50, 75, 100, 150].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setFormData({ ...formData, studentCount: count })}
                        className={`py-1 px-1.5 rounded text-[11px] font-black transition-all ${Number(formData.studentCount) === count
                            ? 'bg-yellow-500 text-black shadow-sm'
                            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                          }`}
                      >
                        {count} Qty
                      </button>
                    ))}
                  </div>
                </div>

                {/* Milestone Split Breakdown */}
                <div className="grid grid-cols-2 gap-1.5 mt-2.5 text-[10px]">
                  <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[9px]">Phase 1: Advance</span>
                    <span className="text-yellow-400 font-black text-[11px]">50% (₹{((totalFeeEstimate * 0.5)).toLocaleString()})</span>
                  </div>
                  <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[9px]">Phase 2: Completion</span>
                    <span className="text-white font-black text-[11px]">50% (₹{((totalFeeEstimate * 0.5)).toLocaleString()})</span>
                  </div>
                </div>
              </div>

              {/* 2. Step 1: Interactive Date Calendar */}
              <div className="relative z-10 bg-slate-900/90 p-3 sm:p-3.5 rounded-xl border border-slate-800 mb-3.5 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CalendarIcon className="text-yellow-500" size={14} />
                    <span>Step 1: Select 3-Day Start Date</span>
                  </h3>
                  <span className="text-[8px] bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-1.5 py-0.5 rounded font-black uppercase">
                    3-Day Block
                  </span>
                </div>

                <div className="bg-slate-950 p-2 rounded-lg border border-slate-800/80">
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    tileDisabled={tileDisabled}
                    className="custom-calendar"
                    minDetail="month"
                  />
                </div>

                {/* Selected Date Summary Indicator */}
                {selectedDate ? (
                  <div className="mt-2.5 p-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-2">
                    <CheckCircle2 className="text-yellow-400 shrink-0 mt-0.5" size={14} />
                    <div className="text-left">
                      <p className="text-[9px] text-yellow-400 font-black uppercase tracking-wider">Campus Slot Locked</p>
                      <p className="text-white font-black text-[11px]">
                        {format(selectedDate, 'EEE, dd MMM yyyy')} → {format(new Date(selectedDate.getTime() + 2 * 86400000), 'EEE, dd MMM yyyy')}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2 p-1.5 bg-slate-950/60 border border-slate-800/60 rounded-lg text-center text-[10px] text-slate-400 flex items-center justify-center gap-1">
                    <CalendarIcon size={11} className="text-yellow-500" />
                    <span>Click on an available start date above.</span>
                  </div>
                )}
              </div>

              {/* 3. Assurances Checklist */}
              <div className="relative z-10 grid grid-cols-2 gap-1.5 text-[9px] font-bold text-slate-400 pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-1 text-slate-300">
                  <Check size={11} className="text-yellow-400" /> IIT Bhubaneswar Cert
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Check size={11} className="text-yellow-400" /> Consultant On-Site
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Check size={11} className="text-yellow-400" /> 45-Day Online LMS
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Check size={11} className="text-yellow-400" /> Official Academic MOU
                </span>
              </div>

            </div>

            {/* ── RIGHT COLUMN: REGISTRATION & CONFIRMATION FORM ──────── */}
            <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-gray-200">

              {/* Form Header */}
              <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-gray-100">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                    <Presentation className="text-yellow-600" size={18} />
                    <span>Step 2: College &amp; Coordinator Details</span>
                  </h3>
                  <p className="text-slate-500 text-[11px]">Provide institutional and coordinator info for MOU generation.</p>
                </div>
                <span className="text-[9px] font-black text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded uppercase tracking-wider hidden sm:block">
                  Official MOU
                </span>
              </div>

              <form onSubmit={submitBooking} className="space-y-3">

                {/* College Name & Contact Person */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      College / University Name *
                    </label>
                    <div className="relative">
                      <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="text"
                        name="collegeName"
                        placeholder="e.g. National Institute of Engineering"
                        value={formData.collegeName}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Coordinator / Contact Person *
                    </label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="text"
                        name="contactPerson"
                        placeholder="e.g. Mr. Rajesh Sharma"
                        value={formData.contactPerson}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Designation & Department */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Designation *
                    </label>
                    <input
                      required
                      type="text"
                      name="designation"
                      placeholder="e.g. HOD / Principal / Placement Head"
                      value={formData.designation}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Department *
                    </label>
                    <input
                      required
                      type="text"
                      name="department"
                      placeholder="e.g. Civil Engineering / Structures"
                      value={formData.department}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                    />
                  </div>
                </div>

                {/* Email & Mobile */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Official Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="e.g. civil.hod@college.edu"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="tel"
                        name="mobile"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.mobile}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Campus Address */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Campus Address &amp; Location *
                  </label>
                  <div className="relative">
                    <MapPin size={14} className="absolute left-3 top-2.5 text-slate-400" />
                    <textarea
                      required
                      name="collegeAddress"
                      placeholder="Campus street, city, state, pin code"
                      value={formData.collegeAddress}
                      onChange={handleFormChange}
                      rows="2"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                    />
                  </div>
                </div>

                {/* Student Batch & Synced Date Row */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Batch Size (Min. 50) *
                    </label>
                    <div className="relative">
                      <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="number"
                        min="50"
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-bold text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Selected 3-Day Workshop Slot
                    </label>
                    <div className="relative">
                      <CalendarIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        readOnly
                        value={selectedDate ? `${format(selectedDate, 'dd MMM yyyy')} (3 Days)` : 'Select start date on left'}
                        className={`w-full border rounded-lg pl-8 pr-3 py-2 text-xs font-bold cursor-not-allowed ${selectedDate ? 'bg-yellow-50 border-yellow-300 text-slate-900' : 'bg-slate-100 border-slate-200 text-slate-400'
                          }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Specific Requirements (Optional)
                  </label>
                  <textarea
                    name="additionalReq"
                    placeholder="Lab capacity, session timings, custom IS codes, etc."
                    value={formData.additionalReq}
                    onChange={handleFormChange}
                    rows="1"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                  />
                </div>

                {/* Live Order Breakdown Card */}
                <div className="bg-slate-900 text-white p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] font-bold pb-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Total ({formData.studentCount || 50} Students):</span>
                    <span className="text-white font-black">₹{totalFeeEstimate.toLocaleString()} + 18% GST</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-yellow-400 pt-1.5">
                    <span className="flex items-center gap-1">
                      <Sparkles size={13} className="text-yellow-400" /> Initial Advance (50%):
                    </span>
                    <span className="text-sm sm:text-base font-black text-yellow-400">
                      ₹{(totalFeeEstimate * 0.5).toLocaleString()} + GST
                    </span>
                  </div>
                </div>

                {/* Status Messages */}
                {bookingMessage && (
                  <div className={`p-3 rounded-lg text-xs font-bold flex items-start gap-2 ${bookingStatus === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" />
                    <span>{bookingMessage}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={bookingStatus === 'loading'}
                    className="w-full py-3 bg-yellow-500 text-slate-950 font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-yellow-400 transition-all rounded-xl shadow-[0_4px_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2 disabled:opacity-70 group hover:scale-[1.005] active:scale-95"
                  >
                    <span>{bookingStatus === 'loading' ? 'Submitting Reservation...' : `Confirm Campus Workshop Booking (50% Advance)`}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-[10px] text-slate-500 mt-2 leading-relaxed">
                    * Official Academic MOU. For offline institutional PO/invoice, call coordinator at <a href="tel:+919036744017" className="font-bold text-yellow-600 hover:underline">+91 90367 44017</a>.
                  </p>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── 10. ACADEMIC–INDUSTRY MOU COLLABORATION (COMPACT) ─────────────────── */}
      <section className="py-10 md:py-12 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-slate-950 text-white p-5 sm:p-7 rounded-2xl shadow-xl border-b-4 border-yellow-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-[50px] pointer-events-none" />

            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-500 text-slate-950 rounded-xl flex items-center justify-center shrink-0 shadow-lg font-black mt-0.5">
              <FileCheck2 size={26} />
            </div>

            <div className="relative z-10 flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 mb-0.5">
                <span className="text-yellow-400 text-[10px] font-extrabold uppercase tracking-widest">Formal Partnership</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400 text-[10px] font-bold">Institutional MoU Model</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-1.5">
                Academic–Industry Collaboration MOU
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 max-w-4xl">
                Operates under a formal MOU between your institution and Econstruct Design &amp; Build Pvt Ltd. Your college provides computer lab infrastructure, while eConstruct deploys senior practicing structural trainers, software workflows, project kits, and joint certification in association with IIT Bhubaneswar.
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] font-bold">
                <span className="flex items-center gap-1.5 bg-slate-900/90 text-yellow-400 border border-slate-800 px-2.5 py-1 rounded-md">
                  <Check size={13} className="text-yellow-400" /> Guaranteed Project Execution
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/90 text-yellow-400 border border-slate-800 px-2.5 py-1 rounded-md">
                  <Check size={13} className="text-yellow-400" /> Joint IIT Bhubaneswar Certification
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900/90 text-yellow-400 border border-slate-800 px-2.5 py-1 rounded-md">
                  <Check size={13} className="text-yellow-400" /> 45-Day Online Mentorship &amp; LMS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ACCORDION (COMPACT 2-COLUMN GRID) ─────────────────────────── */}
      <section className="py-10 md:py-12 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-600 font-extrabold uppercase tracking-[0.2em] text-[10px]">
                Frequently Asked Questions
              </span>
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-1">
              Everything You Need to Know
            </h2>
            <p className="text-slate-500 text-xs max-w-lg mx-auto">
              Answers to institutional eligibility, infrastructure, batch sizing, payment milestones, and certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 items-start">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-all duration-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)] ${isOpen ? 'border-yellow-500 ring-1 ring-yellow-500/20' : 'border-gray-200 hover:border-yellow-400'
                    }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-3.5 sm:p-4 text-left transition-colors"
                  >
                    <span className={`font-bold pr-3 text-xs sm:text-sm leading-snug ${isOpen ? 'text-slate-950' : 'text-slate-800'}`}>
                      {faq.q}
                    </span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-yellow-500 text-black' : 'bg-yellow-500/15 text-yellow-700'
                      }`}>
                      {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3.5 sm:p-4 pt-0 text-slate-600 border-t border-gray-100 text-xs leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 12. HIGH CONVERTING CTA SECTION ───────────────────────────────────── */}
      <CTASection />

    </div>
  );
};

export default CorporateTraining;
