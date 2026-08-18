import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ChevronLeft, ChevronRight, X, MapPin } from 'lucide-react';

const siteVisitFiles = [
  '1.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg', '9.jpeg', '10.jpeg',
  '11.jpeg', '12.jpeg', '13.jpeg', '14.jpeg', '15.jpeg', '16.jpeg', '17.jpeg', '18.jpeg', '19.jpeg', '20.jpeg',
  '21.jpeg', '22.jpeg', '23.jpeg', '24.jpeg', '25.jpeg', '26.jpeg', '27.jpeg', '28.jpeg', '29.jpeg', '30.jpeg',
  '31.jpeg', '32.jpeg', '33.jpeg', '34.jpeg', '35.jpeg', '36.jpeg', '37.jpeg', '38.jpeg', '39.jpeg', '40.jpeg',
  '41.jpeg', '42.jpeg', '43.jpeg', '44.jpeg', '45.jpeg', '46.jpeg', '47.jpeg', '48.jpeg', '49.jpeg', '50.jpeg',
  '51.jpeg', '52.jpeg', '53.jpeg', '54.jpeg', '55.jpeg', '56.jpeg', '57.jpeg', '58.jpeg', '59.jpeg', '60.jpeg',
  '61.jpeg', '62.jpeg', '63.jpeg', '64.jpeg', '65.jpeg', '67.jpeg', '68.jpeg', '69.jpeg', '70.jpeg', '71.jpeg',
  '72.jpeg', '73.jpeg', '74.jpeg', '75.jpeg', '76.jpeg', '77.jpeg', '78.jpeg'
];

export const siteVisitImages = siteVisitFiles.map(file => `/projects/site%20visits/${file}`);

const SiteVisitsScroller = ({
  badge = "REAL-WORLD SITE EXPOSURE",
  title = "Site Visits",
  highlight = "in Action",
  subtitle = "Live Construction & Structural Site Inspections",
  id = "site-visits"
}) => {
  const [lightbox, setLightbox] = useState(null);
  const thumbRefs = useRef([]);

  // Lock body scroll and register keyboard listeners when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      if (thumbRefs.current[lightbox]) {
        thumbRefs.current[lightbox].scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    const handler = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((p) => (p + 1) % siteVisitImages.length);
      if (e.key === 'ArrowLeft') setLightbox((p) => (p - 1 + siteVisitImages.length) % siteVisitImages.length);
    };

    window.addEventListener('keydown', handler);
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handler);
    };
  }, [lightbox]);

  const track1 = siteVisitImages.slice(0, Math.ceil(siteVisitImages.length / 2));
  const track2 = siteVisitImages.slice(Math.ceil(siteVisitImages.length / 2));

  return (
    <>
      <section id={id} className="py-16 md:py-20 bg-slate-950 text-white border-t border-b border-slate-900 overflow-hidden relative select-none">
        <style>{`
          @keyframes siteMarqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes siteMarqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-site-marquee-left {
            animation: siteMarqueeLeft 70s linear infinite;
          }
          .animate-site-marquee-right {
            animation: siteMarqueeRight 70s linear infinite;
          }
          .animate-site-marquee-left:hover,
          .animate-site-marquee-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Gradient edge fades for infinite marquee aesthetic */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-[5%] mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-900">
            <div>
              <span className="text-yellow-500 text-[11px] font-bold tracking-[0.2em] uppercase block mb-1">
                {badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {title} <span className="accent-text italic text-yellow-500 font-serif">{highlight}</span>
              </h2>
              {subtitle && (
                <p className="text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{siteVisitImages.length} Site Visit Moments · Hover to Pause · Click to Expand</span>
            </div>
          </div>
        </div>

        {/* Marquee Row 1 (Right to Left) */}
        <div className="mb-4 flex overflow-hidden select-none">
          <div className="flex gap-3.5 animate-site-marquee-left shrink-0">
            {[...track1, ...track1].map((imgUrl, idx) => {
              const globalIndex = siteVisitImages.indexOf(imgUrl);
              return (
                <div
                  key={`sv-t1-${idx}`}
                  onClick={() => setLightbox(globalIndex >= 0 ? globalIndex : idx)}
                  className="group relative w-52 sm:w-64 h-34 sm:h-40 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-md hover:border-yellow-500/80 hover:scale-[1.03] transition-all duration-300"
                >
                  <img
                    src={imgUrl}
                    alt={`Site visit exposure ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-yellow-500 text-slate-950 p-2.5 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Marquee Row 2 (Left to Right) */}
        <div className="flex overflow-hidden select-none">
          <div className="flex gap-3.5 animate-site-marquee-right shrink-0">
            {[...track2, ...track2].map((imgUrl, idx) => {
              const globalIndex = siteVisitImages.indexOf(imgUrl);
              return (
                <div
                  key={`sv-t2-${idx}`}
                  onClick={() => setLightbox(globalIndex >= 0 ? globalIndex : idx)}
                  className="group relative w-52 sm:w-64 h-34 sm:h-40 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-md hover:border-yellow-500/80 hover:scale-[1.03] transition-all duration-300"
                >
                  <img
                    src={imgUrl}
                    alt={`Site visit exposure ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="bg-yellow-500 text-slate-950 p-2.5 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 size={16} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Solid 100% Opaque High-Contrast Lightbox Popup ── */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-screen w-screen bg-slate-950 z-[999999] flex flex-col justify-between p-4 md:p-6 overflow-hidden select-none"
            onClick={() => setLightbox(null)}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto text-white z-30 shrink-0">
              <div className="flex items-center gap-3">
                <span className="bg-yellow-500 text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <MapPin size={12} className="shrink-0" />
                  SITE VISIT PHOTO {lightbox + 1} OF {siteVisitImages.length}
                </span>
                <span className="text-gray-300 text-xs font-semibold hidden sm:inline">
                  Use Arrow Keys ← → to navigate · Esc to close
                </span>
              </div>
              <button
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-yellow-400 hover:text-slate-950 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg font-bold"
                onClick={() => setLightbox(null)}
                title="Close (Esc)"
              >
                <X size={18} />
              </button>
            </div>

            {/* Center Stage Image */}
            <div className="relative flex items-center justify-center flex-1 my-2 overflow-hidden cursor-default">
              <button
                className="absolute left-2 sm:left-6 w-12 h-12 sm:w-14 sm:h-14 bg-slate-900/90 hover:bg-yellow-400 hover:text-slate-950 text-white rounded-full flex items-center justify-center transition-all border border-slate-700 z-30 shadow-2xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((p) => (p - 1 + siteVisitImages.length) % siteVisitImages.length);
                }}
                title="Previous (←)"
              >
                <ChevronLeft size={26} />
              </button>

              <motion.img
                key={lightbox}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', damping: 28, stiffness: 350 }}
                src={siteVisitImages[lightbox]}
                alt={`Site Visit ${lightbox + 1}`}
                className="max-w-[88vw] max-h-[68vh] md:max-h-[72vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                className="absolute right-2 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-slate-900/90 hover:bg-yellow-400 hover:text-slate-950 text-white rounded-full flex items-center justify-center transition-all border border-slate-700 z-30 shadow-2xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((p) => (p + 1) % siteVisitImages.length);
                }}
                title="Next (→)"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            {/* Bottom Thumbnail Strip — 100% Solid & Hidden Scrollbar */}
            <div
              className="w-full max-w-4xl mx-auto flex items-center gap-2 overflow-x-auto py-2.5 px-3.5 bg-slate-900 rounded-2xl border border-slate-800 shrink-0 cursor-default shadow-2xl z-30 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={(e) => e.stopPropagation()}
            >
              {siteVisitImages.map((imgUrl, i) => (
                <button
                  key={i}
                  ref={(el) => (thumbRefs.current[i] = el)}
                  onClick={() => setLightbox(i)}
                  className={`w-14 h-11 sm:w-16 sm:h-12 shrink-0 rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ${
                    lightbox === i
                      ? 'ring-2 ring-yellow-400 border border-yellow-400 scale-105 opacity-100'
                      : 'opacity-50 hover:opacity-100 hover:scale-100 border border-slate-800'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteVisitsScroller;
