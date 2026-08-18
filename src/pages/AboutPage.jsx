import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  CheckCircle, Award, Users, Building2, TrendingUp,
  Target, Eye, Heart, Linkedin, ArrowRight, Star, Shield, Zap,
  PenTool, Rocket, GraduationCap, BookOpen, ChevronLeft, ChevronRight, Maximize2, X, Newspaper, Quote,
  ExternalLink, Youtube, Trophy, Play
} from 'lucide-react';
import Logo from '../assets/logo.webp';
import TextBG from '../assets/textbg.png';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import planning from '../assets/planning.jpg';
import design from '../assets/design.webp';
import development from '../assets/development.jpg';
import ctaBG from '../assets/ctaBG.avif';
import founderAbout from '../assets/founder_about.webp';
import ceoCover from '../assets/uploads/ceo-india-magazine-cover.jpeg';
import ceoProfile from '../assets/uploads/ceo-india-engineering-beyond-structures.jpeg';
import ceoMentorship from '../assets/uploads/ceo-india-building-engineers.jpeg';
import ceoQuote from '../assets/uploads/ceo-india-founder-quote.jpeg';
import ceoImpact from '../assets/uploads/ceo-india-recognition-impact.jpeg';
import SectionHeading from '../components/SectionHeading';
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

const HeroSection = () => {
  const { data } = useAdmin();
  const heroImage = data?.aboutContent?.heroImage || '/training/32.jpeg';

  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="E-Construct About"
        className="absolute inset-0 w-full h-full object-cover scale-105" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
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
};

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
          <SectionHeading title="Mission, Vision & Values" />
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
          <SectionHeading title="Our Process" />
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
      className="group relative bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Image Container with Inward Hover Drawer */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" loading="lazy" decoding="async" />

        {/* Inward Expanding Drawer on Hover */}
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-3 pt-6 text-white transform transition-all duration-300 ease-out z-10 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
          }`}
        >
          <p className="text-[10px] sm:text-[10.5px] text-gray-200 leading-relaxed line-clamp-3 mb-2">
            {member.bio}
          </p>
          <div className="flex justify-between items-center pt-1.5 border-t border-white/15">
            <a
              href={member.linkedin || 'https://www.linkedin.com/company/econstruct-design-and-build-pvt-ltd/'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 bg-white/20 rounded-full hover:bg-yellow-500 hover:text-black transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={11} className="text-white hover:text-black" />
            </a>
            <span className="text-[8px] font-bold text-gray-300 uppercase tracking-wider">
              E-Construct
            </span>
          </div>
        </div>
      </div>

      {/* Static Info Area (Card outer height remains fixed) */}
      <div className="p-2.5 sm:p-3 bg-white">
        <h3 className="text-[13px] sm:text-[14px] font-bold text-gray-900 tracking-tight leading-snug">
          {member.name}
        </h3>
        <p className="text-yellow-600 text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider mt-0.5">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

const TeamSection = () => {
  const { data } = useAdmin();
  const team = data.team;
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
          <div>
            <SectionLabel text="Our Team" />
            <SectionHeading title="Meet Our Founders" center={false} />
          </div>
          <p className="text-gray-500 text-xs sm:text-sm max-w-sm leading-relaxed md:text-right">
            Leading the transformation of construction with over two decades of engineering expertise and strategic vision.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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
          <SectionHeading title="Complete Engineering Solutions Under One Roof" />
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
        <SectionHeading title="Ready to Build Something Amazing?" light />
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
              src={founderAbout}
              alt="Mr. Sandeep Pingale - Founder & MD"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" loading="lazy" decoding="async" />
            <a
              href="https://youtu.be/hXvEnSxk0IY"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-6 right-6 bg-red-600/90 hover:bg-red-600 text-white px-4 py-2 rounded-full backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-2 text-xs font-bold transition-all hover:scale-105 z-20 group"
              title="Watch Founder Story (25+ Yrs Experience)"
            >
              <Youtube size={16} className="text-white group-hover:scale-110 transition-transform" />
              <span>Watch Video (25+ Yrs)</span>
            </a>
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
          <SectionHeading title="Building the Future With Integrity" center={false} />
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
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold uppercase tracking-wider text-sm rounded-xl transition-all duration-300 shadow-md"
            >
              Get in Touch <ArrowRight size={16} />
            </a>
            <a
              href="https://youtu.be/hXvEnSxk0IY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold uppercase tracking-wider text-sm rounded-xl transition-all duration-300 shadow-md group"
            >
              <Youtube size={18} className="group-hover:scale-110 transition-transform" /> Founder Video (25+ Yrs) <ExternalLink size={14} />
            </a>
          </div>
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
          <SectionHeading title="Our Certifications" />
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
          <SectionHeading title="Our Vision" />
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

// ─── CEO INDIA MAGAZINE FEATURE SECTION ─────────────────────────────────────

const CEO_INDIA_SLIDES = [
  {
    id: '01',
    tag: 'CEO INDIA COVER STORY',
    title: 'Featured in CEO India Magazine',
    subtitle: 'The Engineer Who Built More Than Skylines',
    desc: "National media feature showcasing Sandeep Pingale's inspiring journey from humble beginnings to leading one of India's top civil design & build consultancies.",
    image: ceoCover,
    badge: 'Cover Story'
  },
  {
    id: '02',
    tag: 'FOUNDER PROFILE',
    title: 'Engineering Beyond Structures',
    subtitle: '20+ Years of International Excellence',
    desc: 'Over two decades of structural engineering, international high-rise consultancy (including G+81 towers in Dubai), and raising industry standards.',
    image: ceoProfile,
    badge: 'Leadership'
  },
  {
    id: '03',
    tag: 'MENTORSHIP & EDUCATION',
    title: 'Building Engineers, Not Just Buildings',
    subtitle: 'Bridging Academia & Industry',
    desc: 'Mentoring thousands of civil engineers, delivering hundreds of technical workshops, and building hands-on programs for construction professionals.',
    image: ceoMentorship,
    badge: 'Mentorship'
  },
  {
    id: '04',
    tag: "FOUNDER'S KEYNOTE",
    title: 'Developing Infrastructure & Mindsets',
    subtitle: 'Visionary Engineering Philosophy',
    desc: '"The future of construction depends as much on developing engineers as it does on developing infrastructure." — Sandeep Pingale',
    image: ceoQuote,
    badge: 'Keynote Quote'
  },
  {
    id: '05',
    tag: 'NATIONAL RECOGNITION',
    title: 'Recognition Built Through Excellence',
    subtitle: 'Celebrating Cohorts & Legacy',
    desc: 'Decades of structural leadership, quietly raising the standard of the civil engineering profession in India and abroad.',
    image: ceoImpact,
    badge: 'Impact'
  }
];

const CeoIndiaFeatureSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentSlide = CEO_INDIA_SLIDES[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % CEO_INDIA_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + CEO_INDIA_SLIDES.length) % CEO_INDIA_SLIDES.length);
  };

  // Keyboard shortcuts & body scroll locking for expanded modal
  useEffect(() => {
    if (!lightboxOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionLabel text="Press & Media Recognition" />
          <SectionHeading title="Featured in CEO India Magazine" />
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mt-6" />
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            A 5-part feature story celebrating Sandeep Pingale's structural engineering mastery, mentorship of civil engineers, and industry impact.
          </p>
        </div>

        {/* Main Interactive Viewer Showcase */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Image Viewer */}
            <div className="lg:col-span-7 relative group">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/5] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-950 cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-contain p-2 bg-gray-950 transition-transform duration-500 group-hover:scale-102"
                />

                <div className="absolute top-4 left-4 bg-yellow-500 text-slate-900 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2">
                  <span>{currentSlide.badge}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>{activeIdx + 1} / {CEO_INDIA_SLIDES.length}</span>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxOpen(true); }}
                  className="absolute top-4 right-4 bg-slate-900/80 hover:bg-yellow-500 hover:text-slate-900 text-white p-2.5 rounded-full backdrop-blur-md border border-white/20 transition-colors shadow-md"
                  title="Expand to Fullscreen"
                >
                  <Maximize2 size={16} />
                </button>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6">
                  <span className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-1 block">
                    {currentSlide.tag}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {currentSlide.title}
                  </h3>
                </div>
              </motion.div>

              {/* Prev / Next Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-yellow-500 text-slate-900 p-3 rounded-full border border-gray-200 shadow-lg transition-all hover:scale-110 z-20"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-yellow-500 text-slate-900 p-3 rounded-full border border-gray-200 shadow-lg transition-all hover:scale-110 z-20"
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Right Column: Slide Details & Thumbnails */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <motion.div
                key={`text-${currentSlide.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8"
              >
                <div className="flex items-center gap-2 text-yellow-600 font-serif italic text-sm mb-3">
                  <Quote size={18} />
                  <span>Story Spotlight</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {currentSlide.subtitle}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {currentSlide.desc}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
                  >
                    <Maximize2 size={14} /> Fullscreen View
                  </button>
                  <a
                    href="https://ceoindiamagazine.com/the-engineer-who-built-more-than-skylines-sandeep-pingles-inspiring-story/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
                  >
                    <Newspaper size={14} /> Read Article <ExternalLink size={12} />
                  </a>
                </div>
              </motion.div>

              {/* Thumbnails Row */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                    Select Slide (0{activeIdx + 1} / 0{CEO_INDIA_SLIDES.length})
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  {CEO_INDIA_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`relative aspect-[3/4] rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeIdx === idx
                          ? 'border-yellow-500 scale-105 shadow-md shadow-yellow-500/20 ring-2 ring-yellow-400/50'
                          : 'border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-400'
                        }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover bg-gray-950"
                      />
                      <div className="absolute inset-0 bg-slate-950/20" />
                      <span className="absolute bottom-1 left-1 bg-slate-900/80 text-[10px] font-bold text-white px-1.5 rounded">
                        0{idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Media & National Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1: CEO India Article */}
          <motion.a
            href="https://ceoindiamagazine.com/the-engineer-who-built-more-than-skylines-sandeep-pingles-inspiring-story/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                  <Newspaper className="text-yellow-600 group-hover:text-white h-6 w-6 transition-colors duration-300" />
                </div>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-yellow-600 transition-colors" />
              </div>
              <span className="text-yellow-600 font-bold uppercase tracking-wider text-xs block mb-1">
                Featured Article
              </span>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                CEO India Magazine Cover
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                "The Engineer Who Built More Than Skylines: Sandeep Pingale's Inspiring Story"
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-yellow-600 uppercase tracking-wider transition-colors">
              Read Official Story <ExternalLink size={14} />
            </span>
          </motion.a>

          {/* Card 2: Gold Award */}
          <motion.a
            href="https://youtube.com/shorts/tGGUSuLAmk8?si=fbgA4D7HpW9KMIZw"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                  <Trophy className="text-amber-600 group-hover:text-white h-6 w-6 transition-colors duration-300" />
                </div>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-amber-600 transition-colors" />
              </div>
              <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-1">
                National Honor
              </span>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Gold Award — Best Structural Consultant
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Awarded at the Indian Infrastructure & National Architecture (IINA) Forum.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-amber-600 uppercase tracking-wider transition-colors">
              Watch Award Reel <Play size={14} className="fill-current" />
            </span>
          </motion.a>

          {/* Card 3: Founder Video */}
          <motion.a
            href="https://youtu.be/hXvEnSxk0IY"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                  <Youtube className="text-red-600 group-hover:text-white h-6 w-6 transition-colors duration-300" />
                </div>
                <ExternalLink size={18} className="text-gray-400 group-hover:text-red-600 transition-colors" />
              </div>
              <span className="text-red-600 font-bold uppercase tracking-wider text-xs block mb-1">
                Founder Story
              </span>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                About Our Founder (25+ Years)
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Structural leadership, BIM engineering consultancy, and mentoring 1,000+ engineers.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-red-600 uppercase tracking-wider transition-colors">
              Watch Full Video <Play size={14} className="fill-current" />
            </span>
          </motion.a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none overflow-hidden"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Top Bar Header */}
          <div
            className="flex items-center justify-between max-w-6xl mx-auto w-full z-10 py-2 border-b border-slate-800/80 mb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="bg-yellow-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                CEO India Magazine
              </span>
              <span className="text-gray-400 text-xs font-mono font-bold hidden sm:inline">
                Slide 0{activeIdx + 1} of 0{CEO_INDIA_SLIDES.length}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-xs hidden md:inline">Press Esc to close</span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105"
                aria-label="Close modal"
              >
                <X size={18} /> Close
              </button>
            </div>
          </div>

          {/* Center Display with Prev/Next Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-auto py-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-yellow-500 hover:text-slate-950 text-white p-3 sm:p-4 rounded-full border border-slate-700/80 shadow-2xl transition-all hover:scale-110 z-30"
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Image */}
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-h-[72vh] w-full flex items-center justify-center"
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="max-h-[72vh] max-w-full object-contain rounded-2xl shadow-2xl border border-slate-800 bg-slate-950"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 bg-slate-900/90 hover:bg-yellow-500 hover:text-slate-950 text-white p-3 sm:p-4 rounded-full border border-slate-700/80 shadow-2xl transition-all hover:scale-110 z-30"
              title="Next Slide (Right Arrow)"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Footer Bar inside Modal */}
          <div
            className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 z-10 pt-2 border-t border-slate-800/80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-base sm:text-lg">
                {currentSlide.title}
              </h4>
              <p className="text-yellow-400 text-xs font-semibold">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Thumbnail Selector inside Modal */}
            <div className="flex items-center gap-2">
              {CEO_INDIA_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-9 h-12 rounded-lg overflow-hidden border-2 transition-all ${activeIdx === idx
                      ? 'border-yellow-400 scale-110 shadow-md shadow-yellow-500/30'
                      : 'border-slate-800 opacity-50 hover:opacity-100'
                    }`}
                  title={slide.title}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
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
    <CeoIndiaFeatureSection />
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
