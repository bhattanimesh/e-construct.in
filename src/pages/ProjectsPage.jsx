import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, ArrowRight, ExternalLink, Building2, Award, Users, TrendingUp } from 'lucide-react';
import GoregaonMulundLinkRoad from '../assets/GoregaonMulundLinkRoad.webp';
import ctaBG from '../assets/ctaBG.avif';
import { useAdmin } from '../context/AdminContext';

const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Industrial'];

const HeroSection = () => {
  const { data } = useAdmin();
  const pc = data.projectsPageContent;
  return (
  <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
    <img src={GoregaonMulundLinkRoad} alt="E-Construct Projects" className="absolute inset-0 w-full h-full object-cover scale-105" loading="lazy" decoding="async" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-16 w-full">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[2px] bg-amber-500" />
          <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs">Our Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight accent-text italic">
          {pc.heroTitle}
        </h1>
      </motion.div>
    </div>
  </section>
  );
};

// ─── PROJECT HIGHLIGHTS ───────────────────────────────────────────────────────

const highlightedProjects = [
  {
    title: 'Group Housing Development G+4',
    subtitle: 'Featured Project',
    description: 'Project Name – Group Housing Development G+4 residential towers (Studio & 2BHK) and G+1 canteen–auditorium block with a total built-up area of ~1,14,700 SFT, designed as an RCC framed structure (M20/M25) with AAC blockwork and 10 ft floor-to-floor height. Scope includes end-to-end construction with integrated architectural, structural, and MEP services—featuring vitrified/granite flooring, UPVC windows, teak main doors, FRLS electrical systems, CPVC plumbing, and waterproofing. Executed under IS code compliance with full QA/QC, site supervision, and fast-track delivery within ~6 months.',
    images: [
      '/projects/user_gh_1.png',
      '/projects/user_gh_2.png',
      '/projects/user_gh_3.png'
    ]
  },
  {
    title: '9 Emperio (G+35)',
    subtitle: 'High-Rise Tower',
    description: 'Project Name: 9 Emperio (G+35) Location: Raghunathpur, Nandankanan Road, Patia, Bhubaneswar, Odisha Total area: 2290sq.m / 24649.331sq.ft',
    images: [
      '/projects/user_emp_1.png',
      '/projects/user_emp_2.png',
      '/projects/user_emp_3.png',
      '/projects/user_emp_4.png',
      '/projects/user_emp_5.png'
    ]
  },
  {
    title: '9 Boulerverd (G+35)',
    subtitle: 'Luxury Residential',
    description: 'Project Name: 9 Boulerverd (G+35) Location: Raghunathpur, near HP Petrol Pump, Nandankanan Road, Patia, Bhubaneswar Total area: 6137sq.m / 66058.0543sq.ft',
    images: [
      '/projects/user_blv_1.png',
      '/projects/user_blv_2.png',
      '/projects/user_blv_3.png',
      '/projects/user_blv_4.png',
      '/projects/user_blv_5.png',
      '/projects/user_blv_6.png'
    ]
  },
  {
    title: 'Ashoak Mall, Jalna (2B+G+8)',
    subtitle: 'Commercial Development',
    description: 'Ashoak Mall is a modern, premium commercial development in Jalna, designed to redefine shopping and business experience in the city. Bringing together retail, food, entertainment, and lifestyle under one roof, this project is planned to create a high-footfall commercial hub with modern architecture, attractive design, and business-focused planning, Ashok Mall is not just a shopping complex — it is a growth opportunity for investors and business owners.',
    images: [
      '/projects/user_mall_1.png',
      '/projects/user_mall_2.png',
      '/projects/user_mall_3.png',
      '/projects/user_mall_4.png',
      '/projects/user_mall_5.png'
    ]
  },
  {
    title: 'GRK Africa Project',
    subtitle: 'International Infrastructure',
    description: 'Significant infrastructure development project in Africa, showcasing E-Construct\'s international engineering and project management capabilities.',
    images: [
      '/projects/user_grk_1.png',
      '/projects/user_grk_2.png',
      '/projects/user_grk_3.png',
      '/projects/user_grk_4.png',
      '/projects/user_grk_5.png',
      '/projects/user_grk_6.png'
    ]
  }
];

const ProjectHighlights = () => {
  return (
    <div className="bg-slate-50 space-y-px">
      {highlightedProjects.map((project, pIndex) => (
        <section key={pIndex} className="py-24 px-6 border-b border-gray-200 last:border-b-0">
          <div className="max-w-[1400px] mx-auto">
            <div className="max-w-4xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-amber-500" />
                <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs">{project.subtitle}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight mb-8">
                {project.title.split(' (').slice(0, 1).join('')} <span className="accent-text italic">{project.title.includes(' (') ? '(' + project.title.split(' (').slice(1).join('(') : ''}</span>
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-light mb-12 whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.images.map((img, iIndex) => (
                <motion.div 
                  key={iIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: iIndex * 0.1 }}
                  className="group relative h-[400px] overflow-hidden rounded-[2.5rem] shadow-xl bg-slate-100"
                >
                  <img 
                    src={img} 
                    alt={`${project.title} detail ${iIndex + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" 
                    loading="lazy" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

// ─── PROJECTS GRID ────────────────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const ProjectsPage = () => (
  <div className="bg-white">
    <HeroSection />
    <ProjectHighlights />
  </div>
);

export default ProjectsPage;
