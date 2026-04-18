import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Home, Building2, Palmtree, Factory, Car, Check, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Projects from '../components/Projects';
import CTASection from '../components/CTASection';
import VillaImage from '../assets/villa.jpg';
import ConstructionServiceHero from '../assets/ProjectManagementConsultancy.jpg';
import C1 from '../assets/c1.jpg';
import C2 from '../assets/c2.jpg';
import C3 from '../assets/c3.jpg';
import C4 from '../assets/c4.jpg';
import C5 from '../assets/c5.jpg';

const reviewsData = [
  {
    name: "Sanjay Sharma",
    role: "Business Owner",
    text: "E-Construct delivered our commercial building exactly on schedule without compromising an ounce of quality. Their structural expertise and professional management team made the entire construction process smooth and stress-free.",
    initial: "S"
  },
  {
    name: "Priya Desai",
    role: "Homeowner",
    text: "Building our dream villa with them was a phenomenal experience. From premium designs to seamless execution, they truly care about their clients.",
    initial: "P"
  },
  {
    name: "Rajeev Menon",
    role: "Project Director",
    text: "Their expertise in road and pavement construction is unmatched. They handled everything transparently, on-time, and within our allocated budget.",
    initial: "R"
  },
  {
    name: "Amit Gupta",
    role: "Industrialist",
    text: "We hired E-Construct for a massive industrial PEB structure. The durability and fast deployment of their manufacturing unit completely exceeded our expectations!",
    initial: "A"
  },
  {
    name: "Neha Verma",
    role: "Property Developer",
    text: "A truly professional contracting team! From architectural planning to the final concrete pours, their supervision is highly commendable.",
    initial: "N"
  }
];

const ServiceDetails = () => {
  const [activeReview, setActiveReview] = useState(0);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black mt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={ConstructionServiceHero} 
            alt="Construction Service Hero" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-sm">Our Expertise</span>
            <div className="w-12 h-[2px] bg-[#fbc02d]"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-tight"
          >
            Construction <span className="accent-text italic">Services</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Whether it's a small residential project or a mega G+81 building, we offer custom solutions based on your needs.
          </motion.p>
        </div>
      </section>

      {/* 2. About the Service / About Us */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Image & Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl relative">
                <img 
                  src={VillaImage} 
                  alt="about construction service,econstruct,econstruct consultancy" 
                  className="w-full h-full object-cover" 
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>
              
              {/* Floating Stat Card 1 */}
              <div className="absolute -bottom-10 left-10 md:-left-10 bg-[#fbc02d] p-8 rounded-3xl min-w-[200px] shadow-2xl border-4 border-white flex flex-col justify-center items-center">
                <div className="text-black font-black text-5xl mb-1">250<span className="text-3xl">+</span></div>
                <div className="text-black text-xs font-bold uppercase tracking-wider text-center">Projects Completed</div>
              </div>

               {/* Floating Stat Card 2 */}
              <div className="absolute top-10 -right-5 md:-right-10 bg-slate-900 p-8 rounded-3xl min-w-[180px] shadow-2xl border-4 border-white flex flex-col justify-center items-center text-white">
                <div className="text-[#fbc02d] font-black text-5xl mb-1">22</div>
                <div className="text-white text-xs font-bold uppercase tracking-wider text-center">Years Experience</div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mt-12 lg:mt-0"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 leading-tight tracking-tight">
                Let us build your <br />
                <span className="accent-text italic">dream home.</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
                We are a leading consultancy and contracting company in India that has executed construction work for some of the most significant projects in the country. We continue to alter the structural landscape through several other prestigious projects in the residential, commercial, and Institutional space.
              </p>
              
              <button className="group relative inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/20">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <span className="relative z-10">Get Free Project Estimate</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. What We Offer / Our Expertise */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight">
                Construction <span className="accent-text italic">Services</span>
              </h2>
            </div>
            
            <button className="flex items-center gap-3 px-8 py-4 border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-bold uppercase text-xs tracking-widest rounded-xl transition-colors w-max">
              Get In Touch <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Residential Construction", 
                desc: "Want to build your dream home? We have executed over 200+ residential projects. From planning to execution we take care of all construction needs.", 
                icon: <Home size={32} /> 
              },
              { 
                title: "Commercial Construction", 
                desc: "From Multi unit apartments, individual commercial complexes to high rise mega structures our team is well equipped to manage your construction needs.", 
                icon: <Building2 size={32} /> 
              },
              { 
                title: "Villa Construction", 
                desc: "Individual villa constitution services with premium designs, landscaping, interior and exteriors suited to reflect your personality.", 
                icon: <Palmtree size={32} /> 
              },
              { 
                title: "Factories & Industries", 
                desc: "Steel PEB structures that are engineered for faster and durable deployment. Experts in Industrial warehouses, small manufacturing Buildings & storage units.", 
                icon: <Factory size={32} /> 
              },
              { 
                title: "Road Construction", 
                desc: "Asphalt roads, CC roads, pavements and smart footpaths - We provide end to end construction services with planning, estimate and supervision of your project.", 
                icon: <Car size={32} /> 
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 py-12 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbc02d]/5 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
                
                <div className="relative z-10 w-20 h-20 bg-[#fbc02d]/10 rounded-2xl flex items-center justify-center text-[#fbc02d] mb-8 group-hover:bg-[#fbc02d] group-hover:text-black transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="relative z-10 text-2xl font-black text-slate-900 mb-5 leading-tight">{feature.title}</h3>
                <p className="relative z-10 text-gray-600 leading-relaxed">{feature.desc}</p>
                
                {/* Learn More link on Hover */}
                <div className="relative z-10 mt-8 flex items-center gap-2 text-[#fbc02d] font-bold uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  Discuss Project <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Projects Gallery */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
              <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Portfolio</span>
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
              Our <span className="accent-text italic">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[C1, C2, C3, C4].map((imgSrc, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-lg cursor-pointer flex-shrink-0"
              >
                <img 
                  src={imgSrc} 
                  alt={`Construction Project ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-10 left-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#fbc02d] rounded-2xl flex items-center justify-center text-slate-900">
                    <ArrowRight size={24} />
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-black uppercase">Project {idx + 1}</h3>
                    <p className="text-gray-300 text-sm uppercase tracking-widest font-bold">View Details</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-[#fbc02d] hover:text-slate-900 transition-colors duration-300 shadow-xl">
              View All Projects <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Client Reviews Section */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Reviews Side (Left) */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-10 leading-tight tracking-tight">
                What Our <br />
                <span className="accent-text italic">Clients Say</span>
              </h2>

              <div className="bg-white p-10 md:p-14 rounded-tl-[3rem] rounded-br-[3rem] shadow-xl relative border border-gray-100 min-h-[350px] flex flex-col justify-between">
                <div className="absolute top-10 right-10 text-gray-100 opacity-50">
                  <Quote size={80} />
                </div>
                
                <div className="flex text-yellow-400 mb-6 gap-1 relative z-10 w-max">
                  {"★★★★★".split('').map((star, i) => <span key={i} className="text-xl">{star}</span>)}
                </div>
                
                <div className="relative z-10 flex-grow">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeReview}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium mb-10 italic">
                        "{reviewsData[activeReview].text}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-[#fbc02d] font-black text-xl flex-shrink-0">
                          {reviewsData[activeReview].initial}
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 text-lg uppercase tracking-wider">{reviewsData[activeReview].name}</h4>
                          <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{reviewsData[activeReview].role}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slider Controls */}
                <div className="absolute -bottom-6 right-10 flex gap-2 z-20">
                  <button onClick={prevReview} className="w-12 h-12 bg-white text-slate-900 shadow-xl rounded-full flex items-center justify-center hover:bg-[#fbc02d] transition-colors border border-gray-100">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextReview} className="w-12 h-12 bg-slate-900 text-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#fbc02d] hover:text-slate-900 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Image Side (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl relative group">
                <img 
                  src={C5} 
                  alt="Construction Site Review" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Element */}
                <div className="absolute bottom-8 right-8 bg-[#fbc02d] p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm flex items-center gap-4 animate-bounce hover:animate-none">
                  <div className="bg-white text-slate-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    5/5
                  </div>
                  <div>
                    <div className="font-black text-slate-900 uppercase">Top Rated</div>
                    <div className="text-slate-800 text-xs font-bold tracking-wider">Contractor</div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. CTA Section (Reused) */}
      <CTASection />

    </div>
  );
};

export default ServiceDetails;
