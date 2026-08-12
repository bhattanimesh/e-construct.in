import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

// Video served from public/ — not bundled, streamed directly by the browser
const HERO_VIDEO = '/hero.mp4';

const Hero = () => {
  const { data } = useAdmin();
  const h = data.heroContent;
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);
  const { scrollY } = useScroll();

  // Smooth Spring for Parallax — disabled on mobile for performance
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothScrollY = useSpring(scrollY, springConfig);

  const isMobileHero = typeof window !== 'undefined' && window.innerWidth < 768;

  // Parallax Values — reduced on mobile
  const backgroundY = useTransform(smoothScrollY, [0, 1000], isMobileHero ? [0, 0] : [0, 150]);
  const textY = useTransform(smoothScrollY, [0, 1000], isMobileHero ? [0, 0] : [0, -100]);
  const opacity = useTransform(smoothScrollY, [0, 500], [1, 0]);

  // Entrance Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="relative w-full min-h-[100dvh] lg:h-[685px] overflow-hidden bg-[#0a0a0a]">

      {/* --- BACKGROUND LAYER --- */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full scale-125"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-[0.8] contrast-[1.1]"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Overlays - Reduced intensity to make video pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden md:block"></div>
        <div className="absolute inset-0 bg-black/10 md:hidden"></div>
      </motion.div>

      {/* --- CONTENT LAYER --- */}
      {/* max-w-[1400px] applied, mx-auto removed as requested */}
      <div className="relative z-10 h-[100dvh] lg:h-full w-full lg:max-w-[1400px] px-5 sm:px-10 flex flex-col justify-end pb-20 md:pb-16 lg:pb-24">

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          style={{ y: textY, opacity }}
          className="w-full lg:max-w-4xl"
        >
          {/* Tagline */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-yellow-500"></span>
            <span className="text-yellow-500 uppercase tracking-[0.3em] text-[10px] md:text-sm font-bold">
              {h.tagline}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-[32px] leading-[1.05] sm:text-5xl md:text-7xl lg:text-[100px] xl:text-[110px] font-medium text-white tracking-tight"
          >
            {h.headline.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="accent-text italic">{h.headline.split(' ').slice(-1)[0]}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 md:mt-6 max-w-lg text-sm md:text-lg lg:text-xl text-gray-300 font-normal leading-relaxed"
          >
            {h.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
          >
            <button onClick={() => navigate('/contact')} className="group relative px-8 py-4 bg-yellow-500 overflow-hidden transition-all active:scale-95">
              <span className="relative z-10 text-black font-black uppercase tracking-wider text-sm">
                {h.primaryBtnText}
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <button onClick={() => navigate('/projects')} className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider text-sm backdrop-blur-md hover:bg-white hover:text-black transition-all active:scale-95">
              {h.secondaryBtnText}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Progress Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 z-20"
      ></motion.div>

      {/* Subtle Scroll Indicator for Mobile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:hidden">
        <div className="w-[1px] h-8 bg-gradient-to-b from-yellow-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;