import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Monitor, BookOpen, Award, Briefcase, Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight, CheckCircle2, ChevronDown } from 'lucide-react';

const BimHubComposite = () => {
  const sliderImages = [
    'https://e-construct.in/wp-content/uploads/2026/02/event6_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event5_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event4_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event-3_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event2_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2026/02/event1_11zon.webp',
    'https://e-construct.in/wp-content/uploads/2025/02/gallery7.jpg',
    'https://e-construct.in/wp-content/uploads/2022/02/X-CM-2-1.jpg'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  const reviewVideos = [
    "https://www.youtube.com/embed/wf21iarQULs",
    "https://www.youtube.com/embed/tMXEJFxronI",
    "https://www.youtube.com/embed/N18qRFNhJCE",
    "https://www.youtube.com/embed/0tCqmgdi2TY",
    "https://www.youtube.com/embed/joUfKHy_vOQ",
    "https://www.youtube.com/embed/14MI_Ycpw9s"
  ];
  const [currentVidSlide, setCurrentVidSlide] = useState(0);
  const nextVidSlide = () => setCurrentVidSlide((prev) => (prev + 1) % reviewVideos.length);
  const prevVidSlide = () => setCurrentVidSlide((prev) => (prev - 1 + reviewVideos.length) % reviewVideos.length);

  const competitionVideos = [
    { title: "Competition Overview", src: "https://www.youtube.com/embed/4V-mT1ISo90?si=8jFBhtkVt_QD23TB", duration: "12:04" },
    { title: "Team Presentations & Solutions", src: "https://www.youtube.com/embed/1jePd-E4ZEc?si=W545dJrmLDm5NdyU", duration: "08:15" },
    { title: "Structural Analysis Highlights", src: "https://www.youtube.com/embed/QA8dxpyk8iI?si=aTsCZCz_Jb-ilnnd", duration: "15:30" },
    { title: "Award Ceremony & Closing Feedback", src: "https://www.youtube.com/embed/oBZ_4zm7VeM?si=GD2fxp24f4ct17Ie", duration: "05:45" }
  ];
  const [activePlaylistItem, setActivePlaylistItem] = useState(0);

  const [activeFaqCategory, setActiveFaqCategory] = useState("General");
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const faqData = {
    "General": [
      {
        question: "What is the duration of the course?",
        answer: "The Duration is roughly 14 to 24 months for both Online & Offline Courses. This is an ON-JOB learning program where you get the opportunity to work on real Live Projects with our technical team. Duration may vary slightly depending on your allotted project and also your speed/overall performance.\n\nNote: It's not allowed to take long holidays during the course as you are involved in Real Projects."
      },
      {
        question: "When does the next batch start?",
        answer: "The next batch starts on 15th April 2026. Contact administration for more details."
      },
      {
        question: "What are the session timings?",
        answer: "BIM and PM Part: 11 AM to 1 PM\nStructures Part: 3 PM to 4:30 PM\nPractice (Structures): 5 PM to 7 PM\nPractice (BIM+PM): 3 PM to 6 PM"
      },
      {
        question: "Where are the classes held?",
        answer: "Classes are held at our Bangalore office. Contact administration for the exact address and more details."
      }
    ],
    "Admission": [
      {
        question: "Who can join this course?",
        answer: "• Polytechnic Diploma (Civil Engineering)\n• B.Tech / B.E (Civil Engineering)\n• M.Tech / M.E (Structural Engineering)"
      },
      {
        question: "What qualities should candidates have?",
        answer: "We look for the 3 P's in every candidate:\n\n• Passion – A burning desire to learn and grow\n• Patience – Willingness to embrace the process and trust the journey\n• Practice – Commitment to apply knowledge on real projects every day"
      },
      {
        question: "Can payment be made in installments?",
        answer: "No installments are available. Contact administration for more details."
      },
      {
        question: "Is the fee refundable?",
        answer: "The fee is non-refundable and non-transferable under any circumstance."
      }
    ],
    "Course Details": [
      {
        question: "What learning activities are included?",
        answer: "• 48 hrs Challenge (Group Activity)\n• 24 hrs Challenge (Individual Activity)\n• MASS Mock Interviews (Group + Individual Activity Making)\n• Every Tuesday code reading (Group Activity)\n• Weekly objective type test (Self Assessment)\n• Monthly Review on your projects to assess your Learning Progress"
      },
      {
        question: "What is the exam pattern?",
        answer: "The exam consists of four components:\n\n• Written Exam: 200 Marks\n• Practical Exam: 200 Marks\n• Technical Interview: 200 Marks\n• Assignments & Attendance: 200 Marks"
      },
      {
        question: "What software is included in the training?",
        answer: "AutoCAD, REVIT Architecture, REVIT Structures, REVIT MEP, Synchro, Navisworks, Infraworks, Primavera, ETABS Basic, ETABS Advanced, StaadPRO, SAFE, SAP2000, CSI Bridge, CSI Detailer, RCDC, Prokon, 40+ Design Spreadsheets"
      },
      {
        question: "What codes are covered in the training?",
        answer: "• IS-456 2000\n• IS-800\n• IS-1893 2016\n• IS-13920\n• IS-16700"
      }
    ],
    "Placement": [
      {
        question: "What certification will I receive?",
        answer: "Certification is offered only upon successful completion of Exam. We offer:\n\n• Working experience letter of 24 months after successful completion of Exam criteria\n• Certification issued by Econstruct Design and Build Pvt Ltd\n• Assistance to make a Portfolio for each candidate\n• Visual OR Video resume building assistance\n• Photoshoot in formals for LinkedIn profile and Resume Photo\n\nPLEASE NOTE – Certification is just a piece of paper. What truly matters is your knowledge, skills and relevant experience with right attitude to survive in the real Industry."
      },
      {
        question: "How does placement assistance work?",
        answer: "We provide 100% placement assistance. You will be placed in 1 to 3 companies depending on your performance and preferences. We have a strong network of partners across India, UAE, and internationally."
      },
      {
        question: "What types of projects will I work on?",
        answer: "You will work on real live projects alongside Econstruct's technical team, gaining hands-on experience from Center Line Plan (CLP) to Good for Construction (GFC). The program covers RCC, Steel, Composite, and PEB structures, along with full BIM implementation and end-to-end project management."
      },
      {
        question: "Who is the trainer?",
        answer: "The trainer is Mr. Sandeep Pingale, with 20+ years of industry experience. He has worked on G+81 story projects in Dubai, managed 7000 CR worth of projects, and holds an unlimited structural licence in Mumbai."
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-start">

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/prj6.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Techno-Management Entrepreneurship Training
          </h1>
          <p className="mt-6 text-white text-lg md:text-xl font-medium tracking-wide drop-shadow-md max-w-3xl text-center leading-relaxed">
            In Structures, BIM, and Project Management
          </p>
        </div>
      </section>

      {/* Video & Stats Section */}
      <section className="bg-slate-50 py-20 flex flex-col items-center overflow-hidden border-t border-gray-200">
        <div className="w-full px-4 sm:px-8 md:px-16 flex flex-col items-center max-w-[1500px] mx-auto">

          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm sm:text-base">Overview</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
          </div>

          {/* YouTube Video Wrapper */}
          <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 aspect-video mb-16 relative group">
            <iframe
              src="https://www.youtube.com/embed/4V-mT1ISo90?si=8jFBhtkVt_QD23TB"
              className="w-full h-full"
              title="Techno-Management Entrepreneurship Training & Live Competition Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-black text-[#fbc02d] mb-4 flex items-baseline drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                1,000<span className="text-3xl md:text-4xl ml-1">+</span>
              </div>
              <div className="text-gray-800 font-extrabold uppercase tracking-[0.15em] text-sm md:text-base">Graduates</div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-black text-[#fbc02d] mb-4 flex items-baseline drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                50<span className="text-3xl md:text-4xl ml-1">+</span>
              </div>
              <div className="text-gray-800 font-extrabold uppercase tracking-[0.15em] text-sm md:text-base">Partners</div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-black text-[#fbc02d] mb-4 flex items-baseline drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                100<span className="text-3xl md:text-4xl ml-1">%</span>
              </div>
              <div className="text-gray-800 font-extrabold uppercase tracking-[0.15em] text-sm md:text-base text-center">Success Rate</div>
            </div>
          </div>

        </div>
      </section>

      {/* Course Detailed Syllabus & Modules */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Comprehensive Curriculum</span>
              <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Techno-Management <span className="text-[#fbc02d] italic">Course Syllabus</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium text-base md:text-lg">
              A 3-in-1 integrated master curriculum combining Structural Engineering, 5D BIM Technology, and Project Management Entrepreneurship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Module 1 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-[#fbc02d] transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#fbc02d] text-slate-900 font-black text-sm flex items-center justify-center">01</span>
                  <h3 className="text-2xl font-bold text-gray-900">Structural Engineering & Audit</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Master structural analysis, design calculation, code compliance (IS 456, IS 1893, IS 13920), and peer review auditing for high-rise commercial & residential structures.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['ETABS & STAAD.Pro', 'SAFE & SAP2000', 'Code Provisions & Audits', 'GFC Drawings & CLP'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-800 bg-white px-3 py-2 rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#fbc02d] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-[#fbc02d] transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#fbc02d] text-slate-900 font-black text-sm flex items-center justify-center">02</span>
                  <h3 className="text-2xl font-bold text-gray-900">BIM 4D/5D Technology & Coordination</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  End-to-end 3D modeling and multi-disciplinary clash detection across Architecture, Structures, and MEP using industry-standard BIM platforms.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['Revit Arch / Struct / MEP', 'Navisworks Clash Resolution', 'Synchro 4D Timeline', 'BIM Execution Plan (BEP)'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-800 bg-white px-3 py-2 rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#fbc02d] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-[#fbc02d] transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#fbc02d] text-slate-900 font-black text-sm flex items-center justify-center">03</span>
                  <h3 className="text-2xl font-bold text-gray-900">Project Management & Controls</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Learn Primavera P6 and MS Project scheduling, WBS generation, cost control, EVM tracking, and quantity estimation for multi-crore site projects.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['Primavera P6 Scheduling', 'Earned Value Management', 'Quantity Surveying', 'Resource & Cost Optimization'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-800 bg-white px-3 py-2 rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#fbc02d] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-[#fbc02d] transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#fbc02d] text-slate-900 font-black text-sm flex items-center justify-center">04</span>
                  <h3 className="text-2xl font-bold text-gray-900">Techno-Entrepreneurship & TQM</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Equip yourself with business management skills, client pitching, digital branding, TQM site quality control, and consultancy setup strategies.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {['Site TQM Quality Audit', 'Consultancy Business Setup', 'Client Pitching & Proposals', 'Personal & Firm Branding'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-800 bg-white px-3 py-2 rounded-xl border border-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#fbc02d] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features - 4 Horizontal Cards */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {/* Card 1: Duration & Batch */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-[#fbc02d]" />
                  <h3 className="text-xl font-bold text-gray-900">Duration</h3>
                </div>
                <p className="text-gray-600 font-medium">24 Months (Structures + BIM + PM)</p>
              </div>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-[#fbc02d]" />
                  <h3 className="text-xl font-bold text-gray-900">New Batch Starting Date</h3>
                </div>
                <p className="text-[#fbc02d] font-bold text-lg">15th April 2026</p>
              </div>
            </div>

            {/* Card 2: Mode of Learning */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Monitor className="w-6 h-6 text-[#fbc02d]" />
                  <h3 className="text-xl font-bold text-gray-900">Mode of Learning</h3>
                </div>
                <p className="text-gray-600 font-bold">Online / Offline &amp; Hybrid</p>
              </div>
              <div className="space-y-4 mt-auto">
                <div>
                  <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">Session Timings</h4>
                  <p className="text-gray-600 text-sm">BIM &amp; PM: 11 AM – 1 PM</p>
                  <p className="text-gray-600 text-sm">Structures: 3 PM – 4:30 PM</p>
                  <p className="text-gray-600 text-sm">Practice: 5 PM – 7 PM (Structures) / 3 PM – 6 PM (BIM+PM)</p>
                </div>
              </div>
            </div>

            {/* Card 3: Softwares */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#fbc02d]" />
                <h3 className="text-xl font-bold text-gray-900">Softwares</h3>
              </div>
              <ul className="text-gray-600 space-y-2 font-medium flex-1 overflow-y-auto max-h-[220px]">
                {[
                  'AutoCAD',
                  'REVIT Architecture',
                  'REVIT Structures',
                  'REVIT MEP',
                  'Synchro',
                  'Navisworks',
                  'Infraworks',
                  'Primavera',
                  'ETABS Basics & Advanced',
                  'StaadPRO',
                  'SAFE',
                  'SAP 2000',
                  'CSI Bridge',
                  'CSI Detailer',
                  'RCDC',
                  'Prokon'
                ].map((software, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fbc02d] shrink-0"></span>
                    {software}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 4: Certification */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#fbc02d]" />
                <h3 className="text-xl font-bold text-gray-900">Certification</h3>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Receive industry-recognized certification upon completion, provided by Econstruct.
              </p>
              <div className="mt-auto bg-slate-50 p-4 rounded-xl border border-gray-100">
                <p className="text-gray-800 font-bold text-sm">
                  24-month experience letter &amp; <span className="text-[#fbc02d]">100% placement assistance</span>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-slate-50 py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row shadow-xl">

            {/* Left Content */}
            <div className="p-8 md:p-14 lg:w-2/3 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 max-w-max">100% Placement Program</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Techno-Management Entrepreneurship: <br className="hidden md:block" /> <span className="text-[#fbc02d]">Structures + BIM + PM</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-8 border-l-4 border-[#fbc02d] pl-4">24-Month Composite Program</h3>

              <ul className="space-y-4 mb-10">
                {[
                  "Live project experience",
                  "24 Month Experience Letter",
                  "Indian Codes: IS-456 2000 | IS-800 | IS-1893 2016 | IS-13920 | IS-16700",
                  "Digital Library",
                  "100% Placement Guarantee",
                  "Project Management Tool",
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
              <p className="text-red-500 font-semibold text-sm italic">* Fee is non-refundable &amp; non-transferable under any circumstance.</p>
            </div>

            {/* Right Pricing */}
            <div className="bg-slate-900 text-white lg:w-1/3 p-8 md:p-14 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fbc02d]/20 rounded-full blur-[60px] group-hover:bg-[#fbc02d]/30 transition-colors duration-500"></div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs lg:text-sm mb-4">Composite Program</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-[#fbc02d]">₹</span>
                <span className="text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter">3,50,000</span>
              </div>
              <p className="text-gray-300 font-medium mb-6">AED 16,225 or US$ 4,280</p>
              <div className="bg-white/10 border border-white/20 p-4 rounded-xl mb-10">
                <p className="text-sm font-bold text-white text-center">(₹ 2,96,610 + 18% GST)</p>
              </div>

              <button className="w-full bg-[#fbc02d] text-slate-900 font-black px-8 py-5 rounded-xl hover:bg-[#ffe066] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm lg:text-base shadow-[0_15px_30px_rgba(251,192,45,0.3)]">
                Take Admission Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Frequently Asked Questions</h2>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-4"></div>
          </div>

          {/* FAQ Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {Object.keys(faqData).map((category) => (
              <button
                key={category}
                onClick={() => { setActiveFaqCategory(category); setActiveFaqIndex(null); }}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeFaqCategory === category
                    ? 'bg-[#fbc02d] text-gray-900 shadow-[0_5px_15px_rgba(251,192,45,0.4)]'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData[activeFaqCategory].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors duration-200"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#fbc02d] shrink-0 transition-transform duration-300 ${activeFaqIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaqIndex === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 font-medium leading-relaxed whitespace-pre-line pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fbc02d] py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Ready to Start Your Techno-Management Journey?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            Join our 24-month composite program and master Structures, BIM, and Project Management. Limited seats available — secure yours today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919036744017"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white font-black px-10 py-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              WhatsApp +91 90367 44017
            </a>
            <a
              href="https://wa.me/917259222888"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 font-black px-10 py-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              WhatsApp +91 72592 22888
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BimHubComposite;