import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image1 from '../assets/img1.jpg';
import Image2 from '../assets/img2.jpg';
import Logo from '../assets/logo.webp';
import TextBG from '../assets/textbg.png';

const About = () => {
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
                src={Image1} 
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
                src={Image2} 
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
              <span className="text-3xl md:text-5xl font-extrabold leading-none">20+</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center mt-1">
                Years of <br /> Excellence
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
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] md:leading-tight">
              EConstruct Design and <br className="hidden md:block"/> Building Pvt. Ltd.
            </h2>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              ECONSTRUCT is a premier Indian consultancy and contracting firm dedicated to redefining residential and commercial spaces. Operating with global benchmarks of transparency, reliability, and sustainability.
            </p>

            {/* Features List - Optimized for Mobile (1 col) and Desktop (2 col) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 w-full pt-2">
              {[
                "Structural Design & Audit",
                "Project Management (PMC)",
                "Corporate Technical Training",
                "Quality Assurance Solutions",
                "Innovative Construction Tech",
                "On-Time Project Delivery"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-0.5 group-hover:bg-black transition-colors duration-300">
                    <CheckCircle className="text-white h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  <span className="text-gray-800 font-semibold text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 md:px-10 py-4 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl transition-all duration-500 uppercase tracking-wider text-sm md:text-base active:scale-95">
                Learn More About Us
              </button>
            </div>
          </motion.div>

        </div>

        {/* --- Why Complete Construction Solutions --- */}
        <div className="mt-24 md:mt-32 w-full border-t border-gray-100 pt-16 md:pt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why Complete Construction <br className="hidden md:block"/> Solutions Under One Roof Help You
            </h3>
            <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Seamless Coordination", desc: "Smooth communication between all project stages" },
              { title: "Faster Decision-Making", desc: "Quick approvals with a single responsible team" },
              { title: "Reduced Errors", desc: "Better coordination minimizes design and site mistakes" },
              { title: "Design-to-Execution Clarity", desc: "No confusion between drawings and execution" },
              { title: "Optimized Resource Use", desc: "Efficient use of materials, labor, and time" },
              { title: "Transparency", desc: "Clear communication on cost, timeline, and progress" },
              { title: "Customized Solutions", desc: "Designs tailored to your needs and budget" },
              { title: "Higher Efficiency", desc: "Streamlined workflow improves overall productivity" },
              { title: "Risk Reduction", desc: "Early-stage planning avoids future complications" },
              { title: "Quality Control at Every Stage", desc: "Continuous monitoring ensures standards" },
              { title: "Better Project Tracking", desc: "Easy monitoring of progress and milestones" },
              { title: "Professional Expertise", desc: "Access to experienced designers and engineers" },
              { title: "On-Time Delivery", desc: "Better planning ensures timely completion" },
              { title: "Value Engineering", desc: "Smart design decisions to save cost without compromising quality" }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex-shrink-0 bg-yellow-50 rounded-xl h-12 w-12 flex items-center justify-center">
                  <CheckCircle className="text-yellow-600 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{item.desc}</p>
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