import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, ExternalLink, FileText, X, Maximize2, Layers, 
  ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw,
  Search, Building2, Landmark, Compass, Filter
} from 'lucide-react';
import GoregaonMulundLinkRoad from '../assets/GoregaonMulundLinkRoad.webp';
import { useAdmin } from '../context/AdminContext';

const HeroSection = () => {
  const { data } = useAdmin();
  const pc = data.projectsPageContent || { heroTitle: 'Our Premier Structural & Architectural Projects' };
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <img 
        src={GoregaonMulundLinkRoad} 
        alt="E-Construct Projects" 
        className="absolute inset-0 w-full h-full object-cover scale-105" 
        loading="lazy" 
        decoding="async" 
      />
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

// ─── COMPLETE HIGHLIGHTED PROJECTS DATA ───────────────────────────────────────────

const highlightedProjects = [
  {
    "id": "gh",
    "title": "1. Group Housing Development",
    "subtitle": "Featured Residential & Canteen Development",
    "category": "Residential",
    "location": "India",
    "details": [
      {
        "label": "Built-up Area",
        "val": "~1,14,700 SFT"
      },
      {
        "label": "Structure",
        "val": "RCC Framed Structure (M20/M25)"
      },
      {
        "label": "Infill Work",
        "val": "AAC blockwork, 10 ft floor height"
      },
      {
        "label": "Execution Time",
        "val": "~6 Months Fast-Track Delivery"
      }
    ],
    "description": "G+4 residential towers (Studio & 2BHK) and G+1 canteen\u2013auditorium block with a total built-up area of ~1,14,700 SFT, designed as an RCC framed structure (M20/M25) with AAC blockwork and 10 ft floor-to-floor height.\n\nScope includes end-to-end construction with integrated architectural, structural, and MEP services\u2014featuring vitrified/granite flooring, UPVC windows, teak main doors, FRLS electrical systems, CPVC plumbing, and waterproofing. Executed under IS code compliance with full QA/QC, site supervision, and fast-track delivery within ~6 months.",
    "pdfLink": "https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQCqQApTsC9xSrApec3t2wffAbDZdSxTNrDWUbYp23Oz82M?e=Ac46PJ",
    "pdfTitle": "View Econstruct Residential Project Portfolio PDF",
    "images": [
      {
        "src": "/projects/gh_1.png",
        "label": "Exterior Render View & Landscaping"
      },
      {
        "src": "/projects/gh_2.png",
        "label": "Night Lighting & Building Elevation"
      }
    ]
  },
  {
    "id": "emperio",
    "title": "2. 9 Emperio (G+35 High-Rise Skyscraper)",
    "subtitle": "High-Rise Iconic Residential Tower",
    "category": "Residential",
    "location": "Raghunathpur, Nandankanan Road, Patia, Bhubaneswar, Odisha",
    "details": [
      {
        "label": "Height / Floors",
        "val": "G+35 High-Rise Structure"
      },
      {
        "label": "Total Built Area",
        "val": "2,290 sq.m / 24,649.33 sq.ft"
      },
      {
        "label": "Analysis Software",
        "val": "ETABS, SAFE, STAAD.Pro"
      },
      {
        "label": "Engineering Scope",
        "val": "Dynamic Wind & Non-Linear Seismic Analysis"
      }
    ],
    "description": "Project Name: 9 Emperio (G+35)\nLocation: Raghunathpur, Nandankanan Road, Patia, Bhubaneswar, Odisha\nTotal area: 2,290 sq.m / 24,649.331 sq.ft\n\nHigh-rise structural design and FE modeling project featuring full ETABS dynamic analysis, wind loading simulations, lateral drift calculations, and detailed rebar execution drawings.",
    "pdfLink": "https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQDD1iJ5QnLrR7WNyLMscPTWAVN-o2PxImS4BlMeFb47rW4?e=iQx2ci",
    "pdfTitle": "View Econstruct Structure Project Portfolio PDF",
    "images": [
      {
        "src": "/projects/emp_2.png",
        "label": "Photorealistic Architectural Render"
      },
      {
        "src": "/projects/new/2.jpeg",
        "label": "Grand Aerial View of 9 Emperio & 9 Boulevard Township"
      },
      {
        "src": "/projects/new/3.jpeg",
        "label": "Podium Landscape Garden & Central Plaza"
      },
      {
        "src": "/projects/new/4.jpeg",
        "label": "G+35 Towers Architectural Elevation"
      },
      {
        "src": "/projects/new/5.jpeg",
        "label": "Grand Vehicle Drop-Off & Entry Court"
      },
      {
        "src": "/projects/new/12.jpeg",
        "label": "Township Twilight Lighting & Facade Illumination"
      },
      {
        "src": "/projects/emp_1.png",
        "label": "ETABS 3D Structural Mesh Model"
      },
      {
        "src": "/projects/emp_3.png",
        "label": "FE Stress & Load Distribution Model"
      },
      {
        "src": "/projects/emp_4.png",
        "label": "Structural Core & Shear Wall Wireframe"
      },
      {
        "src": "/projects/emp_5.png",
        "label": "Tower Elevation & Glass Facade"
      },
      {
        "src": "/projects/emp_6.png",
        "label": "Structural Steel & Foundation Framing"
      }
    ]
  },
  {
    "id": "boulevard",
    "title": "3. 9 Boulevard (G+35 Multi-Tower Development)",
    "subtitle": "Luxury Mixed-Use High-Rise Development",
    "category": "Residential",
    "location": "Raghunathpur, near HP Petrol Pump, Nandankanan Road, Patia, Bhubaneswar",
    "details": [
      {
        "label": "Height / Floors",
        "val": "G+35 Multi-Tower Structure"
      },
      {
        "label": "Total Built Area",
        "val": "6,137 sq.m / 66,058.05 sq.ft"
      },
      {
        "label": "Engineering Scope",
        "val": "Structural Analysis & Architectural BIM"
      },
      {
        "label": "Amenities",
        "val": "Multi-Level Podium, Clubhouse, Infinity Pool"
      }
    ],
    "description": "Project Name: 9 Boulevard (G+35)\nLocation: Raghunathpur, near HP Petrol Pump, Nandankanan Road, Patia, Bhubaneswar\nTotal area: 6,137 sq.m / 66,058.0543 sq.ft\n\nMassive landmark high-rise development consisting of multiple G+35 towers with podium parking, retail integration, and extensive green spaces. E-Construct handled complete 3D structural analysis, non-linear dynamic time-history simulation, and GFC drawing production.",
    "pdfLink": "https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQDD1iJ5QnLrR7WNyLMscPTWAVN-o2PxImS4BlMeFb47rW4?e=iQx2ci",
    "pdfTitle": "View Econstruct Structure Project Portfolio PDF",
    "images": [
      {
        "src": "/projects/blv_8.png",
        "label": "Main Boulevard Architectural Exterior"
      },
      {
        "src": "/projects/new/8.jpeg",
        "label": "Boulevard Plaza & Tower Perspective"
      },
      {
        "src": "/projects/new/9.jpeg",
        "label": "Township Central Boulevard Promenade"
      },
      {
        "src": "/projects/new/10.jpeg",
        "label": "Podium Sky Garden & Leisure Deck"
      },
      {
        "src": "/projects/new/11.jpeg",
        "label": "Residential Towers Entrance & Security Gate"
      },
      {
        "src": "/projects/new/13.jpeg",
        "label": "Architectural Perspective with Landscaping"
      },
      {
        "src": "/projects/new/14.jpeg",
        "label": "Evening Illuminated Master Elevation"
      },
      {
        "src": "/projects/new/15.jpeg",
        "label": "Tower Corner View & Cantilever Balconies"
      },
      {
        "src": "/projects/new/16.jpeg",
        "label": "Grand Entrance Gateway & Water Fountain"
      },
      {
        "src": "/projects/new/17.jpeg",
        "label": "Clubhouse & Sports Courts Complex"
      },
      {
        "src": "/projects/new/18.jpeg",
        "label": "Boulevard Green Corridor Walkway"
      },
      {
        "src": "/projects/new/19.jpeg",
        "label": "Dusk Elevation & Architectural Glazing"
      },
      {
        "src": "/projects/blv_1.png",
        "label": "Structural Slab Strain Diagram 1"
      },
      {
        "src": "/projects/blv_5.png",
        "label": "ETABS Vertical Tower Mesh"
      },
      {
        "src": "/projects/blv_6.png",
        "label": "ETABS Deformation Heatmap"
      }
    ]
  },
  {
    "id": "raunak-residency",
    "title": "4. Raunak Residency (G+28)",
    "subtitle": "Signature High-Rise Residential Landmark",
    "category": "Residential",
    "location": "Maharashtra, India",
    "details": [
      {
        "label": "Tower Height",
        "val": "G+28 High-Rise Tower"
      },
      {
        "label": "Structural System",
        "val": "RCC Shear Wall Core + Flat Slab"
      },
      {
        "label": "Seismic Zone",
        "val": "Zone III / IV Earthquake Resilient"
      },
      {
        "label": "Features",
        "val": "Grand Entrance Gate, Multi-Level Podium Parking"
      }
    ],
    "description": "Raunak Residency is an iconic G+28 high-rise residential development engineered with modern architectural symmetry and gold-accented podium cladding. Featuring a monumental gatehouse portal, integrated multi-level parking, landscaped garden decks, and high-speed elevators.\n\nE-Construct delivered comprehensive high-rise structural design including ETABS lateral drift optimization, shear-wall core detailing, dynamic wind load simulation, and complete GFC drawings for flawless execution.",
    "images": [
      {
        "src": "/projects/new/61.jpg",
        "label": "Raunak Residency G+28 High-Rise Architectural Front Elevation"
      }
    ]
  },
  {
    "id": "mall",
    "title": "5. Ashoak Mall, Jalna (2B+G+8)",
    "subtitle": "Premium Commercial & Lifestyle Hub (5 Lakh Sq.Ft.)",
    "category": "Commercial",
    "location": "Jalna, Maharashtra",
    "details": [
      {
        "label": "Configuration",
        "val": "2 Basements + Ground + 8 Upper Floors (2B+G+8)"
      },
      {
        "label": "Typology",
        "val": "Commercial Retail, Food Court & Lifestyle Hub"
      },
      {
        "label": "Facade Engineering",
        "val": "Curvilinear Structural Glazing & Metal Louvers"
      },
      {
        "label": "Parking",
        "val": "Double Basement Automated Vehicle Parking"
      }
    ],
    "description": "Ashoak Mall is a modern, premium commercial development in Jalna, designed to redefine shopping and business experience in the city. Bringing together retail, food, entertainment, and lifestyle under one roof, this project is planned to create a high-footfall commercial hub with modern architecture, attractive design, and business-focused planning. Ashok Mall is not just a shopping complex \u2014 it is a growth opportunity for investors and business owners.",
    "pdfLink": "https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQAmFV9pR-ZR65T0tBJkYn9AaYbYw0QdCxSkxwRTll14o4?e=oFL4Qv",
    "pdfTitle": "View Econstruct Hospitality & Commercial Project PDF",
    "images": [
      {
        "src": "/projects/new/57.png",
        "label": "Ashoak Mall High-Definition Curved Glass Facade Dusk View"
      },
      {
        "src": "/ashok mall/WhatsApp Image 2026-08-14 at 3.44.41 PM.jpeg",
        "label": "Ashok Mall Exterior 3D Perspective Render"
      },
      {
        "src": "/ashok mall/WhatsApp Image 2026-08-14 at 3.44.41 PM (1).jpeg",
        "label": "Ashok Mall Storefront & Entrance View"
      },
      {
        "src": "/ashok mall/WhatsApp Image 2026-08-14 at 3.44.42 PM.jpeg",
        "label": "Ashok Mall Commercial Retail & Facade"
      },
      {
        "src": "/ashok mall/WhatsApp Image 2026-08-14 at 3.44.42 PM (1).jpeg",
        "label": "Ashok Mall Floor Plan & Structural Drawing"
      }
    ]
  },
  {
    "id": "ck-mall",
    "title": "6. CK Mall & Commercial Center",
    "subtitle": "Fluid Dynamic Facade Commercial Landmark",
    "category": "Commercial",
    "location": "India",
    "details": [
      {
        "label": "Project Type",
        "val": "Multi-Level Shopping Mall & Entertainment Complex"
      },
      {
        "label": "Facade Type",
        "val": "Double-Curved Parametric Glass Ribbon with Dynamic LED"
      },
      {
        "label": "Structural Scope",
        "val": "Post-Tensioned Beams & Long-Span Atrium"
      },
      {
        "label": "Facilities",
        "val": "Multiplex, Anchor Retail, Food Court & Terrace Lounges"
      }
    ],
    "description": "CK Mall is an architectural and structural triumph featuring dynamic sweeping glass ribbons and integrated warm parametric illumination. Designed to maximize retail frontage and pedestrian circulation with large column-free central atriums, multi-level escalator cores, and rooftop fine-dining terraces.\n\nE-Construct provided advanced 3D FEA structural modeling, long-span post-tensioned beam calculations, glass curtain-wall wind deflection engineering, and comprehensive MEP coordination.",
    "images": [
      {
        "src": "/projects/new/23.jpeg",
        "label": "CK Mall Evening Exterior View with Parametric Glass Facade"
      },
      {
        "src": "/projects/new/62.jpg",
        "label": "CK Mall Dynamic LED Illuminated Night Elevation"
      }
    ]
  },
  {
    "id": "marathahalli",
    "title": "7. Chris International Hospital & Commercial Center",
    "subtitle": "Multi-Speciality Hospital, 5-Star Hotel & Chris International Mall",
    "category": "Commercial",
    "location": "Marathahalli, Bangalore, Karnataka",
    "details": [
      {
        "label": "Project Typology",
        "val": "Large-Scale Integrated Mixed-Use Development"
      },
      {
        "label": "Integrated Zones",
        "val": "Chris Hospital, 5-Star Hotel, Mall & Helipad"
      },
      {
        "label": "Structural Features",
        "val": "Column-Free Retail Transfer Slabs & Vibration Isolation"
      },
      {
        "label": "Engineering Scope",
        "val": "Integrated Architecture, Structural & MEP"
      }
    ],
    "description": "A landmark mixed-use commercial development in Bangalore combining a state-of-the-art multi-specialty hospital (Chris Hospital), luxury 5-star hotel suites, and premium retail shopping promenade (Chris International Mall) within a single unified master architectural envelope.\n\nE-Construct executed comprehensive structural engineering, column-free retail transfer slabs, hospital medical vibration isolation, hotel acoustics, rooftop helipad design, and sustainable building systems.",
    "images": [
      {
        "src": "/projects/new/1.jpeg",
        "label": "Chris International Hospital & Commercial Complex Dusk Perspective"
      },
      {
        "src": "/projects/new/58.png",
        "label": "Chris International Hospital & Retail Promenade Elevation"
      },
      {
        "src": "/projects/marathahalli_1.jpg",
        "label": "Master Complex 3D Architectural Render"
      }
    ]
  },
  {
    "id": "hotel-pahala",
    "title": "8. Hotel Pahala & Luxury Hospitality Complex",
    "subtitle": "5-Star Grand Luxury Hotel & Resort",
    "category": "Commercial",
    "location": "Pahala, Bhubaneswar, Odisha",
    "details": [
      {
        "label": "Typology",
        "val": "5-Star Luxury Hotel & Convention Center"
      },
      {
        "label": "Amenities",
        "val": "Grand Fountain Courtyard, Pillar-Free Ballrooms, Sky Spa"
      },
      {
        "label": "Structural Highlights",
        "val": "High-Ceiling Portico, Post-Tensioned Banquet Slabs"
      },
      {
        "label": "Engineering Services",
        "val": "Full Architectural BIM, Structural Design & MEP Coordination"
      }
    ],
    "description": "Hotel Pahala is a prestigious 5-star luxury hospitality development located in Odisha. Featuring a grand circular fountain arrival court, palatial portico entry, double-height reception lobby, expansive column-free grand ballrooms, and luxury guest suites.\n\nE-Construct delivered specialized structural engineering for large-span banquet spaces, acoustic isolation between public and guest zones, heavy kitchen and HVAC equipment loads, and earthquake-resistant framed structural design.",
    "images": [
      {
        "src": "/projects/new/63.png",
        "label": "Hotel Pahala 5-Star Luxury Hotel & Grand Fountain Arrival Court"
      },
      {
        "src": "/projects/new/64.png",
        "label": "5-Star Luxury Hotel Tower with Multi-Tiered Rooftop Sky Infinity Pools"
      }
    ]
  },
  {
    "id": "heritage-palace-hotel",
    "title": "9. Grand Heritage Palace Resort & S Hotel",
    "subtitle": "Regal Indian Architecture & Luxury Hospitality Resort",
    "category": "Commercial",
    "location": "India",
    "details": [
      {
        "label": "Architectural Style",
        "val": "Traditional Royal Indian Heritage with Modern Luxury"
      },
      {
        "label": "Key Elements",
        "val": "Ornamental Jharokha Domes, Grand Gateway, Water Cascades"
      },
      {
        "label": "Facilities",
        "val": "Resort Suites, Royal Banquet Halls, Landscaped Courtyards"
      },
      {
        "label": "Engineering Scope",
        "val": "Heritage Structural Masonry & RCC Integration"
      }
    ],
    "description": "An opulent 7-star heritage resort designed to reflect the timeless majesty of Indian royal architecture. The property features handcrafted stone jharokhas, majestic chhatri domes, monumental entryway arches, water courtyards, and palatial guest pavilions.\n\nE-Construct engineered complex dome load-transfer rings, large-span banquet hall frames, integrated climate-responsive courtyards, and state-of-the-art concealed modern MEP systems.",
    "images": [
      {
        "src": "/projects/new/60.jpg",
        "label": "Grand Heritage Palace Resort with Ornamental Domes & Royal Courtyard"
      },
      {
        "src": "/projects/s_hotel_1.jpg",
        "label": "S Hotel Curvilinear Facade & Premium Retail Promenade at Dusk"
      },
      {
        "src": "/projects/s_hotel_2.jpg",
        "label": "Master Aerial View of S Hotel & Plotted Township"
      },
      {
        "src": "/projects/s_hotel_3.png",
        "label": "Residential Towers, Clubhouse & Swimming Pool Complex"
      }
    ]
  },
  {
    "id": "chris-icon",
    "title": "10. Chris Icon Commercial Landmark Tower",
    "subtitle": "Signature Corporate Headquarters with Capsule Glass Elevator",
    "category": "Commercial",
    "location": "Bangalore, Karnataka",
    "details": [
      {
        "label": "Building Typology",
        "val": "Grade-A Corporate Headquarters & Flagship Retail"
      },
      {
        "label": "Signature Feature",
        "val": "External Panoramic Capsule Glass Elevator & Crown Canopy"
      },
      {
        "label": "Facade Cladding",
        "val": "Gold Composite Panels with Geometric Solar Fins"
      },
      {
        "label": "Floor Layout",
        "val": "100% Column-Free High-Efficiency Office Floor Plates"
      }
    ],
    "description": "Chris Icon is a signature high-visibility commercial landmark tower engineered for prestige corporate tenants. Featuring gold-toned angular facade framing, architectural geometric solar fins, a panoramic glass elevator capsule traversing the building height, and a dramatic cantilevered rooftop crown canopy.\n\nE-Construct engineered the complex cantilever roof truss, external elevator structural support frames, post-tensioned floor systems, and high-wind facade anchorage.",
    "images": [
      {
        "src": "/projects/new/45.jpg",
        "label": "Chris Icon Commercial Tower with Gold Facade Panels & Capsule Elevator"
      }
    ]
  },
  {
    "id": "hsr-commercial",
    "title": "11. HSR Commercial Center & Retail Hub",
    "subtitle": "Parametric Exoskeleton Architecture & Luxury Brand Flagships",
    "category": "Commercial",
    "location": "HSR Layout, Bangalore, Karnataka",
    "details": [
      {
        "label": "Location",
        "val": "Prime High-Street Junction, HSR Layout, Bangalore"
      },
      {
        "label": "Facade Design",
        "val": "Organic Parametric Illuminated Exoskeleton"
      },
      {
        "label": "Building Use",
        "val": "Multi-Level Flagship Retail, Fine Dining & Commercial Hub"
      },
      {
        "label": "Engineering Feat",
        "val": "Curved Steel Substructure & Continuous Glass Curtain Wall"
      }
    ],
    "description": "Located at a prominent high-traffic intersection in Bangalore's premier startup hub, the HSR Commercial Center features a breathtaking organic parametric facade with continuous warm neon accent illumination. Designed to provide unmatched brand visibility with double-height storefronts and high-capacity floor loadings.\n\nE-Construct designed the bespoke curved 3D steel exoskeleton framing, glass structural deflection analysis, basement parking retention systems, and advanced lighting integration.",
    "images": [
      {
        "src": "/projects/new/49.jpg",
        "label": "HSR Commercial Center with Illuminated Parametric Organic Facade"
      }
    ]
  },
  {
    "id": "helipad-corporate-tower",
    "title": "12. Helipad Corporate Tech Headquarters",
    "subtitle": "Aerodynamic Glazed Tower with Rooftop Aviation Helipad",
    "category": "Commercial",
    "location": "India",
    "details": [
      {
        "label": "Building Height",
        "val": "Multi-Storey Corporate Headquarters Tower"
      },
      {
        "label": "Rooftop Feature",
        "val": "Structurally Certified Aviation Helipad & Sky Lounge"
      },
      {
        "label": "Architectural Design",
        "val": "Continuous Aerodynamic Ribbon Glazing & Stepped Terraces"
      },
      {
        "label": "Sustainability",
        "val": "Biophilic Sky Gardens, High-Performance Low-E Glazing"
      }
    ],
    "description": "An aerodynamic corporate skyscraper engineered for next-generation technology corporations. Featuring undulating curved ribbon-glass facades, stepped biophilic sky terraces on multiple levels, and a heavy-duty structurally certified rooftop helipad.\n\nE-Construct provided complete structural engineering including dynamic helicopter landing impact load calculations, wind turbulence simulation around rooftop structures, and post-tensioned transfer slabs.",
    "images": [
      {
        "src": "/projects/new/46.jpg",
        "label": "Helipad Corporate Tech Headquarters Elevation & Aerial View"
      }
    ]
  },
  {
    "id": "retail-hypermarkets",
    "title": "13. Reliance Mall & STAR / Zudio Commercial Centers",
    "subtitle": "Commercial Retail Plazas & High-Footfall Hypermarkets",
    "category": "Commercial",
    "location": "Multiple Locations, India",
    "details": [
      {
        "label": "Clients / Brands",
        "val": "Reliance Retail, STAR Hypermarket, Zudio Fashion"
      },
      {
        "label": "Structure Type",
        "val": "Heavy-Load Commercial RCC & Steel Composite Frame"
      },
      {
        "label": "Floor Capacity",
        "val": "Engineered for 10.0 kN/sq.m Retail Storage & Display"
      },
      {
        "label": "Logistics",
        "val": "Dedicated Loading Docks, Multi-Level Escalators & Customer Parking"
      }
    ],
    "description": "Comprehensive structural engineering and project management for leading national retail hypermarkets and commercial shopping plazas. Designed for high footfall volume, heavy inventory floor loadings, open column grids, and rapid commercial rollout timelines.\n\nE-Construct delivered turnkey structural designs, foundation analysis for high-load retail racking, escalator core structural frames, and fast-track GFC engineering drawings.",
    "images": [
      {
        "src": "/projects/new/52.jpg",
        "label": "Reliance Mall Multi-Level Commercial Retail Center"
      },
      {
        "src": "/projects/new/55.jpg",
        "label": "STAR Hypermarket & Zudio Multi-Brand Commercial Complex"
      }
    ]
  },
  {
    "id": "sky-lounge-mumbai",
    "title": "14. Sky Lounge Rooftop Hospitality",
    "subtitle": "High-Altitude Luxury Rooftop Bar & Lounge Design",
    "category": "Commercial",
    "location": "Mumbai, Maharashtra",
    "details": [
      {
        "label": "Project Typology",
        "val": "High-Rise Rooftop Sky Lounge & Fine Dining"
      },
      {
        "label": "Location",
        "val": "Mumbai High-Rise Skyscraper Rooftop"
      },
      {
        "label": "Engineering",
        "val": "Lightweight Structural Steel, Glass Balustrades & Wind Deflectors"
      },
      {
        "label": "Atmosphere",
        "val": "Panoramic Cityscape Views, Mood Lighting & Infinity Terrace"
      }
    ],
    "description": "An ultra-luxury rooftop hospitality sky lounge perched atop a premier Mumbai high-rise tower. Combining structural steel pergolas, frameless acoustic safety glass railings, infinity-edge seating, and custom ambient lighting.\n\nE-Construct engineered rooftop structural load retrofitting, high-velocity coastal wind gust mitigation, lightweight timber/composite decking, and acoustic vibration damping.",
    "images": [
      {
        "src": "/projects/sky_lounge_1.jpg",
        "label": "Sky Lounge Mumbai Panoramic Rooftop Bar & Lounge at Dusk"
      },
      {
        "src": "/projects/sky_lounge_2.png",
        "label": "Architectural Lighting, Timber Decking & Skylight Detail"
      }
    ]
  },
  {
    "id": "sky-pool-penthouse",
    "title": "15. Penthouse & Cantilevered Sky-Pool Tower",
    "subtitle": "Ultra-Luxury Residential High-Rise with Glass Sky Pool",
    "category": "Residential",
    "location": "India",
    "details": [
      {
        "label": "Project Typology",
        "val": "Luxury High-Rise Penthouse Tower & Waterfront Club Villa"
      },
      {
        "label": "Signature Feature",
        "val": "Cantilevered Glass-Bottom Sky Infinity Pool at High Elevation"
      },
      {
        "label": "Structural Feat",
        "val": "Hydrodynamic Slosh Analysis & Heavy Cantilever Steel Outrigger"
      },
      {
        "label": "Ground Amenities",
        "val": "Private Waterfront Clubhouse Villa & Landscaped Water Feature"
      }
    ],
    "description": "An exclusive private luxury development centered on a high-rise residential tower featuring a breathtaking cantilevered glass-bottom infinity pool suspended from the top penthouse level, coupled with an expansive lakeside ground-level clubhouse villa.\n\nE-Construct performed sophisticated fluid-structure interaction (FSI) calculations for pool water mass dynamics under wind oscillation and seismic conditions, heavy cantilever truss anchorage, and ultra-high strength structural glass connection design.",
    "images": [
      {
        "src": "/projects/new/50.jpg",
        "label": "High-Rise Tower with Cantilevered Glass Sky Pool & Clubhouse Villa"
      }
    ]
  },
  {
    "id": "skyline-towers",
    "title": "16. Skyline Luxury Residential Towers (G+40)",
    "subtitle": "G+40 Twin Skyscraper Towers & Podium Sky Park",
    "category": "Residential",
    "location": "Metro City, India",
    "details": [
      {
        "label": "Tower Configuration",
        "val": "G+40 Twin High-Rise Luxury Residential Towers"
      },
      {
        "label": "Podium Amenities",
        "val": "Elevated Sky Gardens, Reflection Pools & Clubhouse"
      },
      {
        "label": "Structural Core",
        "val": "Dual Concrete Shear Wall Core with Outrigger Beams"
      },
      {
        "label": "Design Analysis",
        "val": "Boundary Layer Wind Tunnel Simulation & Dynamic Response"
      }
    ],
    "description": "A pair of soaring G+40 luxury residential towers that define the urban skyline. Featuring floor-to-ceiling panoramic glass, sprawling sky-garden podium levels with reflection pools, and private luxury sky suites.\n\nE-Construct delivered complete advanced structural engineering including non-linear dynamic time-history analysis, high-strength concrete mix designs (M60/M70), and column-shortening compensation programs.",
    "images": [
      {
        "src": "/projects/new/6.jpeg",
        "label": "G+40 Twin Residential Skyscraper Towers"
      },
      {
        "src": "/projects/new/7.jpeg",
        "label": "Elevated Podium Sky Garden & Reflection Pool"
      },
      {
        "src": "/projects/new/51.jpg",
        "label": "Multi-Tower High-Rise Residential Township Masterplan"
      }
    ]
  },
  {
    "id": "greenfield-enclave",
    "title": "17. Greenfield Enclave High-Rise Township",
    "subtitle": "6-Tower Symmetrical Group Housing Community & Central Park",
    "category": "Residential",
    "location": "India",
    "details": [
      {
        "label": "Township Scale",
        "val": "6 Symmetrical High-Rise Residential Towers"
      },
      {
        "label": "Central Park",
        "val": "2-Acre Integrated Landscape Park, Children's Zone & Courts"
      },
      {
        "label": "Structure Type",
        "val": "Seismic-Resistant RCC Frame with Monolithic Slabs"
      },
      {
        "label": "Circulation",
        "val": "Perimeter Ring Road & 100% Pedestrian-Safe Central Core"
      }
    ],
    "description": "Greenfield Enclave is a master-planned residential township featuring 6 high-rise residential towers arranged in a symmetrical master configuration around a sprawling central community park, recreational plazas, playgrounds, and perimeter vehicular parking.\n\nE-Construct engineered standardized high-speed monolithic formwork layouts, seismic frame designs, centralized rainwater harvesting, and integrated township infrastructure networks.",
    "images": [
      {
        "src": "/projects/new/28.jpeg",
        "label": "Master Aerial View of 6-Tower Greenfield Residential Enclave"
      },
      {
        "src": "/projects/new/30.jpeg",
        "label": "Central Landscaped Park, Play Areas & Perimeter Parking Grid"
      }
    ]
  },
  {
    "id": "mountain-a-frame-villa",
    "title": "18. Mountain View Luxury A-Frame Villa & Resort",
    "subtitle": "Bespoke Biophilic Luxury Hill Villa & Infinity Pool",
    "category": "Residential",
    "location": "Western Ghats / Hill Station, India",
    "details": [
      {
        "label": "Architecture",
        "val": "Contemporary Scandinavian A-Frame & Biophilic Stone"
      },
      {
        "label": "Living Space",
        "val": "Double-Height Glass Living Pavilion & Upper Loft Suite"
      },
      {
        "label": "Outdoor Amenities",
        "val": "Sunset Infinity-Edge Pool, Stone Steps & Sun Deck"
      },
      {
        "label": "Engineering",
        "val": "Heavy Timber & Steel Hybrid Frame with Hillside Foundation"
      }
    ],
    "description": "A breathtaking private hill villa designed to blend seamlessly into the natural mountain topography. Featuring an iconic double-height A-frame central pavilion with full-span structural glass, warm timber ceiling beams, stepped stone terraces, and a heated sunset infinity pool.\n\nE-Construct delivered customized hillside slope stability engineering, hybrid timber-steel truss design, weather-resistant foundation piles, and sustainable passive solar heating integration.",
    "images": [
      {
        "src": "/projects/new/21.jpeg",
        "label": "Mountain View Luxury A-Frame Villa with Sunset Infinity Pool"
      },
      {
        "src": "/projects/new/20.jpeg",
        "label": "Double-Height Living Room Interior with Exposed Timber Rafters"
      },
      {
        "src": "/projects/new/42.jpg",
        "label": "Scandinavian Luxury Living Hall with Fireplace & Nature Views"
      }
    ]
  },
  {
    "id": "tropical-luxury-villa",
    "title": "19. Tropical Modern Luxury Duplex Villa",
    "subtitle": "Private Residential Estate with Double-Height Glass Foyer",
    "category": "Residential",
    "location": "South India",
    "details": [
      {
        "label": "Style",
        "val": "Tropical Modern Architecture with Natural Teak Louvers"
      },
      {
        "label": "Grand Foyer",
        "val": "Double-Height Chandelier Living Pavilion & Courtyard"
      },
      {
        "label": "Materials",
        "val": "Rough-Hewn Stone Cladding, Hardwood Screen Louvers, Glass"
      },
      {
        "label": "Engineering",
        "val": "Column-Free Great Room Spans & Concealed Structural Beams"
      }
    ],
    "description": "An exquisite private residential villa combining tropical luxury with clean contemporary lines. Features a soaring double-height central entry foyer with custom chandelier, natural teak shading screens, landscaped internal courtyards, and warm ambient architectural lighting.\n\nE-Construct provided complete structural engineering for expansive column-free living spaces, cantilevered entrance porticos, and integrated smart electrical and plumbing systems.",
    "images": [
      {
        "src": "/projects/new/24.jpeg",
        "label": "Tropical Modern Luxury Villa Evening Elevation with Double-Height Foyer"
      }
    ]
  },
  {
    "id": "villa-18-residences",
    "title": "20. Villa 18 & Contemporary Designer Residences",
    "subtitle": "Portfolio of Luxury Duplex Villas & Urban Residences",
    "category": "Residential",
    "location": "Urban Centers, India",
    "details": [
      {
        "label": "Typology",
        "val": "G+2 / G+3 Contemporary Private Residences"
      },
      {
        "label": "Facade Features",
        "val": "Illuminated Backlit CNC Jaali, Cantilever Balconies, Pergolas"
      },
      {
        "label": "Interior Layout",
        "val": "High-Ceiling Open Concept Living, Private Terraces & Stilt Gate"
      },
      {
        "label": "Engineering Scope",
        "val": "Turnkey Architectural, Structural & MEP Engineering"
      }
    ],
    "description": "A curated collection of bespoke private residences and designer luxury duplexes engineered by E-Construct. Showcasing precision cantilevered balconies, illuminated CNC stone and metal jaali accents, warm composite wood paneling, and optimized urban floor layouts.\n\nE-Construct delivered end-to-end engineering including column positioning for open floor plans, earthquake-resistant frames, rainwater harvesting, and energy-efficient lighting layouts.",
    "images": [
      {
        "src": "/projects/new/35.jpeg",
        "label": "Villa 18 Contemporary Luxury Duplex with Illuminated Backlit Jaali"
      },
      {
        "src": "/projects/new/41.jpeg",
        "label": "G+3 Urban Luxury Residence with Stone Jaali Screens & Mood Lighting"
      },
      {
        "src": "/projects/new/36.jpeg",
        "label": "Modern 2-Storey Private Residence with Cantilevered Balcony"
      },
      {
        "src": "/projects/new/38.jpeg",
        "label": "G+3 Corner Modern Residential Villa with Accent Framing"
      },
      {
        "src": "/projects/new/40.jpeg",
        "label": "Contemporary Duplex Villa with Architectural Terraces"
      },
      {
        "src": "/projects/new/39.jpeg",
        "label": "3D Modern Residence Elevation & Color Palette"
      }
    ]
  },
  {
    "id": "boutique-apartments",
    "title": "21. Boutique Luxury Apartments (Completed Sites)",
    "subtitle": "Real Completed G+5 & G+6 Residential Developments",
    "category": "Residential",
    "location": "Bangalore & Pune, India",
    "details": [
      {
        "label": "Building Typology",
        "val": "G+5 / G+6 Boutique Residential Apartment Buildings"
      },
      {
        "label": "Status",
        "val": "100% Completed & Occupied Real Site Executions"
      },
      {
        "label": "Key Amenities",
        "val": "Stilt Parking, Landscaped Rooftop Pergola Gardens, Elevators"
      },
      {
        "label": "Structural System",
        "val": "RCC Moment-Resisting Frame with IS Code Compliance"
      }
    ],
    "description": "Photographic documentation of completed, operational boutique residential projects delivered under E-Construct's engineering oversight. Featuring modern architectural facade louvers, landscaped terrace gardens, stilt-level automated parking, and high-efficiency apartment layouts.\n\nE-Construct handled full structural design, site quality assurance (QA/QC), foundation testing, and final occupancy certification.",
    "images": [
      {
        "src": "/projects/new/31.jpeg",
        "label": "Completed G+5 Boutique Luxury Apartments (Real Site Photograph 1)"
      },
      {
        "src": "/projects/new/32.jpeg",
        "label": "Completed G+5 Apartments Street Elevation (Real Site Photograph 2)"
      },
      {
        "src": "/projects/new/33.jpeg",
        "label": "Corner Angle View of Completed Residential Building (Real Site Photograph 3)"
      },
      {
        "src": "/projects/new/26.jpeg",
        "label": "E-Construct Branded Modern Apartment Complex Elevation"
      },
      {
        "src": "/projects/new/27.jpeg",
        "label": "G+4 Residential Building with Illuminated Perforated Screens"
      },
      {
        "src": "/projects/new/43.jpg",
        "label": "Modern Boutique Apartment Building with Accent Yellow Framing"
      },
      {
        "src": "/projects/new/44.jpg",
        "label": "Architectural Exposed Terracotta Brick High-Rise Tower"
      },
      {
        "src": "/projects/new/29.jpeg",
        "label": "Contemporary G+5 Symmetrical Residential Apartment Elevation"
      }
    ]
  },
  {
    "id": "nishiland-villas",
    "title": "22. Nishiland Residential Luxury Villas",
    "subtitle": "Private Gated Luxury Villa Community & Clubhouse",
    "category": "Residential",
    "location": "Maharashtra, India",
    "details": [
      {
        "label": "Development Typology",
        "val": "Luxury Gated Residential Villa Community"
      },
      {
        "label": "Architecture",
        "val": "Contemporary Modern Biophilic Design"
      },
      {
        "label": "Structure",
        "val": "RCC Frame with Expansive Column-Free Living Areas"
      },
      {
        "label": "Luxury Amenities",
        "val": "Private Landscaped Gardens, Terrace Sundecks & Club"
      }
    ],
    "description": "An exclusive private gated luxury villa development designed for serene modern living. Each villa features floor-to-ceiling glass fenestration, wide cantilevered terrace sundecks, double-height great rooms, and private landscaped courtyard gardens.\n\nE-Construct provided complete architectural layout design, structural engineering with wide open interior spans, earthquake-resistant design, and integrated villa plumbing, electrical, and stormwater drainage systems.",
    "images": [
      {
        "src": "/projects/nishiland_1.jpg",
        "label": "Contemporary Luxury Villa Exterior Elevation"
      },
      {
        "src": "/projects/nishiland_2.png",
        "label": "Night Illumination & Landscaped Terrace Deck"
      },
      {
        "src": "/projects/nishiland_3.png",
        "label": "Master Villa Township Layout & Road Network"
      },
      {
        "src": "/projects/nishiland_4.png",
        "label": "Double-Height Living Room & Interior Spatial Design"
      },
      {
        "src": "/projects/nishiland_5.jpg",
        "label": "Rear Garden Elevation & Private Balcony"
      }
    ]
  },
  {
    "id": "canada-project",
    "title": "23. Canada International Engineering & BIM Project",
    "subtitle": "Global Cold-Climate Structural Engineering & LOD 400 BIM Coordination",
    "category": "Residential",
    "location": "Canada (International)",
    "details": [
      {
        "label": "Location",
        "val": "Canada (Global Portfolio)"
      },
      {
        "label": "Building Codes",
        "val": "National Building Code of Canada (NBC) & CSA Standards"
      },
      {
        "label": "Engineering Scope",
        "val": "3D Structural Framing, Thermal Envelope & LOD 400 BIM"
      },
      {
        "label": "Specialization",
        "val": "Heavy Snow Load, Thermal Break & Freeze-Thaw Resilience"
      }
    ],
    "description": "An international structural engineering and BIM coordination project in Canada demonstrating E-Construct's multi-code global capabilities. Engineered under strict Canadian Building Codes (NBC / CSA) to withstand sub-zero temperature differentials, heavy snow accumulation, and freeze-thaw cycles.\n\nFeatures multi-disciplinary BIM clash detection, Level of Development (LOD 400) fabrication drawings, precast/steel modular connections, and high-efficiency building envelope structural integration.",
    "images": [
      {
        "src": "/projects/canada_1.png",
        "label": "3D Structural Framing & Building Massing Model"
      },
      {
        "src": "/projects/canada_2.png",
        "label": "BIM Multi-Disciplinary Coordination Model View"
      },
      {
        "src": "/projects/canada_3.png",
        "label": "Detailed Isometric Framing & Facade Structural Grid"
      }
    ]
  },
  {
    "id": "grk",
    "title": "24. GRK Africa Project",
    "subtitle": "International High-Rise Infrastructure",
    "category": "Infrastructure",
    "location": "Africa",
    "details": [
      {
        "label": "Scope",
        "val": "Architectural, Structural & BIM Project Management"
      },
      {
        "label": "Scale",
        "val": "Multi-Tower Residential & Commercial Complex"
      }
    ],
    "description": "Significant international infrastructure development project in Africa, showcasing E-Construct's international engineering, BIM modeling, and project management capabilities. Features multi-tower residential blocks, expansive terrace amenities, podium levels, and complex structural coordination.",
    "pdfLink": "https://econstructinternational-my.sharepoint.com/:b:/g/personal/pranjal_wawdhane_e-construct_org/IQBRnE9Asb0aS7qq8yX50plvASFisAvU7rUlsNgwOST0VmE?e=gZnr5t",
    "pdfTitle": "View Econstruct BIM Project Portfolio PDF",
    "images": [
      {
        "src": "/projects/grk_1.jpeg",
        "label": "Complex Exterior Perspective Render"
      },
      {
        "src": "/projects/grk_2.jpeg",
        "label": "Upward Angle Perspective & Palm Landscaping"
      },
      {
        "src": "/projects/grk_3.jpeg",
        "label": "Balcony View Looking Out Over Tower Complex"
      },
      {
        "src": "/projects/grk_4.png",
        "label": "BIM 3D Model Render of Multi-Building Podium"
      },
      {
        "src": "/projects/grk_5.png",
        "label": "Architectural Site Layout & Master Plan"
      },
      {
        "src": "/projects/grk_6.png",
        "label": "Basement Parking & Structural Layout Drawing"
      }
    ]
  },
  {
    "id": "cricket-stadium-balapur",
    "title": "25. Balapur International Cricket Stadium & Sports Complex",
    "subtitle": "International Standard Cricket Arena & Multi-Sport Complex",
    "category": "Infrastructure",
    "location": "Balapur, Maharashtra",
    "details": [
      {
        "label": "Facility Type",
        "val": "Cricket Stadium & Integrated Athletic Arena"
      },
      {
        "label": "Infrastructure",
        "val": "Multi-Tier Grandstands, VIP Pavilions, High Mast Lights"
      },
      {
        "label": "Structural Canopies",
        "val": "Long-Span Cantilever Steel Roof Trusses"
      },
      {
        "label": "Analysis",
        "val": "Crowd Harmonic Loading, Wind Tunnel & Egress Simulation"
      }
    ],
    "description": "An international-standard cricket stadium and athletic sports facility engineered at Balapur. Featuring full ICC-grade ground dimensions, tiered grandstand spectator seating, VIP executive pavilions, players' dressing facilities, press suites, and high-mast LED floodlighting towers.\n\nE-Construct engineered the long-span cantilever roof canopies, precast spectator bleachers, dynamic crowd bounce harmonic mitigation, and rapid emergency egress pathways.",
    "images": [
      {
        "src": "/projects/new/54.jpg",
        "label": "Balapur Sports Complex Master Aerial with Cricket Stadium, Tennis Courts & Nets"
      },
      {
        "src": "/projects/stadium_1.png",
        "label": "Stadium Arena Exterior Perspective Render"
      },
      {
        "src": "/projects/stadium_2.png",
        "label": "Grandstand Seating, Cricket Pitch & High Mast Lighting View"
      },
      {
        "src": "/projects/stadium_3.png",
        "label": "VIP Pavilion Facade & Main Public Gate Render"
      },
      {
        "src": "/projects/stadium_4.png",
        "label": "Overhead Master View of the Integrated Balapur Sports Complex"
      }
    ]
  },
  {
    "id": "super-strikers-stadium",
    "title": "26. Super Strikers Football Stadium & Sports Academy",
    "subtitle": "FIFA-Standard Football Arena & Athletic Training Campus",
    "category": "Infrastructure",
    "location": "India",
    "details": [
      {
        "label": "Sports Facilities",
        "val": "FIFA-Regulation Football Pitch, 400m Track, Olympic Pool"
      },
      {
        "label": "Academy Campus",
        "val": "Residential Hostel Blocks, Athlete Clubhouse, Gymnasium"
      },
      {
        "label": "Grandstands",
        "val": "Long-Span Curved Steel Tensile Canopy Grandstands"
      },
      {
        "label": "Engineering Scope",
        "val": "Master Planning, Structural Design & Civil Stormwater Drainage"
      }
    ],
    "description": "A state-of-the-art sports academy and football stadium complex engineered for national and international athletic competitions. Includes a regulation football pitch, rubberized running tracks, covered spectator stands, sports science hostel blocks, clubhouse, and an Olympic-size aquatic complex.\n\nE-Construct delivered specialized structural engineering for long-span stadium roof canopies, high-volume crowd circulation modeling, foundation design for floodlight towers, and high-performance pitch drainage systems.",
    "images": [
      {
        "src": "/projects/new/56.jpg",
        "label": "Super Strikers Football Stadium, Hostel Towers, Pool & Sports Complex Aerial"
      }
    ]
  },
  {
    "id": "vapi-bridge",
    "title": "27. Sky Bridge & Inter-Building Connection",
    "subtitle": "High-Altitude 16.5m Unsupported Span Between Commercial Towers",
    "category": "Infrastructure",
    "location": "Vapi, Gujarat",
    "details": [
      {
        "label": "Unsupported Span",
        "val": "16.5 Metres Clear Span"
      },
      {
        "label": "Elevation",
        "val": "34.5 Metres Above Ground Level"
      },
      {
        "label": "Steel Sections",
        "val": "18.5 m Heavy Built-Up Steel Girders"
      },
      {
        "label": "Engineering Feats",
        "val": "3D Revit Detailing, Column Retrofitting, Crane Rigging"
      }
    ],
    "description": "A highly challenging skybridge structural engineering feat featuring a 16.5 m unsupported span suspended 34.5 m above ground level connecting two multi-storey commercial towers.\n\nThe project required integrating panoramic glass fa\u00e7ade walls, designing 18.5 m built-up steel sections, retrofitting existing reinforced concrete columns to receive massive bridge reaction loads, and orchestrating complex dual-crane high-altitude erection. Through detailed laser surveying, 3D Revit modeling, connection FEA detailing, and precise fabrication tolerances, our engineering team ensured flawless execution and zero-vibration serviceability.",
    "images": [
      {
        "src": "/projects/vapi_bridge_1.jpg",
        "label": "High-Altitude Crane Hoisting Skybridge into Position at 34.5m"
      },
      {
        "src": "/projects/vapi_bridge_2.jpg",
        "label": "Underside View of the 16.5m Clear Span Steel Truss Framework"
      },
      {
        "src": "/projects/vapi_bridge_3.jpg",
        "label": "Heavy Dual-Crane Lifting Operation Between Commercial Towers"
      },
      {
        "src": "/projects/vapi_bridge_4.png",
        "label": "Site View Overlooking Lake and Landscape from Bridge Level"
      },
      {
        "src": "/projects/vapi_bridge_5.png",
        "label": "Steel Truss Assembly, Retrofitted Column Bracket & Glazing Support"
      }
    ]
  },
  {
    "id": "bungee-goa",
    "title": "28. Bungee Jumping Tower Project",
    "subtitle": "High-Altitude Cantilever Steel Adventure Infrastructure",
    "category": "Infrastructure",
    "location": "Mayem Lake, North Goa",
    "details": [
      {
        "label": "Facility Type",
        "val": "High-Altitude Steel Bungee Tower"
      },
      {
        "label": "Location",
        "val": "Scenic Mayem Lake, North Goa"
      },
      {
        "label": "Structural System",
        "val": "Heavy Trussed Steel Tower & Cantilever Deck"
      },
      {
        "label": "Safety Engineering",
        "val": "Dynamic Impact, Wind Oscillation & Failsafe Design"
      }
    ],
    "description": "A premier recreational adventure tourism engineering project featuring a heavy-duty structural steel bungee jumping tower standing high above the scenic Mayem Lake in North Goa.\n\nEngineered to provide a safe, thrilling, and world-class outdoor adventure experience. E-Construct performed rigorous dynamic impact load calculations, cantilever platform deflection analysis, wind-induced vortex shedding mitigation, and marine-environment corrosion protection detailing.",
    "images": [
      {
        "src": "/projects/bungee_goa_1.jpg",
        "label": "3D FEA Model, Architectural Elevation & Completed Bungee Tower on Mayem Lake"
      }
    ]
  },
  {
    "id": "traditional-temple",
    "title": "29. Traditional Heritage Temple & Mandapa",
    "subtitle": "Vedic Architecture & Carved Stone Mandapa Engineering",
    "category": "Infrastructure",
    "location": "South India",
    "details": [
      {
        "label": "Typology",
        "val": "Traditional Vedic Stone & RCC Temple Complex"
      },
      {
        "label": "Elements",
        "val": "Carved Stone Mandapa Pillars, Golden Stambha, Painted Shikhar"
      },
      {
        "label": "Courtyard",
        "val": "Sprawling Pilgrim Mandapam & Decorative Parikrama Courtyard"
      },
      {
        "label": "Engineering Scope",
        "val": "Heritage Structural Preservation, Foundation Tie-Beams & Load Distribution"
      }
    ],
    "description": "A consecrated traditional temple development blending ancient Shilpa Shastra stone architectural traditions with modern structural safety engineering. Features an ornate carved columned mandapa, sacred golden dhwaja stambha, intricate shikhar dome finials, and paved parikrama courtyards.\n\nE-Construct engineered the reinforced foundation tie-beam grid, stone pillar connection interfaces, seismic load distribution, and durable stormwater runoff detailing for heavy pilgrim footfall.",
    "images": [
      {
        "src": "/projects/new/47.jpg",
        "label": "Sacred Temple Entrance & Golden Stambha Gateway View"
      },
      {
        "src": "/projects/new/48.jpg",
        "label": "Ornately Carved Stone Mandapa Pillars & Temple Courtyard"
      }
    ]
  },
  {
    "id": "iskcon-pandharpur",
    "title": "30. ISKCON - Centre of Culture & Education",
    "subtitle": "Grand Spiritual, Heritage & Educational Institutional Campus",
    "category": "Infrastructure",
    "location": "Pandharpur, Maharashtra",
    "details": [
      {
        "label": "Client",
        "val": "ISKCON (International Society for Krishna Consciousness)"
      },
      {
        "label": "Campus Typology",
        "val": "Spiritual, Cultural & Educational Institution"
      },
      {
        "label": "Architecture",
        "val": "Traditional Vedic Architecture with Modern Engineering"
      },
      {
        "label": "Scope",
        "val": "3D BIM Modeling, Large-Span Halls & Temple Dome Engineering"
      }
    ],
    "description": "A monumental institutional and cultural campus designed for ISKCON at the sacred city of Pandharpur, Maharashtra. The complex functions as a regional spiritual, educational, and pilgrim reception hub.\n\nE-Construct delivered complete 3D BIM structural modeling, temple dome geometry and load transfer systems, column-free prayer and congregation halls, ornamental Vedic stone facade structural tie-ins, and visitor circulation planning for peak festival crowds.",
    "images": [
      {
        "src": "/projects/iskcon_1.png",
        "label": "Vedic Temple Dome & Traditional Shikhar Architectural Elevation"
      },
      {
        "src": "/projects/iskcon_2.png",
        "label": "Campus Main Entrance Gate & Ornamental Classical Pillars"
      },
      {
        "src": "/projects/iskcon_3.png",
        "label": "Cultural Center Pavilion & Saffron Flag Finial Detail"
      },
      {
        "src": "/projects/iskcon_4.png",
        "label": "Side Elevation of the Pandharpur Educational Wing"
      },
      {
        "src": "/projects/iskcon_5.png",
        "label": "3D Exterior Perspective Render of the ISKCON Campus"
      },
      {
        "src": "/projects/iskcon_6.png",
        "label": "Aerial Master Plan of Temple Complex & Landscaped Courtyards"
      },
      {
        "src": "/projects/iskcon_7.png",
        "label": "Frontal Gateway & Sacred Temple Courtyard 3D Perspective"
      }
    ]
  },
  {
    "id": "institutional-school-campus",
    "title": "31. International Educational Campus & School",
    "subtitle": "Modern Institutional Learning Campus & Sports Courtyards",
    "category": "Infrastructure",
    "location": "India",
    "details": [
      {
        "label": "Campus Facility",
        "val": "Primary & Secondary Academic Wings, Laboratories, Auditorium"
      },
      {
        "label": "Safety Standards",
        "val": "NBC Life Safety, Earthquake Resistant, Child-Safe Detailing"
      },
      {
        "label": "Environmental Design",
        "val": "Maximum Natural Daylight, Cross-Ventilation Breezeways"
      },
      {
        "label": "Structural System",
        "val": "Long-Span RCC Frames for Flexible Classrooms"
      }
    ],
    "description": "A comprehensive modern institutional education campus designed to provide inspiring learning environments. Features multi-storey academic wings, administrative blocks, science and computer laboratories, library atrium, and integrated sports courts.\n\nE-Construct engineered wide-span classroom grid layouts, life-safety fire evacuation egress corridors, earthquake-resistant framed structures, and solar rooftop mounting frameworks.",
    "images": [
      {
        "src": "/projects/new/53.jpg",
        "label": "International Educational Campus & School Main Building Elevation"
      }
    ]
  },
  {
    "id": "science-park",
    "title": "32. Science Park Development (1-Acre Land)",
    "subtitle": "Experiential Science, Technology & Outdoor Innovation Campus",
    "category": "Infrastructure",
    "location": "Maharashtra, India",
    "details": [
      {
        "label": "Site Footprint",
        "val": "1.0 Acre Integrated Land Parcel"
      },
      {
        "label": "Project Typology",
        "val": "Experiential Science & Educational Interactive Park"
      },
      {
        "label": "Key Zones",
        "val": "Acoustics Plaza, Mechanics Demonstrators, Optical Walkway"
      },
      {
        "label": "Services",
        "val": "Master Site Planning, Architectural & Structural Design"
      }
    ],
    "description": "Complete master planning, architectural concepts, and structural engineering for an immersive Science Park developed on a 1-acre site. The project combines outdoor interactive physics apparatus, sound resonance tubes, geometric walking plazas, optical illusion pavilions, and renewable energy demonstrators.\n\nE-Construct designed weather-resistant foundations, thematic structural display frames, child-safe interactive installations, and visitor pathways.",
    "images": [
      {
        "src": "/projects/science_park_1.png",
        "label": "Science Park Master Site Plan & 1-Acre Layout Diagram"
      },
      {
        "src": "/projects/science_park_2.png",
        "label": "Interactive Kinetic & Mechanical Physics Exhibit"
      },
      {
        "src": "/projects/science_park_3.png",
        "label": "Acoustic Sound & Resonance Pipes Installation"
      },
      {
        "src": "/projects/science_park_4.png",
        "label": "Optical Illusion & Perspective Science Exhibit"
      },
      {
        "src": "/projects/science_park_5.jpg",
        "label": "Central Interactive Science Model Showcase"
      },
      {
        "src": "/projects/science_park_6.png",
        "label": "Playground Mechanics & Outdoor Demonstration Zone"
      },
      {
        "src": "/projects/science_park_7.jpg",
        "label": "Energy Transformation & Velocity Rig Demonstrator"
      },
      {
        "src": "/projects/science_park_8.jpg",
        "label": "Solar, Hydro & Fluid Mechanics Exhibit"
      },
      {
        "src": "/projects/science_park_9.png",
        "label": "Aerodynamics & Centrifugal Force Learning Structure"
      },
      {
        "src": "/projects/science_park_10.png",
        "label": "Wave Motion & Harmonic Oscillator Exhibit"
      },
      {
        "src": "/projects/science_park_11.png",
        "label": "Mathematical Geometry & Spatial Discovery Walkway"
      }
    ]
  }
];

// ─── PROJECT HIGHLIGHTS WITH SEARCH & FILTER ────────────────────────────────────

const categories = [
  { id: 'All', label: 'All Projects', icon: Layers },
  { id: 'Commercial', label: 'Commercial & Mixed-Use', icon: Building2 },
  { id: 'Residential', label: 'Residential & Villas', icon: Landmark },
  { id: 'Infrastructure', label: 'Infrastructure & Special Structures', icon: Compass },
];

const ProjectHighlights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null); // { pIndex, iIndex }
  const [zoomScale, setZoomScale] = useState(1);

  // Filtered list
  const filteredProjects = useMemo(() => {
    return highlightedProjects.filter(p => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchQuery = !searchQuery.trim() || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.location && p.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  const currentProject = activeModal !== null ? filteredProjects[activeModal.pIndex] : null;
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
  }, [activeModal, currentProject]);

  return (
    <div className="bg-slate-50">
      
      {/* ── Filter & Search Bar ── */}
      <div className="sticky top-16 z-30 bg-slate-900/95 backdrop-blur-md border-y border-slate-800 shadow-xl px-4 sm:px-8 py-4">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                      : 'bg-slate-800/80 text-gray-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-slate-950' : 'text-amber-400'} />
                  <span>{cat.label}</span>
                  {cat.id === 'All' ? (
                    <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded-full ml-1">
                      {highlightedProjects.length}
                    </span>
                  ) : (
                    <span className="text-[10px] bg-black/20 px-1.5 py-0.5 rounded-full ml-1">
                      {highlightedProjects.filter(p => p.category === cat.id).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-px">
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center bg-white px-4">
            <Compass size={48} className="mx-auto text-amber-500/60 mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No Projects Match Your Search</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              Try adjusting your search query or selecting "All Projects" to view the full engineering portfolio.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredProjects.map((project, pIndex) => (
            <section key={project.id} className="py-16 md:py-24 px-4 sm:px-8 border-b border-gray-200 last:border-b-0 bg-white">
              <div className="max-w-[1400px] mx-auto">
                {/* Header Area */}
                <div className="max-w-4xl mb-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-[2px] bg-amber-500" />
                    <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs">{project.subtitle}</span>
                    <span className="bg-slate-100 text-slate-700 text-[10px] uppercase font-black px-2.5 py-0.5 rounded-full border border-slate-200">
                      {project.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 leading-tight mb-4">
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
                    Project Drawings &amp; Visuals ({project.images.length} {project.images.length === 1 ? 'File' : 'Files'}) — Click to Enlarge
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {project.images.map((img, iIndex) => (
                      <motion.div 
                        key={iIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: iIndex * 0.04 }}
                        onClick={() => setActiveModal({ pIndex, iIndex })}
                        className="group relative h-[280px] overflow-hidden rounded-2xl shadow-md bg-slate-100 cursor-pointer border border-slate-200 hover:border-amber-500/50 transition-all duration-300"
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
          ))
        )}
      </div>

      {/* Framed Window Lightbox Modal with Interactive Zoom & Pan */}
      <AnimatePresence>
        {activeModal !== null && currentProject && currentImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
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
