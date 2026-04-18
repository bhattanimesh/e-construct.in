import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Box, Calendar, DollarSign, Leaf, Settings, ShieldAlert, TrendingUp, Layers, PenTool, MonitorPlay, Users, Award, Clock, Quote, ChevronLeft, ChevronRight, Check, Mail, Phone, MapPin, Facebook, Youtube, MessageCircle, Linkedin } from 'lucide-react';
import CTASection from '../components/CTASection';
import ConstructionServiceHero from '../assets/ProjectManagementConsultancy.jpg';
import GpMetricsImage from '../assets/gp.png';
import S1 from '../assets/s1.jpg';
import S2 from '../assets/s2.jpg';
import S3 from '../assets/s3.webp';
import S4 from '../assets/s4.jpg';
import S5 from '../assets/s5.jpg';
import S6 from '../assets/s6.jpg';

const bimSectors = [
  { img: S1, title: "Commercial", desc: "Office buildings, retail centers, hotels, and mixed-use developments with complex systems integration and space optimization." },
  { img: S2, title: "Residential", desc: "Single-family homes, multi-family complexes, and high-rise residential buildings with optimized space planning and MEP coordination." },
  { img: S3, title: "Industrial", desc: "Manufacturing facilities, warehouses, and distribution centers with optimized workflows and equipment integration." },
  { img: S4, title: "Hospital", desc: "Healthcare facilities, educational buildings, and government structures with complex regulatory requirements and specialized systems." },
  { img: S5, title: "Infrastructure", desc: "Bridges, highways, tunnels, and transportation hubs with complex structural systems and phased construction planning." },
  { img: S6, title: "Renovation / Retrofit", desc: "Building renovations, historic preservation, and adaptive reuse projects with existing conditions modeling and phased implementation." }
];

const bimDimensions = [
  { id: "1D & 2D", title: "1D & 2D Plans", desc: "Comprehensive documentation and traditional 2D plans enhanced with BIM data for better project understanding.", icon: <PenTool size={32}/> },
  { id: "3D", title: "3D BIM Modeling", desc: "Detailed 3D models with rich data that enable visualization, coordination, and analysis of building components.", icon: <Box size={32}/> },
  { id: "4D", title: "4D Time Planning", desc: "Integrate construction schedules with 3D models to visualize and optimize the construction sequence over time.", icon: <Calendar size={32}/> },
  { id: "5D", title: "5D Cost Analysis", desc: "Link cost data to BIM elements for accurate cost estimation, budgeting, and financial forecasting.", icon: <DollarSign size={32}/> },
  { id: "6D", title: "6D Sustainability", desc: "Analyze energy performance and environmental impact to create more sustainable building designs.", icon: <Leaf size={32}/> },
  { id: "7D", title: "7D Facility Management", desc: "Leverage BIM data for efficient operations and maintenance throughout the building's lifecycle.", icon: <Settings size={32}/> },
  { id: "8D", title: "8D Safety", desc: "Identify and mitigate safety hazards during design and construction phases with BIM-based safety planning.", icon: <ShieldAlert size={32}/> },
  { id: "9D", title: "9D Lean Construction", desc: "Optimize workflows and eliminate waste through lean construction methodologies integrated with BIM.", icon: <TrendingUp size={32}/> },
  { id: "10D", title: "10D Industrialization", desc: "Implement modular construction and prefabrication strategies using BIM to improve efficiency and quality.", icon: <Layers size={32}/> }
];

const implementationSteps = [
  { step: "01", title: "Initial Consultation", desc: "We assess your current workflows, identify pain points, and define clear objectives for BIM implementation." },
  { step: "02", title: "Planning & Setup", desc: "We develop a tailored BIM execution plan, establish standards, and configure the necessary software and systems." },
  { step: "03", title: "Implementation", desc: "We deploy BIM solutions, provide training to your team, and ensure smooth integration with existing workflows." },
  { step: "04", title: "Optimization", desc: "We continuously monitor performance, gather feedback, and refine processes to maximize BIM benefits." }
];

const whyChooseUs = [
  { title: "Expert Team", desc: "Certified BIM professionals with 15+ years of industry experience.", icon: <Users size={32} /> },
  { title: "Advanced Technology", desc: "Latest BIM software & cloud tools for efficient project delivery.", icon: <MonitorPlay size={32} /> },
  { title: "Dedicated Support", desc: "Fast, reliable communication with personalized consultation and expert guidance.", icon: <Award size={32} /> }
];

const impactMetrics = [
  { value: "500+", label: "Projects Completed" },
  { value: "50M+", label: "Sq. Ft Modeled" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "20+", label: "Years of Experience" }
];

const howToGetStarted = [
  { title: "Fill the Form", desc: "Complete our quick inquiry form with your project details and requirements." },
  { title: "Consultation Call", desc: "Schedule a free 30-minute call with our BIM specialists to discuss your needs." },
  { title: "Personalized Plan", desc: "Receive a customized BIM implementation plan tailored to your project goals." },
  { title: "Get Started", desc: "Begin your BIM journey with our expert team guiding you every step of the way." }
];

const testimonials = [
  {
    text: "The BIM implementation by this team has completely transformed our construction workflow. We've reduced rework by 35% and improved project delivery times by nearly 3 weeks.",
    role: "Project Director, Construction Group"
  },
  {
    text: "As an architectural firm, we needed a BIM partner who understood both design intent and construction practicality. This team delivered beyond expectations.",
    role: "Principal Architect"
  },
  {
    text: "The 4D and 5D BIM capabilities helped us optimize schedule and save over $2.3 million.",
    role: "Real Estate Developer"
  }
];

const BimConsultancy = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black mt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={ConstructionServiceHero} 
            alt="BIM Consultancy Hero" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
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
            BIM <span className="accent-text italic">Consultancy</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Discover our comprehensive BIM solutions covering the entire project lifecycle—from basic planning to advanced 10D industrialization.
          </motion.p>
        </div>
      </section>

      {/* 1.5 Video Showcase */}
      <section className="relative z-10 w-full bg-black">
        <div className="w-full relative aspect-video">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/IVthBj46moo?autoplay=0&rel=0&showinfo=0" 
            title="BIM Consultancy Overview" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* 1.6 Advanced Technologies */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%] text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Innovation Hub</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-16 tracking-tight">
            Autodesk <span className="accent-text italic">Ecosystem</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[2rem] shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-[#fbc02d]/50 transition-all duration-300 text-left group"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#fbc02d] transition-colors">Autodesk BIM 360</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Cloud-based platform for project delivery and construction management that connects your project teams and data in real-time.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 p-10 rounded-[2rem] shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-[#fbc02d]/50 transition-all duration-300 text-left group"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#fbc02d] transition-colors">Clash Detection</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Identify and resolve coordination issues before construction begins, saving time and reducing costly rework.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 p-10 rounded-[2rem] shadow-md border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-[#fbc02d]/50 transition-all duration-300 text-left group"
            >
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#fbc02d] transition-colors">VR/AR Integration</h3>
              <p className="text-gray-600 font-medium leading-relaxed">Experience your project in immersive virtual reality before breaking ground, enabling better decision-making.</p>
            </motion.div>
          </div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 hover:bg-[#fbc02d] text-white hover:text-slate-900 font-bold py-5 px-10 rounded-full transition-all duration-300 text-lg tracking-wide shadow-xl flex items-center justify-center gap-3 mx-auto"
          >
            Try Autodesk Viewer <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>

      {/* 2. Comprehensive BIM Services (1D to 10D) */}
      <section className="py-24 bg-slate-50 border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
              Comprehensive <span className="accent-text italic">BIM Services</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From basic planning to advanced industrialization, our BIM solutions cover the entire project lifecycle through multiple dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bimDimensions.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[2rem] shadow-md hover:-translate-y-2 hover:shadow-[0_20px_40px_-5px_rgba(251,192,45,0.25)] transition-all duration-300 border border-gray-100 hover:border-yellow-200 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbc02d]/10 rounded-bl-full group-hover:bg-[#fbc02d]/20 transition-colors"></div>
                <div className="w-16 h-16 bg-[#fbc02d]/10 rounded-2xl flex items-center justify-center text-[#fbc02d] mb-8 border border-[#fbc02d]/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                <div className="mt-8 text-yellow-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                  <span className="text-5xl font-black text-gray-100 absolute bottom-4 right-6 group-hover:text-[#fbc02d]/20 transition-colors">{item.id.replace('D', '')}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BIM Implementation Process */}
      <section className="py-24 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="text-center mb-16 mx-auto flex flex-col items-center">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Implementation Strategy</span>
            <h2 className="text-5xl font-medium text-slate-900 mt-2 tracking-tight">
              Our Proven <span className="accent-text italic">BIM Process</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              We follow a structured 4-step approach to ensure successful BIM integration for your entire project scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {implementationSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
                className="relative p-8 border border-gray-100 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-[0_15px_40px_-5px_rgba(251,192,45,0.25)] hover:border-yellow-200 transition-all duration-300"
              >
                <span className="absolute -top-6 -left-6 text-7xl font-black text-[#fbc02d]/20">{step.step}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 mt-4 relative z-10">{step.title}</h3>
                <p className="text-gray-600 font-medium relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Our BIM Services & Impact Metrics */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-[1500px] mx-auto px-[5%] relative z-10">
          
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Why Choose Us */}
            <div>
              <h2 className="text-4xl md:text-5xl font-medium text-white mb-10 tracking-tight">
                Why Choose <span className="accent-text italic">Us</span>
              </h2>
              <div className="space-y-8">
                {whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-yellow-500 flex-shrink-0 border border-white/10">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
                      <p className="text-gray-400 text-lg">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-white/5 p-10 md:p-14 rounded-[3rem] border border-white/10 backdrop-blur-sm">
              <h3 className="text-3xl font-black mb-12 text-center uppercase tracking-wider">Impact By The Numbers</h3>
              <div className="grid grid-cols-2 gap-10">
                {impactMetrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-5xl md:text-6xl font-black text-yellow-500 mb-4 tracking-tight drop-shadow-md">{metric.value}</div>
                    <div className="text-gray-300 font-bold uppercase tracking-wider text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. How to Get Started */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[5%] text-center">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            How to <span className="accent-text italic">Get Started</span>
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Begin your BIM journey with our simple four-step process, mapped out for your convenience.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative z-10">
            {howToGetStarted.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center group h-full">
                {idx < howToGetStarted.length - 1 && (
                  <div className="hidden lg:block absolute top-[40px] left-[50%] w-[80%] border-t-2 border-dashed border-gray-200 z-0"></div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center w-full h-full bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative z-10"
                >
                  <div className="w-16 h-16 bg-yellow-500 text-slate-900 text-2xl font-black rounded-full flex items-center justify-center mb-6 shadow-md transition-transform group-hover:scale-110 flex-shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 font-medium">{step.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%] flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-yellow-500"></div>
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs">Testimonials</span>
            <div className="w-8 h-1 bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-16 text-center tracking-tight">
            What Our <span className="accent-text italic">Clients Say</span>
          </h2>

          <div className="w-full max-w-4xl bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative">
            <div className="absolute top-10 right-10 text-gray-100 opacity-50">
              <Quote size={80} />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-center"
              >
                <div className="flex justify-center text-yellow-400 mb-8 max-w-max mx-auto gap-1">
                  {"★★★★★".split('').map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
                </div>
                <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed mb-10">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-slate-900 uppercase tracking-widest">{testimonials[activeTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>

            {/* Nav */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-8">
              <button onClick={prevTestimonial} className="w-14 h-14 bg-white text-slate-900 shadow-xl rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors border border-gray-100">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTestimonial} className="w-14 h-14 bg-slate-900 text-white shadow-xl rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors border border-slate-900">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Impact Metrics from Clients */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%] text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-yellow-500"></div>
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs">Proven Results</span>
            <div className="w-8 h-1 bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Impact Metrics <span className="accent-text italic">from Our Clients</span>
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            A quick glance at how our BIM solutions created measurable improvements.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 bg-slate-50"
          >
            <img 
              src={GpMetricsImage} 
              alt="BIM Impact Metrics from Clients" 
              className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-700" 
            />
          </motion.div>
        </div>
      </section>

      {/* 8. Sectors We Serve (Horizontal Scroll) */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[5%] text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-1 bg-yellow-500"></div>
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs">Sectors We Serve</span>
            <div className="w-8 h-1 bg-yellow-500"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Specialized <span className="accent-text italic">Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our BIM methodologies adapt to the unique challenges and complex regulatory requirements across diverse industries.
          </p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="flex overflow-x-auto gap-8 px-[5%] pb-12 snap-x snap-mandatory hide-scrollbar">
          {bimSectors.map((sector, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="min-w-[240px] md:min-w-[270px] bg-white rounded-[1.5rem] shadow-lg overflow-hidden border border-gray-100 snap-center group flex-shrink-0 flex flex-col"
            >
              <div className="h-[180px] overflow-hidden relative">
                <img 
                  src={sector.img} 
                  alt={sector.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-900 mb-3">{sector.title}</h3>
                <p className="text-sm text-gray-600 font-medium mb-5 line-clamp-3">{sector.desc}</p>
                <button className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-widest text-[10px] hover:text-slate-900 transition-colors">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. Contact Section */}
      <section className="py-24 bg-slate-900 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            
            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-5/12 bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fbc02d] opacity-5 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs mb-4 block">Contact Us Today</span>
                <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight tracking-tight">
                  Schedule a consultation with our <span className="accent-text italic">BIM experts</span> to explore how we can help transform your construction projects.
                </h2>
                
                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#fbc02d] flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wide mb-1">Email Us</h4>
                      <a href="mailto:info@e-construct.org" className="text-lg font-medium hover:text-[#fbc02d] transition-colors">info@e-construct.org</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#fbc02d] flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wide mb-1">Call Us</h4>
                      <div className="flex flex-col">
                        <a href="tel:+919036744017" className="text-lg font-medium hover:text-[#fbc02d] transition-colors">+91 9036744017</a>
                        <a href="tel:+917259921111" className="text-lg font-medium hover:text-[#fbc02d] transition-colors">+91 7259921111</a>
                        <a href="tel:+917259222888" className="text-lg font-medium hover:text-[#fbc02d] transition-colors">+91 7259222888</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#fbc02d] flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wide mb-1">Visit Us</h4>
                      <p className="text-lg font-medium text-gray-200 leading-relaxed">
                        Venkatdhari Heights, 1st & 2nd Floor, Parapanna Agrahara Main Road, Opposite Sai Poorna Premier Apartment, Bangalore - 560068.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-10">
                  <h4 className="text-gray-400 text-sm font-bold uppercase tracking-wide mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Youtube size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <MessageCircle size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Linkedin size={20} />
                    </a>
                    <a href="mailto:info@e-construct.org" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-7/12 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.25)] p-8 md:p-10 flex flex-col justify-center relative z-20">
              <h3 className="text-3xl font-black text-slate-900 mb-6">Send Us A Message</h3>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-bold text-gray-700 mb-2 block">Name *</label>
                    <input 
                      type="text" 
                      placeholder="Your full name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#fbc02d] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 mb-2 block">Email *</label>
                    <input 
                      type="email" 
                      placeholder="Your email address"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#fbc02d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-700 mb-2 block">Phone No. *</label>
                  <input 
                    type="tel" 
                    placeholder="Your phone number"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#fbc02d] focus:border-transparent transition-all"
                  />
                </div>

                <div className="pt-4">
                  <label className="text-sm font-bold text-gray-700 mb-4 block">What Are You Looking For?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Design Services", "Construction Services", "Design & Build Services", "Turnkey Solutions"].map((service, i) => (
                      <label key={i} className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors group">
                        <div className="relative flex items-center justify-center">
                          <input type="radio" name="service" className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#fbc02d] transition-colors" />
                          <div className="absolute w-2.5 h-2.5 bg-[#fbc02d] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-slate-900">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-[#fbc02d] text-white hover:text-slate-900 font-bold py-4 rounded-xl transition-all duration-300 text-lg tracking-wide shadow-lg mt-6"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <CTASection />

    </div>
  );
};

export default BimConsultancy;
