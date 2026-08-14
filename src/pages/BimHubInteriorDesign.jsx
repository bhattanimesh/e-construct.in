import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Monitor, BookOpen, Award, Briefcase, Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight, CheckCircle2, ChevronDown } from 'lucide-react';
import interiorImg from '../assets/cs_int_2.jpg';
import StudentVideoReviewsShowcase from '../components/StudentVideoReviewsShowcase';

const BimHubInteriorDesign = () => {
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
        answer: "The Duration is roughly 12 months for both Online & Offline Courses. This is an ON-JOB learning program where you get the opportunity to work on real Live Projects with our technical team. Duration may vary slightly depending on your allotted project and also your speed/overall performance.\n\nNote: It's not allowed to take long holidays during the course as you are involved in Real Projects."
      },
      {
        question: "When does the next batch start?",
        answer: "The next batch starts on 15th April 2026. Admissions close 45-60 days before the batch start date, so early registration is strongly recommended."
      },
      {
        question: "What are the session timings?",
        answer: "Daily Live Session: 11 AM – 1 PM\nPractice / Project Work: 10 AM – 6 PM\n\nTimings may vary slightly based on mode of learning (Offline / Online / Hybrid)."
      },
      {
        question: "Where are the classes held?",
        answer: "Offline classes are held at our Bangalore Head Office:\n\nVenkatdhari Heights, 1st & 2nd Floor,\nParapanna Agrahara Main Road, Kudlu,\nBangalore – 560068"
      }
    ],
    "Admission": [
      {
        question: "Who can join this course?",
        answer: "• Polytechnic Diploma (Civil Engineering)\n• B.Tech / B.E (Civil Engineering)\n• M.Tech / M.E\n• Any Graduate (12+)\n\nA passion for Interior Designing with Project Management is the most important qualification."
      },
      {
        question: "What qualities should candidates have?",
        answer: "We look for the 3 P's in every candidate:\n\n• Passion for Interior Designing with Project Management\n• Patience to Learn\n• Practice – willingness to put in consistent effort\n\nThese three qualities are the foundation of success in our program."
      },
      {
        question: "Can payment be made in installments?",
        answer: "No, installment payments are not available. The full course fee must be paid at the time of admission to confirm your seat."
      },
      {
        question: "Is the fee refundable?",
        answer: "No. The fee is strictly non-refundable and non-transferable under any circumstance. Please ensure you are fully committed before making the payment."
      },
      {
        question: "How many seats are available per batch?",
        answer: "Only 10–15 seats are available per batch. Admissions close 45–60 days before the batch start date. Early registration is strongly advised to secure your seat."
      }
    ],
    "Course Details": [
      {
        question: "What learning activities are included?",
        answer: "• 48 hrs Challenge (Group Activity)\n• 24 hrs Challenge (Individual Activity)\n• MASS Mock Interviews (Group + Individual Activity Making)\n• Every Tuesday code reading (Group Activity)\n• Weekly objective type test (Self Assessment)\n• Monthly Review on your projects to assess your Learning Progress"
      },
      {
        question: "What is the exam pattern?",
        answer: "The final exam is divided into four components:\n\n• Written Exam: 200 Marks\n• Practical Exam: 200 Marks\n• Technical Interview: 200 Marks\n• Assignments & Attendance: 200 Marks\n\nTotal: 800 Marks"
      },
      {
        question: "What software is included in the training?",
        answer: "• AutoCAD\n• REVIT Architecture\n• V-RAY\n• 3DS MAX\n• Adobe Photoshop\n• Primavera\n• SketchUp\n• Microsoft Projects"
      }
    ],
    "Placement": [
      {
        question: "What certification will I receive?",
        answer: "Certification is offered only upon successful completion of the Exam. We offer:\n\n• 7-month Experience Letter after successful completion of Exam criteria\n• Master Study Certification issued by Econstruct Design and Build Pvt Ltd\n• Assistance to make a Portfolio for each candidate\n• Visual OR Video resume building assistance\n• Photoshoot in formals for LinkedIn profile and Resume Photo\n\nPLEASE NOTE – Certification is just a piece of paper. What truly matters is your knowledge, skills and relevant experience with the right attitude to survive in the real Industry."
      },
      {
        question: "How does placement assistance work?",
        answer: "We provide placement in 1–3 companies based on your performance, skills, and the job market. Our placement preparation series covers interview skills, communication, group discussions, and video resume creation to maximize your chances."
      },
      {
        question: "Who is the trainer?",
        answer: "Your trainer is Mr. Sandeep Pingale, Founder & Managing Director of Econstruct Design and Build Pvt Ltd.\n\n• 20+ years of industry experience\n• Worked on G+81 story projects in Dubai\n• Managed projects worth over ₹7,000 CR\n• Mentored hundreds of students into successful careers"
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen flex flex-col justify-start">

      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: `url('/InteriorDesignConsultancy.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-[#fbc02d]"></span>
            <span className="text-[#fbc02d] font-extrabold tracking-[0.25em] uppercase text-xs md:text-sm">
              Professional Interior & PM Program
            </span>
            <span className="w-10 h-[2px] bg-[#fbc02d]"></span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] max-w-4xl">
            Master Study In Interior Designing
          </h1>
          <p className="mt-6 text-[#fbc02d] text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-lg max-w-3xl text-center leading-relaxed italic accent-text">
            with Project Management
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
          <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 aspect-video mb-16">
            <iframe
              src="https://www.youtube.com/embed/xnVMK7F-XRY"
              className="w-full h-full"
              title="Interior Design Overview Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
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
                <p className="text-gray-600 font-medium">7 to 12 Months (ON-JOB Learning)</p>
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
                  <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">Video Access</h4>
                  <p className="text-gray-600">750+ Hours Videos</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">Digital Library</h4>
                  <p className="text-gray-600 mb-1">24/7 Access</p>
                  <p className="text-gray-600">1000+ Technical Books</p>
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
                  'REVIT (Architecture)',
                  'V-RAY',
                  '3DS MAX',
                  'Adobe Photoshop',
                  'Primavera',
                  'SketchUp',
                  'Microsoft Projects'
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
                  7-month experience letter &amp; <span className="text-[#fbc02d]">100% placement assistance</span>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section - 2 Column */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">About the Program</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
                What is <span className="text-[#fbc02d]">Interior Designing?</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                Interior designing is a multidisciplinary field that involves the art and science of enhancing the interior spaces of buildings to achieve functional, aesthetically pleasing, and safe environments. Interior designers use their creativity, technical knowledge, and problem-solving skills to create spaces that meet the needs and preferences of their clients while adhering to building codes, regulations, and industry standards.
              </p>
              <p className="text-gray-600 text-lg font-medium leading-relaxed mt-6">
                The primary goal of interior designing is to create spaces that are not only visually appealing but also functional and conducive to the activities that will take place within them. At Econstruct, our Master Study in Interior Designing with Project Management is an ON-JOB learning program where you work on real live projects alongside our technical team.
              </p>
            </div>
            {/* Right Image */}
            <div className="rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white relative group border border-gray-100">
              <img
                src={interiorImg}
                alt="Luxury Interior Design & Space Planning Project"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Aspects of Interior Designing */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Core Disciplines</span>
              <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Key Aspects of Interior Designing</h2>
            <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">The foundation of every successful interior designer at Econstruct</p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🏠", title: "Space Planning", desc: "Optimizing the layout and flow of interior spaces to maximize functionality and comfort for occupants." },
              { icon: "🪑", title: "Furniture & Fixture Selection", desc: "Curating the right furniture and fixtures that balance aesthetics, ergonomics, and client requirements." },
              { icon: "💡", title: "Lighting Design", desc: "Designing ambient, task, and accent lighting systems that enhance mood, productivity, and visual appeal." },
              { icon: "📋", title: "Collaboration & Project Management", desc: "Coordinating with architects, contractors, and clients to deliver projects on time and within budget." },
              { icon: "🎨", title: "Textile & Accessory Selection", desc: "Selecting fabrics, textures, and accessories that complement the overall design concept and client vision." },
              { icon: "🖌️", title: "Color & Material Selection", desc: "Applying color theory and material science to create harmonious, durable, and visually stunning interiors." },
              { icon: "🌿", title: "Sustainable Design", desc: "Incorporating eco-friendly materials, energy-efficient systems, and sustainable practices into every project." }
            ].map((aspect, i) => (
              <div key={i} className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(251,192,45,0.15)] hover:border-[#fbc02d]/30 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-[#fbc02d]/10 flex items-center justify-center mb-6 shadow-inner">
                  <span className="text-4xl">{aspect.icon}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{aspect.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">{aspect.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Preparation Banner */}
      <section className="bg-white py-12 px-4 md:px-8">
        <div className="max-w-[1500px] mx-auto">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-[20px] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] relative overflow-hidden group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-3xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-md">
                  Placement Preparation Series
                </h2>
                <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed">
                  Our expertly designed preparation series thoroughly covers all key aspects to ensure you excel in job interviews and successfully secure top positions in India, the UAE, and internationally.
                </p>
              </div>
              <div className="hidden lg:flex w-48 h-48 bg-white/10 backdrop-blur-md rounded-full items-center justify-center border border-white/20 shadow-2xl shrink-0 group-hover:scale-105 transition-transform duration-500">
                <Briefcase className="w-20 h-20 text-white drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Preparation 4 Cards */}
      <section className="bg-white py-12 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Prep Card 1 */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 shrink-0">
                <Mic className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interview Preparation</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Expert guidance on tackling technical and HR interviews for various roles and industries.
              </p>
            </div>

            {/* Prep Card 2 */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 shrink-0">
                <MessageSquare className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Communication Skills</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Enhance your verbal and non-verbal communication skills essential for professional success.
              </p>
            </div>

            {/* Prep Card 3 */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 shrink-0">
                <Users className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Group Discussion</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Learn techniques to stand out in group discussions with confidence and clarity.
              </p>
            </div>

            {/* Prep Card 4 */}
            <div className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-start">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 shrink-0">
                <Video className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Video Resume</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Create compelling video resumes that highlight your personality and skills to potential employers.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-[20px] p-8 md:p-12 border border-yellow-200">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
              Unlock 6-8 Genuine Job Interview opportunities in India, UAE, &amp; Abroad with our comprehensive placement preparation series.
            </h3>
            <div className="text-center mb-8">
              <span className="inline-block bg-yellow-500 text-gray-900 font-black px-6 py-2 rounded-full uppercase tracking-widest text-sm shadow-md">
                100% Job Guarantee!
              </span>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-6 bg-yellow-500 rounded-sm"></span> Note: Follow all the guidelines provided below.
              </h4>
              <ul className="space-y-3">
                {[
                  'Minimum 80% attendance is required.',
                  'Completion of Projects & Annexures.',
                  'Successful completion of the Final Exam.',
                  'Video resume.',
                  'LinkedIn Profile.'
                ].map((guideline, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>
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
                        <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">&#10003;</span>
                        +91 90367 44017 <span className="text-xs font-normal text-gray-400 border border-gray-200 px-2 py-1 rounded-md ml-auto">Click to Chat</span>
                      </a>
                      <a href="https://wa.me/917259222888" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-800 font-bold hover:text-[#25D366] transition group">
                        <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">&#10003;</span>
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

      {/* Orange Interior Designing Training Poster Banner */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto px-4 md:px-8 flex justify-center">
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-4">
            <img
              src="/assets/interior_poster_orange.jpeg"
              alt="Master Study in Interior Designing with Project Management Training Poster"
              className="w-full h-auto object-contain rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="bg-slate-900/5 py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Career Roadmap</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 tracking-tight text-center">Your Path to Success</h2>
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] bg-white p-4 md:p-10 transition-transform hover:-translate-y-2 duration-500">
            <img
              src="/Interior Design Poster 5.jpg"
              alt="Master Study in Interior Designing Roadmap Poster"
              className="w-full h-auto object-contain"
            />
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
            {/* Card 1: Offline */}
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

            {/* Card 2: Online (Working Professionals) */}
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

            {/* Card 3: Online (Non-Working) */}
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

            {/* Card 4: Hybrid */}
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

      {/* Student Video Reviews Showcase */}
      <StudentVideoReviewsShowcase
        title="Student Feedback & Experience Videos"
        subtitle="Hear directly from our Master Study in Interior Designing alumni placed in top interior & architectural design firms."
      />

      {/* Competition Playlist Section */}
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
              Find answers to common questions about our Master Study in Interior Designing with Project Management program
            </p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>

          {/* FAQ Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {Object.keys(faqData).map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFaqCategory(category);
                  setActiveFaqIndex(null);
                }}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 text-sm md:text-base ${
                  activeFaqCategory === category
                    ? 'bg-[#fbc02d] text-slate-900 shadow-md transform -translate-y-1'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {faqData[activeFaqCategory].map((faq, index) => {
              const isActive = activeFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isActive ? 'bg-white border-[#fbc02d]/30 shadow-[0_10px_40px_rgba(251,192,45,0.15)]' : 'bg-white border-gray-100 hover:shadow-md hover:border-gray-200'}`}
                >
                  <button
                    onClick={() => setActiveFaqIndex(isActive ? null : index)}
                    className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${isActive ? 'text-[#fbc02d]' : 'text-gray-800'}`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-[#fbc02d] text-slate-900 rotate-180' : 'bg-slate-50 text-gray-400'}`}>
                      <ChevronDown size={22} className="transition-transform duration-300" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isActive ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-0 text-gray-600 font-medium text-lg leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row shadow-xl">

            {/* Left Content */}
            <div className="p-8 md:p-14 lg:w-2/3 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 max-w-max">100% Placement Program</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Interior Designing Redefined: <br className="hidden md:block"/> <span className="text-[#fbc02d]">100% Placement Program</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-8 border-l-4 border-[#fbc02d] pl-4">Master Study In Interior Designing with Project Management</h3>

              <ul className="space-y-4 mb-10">
                {[
                  "12 Month Experience Letter",
                  "AUTOCAD | 3DS MAX | PHOTOSHOP | REVIT | V-RAY",
                  "Digital Library",
                  "100% Placement Guarantee",
                  "Project Management Tool"
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
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs lg:text-sm mb-4">Master Study Program</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-[#fbc02d]">&#8377;</span>
                <span className="text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter">2,10,000</span>
              </div>
              <p className="text-gray-300 font-medium mb-2">AED 5,199 or US$ 1,415</p>
              <div className="bg-white/10 border border-white/20 p-4 rounded-xl mb-10">
                <p className="text-sm font-bold text-white text-center">(&#8377; 1,77,967 + 18% GST)</p>
              </div>

              <button className="w-full bg-[#fbc02d] text-slate-900 font-black px-8 py-5 rounded-xl hover:bg-[#ffe066] hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm lg:text-base shadow-[0_15px_30px_rgba(251,192,45,0.3)]">
                Take Admission Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#fbc02d] py-20 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Ready to Start Your Interior Design Journey?
          </h2>
          <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            Join our ON-JOB learning program and work on real live projects alongside our expert team. Limited seats available — secure yours today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919036744017"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white font-black px-10 py-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              <span>&#128172;</span> WhatsApp +91 90367 44017
            </a>
            <a
              href="https://wa.me/917259222888"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-gray-900 font-black px-10 py-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm"
            >
              <span>&#128172;</span> WhatsApp +91 72592 22888
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BimHubInteriorDesign;
