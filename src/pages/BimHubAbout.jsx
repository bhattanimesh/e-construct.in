import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Rocket, GraduationCap, BookOpen } from 'lucide-react';
import FoundersSection from '../components/FoundersSection';

const stats = [
  { value: "352+", label: "Projects Completed" },
  { value: "52+", label: "Staff and Team" },
  { value: "567+", label: "Satisfied Clients" },
  { value: "18+", label: "Awards Won" }
];

const certifications = [
  { img: "/ct1.png", label: "ISO Certification" },
  { img: "/ct2.png", label: "Skill India Certification" },
  { img: "/ct3.png", label: "MSME Certification" }
];

const visionCards = [
  {
    icon: <PenTool className="w-8 h-8 text-white relative z-10" />,
    title: "Innovative Designs & Services",
    description: "To strengthen our position as a Leading Engineering consultancy & Contracting Company."
  },
  {
    icon: <Rocket className="w-8 h-8 text-white relative z-10" />,
    title: "Cutting-Edge Technology",
    description: "To research and develop sustainable eco-friendly construction products and solutions."
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-white relative z-10" />,
    title: "Produce world-class civil engineers",
    description: "Provide mentorship to produce highly employable civil engineering professionals."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white relative z-10" />,
    title: "Revolutionize education system",
    description: "Progressive education"
  }
];

const BimHubAbout = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-start">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/prj3.webp')` }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            About <span className="text-[#fbc02d] drop-shadow-md">Us</span>
          </h1>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
        
        {/* Top: Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-24">
          
          {/* Left Side: Founder Image (Swapped) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[500px] aspect-[3/4] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/founder_about.webp" 
                alt="Company Founder" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 border-[10px] border-white/20 rounded-3xl pointer-events-none"></div>
              
              {/* Overlay Gradient for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8">
                <span className="block text-[#fbc02d] font-bold uppercase tracking-widest text-xs mb-1">Visionary</span>
                <span className="block text-white font-medium text-2xl font-serif italic">Our Founder</span>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute -z-10 top-10 -left-10 w-full max-w-[500px] h-full border-2 border-[#fbc02d]/50 rounded-3xl hidden md:block"></div>
          </motion.div>

          {/* Right Side: Text Content (Swapped) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-[#fbc02d]"></span>
              <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">
                BIM HUB • About Us
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-8">
              Building the Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc02d] to-yellow-600">With Integrity</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed text-base sm:text-lg text-justify">
              <p>
                <strong>ECONSTRUCT Design & Build Pvt Ltd</strong> is a leading consultancy and contracting company in India that has executed construction work for some of the most significant projects in the country. We continue to alter the structural landscape through several other prestigious projects in the residential, commercial, and institutional space.
              </p>
              <p>
                We believe in exceeding clients’ expectations by operating at par with global benchmarks for transparency, reliability, and integrity. A commitment to sustainable development, safety, and environmental protection forms the genesis of our culture.
              </p>
              <p>
                Our clients value our allegiance to quality, timely deliveries, superior customer service, and the experience of engaging in business with a highly qualified and experienced management. After creating our mark on the Mumbai landscape, we expanded to Bangalore, Tumkur, and Mysore.
              </p>
              <p>
                ECONSTRUCT is committed to maintaining the highest standards of business conduct and corporate governance. We believe this is essential for operating a successful business, serving our shareholders, and maintaining our integrity in the marketplace.
              </p>
            </div>
            
            <button className="mt-10 px-8 py-4 bg-[#fbc02d] hover:bg-black hover:text-[#fbc02d] text-black font-bold uppercase tracking-wider text-sm rounded-lg transition-colors duration-300 shadow-md">
              Discover More
            </button>
          </motion.div>

        </div>

        {/* Bottom: Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 p-8 sm:p-10 text-center rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-[#fbc02d]/30 transition-all duration-300 group"
            >
              <h3 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 group-hover:text-[#fbc02d] transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-xs sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-24">
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="w-10 h-[2px] bg-[#fbc02d]"></span>
            <h2 className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm">
              Our Certifications
            </h2>
            <span className="w-10 h-[2px] bg-[#fbc02d]"></span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-8 sm:p-10 text-center rounded-2xl shadow-sm hover:-translate-y-2 hover:shadow-xl hover:border-[#fbc02d]/30 transition-all duration-300 group flex flex-col items-center justify-center"
              >
                <div className="w-40 h-40 md:w-48 md:h-48 mb-6 bg-white rounded-xl shadow-inner p-4 flex items-center justify-center">
                  <img src={cert.img} alt={cert.label} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#fbc02d] transition-colors duration-300">
                  {cert.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mt-32 w-full max-w-[1400px] mx-auto pb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbc02d] to-yellow-600">Vision</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 font-medium">
              To be a World-Class Construction Company committed to total customer satisfaction, by building on our strengths
            </p>
          </div>

          {/* 2x2 Grid for Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {visionCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-3xl p-8 sm:p-10 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#fbc02d] opacity-5 rounded-full blur-[40px] transform translate-x-10 -translate-y-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 border border-gray-700/50 group-hover:scale-110 group-hover:border-[#fbc02d]/50 transition-all duration-300 relative shadow-sm">
                  <div className="absolute inset-0 bg-[#fbc02d] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                  {card.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#fbc02d] mb-4">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>

      {/* Meet Our Founders Section (Inherited from Home) */}
      <div className="pb-20 border-t border-gray-100 pt-20">
        <FoundersSection />
      </div>

    </div>
  );
};

export default BimHubAbout;
