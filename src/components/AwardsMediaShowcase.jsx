import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, BookOpen, ExternalLink, Play, Sparkles, FileText, Video, ArrowRight, ShieldCheck, X } from 'lucide-react';

const AwardsMediaShowcase = ({ className = "" }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const highlights = [
    {
      id: 'award',
      type: 'Award Recognition',
      badge: '🏆 Gold Award Winner',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      title: 'Gold Award – Best Structural Consultant',
      org: 'IINA Engineering & Infrastructure Awards',
      desc: 'Honored with the prestigious Gold Award for structural engineering excellence, high-rise innovation, and design integrity across landmark Indian developments.',
      link: 'https://youtube.com/shorts/tGGUSuLAmk8?si=fbgA4D7HpW9KMIZw',
      embedId: 'tGGUSuLAmk8',
      isVideo: true,
      buttonText: 'Watch Award Video',
      icon: Award,
      accentColor: 'text-amber-600'
    },
    {
      id: 'magazine',
      type: 'Magazine Exclusive',
      badge: '📰 Magazine & Media Feature',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      title: 'Sandeep Pingale – Magazine Features & Media Recognition',
      org: 'CEO India Magazine & Media Spotlight',
      desc: 'Exclusive profile feature on Mr. Sandeep Pingale’s 25+ year journey, pioneering structural consultancy, BIM technology, and engineering leadership.',
      link: 'https://ceoindiamagazine.com/the-engineer-who-built-more-than-skylines-sandeep-pingles-inspiring-story/',
      embedId: 'HVMQaMyyeqI',
      isVideo: true,
      buttonText: 'Watch Media Video',
      icon: BookOpen,
      accentColor: 'text-blue-600'
    },
    {
      id: 'founder',
      type: 'Founder Spotlight',
      badge: '👨‍💼 Founder & MD (25+ Yrs)',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      title: 'About Our Founder – Sandeep Pingale',
      org: 'ECONSTRUCT Design & Build Pvt. Ltd.',
      desc: 'Discover visionary leadership, structural engineering achievements, and a passion for empowering civil & structural engineers nationwide.',
      link: 'https://youtu.be/hXvEnSxk0IY',
      embedId: 'hXvEnSxk0IY',
      isVideo: true,
      buttonText: 'Watch Founder Video',
      icon: Video,
      accentColor: 'text-emerald-600'
    },
    {
      id: 'newsletter',
      type: 'Technical Publication',
      badge: '📄 Industry Newsletter',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      title: 'Green Infrastructure & Whole-Life Engineering',
      org: 'ECONSTRUCT Technical Whitepaper',
      desc: 'In-depth research on Hybrid Timber, Embodied Carbon, Whole-Life Engineering, and 1D-10D BIM Integration authored by Founder Sandeep Pingale.',
      link: '/pdfs/ECONSTRUCT_Green_Infrastructure_Timber_Redraft_260811_105649.pdf',
      isVideo: false,
      buttonText: 'Read Newsletter PDF',
      icon: FileText,
      accentColor: 'text-purple-600'
    }
  ];

  return (
    <section className={`py-16 md:py-24 bg-white text-slate-900 border-y border-gray-200/70 relative overflow-hidden ${className}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 sm:w-12 h-[2px] bg-amber-500" />
            <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">
              Honors, Media & Thought Leadership
            </span>
            <span className="w-10 sm:w-12 h-[2px] bg-amber-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight"
          >
            Featured In <span className="accent-text italic text-amber-600">National Media</span> & Industry Awards
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed"
          >
            ECONSTRUCT & Founder Sandeep Pingale (25+ Years Experience) recognized by CEO India Magazine, IINA Gold Awards, and national engineering forums.
          </motion.p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white border border-gray-200 hover:border-amber-400 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5"
              >
                <div>
                  {/* Badge & Type */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full border text-[11px] font-bold tracking-wide ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <IconComponent size={20} className={`${item.accentColor} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-amber-600 text-[11px] font-bold uppercase tracking-wider mb-3">
                    {item.org}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 text-xs leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Media Preview or Action Link */}
                <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                  {item.isVideo ? (
                    <>
                      <button
                        onClick={() => setActiveVideo({ id: item.embedId, title: item.title })}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-slate-950 text-slate-950 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 group-hover:bg-amber-500"
                      >
                        <Play size={14} className="fill-current" />
                        <span>{item.buttonText}</span>
                      </button>
                      {item.id === 'magazine' && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-1.5 py-1.5 text-slate-600 hover:text-amber-600 text-[11px] font-bold transition-colors"
                        >
                          <span>Read CEO Article</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.link}
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
                    >
                      <span>{item.buttonText}</span>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-amber-50/60 border border-amber-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center flex-shrink-0 font-bold shadow-md">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">25+ Years of Structural Engineering Excellence</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Pioneering high-rise RCC design, pre-engineered steel, and 1D–10D BIM technology integration.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto flex-wrap sm:flex-nowrap">
            <a
              href="https://ceoindiamagazine.com/the-engineer-who-built-more-than-skylines-sandeep-pingles-inspiring-story/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-slate-950 text-slate-950 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md inline-flex items-center gap-2 justify-center w-full sm:w-auto"
            >
              <span>CEO India Story</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="/pdfs/ECONSTRUCT_Green_Infrastructure_Timber_Redraft_260811_105649.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white hover:bg-amber-500 border border-slate-300 text-slate-900 hover:text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm inline-flex items-center gap-2 justify-center w-full sm:w-auto"
            >
              <span>Newsletter PDF</span>
              <FileText size={14} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
                <h4 className="text-sm font-bold text-amber-400">{activeVideo.title}</h4>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-full hover:bg-slate-800 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AwardsMediaShowcase;
