import React from 'react';
import { MessageCircle, Phone, Clock, Zap, BookOpen } from 'lucide-react';

const WHATSAPP_NUMBER = '919036744017';
const WHATSAPP_MSG = encodeURIComponent('Hi, I am interested in the Online Crash Courses. Please share more details.');

const BimHubOnlineCrashCourses = () => {
  const courses = [
    {
      icon: '🏗️',
      title: 'ETABS Basics',
      subtitle: 'Structural Analysis & Design',
      duration: '3 Days',
      price: '₹4,999',
      highlights: ['Modelling basics', 'Load assignment', 'IS code design', 'Report generation'],
    },
    {
      icon: '🧱',
      title: 'SAFE Basics',
      subtitle: 'Slab & Foundation Design',
      duration: '2 Days',
      price: '₹2,999',
      highlights: ['Slab modelling', 'Foundation design', 'Punching shear', 'Output interpretation'],
    },
    {
      icon: '🔷',
      title: 'REVIT Structures',
      subtitle: 'BIM for Structural Engineers',
      duration: '5 Days',
      price: '₹7,999',
      highlights: ['Structural families', 'Analytical model', 'Clash detection', 'Drawing sheets'],
    },
    {
      icon: '📐',
      title: 'AutoCAD for Civil',
      subtitle: '2D Drafting & Documentation',
      duration: '3 Days',
      price: '₹3,999',
      highlights: ['2D drafting tools', 'Layers & blocks', 'Dimensioning', 'Plot & print setup'],
    },
    {
      icon: '📊',
      title: 'Primavera P6',
      subtitle: 'Project Scheduling & Planning',
      duration: '4 Days',
      price: '₹5,999',
      highlights: ['WBS creation', 'Resource loading', 'Baseline & tracking', 'S-curve reports'],
    },
    {
      icon: '🌐',
      title: 'BIM Fundamentals',
      subtitle: 'Introduction to BIM Workflow',
      duration: '3 Days',
      price: '₹3,999',
      highlights: ['BIM concepts & LOD', 'Revit overview', 'Coordination basics', 'BIM uses & standards'],
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* ── Hero ── */}
      <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
          style={{ backgroundImage: `url('/BuildingInformationModelling.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-2 bg-[#fbc02d] text-gray-900 text-xs font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 shadow-md">
            <Zap size={12} /> Online Learning
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] max-w-4xl">
            Online Crash Courses
          </h1>
          <p className="mt-6 text-gray-200 text-lg md:text-2xl font-extrabold tracking-wide drop-shadow-lg max-w-2xl leading-relaxed">
            Quick Skill Upgrades for Busy Professionals
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

      {/* ── Why Crash Courses ── */}
      <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Fast & Focused', desc: '2–5 day intensive programs covering exactly what you need, nothing more.' },
              { icon: Clock, title: 'Flexible Timing', desc: 'Live sessions scheduled around your work hours. Recordings available 24/7.' },
              { icon: BookOpen, title: 'Industry-Relevant', desc: 'Curriculum designed by practitioners with 20+ years of real project experience.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#fbc02d]/15 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#fbc02d]" />
                </div>
                <h3 className="text-base font-black text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
              <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">All Courses</span>
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Available Crash Courses</h2>
            <p className="text-gray-500 font-medium mt-3 max-w-xl mx-auto">
              Pick the course that fits your skill gap. All courses include live sessions, recordings, and a certificate.
            </p>
            <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.07)] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-7 flex items-start gap-4">
                  <div className="text-4xl leading-none">{course.icon}</div>
                  <div>
                    <h3 className="text-lg font-black text-white leading-tight">{course.title}</h3>
                    <p className="text-slate-400 text-xs font-medium mt-1">{course.subtitle}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1">
                  {/* Duration & Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                      <Clock size={14} className="text-[#fbc02d]" />
                      {course.duration}
                    </div>
                    <span className="text-2xl font-black text-[#fbc02d]">{course.price}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-gray-600 text-sm font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fbc02d] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Enroll Button */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to enroll in the ${course.title} crash course (${course.price}). Please share details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow hover:shadow-md text-sm"
                  >
                    <MessageCircle size={15} /> Enroll Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bundle Banner ── */}
      <section className="bg-slate-50 py-14 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#fbc02d] to-yellow-400 rounded-2xl p-10 md:p-14 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Want Multiple Courses?
            </h2>
            <p className="text-gray-800 font-medium text-lg mb-6 max-w-xl mx-auto">
              Ask us about bundle pricing. Enroll in 2 or more crash courses and get a special discount.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I want to know about bundle pricing for multiple crash courses.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> Ask About Bundles
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-[#fbc02d]/20 flex items-center justify-center mx-auto mb-6">
            <Zap className="w-8 h-8 text-[#fbc02d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Upgrade Your Skills This Weekend
          </h2>
          <p className="text-blue-100 text-lg font-medium mb-8 leading-relaxed">
            Our crash courses are designed to give you job-ready skills in the shortest time possible. No fluff, just results.
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

export default BimHubOnlineCrashCourses;
