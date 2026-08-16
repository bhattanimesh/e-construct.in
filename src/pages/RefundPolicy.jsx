import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  RefreshCw, AlertCircle, CheckCircle2, ShieldAlert, FileText,
  Mail, Phone, MapPin, Search, ArrowRight, Printer, Share2,
  ChevronRight, Check, XCircle, HelpCircle, UserX, Clock
} from 'lucide-react';
import ctaBG from '../assets/ctaBG.avif';
import { useAdmin } from '../context/AdminContext';

const RefundPolicy = () => {
  const { data } = useAdmin();
  const c = data?.contact || {
    office: 'Venkatadri Heights, 1st & 2nd Floor Parapanna Agrahara Main Road, Opposite Sai Poorna Premier Apartment, Bangalore - 560068',
    phone1: '+91 90367 44017',
    phone2: '+91 7259921111',
    email1: 'info@e-construct.org',
  };

  const [copied, setCopied] = useState(false);

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* ─── HERO HEADER ──────────────────────────────────────────────────────── */}
      <section className="relative h-[42vh] min-h-[340px] flex items-end overflow-hidden">
        <img
          src={ctaBG}
          alt="Return, Refund and Cancellation Policy"
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
              <span className="text-slate-200">Return &amp; Refund Policy</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs">
                Official Company Policy
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Return, Refund &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400">Cancellation Policy</span>
            </h1>

            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Official company policy of ECONSTRUCT DESIGN &amp; BUILD PVT. LTD. regarding course admissions, returns, refunds, and cancellations.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="bg-slate-800/80 border border-slate-700/60 px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active Policy
              </span>
              <span className="bg-rose-500/10 border border-rose-500/30 text-rose-300 px-3 py-1 rounded-full">
                Strict Non-Refundable / Non-Transferable Terms
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ─── SIDEBAR QUICK LINKS ────────────────────────────────────────── */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                    Quick Actions
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrint}
                      title="Print Policy"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                      aria-label="Print"
                    >
                      <Printer size={16} />
                    </button>
                    <button
                      onClick={handleShare}
                      title="Copy Link"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-orange-600 hover:bg-orange-50 transition-colors relative"
                      aria-label="Share"
                    >
                      {copied ? <Check size={16} className="text-emerald-600" /> : <Share2 size={16} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <Link
                    to="/terms-and-conditions"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-medium transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <FileText size={15} className="text-slate-400 group-hover:text-orange-600" />
                      Terms &amp; Conditions
                    </span>
                    <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <Link
                    to="/privacy-policy"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-orange-600 font-medium transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <FileText size={15} className="text-slate-400 group-hover:text-orange-600" />
                      Privacy Policy
                    </span>
                    <ChevronRight size={14} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900">
                    <p className="font-bold flex items-center gap-1.5 mb-1 text-amber-950">
                      <AlertCircle size={14} className="text-amber-600 shrink-0" />
                      Pre-Admission Note:
                    </p>
                    Please clarify all your doubts with our academic advisors before proceeding with admission and fee payment.
                  </div>
                </div>
              </div>

              {/* Direct Support Email Box */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md border border-slate-700/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Direct Executive Contact</h4>
                    <p className="text-[11px] text-slate-400">Admissions &amp; Management</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  For administrative clarifications or formal communications, contact:
                </p>
                <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-xl text-xs space-y-1 mb-4">
                  <p className="font-semibold text-yellow-400">Shraddha Pingale</p>
                  <p className="text-slate-300">Jt. Managing Director</p>
                  <a href="mailto:shraddha.pingale@e-construct.org" className="text-orange-400 hover:underline block truncate">
                    shraddha.pingale@e-construct.org
                  </a>
                </div>
                <a
                  href="mailto:shraddha.pingale@e-construct.org"
                  className="block text-center py-2 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold transition-colors"
                >
                  Send Official Email
                </a>
              </div>
            </div>

            {/* ─── POLICY DETAILS ────────────────────────────────────────────── */}
            <div className="lg:col-span-8 space-y-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
              
              {/* Official Policy Statement */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                    <RefreshCw size={22} />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Return, Refund and Cancellation Policy
                    </h2>
                    <p className="text-xs text-slate-500">ECONSTRUCT DESIGN &amp; BUILD PVT. LTD.</p>
                  </div>
                </div>

                {/* Primary Box */}
                <div className="bg-rose-50/70 border-2 border-rose-200 rounded-2xl p-6 sm:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <XCircle size={20} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-bold text-rose-950">
                        Strict Non-Refundable &amp; Non-Transferable Policy
                      </h3>
                      <p className="text-sm sm:text-base text-rose-900 leading-relaxed font-medium">
                        &ldquo;Once admission procedure got over and payment is being made for any of the offered courses, paid amount is non-refundable/non-transferable under any kind of circumstances as per company policy. Please clarify all your doubts before taking the admission only.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>

                {/* Return Clause */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <ShieldAlert size={18} className="text-orange-600" />
                    Return Entertainment Clause
                  </h4>
                  <p className="text-sm text-slate-700 font-medium">
                    &ldquo;We do not entertain return in any circumstances.&rdquo;
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    As all training materials, software sessions, proprietary CAD/BIM resources, and masterclass curriculums are digital intellectual property and live academic deliveries, returns or reversals cannot be processed once access is initiated.
                  </p>
                </div>

                {/* Key Points Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <HelpCircle size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm">Before Enrolling</h5>
                      <p className="text-xs text-slate-600 mt-1">
                        Connect with our engineering counseling team to review curriculum, prerequisites, software requirements, and schedule.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0">
                      <UserX size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-xs sm:text-sm">Non-Transferability</h5>
                      <p className="text-xs text-slate-600 mt-1">
                        Course admissions, student IDs, and portal access credentials cannot be transferred or assigned to another student.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Official Contact Desk */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-700 shadow-sm mt-6">
                  <div className="border-b border-slate-700 pb-4">
                    <h4 className="text-lg font-bold text-yellow-400">Official Communication &amp; Queries</h4>
                    <p className="text-xs text-slate-300">ECONSTRUCT DESIGN &amp; BUILD PVT. LTD.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-orange-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-200 block">Bangalore Office:</strong>
                        <span className="text-slate-400 leading-relaxed">
                          Econstruct Design and Build Pvt Ltd, Venkatadri Heights, 1st &amp; 2nd Floor Parapanna Agrahara Main Road, Opposite Sai Poorna Premier Apartment, Bangalore - 560068
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-orange-400 shrink-0" />
                        <div>
                          <strong className="text-slate-200 block">Direct Email:</strong>
                          <a href="mailto:shraddha.pingale@e-construct.org" className="text-yellow-400 hover:underline">
                            shraddha.pingale@e-construct.org
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-orange-400 shrink-0" />
                        <div>
                          <strong className="text-slate-200 block">General Support:</strong>
                          <a href="mailto:info@e-construct.org" className="text-slate-300 hover:underline">
                            info@e-construct.org
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-orange-400 shrink-0" />
                        <div>
                          <strong className="text-slate-200 block">Helpline Phone:</strong>
                          <a href="tel:9036744017" className="text-slate-300 hover:text-white font-medium">
                            +91 90367 44017
                          </a>
                          <span className="text-slate-400"> / +91 7259921111</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
