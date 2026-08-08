import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, Download, X, Maximize2, Layers } from 'lucide-react';
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
    pdfTitle: 'Download Econstruct Residential Project Portfolio PDF',
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
    pdfTitle: 'Download Econstruct Structure Project Portfolio PDF',
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
    pdfTitle: 'Download Econstruct Structure Project Portfolio PDF',
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
    pdfTitle: 'Download Econstruct Hospitality & Commercial Project PDF',
    images: [
      { src: '/projects/mall_1.png', label: 'Exterior Commercial Glass Facade' },
      { src: '/projects/mall_2.png', label: 'Retail Storefront & Street Entrance' },
      { src: '/projects/mall_3.png', label: 'Luxury Brand Entrance & Steps' },
      { src: '/projects/mall_4.png', label: 'Basement Parking & Retail Plan' },
      { src: '/projects/mall_5.png', label: 'Ground Floor Commercial Mall Plan' },
      { src: '/projects/mall_6.png', label: 'First Floor Store Layout Plan' },
      { src: '/projects/mall_7.png', label: 'Food Court & Entertainment Level Plan' }
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
    pdfTitle: 'Download Econstruct BIM Project Portfolio PDF',
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
  const [selectedImg, setSelectedImg] = useState(null);

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

              {/* PDF Download Button */}
              {project.pdfLink && (
                <a 
                  href={project.pdfLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <Download size={18} />
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
                    onClick={() => setSelectedImg({ ...img, projectTitle: project.title })}
                    className="group relative h-[300px] overflow-hidden rounded-2xl shadow-md bg-slate-100 cursor-pointer border border-slate-200"
                  >
                    <img 
                      src={img.src} 
                      alt={img.label} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-xs leading-snug line-clamp-2">{img.label}</p>
                      <span className="text-amber-400 text-[10px] uppercase font-bold tracking-wider flex items-center gap-1 mt-2 group-hover:underline">
                        <Maximize2 size={10} /> Expand Drawing
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                aria-label="Close Preview"
              >
                <X size={24} />
              </button>
              
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full flex flex-col items-center">
                <img 
                  src={selectedImg.src} 
                  alt={selectedImg.label} 
                  className="max-h-[75vh] w-auto object-contain p-2"
                />
                <div className="w-full bg-slate-950 px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <div>
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">{selectedImg.projectTitle}</span>
                    <span className="text-white text-sm font-medium">{selectedImg.label}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedImg(null)}
                    className="bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-lg transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
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
