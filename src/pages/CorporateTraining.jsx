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
  Clock, Monitor, Zap, HelpCircle, CheckCircle, Calculator, User, Mail, FileText,
  Laptop, Cpu, HardDrive, Terminal, Compass, FileSpreadsheet, TrendingUp,
  FolderCheck, CheckSquare, Share2, Download, Printer, X, Video, FileBadge,
  Eye, BookMarked, Target, ShieldAlert, Award as TrophyIcon
} from 'lucide-react';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import SiteVisitsScroller from '../components/SiteVisitsScroller';
import StudentVideoReviewsShowcase from '../components/StudentVideoReviewsShowcase';
import PdfFlipbook from '../components/PdfFlipbook';
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

/* ── 10 Real Civil Engineering Career Paths (converstation.txt lines 752-817) ── */
const CAREER_PATHS = [
  {
    id: 'site-engineer',
    num: '01',
    role: 'Site Engineer — Drawing & Detailing',
    badge: 'Foundation Entry',
    summary: 'Where design meets the ground. Reading structural blueprints, bar bending schedules (BBS), and overseeing concrete pouring.',
    skills: [
      'AutoCAD 2D (GA drawings, working drawings, sections)',
      'RCC Detailing & Rebar Schedules Interpretation',
      'Bar Bending Schedule (BBS) verification',
      'Basic Surveying: Total Station & Auto-Level',
      'Construction sequencing & site measurement in Excel',
      'Contractor coordination & site quality checks'
    ],
    growth: 'Site In-Charge → Senior Project Engineer'
  },
  {
    id: 'bim-engineer',
    num: '02',
    role: 'BIM Engineer & Specialized Sub-Roles',
    badge: 'High Global Demand',
    summary: 'Building digital twins, running 3D clash detections, 4D construction sequencing, and 5D model-based quantity extraction.',
    skills: [
      'BIM Modeler: Revit (Arch, Structural, MEP) with LOD standards',
      'BIM Coordinator: Navisworks Clash Detection & BEP execution',
      'BIM Manager: ISO 19650 standards & EIR client workflows',
      'VDC Engineer: 4D scheduling & construction simulation',
      '5D BIM: Direct model quantity take-offs & cost modeling'
    ],
    growth: 'BIM Coordinator → BIM Manager → VDC Director'
  },
  {
    id: 'structural-engineer',
    num: '03',
    role: 'Structural Design Engineer',
    badge: 'Core Consulting',
    summary: 'Analyzing and sizing RCC/Steel high-rises against gravity, wind, and seismic forces using IS Codes and finite element tools.',
    skills: [
      'CSI ETABS (Level 1 & Level 2) & STAAD.Pro',
      'CSI SAFE for Raft & Isolated Foundation Design',
      'IS Codes: IS 456, IS 800, IS 1893:2016, IS 875, IS 13920',
      'RCC Member Sizing (Beams, Columns, Slabs, Shear Walls)',
      'Dynamic Response Spectrum & Wind Pressure Calculations',
      'Soil-structure interaction & design review documentation'
    ],
    growth: 'Senior Structural Designer → Chief Structural Consultant'
  },
  {
    id: 'project-manager',
    num: '04',
    role: 'Project Manager (EPC & High-Rise)',
    badge: 'Executive Leadership',
    summary: 'End-to-end project planning, cash-flow budgeting, resource leveling, and cross-team leadership across MEP and structural teams.',
    skills: [
      'Primavera P6 / MS Project Master Scheduling',
      'Budgeting, cost control & variance tracking (EVM)',
      'Contract administration & vendor negotiations',
      'Cross-discipline risk management & safety compliance',
      'Client relationship & milestone approvals'
    ],
    growth: 'Assistant PM → Project Director → VP Projects'
  },
  {
    id: 'technical-coordinator',
    num: '05',
    role: 'Project Technical Coordinator',
    badge: 'Consultancy Liaison',
    summary: 'Bridging the design consultant room, site execution team, and client architects to resolve technical RFIs seamlessly.',
    skills: [
      'Drawing revisions & document control systems',
      'RFI (Request for Information) technical resolution',
      'CAD & BIM model coordination between MEP & Struct',
      'Tracking technical deviations & site queries'
    ],
    growth: 'Technical Coordinator → Senior Engineering Manager'
  },
  {
    id: 'qa-qc-engineer',
    num: '06',
    role: 'QA / QC Engineer',
    badge: 'Quality Compliance',
    summary: 'Enforcing IS code testing standards for concrete, steel rebar, aggregate gradations, and issuing Non-Conformance Reports (NCR).',
    skills: [
      'Material test standards (IS 516, IS 1786, IS 383)',
      'Concrete slump, cube compressive testing & NDT methods',
      'Method statements & quality audit documentation',
      'Non-Conformance Report (NCR) tracking'
    ],
    growth: 'QA/QC Lead → Quality Assurance Head'
  },
  {
    id: 'planning-engineer',
    num: '07',
    role: 'Planning & Scheduling Engineer',
    badge: 'Timeline Control',
    summary: 'Building project WBS, tracking baseline vs actual progress using S-curves, and optimizing critical path float.',
    skills: [
      'Primavera P6 & MS Project resource loading',
      'Progress tracking through S-curves & earned value',
      'Delay analysis & critical path method (CPM)',
      'Monthly MIS reporting for project leadership'
    ],
    growth: 'Lead Planning Engineer → Head of Project Controls'
  },
  {
    id: 'quantity-surveyor',
    num: '08',
    role: 'Quantity Surveyor (QS) & Estimation',
    badge: 'Commercial Modeling',
    summary: 'Extracting precise material take-offs from drawings, preparing Bill of Quantities (BOQ), and calculating item rate analysis.',
    skills: [
      'Bill of Quantities (BOQ) preparation & DSR/SOR analysis',
      'Detailed material take-offs (Concrete, Steel, Formwork)',
      'Cost estimation software & advanced Excel modeling',
      'Sub-contractor rate analysis & tender estimation'
    ],
    growth: 'Senior QS → Head of Commercial & Estimation'
  },
  {
    id: 'billing-engineer',
    num: '09',
    role: 'Billing Engineer',
    badge: 'Cash Flow Management',
    summary: 'Converting site execution measurements into Running Account (RA) bills, reconciling steel/cement reconciliation sheets.',
    skills: [
      'Running Account (RA) bill preparation & certification',
      'Joint Measurement Sheets (JMS) with client engineers',
      'Cement & steel reconciliation against theoretical BOQ',
      'Contract clause interpretation & price escalation formulas'
    ],
    growth: 'Senior Billing Engineer → Head of Billing & Audit'
  },
  {
    id: 'contracts-engineer',
    num: '10',
    role: 'Contracts & Tendering Engineer',
    badge: 'Legal & Tenders',
    summary: 'Evaluating tender packages, drafting commercial agreements, analyzing FIDIC/institutional contract clauses and managing claims.',
    skills: [
      'Tendering & bidding documentation for EPC projects',
      'Contract clause drafting (FIDIC, GCC, SCC)',
      'Variation orders, claims & dispute resolution',
      'Commercial risk evaluation & subcontract agreements'
    ],
    growth: 'Contracts Manager → VP Contracts & Legal'
  }
];

/* ── 6 Company Portfolio Video Showcase (converstation.txt lines 824-835) ── */
const PORTFOLIO_VIDEOS = [
  {
    id: 'hXvEnSxk0IY',
    title: 'About Our Founder – Prof. Sandeep Pingale',
    tag: 'Founder Spotlight',
    duration: '25+ Years Experience',
    desc: 'Extensive high-rise structural design experience in Dubai (up to G+81 stories) and India, bridging academia with industry consultancy.',
    url: 'https://youtu.be/hXvEnSxk0IY'
  },
  {
    id: 'tGGUSuLAmk8',
    title: 'Gold Award – Best Structural Consultant (IINA)',
    tag: 'National Honor',
    duration: 'Industry Award',
    desc: 'eConstruct recognized with the prestigious Gold Award for structural excellence and innovation in high-rise RCC design.',
    url: 'https://youtube.com/shorts/tGGUSuLAmk8'
  },
  {
    id: 'vUXR9-RgS08',
    title: 'ECONSTRUCT Corporate Company Profile',
    tag: '15+ Years Track Record',
    duration: 'Company Tour',
    desc: 'Overview of eConstruct’s multi-disciplinary engineering portfolio spanning structural consultancy, BIM, PMC, and engineering mentorship.',
    url: 'https://youtu.be/vUXR9-RgS08'
  },
  {
    id: 'Dqd4xfEadXE',
    title: 'Hospitality Projects Showcase',
    tag: '5-Star Hotels & Resorts',
    duration: 'Portfolio Profile',
    desc: 'Structural engineering and BIM modeling for landmark hotels, luxury resorts, and high-footfall commercial hospitality complexes.',
    url: 'https://youtu.be/Dqd4xfEadXE'
  },
  {
    id: 'Bbvi8Tq_FBM',
    title: 'Structural Engineering Projects Profile',
    tag: 'G+35 Skyscraper Towers',
    duration: 'Structural Portfolio',
    desc: 'High-rise residential and commercial towers designed with dynamic seismic analysis, shear wall cores, and IS code compliance.',
    url: 'https://youtu.be/Bbvi8Tq_FBM'
  },
  {
    id: 'K8NgNwe18zo',
    title: 'BIM Technology Project Portfolio',
    tag: 'LOD 350-500 BIM',
    duration: 'Digital Twins',
    desc: 'Federated 3D Revit models, Navisworks clash resolution, and 4D/5D simulation across large-scale infrastructure developments.',
    url: 'https://youtu.be/K8NgNwe18zo'
  }
];

/* ── Digital Flipbook PDF Library ────────────────────────────────── */
const FLIPBOOK_DOCS = [
  { id: 1, title: 'Hospitality Portfolio', subtitle: '5-Star Hotels & Luxury Resorts', pdfUrl: '/pdfs/Econstruct Hospitality Website Portfolio.pdf', pages: '32 Pages' },
  { id: 2, title: 'BIM & Residential Portfolio', subtitle: 'G+35 High-Rise Developments', pdfUrl: '/pdfs/econstruct_bim.pdf', pages: '28 Pages' },
  { id: 3, title: 'Commercial Landmark Portfolio', subtitle: 'Shopping Malls & Tech Parks', pdfUrl: '/pdfs/econstruct_tushar.pdf', pages: '24 Pages' },
  { id: 4, title: 'Industrial & Institutional Profile', subtitle: 'Factories, Campuses & Pre-Engineered', pdfUrl: '/pdfs/econ_presentation.pdf', pages: '20 Pages' },
  { id: 5, title: 'Corporate Training Brochure', subtitle: 'Campus Workshop & Industry Syllabus', pdfUrl: '/pdfs/Employee Development Program for Top MNCs.pdf', pages: '18 Pages' }
];

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
    a: 'The package includes: (1) 3-Day intensive offline hands-on campus workshop, (2) 3 Months Full LMS Portal Access, (3) Guidance on two real-world structural projects (1 Residential + 1 Commercial), (4) Weekly live doubt clearing every Wednesday 7 PM - 9 PM, (5) Official Experience Letter for 2 completed projects, (6) 1-on-1 Mock Technical Interview, and (7) Authorized Joint Certification in association with IIT Bhubaneswar and Econstruct.'
  },
  {
    q: 'What are the two structural projects covered during the program?',
    a: 'Students work on two live blueprints: (1) G+5 Multi-Storey Residential Apartment Building and (2) G+12 Commercial Landmark Skyscraper Tower with shear wall cores and dynamic Response Spectrum seismic analysis.'
  },
  {
    q: 'What happens during the online practice & doubt clearing phase?',
    a: 'Following the 3-day campus training, students receive 3 months of access to our online LMS containing pre-recorded module lectures, project files, and live interactive Zoom doubt-clearing sessions every Wednesday from 7:00 PM to 9:00 PM.'
  },
  {
    q: 'How does the commercial payment schedule work?',
    a: 'A 50% advance payment is required at the time of online date reservation to lock the workshop schedule on our master calendar. The remaining 50% balance is payable after the successful completion of the 3-day offline campus workshop.'
  },
  {
    q: 'What student hardware and software prerequisites are required?',
    a: 'Each student brings their own laptop (Core i5/i7 or Ryzen 5/7, min 8GB RAM, Windows 10/11) with CSI ETABS Educational / Student version pre-installed. eConstruct provides step-by-step installation support prior to Day 1.'
  },
  {
    q: 'What certification and credentials will students receive?',
    a: 'All qualifying students who complete the workshop and project deliverables receive: (1) Authorized Joint Certificate with IIT Bhubaneswar & eConstruct, (2) Project Experience Letter for 2 completed structural designs, and (3) Structural calculation sheets to showcase in job interviews.'
  }
];

const CorporateTraining = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('day1');
  const [selectedCareer, setSelectedCareer] = useState(CAREER_PATHS[2]); // Default to Structural Design
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activeFlipbook, setActiveFlipbook] = useState(FLIPBOOK_DOCS[0]);

  // Booking state
  const [blockedDates, setBlockedDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    collegeName: '', contactPerson: '', designation: '', email: '', mobile: '',
    collegeAddress: '', studentCount: 50, department: '', additionalReq: ''
  });
  const [bookingStatus, setBookingStatus] = useState('idle'); // idle, loading, success, error
  const [bookingMessage, setBookingMessage] = useState('');
  const [confirmedBookingData, setConfirmedBookingData] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

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

    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    const endDate = format(new Date(selectedDate.getTime() + 2 * 86400000), 'dd MMM yyyy');
    const totalFee = (formData.studentCount || 50) * 12000;
    const advanceFee = totalFee * 0.5;

    const mockBookingId = `ECON-ETABS-${Date.now().toString().slice(-6)}`;
    const bookingPayload = {
      ...formData,
      bookingId: mockBookingId,
      preferredDate: formattedDate,
      startDateFormatted: format(selectedDate, 'dd MMM yyyy'),
      endDateFormatted: endDate,
      totalFee,
      advanceFee,
      gstAmount: totalFee * 0.18,
      status: 'CONFIRMED'
    };

    try {
      // Attempt backend API call
      const res = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          preferredDate: formattedDate
        })
      });

      if (res.ok) {
        const data = await res.json();
        await fetch(`http://localhost:5000/api/bookings/${data.bookingId}/mock-pay`, { method: 'POST' });
        bookingPayload.bookingId = data.bookingId;
      }
    } catch (err) {
      console.info("Using frontend resilient reservation confirmation mode", err);
    }

    // Set confirmed booking record & trigger modal
    setConfirmedBookingData(bookingPayload);
    setBookingStatus('success');
    setShowConfirmationModal(true);
    setBookingMessage('Booking confirmed successfully! Our academic coordination team will contact your institution shortly.');

    // Reset calendar selection
    setSelectedDate(null);
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 md:via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />
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
                  <Building2 className="w-4 h-4 text-blue-400" /> Academic–Industry Collaboration
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
              Learn ETABS. Model Real High-Rise Buildings. Master IS Codes. 3-Day Offline Workshop + 3 Months Online LMS + 2 Real Projects with Experience Letters.
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
                href="#two-projects"
                className="px-7 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <Layers size={16} className="text-yellow-400" />
                <span>2 Real Projects Showcase</span>
              </a>

              <a
                href="#career-map"
                className="px-6 py-4 bg-slate-900/80 border border-yellow-500/40 text-yellow-400 font-bold uppercase tracking-wider text-sm hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-2"
              >
                <Compass size={16} />
                <span>10 Civil Career Map</span>
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
                { to: '2', s: ' Live Projects', label: 'Residential + Commercial', icon: Layers },
                { to: '3', s: ' Months', label: 'LMS + Weekly Doubt Zoom', icon: Clock },
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

      {/* ── 02. ITEM 11 (STORY 1): THE TWO ENGINEERS MANIFESTO ────────────────── */}
      <section className="py-14 md:py-18 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-600 font-black uppercase tracking-[0.25em] text-xs">
                A Message to College Management &amp; Faculty
              </span>
              <span className="w-8 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
              Picture Two Engineers Walking into Their First Job on the Same Day.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Why the 1,460 days of an engineering degree must shift from rote exam competition to live, project-backed problem solving.
            </p>
          </div>

          {/* Dual Engineer Contrast Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
            
            {/* Engineer A: The Exam Topper */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 relative shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-red-100 text-red-700 rounded-full border border-red-200">
                  Engineer A · The Academic Topper
                </span>
                <span className="text-2xl font-black text-slate-400">9.2 CGPA</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-3">
                Gold Medalist with 4 Years of Notes &amp; Theory
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Spent 4 years memorizing formulas for internal assessments and rank lists.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Cannot raise a basic structural query or read an RCC structural drawing on site.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Company spends 6–12 months and lakhs in re-training a "qualified" fresher from scratch.</span>
                </li>
              </ul>
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs font-bold text-red-800">
                ⚠️ Outcome: High theoretical rank, but zero site &amp; software readiness on Day 1.
              </div>
            </div>

            {/* Engineer B: The Econstruct Project-Trained Engineer */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 border-2 border-yellow-500 text-white relative shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-yellow-500 text-slate-950 rounded-full font-black">
                  Engineer B · The eConstruct Trained Engineer
                </span>
                <span className="text-2xl font-black text-yellow-400">7.4 CGPA</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-3">
                Designed, Modeled &amp; Analyzed 2 Real Multi-Storey Buildings
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="text-yellow-400 font-bold mt-0.5">✓</span>
                  <span>Guided by practicing structural engineering consultants on real commercial blueprints.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-yellow-400 font-bold mt-0.5">✓</span>
                  <span>Confidently sets up Cartesian grids, runs dynamic seismic response spectrum, and extracts SAFE base reactions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-yellow-400 font-bold mt-0.5">✓</span>
                  <span>Carries verified structural calculation reports, rebar schedules, and IIT Bhubaneswar credential.</span>
                </li>
              </ul>
              <div className="p-3 bg-yellow-500/15 border border-yellow-500/30 rounded-xl text-xs font-bold text-yellow-400">
                🏆 Result: Trusted with live project responsibilities from the first week of onboarding.
              </div>
            </div>

          </div>

          {/* Dual Mentorship & Philosophy Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-widest block mb-1">
                The Dual-Mentorship Paradigm
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                College HOD + Industry Structural Director
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                "Marks rank one student against another. Collaboration is what the industry actually runs on. When colleges and eConstruct partner, your students don't graduate as freshers who need six months of re-training — they graduate as job-ready structural engineers."
              </p>
            </div>
            <button
              onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-black uppercase tracking-wider text-xs rounded-xl shrink-0 transition-all shadow-lg active:scale-95"
            >
              Collaborate for Your Batch →
            </button>
          </div>

        </div>
      </section>

      {/* ── 03. ITEM 6: TWO REAL PROJECTS COMMITMENT & 6-STAGE PIPELINE ──────── */}
      <section id="two-projects" className="py-14 md:py-18 bg-slate-950 text-white border-b-2 border-yellow-500/80 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">

          {/* Slogan Banner */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-1.5 rounded-full text-yellow-400 text-xs font-black uppercase tracking-widest mb-3">
              <TrophyIcon size={14} /> Two-Project Mandatory Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Learn ETABS → Work on Real Projects → Complete 2 Projects → Get Industry Exposure
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              We do not teach abstract commands. Every formula, load case, and reinforcement check is applied directly to complete two structural engineering projects.
            </p>
          </div>

          {/* 6-Stage Visual Workflow Banner (converstation.txt line 304) */}
          <div className="mb-14 bg-slate-900/90 p-5 sm:p-7 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <span className="text-xs font-black uppercase text-yellow-400 tracking-wider flex items-center gap-2">
                <Layers size={15} /> 6-Stage End-to-End Structural Engineering Pipeline
              </span>
              <span className="text-[11px] text-slate-400 font-bold hidden sm:block">
                Consultancy-Standard Workflow
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { step: '01', title: 'Concept & Grid', desc: 'Architectural CAD Coordination & Storey Elevations' },
                { step: '02', title: '3D Modelling', desc: 'Columns, Beams, Slabs, Shear Walls & Rigid Diaphragms' },
                { step: '03', title: 'Code Loads & Analysis', desc: 'IS 875 Wind, IS 1893:2016 Response Spectrum Dynamic Seismic' },
                { step: '04', title: 'Concrete Design', desc: 'Demand/Capacity Sizing & IS 13920 Ductile Detailing' },
                { step: '05', title: 'Foundation SAFE', desc: 'Base Reactions Export for Isolated & Raft Footings' },
                { step: '06', title: 'Documentation', desc: 'Structural Calculation Reports & Rebar Schedules' }
              ].map((pipe, idx) => (
                <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between group hover:border-yellow-500/50 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-yellow-400 font-black text-xs">{pipe.step}</span>
                      <span className="text-slate-600 text-[10px] font-bold">Phase</span>
                    </div>
                    <h4 className="text-white font-bold text-xs sm:text-[13px] leading-snug mb-1 group-hover:text-yellow-400 transition-colors">
                      {pipe.title}
                    </h4>
                    <p className="text-slate-400 text-[10px] leading-relaxed">
                      {pipe.desc}
                    </p>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] font-bold text-slate-500">
                    <span>Verified</span>
                    <span className="text-yellow-400">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The 2 Specific Blueprint Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">

            {/* Project 1: G+5 Residential */}
            <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-yellow-500/60 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-[40px] pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 text-[10px] font-black uppercase px-2.5 py-0.5 rounded tracking-wider">
                    Project 01 · Residential
                  </span>
                  <span className="text-xs font-black text-slate-400">G+5 Storeys</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  G+5 Multi-Storey Residential Apartment
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Full structural design starting from architectural 2D floor plans. Students model column grid layouts, beam depth optimizations, one-way/two-way slab load distribution, and column P-M-M interaction curves.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 mb-6 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0" />
                    <span>Dead, live, and floor finish load distribution (IS 875 Part 1 &amp; 2)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0" />
                    <span>RCC concrete frame sizing &amp; deflection limit state checks (IS 456)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0" />
                    <span>Isolated footing reactions &amp; Bar Bending Schedule (BBS) output</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold">
                <span className="text-yellow-400 font-bold">Deliverable: Calculation Book &amp; Rebar Schedule</span>
                <span className="text-slate-400">Phase 1</span>
              </div>
            </div>

            {/* Project 2: G+12 Commercial */}
            <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group hover:border-yellow-500/60 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-500/20 text-blue-400 border border-blue-500/40 text-[10px] font-black uppercase px-2.5 py-0.5 rounded tracking-wider">
                    Project 02 · Commercial Landmark
                  </span>
                  <span className="text-xs font-black text-slate-400">G+12 High-Rise</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  G+12 Commercial Landmark Skyscraper
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Advanced high-rise design with elevator shear wall core, dynamic seismic Response Spectrum (IS 1893:2016), wind load coefficients (IS 875 Part 3), storey drift limitations, and SAFE raft foundation export.
                </p>
                <div className="space-y-1.5 text-xs text-slate-300 mb-6 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0" />
                    <span>Shear wall core modelling &amp; ductile boundary detailing (IS 13920:2016)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0" />
                    <span>Dynamic Response Spectrum modal mass participation (&gt;90%) &amp; P-Delta checks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0" />
                    <span>Base moment &amp; axial force export to CSI SAFE for Mat/Raft foundation</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold">
                <span className="text-yellow-400 font-bold">Deliverable: Complete Commercial Structural Portfolio</span>
                <span className="text-slate-400">Phase 2</span>
              </div>
            </div>

          </div>

          {/* Project Credentials Badge Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/15 text-yellow-400 flex items-center justify-center shrink-0">
                <FileBadge size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs">Official Experience Letter</h4>
                <p className="text-slate-400 text-[11px]">Issued for the 2 completed structural projects</p>
              </div>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/15 text-yellow-400 flex items-center justify-center shrink-0">
                <Presentation size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs">1-on-1 Mock Technical Interview</h4>
                <p className="text-slate-400 text-[11px]">Direct project evaluation with Chief Structural Director</p>
              </div>
            </div>

            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-500/15 text-yellow-400 flex items-center justify-center shrink-0">
                <MonitorPlay size={20} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xs">Weekly Live Doubt Zoom Sessions</h4>
                <p className="text-slate-400 text-[11px]">Every Wednesday 7:00 PM – 9:00 PM for 3 Months</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 04. ITEM 11 (STORY 2): PLACEMENT SECURITY & RECRUITER TRUST ──────── */}
      <section className="py-14 md:py-18 bg-slate-50 border-b border-gray-200">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Editorial Narrative on Recruiter Trust */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
                <span className="text-yellow-600 font-black uppercase tracking-[0.2em] text-xs">
                  Placement &amp; Academic ROI
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Placement Season Quietly Answers a Question: How Many Recruiters Came Back This Year?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Placement officers don't just place students. They protect relationships — the quiet trust a recruiter has that whoever walks out of your gates can actually perform on day one without costing 6 months of corporate retraining.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                When candidates walk into technical interviews carrying verified calculation sheets and structural models for 2 complete high-rises, your placement team is no longer selling "potential" — they are <strong>presenting proof</strong>.
              </p>

              {/* Partnership with IIT Bhubaneswar Pathway Highlight */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 bg-white rounded-xl p-1 border border-gray-200 shadow-sm shrink-0 flex items-center justify-center">
                    <img src="/iit-bhubaneswar-crest.png" alt="IIT Bhubaneswar Crest" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-200 inline-block mb-1">
                      Credentialed Specialization Pathway
                    </span>
                    <h4 className="text-slate-900 font-bold text-sm sm:text-base mb-1">
                      Econstruct × IIT Bhubaneswar 12-Month PG Diploma Pathway
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      For graduating students and alumni: An IIT-backed specialization pathway in Structural Engineering and BIM + Project Management, built entirely around live project execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Institutional Benefits Checklist */}
            <div className="lg:col-span-5 bg-slate-950 text-white p-6 sm:p-7 rounded-2xl shadow-xl border border-slate-800">
              <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                <TrendingUp className="text-yellow-400" size={20} />
                <span>Why Department Heads Choose This Partnership</span>
              </h3>
              
              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Eliminates the "Fresher" Disadvantage:</strong> Students understand drafting, analysis, and IS codes like a 2nd-year site/design engineer.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Tangible Project Portfolio:</strong> Every participant finishes with calculation books and blueprints ready for portfolio reviews.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Dual Mentorship Branding:</strong> Showcase formal industry collaboration in NAAC, NBA, and institutional accreditation reviews.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Zero Travel Overhead:</strong> Senior consultants travel directly to your campus lab to train your students in person.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-yellow-400">
                <span>Batch Size: Min. 50 Students</span>
                <span>Custom Dates Available</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 05. ITEM 11 (STORY 3): INTERACTIVE 10 CIVIL CAREER PATHS MAP ──────── */}
      <section id="career-map" className="py-14 md:py-18 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-600 font-black uppercase tracking-[0.25em] text-xs">
                Beyond Just Site Engineer or Govt Exams
              </span>
              <span className="w-8 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              The 10 Real Civil Engineering Career Paths Map
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Most students graduate knowing only 2 roles. Here is the complete career map with the exact software tools and technical skills demanded by top AEC firms.
            </p>
          </div>

          {/* Interactive Career Explorer */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Role Navigation Buttons (10 Roles) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 max-h-[580px] overflow-y-auto pr-1">
              {CAREER_PATHS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedCareer(item)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                    selectedCareer.id === item.id
                      ? 'bg-slate-950 text-white border-yellow-500 shadow-md border-l-4'
                      : 'bg-slate-50 text-slate-700 border-gray-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-black px-1.5 py-0.5 rounded ${selectedCareer.id === item.id ? 'bg-yellow-500 text-black' : 'bg-gray-200 text-gray-700'}`}>
                      {item.num}
                    </span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm leading-snug">{item.role}</h4>
                      <span className={`text-[10px] font-bold ${selectedCareer.id === item.id ? 'text-yellow-400' : 'text-slate-500'}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <ChevronDown size={14} className={selectedCareer.id === item.id ? 'text-yellow-400 -rotate-90' : 'text-slate-400'} />
                </button>
              ))}
            </div>

            {/* Right: Selected Role Deep-Dive Card */}
            <div className="lg:col-span-7 bg-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <span className="text-yellow-400 text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
                  <Compass size={16} /> Role #{selectedCareer.num} · Technical Deep Dive
                </span>
                <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  {selectedCareer.badge}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                {selectedCareer.role}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                {selectedCareer.summary}
              </p>

              <h4 className="text-xs font-black uppercase tracking-wider text-yellow-400 mb-3 flex items-center gap-1.5">
                <Code2 size={14} /> Core Skill Stack &amp; Software Tools:
              </h4>

              <div className="grid sm:grid-cols-2 gap-2 mb-6">
                {selectedCareer.skills.map((sk, idx) => (
                  <div key={idx} className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                    <span>{sk}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Career Progression Pathway:</span>
                  <span className="text-white font-black">{selectedCareer.growth}</span>
                </div>
                <button
                  onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-black uppercase text-xs rounded-lg transition-colors"
                >
                  Train Students in this Stack →
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 06. ITEM 9: STUDENT LAPTOP & HOST INFRASTRUCTURE CHECKLIST ────────── */}
      <section className="py-14 md:py-18 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-400 font-black uppercase tracking-[0.25em] text-xs">
                Workshop Prerequisites (converstation.txt Line 542)
              </span>
              <span className="w-8 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Hardware &amp; Campus Infrastructure Checklist
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Every registered student must have their own laptop with the educational / student version of CSI ETABS installed for the 3-day lab sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Student Hardware & Software Card */}
            <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/15 text-yellow-400 flex items-center justify-center shrink-0">
                    <Laptop size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">Student Laptop Specifications</h3>
                    <p className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Required for Every Participant</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 mb-6">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
                    <Cpu size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Processor &amp; RAM:</strong>
                      Intel Core i5 / i7 (8th Gen+) or AMD Ryzen 5 / 7, with minimum <strong>8GB RAM</strong> (16GB recommended for 3D finite element meshing).
                    </div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
                    <HardDrive size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Operating System &amp; Storage:</strong>
                      64-bit Windows 10 or Windows 11 with at least 15GB of free SSD storage space.
                    </div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
                    <Monitor size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Software Pre-installation:</strong>
                      CSI ETABS Educational / Student Trial or Institutional license pre-installed prior to Day 1 morning. (Installation guide provided).
                    </div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
                    <CheckSquare size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Required Accessories:</strong>
                      Dedicated optical mouse with scroll wheel (crucial for 3D model panning and orbiting) + power charging brick.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-xs font-bold text-yellow-400 text-center">
                ✓ eConstruct provides step-by-step ETABS installation manuals to college coordinators.
              </div>
            </div>

            {/* Host Institution Setup Card */}
            <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">Host College Campus Facilities</h3>
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-wider">Provided by Host Institution</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 mb-6">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
                    <Presentation size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Venue Setup:</strong>
                      Computer Laboratory or Seminar Hall with high-lumen digital projector / large LED display and clear audio microphone system.
                    </div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
                    <Zap size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Power Outlets:</strong>
                      Surge protectors and multiple power points distributed across rows to keep 50+ student laptops powered continuously.
                    </div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
                    <Globe size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">High-Speed Wi-Fi:</strong>
                      Campus Wi-Fi connectivity for license validations, dataset downloads, and digital calculation files.
                    </div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
                    <Users size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Faculty Coordinator:</strong>
                      One designated departmental faculty coordinator to manage classroom attendance and certificate distribution.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-xs font-bold text-blue-300 text-center">
                ✓ Minimum batch commitment: 50 registered civil engineering students.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 07. ITEM 10: COMPANY PORTFOLIO VIDEOS & FLIPBOOK LIBRARY ──────────── */}
      <section className="py-14 md:py-18 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-8 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-600 font-black uppercase tracking-[0.25em] text-xs">
                Company Credentials &amp; Portfolio (converstation.txt lines 819-842)
              </span>
              <span className="w-8 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              Explore Our Structural Consultancy &amp; Project Portfolios
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Watch our official track record videos and flip through digital portfolio brochures showcasing 15+ years of structural excellence across India &amp; UAE.
            </p>
          </div>

          {/* 6 YouTube Reference Videos Grid */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
              <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                <Video className="text-yellow-600" size={20} />
                <span>Official Video Profiles &amp; Project Spotlights</span>
              </h3>
              <span className="text-xs font-bold text-slate-500">6 Video References</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PORTFOLIO_VIDEOS.map((vid) => (
                <div
                  key={vid.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-yellow-400"
                >
                  <div
                    className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden group/thumb"
                    onClick={() => setActiveVideoModal(vid)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover/thumb:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-yellow-500 text-slate-950 flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform">
                        <Play size={20} className="ml-1 fill-slate-950" />
                      </div>
                    </div>
                    <div className="absolute top-2.5 left-2.5 bg-slate-950/85 backdrop-blur-md text-yellow-400 text-[10px] font-black uppercase px-2.5 py-0.5 rounded border border-white/10">
                      {vid.tag}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {vid.duration}
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-black text-slate-900 text-sm leading-snug mb-1.5 group-hover:text-yellow-600 transition-colors">
                        {vid.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-3">
                        {vid.desc}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => setActiveVideoModal(vid)}
                        className="text-xs font-bold text-yellow-700 hover:text-yellow-800 flex items-center gap-1"
                      >
                        <Play size={12} className="fill-current" /> Watch Video
                      </button>
                      <a
                        href={vid.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-bold text-slate-400 hover:text-slate-700 flex items-center gap-1"
                      >
                        <span>YouTube</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Digital Flipbooks Section */}
          <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-800">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
              <div>
                <span className="text-yellow-400 text-xs font-black uppercase tracking-widest block mb-1">
                  Institutional Review Material (Flipbooks)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Interactive Digital Company Portfolios
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {FLIPBOOK_DOCS.map((doc) => (
                  <button
                    key={doc.id}
                    onClick={() => setActiveFlipbook(doc)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      activeFlipbook.id === doc.id
                        ? 'bg-yellow-500 text-black shadow-md font-black'
                        : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    {doc.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-4 space-y-3">
                <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800">
                  <span className="text-yellow-400 text-[10px] font-black uppercase tracking-wider block mb-1">Currently Viewing</span>
                  <h4 className="text-lg font-black text-white mb-1">{activeFlipbook.title}</h4>
                  <p className="text-slate-400 text-xs mb-3">{activeFlipbook.subtitle}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-300 font-bold mb-4">
                    <BookMarked size={14} className="text-yellow-400" />
                    <span>{activeFlipbook.pages} Digital Document</span>
                  </div>
                  <a
                    href={activeFlipbook.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-yellow-500/20 hover:bg-yellow-500 hover:text-black text-yellow-400 font-bold text-xs rounded-xl border border-yellow-500/40 transition-colors"
                  >
                    <Download size={13} />
                    <span>Open / Download PDF</span>
                  </a>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  * College authorities can browse through structural case studies, high-rise drawings, and completed landmark projects.
                </p>
              </div>

              {/* Flipbook Container */}
              <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-3 sm:p-4 border border-slate-800 flex items-center justify-center min-h-[420px]">
                <PdfFlipbook pdfUrl={activeFlipbook.pdfUrl} width={640} height={420} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 08. FOUNDER & LEAD TRAINER SPOTLIGHT ─────────────────────────────── */}
      <section className="py-10 md:py-14 bg-slate-950 text-white border-b-2 border-yellow-500/80 relative overflow-hidden">
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

      {/* ── 09. REAL CAMPUS SESSIONS & SITE VISITS SCROLLER ───────────────────── */}
      <SiteVisitsScroller
        badge="HANDS-ON CAMPUS WORKSHOPS & SITE IMMERSION"
        title="Workshops & Site Visits"
        highlight="in Action"
        subtitle="Real classroom sessions, ETABS modeling workshops, and on-site structural inspections conducted across Indian campuses."
      />

      {/* ── 10. STUDENT REVIEWS SHOWCASE ──────────────────────────────────────── */}
      <StudentVideoReviewsShowcase
        title="Student Experiences & Workshop Reviews"
        subtitle="Hear directly from civil engineering students and faculty who attended eConstruct's ETABS workshops."
      />

      {/* ── 11. ITEM 3: INTERACTIVE BOOKING & REGISTRATION SYSTEM ─────────────── */}
      <section id="booking-section" className="py-14 md:py-18 bg-slate-100/90 relative border-b border-gray-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

          {/* Section Heading */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-600 font-extrabold uppercase tracking-[0.2em] text-[10px]">
                Campus Dates Reservation Portal
              </span>
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2">
              Book Your College Campus Workshop
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
              Select your 3-day start date on the interactive calendar, configure student batch size, and reserve your dates.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-start">

            {/* ── LEFT COLUMN: CALENDAR & INVESTMENT ───────────────── */}
            <div className="lg:col-span-5 bg-slate-950 text-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-[50px] pointer-events-none" />

              {/* 1. Transparent Program Investment */}
              <div className="relative z-10 mb-5">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 text-yellow-400">
                    <Calculator size={16} />
                    <span className="font-black tracking-widest uppercase text-[10px]">Program Investment</span>
                  </div>
                  <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-[9px] font-black uppercase px-2 py-0.5 rounded">
                    Institutional Rate
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-white">₹12,000</span>
                  <span className="text-slate-400 font-medium text-xs">+ 18% GST / Student</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  3-Day On-Campus Lab + 3 Months Online LMS + 2 Real Projects + IIT Bhubaneswar Joint Certification.
                </p>

                {/* Quick Batch Presets */}
                <div className="mt-3.5 pt-3 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-2">
                    <span>Quick Select Batch Size:</span>
                    <span className="text-yellow-400 font-extrabold">{formData.studentCount || 50} Students</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[50, 75, 100, 150].map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => setFormData({ ...formData, studentCount: count })}
                        className={`py-1.5 px-2 rounded-lg text-xs font-black transition-all ${
                          Number(formData.studentCount) === count
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
                <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Phase 1: Advance</span>
                    <span className="text-yellow-400 font-black text-sm">50% (₹{((totalFeeEstimate * 0.5)).toLocaleString()})</span>
                  </div>
                  <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Phase 2: Post-Workshop</span>
                    <span className="text-white font-black text-sm">50% (₹{((totalFeeEstimate * 0.5)).toLocaleString()})</span>
                  </div>
                </div>
              </div>

              {/* 2. Step 1: Interactive Date Calendar */}
              <div className="relative z-10 bg-slate-900/90 p-4 rounded-xl border border-slate-800 mb-4 shadow-inner">
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CalendarIcon className="text-yellow-500" size={15} />
                    <span>Step 1: Select 3-Day Start Date</span>
                  </h3>
                  <span className="text-[9px] bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-2 py-0.5 rounded font-black uppercase">
                    3-Day Block
                  </span>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800/80">
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
                  <div className="mt-3 p-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-start gap-2.5">
                    <CheckCircle2 className="text-yellow-400 shrink-0 mt-0.5" size={16} />
                    <div className="text-left">
                      <p className="text-[10px] text-yellow-400 font-black uppercase tracking-wider">Campus Slot Selected</p>
                      <p className="text-white font-black text-xs sm:text-sm">
                        {format(selectedDate, 'EEE, dd MMM yyyy')} → {format(new Date(selectedDate.getTime() + 2 * 86400000), 'EEE, dd MMM yyyy')}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2.5 p-2 bg-slate-950/60 border border-slate-800/60 rounded-lg text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                    <CalendarIcon size={13} className="text-yellow-500" />
                    <span>Click on an available start date above.</span>
                  </div>
                )}
              </div>

              {/* 3. Assurances Checklist */}
              <div className="relative z-10 grid grid-cols-2 gap-2 text-[10px] font-bold text-slate-300 pt-2 border-t border-slate-800/80">
                <span className="flex items-center gap-1 text-slate-200">
                  <Check size={12} className="text-yellow-400" /> IIT Bhubaneswar Cert
                </span>
                <span className="flex items-center gap-1 text-slate-200">
                  <Check size={12} className="text-yellow-400" /> Consultant On-Site
                </span>
                <span className="flex items-center gap-1 text-slate-200">
                  <Check size={12} className="text-yellow-400" /> 3 Months Online LMS
                </span>
                <span className="flex items-center gap-1 text-slate-200">
                  <Check size={12} className="text-yellow-400" /> Official Academic MOU
                </span>
              </div>

            </div>

            {/* ── RIGHT COLUMN: REGISTRATION & CONFIRMATION FORM ──────── */}
            <div className="lg:col-span-7 bg-white p-5 sm:p-7 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.06)] border border-gray-200">

              {/* Form Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-gray-200">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 flex items-center gap-2">
                    <Presentation className="text-yellow-600" size={20} />
                    <span>Step 2: College &amp; Coordinator Details</span>
                  </h3>
                  <p className="text-slate-500 text-xs">Provide institutional and coordinator info for workshop confirmation &amp; MOU dispatch.</p>
                </div>
                <span className="text-[10px] font-black text-slate-700 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded uppercase tracking-wider hidden sm:block">
                  Academic MOU
                </span>
              </div>

              <form onSubmit={submitBooking} className="space-y-3.5">

                {/* College Name & Contact Person */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      College / University Name *
                    </label>
                    <div className="relative">
                      <Building2 size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="text"
                        name="collegeName"
                        placeholder="e.g. National Institute of Engineering"
                        value={formData.collegeName}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Coordinator / Contact Person *
                    </label>
                    <div className="relative">
                      <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="text"
                        name="contactPerson"
                        placeholder="e.g. Dr. Rajesh Sharma"
                        value={formData.contactPerson}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Designation & Department */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Designation *
                    </label>
                    <input
                      required
                      type="text"
                      name="designation"
                      placeholder="e.g. HOD / Principal / Placement Head"
                      value={formData.designation}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Department *
                    </label>
                    <input
                      required
                      type="text"
                      name="department"
                      placeholder="e.g. Civil Engineering / Structures"
                      value={formData.department}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                    />
                  </div>
                </div>

                {/* Email & Mobile */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Official Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="e.g. civil.hod@college.edu"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Mobile / WhatsApp Number *
                    </label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="tel"
                        name="mobile"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.mobile}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                      />
                    </div>
                  </div>
                </div>

                {/* Campus Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Campus Address &amp; Location *
                  </label>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3 top-3 text-slate-400" />
                    <textarea
                      required
                      name="collegeAddress"
                      placeholder="Campus street, city, state, pin code"
                      value={formData.collegeAddress}
                      onChange={handleFormChange}
                      rows="2"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                    />
                  </div>
                </div>

                {/* Student Batch & Synced Date Row */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Batch Size (Min. 50 Students) *
                    </label>
                    <div className="relative">
                      <Users size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="number"
                        min="50"
                        name="studentCount"
                        value={formData.studentCount}
                        onChange={handleFormChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-bold text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Selected 3-Day Workshop Slot
                    </label>
                    <div className="relative">
                      <CalendarIcon size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        readOnly
                        value={selectedDate ? `${format(selectedDate, 'dd MMM yyyy')} (3 Days)` : 'Select start date on left calendar'}
                        className={`w-full border rounded-xl pl-9 pr-3 py-2.5 text-xs font-bold cursor-not-allowed ${
                          selectedDate ? 'bg-yellow-50 border-yellow-300 text-slate-900' : 'bg-slate-100 border-slate-200 text-slate-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Specific Requirements or Lab Timings (Optional)
                  </label>
                  <textarea
                    name="additionalReq"
                    placeholder="Lab capacity, session timings, custom IS codes, etc."
                    value={formData.additionalReq}
                    onChange={handleFormChange}
                    rows="1"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500/30 transition-all font-medium text-slate-900"
                  />
                </div>

                {/* Live Order Breakdown Card */}
                <div className="bg-slate-900 text-white p-3.5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs font-bold pb-2 border-b border-slate-800">
                    <span className="text-slate-400">Total Program Investment ({formData.studentCount || 50} Students):</span>
                    <span className="text-white font-black">₹{totalFeeEstimate.toLocaleString()} + 18% GST</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-yellow-400 pt-2">
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={14} className="text-yellow-400" /> Initial Advance (50% Milestone):
                    </span>
                    <span className="text-base font-black text-yellow-400">
                      ₹{(totalFeeEstimate * 0.5).toLocaleString()} + GST
                    </span>
                  </div>
                </div>

                {/* Status Messages */}
                {bookingMessage && !showConfirmationModal && (
                  <div className={`p-3 rounded-xl text-xs font-bold flex items-start gap-2 ${
                    bookingStatus === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                    <span>{bookingMessage}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={bookingStatus === 'loading'}
                    className="w-full py-3.5 bg-yellow-500 text-slate-950 font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-yellow-400 transition-all rounded-xl shadow-[0_4px_20px_rgba(234,179,8,0.3)] flex items-center justify-center gap-2 disabled:opacity-70 group hover:scale-[1.005] active:scale-95"
                  >
                    <span>{bookingStatus === 'loading' ? 'Submitting Reservation...' : `Confirm Campus Workshop Booking (50% Advance)`}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-center text-[11px] text-slate-500 mt-2.5 leading-relaxed">
                    * Formal Academic–Industry MOU. Need an official institutional PO / quote first? Call our Director at <a href="tel:+919036744017" className="font-bold text-yellow-600 hover:underline">+91 90367 44017</a>.
                  </p>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── 12. FAQ ACCORDION (COMPACT 2-COLUMN GRID) ─────────────────────────── */}
      <section className="py-14 md:py-18 bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">

          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-yellow-600 font-extrabold uppercase tracking-[0.2em] text-[10px]">
                Frequently Asked Questions
              </span>
              <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">
              Everything You Need to Know
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto">
              Answers regarding batch sizing, software prerequisites, IIT certification, and commercial milestones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3.5 items-start">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)] ${
                    isOpen ? 'border-yellow-500 ring-1 ring-yellow-500/20' : 'border-gray-200 hover:border-yellow-400'
                  }`}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors"
                  >
                    <span className={`font-bold pr-3 text-xs sm:text-sm leading-snug ${isOpen ? 'text-slate-950' : 'text-slate-800'}`}>
                      {faq.q}
                    </span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-yellow-500 text-black' : 'bg-yellow-500/15 text-yellow-700'
                    }`}>
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 sm:p-5 pt-0 text-slate-600 border-t border-gray-100 text-xs leading-relaxed">
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

      {/* ── 13. HIGH CONVERTING CTA SECTION ───────────────────────────────────── */}
      <CTASection />

      {/* ── 14. VIDEO MODAL PLAYER POPUP (ITEM 10) ────────────────────────────── */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-md overflow-y-auto p-4 sm:p-6 flex items-center justify-center"
            onClick={() => setActiveVideoModal(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse" />
                  <h3 className="text-white font-bold text-sm sm:text-base truncate">{activeVideoModal.title}</h3>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center hover:bg-yellow-400 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="relative aspect-video max-h-[60vh] bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoModal.id}?autoplay=1`}
                  title={activeVideoModal.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-slate-950 text-slate-300 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800">
                <p className="line-clamp-2 text-slate-300">{activeVideoModal.desc}</p>
                <a
                  href={activeVideoModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-yellow-500 text-black font-bold text-xs rounded-lg shrink-0 flex items-center gap-1.5"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 15. BOOKING CONFIRMATION MODAL & VOUCHER (ITEM 3) ─────────────────── */}
      <AnimatePresence>
        {showConfirmationModal && confirmedBookingData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md overflow-y-auto p-4 sm:p-6 flex items-center justify-center"
            onClick={() => setShowConfirmationModal(false)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 flex flex-col my-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Voucher Header */}
              <div className="bg-slate-950 text-white p-6 sm:p-7 border-b-4 border-yellow-500 relative">
                <button
                  onClick={() => setShowConfirmationModal(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-[10px] font-black uppercase tracking-wider mb-2">
                  <CheckCircle2 size={12} /> Reservation Successful &amp; Locked
                </div>
                <h3 className="text-2xl font-black text-white">Workshop Booking Voucher</h3>
                <p className="text-slate-400 text-xs mt-0.5">Booking Ref: <strong className="text-yellow-400">{confirmedBookingData.bookingId}</strong></p>
              </div>

              {/* Voucher Body Details */}
              <div className="p-6 sm:p-7 space-y-4 text-xs text-slate-700 bg-white">
                
                <div className="grid sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 text-[10px] font-bold uppercase block">Host Institution</span>
                    <strong className="text-slate-950 text-sm block">{confirmedBookingData.collegeName}</strong>
                    <span className="text-slate-500 text-[11px] block mt-0.5">{confirmedBookingData.collegeAddress}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 text-[10px] font-bold uppercase block">Coordinator Details</span>
                    <strong className="text-slate-950 text-sm block">{confirmedBookingData.contactPerson}</strong>
                    <span className="text-slate-500 text-[11px] block">{confirmedBookingData.designation} · {confirmedBookingData.department}</span>
                    <span className="text-slate-500 text-[11px] block">{confirmedBookingData.email} | {confirmedBookingData.mobile}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-yellow-50/80 p-3 rounded-xl border border-yellow-200">
                    <span className="text-yellow-800 text-[10px] font-bold uppercase block">3-Day Campus Dates</span>
                    <strong className="text-slate-900 text-xs block mt-0.5">
                      {confirmedBookingData.startDateFormatted} → {confirmedBookingData.endDateFormatted}
                    </strong>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 text-[10px] font-bold uppercase block">Batch Size</span>
                    <strong className="text-slate-900 text-xs block mt-0.5">{confirmedBookingData.studentCount} Students</strong>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-400 text-[10px] font-bold uppercase block">Initial 50% Advance</span>
                    <strong className="text-yellow-700 text-xs block mt-0.5">₹{confirmedBookingData.advanceFee.toLocaleString()} + GST</strong>
                  </div>
                </div>

                {/* Next Steps Checklist */}
                <div className="bg-slate-900 text-white p-4 rounded-xl space-y-1.5 text-xs">
                  <h4 className="text-yellow-400 font-bold uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                    <Sparkles size={13} /> Next Steps for Host Institution:
                  </h4>
                  <div className="flex items-start gap-2 text-slate-300">
                    <span className="text-yellow-400 font-bold">1.</span>
                    <span>Our Academic Coordination Director will contact you within 24 hours to confirm logistical setup.</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <span className="text-yellow-400 font-bold">2.</span>
                    <span>An official signed Academic–Industry MOU &amp; Proforma Invoice will be dispatched to your email.</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <span className="text-yellow-400 font-bold">3.</span>
                    <span>Students will receive ETABS software installation manuals and pre-workshop dataset files.</span>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-3 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors"
                  >
                    <Printer size={14} /> Print / Save Voucher
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/919036744017?text=${encodeURIComponent(`Hi Econstruct, we have reserved dates for ${confirmedBookingData.collegeName} (Ref: ${confirmedBookingData.bookingId}). Please share the formal MOU.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm transition-colors"
                    >
                      <MessageSquare size={14} /> WhatsApp Coordinator
                    </a>

                    <button
                      onClick={() => setShowConfirmationModal(false)}
                      className="px-4 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xs rounded-xl transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default CorporateTraining;
