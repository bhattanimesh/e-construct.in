import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  CheckCircle, Award, Users, Building2, TrendingUp,
  Target, Eye, Heart, Linkedin, ArrowRight, Star, Shield, Zap,
  PenTool, Rocket, GraduationCap, BookOpen
} from 'lucide-react';
import Logo from '../assets/logo.webp';
import TextBG from '../assets/textbg.png';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import planning from '../assets/planning.jpg';
import design from '../assets/design.webp';
import development from '../assets/development.jpg';
import ctaBG from '../assets/ctaBG.avif';
import { useAdmin } from '../context/AdminContext';

// ─── ICON MAPS ────────────────────────────────────────────────────────────────
const VALUE_ICONS = [Target, Eye, Heart];
const WHY_ICONS = [Shield, Zap, CheckCircle, Target, TrendingUp, Star];
const VISION_ICONS = [PenTool, Rocket, GraduationCap, BookOpen];
const PROCESS_IMAGES = [planning, design, development];

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

const SectionLabel = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-4"
  >
    <span className="w-10 h-[2px] bg-yellow-500" />
    <span className="text-yellow-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">{text}</span>
  </motion.div>
);

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
    <img
      src={img1}
      alt="E-Construct About"
      className="absolute inset-0 w-full h-full object-cover scale-105" loading="lazy" decoding="async" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[2px] bg-yellow-500" />
          <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs">Who We Are</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight">
          About <br />
          <span className="accent-text italic">E-Construct</span>
        </h1>
        <p className="mt-4 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
          India's premier civil engineering consultancy — building trust, one project at a time.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── INTRO SECTION ────────────────────────────────────────────────────────────

const services = [
  'Structural Design & Audit',
  'Project Management (PMC)',
  'Corporate Technical Training',
  'Quality Assurance Solutions',
  'Innovative Construction Tech',
  'On-Time Project Delivery',
];

const IntroSection = () => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yImg1 = useTransform(smooth, [0, 1], isMobile ? [0, 0] : [-30, 30]);
  const yImg2 = useTransform(smooth, [0, 1], isMobile ? [0, 0] : [40, -40]);
  const yBadge = useTransform(smooth, [0, 1], isMobile ? [0, 0] : [-50, 50]);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Images */}
          <div className="w-full lg:w-1/2 relative h-[420px] sm:h-[520px]">
            <motion.div style={{ y: yImg1 }} className="absolute top-0 left-0 w-[62%] h-[280px] sm:h-[340px] overflow-hidden rounded-2xl z-0">
              <img src={img1} alt="E-Construct site" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div style={{ y: yImg2 }} className="absolute bottom-0 right-0 w-[72%] h-[300px] sm:h-[360px] overflow-hidden rounded-2xl z-10">
              <img src={img2} alt="E-Construct team" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div
              style={{ y: yBadge }}
              className="absolute top-8 right-4 md:right-8 bg-white p-4 rounded-2xl border border-gray-200 z-20 shadow-lg"
            >
              <img src={Logo} alt="Logo" className="w-20 h-12 object-contain" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div
              style={{
                y: yBadge,
                backgroundImage: `url(${TextBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="absolute bottom-8 left-0 md:left-4 z-20 p-6 md:p-8 flex flex-col items-center justify-center text-black"
            >
              <span className="text-4xl md:text-5xl font-extrabold leading-none">25+</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center mt-1">
                Years of <br /> Excellence
              </span>
            </motion.div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-6">
            <SectionLabel text="Our Story" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight"
            >
              EConstruct Design and <br className="hidden md:block" /> <span className="accent-text italic">Building Pvt. Ltd.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed text-base md:text-lg"
            >
              ECONSTRUCT is a premier Indian consultancy and contracting firm dedicated to redefining residential and commercial spaces. With over <strong>25+ years of experience</strong> in Civil, Architectural, Structural, and Contract Management services, we have built strong relationships with over <strong>500 happy clients</strong> and successfully completed more than <strong>650 projects</strong>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 leading-relaxed text-base md:text-lg"
            >
              Operating with global benchmarks of transparency, reliability, and sustainability, we promise to give you the best in the industry — whether you want to build a small house or a large apartment complex.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-0.5 group-hover:bg-black transition-colors duration-300">
                    <CheckCircle className="text-white h-4 w-4" />
                  </div>
                  <span className="text-gray-800 font-semibold text-sm">{s}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── STATS SECTION ────────────────────────────────────────────────────────────

const StatsSection = () => {
  const { data } = useAdmin();
  const s = data.companyStats;
  const statsArr = [
    { value: s.yearsOfExperience, label: 'Years of Experience', icon: Award },
    { value: s.happyClients, label: 'Happy Clients', icon: Users },
    { value: s.projectsDelivered, label: 'Projects Completed', icon: Building2 },
    { value: s.certification, label: 'Certification', icon: TrendingUp },
  ];
  return (
  <section className="py-16 bg-slate-900">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {statsArr.map(({ value, label, icon: Icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
              <Icon className="text-yellow-400 h-6 w-6" />
            </div>
            <span className="text-4xl md:text-5xl font-black text-white">{value}</span>
            <span className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

// ─── MISSION / VISION / VALUES ────────────────────────────────────────────────

const ValuesSection = () => {
  const { data } = useAdmin();
  const ap = data.aboutPageContent;
  const valuesArr = [
    { icon: VALUE_ICONS[0], title: 'Our Mission', desc: ap.mission },
    { icon: VALUE_ICONS[1], title: 'Our Vision', desc: ap.vision },
    { icon: VALUE_ICONS[2], title: 'Our Values', desc: ap.values },
  ];
  return (
  <section className="py-20 md:py-28 bg-gray-50">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-16">
        <SectionLabel text="What Drives Us" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
          Mission, Vision & <span className="accent-text italic">Values</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valuesArr.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }} viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
              <Icon className="text-yellow-600 group-hover:text-white h-6 w-6 transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

// ─── PROCESS SECTION ──────────────────────────────────────────────────────────

const processSteps = null; // replaced by context

const ProcessSection = () => {
  const { data } = useAdmin();
  const steps = data.aboutPageContent.processSteps;
  return (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-16">
        <SectionLabel text="How We Work" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
          Our <span className="accent-text italic">Process</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-6" />
      </div>
      <div className="space-y-16 md:space-y-24">
        {steps.map(({ step, title, desc }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl aspect-video">
              <img src={PROCESS_IMAGES[i] || PROCESS_IMAGES[0]} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <span className="text-7xl md:text-8xl font-black text-gray-100 leading-none select-none">{step}</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 -mt-4">{title}</h3>
              <div className="w-12 h-1 bg-yellow-500 rounded-full" />
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

// ─── TEAM SECTION ─────────────────────────────────────────────────────────────

const TeamCard = ({ member, index }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" decoding="async" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
          <h3 className="text-lg font-bold text-white">{member.name}</h3>
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <p className="text-white/70 text-sm mt-3 leading-relaxed">{member.bio}</p>
            <div className="mt-4 flex items-center gap-3">
              <a href={member.linkedin || 'https://www.linkedin.com/company/econstruct'} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 hover:bg-yellow-500 rounded-full transition-colors duration-300">
                <Linkedin size={14} className="text-white" />
              </a>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">E-Construct</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const { data } = useAdmin();
  const team = data.team;
  return (
  <section className="py-20 md:py-28 bg-gray-50">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <SectionLabel text="Our Team" />
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
            Meet Our <br /><span className="accent-text italic">Founders</span>
          </motion.h2>
        </div>
        <p className="text-gray-500 text-sm max-w-sm leading-relaxed md:text-right">
          Leading the transformation of construction with over two decades of engineering expertise and strategic vision.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <TeamCard key={member.id || i} member={{ ...member, role: member.position }} index={i} />
        ))}
      </div>
    </div>
  </section>
  );
};

// ─── WHY US SECTION ───────────────────────────────────────────────────────────

const WhyUsSection = () => {
  const { data } = useAdmin();
  const whyUs = data.aboutPageContent.whyUsItems;
  return (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-16">
        <SectionLabel text="Why Choose Us" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
          Complete Construction Solutions <br className="hidden md:block" /> <span className="accent-text italic">Under One Roof</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-6" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyUs.map(({ title, desc }, i) => {
          const Icon = WHY_ICONS[i % WHY_ICONS.length];
          return (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }} viewport={{ once: true }}
            className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-100 flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
              <Icon className="text-yellow-600 group-hover:text-white h-5 w-5 transition-colors duration-300" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base mb-1">{title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          </motion.div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

// ─── CTA SECTION ──────────────────────────────────────────────────────────────

const CTASection = () => (
  <section className="relative py-24 overflow-hidden">
    <img src={ctaBG} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="w-10 h-[2px] bg-yellow-500" />
          <span className="text-yellow-400 font-bold uppercase tracking-[0.2em] text-xs">Get Started</span>
          <span className="w-10 h-[2px] bg-yellow-500" />
        </div>
        <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight tracking-tight">
          Ready to Build Something <br className="hidden md:block" />
          <span className="accent-text italic">Amazing?</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Whether it's a dream home or a large commercial complex, our team is ready to bring your vision to life with precision and care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Contact Us <ArrowRight size={16} />
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            Our Services
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── FOUNDER NARRATIVE SECTION ───────────────────────────────────────────────

const FounderNarrativeSection = () => (
  <section className="py-20 md:py-28 bg-white overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Founder image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[500px] aspect-[3/4] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/founder_about.webp"
              alt="Company Founder"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" decoding="async" />
            <div className="absolute inset-0 border-[10px] border-white/20 rounded-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="block text-yellow-400 font-bold uppercase tracking-widest text-xs mb-1">Visionary</span>
              <span className="block text-white font-medium text-2xl font-serif italic">Our Founder</span>
            </div>
          </div>
          <div className="absolute -z-10 top-10 -left-10 w-full max-w-[500px] h-full border-2 border-yellow-400/50 rounded-3xl hidden md:block" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          <SectionLabel text="Our Story" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 leading-tight tracking-tight mb-8"
          >
            Building the Future <br />
            <span className="accent-text italic">With Integrity</span>
          </motion.h2>
          <div className="space-y-5 text-gray-600 leading-relaxed text-base md:text-lg">
            <p>
              <strong>ECONSTRUCT Design & Build Pvt Ltd</strong> is a leading consultancy and contracting company in India that has executed construction work for some of the most significant projects in the country. We continue to alter the structural landscape through several other prestigious projects in the residential, commercial, and institutional space.
            </p>
            <p>
              We believe in exceeding clients' expectations by operating at par with global benchmarks for transparency, reliability, and integrity. A commitment to sustainable development, safety, and environmental protection forms the genesis of our culture.
            </p>
            <p>
              Our clients value our allegiance to quality, timely deliveries, superior customer service, and the experience of engaging in business with a highly qualified and experienced management. After creating our mark on the Mumbai landscape, we expanded to Bangalore, Tumkur, and Mysore.
            </p>
          </div>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold uppercase tracking-wider text-sm rounded-xl transition-all duration-300 shadow-md"
          >
            Get in Touch <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

// ─── CERTIFICATIONS SECTION ───────────────────────────────────────────────────

const CertificationsSection = () => {
  const { data } = useAdmin();
  const certifications = data.aboutPageContent.certifications;
  return (
  <section className="py-20 md:py-28 bg-gray-50">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-14">
        <SectionLabel text="Accreditations" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
          Our <span className="accent-text italic">Certifications</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div key={cert.id || i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white border border-gray-100 p-8 text-center rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-yellow-400/30 transition-all duration-300 group flex flex-col items-center">
            <div className="w-40 h-40 mb-6 bg-gray-50 rounded-xl shadow-inner p-4 flex items-center justify-center">
              <img src={cert.img} alt={cert.label} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-yellow-600 transition-colors duration-300">{cert.label}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

// ─── VISION SECTION ───────────────────────────────────────────────────────────

const VisionSection = () => {
  const { data } = useAdmin();
  const visionCards = data.aboutPageContent.visionCards;
  return (
  <section className="py-20 md:py-28 bg-white">
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="text-center mb-14">
        <SectionLabel text="Where We're Headed" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
          Our <span className="accent-text italic">Vision</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-6" />
        <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
          To be a world-class construction company committed to total customer satisfaction, by building on our strengths.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {visionCards.map(({ title, desc }, i) => {
          const Icon = VISION_ICONS[i % VISION_ICONS.length];
          return (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 opacity-5 rounded-full blur-[40px] transform translate-x-10 -translate-y-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700/50 group-hover:scale-110 group-hover:border-yellow-400/50 transition-all duration-300 relative shadow-sm">
              <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <Icon className="w-8 h-8 text-white relative z-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-4">{title}</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{desc}</p>
          </motion.div>
          );
        })}
      </div>
    </div>
  </section>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const AboutPage = () => (
  <div className="min-h-screen bg-white">
    <HeroSection />
    <IntroSection />
    <StatsSection />
    <FounderNarrativeSection />
    <CertificationsSection />
    <VisionSection />
    <ValuesSection />
    <ProcessSection />
    <TeamSection />
    <WhyUsSection />
    <CTASection />
  </div>
);

export default AboutPage;
