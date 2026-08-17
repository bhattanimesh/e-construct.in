import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useAdmin } from '../context/AdminContext';

const TrustedPartners = () => {
  const { data } = useAdmin();
  const partners = data.trustedPartners;
  const containerRef = useRef(null);

  // Professional Tip: Infinite loop ke liye 3x duplication zaroori hai
  const duplicatedPartners = [...partners, ...partners, ...partners];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Laptop ke liye original parallax rakha hai
  const xMove = useTransform(scrollYProgress, [0, 1], [0, 0]); // disabled — causes jank on mobile
  const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section 
      ref={containerRef}
      className="bg-white py-6 md:py-10 border-b border-gray-100 overflow-hidden"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* --- Left Content (Heading) --- */}
          <motion.div 
            style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? yText : 0 }}
            className="w-full lg:w-[30%] flex flex-col items-start text-left"
          >
            <h2 className="text-2xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight">
              We Already <br className='hidden md:block'/>
              <span className="accent-text italic">Worked With</span>
            </h2>
            
            <div className="mt-3 w-24 md:w-40 h-1.5 bg-yellow-500 rounded-full"></div>
            <p className="mt-5 text-gray-500 text-sm md:text-base font-medium max-w-xs">
              Trusted by industry leaders for quality and excellence.
            </p>
          </motion.div>

          {/* --- Right Content (Full Width Marquee on Mobile) --- */}
          <div className="w-full lg:w-[70%] relative">
            
            {/* 
               BREAK-OUT WRAPPER: 
               Mobile par screen ki full width (w-screen) lene ke liye 
               negative margin ka use kiya gaya hai.
            */}
            <div className="relative w-full overflow-hidden">
              
              {/* Overlay Fading Effect (Mobile + Desktop) */}
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

              <motion.div 
                style={{ x: xMove }}
                className="flex items-center"
              >
                <div className="flex animate-marquee py-8 md:py-12 items-center">
                  {duplicatedPartners.map((partner, index) => (
                    <div 
                      key={index} 
                      className="mx-8 md:mx-12 flex-shrink-0 flex items-center justify-center w-40 md:w-48 relative"
                    >
                      <img
                        src={partner.url}
                        alt={partner.name}
                        loading="lazy"
                        decoding="async"
                        className="h-14 md:h-20 lg:h-[78px] w-auto max-w-full object-contain mix-blend-multiply opacity-85 hover:opacity-100 hover:scale-[1.40] transition-all duration-300 ease-out cursor-pointer relative z-10 hover:z-30"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default TrustedPartners;