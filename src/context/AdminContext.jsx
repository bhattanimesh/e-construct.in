import React, { createContext, useContext, useState, useEffect } from 'react';

// ─── DEFAULT DATA ─────────────────────────────────────────────────────────────

const DEFAULT_DATA = {
  services: [
    { id: 1, title: "Architectural Consultancy", desc: "A professional team of architects, engineers and designers creating innovative building design solutions.", img: "/ArchitecturalConsultancy.jpg" },
    { id: 2, title: "Structural Design Consultancy", desc: "Designing and evaluating structural performance of your designs. Our main area of focus includes RCC, Steel and PSC projects.", img: "/StructuralDesignConsultancy.jpeg" },
    { id: 3, title: "Building Information Modelling", desc: "We build BIM models for greater visibility, better decision-making, and cost-savings on your infrastructure projects.", img: "/BuildingInformationModelling.webp" },
    { id: 4, title: "Project Management Consultancy", desc: "Scheduling, cost budgeting, risk identifying, monitoring & controlling the construction process to increase ROI.", img: "/ProjectManagementConsultancy.jpg" },
    { id: 5, title: "Luxury Villa Design", desc: "Ideal luxurious villa designs featuring rich amenities tailor made for peaceful and tranquil life in the lap of nature.", img: "/LuxuryVillaDesign.jpg" },
    { id: 6, title: "Corporate ON-JOB Training", desc: "We provide world-class engineering training programs designed to produce certified engineers that can work across the globe.", img: "/CorporateON-JOBTraining.webp" },
    { id: 7, title: "BIM Technology Consultancy", desc: "Advanced BIM Solutions from 1D to 10D - Transforming construction with Precision, Efficiency & Sustainability.", img: "/BIMTechnologyconsultancy.webp" },
    { id: 8, title: "Structural Design Consultancy", desc: "We specialize in RCC, Composite, Flat, and PT Slabs, delivering resilient structures for residential, commercial and industrial projects.", img: "/InteriorDesignConsultancy.webp" },
  ],
  projects: [
    { id: 1, title: "9 Emperio Skyscraper (G+35)", category: "Residential", location: "Patia, Bhubaneswar, Odisha", image: "/projects/emp_2.png" },
    { id: 2, title: "Ashoak Commercial Mall (2B+G+8)", category: "Commercial", location: "Jalna, Maharashtra", image: "/projects/mall_1.png" },
    { id: 3, title: "Ashoak Mall Project - 3D Evaluation Image", category: "Commercial", location: "Jalna, Maharashtra", image: "/projects/mall_4.png" },
    { id: 4, title: "GRK Africa International Complex", category: "Industrial", location: "Africa", image: "/projects/grk_1.jpeg" },
    { id: 5, title: "Africa Project - 3D Evaluation Image", category: "Industrial", location: "Africa", image: "/projects/grk_4.png" },
    { id: 6, title: "9 Boulevard Luxury Towers (G+35)", category: "Residential", location: "Patia, Bhubaneswar, Odisha", image: "/projects/blv_8.png" },
    { id: 7, title: "9 Boulevard - 3D Evaluation Image", category: "Residential", location: "Patia, Bhubaneswar, Odisha", image: "/projects/blv_5.png" },
    { id: 8, title: "Group Housing Development (G+4)", category: "Residential", location: "Integrated Arch, Structural & MEP", image: "/projects/gh_1.png" },
    { id: 9, title: "Goregaon Mulund Link Road (GMLR)", category: "Industrial", location: "Mumbai, India", image: "/prj3.webp" },
    { id: 10, title: "KALPATARU Park Riviera", category: "Residential", location: "Panvel, Navi Mumbai", image: "/prj1.jpg" },
    { id: 11, title: "Sonali Residential", category: "Residential", location: "Pune, Maharashtra", image: "/prj2.jpg" },
  ],
  blogs: [
    { 
      id: 12, 
      title: "Green Is Becoming the Baseline: Whole-Life Engineering & Hybrid Timber in Modern Infrastructure", 
      slug: "green-is-becoming-the-baseline-green-infrastructure-timber-structures", 
      desc: "India has won the argument on operational energy. The harder questions—embodied carbon, construction waste, and circular whole-life engineering—are answered through hybrid timber and sustainable infrastructure.", 
      img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop", 
      pdfUrl: "/pdfs/ECONSTRUCT_Green_Infrastructure_Timber_Redraft_260811_105649.pdf", 
      author: "Mr. Sandeep Pingale", 
      date: "2026-08-11", 
      category: "Sustainability", 
      tags: ["green infrastructure", "timber structures", "sustainability", "embodied carbon", "whole-life engineering", "thought leadership", "mass timber", "BIM", "circular economy"], 
      content: `> "Green technology in India's mega projects is no longer a differentiator reserved for premium developments - it is fast becoming the baseline expectation." — **Mr. Sandeep Pingale**, Founder & Managing Director, ECONSTRUCT DESIGN AND BUILD PVT. LTD.

Right Material. Right Structure. Right Location. Right Lifecycle.

---

## 01. The Baseline Has Already Moved

India's infrastructure story is now being written in solar panels, recycled materials, and smart energy systems as much as in steel and concrete. As the country builds highways, metros, airports, and industrial corridors at an unprecedented scale, sustainability has shifted from a compliance checkbox to a core design principle. Green buildings cut greenhouse gas emissions by up to 35% and trim maintenance costs by roughly 20%—savings too significant for any developer or public agency to ignore.

India now holds the world's second-largest green building footprint after the United States. The Indian Green Building Council (IGBC) has registered over 15.7 billion sq ft across 8,100+ certified operational projects. GRIHA, developed by TERI, is mandatory for all new central government building projects.

Flagship projects like the **Indira Paryavaran Bhawan** in New Delhi operate as on-site net-zero energy facilities with a 930 kWp rooftop solar grid. Infrastructure mega-projects lead by example:
- **Mumbai-Ahmedabad Bullet Train Corridor:** Japanese J-Slab ballastless tracks, 2×25 kV traction, noise barriers, and green-certified station facilities.
- **Delhi-Mumbai Expressway:** Wildlife overpasses and underpasses, solar lighting, rainwater harvesting, and large-scale afforestation.
- **Navi Mumbai International Airport & Yashobhoomi:** Sustainable aviation fuel infrastructure and 100% wastewater reuse.

---

## 02. The Question We Have Not Yet Answered: Embodied Carbon

Almost everything currently certified measures operational performance while a building is running. Very little measures what it cost to build in embodied carbon, or what the structure becomes at the end of its lifecycle.

As building automation, solar grids, and high-performance glazing improve, operational carbon drops. What remains is **embodied carbon** locked inside cement, steel, glass, and finishes. Quietly, the material decision becomes the carbon decision.

Future buildings must be engineered not only for construction and occupancy, but for repair, adaptation, disassembly, recovery, and reuse.

---

## 03. Circular Construction is a Structural Decision

Circular construction changes the sequence from *BUILD - DEMOLISH - DUMP* to **BUILD - USE - ADAPT - DECONSTRUCT - REUSE**.

Whether a building can be taken apart is determined years earlier at the design table:
- Mechanically fixed panels & bolted connections.
- Demountable facades & modular floor systems.
- Accessible MEP distribution zones.
- **Digital Material Passports:** An asset inventory detailing material composition, fixing methods, and residual value.

Cast-in-place concrete excels at load bearing, but not at disassembly. Prefabricated, mechanically connected structural components provide the real circular strategy.

---

## 04. Where Mass Timber Genuinely Fits

Engineered structural timber—glulam beams, Cross-Laminated Timber (CLT), Laminated Veneer Lumber (LVL), and timber-concrete composites—are factory-manufactured, quality-controlled structural products.

For mid-rise housing and urban infrastructure:
- Lower self-weight reduces seismic inertia demand and foundation reactions.
- Prefabrication compresses construction schedules and eliminates wet trade delays.
- Standardized floor plates compound efficiency.

The proposition is not replacing all concrete with wood, but engineering hybrid structures: **Concrete where concrete performs best, steel where steel performs best, and timber where timber performs best.**

---

## 05. What a Hybrid Building Looks Like

In a modern mid-rise hybrid structure:
- **RCC Core & Substructure:** Resists lateral earthquake and wind loads, houses lift shafts and fire stairs, and stays below ground.
- **Superstructure:** Glulam columns with CLT or timber-concrete composite floor plates. A thin reinforced topping slab provides acoustic mass and diaphragm action.

### Key Engineering Checks for Hybrid Systems:
1. Connection stiffness and joint slip under dynamic loads.
2. Diaphragm continuity between timber floor plates and the RCC central core.
3. Serviceability floor vibration and acoustic isolation.
4. Charring rate, residual structural section, and encapsulated joint fireproofing.
5. Termite, fungal, and monsoon moisture protection for Indian climatic exposure.
6. Differential long-term creep and movement between timber and concrete.

---

## 06. The Code Question: Standards & Ecosystems

India's IS 883:2016 provides a base for conventional timber, but was not written for multi-storey mass timber. Updating national codes requires Indian test data for local timber species under Indian environmental conditions.

**Crucial Warning on International Codes:**
Overseas standards (Eurocode EC5, US NDS/SDPWS, Canadian CSA O86) belong to unified reliability ecosystems. Mixing isolated clauses across codes destroys the structural safety margin. India must benchmark international standards while establishing dedicated IS codes for mass timber.

---

## 07. Indian Climate, Fire, & Lifecycle Discipline

1. **Moisture & Durability:** Monsoon humidity, coastal exposure, and subterranean termites require strict drainage, ventilation, non-toxic treatment, and routine inspection regimes.
2. **Fire Performance:** Engineering must calculate charring rates (retained load-bearing core), protective encapsulation, sprinkler coverage, and cavity barriers.
3. **Lifecycle Carbon Integrity:** Claims of "carbon negative" must be backed by full Lifecycle Assessments (LCA)—from plantation, harvesting, kiln drying, and fabrication to transport, maintenance, and end-of-life recovery.

---

## 08. Supply Chain & Agroforestry Integration

Structural timber is an agricultural product before it is a building product. Sustainable farm forestry creates a domestic structural supply chain without touching natural forests, creating a unified value chain across agriculture, manufacturing, and construction.

### Quality Control Gates:
- Traceable plantation species selection and rotation.
- Verified kiln moisture content and stress grading.
- Adhesive bond-line quality control during factory fabrication.
- Precision CNC tolerances for rapid site assembly.

---

## 09. A National Programme: 10 Practical Steps

To build a future-ready sustainable infrastructure sector, India needs:

1. **Structural Species Database** for tested Indian timber species.
2. **Engineered Wood Product Standards** covering CLT, Glulam, and LVL.
3. **Indian Fire Test Data** for charring rates and joint encapsulation.
4. **Seismic & Diaphragm Testing** for multi-storey hybrid frames.
5. **Timber Connection Manuals** for practising structural engineers.
6. **Instrumented Demonstration Housing** evaluated over multi-year cycles.
7. **Certified Manufacturing** with certified plantation origins.
8. **BIM & CNC Prefabrication Capability** across national suppliers.
9. **Digital Material Passports** required as project deliverables.
10. **Design-for-Disassembly Guidelines** applied to concrete, steel, and timber buildings alike.

---

## 10. The Road Ahead

Green technology is no longer a differentiator reserved for premium projects; it is becoming the baseline expectation. The next differentiator will be whole-life engineering.

India should build more intelligently with hybrid systems that optimize concrete, steel, and timber for maximum safety, economy, durability, and lifecycle value.

[📄 Download Full PDF (Green Infrastructure & Timber Structures Whitepaper)](/pdfs/ECONSTRUCT_Green_Infrastructure_Timber_Redraft_260811_105649.pdf)`, 
      published: true 
    },
    { id: 1, title: "Transforming a Barren Pond Area into a Construction Site", slug: "transforming-a-barren-pond-area-into-a-construction-site", desc: "Barren pond areas, often considered unproductive land, can be effectively repurposed for construction with the right engineering and planning.", img: "https://e-construct.in/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-07-at-17.56.04_ad3cc304-1024x576.jpg", author: "E-Construct Team", date: "2025-03-11", category: "Civil Engineering", tags: ["construction", "land reclamation", "foundation", "sustainability"], content: "Barren pond areas, often considered unproductive land, can be effectively repurposed for construction with the right engineering and planning.\n\n## 1. Feasibility Study and Site Assessment\n\nBefore initiating construction, a comprehensive feasibility study must be conducted:\n\n- **Soil and Geotechnical Analysis:** Assessing soil strength, groundwater levels, and stability.\n- **Environmental Impact Assessment (EIA):** Ensuring the project adheres to ecological sustainability.\n- **Legal and Regulatory Compliance:** Acquiring permits and approvals from local authorities.\n\n## 2. Land Reclamation and Site Preparation\n\n- **Dewatering the Pond:** Using pumps and drainage solutions to remove excess water.\n- **Soil Stabilization:** Implementing methods like sand filling, compaction, or geotextiles to strengthen the ground.\n- **Grading and Leveling:** Ensuring a stable and uniform surface for future development.\n\n## 3. Infrastructure Development\n\n- **Road Access and Connectivity:** Developing access roads for smooth transportation.\n- **Utility Installation:** Setting up essential services such as water, electricity, and sewage.\n- **Stormwater Management:** Implementing drainage systems to prevent flooding and erosion.\n\n## 4. Structural Design and Foundation Planning\n\n- **Pile Foundations:** Using deep foundation methods like driven or bored piles.\n- **Raft or Mat Foundations:** Distributing the structure's weight evenly.\n- **Soil Reinforcement:** Enhancing soil strength using stone columns or chemical stabilization.\n\n## 5. Sustainable Construction Practices\n\n- **Rainwater Harvesting:** Collecting and reusing water for site needs.\n- **Green Landscaping:** Incorporating vegetation and green zones.\n- **Energy-Efficient Designs:** Utilizing passive ventilation and natural lighting solutions.\n\n## 6. Project Execution and Monitoring\n\n- **Phased Construction Approach:** Gradual development for better resource management.\n- **Regular Quality Checks:** Conducting structural and material inspections at each stage.\n- **Use of Advanced Technologies:** Implementing BIM for optimized planning and execution.\n\n## Conclusion\n\nConverting a barren pond area into a construction site is a complex but feasible process with strategic planning and modern engineering solutions.", published: true },
    { id: 2, title: "BIM - A New Career Option in the Civil Industry", slug: "bim-a-new-career-option-in-the-civil-industry", desc: "If you're planning to build a career as a BIM Modeler, this blog can help you understand the basics of Building Information Modeling.", img: "https://e-construct.in/wp-content/uploads/2022/07/BIM-1.png", author: "E-Construct Team", date: "2022-07-11", category: "Career", tags: ["BIM", "career", "civil engineering", "BIM modeler"], content: "If you're planning to build a career as a BIM Modeler, this blog can help you to understand the basics of the Building Information Model.\n\n## What is BIM?\n\nBuilding Information Modeling (BIM) is the holistic process of creating and managing information for a built asset. Based on an intelligent model enabled by a cloud platform, BIM integrates structured, multi-disciplinary data to produce a digital representation of an asset across its lifecycle, from planning and design to construction and operations.\n\nThe basis of BIM dates back to 1975, when Charles M. Eastman published his description of a working prototype. Later in 2002, Autodesk published its white paper on Building Information Model.\n\nSoftware that uses BIM modeling includes: Solibri, Tekla, Bentley, Revit, NavisWorks, AutoCAD, Rhino, Catia, Vectorworks, Google SketchUp.\n\n## Roles as BIM Practitioner\n\n- BIM Analyst\n- BIM Facilitator\n- BIM Modeler\n- BIM Application Developer\n- BIM Software Developer\n- Modeling Specialist\n- BIM Consultant\n- BIM Researcher\n- BIM Management\n- Chief BIM Officer\n\nTo become an efficient BIM practitioner you need: educational background in architecture, engineering, or construction; hands-on practical BIM experience; thorough knowledge of multiple tools; effective communication skills; and strong leadership qualities.\n\n## Salary offered to a BIM Practitioner\n\nAs a BIM practitioner you can get between 2.5 - 18 lakhs per annum depending on experience. As a fresher, 15-25 thousand rupees per month. With 2-3 years experience, 35-50 thousand per month. Leading professionals with 5-10+ years may land 10-18 lakhs per annum.", published: true },
    { id: 3, title: "How to Get a Job in Civil Engineering?", slug: "how-to-get-a-job-in-civil-engineering", desc: "Civil engineers design, build and shape the world around us. Learn how to bridge the gap between college and industry to land your dream job.", img: "/CorporateON-JOBTraining.webp", author: "E-Construct Team", date: "2022-07-11", category: "Career", tags: ["civil engineering", "job", "career", "placement"], content: "Civil engineers design, build and shape the world around us. They're involved in the construction and maintenance of public works such as bridges, dams, roads, railways, pipelines, airports, hospitals, and schools.\n\nThe construction industry holds a lot of potential for aspirants. There are numerous departments you can choose from:\n\n- Drafting\n- Structural Design Engineering\n- Building Information Modeling\n- Site/Project Management\n- Tendering & Estimation\n- Contracts Management\n\nEven though there are considerable opportunities in the civil industry, aspirants are unable to find jobs. The reason is the lack of knowledge students gain from college. The requirements of companies are completely different from the syllabus offered by universities.\n\nAs an individual, you need to understand the prerequisites of the market, assess your skill set, and work on these gaps to become a complete package for organizations.\n\nLet's take the example of Dheeraj, a final year civil engineering student. During his placement interview, he was asked about software he mastered for drafting designs. Even though Dheeraj was good with AutoCAD, he wasn't able to stand up to the expectation of the interviewer. He was asked to draft a home design according to Vastu Shastra, but had little knowledge about the topic.\n\nTo get a job in the civil industry, you need to be a complete package. There are a plethora of opportunities - you just need to shape yourself according to their requirements. We at E-Construct offer professional courses to help you hone your skill set and gain the required knowledge and practical experience.", published: true },
    { id: 4, title: "The Evolution of Modern-Day Construction: Men, Material, and Machine", slug: "the-evolution-of-modern-day-construction-men-material-and-machine", desc: "Construction has evolved drastically from ancient times to modern-day practices. Explore the transformation through Men, Material, and Machine.", img: "https://e-construct.in/wp-content/uploads/2025/02/The-Evolution-of-Modern-Day-Construction-Men-Material-and-Machine-inr-1024x576.jpg", author: "E-Construct Team", date: "2025-02-24", category: "Civil Engineering", tags: ["construction evolution", "BIM", "technology", "workforce", "materials"], content: "Construction has evolved drastically from ancient times to modern-day practices. This evolution can be understood through three major factors: Men (Workforce), Material, and Machine.\n\n## 1. The Evolution of Workforce (Men)\n\nIn ancient civilizations like Mesopotamia, Egypt, and Rome, construction was predominantly labor-intensive. Structures like the Pyramids of Egypt and the Great Wall of China required thousands of laborers.\n\nWith industrialization, mechanization reduced dependency on manual labor. The modern construction workforce is highly specialized, with engineers, architects, and project managers leading projects. AI, automation, and BIM further enhance precision and efficiency.\n\n## 2. The Evolution of Materials\n\n- **Ancient Era:** Stone, mud, and timber. Lime mortar in Roman architecture enabled enduring structures like the Colosseum.\n- **Medieval and Renaissance Period:** Bricks, cement, and iron allowed more sophisticated architectural designs.\n- **Industrial Revolution:** Steel, reinforced concrete, and glass enabled skyscrapers and large-scale infrastructure.\n- **Modern Era:** Carbon fiber, self-healing concrete, and nanomaterials contribute to sustainability. Prefabricated and modular construction reduces time and costs.\n\n## 3. The Evolution of Machinery\n\n- **Pre-Industrial Age:** Wooden scaffolding, pulleys, and levers.\n\n- **Industrial Revolution:** Steam engines and cranes revolutionized construction.\n\n- **20th Century:** Bulldozers, concrete mixers, and tower cranes accelerated large-scale projects.\n\n- **21st Century:** Robotics, drones, and AI-powered equipment. 3D printing and automation are paving the way for futuristic construction.\n\n## Conclusion\n\nThe evolution through Men, Material, and Machine has transformed construction from labor-intensive methods to highly automated processes. At Econstruct, we continuously integrate the latest technological advancements to optimize construction processes and deliver high-quality structural solutions.", published: true },
    { id: 5, title: "Tips to Get a Job as a Structural Engineer", slug: "tips-to-get-a-job-as-a-structural-engineer", desc: "As a fresher, it is always difficult to land a job as a Structural Engineer. Most companies prefer experienced candidates.", img: "/StructuralDesignConsultancy.jpeg", author: "E-Construct Team", date: "2022-07-12", category: "Career", tags: ["structural engineering", "jobs", "career tips", "software"], content: "Looking for a job in Structural Engineering? As a fresher, it is always difficult to land a job at a construction firm. Most companies prefer candidates with experience.\n\n## What is Structural Engineering?\n\nStructural Engineering deals with the structural integrity and strength of a building or structure. You need to look after key parameters like materials, design, and stability.\n\nTo get a job, you need to have your bases covered:\n\n- Software Base\n- Fundamental Base\n- Code Base\n\n## Software Base\n\nMajor software providers in the civil industry:\n\n**Bentley:** STAAD PRO, STAAD FOUNDATION, RCDC\n\n**CSI:** ETABS, SAP2000, SAFE, CSI-BRIDGE\n\n**MIDAS:** MIDAS GEN, MIDAS CIVIL, MIDAS SDS, MIDAS SET\n\nDo thorough research about the company you're applying to - they will likely ask about the software they use.\n\n## Construction Codes\n\nIndian codes you should know:\n\n- IS 456\n- IS 800\n- IS 1893\n- IS 16700\n- IS 875 (Part 1, 2, & 3)\n\nInternational codes: ACI 318, CEB FIP, UBC 97, IBC, NBC, NBCC, BS8110, EC\n\n## Fundamental Base\n\nHave a clear understanding of basic concepts of Structural Engineering. Know the organization's ongoing projects as they might be looking for someone to work on that assignment.\n\nBe prepared for every situation, keep things simple and clear, and be confident with your answers. All the best for your future endeavours!", published: true },
    { id: 6, title: "What's Wrong with the Making Process of a Civil Engineer?", slug: "whats-wrong-with-the-making-process-of-a-civil-engineer", desc: "Civil Engineering is a part of engineering that deals with mathematical and scientific knowledge to improve infrastructures.", img: "/BuildingInformationModelling.webp", author: "E-Construct Team", date: "2022-07-12", category: "Civil Engineering", tags: ["civil engineering", "education", "career", "ecosystem"], content: "Civil Engineering deals with mathematical and scientific knowledge to improve infrastructures like bridges, dams, buildings, roads, railways, and common utilities.\n\n## Civil Engineering Ecosystem\n\nIn a civil engineering ecosystem, you work with construction companies, contractors, architects, and government organizations. This ecosystem can be divided into two parts:\n\n- **Academic Ecosystem:** Choosing your career, getting a degree, gaining knowledge and qualifications.\n- **Industrial Ecosystem:** Implementing theoretical knowledge to practical use by working in the field.\n\nIn the past few years, civil engineering has registered the lowest placement rate of a mere 38% between 2012-13 and 2015-16 among six engineering streams approved by AICTE.\n\nMost universities have a fixed syllabus that does not match current trends and techniques of the market. Another reason is the lack of effort put by students to work on live projects in their final year.\n\nEven after getting a degree in civil engineering, the knowledge and skills you develop do not match market requirements. So if you are not able to stand up to the expectations of a company, it would be tough to be placed in a good position.\n\nYou need to be a Complete Package for the company. Try to work on projects, intern in different organizations, and gain practical knowledge. Pick a field in the industry and learn the skill set required by companies. Identify your skill set level, know your passion, and choose a department in the industry.\n\n## Conclusion\n\nTo ensure modern temples become future heritage, it's essential to blend traditional techniques with contemporary methods, while developing durable modern materials. Engaging communities in the process helps maintain the spiritual essence.", published: true },
    { id: 7, title: "Decline in Vision for Temples of Heritage: The Shift from Stone to Concrete", slug: "decline-in-vision-for-temples-of-heritage-the-shift-from-stone-to-concrete-in-modern-temple-construction", desc: "Old temple architecture is a testament to the ingenuity and artistry of ancient builders, characterized by intricate designs and harmonious alignment with nature.", img: "/ArchitecturalConsultancy.jpg", author: "E-Construct Team", date: "2024-12-18", category: "Architecture", tags: ["heritage", "temples", "architecture", "stone", "concrete"], content: "Old temple architecture is a testament to the ingenuity and artistry of ancient builders, characterized by intricate designs, towering gopurams, and harmonious alignment with nature. Crafted primarily from durable materials like granite, sandstone, and marble, these temples were designed to withstand the test of time.\n\n## Timeless Ingenuity: Unique Features of the Brihadeeswarar Temple\n\nThe Brihadeeswarar Temple exemplifies ancient Indian architectural brilliance. Its earthquake-resistant base uses interlocking stones for stability, while the towering 216-foot vimana is carved from a single 80-ton granite block. The temple's shadowless design at noon reflects advanced geometry, and its musical pillars showcase expertise in acoustics and material resonance.\n\n## Modern Temple Construction Practices\n\nSmall concrete temples, while cost-effective and quick to build, often face challenges in long-term sustainability. Concrete materials can deteriorate over time due to weathering, lack of proper maintenance, and environmental factors. These structures may not offer the durability or aesthetic value of traditional stone temples.\n\n## Heritage vs. Innovation\n\nAncient temple construction is a heritage of unmatched craftsmanship and durability, using stone and intricate techniques that have withstood centuries. In contrast, modern construction materials, while efficient, may not offer the same longevity as stone, leading to potential deterioration over time.\n\nThe decline in demand for traditional skills has resulted in a loss of craftsmanship, and modern designs risk diluting the spiritual and cultural essence that ancient temples embodied.\n\n## Conclusion\n\nTo ensure modern temples become future heritage, it's essential to blend traditional techniques with contemporary methods, while developing durable modern materials. Documenting traditional designs and creating adaptable spaces will preserve their cultural significance.", published: true },
    { id: 9, title: "Top 10 Benefits of BIM Technology for Civil Engineers: Easing Construction Projects on Live Sites", slug: "top-10-benefits-of-bim-technology-for-civil-engineers-easing-construction-projects-on-live-sites", desc: "Building Information Modeling (BIM) technology has revolutionized the construction industry by offering a comprehensive solution to manage, design, and execute projects efficiently.", img: "/BIMTechnologyconsultancy.webp", author: "E-Construct Team", date: "2025-02-28", category: "BIM", tags: ["BIM", "civil engineering", "construction management", "technology"], content: "Building Information Modeling (BIM) technology has revolutionized the construction industry. For civil engineers working on live construction projects, BIM is more than just a tool; it is a transformative approach.\n\n1. **Enhanced Collaboration and Communication:** BIM facilitates seamless collaboration among all stakeholders. The centralized digital models ensure everyone has access to the same information, reducing miscommunication and errors.\n\n2. **Improved Visualization:** With 3D modeling capabilities, BIM allows civil engineers to visualize the entire project before and during construction, identifying potential design flaws in real-time.\n\n3. **Accurate Cost Estimation:** BIM integrates cost estimation features that provide precise material quantities and labor costs, ensuring better budget management.\n\n4. **Efficient Project Planning:** The ability to create detailed project timelines and schedules ensures timely project delivery even under dynamic site conditions.\n\n5. **Clash Detection and Risk Mitigation:** BIM's clash detection tools identify conflicts between various systems (e.g., plumbing and electrical) in the design stage, reducing rework.\n\n6. **Sustainability and Energy Efficiency:** BIM supports sustainable construction practices by enabling energy analysis and environmental impact assessments.\n\n7. **4D and 5D Simulation:** 4D simulation helps visualize the construction sequence over time. 5D simulation integrates cost data, enabling real-time budget tracking.\n\n8. **Streamlined Maintenance and Facility Management:** Post-construction, BIM models serve as a valuable resource for facility management, maintenance, renovations, and future expansions.\n\n9. **Faster Decision-Making:** The data-rich environment of BIM enables quicker and more informed decision-making based on real-time data.\n\n10. **Increased Productivity and Efficiency:** By automating repetitive tasks and integrating various processes, BIM significantly boosts productivity.\n\n## Conclusion\n\nBIM technology is a game-changer for civil engineers, offering benefits that streamline live construction projects and improve outcomes. Adopting BIM is not just an option but a necessity for staying competitive.", published: true },
    { id: 10, title: "Why Buildings Crack and How to Solve the Problem", slug: "why-buildings-crack-and-how-to-solve-the-problem", desc: "Cracks in buildings are a common issue, often raising concerns for property owners and construction professionals alike.", img: "/StructuralDesignConsultancy.jpeg", author: "E-Construct Team", date: "2025-02-28", category: "Structural Engineering", tags: ["cracks", "structural repair", "maintenance", "buildings"], content: "Cracks in buildings are a common issue, often raising concerns for property owners and construction professionals alike. While some cracks may be merely cosmetic, others can signal serious underlying structural problems.\n\n## Types of Cracks\n\n- **Hairline Cracks:** Fine surface cracks in plaster or render. Usually caused by thermal expansion and contraction, these are generally cosmetic.\n- **Diagonal Cracks:** Often appear at the corners of windows and doors. These can indicate differential settlement of the foundation.\n- **Vertical Cracks:** May indicate foundation settlement or shrinkage of building materials.\n- **Horizontal Cracks:** Particularly in basement or retaining walls, these can indicate serious structural stress and require urgent professional assessment.\n\n## Common Causes\n\n1. Foundation settlement or movement\n2. Thermal expansion and contraction\n3. Moisture ingress and drying shrinkage\n4. Overloading of structural elements\n5. Poor construction quality or inadequate reinforcement\n6. Soil erosion or changes in groundwater levels\n\n## Repair Approaches\n\nThe appropriate repair method depends entirely on the cause and severity of the crack:\n\n- **Cosmetic cracks:** Surface fillers, flexible sealants, or render repairs.\n- **Structural cracks:** Epoxy injection, carbon fiber reinforcement, or underpinning.\n- **Foundation issues:** Underpinning, soil stabilization, or drainage improvements.\n\nAlways consult a qualified structural engineer before undertaking any crack repair work.", published: true },
    { id: 11, title: "Building Collapses in India: Causes, Impacts, and Solutions for Safe Infrastructure", slug: "building-collapses-in-india-causes-impacts-and-solutions-for-safe-infrastructure", desc: "Discover the causes of building collapses in India, including poor construction materials, design flaws, and inadequate regulations.", img: "/ProjectManagementConsultancy.jpg", author: "E-Construct Team", date: "2024-12-20", category: "Structural Engineering", tags: ["safety", "India", "building collapse", "infrastructure", "prevention"], content: "Building collapses in India, even under minimal disturbances, are a reflection of deeper systemic issues in the construction sector. The recent collapse of a seven-story building under construction in Bengaluru serves as a tragic reminder of the urgent need to improve infrastructure quality and safety.\n\n## Introduction\n\nThese incidents, particularly during the monsoon season, highlight poorly enforced building regulations, substandard materials, and a lack of accountability. Addressing these challenges is critical to ensuring public safety and economic stability.\n\n## Reasons for Building Collapses in India\n\nBuilding collapses are primarily caused by:\n\n- **Substandard construction materials:** Poor quality cement, steel, and aggregates.\n- **Poor structural design:** Inadequate foundations that fail to account for soil conditions and load-bearing capacity.\n- **Post-construction modifications:** Adding extra floors or changing building usage without structural assessments.\n- **Water seepage and poor drainage:** Weakening concrete and corroding reinforcement steel over time.\n- **Aging infrastructure:** Improper construction techniques and environmental factors like soil erosion.\n- **Corruption and regulatory failures:** Use of shortcuts during construction.\n\n## Impacts on Economy and Safety\n\nThe consequences of building collapses are severe:\n\n- Loss of human lives, injuries, and emotional trauma for affected families.\n- Direct costs for rescue operations and rebuilding.\n- Indirect losses such as business disruptions and reduced investor confidence.\n- Erosion of public trust in infrastructure quality.\n- Legal liabilities, increased insurance claims, and environmental pollution from debris.\n\n## Conclusion\n\nBuilding collapses in India highlight systemic issues that demand urgent attention. Aging buildings must undergo periodic maintenance and retrofitting. Leveraging technological interventions such as BIM and advanced structural analysis software can enhance construction precision. Addressing corruption and ensuring transparency in the construction process are critical to improving safety and accountability.", published: true },
  ],
  team: [
    { id: 1, name: "Prof. Sandeep Pingale", position: "Founder & Managing Director", image: "https://e-construct.in/wp-content/uploads/2024/08/Media-e1768631671611.jpeg", bio: "Visionary leader with 20+ years of experience in Civil Engineering & Project Management." },
    { id: 2, name: "Shraddha Pingale", position: "Co-Founder", image: "/Shraddha.png", bio: "Expert in operational excellence and strategic planning at E-Construct." },
    { id: 3, name: "Mr. Jitendra Naregalkar", position: "Associate Director", image: "https://e-construct.in/wp-content/uploads/2025/11/Sunil-Puranik-e1771139884804.webp", bio: "Specialist in Structural Design and BIM implementation." },
    { id: 4, name: "Mr. Tushaar Y. Dawda", position: "Associate Partner", image: "https://e-construct.in/wp-content/uploads/2026/02/Mr.-Tushaar-Y.-Dawda-e1770176732845.webp", bio: "Consultancy services for repair works of buildings including detailed reports." },
    { id: 5, name: "Mr. Sanjay Patil", position: "Associate Partner", image: "https://e-construct.in/wp-content/uploads/2026/02/Mr.-Sanjay-Patil-e1770039923812.png", bio: "Structural Engineer running ACDC, expert in design and repair of buildings." },
    { id: 6, name: "Ullas Gowda", position: "Associate Director", image: "https://e-construct.in/wp-content/uploads/2026/02/ullas.webp", bio: "12+ years of experience leading Project Management and Operations." },
  ],
  careers: [
    { id: 1, title: 'Senior BIM Engineer', dept: 'BIM & Technology', location: 'Pune, Maharashtra', type: 'Full-Time', experience: '4-7 Years', desc: 'Lead BIM coordination and clash detection for large-scale commercial and residential projects.', responsibilities: ['Develop and manage 3D BIM models', 'Coordinate clash detection using Navisworks', 'Prepare BIM Execution Plans', 'Mentor junior BIM staff'], requirements: ['B.E./B.Tech in Civil or Architecture', 'Proficiency in Revit, AutoCAD, Navisworks', 'Experience with BIM 360 / ACC platform'] },
    { id: 2, title: 'Structural Design Engineer', dept: 'Structural Consultancy', location: 'Pune, Maharashtra', type: 'Full-Time', experience: '3-6 Years', desc: 'Design and analyse RCC and steel structures for residential, commercial, and industrial projects.', responsibilities: ['Perform structural analysis using ETABS / STAAD.Pro', 'Prepare detailed structural drawings', 'Conduct site visits and structural audits'], requirements: ['B.E./B.Tech or M.Tech in Structural/Civil Engineering', 'Proficiency in ETABS, STAAD.Pro, SAFE, AutoCAD'] },
    { id: 3, title: 'Project Management Consultant', dept: 'Project Management', location: 'Pune / Mumbai', type: 'Full-Time', experience: '5-10 Years', desc: 'Oversee end-to-end project delivery for residential and commercial construction projects.', responsibilities: ['Manage project timelines, budgets, and resources', 'Coordinate between clients, consultants, and contractors', 'Prepare MIS reports and project dashboards'], requirements: ['B.E. Civil with PMP certification preferred', 'Strong knowledge of MS Project / Primavera'] },
    { id: 4, title: 'Architectural Designer', dept: 'Architecture & Design', location: 'Pune, Maharashtra', type: 'Full-Time', experience: '2-5 Years', desc: 'Create innovative architectural designs for luxury villas, residential complexes, and commercial spaces.', responsibilities: ['Develop concept designs and schematic drawings', 'Create 3D visualisations and renders', 'Coordinate with structural and MEP consultants'], requirements: ['B.Arch or M.Arch degree', 'Proficiency in AutoCAD, Revit, SketchUp, Lumion'] },
    { id: 5, title: 'BIM Trainer - Corporate Training', dept: 'Training & Education', location: 'Pune / Remote', type: 'Full-Time / Part-Time', experience: '3-8 Years', desc: 'Deliver high-quality BIM and AEC software training to corporate teams.', responsibilities: ['Conduct classroom and online BIM training', 'Develop training materials and assessments', 'Customise training content for clients'], requirements: ['Expert-level proficiency in Revit, AutoCAD, Navisworks', 'Prior training or teaching experience preferred'] },
    { id: 6, title: 'Site Engineer - Construction', dept: 'Construction Services', location: 'Pune / Mumbai / Nashik', type: 'Full-Time', experience: '1-4 Years', desc: 'Supervise on-site construction activities for residential and commercial projects.', responsibilities: ['Supervise day-to-day construction activities', 'Ensure work is executed as per approved drawings', 'Maintain site records and daily reports'], requirements: ['B.E./Diploma in Civil Engineering', 'Hands-on site supervision experience'] },
  ],
  contact: {
    office: 'Venkatdhari Heights, 2nd floor Parapanna Agrahara Main Road, Opposite Sai Poorna Premier Apartment, Kudlu, Bangalore - 560068.',
    phone1: '+91 90367 44017',
    phone2: '+91 7259921111',
    phone3: '+91 7259222888',
    email1: 'info@e-construct.org',
    email2: 'info@e-construct.org',
    hours: 'Mon – Fri: 9:00 AM – 7:00 PM',
    facebook: 'https://www.facebook.com/econstruct.in',
    linkedin: 'https://www.linkedin.com/company/econstruct-design-and-build-pvt-ltd/',
    instagram: 'https://www.instagram.com/econstruct.in',
    youtube: 'https://www.youtube.com/@Econstructofficial',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.6499!3d12.8999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b0b0b0b0b0b%3A0x0!2sVenkatdhari+Heights%2C+Kudlu%2C+Bangalore!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },
  companyStats: {
    yearsOfExperience: '25+',
    projectsDelivered: '650+',
    happyClients: '500+',
    openPositions: '6+',
    certification: 'ISO 9001:2015',
  },
  heroSection: {
    headline: 'Building the Future,\nOne Structure at a Time',
    subheadline: 'Leading architecture, engineering & construction firm specializing in BIM, structural design, and project management.',
    ctaText: 'Explore Our Services',
    ctaLink: '/services',
  },
  aboutSection: {
    tagline: 'About E-Construct',
    headline: 'Pioneering Construction Excellence Since 1999',
    description: 'Econstruct Design and Build Pvt. Ltd. is a leading architecture, engineering, and construction (AEC) firm specializing in Building Information Modelling (BIM), architectural consultancy, and construction management. We deliver innovative, sustainable, and cost-effective solutions for residential, commercial, and infrastructure projects across India.',
    vision: 'To be India\'s most trusted and innovative AEC firm, delivering world-class construction solutions.',
    mission: 'To transform the built environment through cutting-edge technology, expert engineering, and client-centric service delivery.',
  },
  chatbotKnowledge: `You are Isha, a friendly and professional AI assistant for Econstruct Design and Build Pvt. Ltd.
Answer questions about the company, its services, projects, and team based on the information below.
If you don't know the answer, politely say so and suggest the user contact the team directly.
Keep responses concise and helpful.

--- COMPANY OVERVIEW ---
Econstruct Design and Build Pvt. Ltd. is a leading architecture, engineering, and construction (AEC) firm
specializing in Building Information Modelling (BIM), architectural consultancy, and construction management.

--- SERVICES ---
1. BIM Technology Consultancy – Full BIM implementation, coordination, and clash detection services.
2. Architectural Consultancy – Concept design, schematic design, detailed design, and execution drawings.
3. Corporate On-Job Training – BIM and AEC software training for corporate teams.
4. Building Information Modelling – End-to-end BIM services for residential, commercial, and infrastructure projects.

--- PROJECTS ---
Econstruct has delivered projects across residential, commercial, hospitality, and infrastructure sectors.
Notable project types include high-rise buildings, villas, hospitals, and industrial facilities.

--- CONTACT ---
Address: Venkatdhari Heights, 2nd floor Parapanna Agrahara Main Road, Opposite Sai Poorna Premier Apartment, Kudlu, Bangalore - 560068.
Email: info@e-construct.org
Phone: +91 90367 44017 | +91 7259921111 | +91 7259222888
Office Hours: Mon – Fri, 9:00 AM – 7:00 PM

--- TEAM ---
The company is led by experienced architects and BIM specialists with decades of combined industry experience.`,
  chatbotConfig: {
    apiKey: '',
    model: 'gpt-4o-mini',
  },
  faqs: [
    { id: 1, q: 'How quickly can I expect a response?', a: 'Our team typically responds within 24 business hours. For urgent matters, please call us directly.' },
    { id: 2, q: 'Do you offer free consultations?', a: 'Yes, we offer a complimentary initial consultation to understand your project requirements and provide a preliminary assessment.' },
    { id: 3, q: 'Which cities do you operate in?', a: 'Our headquarters is in Kudlu, Bangalore. We serve clients across India and also offer remote consultancy services.' },
    { id: 4, q: 'What information should I have ready before contacting you?', a: 'A brief description of your project, approximate budget range, preferred timeline, and the type of service you need will help us assist you faster.' },
  ],
  testimonials: [
    { id: 1, name: 'Rajesh Kumar', role: 'Real Estate Developer', rating: 5, text: 'E-Construct delivered our BIM project on time and within budget. Exceptional quality and professionalism.' },
    { id: 2, name: 'Priya Sharma', role: 'Architect', rating: 5, text: 'Their structural consultancy team is top-notch. They resolved complex design challenges with ease.' },
    { id: 3, name: 'Amit Patel', role: 'Construction Manager', rating: 5, text: 'The corporate training program transformed our team\'s BIM capabilities. Highly recommended.' },
  ],
  heroContent: {
    tagline: 'High-Rise & Structural Engineering Consultancy',
    headline: 'We Build Your Dreams',
    description: 'Pioneering structural consultancy for iconic high-rise developments up to G+62 in India and 81 stories globally — delivering world-class Structural Design, Advanced BIM, and Project Management (PMC).',
    primaryBtnText: 'Get Free Consultation',
    secondaryBtnText: 'Explore Projects',
  },
  ctaSection: {
    headline: 'Got A Project?',
    subheadline: 'Small Or Big, We Design For All!',
    description: 'At Econstruct, we promise to deliver industry-leading designs. Whether it\'s a small home or a large project, we create something exceptional for you.',
    btnText: 'Get In Touch',
  },
  footerContent: {
    logoUrl: '/logo.webp',
    companyDesc: 'India\'s leading Corporate Training & Consultancy firm. We help engineering students and professionals become industry-ready and provide world-class structural design services.',
    newsletterTitle: 'Subscribe to our Newsletter',
    newsletterSubtitle: 'Join for Engineering updates and industry insights.',
    copyrightName: 'E-CONSTRUCT Design & Build Pvt Ltd',
    designedBy: 'Nexty.tech',
    serviceLinks: [
      { name: 'Civil Engineering & Structural Consultancy', path: '/services/structural-consultancy' },
      { name: 'Project Management (PMC)', path: '/services' },
      { name: 'Pre-Engineered Buildings (PEB)', path: '/services' },
      { name: 'Corporate Training', path: '/careers' },
      { name: 'Software Mastery (STAAD.Pro, ETABS)', path: '/services' },
      { name: 'BIM Implementation', path: '/services/bim-consultancy' },
    ],
    usefulLinks: [
      { name: 'About Company', path: '/about' },
      { name: 'Success Stories', path: '/projects' },
      { name: 'Ongoing Batches', path: '/services' },
      { name: 'Job Portal', path: '/careers' },
      { name: 'Privacy Policy', path: '/contact' },
      { name: 'Terms & Conditions', path: '/contact' },
    ],
  },
  aboutContent: {
    tagline: 'Our Story',
    headline: 'EConstruct Design and Building Pvt. Ltd.',
    paragraph1: 'ECONSTRUCT is a premier Indian consultancy and contracting firm dedicated to redefining residential and commercial spaces. With over 25+ years of experience in Civil, Architectural, Structural, and Contract Management services, we have built strong relationships with over 500 happy clients and successfully completed more than 650 projects.',
    paragraph2: 'Operating with global benchmarks of transparency, reliability, and sustainability, we promise to give you the best in the industry — whether you want to build a small house or a large apartment complex.',
    yearsLabel: '25+',
    yearsSubLabel: 'Years of Excellence',
    image1: '/i1.jpeg',
    image2: '/i2.jpeg',
    featuresList: [
      'Structural Design & Audit',
      'Project Management (PMC)',
      'Corporate Technical Training',
      'Quality Assurance Solutions',
      'Innovative Construction Tech',
      'On-Time Project Delivery',
    ],
    whyUsItems: [
      { title: 'Seamless Coordination', desc: 'Smooth communication between all project stages under one roof.' },
      { title: 'Faster Decision-Making', desc: 'Quick approvals with a single responsible team.' },
      { title: 'Reduced Errors', desc: 'Better coordination minimises design and site mistakes.' },
      { title: 'Design-to-Execution Clarity', desc: 'No confusion between drawings and on-site execution.' },
      { title: 'Optimised Resource Use', desc: 'Efficient use of materials, labour, and time.' },
      { title: 'Transparency', desc: 'Clear communication on cost, timeline, and progress.' },
      { title: 'Customized Solutions', desc: 'Designs tailored to your needs and budget.' },
      { title: 'Higher Efficiency', desc: 'Streamlined workflow improves overall productivity.' },
      { title: 'Risk Reduction', desc: 'Early-stage planning avoids future complications.' },
      { title: 'Quality Control at Every Stage', desc: 'Continuous monitoring ensures standards.' },
      { title: 'Better Project Tracking', desc: 'Easy monitoring of progress and milestones.' },
      { title: 'Professional Expertise', desc: 'Access to experienced designers and engineers.' },
      { title: 'On-Time Delivery', desc: 'Better planning ensures timely completion.' },
      { title: 'Value Engineering', desc: 'Smart design decisions to save cost without compromising quality.' },
      { title: 'Sustainability & Compliance', desc: 'Eco-friendly engineering designed for resilience, safety, and global standards.' },
    ],
  },
  aboutPageContent: {
    mission: 'To deliver world-class civil, architectural, structural, and contract management services that transform spaces and exceed client expectations — on time and within budget.',
    vision: 'To be India\'s most trusted construction consultancy, setting new benchmarks in quality, innovation, and sustainability across residential and commercial projects.',
    values: 'Transparency, reliability, and sustainability are at the core of everything we do. We build lasting relationships alongside lasting structures.',
    founderNarrativePara1: 'ECONSTRUCT Design & Build Pvt Ltd is a leading consultancy and contracting company in India that has executed construction work for some of the most significant projects in the country.',
    founderNarrativePara2: 'We believe in exceeding clients\' expectations by operating at par with global benchmarks for transparency, reliability, and integrity.',
    founderNarrativePara3: 'Our clients value our allegiance to quality, timely deliveries, superior customer service, and the experience of engaging in business with a highly qualified and experienced management.',
    processSteps: [
      { id: 1, step: '01', title: 'Planning & Requirements', desc: 'The first and most important step — understanding your project\'s requirements and expectations. We determine the overall project vision, goals, scope, features, purpose, cost, and functionality.' },
      { id: 2, step: '02', title: 'Schematic Design', desc: 'We create a series of rough sketches and drawings that show the basic ideas of the concept phase. Initial research on local compliance and regulations is completed at this stage.' },
      { id: 3, step: '03', title: 'Development & Execution', desc: 'We collect results from the schematic design phase and take them further — finalising the design and specifying items such as materials, finishes, and construction methods.' },
    ],
    certifications: [
      { id: 1, img: '/ct1.png', label: 'ISO Certification' },
      { id: 2, img: '/ct2.png', label: 'Skill India Certification' },
      { id: 3, img: '/ct3.png', label: 'MSME Certification' },
    ],
    visionCards: [
      { id: 1, title: 'Innovative Designs & Services', desc: 'To strengthen our position as a leading engineering consultancy & contracting company.' },
      { id: 2, title: 'Cutting-Edge Technology', desc: 'To research and develop sustainable eco-friendly construction products and solutions.' },
      { id: 3, title: 'World-Class Civil Engineers', desc: 'Provide mentorship to produce highly employable civil engineering professionals.' },
      { id: 4, title: 'Revolutionise Education', desc: 'Progressive education systems that redefine how engineering talent is developed.' },
    ],
    whyUsItems: [
      { id: 1, title: 'Seamless Coordination', desc: 'Smooth communication between all project stages under one roof.' },
      { id: 2, title: 'Faster Decision-Making', desc: 'Quick approvals with a single responsible team.' },
      { id: 3, title: 'Reduced Errors', desc: 'Better coordination minimises design and site mistakes.' },
      { id: 4, title: 'Design-to-Execution Clarity', desc: 'No confusion between drawings and on-site execution.' },
      { id: 5, title: 'Optimised Resource Use', desc: 'Efficient use of materials, labour, and time.' },
      { id: 6, title: 'Quality at Every Stage', desc: 'Continuous monitoring ensures the highest standards throughout.' },
    ],
  },
  flipbooks: [
    { id: 1, title: 'Hospitality Portfolio', pdfUrl: '/pdfs/Econstruct Hospitality Website Portfolio.pdf' },
    { id: 2, title: 'Residential Portfolio', pdfUrl: '/pdfs/econstruct_bim.pdf' },
    { id: 3, title: 'Commercial Portfolio', pdfUrl: '/pdfs/econstruct_tushar.pdf' },
    { id: 4, title: 'Industrial Portfolio', pdfUrl: '/pdfs/econ_presentation.pdf' },
    { id: 5, title: 'Infrastructure Portfolio', pdfUrl: '/pdfs/PBD_compressed.pdf' },
    { id: 6, title: 'Corporate Training Portfolio', pdfUrl: '/pdfs/Employee Development Program for Top MNCs.pdf' },
  ],
  trustedPartners: [
    { id: 1, name: 'L&T', url: '/part1.jpg' },
    { id: 2, name: 'Tata Projects', url: '/part2.jpg' },
    { id: 3, name: 'UltraTech', url: '/part3.jpg' },
    { id: 4, name: 'Reliance', url: '/part4.jpg' },
    { id: 5, name: 'Ambuja', url: '/part5.jpg' },
    { id: 6, name: 'Shapoorji', url: '/part6.png' },
    { id: 7, name: 'Partner 7', url: '/part7.avif' },
  ],
  projectsPageContent: {
    heroTitle: 'Our Projects',
    heroSubtitle: 'Delivering excellence across residential, commercial, and infrastructure sectors — built on precision, innovation, and trust.',
    ctaHeadline: 'Have a Project in Mind?',
    ctaSubtitle: 'Let\'s bring your vision to life. Our team of experts is ready to deliver exceptional results — on time and within budget.',
    projectsExtended: [
      {
        id: 1,
        title: '9 Emperio (G+35)',
        category: 'Residential',
        location: 'Raghunathpur, Bhubaneswar, Odisha',
        year: '2026',
        description: 'A landmark G+35 residential skyscraper project located at Raghunathpur, Nandankanan Road, Patia, Bhubaneswar. Total area: 2290sq.m / 24649.331sq.ft.',
        image: '/projects/emp_2.png',
        images: ['/projects/emp_2.png', '/projects/emp_1.png', '/projects/emp_3.png', '/projects/emp_4.png', '/projects/emp_5.png', '/projects/emp_6.png']
      },
      {
        id: 2,
        title: 'Ashoak Mall, Jalna (2B+G+8)',
        category: 'Commercial',
        location: 'Jalna, Maharashtra',
        year: '2026',
        description: 'Ashoak Mall is a modern, premium commercial development in Jalna, designed to redefine shopping and business experience in the city. Bringing together retail, food, entertainment, and lifestyle under one roof, this project is planned to create a high-footfall commercial hub with modern architecture and business-focused planning.',
        image: '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.41 PM.jpeg',
        images: [
          '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.41 PM.jpeg',
          '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.41 PM (1).jpeg',
          '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.42 PM.jpeg',
          '/ashok mall/WhatsApp Image 2026-08-14 at 3.44.42 PM (1).jpeg',
          '/ashok mall/WhatsApp Image 2026-08-14 at 3.46.02 PM.jpeg'
        ]
      },
      {
        id: 3,
        title: 'GRK Africa Project',
        category: 'Infrastructure',
        location: 'Africa',
        year: '2026',
        description: 'Significant infrastructure development project in Africa, showcasing E-Construct\'s international engineering and project management capabilities.',
        image: '/projects/grk_1.jpeg',
        images: ['/projects/grk_1.jpeg', '/projects/grk_2.jpeg', '/projects/grk_3.jpeg']
      },
      {
        id: 4,
        title: '9 Boulevard (G+35)',
        category: 'Residential',
        location: 'Raghunathpur, Bhubaneswar, Odisha',
        year: '2026',
        description: 'Elite G+35 residential development at Raghunathpur, near HP Petrol Pump, Nandankanan Road, Patia, Bhubaneswar. Total area: 6137sq.m / 66058.0543sq.ft.',
        image: '/projects/blv_8.png',
        images: ['/projects/blv_8.png', '/projects/blv_1.png', '/projects/blv_2.png', '/projects/blv_3.png', '/projects/blv_4.png', '/projects/blv_5.png', '/projects/blv_6.png', '/projects/blv_7.png']
      },
      {
        id: 5,
        title: 'Group Housing Development G+4',
        category: 'Residential',
        location: 'Integrated Arch, Structural & MEP',
        year: '2026',
        description: 'G+4 residential towers (Studio & 2BHK) and G+1 canteen–auditorium block with a total built-up area of ~1,14,700 SFT, designed as an RCC framed structure (M20/M25) with AAC blockwork and 10 ft floor-to-floor height. Scope includes end-to-end construction with integrated architectural, structural, and MEP services—featuring vitrified/granite flooring, UPVC windows, teak main doors, FRLS electrical systems, CPVC plumbing, and waterproofing. Executed under IS code compliance with full QA/QC, site supervision, and fast-track delivery within ~6 months.',
        image: '/projects/gh_1.png',
        images: ['/projects/gh_1.png', '/projects/gh_2.png', '/projects/gh_3.png']
      },
      { id: 6, title: 'KALPATARU Park Riviera', category: 'Residential', location: 'Panvel, Navi Mumbai', year: '2023', description: 'A premium residential township featuring modern amenities, sustainable design, and world-class BIM coordination.', image: '/prj1.jpg', images: ['/prj1.jpg'] },
      { id: 7, title: 'Sonali Residential', category: 'Residential', location: 'Pune, Maharashtra', year: '2022', description: 'Contemporary residential complex with integrated structural design and architectural consultancy services.', image: '/prj2.jpg', images: ['/prj2.jpg'] },
      { id: 8, title: 'Goregaon Mulund Link Road (GMLR)', category: 'Infrastructure', location: 'Mumbai, India', year: '2024', description: 'Major urban infrastructure project connecting key corridors with advanced project management and BIM implementation.', image: '/prj3.webp', images: ['/prj3.webp'] },
      { id: 9, title: 'Luxury Villa — Lonavala', category: 'Residential', location: 'Lonavala, Maharashtra', year: '2023', description: 'End-to-end design and build of a luxury hillside villa with bespoke interiors and structural engineering.', image: '/p2.jpg', images: ['/p2.jpg'] },
      { id: 10, title: 'Commercial Complex — Pune', category: 'Commercial', location: 'Pune, Maharashtra', year: '2022', description: 'Multi-storey commercial development with full BIM coordination, clash detection, and construction management.', image: '/p1.jpg', images: ['/p1.jpg'] },
    ],
  },
  serviceDetailsContent: {
    heroTitle: 'Construction Services',
    heroSubtitle: 'Whether it\'s a small residential project or a mega G+81 building, we offer custom solutions based on your needs.',
    aboutHeadline: 'Let us build your dream home.',
    aboutDesc: 'We are a leading consultancy and contracting company in India that has executed construction work for some of the most significant projects in the country.',
    stat1Value: '250+',
    stat1Label: 'Projects Completed',
    stat2Value: '22',
    stat2Label: 'Years Experience',
    constructionServices: [
      { id: 1, title: 'Residential Construction', desc: 'Want to build your dream home? We have executed over 200+ residential projects. From planning to execution we take care of all construction needs.' },
      { id: 2, title: 'Commercial Construction', desc: 'From Multi unit apartments, individual commercial complexes to high rise mega structures our team is well equipped to manage your construction needs.' },
      { id: 3, title: 'Villa Construction', desc: 'Individual villa constitution services with premium designs, landscaping, interior and exteriors suited to reflect your personality.' },
      { id: 4, title: 'Factories & Industries', desc: 'Steel PEB structures that are engineered for faster and durable deployment. Experts in Industrial warehouses, small manufacturing Buildings & storage units.' },
      { id: 5, title: 'Road Construction', desc: 'Asphalt roads, CC roads, pavements and smart footpaths - We provide end to end construction services with planning, estimate and supervision of your project.' },
    ],
    reviews: [
      { id: 1, name: 'Sanjay Sharma', role: 'Business Owner', text: 'E-Construct delivered our commercial building exactly on schedule without compromising an ounce of quality.', initial: 'S' },
      { id: 2, name: 'Priya Desai', role: 'Homeowner', text: 'Building our dream villa with them was a phenomenal experience. From premium designs to seamless execution, they truly care about their clients.', initial: 'P' },
      { id: 3, name: 'Rajeev Menon', role: 'Project Director', text: 'Their expertise in road and pavement construction is unmatched. They handled everything transparently, on-time, and within our allocated budget.', initial: 'R' },
      { id: 4, name: 'Amit Gupta', role: 'Industrialist', text: 'We hired E-Construct for a massive industrial PEB structure. The durability and fast deployment completely exceeded our expectations!', initial: 'A' },
      { id: 5, name: 'Neha Verma', role: 'Property Developer', text: 'A truly professional contracting team! From architectural planning to the final concrete pours, their supervision is highly commendable.', initial: 'N' },
    ],
  },
  bimConsultancyContent: {
    heroTitle: 'BIM Consultancy',
    heroSubtitle: 'Advanced Building Information Modelling solutions from concept to completion.',
    impactMetrics: [
      { id: 1, value: '500+', label: 'Projects Completed' },
      { id: 2, value: '50M+', label: 'Sq. Ft Modeled' },
      { id: 3, value: '98%', label: 'Client Satisfaction' },
      { id: 4, value: '20+', label: 'Years of Experience' },
    ],
    sectors: [
      { id: 1, title: 'Commercial', desc: 'Office buildings, retail centers, hotels, and mixed-use developments with complex systems integration and space optimization.' },
      { id: 2, title: 'Residential', desc: 'Single-family homes, multi-family complexes, and high-rise residential buildings with optimized space planning and MEP coordination.' },
      { id: 3, title: 'Industrial', desc: 'Manufacturing facilities, warehouses, and distribution centers with optimized workflows and equipment integration.' },
      { id: 4, title: 'Hospital', desc: 'Healthcare facilities, educational buildings, and government structures with complex regulatory requirements and specialized systems.' },
      { id: 5, title: 'Infrastructure', desc: 'Bridges, highways, tunnels, and transportation hubs with complex structural systems and phased construction planning.' },
      { id: 6, title: 'Renovation / Retrofit', desc: 'Building renovations, historic preservation, and adaptive reuse projects with existing conditions modeling and phased implementation.' },
    ],
    dimensions: [
      { id: 1, dimId: '1D & 2D', title: '1D & 2D Plans', desc: 'Comprehensive documentation and traditional 2D plans enhanced with BIM data for better project understanding.' },
      { id: 2, dimId: '3D', title: '3D BIM Modeling', desc: 'Detailed 3D models with rich data that enable visualization, coordination, and analysis of building components.' },
      { id: 3, dimId: '4D', title: '4D Time Planning', desc: 'Integrate construction schedules with 3D models to visualize and optimize the construction sequence over time.' },
      { id: 4, dimId: '5D', title: '5D Cost Analysis', desc: 'Link cost data to BIM elements for accurate cost estimation, budgeting, and financial forecasting.' },
      { id: 5, dimId: '6D', title: '6D Sustainability', desc: 'Analyze energy performance and environmental impact to create more sustainable building designs.' },
      { id: 6, dimId: '7D', title: '7D Facility Management', desc: 'Leverage BIM data for efficient operations and maintenance throughout the building\'s lifecycle.' },
      { id: 7, dimId: '8D', title: '8D Safety', desc: 'Identify and mitigate safety hazards during design and construction phases with BIM-based safety planning.' },
      { id: 8, dimId: '9D', title: '9D Lean Construction', desc: 'Optimize workflows and eliminate waste through lean construction methodologies integrated with BIM.' },
      { id: 9, dimId: '10D', title: '10D Industrialization', desc: 'Implement modular construction and prefabrication strategies using BIM to improve efficiency and quality.' },
    ],
    implementationSteps: [
      { id: 1, step: '01', title: 'Initial Consultation', desc: 'We assess your current workflows, identify pain points, and define clear objectives for BIM implementation.' },
      { id: 2, step: '02', title: 'Planning & Setup', desc: 'We develop a tailored BIM execution plan, establish standards, and configure the necessary software and systems.' },
      { id: 3, step: '03', title: 'Implementation', desc: 'We deploy BIM solutions, provide training to your team, and ensure smooth integration with existing workflows.' },
      { id: 4, step: '04', title: 'Optimization', desc: 'We continuously monitor performance, gather feedback, and refine processes to maximize BIM benefits.' },
    ],
    testimonials: [
      { id: 1, text: 'The BIM implementation by this team has completely transformed our construction workflow. We\'ve reduced rework by 35% and improved project delivery times by nearly 3 weeks.', role: 'Project Director, Construction Group' },
      { id: 2, text: 'As an architectural firm, we needed a BIM partner who understood both design intent and construction practicality. This team delivered beyond expectations.', role: 'Principal Architect' },
      { id: 3, text: 'The 4D and 5D BIM capabilities helped us optimize schedule and save over $2.3 million.', role: 'Real Estate Developer' },
    ],
    whyChooseUs: [
      { id: 1, title: 'Expert Team', desc: 'Certified BIM professionals with 15+ years of industry experience across residential, commercial, and infrastructure projects.' },
      { id: 2, title: 'Advanced Technology', desc: 'Latest BIM software & cloud tools including Revit, Navisworks, BIM 360, and ACC for efficient project delivery.' },
      { id: 3, title: 'Dedicated Support', desc: 'Fast, reliable communication with personalized consultation and expert guidance at every stage.' },
    ],
    howToGetStarted: [
      { id: 1, title: 'Fill the Form', desc: 'Complete our quick inquiry form with your project details and requirements.' },
      { id: 2, title: 'Consultation Call', desc: 'Schedule a free 30-minute call with our BIM specialists to discuss your needs.' },
      { id: 3, title: 'Personalized Plan', desc: 'Receive a customized BIM implementation plan tailored to your project goals.' },
      { id: 4, title: 'Get Started', desc: 'Begin your BIM journey with our expert team guiding you every step of the way.' },
    ],
  },
  structuralConsultancyContent: {
    heroTitle: 'Structural Consultancy',
    heroSubtitle: 'End-to-End Structural Engineering Solutions from Concept to Construction',
    services: [
      { id: 1, title: 'Residential Structures', desc: 'Design of villas, apartments, and independent homes with a focus on stability, economy, and local building codes.' },
      { id: 2, title: 'Commercial Buildings', desc: 'Structural design for offices, malls, and high-rises including load calculations, wind/seismic analysis, and value engineering.' },
      { id: 3, title: 'Industrial Facilities', desc: 'Design of factories, warehouses, and production plants ensuring durability and load-bearing efficiency under operational stress.' },
      { id: 4, title: 'Infrastructure Projects', desc: 'Structural engineering for bridges, culverts, water tanks, and retaining walls with detailed analysis and optimization.' },
      { id: 5, title: 'Structural Proof Checking', desc: 'Third-party review and validation of structural designs to ensure safety, compliance, and adherence to IS codes.' },
    ],
    whyChooseUs: [
      { id: 1, title: '₹2000+ Cr Worth of Projects', desc: 'Managing high-value projects with precision and expertise.' },
      { id: 2, title: '81+ Storey Structures in UAE & Asia', desc: 'Designing high-rise buildings that define urban skylines.' },
      { id: 3, title: 'RCC, Steel, Composite Structures', desc: 'Versatile expertise across all structural material types.' },
      { id: 4, title: 'Seismic & Wind-Tunnel Tested Designs', desc: 'Ensuring structures withstand extreme environmental conditions.' },
      { id: 5, title: 'Iconic Urban Landmarks', desc: 'Creating distinctive structures across India and abroad.' },
      { id: 6, title: 'International Code Compliance', desc: 'Meeting global standards for safety and quality.' },
    ],
    stats: [
      { id: 1, value: '1,000+', label: 'Projects Completed' },
      { id: 2, value: '20+', label: 'Countries Represented' },
      { id: 3, value: '50+', label: 'Active Partnerships' },
      { id: 4, value: '$500M+', label: 'Partnership Value' },
    ],
    testimonials: [
      { id: 1, name: 'Sadasivam R K', review: 'I got my house designed and constructed from Econstruct team. It\'s a G+3 duplex house. They gave me modern look yet budgeted house designs.' },
      { id: 2, name: 'Siddhi Jaa', review: 'I hired Econstruct services to design my farm house. They have done a fantastic job. I finally have my Dream Sweet farm home.' },
      { id: 3, name: 'RANGASWAMY R', review: 'Econstruct and Design Pvt Ltd includes Best Professionals and Best Structural Designers. Design Perfectly with Safety and Economy.' },
      { id: 4, name: 'Pradeep kumar Pal', review: 'We hired Econstruct review of Structural Dwgs and their team has always supported.' },
      { id: 5, name: 'Saurab Kumar', review: 'Econstruct\'s BIM services are top-notch! Their attention to detail and flawless execution have transformed our project efficiency. Highly recommend!' },
      { id: 6, name: 'Suhas K A', review: 'They are the best! I highly recommend anyone when it comes to designing and building your dream homes.' },
      { id: 7, name: 'Rahul Baghel', review: 'E Construct Design & Build Pvt Ltd gives best field experience in structural engineering. Also the trainers at E-construct provide full professional training & mentorship.' },
    ],
    faqs: [
      { id: 1, question: 'What services do you offer?', answer: 'We offer comprehensive structural consultancy, including design and engineering for apartments, commercial buildings, bridges, steel structures, sustainable buildings, and more.' },
      { id: 2, question: 'How long does the consultation process take?', answer: 'The consultation timeframe varies based on project complexity, typically ranging from a few days to several weeks.' },
      { id: 3, question: 'What makes your structures sustainable?', answer: 'Our sustainable structures incorporate eco-friendly materials, energy-efficient designs, and technologies that minimize environmental impact.' },
      { id: 4, question: 'Do you offer maintenance services for structures?', answer: 'Yes, we provide ongoing maintenance consultations post-construction to ensure long-term performance.' },
      { id: 5, question: 'Can you handle large-scale projects?', answer: 'Absolutely, we have extensive experience in managing diverse project sizes, ensuring the capability to handle both small and large-scale developments.' },
    ],
  },
};

// ─── CONTEXT ──────────────────────────────────────────────────────────────────

const AdminContext = createContext(null);

const STORAGE_KEY = 'econstruct_admin_data';
const DATA_VERSION = 26; // bump this when defaults change to force a migration

export const AdminProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);

        // Ensure default blogs (like Green Infrastructure) are merged if missing
        let loadedBlogs = parsed._version >= DATA_VERSION ? (parsed.blogs || DEFAULT_DATA.blogs) : DEFAULT_DATA.blogs;
        if (Array.isArray(loadedBlogs)) {
          DEFAULT_DATA.blogs.forEach(db => {
            if (!loadedBlogs.some(b => b.id === db.id || b.slug === db.slug)) {
              loadedBlogs = [db, ...loadedBlogs];
            }
          });
        }

        // Clean flipbooks to remove Green Infrastructure from homepage flipbook showcase
        let loadedFlipbooks = parsed._version >= DATA_VERSION ? (parsed.flipbooks || DEFAULT_DATA.flipbooks) : DEFAULT_DATA.flipbooks;
        if (Array.isArray(loadedFlipbooks)) {
          loadedFlipbooks = loadedFlipbooks.filter(f => !f.pdfUrl?.includes('ECONSTRUCT_Green_Infrastructure'));
        }

        // Always deep-merge nested content objects so new keys from defaults are never lost
        const merged = {
          ...DEFAULT_DATA,
          ...parsed,
          projects: parsed._version >= DATA_VERSION ? (parsed.projects || DEFAULT_DATA.projects) : DEFAULT_DATA.projects,
          services: parsed._version >= DATA_VERSION ? (parsed.services || DEFAULT_DATA.services) : DEFAULT_DATA.services,
          blogs: loadedBlogs,
          team: parsed._version >= DATA_VERSION ? (parsed.team || DEFAULT_DATA.team) : DEFAULT_DATA.team,
          careers: parsed._version >= DATA_VERSION ? (parsed.careers || DEFAULT_DATA.careers) : DEFAULT_DATA.careers,
          flipbooks: loadedFlipbooks,
          trustedPartners: parsed._version >= DATA_VERSION ? (parsed.trustedPartners || DEFAULT_DATA.trustedPartners) : DEFAULT_DATA.trustedPartners,
          // Deep-merge every nested object so new keys are always present
          footerContent: { ...DEFAULT_DATA.footerContent, ...(parsed.footerContent || {}) },
          bimConsultancyContent: { ...DEFAULT_DATA.bimConsultancyContent, ...(parsed.bimConsultancyContent || {}) },
          structuralConsultancyContent: { ...DEFAULT_DATA.structuralConsultancyContent, ...(parsed.structuralConsultancyContent || {}) },
          serviceDetailsContent: { ...DEFAULT_DATA.serviceDetailsContent, ...(parsed.serviceDetailsContent || {}) },
          projectsPageContent: { ...DEFAULT_DATA.projectsPageContent, ...(parsed.projectsPageContent || {}) },
          aboutContent: parsed._version >= DATA_VERSION ? { ...DEFAULT_DATA.aboutContent, ...(parsed.aboutContent || {}) } : DEFAULT_DATA.aboutContent,
          aboutPageContent: { ...DEFAULT_DATA.aboutPageContent, ...(parsed.aboutPageContent || {}) },
          chatbotConfig: { ...DEFAULT_DATA.chatbotConfig, ...(parsed.chatbotConfig || {}) },
          contact: { ...DEFAULT_DATA.contact, ...(parsed._version >= DATA_VERSION ? (parsed.contact || {}) : {}) },
          heroContent: parsed._version >= DATA_VERSION ? { ...DEFAULT_DATA.heroContent, ...(parsed.heroContent || {}) } : DEFAULT_DATA.heroContent,
          _version: DATA_VERSION,
        };
        return merged;
      }
    } catch (e) {
      console.warn('Failed to load admin data from localStorage', e);
    }
    return { ...DEFAULT_DATA, _version: DATA_VERSION };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Failed to save admin data to localStorage', e);
    }
  }, [data]);

  const update = (section, value) => {
    setData(prev => ({ ...prev, [section]: value }));
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(DEFAULT_DATA);
  };

  return (
    <AdminContext.Provider value={{ data, update, resetToDefaults, DEFAULT_DATA }}>
      {children}
    </AdminContext.Provider>
  );
};

const defaultContextValue = {
  data: DEFAULT_DATA,
  update: () => {},
  resetToDefaults: () => {},
  DEFAULT_DATA,
};

export const useAdmin = () => {
  const ctx = useContext(AdminContext);
  return ctx || defaultContextValue;
};

export default AdminContext;
