import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Lock, FileText, CheckCircle2, AlertCircle, HelpCircle,
  Eye, Database, Globe, UserCheck, RefreshCw, Mail, Phone, MapPin,
  Search, ArrowRight, Printer, Share2, ChevronRight, Check,
  BarChart3, MessageSquare, Cookie, ShieldCheck
} from 'lucide-react';
import ctaBG from '../assets/ctaBG.avif';
import { useAdmin } from '../context/AdminContext';

const PrivacyPolicy = () => {
  const { data } = useAdmin();
  const c = data?.contact || {
    office: 'Venkatadri Heights, 1st & 2nd Floor Parapanna Agrahara Main Road, Opposite Sai Poorna Premier Apartment, Bangalore - 560068',
    phone1: '90367 44017',
    phone2: '+91 7259921111',
    email1: 'info@e-construct.org',
    email2: 'business@e-construct.org',
  };

  const [activeSection, setActiveSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const effectiveDate = '1st May 2019';

  const sections = [
    { id: 'overview', title: '1. Overview & Acceptance', icon: Shield },
    { id: 'info-collection', title: '2. Information Collection & Use', icon: Database },
    { id: 'log-data', title: '3. Log Data & Analytics', icon: BarChart3 },
    { id: 'communications', title: '4. Communications & Newsletters', icon: MessageSquare },
    { id: 'cookies', title: '5. Cookies Policy', icon: Cookie },
    { id: 'security', title: '6. Security Standards', icon: Lock },
    { id: 'policy-changes', title: '7. Changes to This Privacy Policy', icon: RefreshCw },
    { id: 'contact-details', title: '8. Contact Information', icon: Mail },
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
          alt="E-Construct Privacy Policy"
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
              <span className="text-slate-200">Privacy Policy</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs">
                E-Construct Design &amp; Build Pvt LTD
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400">Policy</span>
            </h1>

            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Our policies regarding the collection, use and disclosure of Personal Information we receive from users of www.e-construct.in.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Effective Date: {effectiveDate}
              </span>
              <span className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 px-3 py-1 rounded-full">
                Active &amp; Enforced
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
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Site Improvement</h4>
                <p className="text-xs text-slate-600 mt-1">We use your Personal Information solely for providing and enhancing our services and website experience.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0">
                <Lock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Commercially Secure</h4>
                <p className="text-xs text-slate-600 mt-1">We employ commercially acceptable safeguards to protect your personal and project information.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Cookie size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Cookie Controls</h4>
                <p className="text-xs text-slate-600 mt-1">You can instruct your browser to manage, restrict, or refuse cookies at any time.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <BarChart3 size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">Analytics Monitoring</h4>
                <p className="text-xs text-slate-600 mt-1">Standard web traffic logs and Google Analytics monitor site performance and navigation.</p>
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
                
                {/* Search in Policy */}
                <div className="relative mb-6">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search in policy..."
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
                      title="Print Privacy Policy"
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

                {/* Quick Link to Terms and Refund */}
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  <Link
                    to="/terms-and-conditions"
                    className="flex items-center justify-between text-xs font-semibold text-slate-600 hover:text-orange-600 transition-colors group"
                  >
                    <span>View Terms &amp; Conditions</span>
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

              {/* Support Email Card */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md border border-slate-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Privacy Inquiries</h4>
                    <p className="text-[11px] text-slate-400">Support Desk</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  For any privacy questions or data concerns, write to our official team at <span className="text-yellow-400 font-medium">info@e-construct.org</span> or <span className="text-yellow-400 font-medium">business@e-construct.org</span>.
                </p>
                <a
                  href="mailto:info@e-construct.org"
                  className="block text-center py-2 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold transition-colors"
                >
                  Email Privacy Desk
                </a>
              </div>
            </div>

            {/* ─── POLICY DOCUMENT DETAILS ───────────────────────────────────── */}
            <div className="lg:col-span-8 space-y-10 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              
              {/* 1. Overview */}
              <section id="overview" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Shield size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    1. Overview &amp; Acceptance
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Econstruct operates <strong>&ldquo;www.e-construct.in&rdquo;</strong>. This page informs you of our policies regarding our products, use and disclosure of Personal Information we receive from users of the Site.
                  </p>
                  <p>
                    We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the products and use of information in accordance with this policy.
                  </p>
                </div>
              </section>

              {/* 2. Information Collection and Use */}
              <section id="info-collection" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Database size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    2. Information Collection and Use
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally, identifiable information may include but is not limited to your name (<strong>&ldquo;Personal Information&rdquo;</strong>), contact number, and email address.
                  </p>
                </div>
              </section>

              {/* 3. Log Data */}
              <section id="log-data" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <BarChart3 size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    3. Log Data
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Like many site operators, we collect information that your browser sends whenever you visit our Site (<strong>&ldquo;Log Data&rdquo;</strong>).
                  </p>
                  <p>
                    This Log Data may include information such as your computer&apos;s Internet Protocol (<strong>&ldquo;IP&rdquo;</strong>) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this.
                  </p>
                </div>
              </section>

              {/* 4. Communications */}
              <section id="communications" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    4. Communications
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information related to our engineering consultancy services, project updates, and professional training programs.
                  </p>
                </div>
              </section>

              {/* 5. Cookies */}
              <section id="cookies" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Cookie size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    5. Cookies
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer&apos;s hard drive.
                  </p>
                  <p>
                    Like many sites, we use <strong>&ldquo;cookies&rdquo;</strong> to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                  </p>
                </div>
              </section>

              {/* 6. Security */}
              <section id="security" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Lock size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    6. Security
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                  </p>
                </div>
              </section>

              {/* 7. Changes to This Privacy Policy */}
              <section id="policy-changes" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                    <RefreshCw size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    7. Changes to This Privacy Policy
                  </h2>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                  <p>
                    This Privacy Policy is effective as of <strong>1st May 2019</strong> and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                  </p>
                  <p>
                    We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
                  </p>
                  <p>
                    If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
                  </p>
                </div>
              </section>

              {/* 8. Contact Information */}
              <section id="contact-details" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    8. Official Contact &amp; Corporate Office
                  </h2>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-700 shadow-sm">
                  <div className="border-b border-slate-700 pb-4">
                    <h4 className="text-lg font-bold text-yellow-400">ECONSTRUCT DESIGN &amp; BUILD PVT. LTD.</h4>
                    <p className="text-xs text-slate-300">Improve efficiency, provide a better Customer experience with modern Technology services available</p>
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
                          <strong className="text-slate-200 block">Email:</strong>
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

export default PrivacyPolicy;
