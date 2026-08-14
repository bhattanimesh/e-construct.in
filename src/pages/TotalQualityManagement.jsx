import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle, Target, Settings, Activity, ChevronLeft, ChevronRight, Star, FileText, Monitor, Shuffle } from 'lucide-react';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';

import heroImg from '../assets/c2.jpg';

// Specialized assets
import tqm1 from '../assets/tqm_1.png';
import tqm2 from '../assets/tqm_2.png';
import tqm3 from '../assets/tqm_3.png';
import tqm4 from '../assets/tqm_4.png';
import tqm5 from '../assets/tqm_5.png';
import tqm6 from '../assets/tqm_6.png';
import tqm7 from '../assets/tqm_7.png';
import tqm8 from '../assets/tqm_8.png';
import tqm9 from '../assets/tqm_9.png';
import tqm10 from '../assets/tqm_10.png';
import tqm11 from '../assets/tqm_11.png';
import tqm12 from '../assets/tqm_12.png';
import tqm13 from '../assets/tqm_13.png';

// New Project Assets
import tqm14 from '../assets/tqm_14.png';
import tqm15 from '../assets/tqm_15.png';
import tqm16 from '../assets/tqm_16.png';
import tqm17 from '../assets/tqm_17.png';
import tqmPort1 from '../assets/tqm_port1.png';
import tqmPort2 from '../assets/tqm_port2.jpg';
import tqmPort3 from '../assets/tqm_port3.jpg';
import tqmPort4 from '../assets/tqm_port4.jpg';
import tqmPort5 from '../assets/tqm_port5.jpg';const TotalQualityManagement = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    { name: "Suresh Menon", role: "Project Director", review: "The TQM framework implemented by E-Construct literally eliminated our rework margins. Their dedication to zero-defect delivery is unparalleled." },
    { name: "Priya Sharma", role: "Lead Architect", review: "Quality isn't just a buzzword for them. Their on-site checks and rigorous material testing ensure our designs are built to outlast generations." },
    { name: "Rajiv Gupta", role: "Client", review: "Absolute peace of mind. Knowing that every brick and beam is scrutinized for quality made our investment completely stress-free." }
  ];

  const nextTesti = () => setActiveTestimonial(prev => (prev + 1) % testimonials.length);
  const prevTesti = () => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full bg-white mt-20">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900 border-b-8 border-[#fbc02d]">
        <div className="absolute inset-0 w-full h-full">
          <img src={heroImg} className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-1000" alt="Total Quality Management Hero" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-sm">Quality Assurance</span>
            <div className="w-12 h-[2px] bg-[#fbc02d]"></div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-tight"
          >
            Total Quality <br className="hidden md:block"/>
            <span className="accent-text italic">Management</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Delivering zero-defect construction through rigorous compliance, continuous improvement, and uncompromising material standards.
          </motion.p>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <img src={tqm1} alt="Introduction to BIM Quality" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Overview</span>
              </div>
              <SectionHeading title="Introduction" center={false} />
              <p className="text-gray-600 text-lg leading-relaxed shadow-sm p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100">
                Projects require effective management of various aspects to ensure high-quality outcomes. Building Information Modeling (BIM) technology has emerged as a powerful tool for enhancing construction quality management. This proposal outlines the implementation of BIM technology to streamline quality management processes in construction projects.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Objectives */}
      <section className="py-20 md:py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center flex-col-reverse lg:flex-row">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Goals</span>
              </div>
              <SectionHeading title="Objectives" center={false} />
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The primary objectives of implementing BIM technology for construction quality management are as follows:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Improve coordination and collaboration among project stakeholders.",
                  "Enhance design and constructability reviews.",
                  "Facilitate clash detection and resolution.",
                  "Enable real-time monitoring of construction activities.",
                  "Streamline communication and information sharing.",
                  "Improve project documentation and reduce errors."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-md">
                    <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl order-1 lg:order-2 bg-white"
            >
              <img src={tqm2} alt="TQM Objectives" className="w-full h-full object-contain p-4" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Implementation Steps */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Strategy</span>
              </div>
              <SectionHeading title="Implementation Steps" center={false} />
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                To achieve the aforementioned objectives, the following steps will be undertaken:
              </p>
              
              <div className="space-y-8">
                <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbc02d]/10 rounded-full blur-2xl group-hover:bg-[#fbc02d]/20 transition-colors"></div>
                  <h3 className="text-[#fbc02d] text-xl font-black mb-4 uppercase tracking-widest flex items-center gap-3">
                    <Target size={24} /> BIM Implementation Plan
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Develop a comprehensive plan outlining the adoption and integration of BIM technology into the construction quality management process. This plan will consider the project requirements, available resources, and the desired outcomes.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-lg relative overflow-hidden group hover:border-[#fbc02d] transition-colors duration-300">
                  <h3 className="text-slate-900 text-xl font-black mb-4 uppercase tracking-widest flex items-center gap-3">
                    <Settings size={24} className="text-[#fbc02d]" /> Stakeholder Training
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Conduct training programs to familiarize all relevant project stakeholders, including architects, engineers, contractors, and subcontractors, with BIM technology and its implementation in quality management processes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50 border border-gray-100"
            >
              <img src={tqm3} alt="TQM Implementation" className="w-full h-full object-contain p-4" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Core Methodologies / Capabilities Matrix */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: "Model Development", img: tqm4, text: "Develop a 3D BIM model that accurately represents the project’s design and construction aspects. This model will serve as a central repository for project information and facilitate coordination among different disciplines." },
              { title: "Design & Constructability Reviews", img: tqm5, text: "Utilize the BIM model to conduct thorough design and constructability reviews. Identify and address any clashes, conflicts, or inconsistencies in the design early on, reducing rework and minimizing errors during construction." },
              { title: "Clash Detection & Resolution", img: tqm6, text: "Leverage the clash detection capabilities of BIM software to identify clashes between different building systems, such as structural, mechanical, electrical, and plumbing. Resolve clashes collaboratively to ensure seamless coordination and minimize conflicts during construction." }
            ].map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <div className="h-64 bg-gray-100 border-b border-gray-100 p-6 flex items-center justify-center">
                  <img src={node.img} alt={node.title} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{node.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium flex-1">{node.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Advanced Applications */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left side: Images Stack */}
            <div className="grid gap-6">
              {[tqm7, tqm8, tqm9].map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 flex items-center justify-center p-6 aspect-[16/9] md:aspect-auto md:h-80"
                >
                  <img src={img} alt={`Process ${i+1}`} className="w-full h-full object-contain" />
                </motion.div>
              ))}
            </div>

            {/* Right side: Text Stack */}
            <div className="space-y-12 py-4">
              {[
                { title: "Real-Time Monitoring", icon: Monitor, text: "Utilize BIM to monitor construction activities in real-time, capturing progress, and comparing it with the project schedule. Identify potential delays or issues early on, enabling prompt corrective actions to maintain construction quality and adherence to project timelines." },
                { title: "Communication and Information Sharing", icon: Shuffle, text: "Implement a centralized BIM platform to facilitate communication and information sharing among project stakeholders. This platform will serve as a common data environment, ensuring that all parties have access to the most up-to-date project information." },
                { title: "Quality Documentation", icon: FileText, text: "Utilize BIM to generate accurate and detailed construction documentation, including shop drawings, as-built models, and operation and maintenance manuals. This will enhance the quality of project deliverables and improve facility management post-construction." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#fbc02d] transition-all group-hover:w-4"></div>
                  <h3 className="text-slate-900 text-xl font-black mb-4 uppercase tracking-widest pl-4 flex items-center gap-3">
                    <item.icon size={22} className="text-[#fbc02d]" /> {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium pl-4">{item.text}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. Benefits Banner */}
      <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-[1500px] mx-auto px-[5%] relative z-10">
          
          <div className="text-center mb-16">
            <SectionHeading title="Benefits of BIM Technology" light />
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The implementation of BIM technology for construction quality management offers several benefits, including:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: tqm10, text: "Improved coordination and collaboration, leading to better project outcomes. Early detection and resolution of clashes, reducing rework and cost overruns." },
              { img: tqm11, text: "Real-time monitoring of construction activities, enabling proactive decision-making." },
              { img: tqm12, text: "Enhanced communication and information sharing, minimizing errors and misunderstandings." },
              { img: tqm13, text: "Accurate and comprehensive project documentation, improving post-construction operations and maintenance." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-[#fbc02d]/50 transition-colors duration-300 text-center flex flex-col items-center group"
              >
                <div className="w-24 h-24 mb-6 rounded-2xl bg-white p-3 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                  <img src={benefit.img} alt={`Benefit ${i+1}`} className="w-full h-full object-contain" />
                </div>
                <p className="text-gray-300 leading-relaxed font-medium">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
              <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Framework</span>
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
            </div>
            <SectionHeading title="The Roadmap of Quality Management & BIM Technology" />
          </div>

          <div className="space-y-24">
            
            {/* Phase 1 */}
            <div className="relative">
              <div className="absolute left-8 top-16 bottom-[-6rem] w-[2px] bg-gray-200 hidden lg:block"></div>
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="lg:w-1/4 relative z-10 flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border-4 border-white shadow-xl flex items-center justify-center flex-shrink-0 text-[#fbc02d] font-black text-2xl">
                    1
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-black text-slate-900 uppercase">Pre-Construction</h3>
                    <p className="text-[#fbc02d] font-bold tracking-widest text-sm uppercase mt-1">Phase</p>
                  </div>
                </div>
                
                <div className="lg:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Item a */}
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-gray-200 flex items-center gap-3">
                      <span className="bg-[#fbc02d] text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm">a</span>
                      Project Planning & Design
                    </h4>
                    <ul className="space-y-3">
                      {["Define project objectives, requirements, and scope.", "Conduct feasibility studies and site investigations.", "Develop a comprehensive project plan and schedule.", "Engage design professionals and consultants to develop design documents."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Item b */}
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-gray-200 flex items-center gap-3">
                      <span className="bg-[#fbc02d] text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm">b</span>
                      Quality Planning
                    </h4>
                    <ul className="space-y-3">
                      {["Establish quality objectives and performance criteria.", "Develop a Quality Management Plan outlining quality processes and procedures.", "Identify quality control measures and inspection requirements.", "Define roles and responsibilities for quality management."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Item c */}
                  <div className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-all duration-300">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-gray-200 flex items-center gap-3">
                      <span className="bg-[#fbc02d] text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm">c</span>
                      Procurement & Vendor Selection
                    </h4>
                    <ul className="space-y-3">
                      {["Develop clear and detailed procurement documents.", "Prequalify contractors based on their experience and qualifications.", "Evaluate bids or proposals and select Vendors with a strong track record in quality management."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <div className="absolute left-8 top-16 bottom-[-6rem] w-[2px] bg-gray-200 hidden lg:block"></div>
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="lg:w-1/4 relative z-10 flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#fbc02d] border-4 border-white shadow-xl flex items-center justify-center flex-shrink-0 text-slate-900 font-black text-2xl">
                    2
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-black text-slate-900 uppercase">Construction</h3>
                    <p className="text-gray-500 font-bold tracking-widest text-sm uppercase mt-1">Phase</p>
                  </div>
                </div>
                
                <div className="lg:w-3/4 grid md:grid-cols-2 gap-8">
                  {/* Item a */}
                  <div className="bg-white border-2 border-gray-100 shadow-md p-8 rounded-[2rem] hover:border-[#fbc02d] transition-all duration-300 group">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-gray-100 flex items-center gap-3">
                      <span className="bg-slate-900 text-[#fbc02d] group-hover:bg-[#fbc02d] group-hover:text-slate-900 transition-colors w-8 h-8 rounded-full flex items-center justify-center text-sm">a</span>
                      Quality Control
                    </h4>
                    <ul className="space-y-3">
                      {["Perform material and equipment inspections to verify quality and conformance.", "Implement quality control measures, including testing and sampling procedures.", "Monitor and document construction activities to identify and address quality issues promptly."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Item b */}
                  <div className="bg-white border-2 border-gray-100 shadow-md p-8 rounded-[2rem] hover:border-[#fbc02d] transition-all duration-300 group">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-gray-100 flex items-center gap-3">
                      <span className="bg-slate-900 text-[#fbc02d] group-hover:bg-[#fbc02d] group-hover:text-slate-900 transition-colors w-8 h-8 rounded-full flex items-center justify-center text-sm">b</span>
                      Communication & Collaboration
                    </h4>
                    <ul className="space-y-3">
                      {["Foster open and effective communication among project stakeholders.", "Conduct regular project meetings to address quality concerns and resolve issues.", "Promote collaboration between the design team, contractors, and subcontractors.", "Implement a centralized communication platform to streamline information sharing."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Item c */}
                  <div className="bg-white border-2 border-gray-100 shadow-md p-8 rounded-[2rem] hover:border-[#fbc02d] transition-all duration-300 group">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-gray-100 flex items-center gap-3">
                      <span className="bg-slate-900 text-[#fbc02d] group-hover:bg-[#fbc02d] group-hover:text-slate-900 transition-colors w-8 h-8 rounded-full flex items-center justify-center text-sm">c</span>
                      Subcontractor Management
                    </h4>
                    <ul className="space-y-3">
                      {["Prequalify subcontractors based on their quality management capabilities.", "Clearly define subcontractor responsibilities and expectations.", "Monitor subcontractor performance and conduct regular quality assessments.", "Provide necessary support and guidance to subcontractors to maintain quality standards."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Item d */}
                  <div className="bg-white border-2 border-gray-100 shadow-md p-8 rounded-[2rem] hover:border-[#fbc02d] transition-all duration-300 group">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 pb-4 border-b border-gray-100 flex items-center gap-3">
                      <span className="bg-slate-900 text-[#fbc02d] group-hover:bg-[#fbc02d] group-hover:text-slate-900 transition-colors w-8 h-8 rounded-full flex items-center justify-center text-sm">d</span>
                      Documentation & Reporting
                    </h4>
                    <ul className="space-y-3">
                      {["Maintain accurate and up-to-date construction records, including drawings, specifications, and change orders.", "Document inspections, tests, and quality control activities.", "Generate progress reports to track quality performance against project milestones.", "Develop a comprehensive closeout documentation package for future reference."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <div className="lg:w-1/4 relative z-10 flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border-4 border-white shadow-xl flex items-center justify-center flex-shrink-0 text-white font-black text-2xl">
                    3
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-black text-slate-900 uppercase">Post-Construction</h3>
                    <p className="text-green-600 font-bold tracking-widest text-sm uppercase mt-1">Phase</p>
                  </div>
                </div>
                
                <div className="lg:w-3/4 grid md:grid-cols-2 gap-8">
                  {/* Item a */}
                  <div className="bg-slate-900 p-8 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-bold text-white mb-4 pb-4 border-b border-white/10 flex items-center gap-3">
                      <span className="bg-[#fbc02d] text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm">a</span>
                      Commissioning & Handover
                    </h4>
                    <ul className="space-y-3">
                      {["Conduct thorough commissioning processes to ensure the proper functioning of building systems.", "Perform final inspections and tests to verify compliance with design intent and performance criteria.", "Prepare comprehensive handover documents, including as-built drawings and operation manuals."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-300 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Item b */}
                  <div className="bg-slate-900 p-8 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-bold text-white mb-4 pb-4 border-b border-white/10 flex items-center gap-3">
                      <span className="bg-[#fbc02d] text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm">b</span>
                      Defects Management
                    </h4>
                    <ul className="space-y-3">
                      {["Establish a systematic process for identifying, documenting, and rectifying defects or deficiencies.", "Implement a defect tracking system to prioritize and address issues promptly.", "Monitor and track the resolution of defects during the defect liability period."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-300 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Item c */}
                  <div className="bg-slate-900 p-8 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-bold text-white mb-4 pb-4 border-b border-white/10 flex items-center gap-3">
                      <span className="bg-[#fbc02d] text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm">c</span>
                      Occupancy & Facility Management
                    </h4>
                    <ul className="space-y-3">
                      {["Provide adequate training and support to facility operators and maintenance personnel.", "Establish regular maintenance schedules and procedures to preserve the quality of the facility.", "Conduct periodic inspections and assessments to ensure ongoing quality performance.", "Implement feedback mechanisms to capture occupant satisfaction and address any quality concerns."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-300 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Item d */}
                  <div className="bg-slate-900 p-8 rounded-[2rem] shadow-xl hover:-translate-y-1 transition-transform duration-300">
                    <h4 className="text-lg font-bold text-white mb-4 pb-4 border-b border-white/10 flex items-center gap-3">
                      <span className="bg-[#fbc02d] text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm">d</span>
                      Lessons Learned & Improvement
                    </h4>
                    <ul className="space-y-3">
                      {["Conduct post-project reviews to evaluate the effectiveness of quality management processes.", "Identify lessons learned and best practices for future projects.", "Implement improvements based on feedback and lessons learned."].map((list, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-300 font-medium">
                          <CheckCircle className="text-[#fbc02d] flex-shrink-0 mt-0.5" size={16} /> {list}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Working on Projects */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
              <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Current Sites</span>
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
              Working on <span className="accent-text italic">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[tqm14, tqm15, tqm16, tqm17].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-gray-100 group relative"
              >
                <img src={img} alt={`Working Project ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/30 transition-colors duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Previous Projects */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
              <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Portfolio</span>
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">
              Previous <span className="accent-text italic">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[tqmPort1, tqmPort2, tqmPort3, tqmPort4, tqmPort5].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <img src={img} alt={`Previous Project ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Video Presentation */}
      <section className="py-16 md:py-28 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Background Building Image */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] h-[120%] opacity-15 pointer-events-none z-0 select-none">
          <img 
            src="/building_transparent.png" 
            className="w-full h-full object-contain object-right" 
            alt="" 
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-10 relative z-10">
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
              <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Quality Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-white mb-8 md:mb-12 max-w-2xl leading-tight">
              Quality Management <span className="text-[#fbc02d] italic">in Action</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
              Watch how Econstruct implements rigorous Total Quality Management (TQM) standards and site quality control across real live engineering projects.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-video w-full lg:w-[75%] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] border border-white/10 bg-black group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#fbc02d] z-20" />
              <iframe 
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/LZlYGauoJpE" 
                title="Econstruct Total Quality Management in Action" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                loading="lazy"
                allowFullScreen>
              </iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. Client Reviews */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-[5%] text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Our Testimonials</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-20">
            Client <span className="accent-text italic">Reviews</span>
          </h2>

          <div className="relative bg-white rounded-[3rem] p-10 md:p-16 shadow-lg border border-gray-100 mb-12 mt-12">
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

export default TotalQualityManagement;
