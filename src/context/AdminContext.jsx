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
    { id: 1, title: "KALPATARU Park Riviera", category: "Residential", location: "Panvel, Navi Mumbai", image: "/prj1.jpg" },
    { id: 2, title: "Sonali Residential", category: "Residential", location: "Pune, Maharashtra", image: "/prj2.jpg" },
    { id: 3, title: "Goregaon Mulund Link Road (GMLR)", category: "Commercial", location: "Mumbai, India", image: "/prj3.webp" },
  ],
  blogs: [
    { id: 1, title: "Transforming a Barren Pond Area", slug: "transforming-a-barren-pond-area", desc: "Transforming a Barren Pond Area into a thriving green space.", img: "/b1_new.jpg", author: "E-Construct Team", date: "2024-03-15", category: "Sustainability", tags: ["green spaces", "urban design", "sustainability"], content: "Transforming a barren pond area into a thriving green space is one of the most rewarding urban design challenges. With the right planning, engineering, and ecological sensitivity, what was once a neglected water body can become a vibrant community asset.\n\nThe process begins with a thorough site assessment — understanding the soil composition, existing drainage patterns, and the ecological potential of the area. Our team at E-Construct approaches such projects with a blend of civil engineering expertise and environmental consciousness.\n\nKey steps in the transformation include:\n\n1. **Site Clearance & Desilting** — Removing accumulated silt and debris to restore the natural depth and water-holding capacity of the pond.\n\n2. **Structural Reinforcement** — Strengthening the embankments with bio-engineering techniques such as coir matting and native plant species to prevent erosion.\n\n3. **Landscaping & Planting** — Introducing native aquatic and riparian plants that support local biodiversity while enhancing the visual appeal of the space.\n\n4. **Community Integration** — Designing pathways, seating areas, and lighting that invite the community to engage with the restored green space.\n\nThe result is not just an aesthetic improvement — it is a functional ecological asset that manages stormwater, supports wildlife, and improves the quality of life for surrounding residents.", published: true },
    { id: 2, title: "The Evolution of Modern-Day Construction", slug: "evolution-of-modern-day-construction", desc: "The Evolution of Modern-Day Construction and how technology is reshaping the industry.", img: "/b2_new.png", author: "Prof. Sandeep Pingale", date: "2024-04-10", category: "Technology", tags: ["BIM", "construction tech", "innovation"], content: "The construction industry has undergone a seismic shift over the past two decades. From hand-drawn blueprints to fully coordinated 3D BIM models, the way we design, plan, and build has been fundamentally transformed.\n\nAt the heart of this evolution is Building Information Modelling (BIM) — a digital representation of the physical and functional characteristics of a facility. BIM is not just a tool; it is a process that enables better collaboration, reduces errors, and ultimately delivers better buildings.\n\n**Key Technological Shifts:**\n\n- **3D Modelling & Visualisation** — Clients can now walk through their building before a single brick is laid, enabling informed decisions and reducing costly changes during construction.\n\n- **4D & 5D BIM** — Integrating time and cost data into the model allows project managers to simulate construction sequences and track budgets in real time.\n\n- **Prefabrication & Modular Construction** — Factory-built components reduce on-site waste, improve quality control, and dramatically cut construction timelines.\n\n- **Drones & AI** — Site monitoring using drones and AI-powered analytics is improving safety, progress tracking, and quality assurance.\n\nThe future of construction is digital, sustainable, and data-driven. At E-Construct, we are proud to be at the forefront of this transformation.", published: true },
    { id: 3, title: "Why Buildings Crack and How to Fix Them", slug: "why-buildings-crack-and-how-to-fix-them", desc: "Cracks in buildings are a common concern. Learn the causes and solutions.", img: "/b3_new.png", author: "E-Construct Team", date: "2024-05-22", category: "Structural Engineering", tags: ["cracks", "structural repair", "maintenance"], content: "Cracks in buildings are one of the most common concerns for homeowners and property managers. While some cracks are purely cosmetic, others can signal serious structural issues that require immediate attention.\n\n**Types of Cracks:**\n\n- **Hairline Cracks** — Fine surface cracks that typically appear in plaster or render. Usually caused by thermal expansion and contraction, these are generally cosmetic.\n\n- **Diagonal Cracks** — Often appear at the corners of windows and doors. These can indicate differential settlement of the foundation.\n\n- **Vertical Cracks** — May indicate foundation settlement or shrinkage of building materials.\n\n- **Horizontal Cracks** — Particularly in basement or retaining walls, these can indicate serious structural stress and require urgent professional assessment.\n\n**Common Causes:**\n\n1. Foundation settlement or movement\n2. Thermal expansion and contraction\n3. Moisture ingress and drying shrinkage\n4. Overloading of structural elements\n5. Poor construction quality or inadequate reinforcement\n\n**Repair Approaches:**\n\nThe appropriate repair method depends entirely on the cause and severity of the crack. Options range from simple epoxy injection for non-structural cracks to underpinning and structural reinforcement for foundation-related issues.\n\nAlways consult a qualified structural engineer before undertaking any crack repair work. At E-Construct, our structural audit team provides comprehensive assessments and repair recommendations.", published: true },
    { id: 4, title: "Top 10 Benefits of BIM", slug: "top-10-benefits-of-bim", desc: "Top 10 Benefits of BIM for construction projects of all scales.", img: "/b1_new.jpg", author: "E-Construct Team", date: "2024-06-05", category: "BIM", tags: ["BIM", "benefits", "construction management"], content: "Building Information Modelling (BIM) has become the gold standard for modern construction projects. Here are the top 10 benefits that make BIM indispensable:\n\n1. **Improved Collaboration** — BIM creates a single source of truth that all project stakeholders can access, reducing miscommunication and coordination errors.\n\n2. **Early Clash Detection** — Identifying conflicts between structural, architectural, and MEP systems in the model saves significant time and cost during construction.\n\n3. **Accurate Cost Estimation** — 5D BIM links cost data to model elements, enabling precise quantity take-offs and budget forecasting.\n\n4. **Better Visualisation** — Clients and stakeholders can visualise the finished building before construction begins, enabling better decision-making.\n\n5. **Reduced Rework** — Studies show BIM can reduce rework by up to 40%, directly impacting project profitability.\n\n6. **Faster Project Delivery** — Streamlined workflows and better coordination reduce construction timelines.\n\n7. **Improved Safety Planning** — 8D BIM enables virtual safety simulations and hazard identification before work begins on site.\n\n8. **Sustainable Design** — 6D BIM supports energy analysis and environmental impact assessment during the design phase.\n\n9. **Facility Management** — 7D BIM provides a rich data model that supports efficient building operations and maintenance throughout the asset lifecycle.\n\n10. **Regulatory Compliance** — BIM models can be used to verify compliance with building codes and regulations, reducing approval timelines.", published: true },
    { id: 5, title: "The Kolkata Flyover Collapse", slug: "the-kolkata-flyover-collapse", desc: "The tragic collapse of the Kolkata flyover and lessons learned.", img: "/b2_new.png", author: "Prof. Sandeep Pingale", date: "2024-07-18", category: "Structural Engineering", tags: ["infrastructure", "safety", "case study"], content: "The collapse of the Vivekananda Road flyover in Kolkata in 2016 was a tragic reminder of the critical importance of structural integrity, quality control, and rigorous inspection in infrastructure projects.\n\nThe incident, which claimed multiple lives and injured dozens, raised serious questions about construction practices, oversight mechanisms, and the accountability of all parties involved in large infrastructure projects.\n\n**Key Lessons Learned:**\n\n**1. Rigorous Quality Control is Non-Negotiable**\nThe investigation revealed lapses in quality control during construction. Every structural element — from the concrete mix to the reinforcement placement — must be subject to strict quality assurance protocols.\n\n**2. Independent Structural Audits**\nThird-party structural audits at key construction milestones are essential. An independent eye can catch issues that internal teams may overlook due to schedule pressure or familiarity bias.\n\n**3. The Role of BIM in Safety**\nModern BIM tools, particularly 8D BIM for safety planning, can identify potential failure modes during the design phase — long before construction begins.\n\n**4. Accountability and Transparency**\nClear lines of accountability must be established for every aspect of a construction project. When things go wrong, it must be possible to trace decisions back to responsible parties.\n\n**5. Regular Inspection of Existing Infrastructure**\nAging infrastructure across India requires systematic inspection and maintenance programmes. Proactive intervention is always less costly — in human and financial terms — than reactive repair after failure.\n\nAt E-Construct, structural safety is at the core of everything we do. We believe that every structure we design and build must stand as a testament to engineering excellence.", published: true },
    { id: 6, title: "Building Collapses in India", slug: "building-collapses-in-india", desc: "Discover the causes of building collapses and how to prevent them.", img: "/b3_new.png", author: "E-Construct Team", date: "2024-08-30", category: "Structural Engineering", tags: ["safety", "India", "prevention"], content: "Building collapses remain a persistent and tragic problem in India, claiming hundreds of lives each year. Understanding the root causes is the first step toward prevention.\n\n**Primary Causes of Building Collapses in India:**\n\n**1. Unauthorised Construction**\nA significant proportion of collapses involve buildings constructed without proper approvals or in violation of sanctioned plans. Unauthorised additional floors, encroachments, and deviations from approved designs are common contributing factors.\n\n**2. Poor Construction Quality**\nThe use of substandard materials — particularly low-grade cement, inadequate reinforcement, and poor-quality aggregates — significantly compromises structural integrity.\n\n**3. Lack of Structural Design**\nMany buildings, particularly in smaller towns and rural areas, are constructed without any structural design input from a qualified engineer. This is a recipe for disaster.\n\n**4. Ageing Infrastructure**\nIndia has a large stock of ageing buildings, many of which have never been structurally assessed. Deterioration of reinforcement due to corrosion, carbonation, and moisture ingress can silently undermine structural capacity over decades.\n\n**5. Natural Disasters**\nEarthquakes, floods, and cyclones expose the vulnerability of poorly designed and constructed buildings.\n\n**Prevention Strategies:**\n\n- Mandatory structural design by qualified engineers for all buildings\n- Strict enforcement of building codes and regulations\n- Regular structural audits of existing buildings, particularly those over 30 years old\n- Public awareness campaigns about the importance of quality construction\n- Stronger accountability mechanisms for builders, contractors, and approving authorities\n\nE-Construct's structural audit services are designed to identify vulnerabilities in existing buildings and provide actionable recommendations for remediation.", published: true },
    { id: 7, title: "Decline in vision for Temples of heritage", slug: "decline-in-vision-for-temples-of-heritage", desc: "Old temple architecture is a testament to the ingenuity and artistry of ancient builders.", img: "/b1_new.jpg", author: "E-Construct Team", date: "2024-09-14", category: "Architecture", tags: ["heritage", "temples", "architecture"], content: "India's ancient temples are among the most extraordinary architectural achievements in human history. Built without modern machinery, computational tools, or standardised materials, these structures have stood for centuries — a testament to the ingenuity, artistry, and deep structural understanding of their builders.\n\nYet today, many of these irreplaceable heritage structures face a dual threat: physical deterioration and a declining appreciation for the architectural traditions they represent.\n\n**The Architectural Genius of Ancient Temples:**\n\nAncient Indian temple architecture — whether the Dravidian style of the south, the Nagara style of the north, or the Vesara hybrid — reflects a sophisticated understanding of structural principles, acoustics, and environmental design.\n\nThe use of interlocking stone joints without mortar, the precise calculation of load distribution in towering gopurams, and the orientation of temples to harness natural light and ventilation all speak to an architectural intelligence that modern engineers continue to study and admire.\n\n**The Threats They Face:**\n\n- **Neglect and Deferred Maintenance** — Many temples, particularly those not under the protection of the Archaeological Survey of India, suffer from chronic neglect.\n\n- **Inappropriate Restoration** — Well-intentioned but poorly executed restoration work can cause more damage than neglect, particularly when modern materials are used inappropriately.\n\n- **Urbanisation Pressures** — Encroachment, vibration from traffic and construction, and changes in groundwater levels all threaten the structural integrity of ancient foundations.\n\n**The Way Forward:**\n\nPreserving our architectural heritage requires a combination of rigorous structural assessment, sensitive restoration using traditional materials and techniques, and a renewed cultural appreciation for what these structures represent.\n\nAt E-Construct, we believe that the lessons embedded in ancient architecture have much to teach modern engineers and designers.", published: true },
    { id: 8, title: "What's wrong with the making process of a Civil Engineer?", slug: "whats-wrong-with-civil-engineering-education", desc: "Civil Engineering is a part of engineering that deals with mathematical and scientific knowledge.", img: "/b2_new.png", author: "Prof. Sandeep Pingale", date: "2024-10-05", category: "Education", tags: ["civil engineering", "education", "training"], content: "Civil Engineering education in India faces a fundamental disconnect between what is taught in classrooms and what is required on construction sites and in design offices. This gap has serious consequences — not just for the career prospects of graduates, but for the quality and safety of the built environment.\n\n**The Core Problem:**\n\nMost civil engineering curricula are heavily weighted toward theoretical knowledge — structural mechanics, fluid dynamics, soil mechanics — with insufficient emphasis on practical application, industry-standard software, and professional skills.\n\nThe result is graduates who can solve textbook problems but struggle to read a structural drawing, operate BIM software, or manage a construction site.\n\n**Specific Gaps:**\n\n1. **Software Proficiency** — Industry demands proficiency in tools like ETABS, STAAD.Pro, Revit, and AutoCAD. Most graduates have minimal exposure to these during their degree.\n\n2. **Site Experience** — Internships and site visits are often tokenistic rather than substantive learning experiences.\n\n3. **Communication Skills** — Engineers must communicate complex technical information to clients, contractors, and regulatory authorities. This skill is rarely taught.\n\n4. **Project Management** — Understanding how to plan, schedule, and manage a construction project is essential but largely absent from most curricula.\n\n**The Solution:**\n\nAt E-Construct, our Corporate On-Job Training programmes are specifically designed to bridge this gap. We provide hands-on training in industry-standard software, real project exposure, and mentorship from experienced professionals — giving graduates the skills they need to hit the ground running.", published: true },
    { id: 9, title: "Tips to get a job as a Structural Engineer", slug: "tips-to-get-a-job-as-a-structural-engineer", desc: "As a fresher, it is always difficult as a Structural Engineer. Most companies prefer experienced candidates.", img: "/b3_new.png", author: "E-Construct Team", date: "2024-11-20", category: "Careers", tags: ["structural engineering", "jobs", "career tips"], content: "Breaking into the structural engineering job market as a fresher can feel daunting. Most job postings ask for 2-3 years of experience — a classic catch-22 for new graduates. But with the right approach, it is absolutely possible to land your first role and build a rewarding career.\n\n**1. Master the Essential Software**\n\nProficiency in ETABS, STAAD.Pro, SAFE, and AutoCAD is non-negotiable for most structural engineering roles. If your degree didn't cover these adequately, invest in professional training before you start applying.\n\n**2. Build a Portfolio**\n\nEven as a fresher, you can build a portfolio. Academic projects, personal design exercises, and training projects all count. Document your work clearly — show your design process, the software you used, and the results.\n\n**3. Get Certified**\n\nProfessional certifications in BIM, structural software, or project management demonstrate commitment and competence. They also help your CV stand out in a competitive market.\n\n**4. Network Actively**\n\nJoin professional bodies like the Institution of Engineers (India). Attend industry events, seminars, and workshops. Many jobs are filled through personal connections before they are ever advertised.\n\n**5. Target the Right Companies**\n\nDon't just apply to the largest firms. Smaller consultancies and contractors often offer better learning opportunities for freshers, with more direct exposure to real projects and senior engineers.\n\n**6. Prepare for Technical Interviews**\n\nBe ready to discuss structural concepts, design codes (IS 456, IS 800, IS 1893), and your software skills. Practice solving simple design problems under time pressure.\n\n**7. Consider Corporate Training**\n\nProgrammes like E-Construct's Corporate On-Job Training are specifically designed to make freshers job-ready. The combination of software training, real project exposure, and industry mentorship can dramatically accelerate your career start.", published: true },
  ],
  team: [
    { id: 1, name: "Prof. Sandeep Pingale", position: "Founder & Managing Director", image: "https://e-construct.in/wp-content/uploads/2024/08/Media-e1768631671611.jpeg", bio: "Visionary leader with 20+ years of experience in Civil Engineering & Project Management." },
    { id: 2, name: "Shraddha Pingale", position: "Co-Founder", image: "https://e-construct.in/wp-content/uploads/2026/01/Shraddha-Pingale-scaled-e1769494406535-2048x1296.webp", bio: "Expert in operational excellence and strategic planning at E-Construct." },
    { id: 3, name: "Mr. Jitendra Naregalkar", position: "Associate Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400", bio: "Specialist in Structural Design and BIM implementation." },
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
    office: 'Office No. 1, 2nd Floor, Civil Engineering Dept, Pune, Maharashtra, India',
    phone1: '+91 91122 34455',
    phone2: '+91 91122 34488',
    email1: 'support@e-construct.in',
    email2: 'info@e-construct.in',
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
    facebook: 'https://www.facebook.com/econstruct.in',
    linkedin: 'https://www.linkedin.com/company/econstruct',
    instagram: 'https://www.instagram.com/econstruct.in',
    youtube: 'https://www.youtube.com/@econstruct',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.01773823!2d73.72283!3d18.52043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
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
For inquiries, reach out via the contact form on the website or email the team directly.

--- TEAM ---
The company is led by experienced architects and BIM specialists with decades of combined industry experience.`,
  chatbotConfig: {
    apiKey: '',
    model: 'gpt-4o-mini',
  },
  faqs: [
    { id: 1, q: 'How quickly can I expect a response?', a: 'Our team typically responds within 24 business hours. For urgent matters, please call us directly.' },
    { id: 2, q: 'Do you offer free consultations?', a: 'Yes, we offer a complimentary initial consultation to understand your project requirements and provide a preliminary assessment.' },
    { id: 3, q: 'Which cities do you operate in?', a: 'Our headquarters is in Pune, Maharashtra. We serve clients across India and also offer remote consultancy services.' },
    { id: 4, q: 'What information should I have ready before contacting you?', a: 'A brief description of your project, approximate budget range, preferred timeline, and the type of service you need will help us assist you faster.' },
  ],
  testimonials: [
    { id: 1, name: 'Rajesh Kumar', role: 'Real Estate Developer', rating: 5, text: 'E-Construct delivered our BIM project on time and within budget. Exceptional quality and professionalism.' },
    { id: 2, name: 'Priya Sharma', role: 'Architect', rating: 5, text: 'Their structural consultancy team is top-notch. They resolved complex design challenges with ease.' },
    { id: 3, name: 'Amit Patel', role: 'Construction Manager', rating: 5, text: 'The corporate training program transformed our team\'s BIM capabilities. Highly recommended.' },
  ],
  heroContent: {
    tagline: 'Infrastructure & Engineering',
    headline: 'We Build Your Dreams',
    description: 'Delivering reliable civil engineering solutions with precision, safety, and unmatched quality since 2010.',
    primaryBtnText: 'Get Free Inquiry',
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
    { id: 1, title: 'Hospitality Portfolio', pdfUrl: '/pdfs/econstruct_bim.pdf' },
    { id: 2, title: 'Residential Portfolio', pdfUrl: '/pdfs/econstruct_bim.pdf' },
    { id: 3, title: 'Commercial Portfolio', pdfUrl: '/pdfs/econstruct_tushar.pdf' },
    { id: 4, title: 'Industrial Portfolio', pdfUrl: '/pdfs/econ_presentation.pdf' },
    { id: 5, title: 'Infrastructure Portfolio', pdfUrl: '/pdfs/PBD_compressed.pdf' },
    { id: 6, title: 'Corporate Training Portfolio', pdfUrl: '/pdfs/econstruct_tushar.pdf' },
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
      { id: 1, title: 'KALPATARU Park Riviera', category: 'Residential', location: 'Panvel, Navi Mumbai', year: '2023', description: 'A premium residential township featuring modern amenities, sustainable design, and world-class BIM coordination.', image: '/prj1.jpg' },
      { id: 2, title: 'Sonali Residential', category: 'Residential', location: 'Pune, Maharashtra', year: '2022', description: 'Contemporary residential complex with integrated structural design and architectural consultancy services.', image: '/prj2.jpg' },
      { id: 3, title: 'Goregaon Mulund Link Road (GMLR)', category: 'Infrastructure', location: 'Mumbai, India', year: '2024', description: 'Major urban infrastructure project connecting key corridors with advanced project management and BIM implementation.', image: '/prj3.webp' },
      { id: 4, title: 'Luxury Villa — Lonavala', category: 'Residential', location: 'Lonavala, Maharashtra', year: '2023', description: 'End-to-end design and build of a luxury hillside villa with bespoke interiors and structural engineering.', image: '/p2.jpg' },
      { id: 5, title: 'Commercial Complex — Pune', category: 'Commercial', location: 'Pune, Maharashtra', year: '2022', description: 'Multi-storey commercial development with full BIM coordination, clash detection, and construction management.', image: '/p1.jpg' },
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
const DATA_VERSION = 7; // bump this when defaults change to force a migration

export const AdminProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Always deep-merge nested content objects so new keys from defaults are never lost
        const merged = {
          ...DEFAULT_DATA,
          ...parsed,
          services: parsed._version >= DATA_VERSION ? (parsed.services || DEFAULT_DATA.services) : DEFAULT_DATA.services,
          blogs: parsed._version >= DATA_VERSION ? (parsed.blogs || DEFAULT_DATA.blogs) : DEFAULT_DATA.blogs,
          flipbooks: parsed._version >= DATA_VERSION ? (parsed.flipbooks || DEFAULT_DATA.flipbooks) : DEFAULT_DATA.flipbooks,
          trustedPartners: parsed._version >= DATA_VERSION ? (parsed.trustedPartners || DEFAULT_DATA.trustedPartners) : DEFAULT_DATA.trustedPartners,
          // Deep-merge every nested object so new keys are always present
          footerContent: { ...DEFAULT_DATA.footerContent, ...(parsed.footerContent || {}) },
          bimConsultancyContent: { ...DEFAULT_DATA.bimConsultancyContent, ...(parsed.bimConsultancyContent || {}) },
          structuralConsultancyContent: { ...DEFAULT_DATA.structuralConsultancyContent, ...(parsed.structuralConsultancyContent || {}) },
          serviceDetailsContent: { ...DEFAULT_DATA.serviceDetailsContent, ...(parsed.serviceDetailsContent || {}) },
          projectsPageContent: { ...DEFAULT_DATA.projectsPageContent, ...(parsed.projectsPageContent || {}) },
          aboutContent: { ...DEFAULT_DATA.aboutContent, ...(parsed.aboutContent || {}) },
          aboutPageContent: { ...DEFAULT_DATA.aboutPageContent, ...(parsed.aboutPageContent || {}) },
          chatbotConfig: { ...DEFAULT_DATA.chatbotConfig, ...(parsed.chatbotConfig || {}) },
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

export const useAdmin = () => {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider');
  return ctx;
};

export default AdminContext;
