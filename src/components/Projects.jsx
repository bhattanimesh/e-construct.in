import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ExternalLink, MapPin, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

const categories = ["All", "Residential", "Commercial", "Industrial"];

// ─── Stat Pill ────────────────────────────────────────────────────────────────
const StatPill = ({ value, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="flex flex-col items-center justify-center bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[75px]"
    >
      <span className="text-base sm:text-lg font-black text-amber-400 leading-none">{value}</span>
      <span className="text-[8px] uppercase tracking-widest text-slate-400 mt-1 text-center">{label}</span>
    </motion.div>
  );
};

// ─── Featured Card ────────────────────────────────────────────────────────────
const FeaturedCard = ({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.45 }}
    className="col-span-1 md:col-span-2 row-span-2"
    style={{ minHeight: 260 }}
  >
    <Link
      to="/projects"
      className="group relative flex rounded-2xl overflow-hidden cursor-pointer w-full h-full"
      style={{ minHeight: 260 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      {/* Layered gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />

      {/* Top badges */}
      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
        <span className="bg-amber-500 text-white text-[8px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest shadow-lg">
          {project.category}
        </span>
        <span className="bg-white/10 backdrop-blur-md text-white text-[8px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest border border-white/20">
          Featured
        </span>
      </div>

      {/* Top-right icon */}
      <div className="absolute top-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
        <div className="bg-white/10 backdrop-blur-xl p-2 rounded-lg border border-white/20 text-white">
          <ExternalLink size={14} />
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
        <div className="flex items-center gap-1.5 text-slate-300 text-[11px] mb-1.5">
          <MapPin size={11} className="text-amber-400" />
          <span>{project.location}</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight tracking-tight mb-3 max-w-sm">
          {project.title}
        </h3>
        <span className="inline-flex items-center gap-1.5 bg-amber-500 group-hover:bg-amber-400 text-white font-bold text-[9px] uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 shadow-xl group-hover:shadow-amber-500/30 group-hover:scale-105">
          View Project <ArrowUpRight size={12} />
        </span>
      </div>
    </Link>
  </motion.div>
);

// ─── Standard Card ────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    key={project.id}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.35, delay: index * 0.06 }}
    className="h-full"
    style={{ minHeight: 160 }}
  >
    <Link
      to="/projects"
      className="group relative flex rounded-xl overflow-hidden cursor-pointer w-full h-full"
      style={{ minHeight: 160 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Badge */}
      <div className="absolute top-3 left-3">
        <span className="bg-amber-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">
          {project.category}
        </span>
      </div>

      {/* Hover icon */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
        <div className="bg-white/10 backdrop-blur-xl p-1.5 rounded-lg border border-white/20 text-white">
          <ExternalLink size={12} />
        </div>
      </div>

      {/* Info */}
      <div className="absolute inset-0 p-3.5 sm:p-4 flex flex-col justify-end">
        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="flex items-center gap-1 text-slate-300 text-[10px] mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
            <MapPin size={10} className="text-amber-400" />
            {project.location}
          </div>
          <h4 className="text-sm font-bold text-white leading-tight tracking-tight mb-2">
            {project.title}
          </h4>
          <div className="flex items-center gap-1.5">
            <span className="h-6 w-6 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-xl flex-shrink-0">
              <ArrowRight size={12} />
            </span>
            <span className="text-white font-black text-[8px] uppercase tracking-[0.25em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              Explore
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Projects = () => {
  const { data } = useAdmin();
  const projects = data.projects;
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yParallax = useSpring(yRange, { stiffness: 100, damping: 30 });

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featured = filteredProjects[0];
  const rest = filteredProjects.slice(1);

  const scrollStrip = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 240, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative px-4 sm:px-6 py-8 md:py-14 lg:px-8 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-amber-500/5 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-slate-700/20 blur-[80px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto">

        {/* ── Header Row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-10">

          {/* Left: label + heading + stats */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-3"
            >
              <span className="w-8 h-[2px] bg-amber-500" />
              <span className="text-amber-500 font-black uppercase tracking-[0.25em] text-[10px]">
                Our Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-medium text-white leading-[1.1] tracking-tight mb-4"
            >
              Latest Engineering &{" "}
              <br className="hidden sm:block" />
              <span className="accent-text italic">Consultancy Projects</span>
            </motion.h2>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2">
              <StatPill value="650+" label="Projects" delay={0.1} />
              <StatPill value="25+" label="Years Exp." delay={0.2} />
              <StatPill value="500+" label="Clients" delay={0.3} />
            </div>
          </div>

          {/* Right: description + scroll controls */}
          <div className="flex flex-col items-start lg:items-end gap-3 lg:max-w-sm xl:max-w-md w-full lg:w-auto">
            {/* Description text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 text-xs sm:text-sm leading-relaxed text-left lg:text-right"
            >
              From concept to completion — every project reflects our commitment to structural excellence, innovative design, and on-time delivery across India.
            </motion.p>

            {/* Scroll controls (only shown when strip is visible) */}
            {rest.length > 2 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollStrip(-1)}
                  className="h-7 w-7 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-all duration-200"
                >
                  <ChevronLeft size={13} />
                </button>
                <button
                  onClick={() => scrollStrip(1)}
                  className="h-7 w-7 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-all duration-200"
                >
                  <ChevronRight size={13} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ── Bento Grid ── */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div key={activeFilter} style={{ y: yParallax }}>

              {/* Featured + side stack */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                {featured && <FeaturedCard project={featured} />}

                {/* Side stack */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {rest.slice(0, 2).map((project, i) => (
                    <div key={project.id} className="flex-1" style={{ minHeight: 160 }}>
                      <ProjectCard project={project} index={i} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Horizontal scroll strip for extra projects */}
              {rest.length > 2 && (
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none" />
                  <div
                    ref={scrollRef}
                    className="flex gap-3 sm:gap-3.5 overflow-x-auto pb-1"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    {rest.slice(2).map((project, i) => (
                      <div key={project.id} className="flex-shrink-0 w-[200px] sm:w-[230px] h-[155px]">
                        <ProjectCard project={project} index={i} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Bottom CTA ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-5"
              >
                <p className="text-slate-400 text-xs sm:text-sm max-w-sm text-center sm:text-left">
                  Explore our full portfolio of{" "}
                  <span className="text-white font-semibold">650+ delivered projects</span>{" "}
                  across residential, commercial, and infrastructure sectors.
                </p>
                <Link
                  to="/projects"
                  className="group flex items-center gap-2 bg-white text-slate-900 font-bold text-[9px] uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-amber-500/30 flex-shrink-0"
                >
                  View All Projects
                  <span className="h-5 w-5 rounded-full bg-slate-900 group-hover:bg-white text-white group-hover:text-amber-500 flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={10} />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-28 text-center border-2 border-dashed border-white/10 rounded-[2.5rem]"
            >
              <div className="max-w-xs mx-auto">
                <p className="text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-2">
                  Coming Soon
                </p>
                <p className="text-slate-400 text-base">
                  We are currently working on new{" "}
                  <span className="text-white">{activeFilter}</span> projects.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
