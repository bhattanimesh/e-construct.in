import React, { useState, useEffect, useRef } from 'react';
import './Home1.css';
import Flipbook from '../../components/Flipbook';
import PdfFlipbook from '../../components/PdfFlipbook';

const Home1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I am Isha, your EConstruct technical assistant. How can I help you with our civil engineering services today?", type: 'isha' }
  ]);
  const [showMoreVideos, setShowMoreVideos] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    // Scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      // Parallax logic
      const scroll = window.pageYOffset;
      const heroZoom = document.getElementById('heroZoom');
      if (heroZoom) {
        heroZoom.style.transform = `scale(${1.1 + (scroll / 5000)}) translateY(${scroll * 0.2}px)`;
      }

      document.querySelectorAll('.parallax-bg').forEach(bg => {
        const speed = parseFloat(bg.dataset.speed) || 0.1;
        bg.style.transform = `translateY(${scroll * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.classList.contains('stagger-item')) {
            const parent = entry.target.parentElement;
            if (parent) {
              const children = Array.from(parent.querySelectorAll('.stagger-item'));
              children.forEach((child, idx) => {
                child.style.transitionDelay = `${idx * 0.1}s`;
                child.classList.add('active');
              });
            }
          }
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .stagger-item').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageSubmit = (text) => {
    setMessages(prev => [...prev, { text, type: 'user' }]);
    setTimeout(() => {
      let reply = "I can help with that. Would you like the PDF syllabus via email?";
      if (text.includes("BIM")) reply = "Our BIM pipeline leverages real-time clash detection. We achieve conflict-free modeling before construction begins.";
      setMessages(prev => [...prev, { text: reply, type: 'isha' }]);
    }, 800);
  };

  return (
    <div className="home1-root">
      {/* Header */}
      <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src="/assets/logo.png" alt="E-Construct" />
        </div>
        <nav className="nav-links">
          <a href="#">ABOUT US</a>
          <div className="flex items-center gap-1 cursor-pointer">
            <a href="#">SERVICES</a>
            <span className="text-[0.6rem] text-[#fbc02d]">▼</span>
          </div>
          <a href="#">PROJECTS</a>
          <div className="flex items-center gap-1 cursor-pointer">
            <a href="#">TRAINING</a>
            <span className="text-[0.6rem] text-[#fbc02d]">▼</span>
          </div>
          <a href="#">BIM HUB</a>
          <a href="#">CAREERS</a>
          <a href="#">CONTACT</a>
        </nav>
        <div className="header-right hidden lg:flex gap-3 items-center">
            {['FB', 'LI', 'IN'].map(social => (
              <div key={social} className="border border-black/10 text-[var(--text-white)] w-9 h-9 rounded-full flex items-center justify-center font-bold text-[0.6rem] cursor-pointer transition-all hover:border-[#fbc02d] hover:text-[#fbc02d] hover:bg-black/5">
                {social}
              </div>
            ))}
        </div>
      </header>

      {/* Hero */}
      <section className="hero reveal">
        <div className="hero-bg-zoom" id="heroZoom"></div>
        <div className="hero-content">
          <h1 className="reveal-left">Integrated Excellence in<br/><span className="accent-text">Civil Engineering</span></h1>
          <div className="hero-btns">
            <a href="#" className="btn btn-filled">
              <span>Watch Firm Video</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
            <a href="#" className="btn btn-outline">
              <span>Company Profile</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
          </div>
        </div>
        <div className="hero-partners">
           <img src="https://static.wixstatic.com/media/8d2bb095-8179-4004-8b15-6d5b3840f573_ISO.png" alt="ISO" />
           <img src="https://static.wixstatic.com/media/8d2bb095-8179-4004-8b15-6d5b3840f573_SkillIndia.png" alt="Skill India" />
           <img src="https://static.wixstatic.com/media/8d2bb095-8179-4004-8b15-6d5b3840f573_MSME.png" alt="MSME" />
        </div>
      </section>

      {/* Unified Flipbook Gallery */}
      <section className="flipbook-gallery reveal bg-white py-24 border-b border-black/5 w-full px-4 text-[var(--primary-dark)]">
          <div className="container text-center mb-16">
            <span className="accent-text text-xs font-bold tracking-[0.2em] uppercase">Interactive Library</span>
            <h2 className="text-5xl text-[var(--primary-dark)] mt-2">Our Digital <span className="accent-text italic">Showcase</span></h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">Explore our portfolio, brochures, and technical guides in one interactive place.</p>
          </div>
          
          <div className="container grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-[1400px]">
             {/* Flipbook 1 */}
             <div className="flex flex-col items-center group">
                <h3 className="text-[var(--primary-dark)] text-xl mb-3 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center uppercase tracking-widest">Residential Home Construction</h3>
                <div className="flex items-center gap-3 mb-4 text-xs text-amber-500 font-bold uppercase tracking-[0.2em] bg-amber-500/5 px-4 py-2 rounded-full border border-amber-500/20 shadow-sm transition-all group-hover:bg-amber-500/10 active:scale-95">
                  <span className="animate-pulse">←</span>
                  <span>Swipe to Flip</span>
                  <span className="animate-pulse">→</span>
                </div>
                <div className="flex-1 w-full max-w-[560px] flex justify-center">
                   <PdfFlipbook 
                    width={560} 
                    height={400} 
                    pdfUrl="/pdfs/econ_presentation.pdf" 
                   />
                </div>
             </div>

             {/* Flipbook 2 */}
             <div className="flex flex-col items-center group">
                <h3 className="text-[var(--primary-dark)] text-xl mb-3 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center uppercase tracking-widest">BIM Project & Services</h3>
                <div className="flex items-center gap-3 mb-4 text-xs text-amber-500 font-bold uppercase tracking-[0.2em] bg-amber-500/5 px-4 py-2 rounded-full border border-amber-500/20 shadow-sm transition-all group-hover:bg-amber-500/10 active:scale-95">
                  <span className="animate-pulse">←</span>
                  <span>Swipe to Flip</span>
                  <span className="animate-pulse">→</span>
                </div>
                <div className="flex-1 w-full max-w-[560px] flex justify-center">
                   <PdfFlipbook 
                    width={560} 
                    height={400} 
                    pdfUrl="/pdfs/econstruct_bim.pdf" 
                   />
                </div>
             </div>

             {/* Flipbook 3 */}
             <div className="flex flex-col items-center group">
                <h3 className="text-[var(--primary-dark)] text-xl mb-3 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center uppercase tracking-widest">Tushar Dawda Associate</h3>
                <div className="flex items-center gap-3 mb-4 text-xs text-amber-500 font-bold uppercase tracking-[0.2em] bg-amber-500/5 px-4 py-2 rounded-full border border-amber-500/20 shadow-sm transition-all group-hover:bg-amber-500/10 active:scale-95">
                  <span className="animate-pulse">←</span>
                  <span>Swipe to Flip</span>
                  <span className="animate-pulse">→</span>
                </div>
                <div className="flex-1 w-full max-w-[560px] flex justify-center">
                   <PdfFlipbook 
                    width={560} 
                    height={400} 
                    pdfUrl="/pdfs/econstruct_tushar.pdf" 
                   />
                </div>
             </div>
          </div>
      </section>

      {/* Video Grid */}
      <section className="videos-section reveal py-24 bg-white border-b border-black/5 relative text-[var(--primary-dark)]">
        <div className="parallax-bg" data-speed="0.05"></div>
        <div className="container text-center mb-16">
          <span className="accent-text text-xs font-bold tracking-[0.2em] uppercase">Project Visuals</span>
          <h2 className="text-5xl text-[var(--primary-dark)] mt-2">Engineering <span className="accent-text italic">Excellence in Action</span></h2>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px]">
          {[
            'wf21iarQULs', 'tMXEJFxronI', 'N18qRFNhJCE', 
            '0tCqmgdi2TY', 'joUfKHy_vOQ', '14MI_Ycpw9s',
            'REuRZTfFJZo', 'HTvN4aNOIRQ', 'hC1dcd4tvMg'
          ].map((id, i) => (
            <div key={id} className={`video-card stagger-item ${i >= 6 && !showMoreVideos ? 'hidden' : ''}`}>
              <iframe width="100%" height="280" src={`https://www.youtube.com/embed/${id}`} className="border-none" />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button onClick={() => setShowMoreVideos(!showMoreVideos)} className="btn btn-filled min-w-[280px]">
            {showMoreVideos ? 'View Less Videos ↖' : 'Explore More Videos ↗'}
          </button>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section reveal relative py-24 bg-[var(--secondary-dark)] border-b border-black/5 overflow-hidden">
        <div className="parallax-bg" data-speed="0.08" style={{ background: 'radial-gradient(circle at left, rgba(251, 192, 45, 0.05) 0%, transparent 50%)' }}></div>
        <div className="container relative z-10 max-w-[1400px]">
          <div className="text-center mb-16">
            <span className="accent-text text-xs tracking-[0.2em] font-bold uppercase">Vision & Leadership</span>
            <h2 className="text-5xl text-[var(--primary-dark)] mt-2">The Founder's <span className="accent-text italic">Portfolio</span></h2>
          </div>
          <div className="flex flex-wrap gap-16 items-center">
             <div className="w-[320px] relative stagger-item">
                <div className="absolute top-4 -left-4 w-full h-full border-2 border-[#fbc02d] rounded-2xl z-0"></div>
                <img src="/assets/founder.webp" alt="Founder" className="w-full rounded-2xl relative z-10 shadow-2xl object-cover" />
             </div>
             <div className="flex-1 min-w-[350px] stagger-item">
                <h3 className="text-4xl text-[var(--primary-dark)] mb-6 font-bold leading-tight">Pioneering Excellence in Multi-Sector <span className="text-[#fbc02d]">Civil Engineering</span></h3>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">With a profound vision and years of dedicated expertise, our leadership has driven <strong>EConstruct</strong> to the forefront of various civil engineering sectors, architectural innovation, and infrastructure development.</p>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-10">The Founder's journey is defined by an unwavering commitment to quality education, mentorship, and building resilient infrastructures.</p>
                <button className="btn btn-filled">View Full Profile</button>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Bento */}
      <section className="stats-section reveal">
        <div className="container text-center mb-20 relative z-10">
          <h2 className="text-4xl text-[var(--primary-dark)] font-bold mb-3">Why Choose EConstruct?</h2>
          <p className="text-[var(--text-muted)]">Delivering excellence driven by profound expertise.</p>
        </div>
        <div className="blueprint-quadrant">
          {[
            { val: '29+', title: 'Years Legacy', desc: 'Redefining civil engineering excellence since 1997.' },
            { val: '650+', title: 'Projects Delivered', desc: 'From skyscrapers to massive infrastructure.' },
            { val: '45K+', title: 'Engineers Trained', desc: 'Bridging the industry competency gap.' },
            { val: '100%', title: 'Placement Success', desc: 'Ensuring alumni lead in global giants.' }
          ].map((stat, i) => (
            <div key={i} className="quadrant-item">
              <div className="quad-marker"></div>
              <div className="quad-val">{stat.val}</div>
              <div className="quad-content">
                <h3>{stat.title}</h3>
                <p>{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="consultancy-section reveal py-32 bg-white border-t border-black/5 text-[var(--primary-dark)]">
          <div className="container flex flex-wrap gap-20 items-start max-w-[1400px]">
              <div className="flex-1 min-w-[300px]">
                <span className="accent-text text-xs tracking-[0.2em] font-bold uppercase block mb-4">Engineering Pillars</span>
                <h2 className="text-5xl text-[var(--primary-dark)] font-medium mb-10 leading-tight">Mastering Every Facet of <br/><span className="accent-text italic">Civil Engineering</span></h2>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-12">From precision BIM modeling to the construction of luxury residential spaces, we deliver end-to-end solutions that redefine industry standards.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      'BIM Consultancy', 
                      'Structural Consultancy', 
                      'Project Management (EPMC)', 
                      'Luxury Villa Design & Build', 
                      'Residential & Commercial Construction', 
                      'Core Construction Services', 
                      'Total Quality Management'
                    ].map(service => (
                      <div key={service} className="flex items-center gap-4 text-[var(--primary-dark)] group cursor-pointer hover:translate-x-2 transition-transform">
                        <div className="w-1.5 h-1.5 bg-[#fbc02d] rounded-full"></div>
                        <span className="text-sm font-medium tracking-wide group-hover:text-[#fbc02d] transition-colors">{service}</span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="w-full lg:w-[450px] bg-slate-50 p-12 border border-black/5 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#fbc02d]/5 rounded-full blur-3xl group-hover:bg-[#fbc02d]/10 transition-all"></div>
                  <h3 className="text-22xl text-[var(--primary-dark)] mb-8 font-bold">Why Partner with Us?</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-8 mb-8 italic">"We don't just build structures; we engineer legacies through precision, transparency, and uncompromising quality."</p>
                  <ul className="space-y-6">
                    {['Expert Vetting', 'Value Engineering', 'Clash-Free Workflows'].map(item => (
                      <li key={item} className="text-[var(--primary-dark)] text-xs font-bold tracking-widest flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fbc02d" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
              </div>
          </div>
      </section>

      {/* Corporate Master Study Programs */}
      <section className="training-section reveal py-32 bg-slate-50 border-t border-black/5 overflow-hidden text-[var(--primary-dark)]">
          <div className="container text-center mb-20 stagger-item">
              <span className="accent-text text-xs tracking-[0.2em] font-bold uppercase block mb-4">Corporate Upskilling</span>
              <h2 className="text-5xl text-[var(--primary-dark)] font-medium mb-4">Master Study <span className="accent-text italic">Programs</span></h2>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">Specialized programs designed to transform engineers into industry-ready experts.</p>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                  { title: 'Master Study In Structural Engineering', desc: 'RCC, Steel, and PSC project mastery with multi-sector application.' },
                  { title: 'Master Study In Project Management With BIM Technology', desc: 'Virtual construction monitoring and cost-saving BIM decision making.' },
                  { title: 'Structures + BIM + Project Management', desc: 'Composite training in Infrastructure Modeling + BIM + Management.' },
                  { title: 'Master Study In Engineering Drawing & Drafting', desc: 'Advanced architectural and structural drafting with precision.' },
                  { title: 'Master Study In Interior Designing', desc: 'Comprehensive interior design and spatial planning workflows.' },
                  { title: 'Master Study In Project & Contract Management', desc: 'Strategic management of engineering contracts and project lifecycles.' },
                  { title: 'Master Study In Business Management', desc: 'Entrepreneurship and business scaling for engineering firms.' },
                  { title: 'Master Study In Project Management With BIM & MEP Engineering', desc: 'Integrated BIM workflow with Mechanical, Electrical, and Plumbing engineering.' }
              ].map((prog, i) => (
                <div key={i} className="program-card stagger-item min-h-[320px] flex flex-col border border-black/5 bg-white shadow-sm p-8 rounded-2xl hover:shadow-xl transition-all">
                    <span className="text-[#fbc02d] font-bold text-[0.6rem] tracking-widest bg-[#fbc02d]/10 px-2 py-1 rounded w-fit">ENROLLING NOW</span>
                    <h3 className="text-xl mt-6 mb-4 flex-1 text-[var(--primary-dark)]">{prog.title}</h3>
                    <p className="text-[var(--text-muted)] text-[0.8rem] mb-6 leading-relaxed">{prog.desc}</p>
                    <button className="btn btn-filled w-fit text-[0.6rem] py-2 px-4">Explore Syllabus ➜</button>
                </div>
              ))}
          </div>
      </section>

      {/* Footer */}
      <footer className="reveal py-32 bg-[var(--secondary-dark)] border-t border-black/5 relative overflow-hidden">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
              <div className="stagger-item">
                  <img src="/assets/logo.png" alt="E-Construct" className="h-9 mb-8" />
                  <p className="text-[var(--text-muted)] text-sm leading-8 mb-8">Engineering excellence for 29+ years. A global leader in Multi-Sector Civil Consultancy, Infrastructure Design, and BIM Workflows.</p>
              </div>
              <div className="stagger-item">
                  <h4 className="text-[var(--text-white)] text-xs font-bold tracking-widest mb-8 uppercase">Strategic Hubs</h4>
                  <ul className="flex flex-col gap-4 text-[var(--text-muted)] text-sm">
                    {['About Firm', 'Global Services', 'BIM Innovation', 'Career Hub'].map(link => <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>)}
                  </ul>
              </div>
              <div className="stagger-item">
                  <h4 className="text-[var(--text-white)] text-xs font-bold tracking-widest mb-8 uppercase">Engineering</h4>
                  <ul className="flex flex-col gap-4 text-[var(--text-muted)] text-sm">
                    {['Consultancy', 'Master Training', 'Expert Vetting', 'Real-time BIM'].map(link => <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>)}
                  </ul>
              </div>
              <div className="stagger-item">
                  <h4 className="text-[var(--text-white)] text-xs font-bold tracking-widest mb-8 uppercase">Contact Hub</h4>
                  <div className="mb-6">
                    <span className="text-[var(--text-white)] text-xs font-bold block mb-2 uppercase">MUMBAI HQ</span>
                    <p className="text-[var(--text-muted)] text-sm">Suite 401, Engineering Plaza, Kalpataru Highs, Mumbai.</p>
                  </div>
                  <div>
                    <span className="text-[#fbc02d] text-xs font-bold block mb-2 uppercase">DIRECT CONNECT</span>
                    <p className="text-[var(--text-muted)] text-sm">+91 93258 73229<br/>info@e-construct.in</p>
                  </div>
              </div>
          </div>
          <div className="container border-t border-black/5 mt-20 pt-10 flex justify-between items-center text-[#999] text-xs">
              <p>© 2026 E-CONSTRUCT Design & Build Pvt Ltd. All rights reserved.</p>
          </div>
      </footer>

      {/* Chatbot */}
      <div className={`isha-fab ${isChatOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} onClick={() => setIsChatOpen(true)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </div>

      {isChatOpen && (
        <div className="isha-window">
          <div className="isha-header">
             <div className="w-10 h-10 bg-[#fbc02d] rounded-full flex items-center justify-center font-black text-[0.7rem] text-black">ISHA</div>
             <div>
               <h4 className="text-[var(--text-white)] text-sm">Isha Assistant</h4>
               <p className="text-[var(--text-muted)] text-[0.7rem]">Online | Technical Support</p>
             </div>
             <button onClick={() => setIsChatOpen(false)} className="ml-auto text-[var(--text-white)] text-2xl font-light">×</button>
          </div>
          <div className="isha-body" ref={chatBodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble ${m.type === 'isha' ? 'bubble-isha' : 'bubble-user'}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="px-5 pb-3 flex flex-wrap gap-2">
             {['Training', 'BIM Workflow', 'Audit'].map(q => (
               <button key={q} onClick={() => handleMessageSubmit(q)} className="quick-reply">{q}</button>
             ))}
          </div>
          <div className="isha-input-area">
             <input type="text" placeholder="Type query..." className="flex-1 bg-black/5 border-none p-3 rounded-lg text-[var(--text-white)] text-sm" />
             <button className="bg-[#fbc02d] w-10 rounded-lg flex items-center justify-center">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home1;
