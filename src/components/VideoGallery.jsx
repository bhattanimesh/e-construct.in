import React, { useState } from 'react';
import { Play, ExternalLink, Award, Sparkles, BookOpen, Video } from 'lucide-react';

const VideoGallery = () => {
  const [showMoreVideos, setShowMoreVideos] = useState(false);

  const portfolioItems = [
    {
      id: 'hXvEnSxk0IY',
      title: 'About Our Founder – Sandeep Pingale (25+ Years of Experience)',
      category: '👨‍💼 Founder Spotlight',
      badge: 'Founder Story',
      url: 'https://youtu.be/hXvEnSxk0IY',
      isArticle: false
    },
    {
      id: 'HVMQaMyyeqI',
      title: 'Sandeep Pingale – Magazine Features & Media Recognition',
      category: '📰 Media Spotlight',
      badge: 'Magazine & Media',
      url: 'https://youtu.be/HVMQaMyyeqI',
      isArticle: false
    },
    {
      id: 'ceo-india-feature',
      title: 'Featured in CEO India Magazine – "The Engineer Who Built More Than Skylines"',
      category: '📰 Magazine Article',
      badge: 'CEO India Exclusive',
      url: 'https://ceoindiamagazine.com/the-engineer-who-built-more-than-skylines-sandeep-pingles-inspiring-story/',
      isArticle: true,
      desc: 'Discover how Founder Sandeep Pingale revolutionized structural engineering and created a legacy of iconic structural developments.'
    },
    {
      id: 'tGGUSuLAmk8',
      title: 'Gold Award – Best Structural Consultant (IINA)',
      category: '🏆 Industry Award',
      badge: 'Gold Award Winner',
      url: 'https://youtube.com/shorts/tGGUSuLAmk8?si=fbgA4D7HpW9KMIZw',
      isArticle: false
    },
    {
      id: 'G2MgI1FkA3c',
      title: 'ECONSTRUCT Company Profile',
      category: '🏢 Corporate Overview',
      badge: 'Company Profile',
      url: 'https://youtu.be/G2MgI1FkA3c',
      isArticle: false
    },
    {
      id: '8rJ-Fnl6ycU',
      title: 'Hospitality Project Profile',
      category: '🏨 Hospitality Engineering',
      badge: 'Project Showcase',
      url: 'https://youtu.be/8rJ-Fnl6ycU',
      isArticle: false
    },
    {
      id: 't5CNsMfYO_s',
      title: 'Structural Project Profile',
      category: '🏗️ Structural Design',
      badge: 'Project Showcase',
      url: 'https://youtu.be/t5CNsMfYO_s?si=SzrgHr_ll6KnhJxC',
      isArticle: false
    },
    {
      id: 'K8NgNwe18zo',
      title: 'BIM Project Profile',
      category: '📐 BIM & Digital Twin',
      badge: 'BIM Showcase',
      url: 'https://youtu.be/K8NgNwe18zo',
      isArticle: false
    },
    {
      id: 'wf21iarQULs',
      title: 'High-Rise Structural Design & Site Execution',
      category: '🏗️ Project Visuals',
      badge: 'Engineering Excellence',
      url: 'https://youtu.be/wf21iarQULs',
      isArticle: false
    },
    {
      id: 'tMXEJFxronI',
      title: '3D BIM Clash Detection & Multi-Discipline Engineering',
      category: '📐 Project Visuals',
      badge: 'BIM Engineering',
      url: 'https://youtu.be/tMXEJFxronI',
      isArticle: false
    }
  ];

  const visibleItems = showMoreVideos ? portfolioItems : portfolioItems.slice(0, 6);

  return (
    <section className="videos-section reveal py-16 md:py-24 px-4 md:px-8 bg-slate-50 border-b border-black/5 relative text-[var(--primary-dark)]">
      <div className="container text-center mb-12 md:mb-16 mx-auto px-4 max-w-4xl">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-[0.2em] uppercase mb-3">
          <Sparkles size={14} className="text-amber-600" />
          <span>Portfolio Videos & Showcase</span>
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary-dark)] tracking-tight">
          Featured <span className="accent-text italic text-amber-600">Portfolio & Profiles</span>
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
          Explore Founder Sandeep Pingale's leadership videos, CEO India Magazine features, Gold Award highlights, and flagship structural & BIM project profiles.
        </p>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1400px] mx-auto px-4">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className="video-card bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            {item.isArticle ? (
              <div className="p-6 h-full flex flex-col justify-between bg-gradient-to-br from-blue-900 to-slate-900 text-white min-h-[300px]">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[11px] font-bold">
                      {item.badge}
                    </span>
                    <BookOpen size={20} className="text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <span>Read Article Feature</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            ) : (
              <div>
                <div className="relative aspect-video bg-black overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${item.id}`}
                    title={item.title}
                    className="w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      {item.badge}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">{item.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-bold text-amber-600 hover:text-black transition-colors"
                    >
                      <span>Open Link</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 md:mt-16">
        <button
          onClick={() => setShowMoreVideos(!showMoreVideos)}
          className="w-full sm:w-auto px-8 md:px-10 py-4 bg-amber-500 hover:bg-black hover:text-white text-black font-bold rounded-xl transition-all duration-300 uppercase tracking-wider text-sm md:text-base active:scale-95 shadow-md min-w-[280px]"
        >
          {showMoreVideos ? 'Show Fewer Videos ↖' : 'Explore All Portfolio Videos ↗'}
        </button>
      </div>
    </section>
  );
};

export default VideoGallery;
