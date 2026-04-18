import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, ArrowRight, ExternalLink, Building2, Award, Users, TrendingUp } from 'lucide-react';

// Assets
import KALPATARUParkRiviera from '../assets/KALPATARUParkRiviera.webp';
import SonaliResidential from '../assets/SonaliResidential.webp';
import GoregaonMulundLinkRoad from '../assets/GoregaonMulundLinkRoad.webp';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import ctaBG from '../assets/ctaBG.avif';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: 'KALPATARU Park Riviera',
    category: 'Residential',
    location: 'Panvel, Navi Mumbai',
    year: '2023',
    description: 'A premium residential township featuring modern amenities, sustainable design, and world-class BIM coordination.',
    image: KALPATARUParkRiviera,
  },
  {
    id: 2,
    title: 'Sonali Residential',
    category: 'Residential',
    location: 'Pune, Maharashtra',
    year: '2022',
    description: 'Contemporary residential complex with integrated structural design and architectural consultancy services.',
    image: SonaliResidential,
  },
  {
    id: 3,
    title: 'Goregaon Mulund Link Road (GMLR)',
    category: 'Infrastructure',
    location: 'Mumbai, India',
    year: '2024',
    description: 'Major urban infrastructure project connecting key corridors with advanced project management and BIM implementation.',
    image: GoregaonMulundLinkRoad,
  },
  {
    id: 4,
    title: 'Luxury Villa — Lonavala',
    category: 'Residential',
    location: 'Lonavala, Maharashtra',
    year: '2023',
    description: 'End-to-end design and build of a luxury hillside villa with bespoke interiors and structural engineering.',
    image: img2,
  },
  {
    id: 5,
    title: 'Commercial Complex — Pune',
    category: 'Commercial',
    location: 'Pune, Maharashtra',
    year: '2022',
    description: 'Multi-storey commercial development with full BIM coordination, clash detection, and construction management.',
    image: img1,
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Industrial'];

const stats = [
  { value: '650+', label: 'Projects Completed', icon: Building2 },
  { value: '25+', label: 'Years of Experience', icon: Award },
  { value: '500+', label: 'Happy Clients', icon: Users },
  { value: '100%', label: 'Quality Commitment', icon: TrendingUp },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
    <img
      src={GoregaonMulundLinkRoad}
      alt="E-Construct Projects"
      className="absolute inset-0 w-full h-full object-cover scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-16 w-full">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[2px] bg-amber-500" />
          <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs">Our Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight">
          Our <br />
          <span className="accent-text italic">Projects</span>
        </h1>
        <p className="mt-4 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
          Delivering excellence across residential, commercial, and infrastructure sectors — built on precision, innovation, and trust.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── STATS BAR ────────────────────────────────────────────────────────────────

const StatsBar = () => (
  <section className="bg-slate-900 py-10 px-6">
    <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map(({ value, label, icon: Icon }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex flex-col items-center text-center gap-2"
        >
          <Icon size={24} className="text-amber-500" />
          <span className="text-3xl font-black text-white">{value}</span>
          <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold">{label}</span>
        </motion.div>
      ))}
    </div>
  </section>
);

// ─── PROJECTS GRID ────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yParallax = useSpring(yRange, { stiffness: 100, damping: 30 });

  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-10 h-[2px] bg-amber-500" />
              <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs">Featured Work</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight"
            >
              Infrastructure &{' '}
              <span className="accent-text italic">
                Construction Projects
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-slate-500 text-base leading-relaxed max-w-xl"
            >
              From concept to completion, every project reflects our commitment to quality, innovation, and client satisfaction.
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200 shadow-inner">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`
                  px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest
                  transition-all duration-300
                  ${activeFilter === cat
                    ? 'bg-slate-900 text-white shadow-xl scale-105'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          style={{ y: yParallax }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.length > 0 ? (
              filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="relative h-[480px] overflow-hidden rounded-[2.5rem] bg-slate-200 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                    {/* Badge */}
                    <div className="absolute top-7 left-7 flex items-center gap-2">
                      <span className="bg-amber-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                        {project.category}
                      </span>
                      <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/20">
                        {project.year}
                      </span>
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute top-7 right-7 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                      <div className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl border border-white/20 text-white">
                        <ExternalLink size={18} />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight tracking-tight">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-slate-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                          <MapPin size={14} className="mr-1.5 text-amber-500 shrink-0" />
                          {project.location}
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <button
                            aria-label={`Explore ${project.title}`}
                            className="h-11 w-11 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-xl"
                          >
                            <ArrowRight size={18} />
                          </button>
                          <span className="text-white font-black text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Explore
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-32 text-center border-2 border-dashed border-slate-200 rounded-[3rem]"
              >
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-2">Coming Soon</p>
                <p className="text-slate-600 text-lg">We're working on new {activeFilter} projects.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// ─── CTA SECTION ──────────────────────────────────────────────────────────────

const CTASection = () => (
  <section className="relative py-28 px-6 overflow-hidden">
    <img src={ctaBG} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
    <div className="absolute inset-0 bg-slate-900/80" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="w-10 h-[2px] bg-amber-500" />
          <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs">Start Your Project</span>
          <span className="w-10 h-[2px] bg-amber-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-6">
          Have a Project <span className="accent-text italic">in Mind?</span>
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Let's bring your vision to life. Our team of experts is ready to deliver exceptional results — on time and within budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-amber-500/30 hover:scale-105"
          >
            Get in Touch <ArrowRight size={16} />
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-full border border-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            Our Services
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const ProjectsPage = () => (
  <div className="bg-white">
    <HeroSection />
    <StatsBar />
    <ProjectsGrid />
    <CTASection />
  </div>
);

export default ProjectsPage;
