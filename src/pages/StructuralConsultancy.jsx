import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building, Factory, Home, Droplet, Map, PenTool, CheckCircle2,
  ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, TrendingUp,
  Award, Users, Layout, AlertCircle, Activity, MapPin, Quote,
  ChevronDown, Mail, Phone, Facebook, Youtube, MessageCircle, Linkedin, Star
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
      className="bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] flex flex-col group border border-gray-100 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300 h-full cursor-pointer overflow-hidden"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img src={images[currentIdx]} alt={title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
        <div className="absolute top-2.5 left-2.5 bg-slate-900/90 backdrop-blur-md text-[#fbc02d] px-2.5 py-1 rounded-md text-[0.65rem] font-bold uppercase tracking-wider z-10 border border-[#fbc02d]/20 shadow-sm">
          {type}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-2.5 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <div className="flex gap-1.5">
            {images.map((_, idx) => (
              <div key={idx} className={`h-1.5 rounded-full transition-all duration-500 ${currentIdx === idx ? 'w-4 bg-[#fbc02d]' : 'w-1.5 bg-white/60'}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#fbc02d] transition-colors">{title}</h3>
        <div className="space-y-2.5 mb-4 flex-1">
          <div>
            <h4 className="text-[0.6rem] font-bold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1.5"><AlertCircle size={12} className="text-red-500" /> Challenges</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{challenges}</p>
          </div>
          <div>
            <h4 className="text-[0.6rem] font-bold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1.5"><Activity size={12} className="text-blue-500" /> Current Status</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{status}</p>
          </div>
          <div>
            <h4 className="text-[0.6rem] font-bold text-slate-700 uppercase tracking-wider mb-0.5 flex items-center gap-1.5"><MapPin size={12} className="text-green-500" /> Location</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{location}</p>
          </div>
        </div>
        <button onClick={onClick} className="w-full bg-slate-50 text-blue-600 font-bold px-3.5 py-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 group-hover:bg-blue-600 group-hover:text-white mt-auto active:scale-95 uppercase tracking-wider text-[0.65rem] sm:text-xs">
          View Project Drawings <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
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
            <span>View Econstruct Structure Project Portfolio PDF</span>
          </a>
        </div>
      </section>

      {/* Our Comprehensive Structural Services */}
      <section className="py-16 px-4 md:px-8 bg-slate-50 relative overflow-hidden text-left">
        <div className="max-w-[1500px] mx-auto relative z-10">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <SectionHeading title="Our Comprehensive Structural Services" />
            <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
              We provide end-to-end structural engineering solutions—from concept to construction. Our expertise ensures safety, compliance, and performance across all types of structures.
            </p>
            <div className="w-16 h-[3px] bg-[#fbc02d] mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {sc.services.map((service, idx) => {
              const SvcIcon = SC_SERVICE_ICONS[idx] || Home;
              return (
                <div key={service.id || idx} className="bg-white p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 border border-gray-100 group flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#fbc02d] group-hover:text-slate-900 transition-colors duration-300 shadow-sm">
                      <SvcIcon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* CTA Card */}
            <div className="bg-slate-900 p-5 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#fbc02d]/10 group-hover:bg-[#fbc02d]/20 transition-colors duration-500"></div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 relative z-10 leading-snug">Discuss Your <br />Structural Project</h3>
              <button onClick={() => navigate('/contact')} className="relative z-10 bg-[#fbc02d] text-slate-900 font-bold px-5 py-2.5 rounded-lg shadow-md hover:scale-105 transition-all duration-300 uppercase tracking-wider text-xs flex items-center gap-1.5">
                Contact Us <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* From Homes to Highways (Slider Section) */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white border-t border-gray-100 text-left">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
                <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-xs">Technology</span>
              </div>
              <SectionHeading title="From Homes to Highways" center={false} />
              <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed mb-4 border-l-4 border-[#fbc02d] pl-3 mt-2">
                Experience the power of Autodesk BIM technology. Visualize, analyze, and optimize your construction projects with precision and accuracy.
              </p>

              <div className="space-y-3 mb-6">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5 flex items-center gap-2">
                    <CheckCircle2 className="text-[#fbc02d] w-3.5 h-3.5 shrink-0" /> Residential Structures
                  </h4>
                  <p className="text-gray-500 text-xs pl-5.5 leading-relaxed">Bungalows, Row Houses, High-Rise Apartments, Gated Communities, Villas, MIG Housing etc.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5 flex items-center gap-2">
                    <CheckCircle2 className="text-[#fbc02d] w-3.5 h-3.5 shrink-0" /> Commercial Buildings
                  </h4>
                  <p className="text-gray-500 text-xs pl-5.5 leading-relaxed">Office Buildings, Schools, Colleges, Hospitals, Shopping Malls, Hotels, IT Parks etc.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5 flex items-center gap-2">
                    <CheckCircle2 className="text-[#fbc02d] w-3.5 h-3.5 shrink-0" /> Industrial Facilities
                  </h4>
                  <p className="text-gray-500 text-xs pl-5.5 leading-relaxed">PEB Sheds, Steel Factory Sheds, Warehouses, Processing Units, Industrial Plants etc.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5 flex items-center gap-2">
                    <CheckCircle2 className="text-[#fbc02d] w-3.5 h-3.5 shrink-0" /> Infrastructure Projects
                  </h4>
                  <p className="text-gray-500 text-xs pl-5.5 leading-relaxed">Bridges, Metro Stations, Culverts, Chimneys, Airport Hangars, Water Tanks, Transmission Towers, etc.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => navigate('/contact')} className="bg-slate-900 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-all duration-300 uppercase tracking-wider text-xs text-center">
                  Schedule a Consultation
                </button>
                <button onClick={() => navigate('/services')} className="bg-[#fbc02d]/10 text-[#bc8f15] font-bold px-5 py-2.5 rounded-lg hover:bg-[#fbc02d]/20 transition-all duration-300 uppercase tracking-wider text-xs text-center border border-[#fbc02d]">
                  Explore Our Services
                </button>
              </div>
            </div>

            {/* Right Slider */}
            <div className="relative group rounded-xl overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.1)] bg-slate-100 aspect-[4/3] md:aspect-square lg:aspect-[4/5] w-full">
              <img
                src={scImages[currentScSlide]}
                alt={`Structural Engineering ${currentScSlide + 1}`}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105" loading="lazy" decoding="async" />
              {/* Navigation Dots */}
              <div className="absolute bottom-3 left-0 w-full flex justify-center gap-2 z-10 bg-gradient-to-t from-black/50 to-transparent py-2.5">
                {scImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentScSlide(idx)}
                    className={`transition-all duration-500 rounded-full ${currentScSlide === idx
                      ? 'w-7 h-2 bg-[#fbc02d] shadow-[0_0_6px_#fbc02d]'
                      : 'w-2 h-2 bg-white/60 hover:bg-white hover:scale-125'
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
      <section className="py-10 md:py-12 px-4 md:px-8 bg-slate-50 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <SectionHeading title="Seismic Analysis & Technical Data" />
            <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed mt-2">
              Advanced seismic analysis and structural response data showcasing our engineering expertise.
            </p>
            <div className="w-16 h-[3px] bg-[#fbc02d] mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-2 text-center uppercase tracking-wide">Seismic Impact Analysis</h3>
              <img src="/structural-consultancy/g1.png" alt="Seismic Impact Analysis" className="w-full max-h-[150px] object-contain rounded-lg saturate-150" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-2 text-center uppercase tracking-wide">Seismic Zone Distribution</h3>
              <img src="/structural-consultancy/g2.png" alt="Seismic Zone Distribution" className="w-full max-h-[150px] object-contain rounded-lg saturate-150" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-2 text-center uppercase tracking-wide">Project Type Distribution</h3>
              <img src="/structural-consultancy/g3.png" alt="Project Type Distribution" className="w-full max-h-[150px] object-contain rounded-lg saturate-150" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white rounded-xl p-3.5 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center justify-between lg:col-start-1 lg:col-span-1">
              <h3 className="text-xs sm:text-sm font-bold text-slate-800 mb-2 text-center uppercase tracking-wide">Monthly Project Completion Trend</h3>
              <img src="/structural-consultancy/g4.png" alt="Monthly Trend" className="w-full max-h-[150px] object-contain rounded-lg saturate-150" loading="lazy" decoding="async" />
            </div>
            <div className="bg-slate-900 rounded-xl p-4 sm:p-5 shadow-lg transition-shadow duration-300 border border-slate-800 flex flex-col items-center justify-center lg:col-span-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none"></div>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-3 text-center uppercase tracking-wider relative z-10 border-b border-white/20 pb-2 inline-block">Advanced Engineering Profile</h3>
              <img src="/structural-consultancy/g5.png" alt="Advanced Profile" className="relative z-10 w-full max-w-[520px] max-h-[180px] object-contain rounded-lg" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-indigo-950 py-6 md:py-8 px-4 md:px-8 border-t-[3px] border-[#fbc02d] relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center sm:divide-x divide-indigo-800/50 relative z-10">
          {sc.stats.map((stat, i) => (
            <div key={stat.id || i} className="py-1.5 sm:py-0 hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-black text-white mb-0.5 tracking-tight">{stat.value}</div>
              <div className="text-[#fbc02d] font-bold tracking-wider uppercase text-[0.65rem] sm:text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 md:py-12 px-4 md:px-8 bg-white border-t border-gray-100 text-left">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <SectionHeading title="Why Choose Us" />
            <p className="text-gray-600 font-medium text-xs md:text-sm mx-auto leading-relaxed mt-2">
              Our unique strengths that set us apart in the structural engineering industry.
            </p>
            <div className="w-16 h-[3px] bg-[#fbc02d] mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {sc.whyChooseUs.map((feature, idx) => {
              const WIcon = WHY_ICONS[idx % WHY_ICONS.length];
              return (
                <div key={feature.id || idx} className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-gray-100 hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:bg-white transition-all duration-300 hover:-translate-y-1 group flex flex-col items-start w-full">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-800 shadow-sm mb-3 group-hover:bg-[#fbc02d] group-hover:text-slate-900 group-hover:scale-105 transition-all duration-300">
                    <WIcon size={18} />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-1.5 leading-snug">{feature.title}</h4>
                  <p className="text-gray-500 font-normal text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Leadership */}
      <section className="bg-slate-50 py-12 md:py-14 px-4 md:px-8 border-t border-gray-200 text-left">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] w-full h-[360px] lg:h-full min-h-[320px] max-h-[460px]">
              <img
                src="https://e-construct.in/wp-content/uploads/2024/08/Media-e1768631671611.jpeg"
                alt="Mr. Sandeep Pingale"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-5 left-5 text-white pointer-events-none">
                <p className="text-[#fbc02d] font-bold tracking-[0.2em] uppercase text-xs mb-1">Our Key Person</p>
                <h2 className="text-xl md:text-2xl font-black drop-shadow-lg leading-tight">Mr. Sandeep <br />Pingale</h2>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-[2px] bg-[#fbc02d]"></span>
                <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-xs">Our Leadership</span>
              </div>
              <SectionHeading title="Meet Our Founder" center={false} />

              <p className="text-gray-600 text-xs md:text-sm font-medium leading-relaxed mb-6 border-l-4 border-gray-300 pl-3.5 mt-2">
                With over two decades of experience in structural engineering, Mr. Pingale has been instrumental in shaping the future of structural engineering education. His vision of practical, hands-on learning has helped countless students transition into successful professionals.
              </p>

              <div className="space-y-3.5 mb-6">
                <div className="flex gap-3.5 items-start group">
                  <div className="shrink-0 bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 group-hover:bg-[#fbc02d] transition-colors duration-300">
                    <Award className="w-4 h-4 text-slate-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">Industry Expert</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Leading innovation in structural engineering with cutting-edge methodologies.</p>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start group">
                  <div className="shrink-0 bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 group-hover:bg-[#fbc02d] transition-colors duration-300">
                    <Building className="w-4 h-4 text-slate-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">Visionary Leader</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Pioneering practical education approaches in structural engineering.</p>
                  </div>
                </div>
                <div className="flex gap-3.5 items-start group">
                  <div className="shrink-0 bg-white p-2.5 rounded-xl shadow-sm border border-gray-100 group-hover:bg-[#fbc02d] transition-colors duration-300">
                    <Users className="w-4 h-4 text-slate-800" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">Mentor & Guide</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">Dedicated to nurturing the next generation of structural engineers.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 bg-white p-4 sm:p-5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.04)] border border-gray-100">
                <div className="text-center sm:text-left flex flex-col justify-center border-r border-gray-100 pr-2">
                  <div className="text-2xl lg:text-3xl font-black text-[#fbc02d] mb-1 tracking-tight">20+</div>
                  <div className="text-gray-700 font-bold text-[0.65rem] sm:text-xs uppercase tracking-wider leading-tight">Years Industry<br /> Experience</div>
                </div>
                <div className="text-center sm:text-left flex flex-col justify-center border-r border-gray-100 px-2">
                  <div className="text-2xl lg:text-3xl font-black text-[#fbc02d] mb-1 tracking-tight">1,000+</div>
                  <div className="text-gray-700 font-bold text-[0.65rem] sm:text-xs uppercase tracking-wider leading-tight">Projects<br /> Completed</div>
                </div>
                <div className="text-center sm:text-left flex flex-col justify-center pl-2">
                  <div className="text-2xl lg:text-3xl font-black text-[#fbc02d] mb-1 tracking-tight">100%</div>
                  <div className="text-gray-700 font-bold text-[0.65rem] sm:text-xs uppercase tracking-wider leading-tight">Success<br /> Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Project Consultation */}
      <section className="bg-white py-12 md:py-14 px-4 md:px-8 border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)] bg-slate-100 aspect-[4/3] w-full max-h-[380px]">
              <img
                src="/structural-consultancy/consultation.png"
                alt="Expert Consultation"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <span className="inline-block bg-blue-50 text-blue-600 text-[0.65rem] sm:text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 max-w-max border border-blue-100">
                End-to-End Guidance
              </span>
              <SectionHeading title="Expert Project Consultation" center={false} />

              <p className="text-gray-600 text-xs sm:text-sm font-medium leading-relaxed mb-3.5 mt-2">
                Offering end-to-end structural consultation means guiding clients through the entire development process—from initial design to final inspection. Our extensive knowledge helps identify potential challenges early on, ensuring that projects stay on track and within budget.
              </p>

              <div className="border-l-2 sm:border-l-4 border-blue-600 pl-3.5 py-1 mb-6">
                <p className="text-gray-900 text-xs sm:text-sm font-bold leading-relaxed italic">
                  "This proactive approach simplifies complex projects, providing clients with peace of mind and clarity every step of the way."
                </p>
              </div>

              <button onClick={() => navigate('/contact')} className="bg-slate-900 text-white font-bold px-5 py-2.5 rounded-lg hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider text-xs shadow-md max-w-max active:scale-95">
                Schedule Your First Call Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects Horizontal Cards */}
      <section className="bg-slate-50 py-10 md:py-12 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto overflow-hidden">
          <div className="text-center mb-8">
            <SectionHeading title="Latest Projects" />
            <p className="text-gray-600 font-medium text-xs md:text-sm max-w-xl mx-auto leading-relaxed border-l-2 sm:border-l-4 border-[#fbc02d] pl-3 mt-2">
              Explore our recent successful projects that showcase our engineering expertise.
            </p>
            <div className="w-16 h-[3px] bg-[#fbc02d] mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
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

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#fbc02d] text-white hover:text-slate-900 font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>View All Portfolio Projects on Projects Page</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-10 md:py-12 bg-gray-50 border-t border-gray-100 text-left">
        <div className="max-w-[1500px] mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#fbc02d]"></span>
                <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-[0.65rem] sm:text-xs">Testimonials</span>
              </div>
              <SectionHeading title="What Our Clients Say" center={false} />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm text-xs">
                <div className="flex text-[#fbc02d]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#fbc02d]" />
                  ))}
                </div>
                <span className="font-bold text-slate-900 text-[0.7rem]">4.9/5</span>
                <span className="text-gray-400 text-[0.65rem]">(49+ Reviews)</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 rounded-full bg-white hover:bg-[#fbc02d] text-slate-800 hover:text-slate-900 transition-colors border border-gray-200 shadow-sm flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="w-8 h-8 rounded-full bg-slate-900 hover:bg-[#fbc02d] text-white hover:text-slate-900 transition-colors shadow-sm flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[0, 1, 2].map((offset) => {
              const item = testimonials[(activeTestimonial + offset) % testimonials.length];
              const initials = item.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase();

              return (
                <div
                  key={`${item.id || offset}-${activeTestimonial}`}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-[#fbc02d] gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={13} className="fill-[#fbc02d]" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[0.65rem] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        <CheckCircle2 size={10} /> Verified Client
                      </span>
                    </div>

                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed italic mb-4">
                      "{item.review}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-auto">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-[#fbc02d] font-bold text-[0.7rem] flex items-center justify-center shrink-0 shadow-sm">
                      {initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">{item.name}</h4>
                      <p className="text-[0.65rem] text-gray-400">Structural Project Client</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-1.5 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx ? 'w-6 bg-[#fbc02d]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-10 md:py-12 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-8">
            <SectionHeading title="Frequently Asked Questions" />
            <p className="text-gray-600 font-medium text-xs md:text-sm leading-relaxed max-w-xl mx-auto mt-2">
              Find answers to common questions about our structural engineering and design services.
            </p>
            <div className="w-16 h-[3px] bg-[#fbc02d] mx-auto rounded-full mt-3"></div>
          </div>

          <div className="flex flex-col gap-3.5 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-4 sm:p-5 rounded-xl hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col md:flex-row md:items-start gap-4 sm:gap-6 group"
              >
                <div className="md:w-5/12 border-b md:border-b-0 md:border-r border-gray-100 pb-3 md:pb-0 md:pr-5 shrink-0 flex flex-col">
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#fbc02d] transition-colors duration-300 leading-snug mb-2 cursor-default">{faq.question}</h3>
                  <div className="w-10 h-0.5 bg-gray-100 rounded-full group-hover:bg-[#fbc02d] transition-colors duration-300 mt-auto"></div>
                </div>
                <div className="md:w-7/12 flex items-center">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-14 px-4 md:px-8 bg-slate-900 relative z-10">
        <div className="max-w-[1500px] mx-auto">

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

            {/* Left Side: Contact Info */}
            <div className="w-full lg:w-5/12 bg-slate-900 rounded-2xl p-5 sm:p-6 md:p-8 text-white relative overflow-hidden shadow-xl border border-slate-800 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#fbc02d] opacity-5 rounded-bl-full pointer-events-none"></div>

              <div className="relative z-10">
                <span className="text-[#fbc02d] font-bold uppercase tracking-wider text-[0.65rem] mb-2 block">Contact Us Today</span>
                <h2 className="text-xl md:text-2xl font-bold mb-4 leading-tight tracking-tight">
                  Schedule a consultation with our <span className="text-[#fbc02d] italic">Structural experts</span> to explore how we can help transform your construction projects.
                </h2>

                <div className="space-y-3.5 mt-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#fbc02d] flex-shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-[0.65rem] font-bold uppercase tracking-wider mb-0.5">Email Us</h4>
                      <div className="flex flex-col text-xs sm:text-sm font-medium">
                        <a href="mailto:info@e-construct.org" className="hover:text-[#fbc02d] transition-colors">info@e-construct.org</a>
                        <a href="mailto:business@e-construct.org" className="hover:text-[#fbc02d] transition-colors">business@e-construct.org</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#fbc02d] flex-shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-[0.65rem] font-bold uppercase tracking-wider mb-0.5">Call Us</h4>
                      <div className="flex flex-col text-xs sm:text-sm font-medium">
                        <a href="tel:+919036744017" className="hover:text-[#fbc02d] transition-colors">+91 9036744017</a>
                        <a href="tel:+917259921111" className="hover:text-[#fbc02d] transition-colors">+91 7259921111</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#fbc02d] flex-shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-[0.65rem] font-bold uppercase tracking-wider mb-0.5">Visit Us</h4>
                      <p className="text-xs sm:text-sm font-normal text-gray-300 leading-relaxed">
                        Venkatdhari Heights, 1st & 2nd Floor, Parapanna Agrahara Main Road, Opposite Sai Poorna Premier Apartment, Bangalore - 560068.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="mt-6">
                  <h4 className="text-gray-400 text-[0.65rem] font-bold uppercase tracking-wider mb-2.5">Follow Us</h4>
                  <div className="flex gap-2.5">
                    <a href="https://www.facebook.com/econstruct.in" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Facebook size={15} />
                    </a>
                    <a href="https://www.youtube.com/@Econstructofficial" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Youtube size={15} />
                    </a>
                    <a href="https://wa.me/919036744017" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <MessageCircle size={15} />
                    </a>
                    <a href="https://www.linkedin.com/company/econstruct-design-and-build-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Linkedin size={15} />
                    </a>
                    <a href="mailto:info@e-construct.org" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#fbc02d] hover:text-slate-900 transition-all duration-300 flex items-center justify-center text-white">
                      <Mail size={15} />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-7/12 bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 flex flex-col justify-center relative z-20">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Send Us A Message</h3>

              <form className="space-y-3.5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1 block">Name *</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#fbc02d] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 mb-1 block">Email *</label>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#fbc02d] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 mb-1 block">Phone No. *</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#fbc02d] focus:border-transparent transition-all"
                  />
                </div>

                <div className="pt-2">
                  <label className="text-xs font-bold text-gray-700 mb-2 block">What Are You Looking For?</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {["Structural Design", "Proof Checking", "Consultancy Services", "Turnkey Solutions"].map((service, i) => (
                      <label key={i} className="flex items-center gap-2 p-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group">
                        <div className="relative flex items-center justify-center">
                          <input type="radio" name="service" className="peer appearance-none w-4 h-4 border-2 border-gray-300 rounded-full checked:border-[#fbc02d] transition-colors" />
                          <div className="absolute w-2 h-2 bg-[#fbc02d] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                        </div>
                        <span className="text-xs font-medium text-gray-700 group-hover:text-slate-900">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-[#fbc02d] text-white hover:text-slate-900 font-bold py-2.5 rounded-lg transition-all duration-300 text-xs uppercase tracking-wider shadow-md mt-4"
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
