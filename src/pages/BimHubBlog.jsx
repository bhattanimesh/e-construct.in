import React from 'react';
import OurBlogs from '../components/OurBlogs';

const BimHubBlog = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden mt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/c4.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Our <span className="accent-text italic">Blog</span>
          </h1>
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
