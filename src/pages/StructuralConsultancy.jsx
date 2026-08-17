import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building, Factory, Home, Droplet, Map, PenTool, CheckCircle2,
  ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, TrendingUp,
  Award, Users, Layout, AlertCircle, Activity, MapPin, Quote,
  ChevronDown, Mail, Phone, Facebook, Youtube, MessageCircle, Linkedin
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SectionHeading from '../components/SectionHeading';
import { useAdmin } from '../context/AdminContext';

const SC_SERVICE_ICONS = [Home, Building, Factory, Map, ShieldCheck];
const WHY_ICONS = [TrendingUp, Building, Layout, ShieldCheck, Award, CheckCircle2];

const ProjectSliderCard = ({ images, type, title, challenges, status, location, onClick }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 3000 + Math.random() * 1000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col group border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-500 h-full cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[24px]">
        <img src={images[currentIdx]} alt={title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" loading="lazy" decoding="async" />
        <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-[#fbc02d] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] z-10 border border-[#fbc02d]/20 shadow-md">
          {type}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-4 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex gap-2">
            {images.map((_, idx) => (
              <div key={idx} className={`h-2 rounded-full transition-all duration-500 ${currentIdx === idx ? 'w-6 bg-[#fbc02d]' : 'w-2 bg-white/60'}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 leading-snug group-hover:text-[#fbc02d] transition-colors">{title}</h3>
        <div className="space-y-4 mb-8 flex-1">
          <div>
            <h4 className="text-[0.65rem] font-black text-slate-800 uppercase tracking-[0.15em] mb-1.5 flex items-center gap-2"><AlertCircle size={14} className="text-red-500" /> Challenges</h4>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">{challenges}</p>
          </div>
          <div>
            <h4 className="text-[0.65rem] font-black text-slate-800 uppercase tracking-[0.15em] mb-1.5 flex items-center gap-2"><Activity size={14} className="text-blue-500" /> Current Status</h4>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">{status}</p>
          </div>
          <div>
            <h4 className="text-[0.65rem] font-black text-slate-800 uppercase tracking-[0.15em] mb-1.5 flex items-center gap-2"><MapPin size={14} className="text-green-500" /> Location</h4>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">{location}</p>
          </div>
        </div>
        <button onClick={onClick} className="w-full bg-slate-50 text-blue-600 font-black px-6 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(37,99,235,0.2)] mt-auto active:scale-95 uppercase tracking-widest text-xs">
          View Project Drawings <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const StructuralConsultancy = () => {
  const { data } = useAdmin();
  const sc = data.structuralConsultancyContent;
  const navigate = useNavigate();

  // Slider State (sc1 - sc7)
  const scImages = [
    '/structural-consultancy/sc1.webp',
    '/structural-consultancy/sc2.webp',
    '/structural-consultancy/sc3.webp',
    '/structural-consultancy/sc4.webp',
    '/structural-consultancy/sc5.webp',
    '/structural-consultancy/sc6.webp',
    '/structural-consultancy/sc7.webp'
  ];
  const [currentScSlide, setCurrentScSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScSlide((prev) => (prev + 1) % scImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [scImages.length]);

  const projects = [
    '/structural-consultancy/sp1.jpg',
    '/structural-consultancy/sp3.jpg',
    '/structural-consultancy/sp5.jpg',
    '/structural-consultancy/sp6.jpg',
    '/structural-consultancy/sp7.jpg'
  ];

  const testimonials = sc.testimonials;
  const faqs = sc.faqs;
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-white min-h-screen flex flex-col justify-start pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-[100px]">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/structural-consultancy/sc1.webp')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-block px-4 py-2 bg-[#fbc02d]/20 border border-[#fbc02d]/50 text-[#fbc02d] font-bold text-sm tracking-widest uppercase rounded-full mb-6 backdrop-blur-sm">
            Engineering Excellence
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight uppercase">
            Structural <span className="text-[#fbc02d]">Consultancy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto mb-8">
            End-to-End Structural Engineering Solutions from Concept to Construction
          </p>

          <a
            href="https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQDD1iJ5QnLrR7WNyLMscPTWAVN-o2PxImS4BlMeFb47rW4?e=iQx2ci"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQDD1iJ5QnLrR7WNyLMscPTWAVN-o2PxImS4BlMeFb47rW4?e=iQx2ci', '_blank', 'noopener,noreferrer');
            }}
            className="inline-flex items-center gap-2 bg-[#fbc02d] text-slate-900 font-bold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 rounded-xl hover:bg-white transition-all shadow-lg active:scale-95 cursor-pointer relative z-10"
          >
            <span>Download Econstruct Structure Project Portfolio PDF</span>
          </a>
        </div>
      </section>

      {/* Our Comprehensive Structural Services */}
      <section className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden text-left">
        <div className="max-w-[1500px] mx-auto relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <SectionHeading title="Our Comprehensive Structural Services" />
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              We provide end-to-end structural engineering solutions—from concept to construction. Our expertise ensures safety, compliance, and performance across all types of structures.
            </p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sc.services.map((service, idx) => {
              const SvcIcon = SC_SERVICE_ICONS[idx] || Home;
              return (
                <div key={service.id || idx} className="bg-white p-8 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 border border-gray-100 group flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#fbc02d] group-hover:text-slate-900 transition-colors duration-300 shadow-sm">
                      <SvcIcon size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">{service.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* CTA Card */}
            <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#fbc02d]/10 group-hover:bg-[#fbc02d]/20 transition-colors duration-500"></div>
              <h3 className="text-3xl font-black text-white mb-6 relative z-10 leading-snug">Discuss Your <br />Structural Project</h3>
              <button onClick={() => navigate('/contact')} className="relative z-10 bg-[#fbc02d] text-slate-900 font-black px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 uppercase tracking-widest text-sm flex items-center gap-2">
                Contact Us <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* From Homes to Highways (Slider Section) */}
      <section className="py-24 px-4 md:px-8 bg-white border-t border-gray-100 text-left">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
                <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm md:text-base">Technology</span>
              </div>
              <SectionHeading title="From Homes to Highways" center={false} />
              <p className="text-gray-600 text-xl font-medium leading-relaxed mb-10 border-l-4 border-[#fbc02d] pl-4">
                Experience the power of Autodesk BIM technology. Visualize, analyze, and optimize your construction projects with precision and accuracy.
              </p>

              <div className="space-y-6 mb-12">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2"><CheckCircle2 className="text-[#fbc02d] w-5 h-5" /> Residential Structures</h4>
                  <p className="text-gray-600 pl-7">Bungalows, Row Houses, High-Rise Apartments, Gated Communities, Villas, MIG Housing etc.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2"><CheckCircle2 className="text-[#fbc02d] w-5 h-5" /> Commercial Buildings</h4>
                  <p className="text-gray-600 pl-7">Office Buildings, Schools, Colleges, Hospitals, Shopping Malls, Hotels, IT Parks etc.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2"><CheckCircle2 className="text-[#fbc02d] w-5 h-5" /> Industrial Facilities</h4>
                  <p className="text-gray-600 pl-7">PEB Sheds, Steel Factory Sheds, Warehouses, Processing Units, Industrial Plants etc.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2"><CheckCircle2 className="text-[#fbc02d] w-5 h-5" /> Infrastructure Projects</h4>
                  <p className="text-gray-600 pl-7">Bridges, Metro Stations, Culverts, Chimneys, Airport Hangars, Water Tanks, Transmission Towers, etc.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => navigate('/contact')} className="bg-slate-900 text-white font-black px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 uppercase tracking-widest text-sm text-center">
                  Schedule a Consultation
                </button>
                <button onClick={() => navigate('/services')} className="bg-[#fbc02d]/10 text-[#bc8f15] font-black px-8 py-4 rounded-xl hover:bg-[#fbc02d]/20 transition-all duration-300 uppercase tracking-widest text-sm text-center border outline-none outline-transparent border-[#fbc02d]">
                  Explore Our Services
                </button>
              </div>
            </div>

            {/* Right Slider */}
            <div className="relative group rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-100 aspect-[4/3] md:aspect-square lg:aspect-[4/5]">
              <img
                src={scImages[currentScSlide]}
                alt={`Structural Engineering ${currentScSlide + 1}`}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105" loading="lazy" decoding="async" />
              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-0 w-full flex justify-center gap-3 z-10 bg-gradient-to-t from-black/50 to-transparent py-4">
                {scImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentScSlide(idx)}
                    className={`transition-all duration-500 rounded-full ${currentScSlide === idx
                      ? 'w-10 h-3 bg-[#fbc02d] shadow-[0_0_10px_#fbc02d]'
                      : 'w-3 h-3 bg-white/60 hover:bg-white hover:scale-125'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-24 px-4 md:px-8 bg-slate-900 border-t-[4px] border-[#fbc02d]">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16">
            <SectionHeading title="Recent Designs" light />
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {projects.map((src, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden shadow-xl group aspect-[4/5] sm:aspect-square xl:aspect-[3/4]">
                <img
                  src={src}
                  alt={`Recent Design ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seismic Analysis & Technical Data Section */}
      <section className="py-24 px-4 md:px-8 bg-slate-50 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <SectionHeading title="Seismic Analysis & Technical Data" />
            <p className="text-gray-600 text-xl font-medium leading-relaxed">
              Advanced seismic analysis and structural response data showcasing our engineering expertise.
            </p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <div className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-between">
              <h3 className="text-xl font-black text-slate-800 mb-6 text-center uppercase tracking-wider">Seismic Impact Analysis</h3>
              <img src="/structural-consultancy/g1.png" alt="Seismic Impact Analysis" className="w-full h-auto object-contain rounded-xl saturate-150" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-between">
              <h3 className="text-xl font-black text-slate-800 mb-6 text-center uppercase tracking-wider">Seismic Zone Distribution</h3>
              <img src="/structural-consultancy/g2.png" alt="Seismic Zone Distribution" className="w-full h-auto object-contain rounded-xl saturate-150" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-between">
              <h3 className="text-xl font-black text-slate-800 mb-6 text-center uppercase tracking-wider">Project Type Distribution</h3>
              <img src="/structural-consultancy/g3.png" alt="Project Type Distribution" className="w-full h-auto object-contain rounded-xl saturate-150" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-between lg:col-start-1 lg:col-span-1">
              <h3 className="text-xl font-black text-slate-800 mb-6 text-center uppercase tracking-wider">Monthly Project Completion Trend</h3>
              <img src="/structural-consultancy/g4.png" alt="Monthly Trend" className="w-full h-auto object-contain rounded-xl saturate-150" loading="lazy" decoding="async" />
            </div>
            <div className="bg-slate-900 rounded-[24px] p-8 shadow-xl transition-shadow duration-300 border border-slate-800 flex flex-col items-center justify-center lg:col-span-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
              <h3 className="text-xl font-black text-white mb-8 text-center uppercase tracking-widest relative z-10 border-b border-white/20 pb-4 inline-block">Advanced Engineering Profile</h3>
              <img src="/structural-consultancy/g5.png" alt="Advanced Profile" className="relative z-10 w-full max-w-[800px] h-auto object-contain rounded-xl" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-indigo-950 py-24 px-4 md:px-8 border-t-[8px] border-[#fbc02d] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y sm:divide-y-0 sm:divide-x divide-indigo-800/50 relative z-10">
          {sc.stats.map((stat, i) => (
            <div key={stat.id || i} className="pt-8 sm:pt-0 hover:scale-110 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tighter">{stat.value}</div>
              <div className="text-[#fbc02d] font-bold tracking-widest uppercase text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 md:px-8 bg-white border-t border-gray-100 text-left">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16">
            <SectionHeading title="Why Choose Us" />
            <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              Our unique strengths that set us apart in the structural engineering industry.
            </p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sc.whyChooseUs.map((feature, idx) => {
              const WIcon = WHY_ICONS[idx % WHY_ICONS.length];
              return (
                <div key={feature.id || idx} className="bg-slate-50 p-8 md:p-10 rounded-[32px] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-300 hover:-translate-y-2 group flex flex-col items-start w-full">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-800 shadow-sm mb-8 group-hover:bg-[#fbc02d] group-hover:text-slate-900 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg">
                    <WIcon size={28} />
                  </div>
                  <h4 className="text-2xl font-black text-gray-900 mb-4 leading-snug">{feature.title}</h4>
                  <p className="text-gray-600 font-medium text-lg leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="bg-slate-50 py-32 px-4 md:px-8 border-t border-gray-200 text-left">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] aspect-[4/5] lg:aspect-[3/4]">
              <img
                src="https://e-construct.in/wp-content/uploads/2024/08/Media-e1768631671611.jpeg"
                alt="Mr. Sandeep Pingale"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-12 left-12 text-white pointer-events-none">
                <p className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-sm mb-3">Our Key Person</p>
                <h2 className="text-4xl md:text-5xl font-black drop-shadow-lg leading-tight">Mr. Sandeep <br />Pingale</h2>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
                <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm">Our Leadership</span>
              </div>
              <SectionHeading title="Meet Our Founder" center={false} />

              <p className="text-gray-600 text-xl md:text-2xl font-medium leading-relaxed mb-12 border-l-4 border-gray-300 pl-6">
                With over two decades of experience in structural engineering, Mr. Pingale has been instrumental in shaping the future of structural engineering education. His vision of practical, hands-on learning has helped countless students transition into successful professionals.
              </p>

              <div className="space-y-8 mb-16">
                <div className="flex gap-6 items-start group">
                  <div className="shrink-0 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group-hover:bg-[#fbc02d] transition-colors duration-300">
                    <Award className="w-8 h-8 text-slate-800" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-900 mb-2">Industry Expert</h4>
                    <p className="text-gray-600 font-medium text-lg leading-relaxed">Leading innovation in structural engineering with cutting-edge methodologies.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="shrink-0 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group-hover:bg-[#fbc02d] transition-colors duration-300">
                    <Building className="w-8 h-8 text-slate-800" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-900 mb-2">Visionary Leader</h4>
                    <p className="text-gray-600 font-medium text-lg leading-relaxed">Pioneering practical education approaches in structural engineering.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="shrink-0 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group-hover:bg-[#fbc02d] transition-colors duration-300">
                    <Users className="w-8 h-8 text-slate-800" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-900 mb-2">Mentor & Guide</h4>
                    <p className="text-gray-600 font-medium text-lg leading-relaxed">Dedicated to nurturing the next generation of structural engineers.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 bg-white p-8 rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100">
                <div className="text-center sm:text-left flex flex-col justify-center border-r border-gray-100 pr-4">
                  <div className="text-4xl lg:text-5xl font-black text-[#fbc02d] mb-3 tracking-tighter">20+</div>
                  <div className="text-gray-800 font-black text-xs uppercase tracking-[0.2em] leading-relaxed">Years Industry<br /> Experience</div>
                </div>
                <div className="text-center sm:text-left flex flex-col justify-center border-r border-gray-100 px-4">
                  <div className="text-4xl lg:text-5xl font-black text-[#fbc02d] mb-3 tracking-tighter">1,000+</div>
                  <div className="text-gray-800 font-black text-xs uppercase tracking-[0.2em] leading-relaxed">Projects<br /> Completed</div>
                </div>
                <div className="text-center sm:text-left flex flex-col justify-center pl-4">
                  <div className="text-4xl lg:text-5xl font-black text-[#fbc02d] mb-3 tracking-tighter">100%</div>
                  <div className="text-gray-800 font-black text-xs uppercase tracking-[0.2em] leading-relaxed">Success<br /> Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Project Consultation */}
      <section className="bg-white py-24 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-slate-100 aspect-[4/3] lg:aspect-[4/3]">
              <img
                src="/structural-consultancy/consultation.png"
                alt="Expert Consultation"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <span className="inline-block bg-blue-50 text-blue-600 text-xs md:text-sm font-black uppercase tracking-[0.2em] px-5 py-2.5 rounded-full mb-8 max-w-max border border-blue-100">
                End-to-End Guidance
              </span>
              <SectionHeading title="Expert Project Consultation" center={false} />

              <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-6">
                Offering end-to-end structural consultation means guiding clients through the entire development process—from initial design to final inspection. Our extensive knowledge helps identify potential challenges early on, ensuring that projects stay on track and within budget.
              </p>

              <div className="border-l-4 border-blue-600 pl-6 py-2 mb-12">
                <p className="text-gray-900 text-lg md:text-xl font-bold leading-relaxed italic">
                  "This proactive approach simplifies complex projects, providing clients with peace of mind and clarity every step of the way."
                </p>
              </div>

              <button onClick={() => navigate('/contact')} className="bg-slate-900 text-white font-black px-8 py-5 rounded-xl hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm shadow-[0_15px_30px_rgba(37,99,235,0.2)] max-w-max active:scale-95">
                Schedule Your First Call Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Horizontal Cards */}
      <section className="bg-slate-50 py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1600px] mx-auto overflow-hidden">
          <div className="text-center mb-16">
            <SectionHeading title="Latest Projects" />
            <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto leading-relaxed border-l-4 border-[#fbc02d] pl-4">
              Explore our recent successful projects that showcase our engineering expertise.
            </p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <ProjectSliderCard
              images={['/projects/gh_1.png', '/projects/gh_2.png']}
              type="Residential"
              title="Group Housing Development (G+4)"
              challenges="Fast-track RCC framed structure (M20/M25) with AAC blockwork & integrated architectural, structural & MEP design."
              status="Executed under IS code compliance within ~6 months delivery timeline."
              location="Residential & Canteen Township"
              onClick={() => navigate('/projects')}
            />
            <ProjectSliderCard
              images={['/projects/emp_1.png', '/projects/emp_2.png', '/projects/emp_5.png']}
              type="High-Rise Residential"
              title="9 Emperio (G+35)"
              challenges="Control dynamic wind deflection, high-rise ETABS FE modeling, and lateral drift calculations for G+35 tower."
              status="Structural design & GFC drawings released. Site construction ongoing."
              location="Patia, Bhubaneswar, Odisha"
              onClick={() => navigate('/projects')}
            />
            <ProjectSliderCard
              images={['/projects/blv_1.png', '/projects/blv_8.png', '/projects/blv_5.png']}
              type="Mixed-Use High-Rise"
              title="9 Boulevard (G+35)"
              challenges="Non-linear dynamic time-history simulation, multi-tower podium parking & green wall structural integration."
              status="Structural analysis & 3D BIM complete, tower execution underway."
              location="Patia, Bhubaneswar, Odisha"
              onClick={() => navigate('/projects')}
            />
            <ProjectSliderCard
              images={[
                '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.41 PM.jpeg',
                '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.41 PM (1).jpeg',
                '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.42 PM.jpeg'
              ]}
              type="Commercial Retail"
              title="Ashoak Mall, Jalna (2B+G+8)"
              challenges="2 Basements + Ground + 8 Upper Floors structural design for high-footfall retail, food court & parking levels."
              status="GFC structural release completed."
              location="Jalna, Maharashtra"
              onClick={() => navigate('/projects')}
            />
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-[#fbc02d] text-white hover:text-slate-900 font-extrabold uppercase tracking-wider text-xs sm:text-sm px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              <span>View All Portfolio Projects on Projects Page</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto px-[5%] flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
            <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs">Testimonials</span>
            <div className="w-8 h-1 bg-[#fbc02d]"></div>
          </div>
          <SectionHeading title="What Our Clients Say" />

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
                <div className="flex justify-center text-[#fbc02d] mb-8 max-w-max mx-auto gap-1">
                  {"★★★★★".split('').map((s, i) => <span key={i} className="text-2xl">{s}</span>)}
                </div>
                <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed mb-10">
                  "{testimonials[activeTestimonial].review}"
                </p>
                <div className="w-16 h-1 bg-[#fbc02d] mx-auto rounded-full mb-6"></div>
                <p className="font-bold text-slate-900 uppercase tracking-widest">{testimonials[activeTestimonial].name}</p>
              </motion.div>
            </AnimatePresence>

            {/* Nav */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-8">
              <button onClick={prevTestimonial} className="w-14 h-14 bg-white text-slate-900 shadow-xl rounded-full flex items-center justify-center hover:bg-[#fbc02d] transition-colors border border-gray-100">
                <ChevronLeft size={24} />
              </button>
              <button onClick={nextTestimonial} className="w-14 h-14 bg-slate-900 text-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#fbc02d] hover:text-slate-900 transition-colors border border-slate-900">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center">
            <span className="font-black text-xl tracking-widest uppercase">Excellent</span>
            <span className="text-gray-500 font-medium text-sm mt-1">Based on 49 reviews</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16">
            <SectionHeading title="Frequently Asked Questions" />
            <p className="text-gray-600 font-medium text-lg leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions about our structural engineering and design services.
            </p>
            <div className="w-24 h-[4px] bg-[#fbc02d] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-8 md:p-10 rounded-[32px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row md:items-start gap-8 group"
              >
                <div className="md:w-5/12 border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-8 shrink-0 flex flex-col">
                  <h3 className="font-black text-2xl text-gray-900 group-hover:text-[#fbc02d] transition-colors duration-300 leading-snug mb-6 cursor-default">{faq.question}</h3>
                  <div className="w-16 h-1 bg-gray-100 rounded-full group-hover:bg-[#fbc02d] transition-colors duration-300 mt-auto"></div>
                </div>
                <div className="md:w-7/12 flex items-center">
                  <p className="text-gray-600 font-medium text-lg leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-900 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[5%]">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-5/12 bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl border border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fbc02d] opacity-5 rounded-bl-full"></div>

              <div className="relative z-10">
                <span className="text-[#fbc02d] font-bold uppercase tracking-widest text-xs mb-4 block">Contact Us Today</span>
                <h2 className="text-3xl md:text-4xl font-medium mb-6 leading-tight tracking-tight">
                  Schedule a consultation with our <span className="text-[#fbc02d] italic">Structural experts</span> to explore how we can help transform your construction projects.
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
                    <a href="https://www.facebook.com/econstruct.in" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Facebook size={20} />
                    </a>
                    <a href="https://www.youtube.com/@Econstructofficial" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Youtube size={20} />
                    </a>
                    <a href="https://wa.me/919036744017" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <MessageCircle size={20} />
                    </a>
                    <a href="https://www.linkedin.com/company/econstruct-design-and-build-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
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
                    {["Structural Design", "Proof Checking", "Consultancy Services", "Turnkey Solutions"].map((service, i) => (
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

      {/* CTA Section */}
      <CTASection />

    </div>
  );
};

export default StructuralConsultancy;
