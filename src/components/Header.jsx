import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../assets/logo.webp'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={Logo} 
              alt="E-Construct Logo" 
              className={`h-12 md:h-14 transition-all ${isScrolled ? '' : 'brightness-0 invert'}`} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase transition-colors ${
                    isActive 
                      ? 'text-yellow-500' 
                      : isScrolled ? 'text-gray-700 hover:text-yellow-500' : 'text-white hover:text-yellow-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className={`px-6 py-2.5 rounded-md font-bold flex items-center gap-2 transition-all active:scale-95 ${
              isScrolled 
                ? 'bg-gray-900 text-white hover:bg-yellow-500 hover:text-black' 
                : 'bg-yellow-500 text-black hover:bg-white hover:text-black'
            }`}>
              <Phone size={18} /> Call Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-6 px-6 space-y-4 shadow-2xl absolute w-full top-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-gray-800 font-bold hover:text-yellow-500 transition-colors text-lg"
            >
              {link.name}
            </Link>
          ))}
          <button className="w-full bg-yellow-500 text-black py-4 rounded-md font-black uppercase text-sm tracking-widest mt-4">
            Call Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;