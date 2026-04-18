import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Assets
import Partner1 from '../assets/part1.jpg'
import Partner2 from '../assets/part2.jpg'
import Partner3 from '../assets/part3.jpg'
import Partner4 from '../assets/part4.jpg'
import Partner5 from '../assets/part5.jpg'
import Partner6 from '../assets/part6.png'
import Partner7 from '../assets/part7.avif'

const TrustedPartners = () => {
  const containerRef = useRef(null);

  const partners = [
    { id: 1, name: 'L&T', url: Partner1 },
    { id: 2, name: 'Tata Projects', url: Partner2 },
    { id: 3, name: 'UltraTech', url: Partner3 },
    { id: 4, name: 'Reliance', url: Partner4 },
    { id: 5, name: 'Ambuja', url: Partner5 },
    { id: 6, name: 'Shapoorji', url: Partner6 },
    { id: 7, name: 'Shapoorji', url: Partner7 },
  ];

  // Professional Tip: Infinite loop ke liye 3x duplication zaroori hai
  const duplicatedPartners = [...partners, ...partners, ...partners];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Laptop ke liye original parallax rakha hai
  const xMove = useTransform(scrollYProgress, [0, 1], [0, -200]);
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
            <div className="relative w-screen lg:w-full ml-[calc(-50vw+50%)] lg:ml-0 overflow-hidden">
              
              {/* Overlay Fading Effect (Mobile + Desktop) */}
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10"></div>

              <motion.div 
                style={{ x: xMove }}
                className="flex items-center"
              >
                <div className="flex animate-marquee py-6 md:py-10">
                  {duplicatedPartners.map((partner, index) => (
                    <div 
                      key={index} 
                      className="mx-6 md:mx-10 flex-shrink-0 flex items-center justify-center w-28 md:w-36"
                    >
                      <img
                        src={partner.url}
                        alt={partner.name}
                        className="h-10 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
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