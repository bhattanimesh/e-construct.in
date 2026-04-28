import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Monitor, BookOpen, Award, Briefcase, Mic, MessageSquare, Users, Video, ChevronLeft, ChevronRight, CheckCircle2, ChevronDown } from 'lucide-react';

const BimHubMSC = () => {
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
      { question: "What is the duration of the course?", answer: "The Duration is roughly 12 months for both Online & Offline Courses. This is an ON-JOB learning program where you get the opportunity to work on real Live Projects with our technical team. Duration may vary slightly depending on your allotted project and also your speed/overall performance.\n\nNote: It's not allowed to take long holidays during the course as you are involved in Real Projects." },
      { question: "When does the next batch start?", answer: "Contact administration for more details on this." },
      { question: "What are the session timings?", answer: "Contact administration for more details on this." },
      { question: "Where are the classes held?", answer: "Contact administration for more details on this." }
    ],
    "Admission": [
      { question: "Who can join this course?", answer: "• Polytechnic Diploma (Civil Engineering)\n• B.Tech / B.E (Civil Engineering)\n• M.Tech / M.E (Structural Engineering)\n• CAD Structures" },
      { question: "What qualities should candidates have?", answer: "Contact administration for more details on this." },
      { question: "Can payment be made in installments?", answer: "Contact administration for more details on this." },
      { question: "Is the fee refundable?", answer: "Contact administration for more details on this." }
    ],
    "Course Details": [
      { question: "What learning activities are included?", answer: "• 48 hrs Challenge (Group Activity)\n• 24 hrs Challenge (Individual Activity)\n• MASS Mock Interviews (Group + Individual Activity Making)\n• Every Tuesday code reading (Group Activity)\n• Weekly objective type test (Self Assessment)\n• Monthly Review on your projects to assess your Learning Progress" },
      { question: "What is the exam pattern?", answer: "Contact administration for more details on this." },
      { question: "What software is included in the training?", answer: "Contact administration for more details on this." },
      { question: "What codes are covered in the training?", answer: "Contact administration for more details on this." }
    ],
    "Placement": [
      { question: "What certification will I receive?", answer: "Certification is offered only upon successful completion of Exam. We offer:\n\n• Working experience letter of 7 months after successful completion of Exam criteria\n• Master Study Certification of 7 months issued by Econstruct Design and Build Pvt Ltd\n• Assistance to make a Portfolio for each candidate\n• Visual OR Video resume building assistance\n• Photoshoot in formals for LinkedIn profile and Resume Photo\n\nPLEASE NOTE – Certification is just a piece of paper. What truly matters is your knowledge, skills and relevant experience with right attitude to survive in the real Industry." },
      { question: "How does placement assistance work?", answer: "Contact administration for more details on this." },
      { question: "What types of projects will I work on?", answer: "Contact administration for more details on this." },
      { question: "Who is the trainer?", answer: "Contact administration for more details on this." }
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            <span className="accent-text italic">MSC</span>
          </h1>
          <p className="mt-6 text-white text-lg md:text-xl font-medium tracking-wide drop-shadow-md max-w-3xl text-center leading-relaxed">
            Master in Smart Construction
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
              src="https://www.youtube.com/embed/I4QyIdbupvs?si=CwmIf_njoy5v3_zc" 
              className="w-full h-full"
              title="MSC Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-black text-[#fbc02d] mb-4 flex items-baseline drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                1,000<span className="text-3xl md:text-4xl ml-1">+</span>
              </div>
              <div className="text-gray-800 font-extrabold uppercase tracking-[0.15em] text-sm md:text-base">Graduates</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 group">
              <div className="text-5xl md:text-6xl font-black text-[#fbc02d] mb-4 flex items-baseline drop-shadow-sm group-hover:scale-110 transition-transform duration-300">
                50<span className="text-3xl md:text-4xl ml-1">+</span>
              </div>
              <div className="text-gray-800 font-extrabold uppercase tracking-[0.15em] text-sm md:text-base">Partners</div>
            </div>

            {/* Stat 3 */}
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
                <p className="text-gray-600 font-medium">12 Months (ON-JOB Learning)</p>
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
                <p className="text-gray-600 font-bold">Online / Offline & Hybrid</p>
              </div>
              <div className="space-y-4 mt-auto">
                <div>
                  <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">Video Access</h4>
                  <p className="text-gray-600">750+ Hours of Videos Content</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wide mb-1">Digital Library</h4>
                  <p className="text-gray-600 mb-1">24/7 Acess</p>
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
                  'ETABS',
                  'ETABS Advance',
                  'STAADPro',
                  'SAFE',
                  'SAP2000',
                  'CSI Bridge',
                  'CSI Detailer',
                  'RCDC/Prokon',
                  'AutoCAD',
                  'REVIT Architecture',
                  'REVIT Structures',
                  'REVIT MEP',
                  'Synchro',
                  'Navisworks',
                  'Infraworks',
                  'Primavera',
                  '40+ Design Spread Sheets'
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
                  We also provide an experience letter and <span className="text-[#fbc02d]">100% placement assistance</span>.
                </p>
              </div>
            </div>

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
                Unlock 6-8 Genuine Job Interview opportunities in India, UAE, & Abroad with our comprehensive placement preparation series.
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
                    'linkedIn Profile.'
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

      {/* Added sections starting with msc1.webp */}
      <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto flex justify-center">
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-4">
            <img src="/msc1.webp" alt="MSC Information" className="w-full h-auto object-contain" />
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
      {/* Experience All the Dimensions in the BIM Department */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto flex flex-col items-center">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
              Experience All the Dimensions <br className="hidden md:block"/> in the <span className="text-[#fbc02d]">BIM Department</span>.
            </h2>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-4">
            <img 
              src="/msc_dimensions.png" 
              alt="Experience All the Dimensions in the BIM Department" 
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

      {/* Videos Section Slider */}
      <section className="bg-slate-50 py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Youtube Videos</h2>
            <p className="text-gray-600 md:text-2xl font-bold text-lg max-w-2xl mx-auto mb-2 text-[#fbc02d]">Our Student Reviews</p>
            <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">Hear from our interns and trainees about their experience</p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>
          
          <div className="relative group rounded-[16px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)] bg-black aspect-video md:aspect-[21/9]">
            {/* Videos Wrapper */}
            <div 
              className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{ transform: `translateX(-${currentVidSlide * 100}%)` }}
            >
              {reviewVideos.map((videoSrc, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0 relative">
                  <iframe 
                    src={videoSrc}
                    className="w-full h-full"
                    title={`Student Video ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevVidSlide}
              aria-label="Previous Video"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-gray-800 hover:bg-[#fbc02d] hover:text-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-10 duration-300"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextVidSlide}
              aria-label="Next Video"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-xl flex items-center justify-center text-gray-800 hover:bg-[#fbc02d] hover:text-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 z-10 duration-300"
            >
              <ChevronRight size={28} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 z-10 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full">
              {reviewVideos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentVidSlide(idx)}
                  aria-label={`Go to video ${idx + 1}`}
                  className={`transition-all duration-500 rounded-full ${
                    currentVidSlide === idx 
                      ? 'w-10 h-3 bg-[#fbc02d] shadow-[0_0_10px_#fbc02d]' 
                      : 'w-3 h-3 bg-white/60 hover:bg-white hover:scale-125'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

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

      {/* Added msc4.webp */}
      <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto flex justify-center">
          <div className="w-full rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white p-4">
            <img 
              src="/msc4.webp" 
              alt="MSC Additional Information" 
              className="w-full h-auto object-contain"
            />
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
      {/* Our Clients Infinite Marquee Section */}
      <section className="bg-white py-16 px-4 border-t border-gray-200 overflow-hidden relative">
        <style>
          {`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-250px * 11)); }
            }
            .animate-marquee-scroll {
              animation: marqueeScroll 40s linear infinite;
              display: flex;
              width: calc(250px * 22);
            }
            .animate-marquee-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>
        <div className="max-w-[1500px] mx-auto mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">Our Clients</h2>
          <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-4"></div>
        </div>
        
        <div className="relative w-full max-w-[1500px] mx-auto overflow-hidden">
          {/* Gradient Edges for smooth fade effect */}
          <div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee-scroll flex items-center">
            {/* Array of 11 images duplicated for seamless infinite loop */}
            {[
              "/client1.png", "/client2.png", "/client3.png", "/client4.png", "/client5.png",
              "/client6.png", "/client7.png", "/client8.png", "/client9.png", "/client10.png", "/client11.png",
              "/client1.png", "/client2.png", "/client3.png", "/client4.png", "/client5.png",
              "/client6.png", "/client7.png", "/client8.png", "/client9.png", "/client10.png", "/client11.png"
            ].map((src, idx) => (
              <div key={idx} className="w-[250px] shrink-0 px-6 flex items-center justify-center">
                <img 
                  src={src} 
                  alt={`Client Logo ${idx + 1}`} 
                  className="max-h-20 md:max-h-24 w-auto object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Program Details */}
      <section className="bg-slate-50 py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row shadow-xl">
            
            {/* Left Content */}
            <div className="p-8 md:p-14 lg:w-2/3 flex flex-col justify-center">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 max-w-max">100% Placement Program</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Master Study Program In <br className="hidden md:block"/> <span className="text-[#fbc02d]">Structural + BIM + Project Management</span>.
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-8 border-l-4 border-[#fbc02d] pl-4">Complete Master Study in Project Management with BIM Technology</h3>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Live project experience",
                  "24 Month Experience Letter",
                  "Indian Codes : IS-456 2000 | IS-800 | IS-1893 2016 | IS-13920 | IS-16700",
                  "Digital Library",
                  "Project management Tool",
                  "World class CRM system",
                  "100% Placement Guarantee"
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
                 <span className="text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter">3,50,000</span>
               </div>
               <p className="text-gray-300 font-medium mb-6">AED 16,225 or US$ 4,280</p>
               <div className="bg-white/10 border border-white/20 p-4 rounded-xl mb-10">
                 <p className="text-sm font-bold text-white text-center">(₹ 2,96,610+18% GST)</p>
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

    </div>
  );
};

export default BimHubMSC;
