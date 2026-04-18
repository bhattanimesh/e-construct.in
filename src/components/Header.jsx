import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Linkedin, Instagram } from 'lucide-react';
import Logo from '../assets/logo.webp'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services', hasDropdown: true },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'TRAINING', path: '/training', hasDropdown: true },
    { name: 'PAGES', path: '/bim-hub', hasDropdown: true },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={12} />, label: 'FB' },
    { icon: <Linkedin size={12} />, label: 'LI' },
    { icon: <Instagram size={12} />, label: 'IN' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-20' : 'bg-transparent h-[100px]'
    }`}>
      <div className="max-w-[1500px] mx-auto px-[5%] h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={Logo} 
            alt="E-Construct Logo" 
            className={`h-11 md:h-12 transition-all duration-300 ${isScrolled ? 'brightness-0' : 'brightness-0 invert'}`} 
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 h-full">
          {navLinks.map((link) => (
            <div key={link.name} className="flex items-center gap-1 group cursor-pointer h-full relative">
              <div className="flex items-center gap-1">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[0.7rem] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive 
                        ? 'text-yellow-500 underline underline-offset-4' 
                        : isScrolled ? 'text-gray-900 hover:text-yellow-500' : 'text-white hover:text-yellow-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
                {link.hasDropdown && (
                  <ChevronDown 
                    size={10} 
                    className={`transition-all duration-300 ${isScrolled ? 'text-gray-900' : 'text-yellow-500'} group-hover:rotate-180`} 
                  />
                )}
              </div>
              
              {/* Dropdown Menu */}
              {link.name === 'SERVICES' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-white border-t-2 border-[#fbc02d] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-xl overflow-hidden translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <h3 className="text-[#fbc02d] font-black uppercase tracking-[0.1em] text-sm mb-4 border-b border-gray-100 pb-3">
                      Civil Engineering
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'BIM Consultancy', 
                        'Structural Consultancy', 
                        'Project Management Consultancy (ePMC)', 
                        'Design & Build your Luxury Villa', 
                        'Construct your Dream Residential / Commercial Spaces', 
                        'Construction Services', 
                        'Total Quality Management'
                      ].map((service, index) => (
                        <li key={index}>
                          <Link 
                            to={service === 'BIM Consultancy' ? '/services/bim-consultancy' : '/services'} 
                            className="text-gray-600 hover:text-[#fbc02d] hover:translate-x-2 text-[0.8rem] font-bold transition-all duration-300 block leading-tight"
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {link.name === 'PAGES' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-white border-t-2 border-[#fbc02d] shadow-[0_15px_40px_-5px_rgba(0,0,0,0.1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-b-xl overflow-hidden translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <h3 className="text-[#fbc02d] font-black uppercase tracking-[0.1em] text-sm mb-4 border-b border-gray-100 pb-3">
                      Pages
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Gallery',
                        'About Us',
                        'Blog',
                        'MSB',
                        'MSC',
                        'MSS',
                        'PBD'
                      ].map((service, index) => (
                        <li key={index}>
                          <Link 
                            to={`/bim-hub/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                            className="text-gray-600 hover:text-[#fbc02d] hover:translate-x-2 text-[0.8rem] font-bold transition-all duration-300 block leading-tight"
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Header Right */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((social, i) => (
            <div 
              key={i} 
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer hover:border-yellow-500 hover:text-yellow-500 hover:bg-black/5
                ${isScrolled ? 'border-gray-200 text-gray-900' : 'border-white/20 text-white'}
              `}
            >
              <span className="font-bold text-[0.6rem]">{social.label}</span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`p-2 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[2000] lg:hidden transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b">
            <img src={Logo} alt="Logo" className="h-10 brightness-0" />
            <button onClick={() => setIsOpen(false)} className="text-gray-900"><X size={30} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-10 space-y-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div className="flex items-center justify-between">
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-black text-gray-900 uppercase tracking-tighter hover:text-yellow-500 transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </div>
                {link.name === 'SERVICES' && (
                  <div className="mt-4 pl-4 border-l-2 border-[#fbc02d]">
                    <h3 className="text-[#fbc02d] font-black uppercase tracking-[0.1em] text-[0.7rem] mb-3">
                      Civil Engineering
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'BIM Consultancy', 
                        'Structural Consultancy', 
                        'Project Management Consultancy (ePMC)', 
                        'Design & Build your Luxury Villa', 
                        'Construct your Dream Residential / Commercial Spaces', 
                        'Construction Services', 
                        'Total Quality Management'
                      ].map((service, index) => (
                        <li key={index}>
                          <Link 
                            to={service === 'BIM Consultancy' ? '/services/bim-consultancy' : '/services'}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-[#fbc02d] text-[0.8rem] font-bold transition-all duration-300 block leading-tight"
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {link.name === 'PAGES' && (
                  <div className="mt-4 pl-4 border-l-2 border-[#fbc02d]">
                    <h3 className="text-[#fbc02d] font-black uppercase tracking-[0.1em] text-[0.7rem] mb-3">
                      Pages
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Gallery',
                        'About Us',
                        'Blog',
                        'MSB',
                        'MSC',
                        'MSS',
                        'PBD'
                      ].map((service, index) => (
                        <li key={index}>
                          <Link 
                            to={`/bim-hub/${service.toLowerCase().replace(/\s+/g, '-')}`} 
                            onClick={() => setIsOpen(false)}
                            className="text-gray-600 hover:text-[#fbc02d] text-[0.8rem] font-bold transition-all duration-300 block leading-tight"
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-10 border-t flex gap-6 justify-center">
             {['FB', 'LI', 'IN'].map(social => (
               <div key={social} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center font-bold text-xs text-gray-900 hover:border-yellow-500 hover:text-yellow-500">
                 {social}
               </div>
             ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;