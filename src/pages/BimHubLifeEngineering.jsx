import React from 'react';
import { MessageCircle, Phone, Star, Target, TrendingUp, Users, Lightbulb, GraduationCap } from 'lucide-react';

const WHATSAPP_NUMBER = '919036744017';
const WHATSAPP_MSG = encodeURIComponent('Hi, I am interested in the Life Engineering Academy. Please share more details.');

const BimHubLifeEngineering = () => {
  const features = [
    {
      icon: Star,
      title: 'Personal Branding',
      desc: 'Build a powerful professional identity that stands out. Learn to craft your story, optimize your LinkedIn, and create a video resume that opens doors.',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-500',
    },
    {
      icon: Target,
      title: 'Life Skills',
      desc: 'Master the essential skills that no university teaches — time management, emotional intelligence, decision-making, and building productive habits.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Career Coaching',
      desc: 'Get personalized guidance on career planning, interview preparation, salary negotiation, and navigating the AEC industry job market.',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      icon: Lightbulb,
      title: 'Entrepreneurship',
      desc: 'Discover how to think like a founder. From ideation to execution, learn the mindset and tools needed to build your own venture in the AEC space.',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
  ];

  const pillars = [
    { number: '01', title: 'Mindset Reset', desc: 'Shift from a fixed mindset to a growth mindset through structured exercises and real-world challenges.' },
    { number: '02', title: 'Goal Architecture', desc: 'Design a 1-year, 3-year, and 5-year life plan with actionable milestones and accountability systems.' },
    { number: '03', title: 'Communication Mastery', desc: 'Develop confident verbal, written, and digital communication skills for professional environments.' },
    { number: '04', title: 'Financial Literacy', desc: 'Understand personal finance basics — budgeting, saving, investing — tailored for young engineers.' },
    { number: '05', title: 'Leadership & Influence', desc: 'Learn how to lead teams, manage conflicts, and build influence without authority.' },
    { number: '06', title: 'Network Building', desc: 'Build a strategic professional network that accelerates your career and opens unexpected opportunities.' },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">

      {/* ── Hero ── */}
      <section className="relative w-full h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/prj6.jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/60" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-block bg-[#fbc02d] text-gray-900 text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
            Personal Development
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            The Life Engineering Academy
          </h1>
          <p className="mt-5 text-white text-lg md:text-xl font-medium tracking-wide drop-shadow-md max-w-2xl leading-relaxed">
            Personal &amp; Professional Development
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> Join the Academy
            </a>
            <a
              href="tel:+919036744017"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-7 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">About the Program</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                Engineering Your Life,<br />
                <span className="text-[#fbc02d]">Not Just Your Career</span>
              </h2>
              <p className="text-gray-600 text-lg font-medium leading-relaxed mb-5">
                The Life Engineering Academy is a unique program by Econstruct that goes beyond technical skills. We believe that true success requires mastering both your profession and your personal life — and most institutions only teach one half.
              </p>
              <p className="text-gray-600 text-lg font-medium leading-relaxed mb-5">
                This program is designed for engineers, architects, and AEC professionals who want to build a life of purpose, financial freedom, and lasting impact. Through structured modules, mentorship, and real-world challenges, you'll develop the mindset and skills that separate good professionals from great ones.
              </p>
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                Led by Mr. Sandeep Pingale — with 20+ years of industry experience and a track record of mentoring 1,000+ students — this is not a typical self-help course. It's a practical, no-nonsense system for engineering the life you want.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src="/prj6.jpg"
                alt="Life Engineering Academy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Feature Cards ── */}
      <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
              <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Core Modules</span>
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">What We Cover</h2>
            <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.07)] p-8 flex gap-6 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-7 h-7 ${f.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-3">{f.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed text-sm">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6 Pillars ── */}
      <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
              <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Framework</span>
              <span className="w-12 h-[2px] bg-[#fbc02d]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">The 6 Pillars of Life Engineering</h2>
            <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.number}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <p className="text-4xl font-black text-[#fbc02d]/30 mb-3 leading-none">{p.number}</p>
                <h3 className="text-lg font-black text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Is This For ── */}
      <section className="bg-white py-16 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl p-10 md:p-14 text-center shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#fbc02d]/20 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-[#fbc02d]" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Who Is This For?</h2>
            <p className="text-blue-100 text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Fresh graduates entering the workforce, mid-career professionals seeking a reset, and entrepreneurs in the AEC space who want to grow beyond technical expertise.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['Civil Engineers', 'Architects', 'BIM Professionals', 'Project Managers', 'Fresh Graduates', 'AEC Entrepreneurs'].map((tag) => (
                <span key={tag} className="bg-white/10 border border-white/20 text-white text-sm font-bold px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#fbc02d] py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-gray-900/10 flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-8 h-8 text-gray-900" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            Start Engineering Your Life Today
          </h2>
          <p className="text-gray-800 text-lg font-medium mb-8 leading-relaxed">
            Take the first step toward a life of purpose, impact, and financial freedom. Reach out to learn about the next cohort.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a
              href="tel:+919036744017"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg"
            >
              <Phone size={18} /> +91 90367 44017
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BimHubLifeEngineering;
