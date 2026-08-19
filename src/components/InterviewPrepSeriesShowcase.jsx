import React, { useState, useMemo, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Play, ChevronLeft, ChevronRight,
  X, ExternalLink, Grid, LayoutList
} from 'lucide-react';
import INTERVIEW_PREP_SERIES from '../data/interviewPrepSeriesData';

const InterviewPrepSeriesShowcase = ({
  subtitle = "Bite-sized structural engineering concepts and interview questions explained by industry experts."
}) => {
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Lock body scroll on modal
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

  const shorts = useMemo(() => INTERVIEW_PREP_SERIES.filter(v => v.type === 'short'), []);
  const fullVideo = useMemo(() => INTERVIEW_PREP_SERIES.find(v => v.type === 'full'), []);

  const CARDS_PER_PAGE = 4;
  const totalPages = Math.ceil(shorts.length / CARDS_PER_PAGE);

  const displayedShorts = useMemo(() => {
    if (showAll) return shorts;
    const start = currentPage * CARDS_PER_PAGE;
    return shorts.slice(start, start + CARDS_PER_PAGE);
  }, [shorts, currentPage, showAll]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="interview-prep-reels" className="py-10 md:py-14 bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-0.5 bg-yellow-500" />
              <span className="text-yellow-600 font-bold uppercase tracking-widest text-[11px]">
                IPS · Interview Preparation Series
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight">
              Interview Prep <span className="text-yellow-600 italic font-serif">Reels</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-lg">{subtitle}</p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0 self-start sm:self-end">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 transition flex items-center gap-1.5"
            >
              {showAll ? <LayoutList className="w-3.5 h-3.5" /> : <Grid className="w-3.5 h-3.5" />}
              <span>{showAll ? 'Show Pages (4)' : `View All (${shorts.length})`}</span>
            </button>

            {!showAll && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400">
                  {currentPage + 1} / {totalPages}
                </span>
                <button
                  onClick={prevPage}
                  className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-200 flex items-center justify-center transition active:scale-95 shadow-sm"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextPage}
                  className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-200 flex items-center justify-center transition active:scale-95 shadow-sm"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Featured Full Video (compact inline banner) */}
        {fullVideo && (
          <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 rounded-xl bg-slate-50 border border-gray-200">
            {/* Thumbnail */}
            <div
              onClick={() => setActiveModalVideo(fullVideo)}
              className="w-full sm:w-48 h-28 sm:h-auto rounded-lg overflow-hidden bg-gray-200 shrink-0 relative cursor-pointer group"
            >
              <img
                src={`https://img.youtube.com/vi/${fullVideo.id}/hqdefault.jpg`}
                alt={fullVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <span className="inline-block text-[10px] font-black uppercase tracking-wider text-yellow-700 bg-yellow-100 px-2 py-0.5 rounded mb-1.5">
                Full Masterclass
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug line-clamp-1">
                {fullVideo.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {fullVideo.summary}
              </p>
            </div>

            {/* Actions */}
            <div className="flex sm:flex-col gap-2 shrink-0">
              <button
                onClick={() => setActiveModalVideo(fullVideo)}
                className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-white font-bold text-xs uppercase tracking-wide transition active:scale-95 flex items-center gap-1.5 whitespace-nowrap justify-center"
              >
                <Play className="w-3 h-3 fill-current" /> Watch
              </button>
              <a
                href={fullVideo.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:text-gray-900 font-bold text-xs transition flex items-center gap-1.5 whitespace-nowrap justify-center"
              >
                <ExternalLink className="w-3 h-3" /> YouTube
              </a>
            </div>
          </div>
        )}

        {/* Clean Responsive Grid (No horizontal scrollbars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedShorts.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveModalVideo(video)}
              className="rounded-xl border border-gray-200 bg-white hover:border-yellow-400 overflow-hidden cursor-pointer group transition-all hover:shadow-md flex flex-col justify-between"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden shrink-0">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-yellow-500/90 text-white flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-2 right-2 text-[9px] font-bold bg-white/90 text-gray-600 px-1.5 py-0.5 rounded backdrop-blur-sm">
                  Short
                </span>
              </div>

              {/* Card Info */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold text-yellow-700 uppercase tracking-wider">
                    {video.tag}
                  </span>
                  <h4 className="text-xs font-bold text-gray-900 mt-1 line-clamp-2 leading-snug group-hover:text-yellow-700 transition-colors">
                    {video.title}
                  </h4>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-yellow-700">
                  <span className="flex items-center gap-1">
                    <Play className="w-3 h-3 fill-current" /> Watch Reel
                  </span>
                  <span className="text-gray-400 font-normal text-[10px]">60s</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page Dots Indicator (when paginated) */}
        {!showAll && totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentPage === idx
                    ? 'w-6 bg-yellow-500'
                    : 'w-2 bg-gray-200 hover:bg-gray-300'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {activeModalVideo && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
            onClick={(e) => { if (e.target === e.currentTarget) setActiveModalVideo(null); }}
          >
            {/* Top-Right Floating Close Button */}
            <button
              onClick={() => setActiveModalVideo(null)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition shadow-lg z-[10000] border border-white/20 active:scale-95"
              aria-label="Close video modal"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.18 }}
              className={`w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto border border-gray-100 ${
                activeModalVideo.type === 'full' ? 'max-w-3xl' : 'max-w-[360px] sm:max-w-[380px]'
              }`}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 overflow-hidden pr-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                    {activeModalVideo.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 flex items-center justify-center transition shrink-0 ml-2"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Frame */}
              <div className={`w-full bg-black relative flex items-center justify-center ${
                activeModalVideo.type === 'full' 
                  ? 'aspect-video' 
                  : 'aspect-[9/16] max-h-[68vh]'
              }`}>
                <iframe
                  src={activeModalVideo.embedUrl}
                  title={activeModalVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-3 bg-white border-t border-gray-100 flex items-center justify-between gap-3 shrink-0">
                <span className="text-[10px] font-bold text-yellow-700 uppercase tracking-wider bg-yellow-50 px-2 py-0.5 rounded border border-yellow-200/50">
                  {activeModalVideo.tag}
                </span>
                <a
                  href={activeModalVideo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-gray-600 hover:text-yellow-600 flex items-center gap-1.5 transition"
                >
                  Watch on YouTube <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InterviewPrepSeriesShowcase;
