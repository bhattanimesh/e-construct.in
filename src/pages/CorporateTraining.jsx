import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import { 
  Building2, Calendar as CalendarIcon, Users, CheckCircle2, ChevronDown, ChevronUp, 
  ArrowRight, BookOpen, Presentation, Code2, MonitorPlay, MessageSquare, 
  FileCheck2, GraduationCap, MapPin, Briefcase, IndianRupee, ShieldCheck
} from 'lucide-react';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import heroImg from '../assets/CorporateON-JOBTraining.webp';

const faqs = [
  { q: 'Who can attend the workshop?', a: 'Final-year and pre-final-year B.Tech Civil Engineering students, and M.Tech Structural Engineering students.' },
  { q: 'What is the minimum number of students?', a: 'A minimum batch size of 50 students is required for the campus workshop.' },
  { q: 'Where is the workshop conducted?', a: 'The 3-day workshop is conducted offline, directly at your college/institution campus by the eConstruct team.' },
  { q: 'What is included in the ₹12,000 fee?', a: 'It includes the 3-day offline workshop, 45-day online practice program, guidance for two structural projects, pre-recorded learning videos, and weekly live doubt-clearing sessions.' },
  { q: 'What happens after the 3-day workshop?', a: 'Students enter a 45-day online practice phase where they complete two real-world structural projects with our support.' },
  { q: 'How does the payment work?', a: '50% advance payment is required at the time of booking online to confirm the dates. The remaining 50% is paid after the successful completion of the 3-day offline workshop.' },
];

const CorporateTraining = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
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
    fetch('http://localhost:5000/api/calendar') // fallback for dev, normally relative /api/calendar
      .then(res => res.json())
      .then(data => {
        // data should be array of objects with { date: "YYYY-MM-DD" }
        setBlockedDates(data.map(d => new Date(d.date).toDateString()));
      })
      .catch(err => console.error("Error fetching calendar", err));
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const tileDisabled = ({ date, view }) => {
    if (view === 'month') {
      // Disable past dates
      if (date < new Date(new Date().setHours(0,0,0,0))) return true;
      // Disable explicitly blocked dates
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

      // Simulate payment step successful (since gateway is skipped)
      const payRes = await fetch(`http://localhost:5000/api/bookings/${data.bookingId}/mock-pay`, { method: 'POST' });
      if (!payRes.ok) throw new Error('Payment simulation failed');

      setBookingStatus('success');
      setBookingMessage('Booking confirmed successfully! Our team will contact you shortly.');
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
      setBookingMessage(err.message);
    }
  };

  return (
    <div className="w-full bg-slate-50 font-sans">
      <style>{`
        .custom-calendar {
          width: 100%;
          border: none;
          background: transparent;
          font-family: inherit;
        }
        .custom-calendar .react-calendar__navigation button {
          color: #fbc02d;
          font-weight: 800;
          font-size: 1.1rem;
          min-width: 44px;
          background: none;
        }
        .custom-calendar .react-calendar__navigation button:enabled:hover {
          background-color: rgba(251, 192, 45, 0.1);
        }
        .custom-calendar .react-calendar__month-view__weekdays {
          color: #94a3b8;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.75rem;
          padding-bottom: 0.5rem;
        }
        .custom-calendar .react-calendar__month-view__days__day {
          color: #e2e8f0;
          font-weight: 500;
          padding: 0.75rem 0.5rem;
        }
        .custom-calendar .react-calendar__month-view__days__day--neighboringMonth {
          color: #475569;
        }
        .custom-calendar .react-calendar__tile:enabled:hover {
          background-color: rgba(251, 192, 45, 0.2);
          border-radius: 8px;
        }
        .custom-calendar .react-calendar__tile--active {
          background: #fbc02d !important;
          color: #000 !important;
          font-weight: 800;
          border-radius: 8px;
        }
        .custom-calendar .react-calendar__tile:disabled {
          background-color: rgba(255, 255, 255, 0.05);
          color: #334155;
          text-decoration: line-through;
          border-radius: 8px;
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-slate-950 mt-20 pt-10">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Corporate On-Job Training" className="w-full h-full object-cover opacity-30" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-[5%] py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="bg-yellow-500/20 text-yellow-400 text-xs font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded border border-yellow-500/30 inline-flex items-center gap-2">
              <Building2 size={14} /> Academic–Industry Collaboration
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-[1.1] max-w-4xl">
            ETABS Level 1 <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              3-Day Campus Workshop
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 border-l-4 border-yellow-500 pl-4">
            Learn ETABS. Work on Projects. Build Industry-Ready Structural Engineering Skills. Bring the industry directly to your college campus.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4">
            <button onClick={() => document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-yellow-500 text-black font-black uppercase tracking-wider text-sm hover:bg-yellow-400 transition-all flex items-center gap-2 shadow-lg shadow-yellow-500/20 hover:scale-105">
              Book Your Campus Workshop <ArrowRight size={18} />
            </button>
            <a href="/ETABS_Workshop_Program_Details.pdf" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/20 transition-all flex items-center gap-2">
              Download Program Details
            </a>
          </motion.div>
        </div>
      </section>
      {/* ── Prominent Journey Highlight ── */}
      <section className="bg-slate-900 border-t border-b-4 border-t-slate-800 border-b-yellow-500">
        <div className="max-w-[1400px] mx-auto px-[5%] py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center">
            <div className="flex-1 flex flex-col items-center">
              <span className="text-yellow-500 font-bold text-[10px] tracking-widest uppercase mb-1">Step 1</span>
              <p className="text-white text-lg font-bold">Learn ETABS</p>
            </div>
            <ArrowRight className="hidden md:block text-slate-700 shrink-0" size={24} />
            <ChevronDown className="md:hidden text-slate-700 shrink-0" size={24} />
            <div className="flex-1 flex flex-col items-center">
              <span className="text-yellow-500 font-bold text-[10px] tracking-widest uppercase mb-1">Step 2</span>
              <p className="text-white text-lg font-bold">Work on Real Projects</p>
            </div>
            <ArrowRight className="hidden md:block text-slate-700 shrink-0" size={24} />
            <ChevronDown className="md:hidden text-slate-700 shrink-0" size={24} />
            <div className="flex-1 flex flex-col items-center">
              <span className="text-yellow-500 font-bold text-[10px] tracking-widest uppercase mb-1">Step 3</span>
              <p className="text-white text-lg font-bold">Complete 2 Projects</p>
            </div>
            <ArrowRight className="hidden md:block text-yellow-500 shrink-0" size={24} />
            <ChevronDown className="md:hidden text-yellow-500 shrink-0" size={24} />
            <div className="flex-1 flex flex-col items-center">
              <span className="text-white font-bold text-[10px] tracking-widest uppercase mb-1">Result</span>
              <p className="text-yellow-400 text-lg font-black uppercase tracking-wider">Get Industry-Oriented<br/>Practical Exposure</p>
            </div>
          </div>
        </div>
      </section>


      {/* ── Why This Workshop ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase">Bridging the Gap</span>
            <SectionHeading title="Why This Workshop?" center={true} />
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
              Academic learning provides the foundation. Our workshop provides the execution. We bring practical, project-based ETABS training directly to your institution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MapPin, title: 'Campus-Based Offline Workshop', desc: 'No travel required. Our expert team comes directly to your college for an intensive 3-day hands-on session.' },
              { icon: Briefcase, title: 'Industry-Oriented Learning', desc: 'Learn exactly how ETABS is used in real engineering consultancies, moving beyond textbook theory.' },
              { icon: MonitorPlay, title: '45 Days Continued Practice', desc: 'Learning doesn\'t stop in 3 days. Students get 45 days of online support, live doubt clearing, and practice.' },
              { icon: FileCheck2, title: 'Two Project Completion', desc: 'Students are mandated to complete two full structural projects to gain practical exposure.' },
              { icon: Users, title: 'Weekly Expert Sessions', desc: 'Live weekly doubt-clearing sessions post-workshop to ensure no student is left behind.' },
              { icon: ShieldCheck, title: 'Verified Certification', desc: 'Provide your students with an industry-recognized certificate upon project completion.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-xl hover:border-yellow-200 transition-all duration-300 group">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                  <item.icon className="text-yellow-600 group-hover:text-black transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Can Participate & Stats ── */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight mb-6">Who Can Participate?</h2>
              <div className="flex flex-wrap gap-3">
                {['Final-Year B.Tech Civil', 'Pre-Final-Year B.Tech Civil', 'M.Tech Structural Engineering'].map((t, i) => (
                  <span key={i} className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 flex items-center gap-6 bg-black/5 p-8 rounded-3xl border border-black/10">
              <div className="w-20 h-20 bg-black text-yellow-500 rounded-2xl flex items-center justify-center font-black text-4xl shrink-0">
                50
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black mb-1">Minimum Batch Size</h3>
                <p className="text-black/70 font-medium">To conduct the offline workshop at your campus, a minimum of 50 students must be registered.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3-Day Timeline & 45-Day Online Practice ── */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-[5%] relative z-10 grid lg:grid-cols-2 gap-16">
          {/* 3 Day Timeline */}
          <div>
            <span className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase">On Campus</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-2">What Happens in 3 Days?</h2>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-yellow-500 before:via-yellow-500/50 before:to-transparent">
              {[
                { day: 'Day 1', title: 'Fundamentals & UI', desc: ['ETABS UI & Navigation', 'Creating Basic Structural Models', 'Material Properties', 'Section Assignments'] },
                { day: 'Day 2', title: 'Analysis & Loading', desc: ['Load Types & Definitions', 'Load Combinations', 'Dynamic Analysis Basics', 'Practical Exercises'] },
                { day: 'Day 3', title: 'Design & Detailing', desc: ['Advanced Analysis Techniques', 'Design Outputs & Reports', 'Real Project Application', 'Certificate Distribution'] },
              ].map((item, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-900 border-2 border-yellow-500 rounded-full flex items-center justify-center font-bold text-yellow-500 shrink-0 z-10">
                    {i+1}
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex-1 backdrop-blur-sm hover:border-yellow-500/50 transition-colors">
                    <span className="text-yellow-500 font-black uppercase text-xs tracking-wider">{item.day}</span>
                    <h4 className="text-xl font-bold mt-1 mb-3">{item.title}</h4>
                    <ul className="space-y-2">
                      {item.desc.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0 opacity-80"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 45 Day Program & Two Projects */}
          <div className="flex flex-col gap-10">
            {/* 45 Days */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-[40px]" />
              <span className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase">Post-Workshop Support</span>
              <h2 className="text-3xl font-bold mb-6 mt-2">45-Day Online Practice</h2>
              <ul className="space-y-5">
                {[
                  { icon: MonitorPlay, text: 'Access to Pre-recorded Learning Videos' },
                  { icon: MessageSquare, text: 'Weekly Live Doubt-Clearing Sessions' },
                  { icon: Briefcase, text: 'Guided Project Practice & Mentorship' }
                ].map((l, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-yellow-500 shrink-0">
                      <l.icon size={18} />
                    </div>
                    <span className="font-medium">{l.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Two Project Journey */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-3xl border border-yellow-500/20 relative overflow-hidden group hover:border-yellow-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[60px] group-hover:bg-yellow-500/20 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-[2px] bg-yellow-500"></span>
                  <span className="text-yellow-500 font-black tracking-[0.2em] uppercase text-[10px]">The Ultimate Goal</span>
                </div>
                <h2 className="text-3xl font-black mb-4 text-white">Two-Project Journey</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  The program culminates in the mandatory completion of two real-world structural engineering projects. You will be guided through every single phase of a professional project lifecycle.
                </p>
                
                <div className="flex flex-wrap items-center gap-y-4 gap-x-2">
                  {['Concept', 'Modelling', 'Analysis', 'Design', 'Completion'].map((step, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`px-4 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 border ${i === 4 ? 'bg-yellow-500 text-black border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]' : 'bg-slate-800/80 text-slate-300 border-slate-700/50 backdrop-blur-sm'}`}>
                        <span className={i === 4 ? 'text-black/60' : 'text-yellow-500'}>0{i+1}</span> {step}
                      </div>
                      {i < 4 && <ArrowRight className="text-slate-600/50 hidden sm:block" size={14} />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Portfolio & Credentials ── */}
      <section className="py-24 bg-white border-t border-slate-200 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="text-center mb-12">
            <span className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase">Trusted by Clients for 15+ Years</span>
            <SectionHeading title="Company Portfolio & Credentials" center={true} />
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
              Explore our project portfolios, company profile, and discover why we are the preferred Academic-Industry partner.
            </p>
          </div>

          {/* Flipbook / Image Gallery */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-6 text-slate-900 border-l-4 border-yellow-500 pl-3">Program Brochure Preview</h3>
            <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <img src={`/portfolio/page${num}.jpg`} alt={`Portfolio Page ${num}`} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
            <p className="text-center text-slate-400 text-sm mt-2 flex items-center justify-center gap-2">
              <ArrowRight size={14} className="rotate-180" /> Swipe to view brochure pages <ArrowRight size={14} />
            </p>
          </div>

          {/* Video Links */}
          <h3 className="text-xl font-bold mb-6 text-slate-900 border-l-4 border-yellow-500 pl-3">Video Profiles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { id: 'hXvEnSxk0IY', title: 'About Our Founder – Sandeep Pingale (25+ Yrs Exp)' },
              { id: 'tGGUSuLAmk8', title: 'Gold Award – Best Structural Consultant (IINA)' },
              { id: 'vUXR9-RgS08', title: 'ECONSTRUCT Company Profile' },
              { id: 'Dqd4xfEadXE', title: 'Hospitality Project Profile' },
              { id: 'Bbvi8Tq_FBM', title: 'Structural Project Profile' },
              { id: 'K8NgNwe18zo', title: 'BIM Project Profile' }
            ].map((vid, idx) => (
              <a key={idx} href={`https://youtu.be/${vid.id}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative pt-[56.25%] bg-slate-900">
                  <img src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`} alt={vid.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <MonitorPlay size={20} className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-900 leading-tight group-hover:text-yellow-600 transition-colors">{vid.title}</h4>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Details */}
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white border-b-4 border-yellow-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-[60px]" />
             <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Let's Discuss Your Project</h3>
             <p className="text-slate-300 max-w-2xl mx-auto mb-8 relative z-10 text-lg">
               If you have any questions or would like to discuss a custom training program or project, please let us know your availability. We'll be happy to schedule a Zoom meeting with our technical team at your convenience.
             </p>
             <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
               <a href="tel:+919036744017" className="flex items-center gap-3 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors text-lg">
                 📞 +91 90367 44017
               </a>
               <a href="https://www.e-construct.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-800 border border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors text-lg text-white">
                 🌐 www.e-construct.in
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* ── Student Reviews ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase">Testimonials</span>
            <SectionHeading title="What Our Students Say" center={true} />
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
              Hear directly from engineering students who have transformed their structural design skills through our intensive workshop.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: '05yCxir6kiY', name: 'Maajid Bashir' },
              { id: 'M5YRv_TwvBU', name: 'Sumy MC' },
              { id: 'R8sD-xkzoQY', name: 'P Anand Darshan' },
              { id: 'abbDhrTdM9Q', name: 'Amit Shah' }
            ].map((video, idx) => (
              <div key={idx} className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="relative pt-[56.25%] rounded-xl overflow-hidden bg-slate-900 group">
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={`Testimonial by ${video.name}`}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4 className="text-center font-bold text-slate-800 mt-4 mb-2">{video.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Section ── */}
      <section id="booking-section" className="py-24 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase">Reserve Your Dates</span>
            <SectionHeading title="Book Your Campus Workshop" center={true} />
            <p className="text-slate-600 max-w-2xl mx-auto mt-4">
              Select an available date for the 3-day workshop, provide your institution details, and pay the 50% advance to confirm your booking.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Calendar & Pricing */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Pricing Card */}
              <div className="bg-slate-950 p-8 rounded-3xl text-white shadow-xl">
                <div className="flex items-center gap-3 text-yellow-500 mb-2">
                  <IndianRupee size={24} />
                  <span className="font-bold tracking-widest uppercase text-sm">Program Investment</span>
                </div>
                <div className="flex items-end gap-2 mb-6">
                  <span className="text-5xl font-black">12,000</span>
                  <span className="text-slate-400 font-medium mb-1">+ GST / Student</span>
                </div>
                
                <div className="space-y-4 border-t border-slate-800 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">At time of booking</span>
                    <span className="font-bold bg-yellow-500 text-black px-3 py-1 rounded text-xs uppercase tracking-wider">50% Advance</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">After 3-Day Workshop</span>
                    <span className="font-bold bg-slate-800 text-white px-3 py-1 rounded text-xs uppercase tracking-wider">50% Balance</span>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-slate-900 p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <CalendarIcon className="text-yellow-500"/> Step 1: Select Date
                </h3>
                <div className="bg-slate-950 p-4 rounded-2xl">
                  <Calendar 
                    onChange={handleDateChange} 
                    value={selectedDate}
                    tileDisabled={tileDisabled}
                    className="custom-calendar"
                    minDetail="month"
                  />
                </div>
                {selectedDate && (
                  <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="text-yellow-500 shrink-0 mt-0.5" size={20}/>
                    <div>
                      <p className="text-sm text-yellow-500 font-bold uppercase tracking-wider mb-1">Date Selected</p>
                      <p className="text-white font-medium">{format(selectedDate, 'EEEE, MMMM do, yyyy')}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Presentation className="text-yellow-500"/> Step 2: College Details
              </h3>
              
              <form onSubmit={submitBooking} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">College / Institution Name *</label>
                    <input required type="text" name="collegeName" value={formData.collegeName} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Contact Person Name *</label>
                    <input required type="text" name="contactPerson" value={formData.contactPerson} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Designation (e.g., HOD, T&P) *</label>
                    <input required type="text" name="designation" value={formData.designation} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Department *</label>
                    <input required type="text" name="department" value={formData.department} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number *</label>
                    <input required type="tel" name="mobile" value={formData.mobile} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full College Address *</label>
                  <textarea required name="collegeAddress" value={formData.collegeAddress} onChange={handleFormChange} rows="2"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"></textarea>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Number of Students *</label>
                    <input required type="number" min="50" name="studentCount" value={formData.studentCount} onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all" />
                    <p className="text-xs text-slate-500 mt-1">Minimum 50 required.</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Workshop Date</label>
                    <input type="text" readOnly value={selectedDate ? format(selectedDate, 'yyyy-MM-dd') : 'Please select from calendar'} 
                      className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-500 cursor-not-allowed" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Any Additional Requirements? (Optional)</label>
                  <textarea name="additionalReq" value={formData.additionalReq} onChange={handleFormChange} rows="2"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all"></textarea>
                </div>

                {/* Status Messages */}
                {bookingMessage && (
                  <div className={`p-4 rounded-xl text-sm font-bold ${bookingStatus === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {bookingMessage}
                  </div>
                )}

                {/* Submit Button (Mocking Payment) */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-slate-900">Step 3: Advance Payment</span>
                    <span className="text-sm font-bold bg-slate-100 px-3 py-1 rounded text-slate-600">Secure Checkout</span>
                  </div>
                  <button 
                    type="submit" 
                    disabled={bookingStatus === 'loading'}
                    className="w-full py-4 bg-slate-950 text-white font-black uppercase tracking-wider text-sm hover:bg-slate-800 transition-all rounded-xl shadow-xl flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {bookingStatus === 'loading' ? 'Processing...' : `Pay 50% Advance & Confirm Booking`}
                    {!bookingStatus && <ArrowRight size={18} />}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    * By proceeding, you agree to the Academic-Industry Collaboration MOU terms. (Note: Payment gateway is currently in test mode/skipped).
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOU Overview ── */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-[1000px] mx-auto px-[5%]">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <div className="w-20 h-20 bg-slate-950 text-yellow-500 rounded-2xl flex items-center justify-center shrink-0">
              <FileCheck2 size={36} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Academic–Industry Collaboration MOU</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                This program serves as a formal collaboration between your institution and eConstruct. The college is responsible for providing campus infrastructure (labs/classrooms) and coordinating student participation (min. 50). eConstruct will provide expert trainers, software guidance, pre-recorded content, and guarantee project-based practical exposure.
              </p>
              <button className="text-sm font-bold text-yellow-600 uppercase tracking-wider hover:text-yellow-700 flex items-center gap-1">
                View Full MOU Terms <ArrowRight size={14}/>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-[5%]">
          <div className="text-center mb-14">
            <span className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase">Got Questions?</span>
            <SectionHeading title="Frequently Asked Questions" center={true} />
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-slate-900 pr-8">{faq.q}</span>
                  <span className="text-yellow-500 shrink-0">
                    {activeFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-6 text-slate-600 border-t border-slate-100 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default CorporateTraining;
