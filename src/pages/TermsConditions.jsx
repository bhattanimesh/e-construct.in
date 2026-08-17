import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText, ShieldAlert, AlertTriangle, CheckCircle,
  HelpCircle, BookOpen, Clock, Lock, CheckCircle2,
  XCircle, Mail, Phone, MapPin, Search, ArrowRight,
  Printer, Share2, ChevronRight, Check, ExternalLink,
  DollarSign, Monitor, AlertOctagon, UserX
} from 'lucide-react';
import ctaBG from '../assets/ctaBG.avif';
import { useAdmin } from '../context/AdminContext';

const TermsConditions = () => {
  const { data } = useAdmin();
  const c = data?.contact || {
    office: 'Venkatadri Heights, 1st & 2nd Floor Parapanna Agrahara Main Road, Opposite Sai Poorna Premier Apartment, Bangalore - 560068',
    phone1: '90367 44017',
    phone2: '+91 7259921111',
    email1: 'info@e-construct.org',
    email2: 'business@e-construct.org',
  };

  const [activeSection, setActiveSection] = useState('terms-of-service');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const sections = [
    { id: 'terms-of-service', title: '1. Terms of Service', icon: FileText },
    { id: 'third-party', title: '2. Third Party Websites & Content', icon: ExternalLink },
    { id: 'pricing', title: '3. Pricing Policy', icon: DollarSign },
    { id: 'violation-termination', title: '4. Violation & Termination', icon: AlertOctagon },
    { id: 'sop-online-course', title: '5. SOP for Online Course', icon: Monitor },
    { id: 'watch-limits', title: '6. Video Watch Limits (3X Rule)', icon: Clock },
    { id: 'dos-and-donts', title: '7. Do\'s and Don\'ts', icon: CheckCircle },
    { id: 'guidelines-video', title: '8. 11 Important Course Guidelines', icon: BookOpen },
    { id: 'piracy-penalty', title: '9. Anti-Piracy & ₹50 Lakh Penalty', icon: ShieldAlert },
    { id: 'refund-policy', title: '10. Refund Policy', icon: AlertTriangle },
    { id: 'contact-info', title: '11. Official Contact & Authority', icon: Mail },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* ─── HERO HEADER ──────────────────────────────────────────────────────── */}
      <section className="relative h-[42vh] min-h-[340px] flex items-end overflow-hidden">
        <img
          src={ctaBG}
          alt="E-Construct Terms & Conditions"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              <ChevronRight size={14} className="text-slate-500" />
              <span className="text-yellow-400">Legal</span>
              <ChevronRight size={14} className="text-slate-500" />
              <span className="text-slate-200">Terms &amp; Conditions</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs">
                E-Construct Design &amp; Build Pvt LTD
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Terms and <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400">Conditions</span>
            </h1>

            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Official Terms of Service, Standard Operating Procedures (SOP) for Online Courses, and platform usage regulations.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Terms of Service
              </span>
              <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 px-3 py-1 rounded-full">
                Online Course SOP &amp; Video Regulations Enforced
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── AT A GLANCE SUMMARY CARDS ────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <Monitor size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">1 Device Allocation</h4>
                <p className="text-xs text-slate-600 mt-1">Course materials and encrypted video access are restricted to 1 PC/Laptop or 1 Mobile device per student.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">3X Watch Limit</h4>
                <p className="text-xs text-slate-600 mt-1">Each tutorial video has a maximum watching duration of 3 times its original length (e.g. 2 hr video = 6 hrs watch time).</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <ShieldAlert size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Strict Anti-Piracy</h4>
                <p className="text-xs text-slate-600 mt-1">Screen capture or unauthorized redistribution incurs on-spot admission suspension and ₹50,00,000 INR penalty.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Non-Refundable Fees</h4>
                <p className="text-xs text-slate-600 mt-1">Once admission procedure is completed and payment is made, fee is non-refundable under any circumstances.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT LAYOUT ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ─── SIDEBAR TABLE OF CONTENTS ─────────────────────────────────── */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                
                {/* Search in Terms */}
                <div className="relative mb-6">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search in terms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                    Table of Contents
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrint}
                      title="Print Terms"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                      aria-label="Print"
                    >
                      <Printer size={16} />
                    </button>
                    <button
                      onClick={handleShare}
                      title="Copy Page Link"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-orange-600 hover:bg-orange-50 transition-colors relative"
                      aria-label="Share"
                    >
                      {copied ? <Check size={16} className="text-emerald-600" /> : <Share2 size={16} />}
                    </button>
                  </div>
                </div>

                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                  {sections
                    .filter((s) => s.title.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((section) => {
                      const Icon = section.icon;
                      const isActive = activeSection === section.id;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollTo(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between group ${
                            isActive
                              ? 'bg-orange-50 text-orange-600 font-semibold border-l-4 border-orange-600 pl-2.5'
                              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <span className="flex items-center gap-2 truncate">
                            <Icon size={14} className={isActive ? 'text-orange-600' : 'text-slate-400 group-hover:text-slate-600'} />
                            <span className="truncate">{section.title}</span>
                          </span>
                          <ChevronRight size={12} className={`shrink-0 transition-transform ${isActive ? 'text-orange-600 translate-x-0.5' : 'text-slate-300 group-hover:translate-x-0.5'}`} />
                        </button>
                      );
                    })}
                </nav>

                {/* Quick Links */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  <Link
                    to="/privacy-policy"
                    className="flex items-center justify-between text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors group"
                  >
                    <span>View Privacy Policy</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-orange-600" />
                  </Link>
                  <Link
                    to="/return-refund-and-cancellation-policy"
                    className="flex items-center justify-between text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors group"
                  >
                    <span>View Refund Policy</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-orange-600" />
                  </Link>
                </div>
              </div>

              {/* Management Note Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md border border-slate-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <HelpCircle size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Course Admissions</h4>
                    <p className="text-[11px] text-slate-400">Econstruct Management</p>
                  </div>
                </div>
                <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl text-xs space-y-1 mb-3">
                  <p className="font-semibold text-yellow-400">Shraddha Pingale</p>
                  <p className="text-slate-300">Jt. Managing Director</p>
                  <p className="text-slate-400">Econstruct Design &amp; Build Pvt. Ltd</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Call: <a href="tel:9036744017" className="text-yellow-400 hover:underline font-semibold">+91 90367 44017</a>
                </p>
              </div>
            </div>

            {/* ─── TERMS DOCUMENT DETAILS ────────────────────────────────────── */}
            <div className="lg:col-span-8 space-y-10 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              
              {/* 1. Terms of Service */}
              <section id="terms-of-service" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    1. Terms of Service
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Access to and use of <strong>www.e-construct.in</strong> and the products and service available through the website are subject to the following terms, conditions and notices (&ldquo;Terms of Service&rdquo;). By browsing through these Terms of Service and using the services provided by our website (<strong>www.e-construct.in</strong>), you agree to all Terms of Service along with the Privacy Policy on our website, which may be updated by us from time to time. Please check this page regularly to take notice of any changes we may have made to the Terms of Service.
                  </p>
                  <p>
                    We reserve the right to review and withdraw or amend the services without notice. We will not be liable if for any reason this Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts or this entire Website.
                  </p>
                </div>
              </section>

              {/* 2. Third Party Websites and Content */}
              <section id="third-party" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <ExternalLink size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    2. Third Party Websites and Content
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Our website provides links for sharing our content on Facebook, Twitter, and other such third-party websites. These are only for sharing and/or listing purpose and we take no responsibility of the third party websites and/or their contents listed on our website (<strong>www.e-construct.in</strong>) and disclaim all our liabilities arising out of any or all third party websites.
                  </p>
                  <p>
                    We disclaim all liabilities and take no responsibility for the content that may be posted on such third party websites by the users of such websites in their personal capacity on any of the above mentioned links for sharing and/or listing purposes as well as any content and/or comments that may be posted by such user in their personal capacity on any official webpage of e-construct.in on any social networking platform.
                  </p>
                </div>
              </section>

              {/* 3. Pricing */}
              <section id="pricing" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <DollarSign size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    3. Pricing
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    We ensure that all details of prices appearing on the website are accurate, however, errors may occur. If we discover an error in the price of any services which you have ordered, we will inform you of this as soon as possible.
                  </p>
                </div>
              </section>

              {/* 4. Violation & Termination */}
              <section id="violation-termination" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                    <AlertOctagon size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    4. Violation &amp; Termination
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    You agree that the Company may, in its sole discretion and without prior notice, terminate your access to the website and block your future access if we determine that you have violated these Terms of Service or any other policies. If you or the Company terminates your use of any service, you shall still be liable to pay for any service that you have already ordered till the time of such termination.
                  </p>
                </div>
              </section>

              {/* 5. STANDARD OPERATION PROCEDURE FOR ONLINE COURSE */}
              <section id="sop-online-course" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Monitor size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    5. Standard Operation Procedure (SOP) for Online Course
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    This is hereby informed to every online course attendee that we have launched this course to help the students to learn the things properly and set their career in right path. In order to do that, we are providing all the recorded videos and materials to the students.
                  </p>
                  <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3 text-xs sm:text-sm">
                    <p className="font-semibold text-yellow-400">
                      STRICT PROHIBITION ON COPYING &amp; MULTI-DEVICE USE:
                    </p>
                    <p className="text-slate-300">
                      Every material provided by us (e.g. Video Files, CADD Plans, Excel Sheets etc.) is strictly prohibited to <strong>COPY IN SEVERAL SYSTEMS (EXCEPT ONE PC/LAPTOP OR ONE MOBILE FOR EACH STUDENT), CAPTURE THROUGH ANY SCREEN RECORDING SOFTWARE, RECORD THROUGH ANY MEDIUM etc.</strong>
                    </p>
                    <p className="text-slate-300">
                      All the videos are there in encrypted format it&apos;s not possible to make any copy or recording out of it, but whenever it has been tried by anyone, we get null hit points through which we can figure out what exactly has been tried by whom.
                    </p>
                    <p className="text-slate-300">
                      This is to inform again that from students&apos; point of view the purpose of this course should be solely to learn and get benefitted, not to do any kind of piracy or copy. We expect the same approach from our students as well.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Video Watch Limits */}
              <section id="watch-limits" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-yellow-100 text-yellow-700 flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    6. Video Watch Limits (3X Watch Rule)
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <div className="bg-amber-50/80 border-2 border-amber-200 rounded-2xl p-5 text-amber-950 space-y-2">
                    <p className="font-bold text-base">
                      Watch Limit for Every Video is 3 Times
                    </p>
                    <p className="text-xs sm:text-sm">
                      It means suppose one video is 2 hours duration, one can watch that video (3 &times; 2) = <strong>6 hours</strong>. So, for that particular video 6 hours will be the watching time duration for each person.
                    </p>
                  </div>
                </div>
              </section>

              {/* 7. Do's and Don'ts Table */}
              <section id="dos-and-donts" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    7. Do&apos;s and Don&apos;ts for Students
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  {/* DO'S */}
                  <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 space-y-3">
                    <h4 className="font-bold text-emerald-900 text-sm flex items-center gap-2 pb-2 border-b border-emerald-200">
                      <CheckCircle2 size={18} className="text-emerald-600" />
                      DO&apos;S
                    </h4>
                    <ul className="space-y-2 text-emerald-950">
                      <li className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Watch videos at your convenient time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Watch the videos with full attentiveness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Try to learn holistically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Ask the doubts based on your course content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Keep Practicing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Be Patient</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>Contact us if any problems are there regarding videos or anything</span>
                      </li>
                    </ul>
                  </div>

                  {/* DON'TS */}
                  <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5 space-y-3">
                    <h4 className="font-bold text-rose-900 text-sm flex items-center gap-2 pb-2 border-b border-rose-200">
                      <XCircle size={18} className="text-rose-600" />
                      DON&apos;TS
                    </h4>
                    <ul className="space-y-2 text-rose-950">
                      <li className="flex items-start gap-2">
                        <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                        <span><strong>Copy</strong> any files or videos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                        <span><strong>Screen Capture or Screen Recording</strong> from Any Third-Party Software</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                        <span>Try to run in other systems except the allocated one</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                        <span><strong>Any kind of Piracy</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                        <span>Connect any kind of Projector or Broadcasting Tool</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                        <span>Panic</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 8. GUIDELINE FOR MOST EFFECTIVE WAY OF WATCHING TUTORIAL VIDEO */}
              <section id="guidelines-video" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <BookOpen size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    8. Guidelines for Most Effective Learning &amp; Important Points
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                    <p className="font-semibold text-slate-900">
                      Guideline for most effective way of watching tutorial video &amp; important points to be maintained in Online Advance Study Course:
                    </p>
                    <ol className="space-y-2.5 list-decimal list-inside text-slate-700">
                      <li>
                        <strong>Watch the video, pause in between, take notes and go ahead.</strong> Don&apos;t make it a group activity otherwise your watch timings of videos will get reduced.
                      </li>
                      <li>
                        <strong>Start working on the Assignments given sequence-wise.</strong> Don&apos;t jump or try to learn everything at a time.
                      </li>
                      <li>
                        <strong>Make notes out of videos very properly.</strong> Note down each and every step so that you can directly refer notes while working on assignments.
                      </li>
                      <li>
                        <strong>Start listing your doubts every time and post it in workgroup chat.</strong>
                      </li>
                      <li>
                        <strong>Don&apos;t start panicking if reply takes some time.</strong> To revert back sometimes might not be immediately. Our official working hours is <strong>Mon-Fri (10 AM – 7 PM)</strong>, we don&apos;t work on holidays that&apos;s why sometimes it might take a little more time; in that case just be patient and wait for your turn.
                      </li>
                      <li>
                        <strong>Everything promised in curriculum will be covered within stipulated time.</strong> We are very much committed to that so don&apos;t worry regarding completion of entire course. Give your full effort and go gradually to take the maximum benefit out of this entire time span.
                      </li>
                      <li>
                        <strong>Try to understand the concept as much as you can from video.</strong> If you find any difficulties just note down the doubts and get it clarified from your workgroup chat/1:1 meeting with our engineers (Once in a week for one student).
                      </li>
                      <li>
                        <strong>Dashboard communication policy:</strong> Once the student gets the dashboard login credentials, he/she is not allowed to contact with any one of the company personnel through WhatsApp/Phone call or any other medium except dashboard chat until asked to do so.
                      </li>
                      <li>
                        <strong>Course regulation compliance:</strong> Students must follow each and every regulation in order to continue with the Online Advance Study Course. Once cancellation comes on any account, that will not be taken back under any kind of circumstances.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* 9. Anti-Piracy & Penalty Clause */}
              <section id="piracy-penalty" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                    <ShieldAlert size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    9. Anti-Piracy Warning &amp; Penalty Clause
                  </h2>
                </div>
                <div className="bg-rose-50/80 border-2 border-rose-300 rounded-2xl p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertOctagon size={24} className="text-rose-600 shrink-0 mt-1" />
                    <div className="space-y-2 text-xs sm:text-sm text-rose-950">
                      <h4 className="font-bold text-base text-rose-900">
                        Immediate Admission Suspension &amp; ₹50,00,000/- INR Penalty
                      </h4>
                      <p className="leading-relaxed font-medium">
                        &ldquo;If we find any suspicious activities as mentioned above in STANDARD OPERATION PROCEDURE, we hereby possess the authority to <strong>suspend that particular admission on-spot without any further clarifications</strong> and that person will be liable to pay <strong>Rs. 50,00,000/- (INR) as penalty amount</strong> for attempting to do the piracy/copy or any other mentioned prohibited activity.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 10. Refund Policy */}
              <section id="refund-policy" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <AlertTriangle size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    10. Refund Policy
                  </h2>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3 text-xs sm:text-sm text-slate-700">
                  <p className="font-semibold text-slate-900 text-sm">
                    &ldquo;Once admission procedure got over and payment is done, refund is not possible as per company policy under any kind of circumstances. Please clarify all your doubts regarding course before taking the admission only.&rdquo;
                  </p>
                  <p className="text-slate-500">
                    For complete refund and cancellation guidelines, please refer to our dedicated <Link to="/return-refund-and-cancellation-policy" className="text-orange-600 hover:underline font-semibold">Return, Refund and Cancellation Policy page</Link>.
                  </p>
                </div>
              </section>

              {/* 11. Official Contact & Authority */}
              <section id="contact-info" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    11. Management &amp; Official Contact Information
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-700 shadow-sm">
                  <div className="border-b border-slate-700 pb-4">
                    <h4 className="text-lg font-bold text-yellow-400">Shraddha Pingale</h4>
                    <p className="text-xs text-slate-300">Jt. Managing Director, Econstruct Design &amp; Build Pvt. Ltd</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-200 block">Corporate Office:</strong>
                        <span className="text-slate-400 leading-relaxed">
                          Econstruct Design and Build Pvt Ltd, Venkatadri Heights, 1st &amp; 2nd Floor Parapanna Agrahara Main Road, Opposite Sai Poorna Premier Apartment, Bangalore - 560068
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Mail size={16} className="text-orange-400 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-200 block">Official Email:</strong>
                          <div className="flex flex-col gap-0.5">
                            <a href="mailto:info@e-construct.org" className="text-yellow-400 hover:underline">info@e-construct.org</a>
                            <a href="mailto:business@e-construct.org" className="text-yellow-400 hover:underline">business@e-construct.org</a>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-orange-400 shrink-0" />
                        <div>
                          <strong className="text-slate-200 block">Give Us a Call:</strong>
                          <a href="tel:9036744017" className="text-slate-300 hover:text-white font-medium">+91 90367 44017</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
