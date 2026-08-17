import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.webp';
import TextBG from '../assets/textbg.png';
import SectionHeading from './SectionHeading';
import { useAdmin } from '../context/AdminContext';

const About = () => {
  const { data } = useAdmin();
  const ac = data.aboutContent;
  const navigate = useNavigate();
  // Use admin-configured images, fall back to bundled assets
  const image1 = ac.image1 || '/i1.jpeg';
  const image2 = ac.image2 || '/i2.jpeg';
  const targetRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile to adjust animations
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Mobile par parallax values ko kam ya zero rakha hai for stability
  const yImage1 = useTransform(smoothProgress, [0, 1], isMobile ? [0, 0] : [-30, 30]);
  const yImage2 = useTransform(smoothProgress, [0, 1], isMobile ? [0, 0] : [50, -50]);
  const yBadge = useTransform(smoothProgress, [0, 1], isMobile ? [0, 0] : [-60, 60]);
  const yText = useTransform(smoothProgress, [0, 1], isMobile ? [0, 0] : [20, -20]);

  return (
    <section ref={targetRef} className="py-12 md:py-20 lg:py-24 overflow-hidden bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* --- Left Side: Dynamic Image Collage --- */}
          <div className="w-full lg:w-1/2 relative h-[450px] sm:h-[550px] md:h-[600px]">

            {/* 1. Main Background Image (Image 1) */}
            <motion.div
              style={{ y: yImage1 }}
              className="absolute top-0 left-0 w-[65%] h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-2xl z-0"
            >
              <img
                src={image1}
                alt="Construction Planning"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 2. Secondary Overlapping Image (Image 2) */}
            <motion.div
              style={{ y: yImage2 }}
              className="absolute bottom-4 right-0 w-[75%] h-[300px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-2xl z-10 "
            >
              <img
                src={image2}
                alt="Civil Engineering Site"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* 3. Floating Logo Badge (Top Right) */}
            <motion.div
              style={{ y: yBadge }}
              className="absolute top-10 right-4 md:right-10 bg-white p-3 md:p-5 rounded-2xl border border-gray-200 z-20 flex items-center justify-center"
            >
              <div className="w-16 h-10 md:w-24 md:h-16">
                <img
                  src={Logo}
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* 4. Years of Experience Badge (Bottom Left) */}
            <motion.div
              style={{
                y: yBadge,
                backgroundImage: `url(${TextBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="absolute bottom-10 left-0 md:left-4 z-20 p-5 md:p-8 flex flex-col items-center justify-center text-black"
            >
              <span className="text-3xl md:text-5xl font-extrabold leading-none">{ac.yearsLabel}</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center mt-1">
                {ac.yearsSubLabel.split(' ').slice(0, 2).join(' ')} <br /> {ac.yearsSubLabel.split(' ').slice(2).join(' ')}
              </span>
            </motion.div>

          </div>

          {/* --- Right Side: Company Content --- */}
          <motion.div
            style={{ y: yText }}
            className="w-full lg:w-1/2 flex flex-col items-start space-y-5 md:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 text-yellow-700 font-bold text-xs md:text-sm rounded-full uppercase tracking-wider border border-yellow-200">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              Welcome to
            </div>

            <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight tracking-tight">
              {ac.headline.split(' ').slice(0, 3).join(' ')} <br className="hidden md:block" /> <span className="accent-text italic">{ac.headline.split(' ').slice(3).join(' ')}</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {ac.paragraph1}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 w-full pt-2">
              {ac.featuresList.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-0.5 group-hover:bg-black transition-colors duration-300">
                    <CheckCircle className="text-white h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <span className="text-gray-800 font-semibold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 w-full sm:w-auto">
              <button onClick={() => navigate('/about')} className="w-full sm:w-auto px-8 md:px-10 py-4 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl transition-all duration-500 uppercase tracking-wider text-sm md:text-base active:scale-95">
                Learn More About Us
              </button>
            </div>
          </motion.div>

        </div>

        {/* --- Why Complete Engineering Solutions --- */}
        <div className="mt-16 md:mt-24 w-full border-t border-gray-100 pt-12 md:pt-16">
          <div className="text-center mb-10 md:mb-12">
            <SectionHeading title="Why EConstruct" />
            <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {ac.whyUsItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 sm:p-4.5 lg:p-[18px] rounded-xl bg-white border border-gray-100 shadow-[0_3px_16px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex-shrink-0 bg-yellow-50 rounded-lg w-[38px] h-[38px] flex items-center justify-center">
                  <CheckCircle className="text-yellow-600 h-[19px] w-[19px]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm md:text-[14.5px] mb-0.5 leading-snug">{item.title}</h4>
                  <p className="text-xs md:text-[12.5px] text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;