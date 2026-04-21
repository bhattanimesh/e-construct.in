import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Building2, Home, Factory, Map, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import CTASection from '../components/CTASection';

// Original Assets (preserved)
import csHero from '../assets/cs_hero.webp';
import csPort1 from '../assets/cs_port1.jpg';
import csPort2 from '../assets/cs_port2.jpg';
import csPort3 from '../assets/cs_port3.webp';

// New Architecture
import csArchN1 from '../assets/cs_arch_n1.png';
import csArchN2 from '../assets/cs_arch_n2.png';
import csArchN3 from '../assets/cs_arch_n3.png';
import csArchN4 from '../assets/cs_arch_n4.png';
import csArchN5 from '../assets/cs_arch_n5.png';

// Electrical
import csElec1 from '../assets/cs_elec_1.png';
import csElec2 from '../assets/cs_elec_2.png';
import csElec3 from '../assets/cs_elec_3.png';
import csElec4 from '../assets/cs_elec_4.png';
import csElec5 from '../assets/cs_elec_5.png';

// Plumbing
import csPlumb1 from '../assets/cs_plumb_1.png';
import csPlumb2 from '../assets/cs_plumb_2.png';
import csPlumb3 from '../assets/cs_plumb_3.png';
import csPlumb4 from '../assets/cs_plumb_4.png';
import csPlumb5 from '../assets/cs_plumb_5.png';
import csPlumb6 from '../assets/cs_plumb_6.png';

// Elevation
import csElev1 from '../assets/cs_elev_1.jpg';
import csElev2 from '../assets/cs_elev_2.jpg';
import csElev3 from '../assets/cs_elev_3.jpg';
import csElev4 from '../assets/cs_elev_4.jpg';
import csElev5 from '../assets/cs_elev_5.jpg';
import csElev6 from '../assets/cs_elev_6.png';

// Interior
import csInt1 from '../assets/cs_int_1.jpg';
import csInt2 from '../assets/cs_int_2.jpg';
import csInt3 from '../assets/cs_int_3.jpg';
import csInt4 from '../assets/cs_int_4.jpg';
import csInt5 from '../assets/cs_int_5.jpg';
import csInt6 from '../assets/cs_int_6.jpg';


// Reusable Horizontal Image Slider Component
const HorizontalSlider = ({ title, subtitle, images, reverseBg = false }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const maxSlide = images.length - 1;

  const nextSlide = () => setActiveSlide(prev => (prev < maxSlide ? prev + 1 : 0));
  const prevSlide = () => setActiveSlide(prev => (prev > 0 ? prev - 1 : maxSlide));

  return (
    <section className={`py-16 md:py-24 ${reverseBg ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}>
      <div className="max-w-[1500px] mx-auto px-[5%] text-center">
        
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">{subtitle}</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
            {title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative group">
          <div className="aspect-[4/3] md:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-xl border border-gray-200 bg-white relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeSlide}
                src={images[activeSlide]} 
                alt={`${title} Slide ${activeSlide + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full object-contain p-4 md:p-8"
                loading="lazy"
              />
            </AnimatePresence>
          </div>
          
          <button 
             onClick={prevSlide}
             className="absolute left-[-1.5rem] md:left-[-3rem] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center bg-white text-slate-600 hover:bg-[#fbc02d] hover:text-slate-900 hover:border-[#fbc02d] transition-colors shadow-lg z-10"
             disabled={activeSlide === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
             onClick={nextSlide}
             className="absolute right-[-1.5rem] md:right-[-3rem] top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center bg-white text-slate-600 hover:bg-[#fbc02d] hover:text-slate-900 hover:border-[#fbc02d] transition-colors shadow-lg z-10"
             disabled={activeSlide === maxSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dotted pagination */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {images.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`transition-all duration-300 rounded-full ${activeSlide === idx ? 'w-10 h-3 bg-[#fbc02d]' : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};


const ConstructionServices = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    { name: "Kiran Rao", role: "Homeowner", review: "E-Construct translated our rough ideas into a stunning reality. Their interior planning and structural execution is just phenomenal." },
    { name: "Ashwin Patil", role: "Real Estate Investor", review: "We hired E-Construct for a multi-unit project. Best decision ever. Delivered well ahead of time with zero compromise on the materials." },
    { name: "Samantha D'Souza", role: "Client", review: "From transparent pricing to magnificent architectural designs and road integrations. They truly do it all!" }
  ];

  const nextTesti = () => setActiveTestimonial(prev => (prev + 1) % testimonials.length);
  const prevTesti = () => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full bg-white mt-20">
      
      {/* 1. About Us / Let Us Build */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-100 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">About Us</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-medium text-slate-900 mb-6 leading-tight tracking-tight">
                Let us build your <span className="accent-text italic">dream home.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We are a leading consultancy and contracting company in India that has executed construction work for some of the most significant projects in the country. We continue to alter the structural landscape through several other prestigious projects in the residential, commercial, and Institutional space.
              </p>
              
              <div className="flex flex-wrap gap-8 items-center border-l-4 border-[#fbc02d] pl-6 py-2 mb-10">
                <div className="flex flex-col">
                  <div className="flex items-baseline text-slate-900 gap-1">
                    <span className="text-4xl font-black">250</span>
                    <span className="text-2xl font-bold text-[#fbc02d]">+</span>
                  </div>
                  <span className="text-gray-500 font-medium uppercase text-xs tracking-widest">Projects Completed</span>
                </div>
                <div className="h-10 w-px bg-gray-300"></div>
                <div className="flex flex-col">
                  <div className="flex items-baseline text-slate-900 gap-1">
                    <span className="text-4xl font-black">22</span>
                  </div>
                  <span className="text-gray-500 font-medium uppercase text-xs tracking-widest">Years Experience</span>
                </div>
              </div>

              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#fbc02d] hover:text-slate-900 transition-colors duration-300 shadow-xl"
              >
                Get Free Project Estimate
              </button>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img src={csHero} alt="Construction Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Our Expertise */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">
                Construction <span className="accent-text italic">Services</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether it’s a small residential project or a mega g+81 building, we offer custom solutions based on your needs.
              </p>
            </div>
            
            <button 
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center gap-4 bg-white/5 border border-slate-200 text-slate-800 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#fbc02d] hover:border-[#fbc02d] hover:text-slate-900 transition-colors duration-300"
            >
              Get in touch <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Residential construction", 
                desc: "Want to build your dream home? We have executed over 200+ residential projects. From planning to execution we take care of all construction needs.", 
                icon: <Home size={32} strokeWidth={1.5} /> 
              },
              { 
                title: "Commercial construction", 
                desc: "From Multi unit apartments, individual commercial complexes to high rise mega structures our team is well equipped to manage your construction needs.", 
                icon: <Building2 size={32} strokeWidth={1.5} /> 
              },
              { 
                title: "Villa construction", 
                desc: "Individual villa constitution services with premium designs, landscaping, interior and exteriors suited to reflect your personality.", 
                icon: <HardHat size={32} strokeWidth={1.5} /> 
              },
              { 
                title: "Factories and Industries", 
                desc: "Steel PEB structures that are engineered for faster and durable deployment. Experts in Industrial warehouses, small manufacturing Buildings & storage units.", 
                icon: <Factory size={32} strokeWidth={1.5} /> 
              },
              { 
                title: "Road construction", 
                desc: "Asphalt roads, CC roads, pavements and smart footpaths - We provide end to end construction services with planning, estimate and supervision of your project.", 
                icon: <Map size={32} strokeWidth={1.5} /> 
              }
            ].map((srv, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-10 rounded-[2rem] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-900 mb-8 border border-gray-100 group-hover:bg-[#fbc02d] transition-colors shadow-sm">
                  {srv.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{srv.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Portfolio */}
      <section className="py-20 md:py-32 bg-slate-900 text-white">
        <div className="max-w-[1500px] mx-auto px-[5%] text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Portfolio</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16">
            Take a look at <span className="accent-text italic">our portfolio</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[csPort1, csPort2, csPort3].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden group"
              >
                <img src={img} alt={`Portfolio ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Various Dynamic Sliders */}
      <HorizontalSlider title={<span>Architectural <span className="accent-text italic">Planning</span></span>} subtitle="Planning" images={[csArchN1, csArchN2, csArchN3, csArchN4, csArchN5]} />
      
      <HorizontalSlider title={<span>Electrical <span className="accent-text italic">Designs</span></span>} subtitle="Power" images={[csElec1, csElec2, csElec3, csElec4, csElec5]} reverseBg={true} />
      
      <HorizontalSlider title={<span>Plumbing <span className="accent-text italic">Designs</span></span>} subtitle="Piping" images={[csPlumb1, csPlumb2, csPlumb3, csPlumb4, csPlumb5, csPlumb6]} />
      
      <HorizontalSlider title={<span>Elevation <span className="accent-text italic">Designs</span></span>} subtitle="Structure" images={[csElev1, csElev2, csElev3, csElev4, csElev5, csElev6]} reverseBg={true} />
      
      <HorizontalSlider title={<span>Interior <span className="accent-text italic">Designs</span></span>} subtitle="Insideout" images={[csInt1, csInt2, csInt3, csInt4, csInt5, csInt6]} />

      {/* Client Reviews */}
      <section className="py-20 md:py-32 bg-white border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-[5%] text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Our Testimonials</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-20">
            Client <span className="accent-text italic">Reviews</span>
          </h2>

          <div className="relative bg-gray-50 rounded-[3rem] p-10 md:p-16 shadow-lg border border-gray-100 mb-12 mt-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#fbc02d] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <Star size={32} className="text-slate-900 fill-slate-900" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <p className="text-xl md:text-3xl text-slate-700 leading-relaxed font-serif italic mb-10">
                  "{testimonials[activeTestimonial].review}"
                </p>
                <div>
                  <p className="font-bold text-slate-900 text-lg uppercase tracking-widest mb-1">{testimonials[activeTestimonial].name}</p>
                  <p className="text-[#fbc02d] font-medium">{testimonials[activeTestimonial].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button onClick={prevTesti} className="w-14 h-14 bg-white text-slate-900 shadow-xl rounded-full flex items-center justify-center hover:bg-[#fbc02d] transition-colors border border-gray-100">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextTesti} className="w-14 h-14 bg-slate-900 text-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#fbc02d] hover:text-slate-900 transition-colors border border-slate-900">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
    </div>
  );
};

export default ConstructionServices;
