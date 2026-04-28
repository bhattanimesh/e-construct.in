import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import VillaImage from '../assets/villa.jpg';

// New assets
import approachVilla from '../assets/approach_villa.png';
import offerVilla from '../assets/offer_villa.webp';
import villaKolkata from '../assets/villa_kolkata.png';
import villaBangalore from '../assets/villa_bangalore.png';
import villaChennai from '../assets/villa_chennai.png';
import villaDelhi from '../assets/villa_delhi.png';
import villaPune from '../assets/villa_pune.png';
import villaMumbai from '../assets/villa_mumbai.png';

const testimonials = [
  { name: "Rahul Deshmukh", role: "Villa Owner", review: "The sheer attention to detail e-Construct brought to my luxury villa project was astounding. They exceeded my grandest expectations." },
  { name: "Anita Shankar", role: "Real Estate Developer", review: "E-construct transformed a bare plot into an absolute masterpiece. Their landscape and interior integration is world-class." },
  { name: "Vikram Chatterjee", role: "Client", review: "The Premium Package was perfectly tailored. Seamless process, zero headaches, and absolute luxury delivered on time." }
];

const LuxuryVilla = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black mt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={VillaImage} 
            alt="Luxury Villa Design" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-sm">Design & Build</span>
            <div className="w-12 h-[2px] bg-[#fbc02d]"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-tight"
          >
            Luxury Villa <br className="hidden md:block"/>
            <span className="accent-text italic">Design & Build</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Premium residential design and execution services focused on delivering bespoke, ultra-luxury villas with unmatched quality and aesthetics.
          </motion.p>
        </div>
      </section>

      {/* 2. Our Approach */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img src={approachVilla} alt="Our Approach" className="w-full h-full object-cover" />
            </motion.div>

            {/* Text Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Our approach</span>
              </div>
              <SectionHeading title="Creative process led by experience" center={false} />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Designing a villa is an artistic endeavor that is led by our experienced Interior Designers.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our designs are reflections of the distinctive personality of each client with prioritizing adequately spacious living areas and elegantly designed interiors.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. What we offer */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
            
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">What we offer</span>
              </div>
              <SectionHeading title="Designs that embrace joy of living & beautiful natural surroundings" center={false} />
              
              <div className="space-y-8 mb-10">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Villa Designs</h3>
                  <p className="text-gray-600 leading-relaxed">End to end villa designs featuring swimming pools, luxury interiors & natural landscaping.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Landscaping</h3>
                  <p className="text-gray-600 leading-relaxed">Aesthetically pleasing & beautiful landscaping compositing proportion, order and unity.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Interior & Exterior</h3>
                  <p className="text-gray-600 leading-relaxed">Simple and functional interior and exterior designs that sit well with your vibrant nature.</p>
                </div>
              </div>

              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#fbc02d] hover:text-slate-900 transition-colors duration-300"
              >
                TALK WITH EXPERTS
              </button>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2"
            >
              <img src={offerVilla} alt="What we offer" className="w-full h-full object-cover" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Explore our designs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%] text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Explore what our designs</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <SectionHeading title="We Will Satisfy You With Our Expertise" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: villaKolkata, city: "Kolkata", title: "Luxury Villa Design" },
              { img: villaBangalore, city: "Bangalore, Karnataka", title: "Luxury Villa Design" },
              { img: villaChennai, city: "Chennai, Tamilnadu", title: "Luxury Villa Design" },
              { img: villaDelhi, city: "Delhi", title: "Luxury Villa Design" },
              { img: villaPune, city: "Pune, Maharashtra", title: "Luxury Villa Design" },
              { img: villaMumbai, city: "Mumbai, Maharashtra", title: "Luxury Villa Design" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.img} alt={`${item.city} - ${item.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-left">
                  <div className="flex items-center gap-2 text-[#fbc02d] mb-1">
                    <MapPin size={16} />
                    <span className="font-medium text-sm">{item.city}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Packages */}
      <section className="py-20 md:py-32 bg-white text-slate-900">
        <div className="max-w-[1500px] mx-auto px-[5%] text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Choose Your Package</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <SectionHeading title="Our Packages" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Premium", price: "1850", isPopular: false },
              { name: "Luxury", price: "2000", isPopular: true },
            ].map((pkg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`rounded-[2rem] p-10 flex flex-col h-full relative bg-slate-900 text-white shadow-xl ${pkg.isPopular ? 'scale-105 border-2 border-[#fbc02d]' : 'border border-gray-800'}`}
              >
                {pkg.isPopular && <div className="absolute top-0 right-10 bg-[#fbc02d] text-slate-900 text-xs font-bold px-4 py-2 rounded-b-xl uppercase tracking-widest">Recommended</div>}
                
                <h3 className="text-3xl font-black mb-4 text-white">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-8">
                  <span className="text-3xl font-bold text-[#fbc02d]">₹</span>
                  <span className="text-6xl font-black">{pkg.price}</span>
                  <span className="text-sm font-medium text-gray-400">/Per Sq.ft</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-grow text-left">
                  {["Designs & Drawings", "Structure", "Kitchen", "Doors & Windows", "Painting", "Flooring", "Electrical", "Miscellaneous"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="text-[#fbc02d]" size={20} />
                      <span className="font-medium text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors duration-300 ${pkg.isPopular ? 'bg-[#fbc02d] text-slate-900 hover:bg-[#d4a017]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                  Know More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Stats Section */}
      <section className="py-24 bg-gradient-to-br from-[#0c2b5e] to-[#061838] text-white relative overflow-hidden border-t-4 border-[#3b82f6]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1d4ed8] opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="max-w-[1500px] mx-auto px-[5%] relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-blue-500/30">
            {[
              { label: "Years Experience", value: "20" },
              { label: "Projects Completed", value: "239" },
              { label: "Happy Clients", value: "560" },
              { label: "Constructions", value: "23" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-5xl md:text-6xl font-black text-[#93c5fd] drop-shadow-lg mb-2">{stat.value}</div>
                <div className="text-[#60a5fa] font-medium tracking-wide uppercase text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-[5%] text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Our Testimonial</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <SectionHeading title="What Our Clients Say" />

          <div className="relative bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-gray-100 mb-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#fbc02d] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <Star size={32} className="text-slate-900 fill-slate-900" />
            </div>

            <motion.div 
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4">
            <button onClick={prevTestimonial} className="w-14 h-14 bg-white text-slate-900 shadow-xl rounded-full flex items-center justify-center hover:bg-[#fbc02d] transition-colors border border-gray-100">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextTestimonial} className="w-14 h-14 bg-slate-900 text-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#fbc02d] hover:text-slate-900 transition-colors border border-slate-900">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <CTASection />
      
    </div>
  );
};

export default LuxuryVilla;
