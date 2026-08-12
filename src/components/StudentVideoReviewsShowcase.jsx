import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, Star, Video, ChevronLeft, ChevronRight, Search,
  X, Quote, Sparkles, Filter, Grid, LayoutList, Award, Globe, Users, ExternalLink
} from 'lucide-react';
import ALL_STUDENT_REVIEWS from '../data/studentReviewsData';

const Label = ({ children }) => (
  <div className="flex items-center gap-2 mb-2">
    <div className="w-8 h-0.5 bg-[#fbc02d]" />
    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">{children}</span>
  </div>
);

const StudentVideoReviewsShowcase = ({ title = "Student Feedback & Experience Videos", subtitle = "Hear directly from our Master Study alumni placed in top structural design & BIM firms across India, UAE, and Muscat." }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' or 'grid'
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // Lock scroll & handle Escape key when modal is open
  useEffect(() => {
    if (activeModalVideo) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveModalVideo(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModalVideo]);

  // Category counts
  const categories = useMemo(() => {
    const counts = {
      All: ALL_STUDENT_REVIEWS.length,
      'International': ALL_STUDENT_REVIEWS.filter(r => r.category === 'International').length,
      'Master Study Trainees': ALL_STUDENT_REVIEWS.filter(r => r.category === 'Master Study Trainees').length,
      'Placements & Alumni': ALL_STUDENT_REVIEWS.filter(r => r.category === 'Placements & Alumni').length,
    };
    return [
      { id: 'All', label: 'All Reviews', count: counts.All, icon: Users },
      { id: 'International', label: 'International Reviews', count: counts['International'], icon: Globe },
      { id: 'Master Study Trainees', label: 'Master Study Trainees', count: counts['Master Study Trainees'], icon: Sparkles },
      { id: 'Placements & Alumni', label: 'Placements & Alumni', count: counts['Placements & Alumni'], icon: Award },
    ];
  }, []);

  // Filtered dataset
  const filteredReviews = useMemo(() => {
    return ALL_STUDENT_REVIEWS.filter(review => {
      const matchesCategory = activeTab === 'All' || review.category === activeTab;
      const matchesSearch = !searchQuery || 
        review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.quote.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const CARDS_PER_PAGE = 4;
  const totalPages = useMemo(() => Math.ceil(filteredReviews.length / CARDS_PER_PAGE), [filteredReviews.length]);

  const prevSlide = () => {
    setCurrentSlide(prev => {
      const nextPrev = prev - CARDS_PER_PAGE;
      if (nextPrev < 0) {
        return Math.max(0, (totalPages - 1) * CARDS_PER_PAGE);
      }
      return nextPrev;
    });
  };

  const nextSlide = () => {
    setCurrentSlide(prev => {
      const nextNext = prev + CARDS_PER_PAGE;
      if (nextNext >= filteredReviews.length) {
        return 0;
      }
      return nextNext;
    });
  };

  return (
    <section id="student-feedback" className="py-10 sm:py-14 md:py-16 bg-slate-50 text-slate-900 border-y border-gray-200 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="max-w-3xl">
            <Label>Authentic Video Testimonials</Label>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Student <span className="text-[#fbc02d] italic font-serif">Reviews & Video Testimonials</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              {subtitle} Explore authentic video feedback from 40+ trainees and international engineers.
            </p>
          </div>

          {/* View Mode & Carousel Nav Buttons */}
          <div className="flex items-center gap-2.5 shrink-0 self-start lg:self-end">
            <div className="bg-white p-1 rounded-lg border border-gray-200 shadow-sm flex items-center gap-1">
              <button
                onClick={() => setViewMode('carousel')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${viewMode === 'carousel' ? 'bg-[#fbc02d] text-slate-950 shadow-sm' : 'text-gray-600 hover:text-slate-900'}`}
              >
                <LayoutList size={12} /> Carousel
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-[11px] font-bold transition-all ${viewMode === 'grid' ? 'bg-[#fbc02d] text-slate-950 shadow-sm' : 'text-gray-600 hover:text-slate-900'}`}
              >
                <Grid size={12} /> Grid ({filteredReviews.length})
              </button>
            </div>

            {viewMode === 'carousel' && filteredReviews.length > 4 && (
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600 text-[11px] font-bold hidden sm:block mr-1">
                  Page {Math.floor(currentSlide / CARDS_PER_PAGE) + 1} of {totalPages} ({filteredReviews.length} Reviews)
                </span>
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-lg border border-gray-200 bg-white text-slate-800 hover:bg-[#fbc02d] hover:border-[#fbc02d] hover:text-slate-950 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Previous Page of Reviews"
                  title="Previous 4 Videos"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-lg border border-[#fbc02d] bg-[#fbc02d] text-slate-950 hover:bg-yellow-400 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Next Page of Reviews"
                  title="Next 4 Videos"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Compact Light Filter Bar: Tabs & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6 bg-white p-2 sm:p-2.5 rounded-xl border border-gray-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setCurrentSlide(0);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-extrabold uppercase tracking-wide transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#fbc02d] text-slate-950 shadow-sm scale-102'
                      : 'bg-gray-100/90 text-gray-700 hover:bg-gray-200/90 border border-gray-200/60'
                  }`}
                >
                  <Icon size={12} />
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[9px] font-bold ${isActive ? 'bg-black/15 text-slate-950' : 'bg-amber-100 text-amber-800'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Compact Light Search Box */}
          <div className="relative min-w-[200px] md:min-w-[240px]">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => {
                setSearchQuery(e.target.value);
                setCurrentSlide(0);
              }}
              placeholder="Search by name, role..."
              className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-8 pr-7 py-1.5 text-xs text-slate-900 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-900">
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Content Display */}
        {filteredReviews.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center my-4 shadow-sm">
            <Filter size={32} className="mx-auto text-amber-500/40 mb-2" />
            <h3 className="text-base font-bold text-slate-900 mb-1">No video reviews found</h3>
            <p className="text-gray-600 text-xs max-w-md mx-auto mb-3">
              No student reviews matched your search "{searchQuery}". Try clearing filters or searching for another keyword.
            </p>
            <button
              onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
              className="px-4 py-1.5 bg-[#fbc02d] text-slate-950 text-xs font-bold uppercase rounded-lg hover:bg-yellow-400 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'carousel' ? (
          <>
            {/* Compact Carousel View (4 Cards visible per row on XL screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[0, 1, 2, 3].map(offset => {
                const idx = (currentSlide + offset) % filteredReviews.length;
                const review = filteredReviews[idx];
                if (!review) return null;

                return (
                  <motion.div
                    key={`${review.id}-${offset}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: offset * 0.05 }}
                    className="bg-white border border-gray-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 group shadow-sm"
                  >
                    {/* Thumbnail & Play Overlay */}
                    <div
                      className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden group/thumb"
                      onClick={() => setActiveModalVideo(review)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${review.videoId}/hqdefault.jpg`}
                        alt={review.name}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 brightness-95"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-950/30 group-hover/thumb:bg-slate-950/10 transition-colors flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-[#fbc02d] text-slate-950 flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform duration-300">
                          <Play size={16} className="ml-0.5 fill-slate-950" />
                        </div>
                      </div>

                      {/* Badge Overlay */}
                      <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1 shadow-md">
                        <Video size={10} /> {review.badge || review.category}
                      </div>
                    </div>

                    {/* Compact Body Content */}
                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Rating Stars */}
                        <div className="flex items-center gap-0.5 text-amber-500 mb-2">
                          {[...Array(review.rating || 5)].map((_, i) => (
                            <Star key={i} size={11} className="fill-amber-400" />
                          ))}
                          <span className="text-gray-500 text-[10px] font-bold ml-1">5.0</span>
                        </div>

                        {/* Compact Quote */}
                        <p className="text-gray-600 text-[11px] leading-snug italic mb-3 line-clamp-2">
                          "{review.quote}"
                        </p>
                      </div>

                      {/* Compact Footer Info */}
                      <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                        <div className="overflow-hidden pr-2">
                          <h4 className="font-bold text-slate-900 text-xs truncate group-hover:text-amber-600 transition-colors">{review.name}</h4>
                          <p className="text-amber-600 font-semibold text-[10px] truncate">{review.role}</p>
                        </div>
                        <button
                          onClick={() => setActiveModalVideo(review)}
                          className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-300/80 text-amber-800 text-[10px] font-bold hover:bg-[#fbc02d] hover:text-slate-950 hover:border-[#fbc02d] transition-all flex items-center gap-1 shrink-0"
                        >
                          <Play size={10} className="fill-current" /> Watch
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Carousel Page Navigation Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-6">
                <button
                  onClick={prevSlide}
                  className="px-3.5 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-bold text-gray-700 hover:bg-[#fbc02d] hover:border-[#fbc02d] hover:text-slate-950 transition flex items-center gap-1 shadow-sm active:scale-95"
                >
                  <ChevronLeft size={14} /> Prev Page
                </button>

                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm">
                  {[...Array(totalPages)].map((_, pageIdx) => {
                    const isActive = Math.floor(currentSlide / CARDS_PER_PAGE) === pageIdx;
                    return (
                      <button
                        key={pageIdx}
                        onClick={() => setCurrentSlide(pageIdx * CARDS_PER_PAGE)}
                        className={`h-2 rounded-full transition-all ${
                          isActive ? 'w-6 bg-[#fbc02d] shadow-sm' : 'w-2 bg-gray-200 hover:bg-gray-300'
                        }`}
                        aria-label={`Go to page ${pageIdx + 1}`}
                        title={`Page ${pageIdx + 1}`}
                      />
                    );
                  })}
                </div>

                <button
                  onClick={nextSlide}
                  className="px-3.5 py-1.5 rounded-lg border border-[#fbc02d] bg-[#fbc02d] text-slate-950 text-xs font-bold hover:bg-yellow-400 transition flex items-center gap-1 shadow-sm active:scale-95"
                >
                  Next Page <ChevronRight size={14} />
                </button>
              </div>
            )}
          </>
        ) : (
          /* Compact Grid View (All Videos) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredReviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: (i % 8) * 0.03 }}
                className="bg-white border border-gray-200/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-400/80 hover:shadow-xl transition-all duration-300 group shadow-sm"
              >
                {/* Thumbnail & Play Overlay */}
                <div
                  className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden group/thumb"
                  onClick={() => setActiveModalVideo(review)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${review.videoId}/hqdefault.jpg`}
                    alt={review.name}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover/thumb:bg-slate-950/10 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#fbc02d] text-slate-950 flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform duration-300">
                      <Play size={16} className="ml-0.5 fill-slate-950" />
                    </div>
                  </div>

                  {/* Badge Overlay */}
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-md text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1 shadow-md">
                    <Video size={10} /> {review.badge || review.category}
                  </div>
                </div>

                {/* Compact Body Content */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center gap-0.5 text-amber-500 mb-2">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <Star key={i} size={11} className="fill-amber-400" />
                      ))}
                      <span className="text-gray-500 text-[10px] font-bold ml-1">5.0</span>
                    </div>

                    {/* Compact Quote */}
                    <p className="text-gray-600 text-[11px] leading-snug italic mb-3 line-clamp-2">
                      "{review.quote}"
                    </p>
                  </div>

                  {/* Compact Footer Info */}
                  <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between">
                    <div className="overflow-hidden pr-2">
                      <h4 className="font-bold text-slate-900 text-xs truncate group-hover:text-amber-600 transition-colors">{review.name}</h4>
                      <p className="text-amber-600 font-semibold text-[10px] truncate">{review.role}</p>
                    </div>
                    <button
                      onClick={() => setActiveModalVideo(review)}
                      className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-300/80 text-amber-800 text-[10px] font-bold hover:bg-[#fbc02d] hover:text-slate-950 hover:border-[#fbc02d] transition-all flex items-center gap-1 shrink-0"
                    >
                      <Play size={10} className="fill-current" /> Watch
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-md overflow-y-auto p-3 sm:p-6 md:p-8 flex min-h-full items-center justify-center"
            onClick={() => setActiveModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 10 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/20 my-auto flex flex-col shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-slate-950 shrink-0">
                <div className="flex items-center gap-3 overflow-hidden pr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shrink-0 animate-pulse" />
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base truncate flex items-center gap-2">
                      <span>{activeModalVideo.name}</span>
                      <span className="text-yellow-400 text-[11px] px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 hidden sm:inline-block">
                        {activeModalVideo.role}
                      </span>
                    </h3>
                    <p className="text-gray-400 text-[11px] truncate sm:hidden">{activeModalVideo.role} • {activeModalVideo.company}</p>
                  </div>
                </div>
                
                {/* Prominent Close Button */}
                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="w-9 h-9 rounded-full bg-yellow-500 text-slate-950 flex items-center justify-center hover:bg-yellow-400 transition-all shadow-lg shrink-0 active:scale-90"
                  aria-label="Close modal"
                  title="Close (Esc)"
                >
                  <X size={20} className="stroke-[2.5]" />
                </button>
              </div>

              {/* Responsive Video Container */}
              <div className="relative aspect-video max-h-[60vh] bg-black w-full shrink-0 flex items-center justify-center">
                <iframe
                  src={`https://www.youtube.com/embed/${activeModalVideo.videoId}?autoplay=1`}
                  title={`${activeModalVideo.name} Video Review`}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Subtext / Quote Footer */}
              <div className="p-4 sm:p-5 bg-slate-950 text-gray-200 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0 border-t border-white/15">
                <p className="italic text-gray-200 leading-relaxed font-medium">"{activeModalVideo.quote}"</p>
                <a
                  href={activeModalVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 font-bold hover:text-yellow-300 shrink-0 flex items-center gap-1.5 self-end sm:self-center bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-yellow-500/20 transition-colors"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudentVideoReviewsShowcase;
