import React from 'react';
import { CheckCircle2, MessageCircle, Phone, Clock, Calendar, Monitor, Award, Wrench } from 'lucide-react';
import SiteVisitsScroller from '../components/SiteVisitsScroller';

const WHATSAPP_NUMBER = '919036744017';
const WHATSAPP_MSG = encodeURIComponent('Hi, I am interested in the 3-Day ETABS Workshop. Please share more details.');

const BimHubETABSWorkshop = () => {
  const learnPoints = [
    'Introduction to ETABS interface and workflow for high-rise structures',
    'Modelling multi-storey RCC and steel frame buildings from scratch',
    'Defining load cases, load combinations as per IS codes',
    'Seismic analysis using Response Spectrum Method (IS 1893:2016)',
    'Design of beams, columns, slabs, and shear walls in ETABS',
    'Generating and interpreting design reports and output files',
  ];

  const pricingCards = [
    {
      mode: 'Offline',
      duration: '3 Days',
      price: '₹9,900',
      color: 'from-slate-800 to-slate-900',
      badge: null,
      features: [
        'In-person hands-on sessions',
        'Direct trainer interaction',
        'Printed study material',
        'Certificate of completion (IIT Bhubaneswar & Econstruct)',
      ],
    },
    {
      mode: 'Online',
      duration: '45 Days Access',
      price: '₹14,900',
      color: 'from-yellow-500 to-yellow-600',
      badge: 'Most Popular',
      features: [
        'Live + recorded sessions',
        '45-day video access',
        'Digital study material',
        'Certificate of completion (IIT Bhubaneswar & Econstruct)',
        'Doubt-clearing sessions',
      ],
    },
    {
      mode: 'Combined',
      duration: '48 Days',
      price: '₹21,000',
      color: 'from-blue-700 to-blue-900',
      badge: 'Best Value',
      features: [
        'Offline 3-day intensive',
        '45-day online access',
        'Printed + digital material',
        'Certificate of completion (IIT Bhubaneswar & Econstruct)',
        'Priority doubt support',
        'Mock interview session',
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* ── Hero ── */}
      <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: `url('/b2_new.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          {/* IIT Bhubaneswar High-Visibility Partnership Card */}
          <div className="inline-flex items-center gap-3.5 bg-slate-900/95 backdrop-blur-md border border-yellow-500/50 p-2 sm:p-2.5 pr-4 sm:pr-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] mb-6">
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] max-w-4xl">
            3-Day ETABS Workshop
          </h1>
          <p className="mt-6 text-gray-200 text-lg md:text-2xl font-extrabold tracking-wide drop-shadow-lg max-w-2xl leading-relaxed">
            Master High-Rise Structural Design
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> Enroll via WhatsApp
            </a>
            <a
              href="tel:+919036744017"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Overview Video ── */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Overview</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
          </div>
          <div className="w-full bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/YkimCw_Nu1M?si=TMB-qf3YXr24j9-r"
              className="w-full h-full"
              title="3-Day ETABS Workshop Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── Quick Info Cards ── */}
      <section className="bg-white py-14 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Clock, label: 'Duration', value: '3 Days Intensive' },
            { icon: Monitor, label: 'Mode', value: 'Offline / Online / Combined' },
            { icon: Award, label: 'Certificate', value: 'Issued on Completion' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-slate-50 rounded-2xl p-8 flex flex-col items-center text-center border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#fbc02d]/15 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#fbc02d]" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.15em] text-gray-400 mb-1">{label}</p>
              <p className="text-base font-bold text-gray-900">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What You'll Learn ── */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
              <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Curriculum</span>
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">What You'll Learn</h2>
            <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {learnPoints.map((point, i) => (
              <div key={i} className="bg-white rounded-xl p-6 flex items-start gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real Site Visits Scroller ── */}
      <SiteVisitsScroller
        badge="REAL-WORLD STRUCTURAL PROJECTS"
        title="Structural Site Visits"
        highlight="in Action"
        subtitle="Comparing ETABS numerical simulations & stress diagrams with real-world structural framing"
      />

      {/* ── Pricing Cards ── */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
              <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Pricing</span>
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Choose Your Mode</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingCards.map((card) => (
              <div
                key={card.mode}
                className={`relative rounded-2xl overflow-hidden shadow-xl flex flex-col`}
              >
                {card.badge && (
                  <div className="absolute top-4 right-4 bg-white text-gray-900 text-[0.65rem] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md z-10">
                    {card.badge}
                  </div>
                )}
                <div className={`bg-gradient-to-br ${card.color} p-8 text-white`}>
                  <p className="text-sm font-black uppercase tracking-[0.2em] opacity-80 mb-2">{card.mode}</p>
                  <p className="text-4xl font-black mb-1">{card.price}</p>
                  <p className="text-sm opacity-75 flex items-center gap-1.5">
                    <Calendar size={13} /> {card.duration}
                  </p>
                </div>
                <div className="bg-white flex-1 p-8 flex flex-col">
                  <ul className="space-y-3 flex-1 mb-8">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-gray-700 font-medium text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to enroll in the 3-Day ETABS Workshop — ${card.mode} (${card.price}). Please share details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow hover:shadow-md"
                  >
                    <MessageCircle size={16} /> Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#fbc02d]/20 flex items-center justify-center mx-auto mb-6">
            <Wrench className="w-8 h-8 text-[#fbc02d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Ready to Master ETABS?
          </h2>
          <p className="text-blue-100 text-lg font-medium mb-8 leading-relaxed">
            Join our intensive 3-day workshop and gain the structural analysis skills that top firms demand. Limited seats available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a
              href="tel:+919036744017"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300"
            >
              <Phone size={18} /> +91 90367 44017
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BimHubETABSWorkshop;
