import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, FileText, X, Maximize2, Layers, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import GoregaonMulundLinkRoad from '../assets/GoregaonMulundLinkRoad.webp';
import { useAdmin } from '../context/AdminContext';

const HeroSection = () => {
  const { data } = useAdmin();
  const pc = data.projectsPageContent || { heroTitle: 'Our Premier Structural & Architectural Projects' };
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <img src={GoregaonMulundLinkRoad} alt="E-Construct Projects" className="absolute inset-0 w-full h-full object-cover scale-105" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pb-16 w-full">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-amber-500" />
            <span className="text-amber-400 font-bold uppercase tracking-[0.2em] text-xs">Featured Engineering Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight tracking-tight accent-text italic">
            {pc.heroTitle || 'Iconic Projects & Engineering Excellence'}
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

// ─── PROJECT HIGHLIGHTS DATA ───────────────────────────────────────────────────

const highlightedProjects = [
  {
    id: 'gh',
    title: '1. Group Housing Development',
    subtitle: 'Featured Residential & Canteen Development',
    details: [
      { label: 'Built-up Area', val: '~1,14,700 SFT' },
      { label: 'Structure', val: 'RCC Framed Structure (M20/M25)' },
      { label: 'Infill Work', val: 'AAC blockwork, 10 ft floor-to-floor height' },
      { label: 'Execution Time', val: '~6 Months Fast-Track Delivery' }
    ],
    description: 'G+4 residential towers (Studio & 2BHK) and G+1 canteen–auditorium block with a total built-up area of ~1,14,700 SFT, designed as an RCC framed structure (M20/M25) with AAC blockwork and 10 ft floor-to-floor height.\n\nScope includes end-to-end construction with integrated architectural, structural, and MEP services—featuring vitrified/granite flooring, UPVC windows, teak main doors, FRLS electrical systems, CPVC plumbing, and waterproofing. Executed under IS code compliance with full QA/QC, site supervision, and fast-track delivery within ~6 months.',
    pdfLink: 'https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQCqQApTsC9xSrApec3t2wffAbDZdSxTNrDWUbYp23Oz82M?e=Ac46PJ',
    pdfTitle: 'View Econstruct Residential Project Portfolio PDF',
    images: [
      { src: '/projects/gh_1.png', label: 'Exterior Render View & Landscaping' },
      { src: '/projects/gh_2.png', label: 'Night Lighting & Building Elevation' }
    ]
  },
  {
    id: 'emperio',
    title: '2. 9 Emperio (G+35)',
    subtitle: 'High-Rise Iconic Residential Tower',
    location: 'Raghunathpur, Nandankanan Road, Patia, Bhubaneswar, Odisha',
    details: [
      { label: 'Height / Floors', val: 'G+35 High-Rise Structure' },
      { label: 'Total Built Area', val: '2,290 sq.m / 24,649.33 sq.ft' },
      { label: 'Analysis Software', val: 'ETABS, SAFE, STAAD.Pro' }
    ],
    description: 'Project Name: 9 Emperio (G+35)\nLocation: Raghunathpur, Nandankanan Road, Patia, Bhubaneswar, Odisha\nTotal area: 2,290 sq.m / 24,649.331 sq.ft\n\nHigh-rise structural design and FE modeling project featuring full ETABS dynamic analysis, wind loading simulations, lateral drift calculations, and detailed rebar execution drawings.',
    pdfLink: 'https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQDD1iJ5QnLrR7WNyLMscPTWAVN-o2PxImS4BlMeFb47rW4?e=iQx2ci',
    pdfTitle: 'View Econstruct Structure Project Portfolio PDF',
    images: [
      { src: '/projects/emp_1.png', label: 'ETABS 3D Structural Mesh Model' },
      { src: '/projects/emp_2.png', label: 'Photorealistic Architectural Render' },
      { src: '/projects/emp_3.png', label: 'FE Stress & Load Distribution Model' },
      { src: '/projects/emp_4.png', label: 'Structural Core & Shear Wall Wireframe' },
      { src: '/projects/emp_5.png', label: 'Tower Elevation & Glass Facade' },
      { src: '/projects/emp_6.png', label: 'Structural Steel & Foundation Framing' }
    ]
  },
  {
    id: 'boulevard',
    title: '3. 9 Boulerverd (G+35)',
    subtitle: 'Luxury Mixed-Use High-Rise Development',
    location: 'Raghunathpur, near HP Petrol Pump, Nandankanan Road, Patia, Bhubaneswar',
    details: [
      { label: 'Height / Floors', val: 'G+35 Multi-Tower Structure' },
      { label: 'Total Built Area', val: '6,137 sq.m / 66,058.05 sq.ft' },
      { label: 'Engineering Scope', val: 'Structural Analysis & Architectural BIM' }
    ],
    description: 'Project Name: 9 Boulerverd (G+35)\nLocation: Raghunathpur, near HP Petrol Pump, Nandankanan Road, Patia, Bhubaneswar\nTotal area: 6,137 sq.m / 66,058.0543 sq.ft\n\nMassive landmark high-rise development consisting of multiple G+35 towers with podium parking, retail integration, and extensive green spaces. E-Construct handled complete 3D structural analysis, non-linear dynamic time-history simulation, and GFC drawing production.',
    pdfLink: 'https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQDD1iJ5QnLrR7WNyLMscPTWAVN-o2PxImS4BlMeFb47rW4?e=iQx2ci',
    pdfTitle: 'View Econstruct Structure Project Portfolio PDF',
    images: [
      { src: '/projects/blv_1.png', label: 'Structural Slab Strain Diagram 1' },
      { src: '/projects/blv_2.png', label: 'Structural Slab Strain Diagram 2' },
      { src: '/projects/blv_3.png', label: 'Structural Slab Strain Diagram 3' },
      { src: '/projects/blv_4.png', label: 'Structural Slab Strain Diagram 4' },
      { src: '/projects/blv_5.png', label: 'ETABS Vertical Tower Mesh' },
      { src: '/projects/blv_6.png', label: 'ETABS Deformation Heatmap' },
      { src: '/projects/blv_7.png', label: 'Structural FE Analysis Elevation' },
      { src: '/projects/blv_8.png', label: 'Main Boulevard Architectural Exterior' },
      { src: '/projects/blv_9.png', label: 'Aerial View of Multi-Tower Complex' },
      { src: '/projects/blv_10.png', label: 'Top-Down Masterplan Render' },
      { src: '/projects/blv_11.png', label: 'Podium Green Wall & Entrance Detail' },
      { src: '/projects/blv_12.png', label: 'Tower Elevation & Facade View' }
    ]
  },
  {
    id: 'mall',
    title: '4. Ashoak Mall, Jalna (2B+G+8)',
    subtitle: 'Premium Commercial & Lifestyle Hub',
    location: 'Jalna, Maharashtra',
    details: [
      { label: 'Configuration', val: '2 Basements + Ground + 8 Upper Floors (2B+G+8)' },
      { label: 'Typology', val: 'Commercial Retail, Food Court & Lifestyle Hub' }
    ],
    description: 'Ashoak Mall is a modern, premium commercial development in Jalna, designed to redefine shopping and business experience in the city. Bringing together retail, food, entertainment, and lifestyle under one roof, this project is planned to create a high-footfall commercial hub with modern architecture, attractive design, and business-focused planning. Ashok Mall is not just a shopping complex — it is a growth opportunity for investors and business owners.',
    pdfLink: 'https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQAmFV9pR-ZR65T0tBJkYn9AaYbYw0QdCxSkxwRTll14o4?e=oFL4Qv',
    pdfTitle: 'View Econstruct Hospitality & Commercial Project PDF',
    images: [
      { src: '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.41 PM.jpeg', label: 'Ashok Mall Exterior 3D Perspective Render' },
      { src: '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.41 PM (1).jpeg', label: 'Ashok Mall Storefront & Entrance View' },
      { src: '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.42 PM.jpeg', label: 'Ashok Mall Commercial Retail & Facade' },
      { src: '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.42 PM (1).jpeg', label: 'Ashok Mall Floor Plan & Structural Drawing' },
      { src: '/ashok mall/WhatsApp Image 2026-08-14 at 3.46.02 PM.jpeg', label: 'Ashok Mall Architectural Elevation Plan' }
    ]
  },
  {
    id: 'grk',
    title: '5. GRK Africa Project',
    subtitle: 'International High-Rise Infrastructure',
    location: 'Africa',
    details: [
      { label: 'Scope', val: 'Architectural, Structural & BIM Project Management' },
      { label: 'Scale', val: 'Multi-Tower Residential & Commercial Complex' }
    ],
    description: 'Significant international infrastructure development project in Africa, showcasing E-Construct\'s international engineering, BIM modeling, and project management capabilities. Features multi-tower residential blocks, expansive terrace amenities, podium levels, and complex structural coordination.',
    pdfLink: 'https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQBRnE9Asb0aS7qq8yX50plvASFisAvU7rUlsNgwOST0VmE?e=gZnr5t',
    pdfTitle: 'View Econstruct BIM Project Portfolio PDF',
    images: [
      { src: '/projects/grk_1.jpeg', label: 'Complex Exterior Perspective Render' },
      { src: '/projects/grk_2.jpeg', label: 'Upward Angle Perspective & Palm Landscaping' },
      { src: '/projects/grk_3.jpeg', label: 'Balcony View Looking Out Over Tower Complex' },
      { src: '/projects/grk_4.png', label: 'BIM 3D Model Render of Multi-Building Podium' },
      { src: '/projects/grk_5.png', label: 'Architectural Site Layout & Master Plan' },
      { src: '/projects/grk_6.png', label: 'Basement Parking & Structural Layout Drawing' }
    ]
  }
];

const ProjectHighlights = () => {
  const [activeModal, setActiveModal] = useState(null); // { pIndex, iIndex }
  const [zoomScale, setZoomScale] = useState(1);

  const currentProject = activeModal !== null ? highlightedProjects[activeModal.pIndex] : null;
  const currentImg = currentProject ? currentProject.images[activeModal.iIndex] : null;

  // Reset zoom when modal or active image changes
  React.useEffect(() => {
    setZoomScale(1);
  }, [activeModal?.pIndex, activeModal?.iIndex]);

  // Lock body scroll when modal is active
  React.useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeModal]);

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    if (!activeModal || !currentProject) return;
    const total = currentProject.images.length;
    const prevIdx = (activeModal.iIndex - 1 + total) % total;
    setActiveModal({ ...activeModal, iIndex: prevIdx });
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (!activeModal || !currentProject) return;
    const total = currentProject.images.length;
    const nextIdx = (activeModal.iIndex + 1) % total;
    setActiveModal({ ...activeModal, iIndex: nextIdx });
  };

  const handleZoomIn = (e) => {
    if (e) e.stopPropagation();
    setZoomScale(prev => Math.min(prev + 0.5, 3.5));
  };

  const handleZoomOut = (e) => {
    if (e) e.stopPropagation();
    setZoomScale(prev => Math.max(prev - 0.5, 1));
  };

  const handleResetZoom = (e) => {
    if (e) e.stopPropagation();
    setZoomScale(1);
  };

  // Keyboard shortcut listener
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModal === null) return;
      if (e.key === 'Escape') setActiveModal(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === '0') handleResetZoom();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal]);

  return (
    <div className="bg-slate-50 space-y-px">
      {highlightedProjects.map((project, pIndex) => (
        <section key={project.id} className="py-20 md:py-28 px-4 sm:px-8 border-b border-gray-200 last:border-b-0 bg-white">
          <div className="max-w-[1400px] mx-auto">
            {/* Header Area */}
            <div className="max-w-4xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-[2px] bg-amber-500" />
                <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs">{project.subtitle}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium text-slate-900 leading-tight mb-6">
                {project.title}
              </h2>
              {project.location && (
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mb-6">
                  <MapPin size={16} className="text-amber-500 shrink-0" />
                  <span>{project.location}</span>
                </div>
              )}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mb-8 whitespace-pre-line">
                {project.description}
              </p>

              {/* Key Specs */}
              {project.details && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  {project.details.map((d, idx) => (
                    <div key={idx}>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">{d.label}</span>
                      <span className="text-slate-900 font-extrabold text-sm sm:text-base mt-1 block">{d.val}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* PDF View Portfolio Button */}
              {project.pdfLink && (
                <a 
                  href={project.pdfLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.pdfLink, '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer relative z-10"
                >
                  <FileText size={18} />
                  <span>{project.pdfTitle}</span>
                  <ExternalLink size={14} className="opacity-70" />
                </a>
              )}
            </div>

            {/* Gallery Grid */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                <Layers size={14} className="text-amber-500" />
                Project Drawings &amp; Visuals ({project.images.length} Files) — Click to Enlarge
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {project.images.map((img, iIndex) => (
                  <motion.div 
                    key={iIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: iIndex * 0.05 }}
                    onClick={() => setActiveModal({ pIndex, iIndex })}
                    className="group relative h-[300px] overflow-hidden rounded-2xl shadow-md bg-slate-100 cursor-pointer border border-slate-200 hover:border-amber-500/50 transition-all duration-300"
                  >
                    <img 
                      src={img.src} 
                      alt={img.label} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-xs leading-snug line-clamp-2">{img.label}</p>
                      <span className="text-amber-400 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 mt-2 group-hover:underline">
                        <Maximize2 size={10} /> Inspect Drawing
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* Framed Window Lightbox Modal with Interactive Zoom & Pan */}
      <AnimatePresence>
        {activeModal !== null && currentProject && currentImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
          >
            {/* Window Card Frame */}
            <motion.div 
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-slate-900 border border-slate-700/80 rounded-2xl sm:rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden"
            >
              {/* Window Header Bar */}
              <div className="bg-slate-950 border-b border-slate-800/80 px-6 py-4 flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-2.5 h-2.5 bg-amber-400 rounded-full shrink-0 animate-pulse" />
                  <h3 className="text-white font-extrabold text-sm sm:text-base tracking-wide truncate">
                    {currentProject.title}
                  </h3>
                  <span className="bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/20 shrink-0 hidden sm:inline-block">
                    Drawing {activeModal.iIndex + 1} of {currentProject.images.length}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {/* Interactive Zoom Toolbar */}
                  <div className="flex items-center gap-1 bg-slate-900 border border-slate-700/80 px-2.5 py-1 rounded-xl shadow-inner">
                    <button 
                      onClick={handleZoomOut}
                      disabled={zoomScale <= 1}
                      className="p-1.5 text-gray-300 hover:text-amber-400 disabled:opacity-30 disabled:hover:text-gray-300 transition-colors rounded-lg hover:bg-white/5"
                      title="Zoom Out (-)"
                    >
                      <ZoomOut size={16} />
                    </button>
                    <span className="text-amber-400 font-mono text-xs font-extrabold px-1.5 min-w-[44px] text-center">
                      {Math.round(zoomScale * 100)}%
                    </span>
                    <button 
                      onClick={handleZoomIn}
                      disabled={zoomScale >= 3.5}
                      className="p-1.5 text-gray-300 hover:text-amber-400 disabled:opacity-30 disabled:hover:text-gray-300 transition-colors rounded-lg hover:bg-white/5"
                      title="Zoom In (+)"
                    >
                      <ZoomIn size={16} />
                    </button>
                    {zoomScale > 1 && (
                      <button 
                        onClick={handleResetZoom}
                        className="p-1.5 text-amber-400 hover:text-amber-300 transition-colors border-l border-slate-700 ml-1 pl-2"
                        title="Reset Zoom (100%)"
                      >
                        <RotateCcw size={14} />
                      </button>
                    )}
                  </div>

                  {/* Close Button */}
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-amber-500 text-gray-300 hover:text-slate-950 border border-slate-700 flex items-center justify-center transition-all duration-300"
                    aria-label="Close Modal"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Window Body Canvas Stage */}
              <div 
                className="relative flex-1 w-full bg-slate-950 overflow-hidden flex items-center justify-center p-4 min-h-[320px] sm:min-h-[420px]"
                onWheel={(e) => {
                  if (e.deltaY < 0) setZoomScale(s => Math.min(s + 0.25, 3.5));
                  else setZoomScale(s => Math.max(s - 0.25, 1));
                }}
              >
                {/* Previous Button */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-3.5 z-30 w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 flex items-center justify-center transition-all duration-300 shadow-xl group"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* Scalable & Draggable High-Res Drawing Image */}
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <motion.img 
                    key={currentImg.src}
                    src={currentImg.src} 
                    alt={currentImg.label} 
                    animate={{ scale: zoomScale }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    drag={zoomScale > 1}
                    dragConstraints={{ left: -400, right: 400, top: -400, bottom: 400 }}
                    onDoubleClick={() => setZoomScale(s => (s > 1 ? 1 : 2))}
                    className={`max-h-[58vh] max-w-[85vw] w-auto h-auto object-contain rounded-xl shadow-2xl transition-shadow ${
                      zoomScale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'
                    }`}
                  />
                </div>

                {/* Next Button */}
                <button 
                  onClick={handleNext}
                  className="absolute right-3.5 z-30 w-11 h-11 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 flex items-center justify-center transition-all duration-300 shadow-xl group"
                  aria-label="Next Image"
                >
                  <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Window Footer Bar */}
              <div className="bg-slate-950 border-t border-slate-800/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <h4 className="text-white text-sm sm:text-base font-extrabold tracking-wide truncate">
                    {currentImg.label}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1 leading-normal font-medium">
                    Double-click or scroll wheel to zoom • Drag to pan when zoomed in
                  </p>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <button 
                    onClick={handlePrev}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-gray-200 rounded-xl text-xs font-bold transition-all border border-slate-700 flex items-center gap-1.5 shadow-sm"
                  >
                    <ChevronLeft size={14} /> Prev
                  </button>
                  <button 
                    onClick={handleNext}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-gray-200 rounded-xl text-xs font-bold transition-all border border-slate-700 flex items-center gap-1.5 shadow-sm"
                  >
                    Next <ChevronRight size={14} />
                  </button>
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95 ml-1"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectsPage = () => (
  <div className="bg-white">
    <HeroSection />
    <ProjectHighlights />
  </div>
);

export default ProjectsPage;
