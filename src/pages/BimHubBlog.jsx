import React from 'react';
import OurBlogs from '../components/OurBlogs';
import { motion } from 'framer-motion';
import { useAdmin } from '../context/AdminContext';

const BimHubBlog = () => {
  const { data } = useAdmin();
  const blogHeroBg = data?.blogPageContent?.heroBg || '/blog_hero_bg.jpg';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[420px] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('${blogHeroBg}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-6">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="w-8 sm:w-10 h-[2px] bg-amber-500"></span>
            <span className="text-amber-400 font-bold uppercase tracking-[0.25em] text-xs">
              Knowledge & Innovations
            </span>
            <span className="w-8 sm:w-10 h-[2px] bg-amber-500"></span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          >
            Our <span className="accent-text italic">Blog</span>
          </motion.h1>
        </div>
      </section>

      {/* Blog Listing Section */}
      <div className="py-12 bg-gray-50 border-t border-gray-200">
        <OurBlogs />
      </div>

    </div>
  );
};

export default BimHubBlog;

