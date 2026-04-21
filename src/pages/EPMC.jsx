import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, AlertTriangle, CheckCircle, Smartphone, MessageSquare, Scale, Monitor, ShieldCheck, Flag, Play, Search, CheckSquare, Clock } from 'lucide-react';
import CTASection from '../components/CTASection';
import ConstructionServiceHero from '../assets/ProjectManagementConsultancy.jpg';
import ep1 from '../assets/ep1.webp';
import ep2 from '../assets/ep2.webp';
import ep3 from '../assets/ep3.webp';
import ep4 from '../assets/ep4.webp';
import ep5 from '../assets/ep5.webp';
import ep6 from '../assets/ep6.webp';
const EPMC = () => {
  return (
    <div className="w-full bg-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black mt-20">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={ConstructionServiceHero} 
            alt="EPMC Hero" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
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
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-tight"
          >
            Electronic Project Management <br className="hidden md:block"/>
            <span className="accent-text italic">Consultancy (EPMC)</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Serve your projects as a project management consultancy along with advanced building information modelling (BIM)
          </motion.p>
        </div>
      </section>

      {/* 2. Join EPMC Video & What is EPMC */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Video Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-200"
            >
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/rm5sdAYCqqc?si=RbmeABefiwgpXj1h" 
                title="Join EPMC" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-[#fbc02d]"></div>
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-8 leading-tight tracking-tight">
                What is <span className="accent-text italic">EPMC?</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                With EPMC the entire operations would be done through our in-house developed application and dashboard-based portal. This will include an optimum range of automation technology with minimal manual touch so that your project can run flawlessly without minimum human hassles.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Problems vs Solutions */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Construction Problems */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-red-50/50 p-10 md:p-14 rounded-[3rem] border border-red-100"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-500">
                  <AlertTriangle size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900">Construction Problems</h3>
              </div>
              
              <ul className="space-y-6">
                {[
                  "Lack of Professional Specialized Education",
                  "Inefficient Dispute Resolution Mechanism",
                  "Lack of Project Monitoring/ Program Monitoring",
                  "Lack in Value Engineering Adoption"
                ].map((prob, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-red-500"><AlertTriangle size={20} /></div>
                    <span className="text-lg text-gray-700 font-medium">{prob}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* EPMC Solutions */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900 p-10 md:p-14 rounded-[3rem] border border-slate-800 relative overflow-hidden"
            >
              {/* decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fbc02d]/10 rounded-bl-full"></div>

              <div className="relative z-10 flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-[#fbc02d] rounded-2xl flex items-center justify-center text-slate-900">
                  <CheckCircle size={32} className="text-slate-900" />
                </div>
                <h3 className="text-3xl font-black text-white">EPMC Solution</h3>
              </div>
              
              <ul className="relative z-10 space-y-8">
                {[
                  { text: "Daily Progress Report and Interactive Dashboard with Mobile App", icon: <Smartphone size={20} /> },
                  { text: "Expert Advice and Exclusive Chat Facility through interactive portal in each instance", icon: <MessageSquare size={20} /> },
                  { text: "Legal Compliance Implementation", icon: <Scale size={20} /> },
                  { text: "E-Portal Task Based Project Monitoring & Control", icon: <Monitor size={20} /> },
                  { text: "Proof Checking Mechanism and Office Support for Quality Check", icon: <ShieldCheck size={20} /> }
                ].map((sol, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#fbc02d] flex-shrink-0">
                      {sol.icon}
                    </div>
                    <span className="text-lg text-gray-300 font-medium leading-relaxed">{sol.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Phases of Project Management */}
      <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%]">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
              <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Methodology</span>
              <div className="w-8 h-1 bg-[#fbc02d]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">
              Phases of <span className="accent-text italic">Project Management</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Project Initiation & Planning", desc: "Initiating of the project", icon: <Flag size={28} /> },
              { title: "Project Execution", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.", icon: <Play size={28} /> },
              { title: "Project monitoring and control", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.", icon: <Search size={28} /> },
              { title: "Project Closure", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.", icon: <CheckSquare size={28} /> }
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100 group relative overflow-hidden flex flex-col"
              >
                <div className="w-16 h-16 bg-[#fbc02d]/10 rounded-2xl flex items-center justify-center text-[#fbc02d] mb-8 group-hover:bg-[#fbc02d] group-hover:text-slate-900 transition-colors">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium flex-grow">{phase.desc}</p>
                <div className="absolute top-8 right-8 text-6xl font-black text-gray-50 group-hover:text-[#fbc02d]/10 transition-colors">
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EPMC Insights */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1500px] mx-auto px-[5%] text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Platform</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-8">
            EPMC <span className="accent-text italic">Insights</span>
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-4xl mx-auto mb-16">
            With EPMC the entire operations would be done through our in-house developed application and dashboard-based portal. This will include optimum range of automation technology with minimal manual touch so that your project can run flawlessly without minimum human hassles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { img: ep1, title: "Control Of Project With Concerned Person" },
              { img: ep2, title: "Cost Optimization" },
              { img: ep3, title: "Dynamic Material Reconciliation" },
              { img: ep4, title: "Graphical Representation" },
              { img: ep5, title: "Running Bills Tracking" },
              { img: ep6, title: "Insights Of Epmc" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group border border-gray-100 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center p-6 border-b border-gray-100">
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-8 flex-grow flex items-center justify-center">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight inline-flex items-center gap-3">
                    <CheckCircle className="text-[#fbc02d] flex-shrink-0" size={20}/>
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-[#fbc02d] hover:text-slate-900 transition-colors duration-300 shadow-xl"
            onClick={() => window.location.href = '/contact'}
          >
            Join EPMC <PlayCircle size={18} className="ml-1"/>
          </motion.button>
        </div>
      </section>

      {/* 5. CMAA Survey (Blue Styled Numbers) */}
      <section className="py-24 bg-gradient-to-br from-[#0c2b5e] to-[#061838] text-white relative overflow-hidden border-t-4 border-[#3b82f6]">
        {/* Abstract Blue Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1d4ed8] opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3b82f6] opacity-10 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="max-w-[1500px] mx-auto px-[5%] relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
              As per <span className="text-[#60a5fa] italic font-serif">CMAA Survey</span>
            </h2>
            <p className="text-[#93c5fd] font-medium text-lg uppercase tracking-widest">Industry Challenges We Solve</p>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
            {[
              { val: "30", sign: "%", desc: "of Projects do not meet original program or budget.", icon: <Clock size={24} /> },
              { val: "92", sign: "%", desc: "of clients said that designers’ drawings are typically not sufficient for construction.", icon: <AlertTriangle size={24} /> },
              { val: "37", sign: "%", desc: "of materials used in construction become waste.", icon: <Monitor size={24} /> },
              { val: "10", sign: "%", desc: "of the cost of a project is typically due to change orders.", icon: <MessageSquare size={24} /> },
              { val: "38", sign: "%", desc: "of carbon emissions are from buildings not cars.", icon: <Flag size={24} /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[85vw] md:min-w-[350px] lg:min-w-[300px] flex-shrink-0 bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group snap-center"
              >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2563eb] opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity"></div>
                <div className="w-14 h-14 bg-[#1e3a8a] rounded-2xl flex items-center justify-center text-[#93c5fd] mb-8 border border-[#3b82f6]/30">
                  {stat.icon}
                </div>
                <div className="flex items-baseline gap-1 mb-4 text-[#60a5fa]">
                  <span className="text-6xl md:text-7xl font-black drop-shadow-lg">{stat.val}</span>
                  <span className="text-3xl font-bold">{stat.sign}</span>
                </div>
                <p className="text-gray-300 font-medium leading-relaxed text-lg">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
      
    </div>
  );
};

export default EPMC;
