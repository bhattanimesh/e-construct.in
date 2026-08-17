import React, { useState } from 'react';
import {
  MessageCircle, Phone, Briefcase, Award, Rocket, Heart,
  User, Users, Package, ChevronDown, CheckCircle, GraduationCap,
  Video, BarChart2,
} from 'lucide-react';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const whyJoin = [
  { icon: Briefcase, title: 'On Job Learning', desc: 'Real-world, hands-on experience embedded into your daily work — learn while you earn.', color: 'bg-yellow-50', iconColor: 'text-yellow-500' },
  { icon: Award, title: '100% Job Guarantee', desc: 'We stand behind our program with a full placement guarantee for every enrolled student.', color: 'bg-green-50', iconColor: 'text-green-600' },
  { icon: Rocket, title: 'Start Your Business', desc: 'Gain the marketing and management knowledge to launch and grow your own venture confidently.', color: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: Heart, title: 'Unleash Your Passion', desc: 'Align your career with what drives you — build a brand around your strengths and interests.', color: 'bg-purple-50', iconColor: 'text-purple-600' },
];

const workingOn = [
  { icon: User, title: 'Personal Branding', desc: 'Craft a compelling personal identity — your story, your presence, your digital footprint.' },
  { icon: Users, title: 'Team Branding', desc: 'Build cohesive team identities that attract talent, inspire loyalty, and project authority.' },
  { icon: Package, title: 'Product Branding', desc: 'Position products and services to win in competitive markets through strategic brand design.' },
];

const jobCategories = [
  {
    category: 'General Marketing',
    roles: ['Chief Marketing Officer', 'Director of Marketing', 'Marketing Manager', 'Marketing Analyst', 'Marketing Consultant', 'Marketing Specialist', 'Marketing coordinator', 'Vice president of marketing'],
  },
  {
    category: 'Brand Marketing',
    roles: ['Brand Manager', 'Brand Strategist', 'Brand Activation Manager', 'Director of Brand Strategy', 'Brand marketing manager', 'Director of brand marketing'],
  },
  {
    category: 'Coaching Roles',
    roles: ['Corporate Trainer', 'Event Management', 'SEO Specialist', 'Digital Marketing Trainer', 'Creative Design Head', 'Website Specialist - Trainings', 'Event campaign Manager'],
  },
  {
    category: 'Content Marketing',
    roles: ['Content Manager', 'Content Strategist', 'Content Marketing Manager', 'Content director', 'Content marketing producer', 'Content specialist', 'Content writer'],
  },
  {
    category: 'Social Media Marketing',
    roles: ['Social Media Manager', 'Community Manager', 'Digital Media Director', 'Growth Hacker', 'Digital communications professional', 'Director of social media', 'Director of social media marketing', 'Engagement coordinator', 'Engagement manager', 'Social media editor', 'Social media strategist'],
  },
  {
    category: 'Digital Marketing',
    roles: ['Digital Marketing Manager', 'SEO Manager', 'SEM Specialist', 'Paid Search Manager', 'Web Marketing Manager', 'Digital strategist', 'Director of digital marketing', 'Director of web marketing', 'Director of SEO operations', 'Internet marketing specialist', 'Pay-per-click manager', 'SEM manager', 'SEO specialist', 'Web marketing specialist'],
  },
  {
    category: 'Techno-Management',
    roles: ['Business Development Manager', 'Chief Operation Officer – Marketing', 'Business Development Specialist', 'Senior Business Development Executive', 'Business Development Specialist (Many Years Experience in B2B Sales)', 'Business Development Associate', 'Business Development Representative'],
  },
  {
    category: 'Email Marketing',
    roles: ['Campaign manager', 'Demand generation manager', 'Director of email marketing', 'Ecommerce content specialist', 'Ecommerce marketing analyst', 'Ecommerce marketing director', 'Ecommerce marketing manager', 'Email developer', 'Email marketer', 'Email marketing strategist', 'Email operations manager'],
  },
  {
    category: 'Marketing Research',
    roles: ['Director of market research', 'Insights analyst', 'Market research analyst', 'Market research interviewer', 'Marketing data analyst', 'Product research analyst', 'Qualitative research assistant'],
  },
  {
    category: 'Product Marketing',
    roles: ['Digital product marketing manager', 'Director of product marketing', 'Junior product marketing associate', 'Portfolio marketing manager', 'Product marketing manager', 'Senior product marketing manager', 'Solutions marketing manager'],
  },
  {
    category: 'Video Shoot and Editor',
    roles: ['YouTube Marketer', 'Video Editing Team', 'Video Shoot specialist', 'Video Editing Manager', 'Video editing specialist', 'Video Marketing'],
  },
  {
    category: 'Marketing Communications',
    roles: ['Analyst relations manager', 'Analyst relations specialist', 'Corporate communications assistant', 'Corporate communications manager', 'Director of communications', 'Marketing communications manager', 'Marketing communications specialist', 'Media relations coordinator', 'Public relations manager', 'Publicity assistant', 'Public relations intern'],
  },
];

const skillCategories = [
  {
    title: 'Organizational Skills',
    color: 'bg-yellow-50',
    borderColor: 'border-yellow-400',
    iconColor: 'text-yellow-500',
    skills: [
      'Excellent Interpersonal skills',
      'Verbal and written communication',
      'Client rapport / reviews / feedbacks',
      'Corporate Etiquette',
      'Dressology & Decoding Body Language',
    ],
  },
  {
    title: 'Basic Skills',
    color: 'bg-blue-50',
    borderColor: 'border-blue-400',
    iconColor: 'text-blue-600',
    skills: [
      'Excellent Word, Excel and PPT presentation Skills',
      'Stunning Presentations',
      'Detailed report generation',
    ],
  },
  {
    title: 'Technical Skills',
    color: 'bg-green-50',
    borderColor: 'border-green-400',
    iconColor: 'text-green-600',
    skills: [
      'Technical skills to build a Digital Reputation of the Brand',
      'A to Z of Digital Marketing',
      'Customer Relationship Management software or ERP',
      'Technical skills depends on the area of work and requirement.',
    ],
  },
];

const pricingIncludes = [
  '12 Month Experience Letter',
  '100% Business Assistance',
  'Digital Library',
  'Project Management Tool',
  '100% Placement Assistance',
];

const faqs = [
  {
    q: 'Can I change the course after taking admission?',
    a: 'No, provision of course change is not there under any circumstances once admission is taken.',
  },
  {
    q: 'Is the fee refundable?',
    a: 'Fee is non-refundable under any circumstances.',
  },
  {
    q: 'Is the fee transferable?',
    a: 'Fee is non-transferrable under any circumstances.',
  },
  {
    q: 'Can I get certificate without completing the course?',
    a: 'No. Completion certificate requires completing the course.',
  },
  {
    q: 'What is the difference between ONLINE and OFFLINE?',
    a: 'Contents, certification, and fees are exactly the same. Slight relaxation given for duration in online.',
  },
];

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
      >
        <span className="font-bold text-gray-900 text-[0.95rem] pr-4">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#fbc02d] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40' : 'max-h-0'}`}
      >
        <p className="px-6 pb-5 text-gray-600 font-medium text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </p>
      </div>
    </div>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const BimHubBusinessManagement = () => (
  <div className="bg-white min-h-screen flex flex-col">

    {/* ── Hero ── */}
    <section className="relative w-full h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{ backgroundImage: `url('/ProjectManagementConsultancy.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <span className="inline-block bg-[#fbc02d] text-gray-900 text-xs font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6 shadow-md">
          Econstruct — Business Program
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] max-w-4xl">
          Master Study In<br />
          <span className="text-[#fbc02d]">Business Management</span>
        </h1>
        <p className="mt-6 text-gray-200 text-lg md:text-2xl font-extrabold tracking-wide drop-shadow-lg max-w-3xl leading-relaxed">
          12-Month ON-JOB Learning · 100% Job Guarantee · New Batch: 15th April 2026
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/919036744017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle size={18} /> Enrol Now
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

    {/* ── Quick Facts Banner ── */}
    <section className="bg-[#fbc02d] py-6 px-4">
      <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { label: 'Duration', value: '12 Months' },
          { label: 'Mode', value: 'Online & Offline' },
          { label: 'New Batch', value: '15th April 2026' },
          { label: 'Seats', value: '10–15 Per Batch' },
        ].map((f) => (
          <div key={f.label}>
            <p className="text-gray-900 font-black text-xl md:text-2xl leading-tight">{f.value}</p>
            <p className="text-gray-800 text-xs font-bold uppercase tracking-widest mt-0.5">{f.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Why Join ── */}
    <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Reasons to Enrol</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Why Join This Program?</h2>
          <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyJoin.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:-translate-y-2 transition-all duration-300 bg-white p-8 flex flex-col items-center text-center gap-4"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-lg font-black text-gray-900">{item.title}</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── You Will Be Working On ── */}
    <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Hands-On Focus</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">You Will Be Working On</h2>
          <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workingOn.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 hover:-translate-y-2 transition-all duration-300 bg-white p-10 flex flex-col items-center text-center gap-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#fbc02d]/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#fbc02d]" />
                </div>
                <h3 className="text-xl font-black text-gray-900">{item.title}</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* ── Job Titles ── */}
    <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Career Outcomes</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Job Titles You Can Target</h2>
          <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {jobCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 bg-white overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-[#fbc02d] px-5 py-3">
                <p className="font-black text-gray-900 text-sm uppercase tracking-wide">{cat.category}</p>
              </div>
              <ul className="px-5 py-4 space-y-2">
                {cat.roles.map((role) => (
                  <li key={role} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#fbc02d] shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── What Will You Learn ── */}
    <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Curriculum</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">What Will You Learn?</h2>
          <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t-4 ${cat.borderColor} border border-gray-100 bg-white p-8 hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-lg font-black text-gray-900 mb-5">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${cat.iconColor}`} />
                    <span className="text-gray-700 font-medium text-sm leading-snug">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Other Aspects */}
        <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 rounded-2xl p-8 md:p-12">
          <h3 className="text-xl font-black text-white mb-6 text-center">Other Aspects in Career</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              'How to position yourself in the Competition as an Individual or as a Company',
              'How to enter in blue ocean from Red ocean and cut the competition',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 bg-white/5 rounded-xl p-5 border border-white/10">
                <BarChart2 className="w-5 h-5 text-[#fbc02d] shrink-0 mt-0.5" />
                <p className="text-white font-medium text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── Pricing ── */}
    <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Investment</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Course Fee</h2>
          <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
            {/* Price header */}
            <div className="bg-[#fbc02d] px-8 py-8 text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-800 mb-2">Online &amp; Offline — Same Fee</p>
              <p className="text-5xl font-black text-gray-900 leading-tight">₹2,10,000</p>
              <p className="text-gray-800 font-bold mt-1 text-sm">(₹1,77,967 + 18% GST)</p>
              <div className="mt-4 pt-4 border-t border-yellow-400/50">
                <p className="text-gray-900 font-bold text-sm">International: AED 9,000 &nbsp;|&nbsp; US$ 2,510</p>
              </div>
            </div>
            {/* Includes */}
            <div className="bg-white px-8 py-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 mb-5">What's Included</p>
              <ul className="space-y-3">
                {pricingIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-800 font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-amber-800 font-bold text-xs leading-relaxed">
                  ⚠️ Only 10–15 seats per batch. Admission closes 45–60 days before batch start. First come, first served.
                </p>
              </div>
              <a
                href="https://wa.me/919036744017"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle size={18} /> Reserve Your Seat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Online Career Counselling ── */}
    <section className="bg-slate-50 py-20 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Free Session</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Online Career Counselling</h2>
          <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
        </div>
        <div className="max-w-xl mx-auto">
          <div className="rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 bg-white p-8 flex flex-col items-center text-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
              <Video className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <p className="text-gray-900 font-black text-lg mb-1">Join via Zoom</p>
              <p className="text-gray-600 font-medium text-sm">Mon – Fri &nbsp;·&nbsp; 4 PM to 7 PM</p>
            </div>
            <div className="w-full bg-slate-50 rounded-xl p-5 space-y-3 text-left">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Zoom ID</span>
                <span className="font-black text-gray-900 text-sm">7259921111</span>
              </div>
              <div className="border-t border-gray-200" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-gray-500">Password</span>
                <span className="font-black text-gray-900 text-sm">Econ@1111 <span className="text-gray-400 font-normal">(E capital)</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section className="bg-white py-20 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">FAQ</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-[#fbc02d] mx-auto rounded-full mt-4" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
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
          Ready to Master Business Management?
        </h2>
        <p className="text-gray-800 text-lg font-medium mb-8 leading-relaxed">
          Secure your seat in the next batch — only 10–15 spots available. Reach out on WhatsApp to get started.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/919036744017"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle size={18} /> +91 90367 44017
          </a>
        </div>
      </div>
    </section>

  </div>
);

export default BimHubBusinessManagement;
