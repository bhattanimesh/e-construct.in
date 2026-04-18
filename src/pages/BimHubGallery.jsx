import React, { useState } from 'react';

const BimHubGallery = () => {
  const [showMoreInterior, setShowMoreInterior] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const photos = [
    '/i1.jpeg',
    '/i2.jpeg',
    '/i3.jpg'
  ];

  const eventsAndTrainingPhotos = [
    { id: 1, src: "https://e-construct.in/wp-content/uploads/2022/02/WhatsApp-Image-2022-01-24-at-19.38.39-2.jpeg", alt: "Wedding moment" },
    { id: 2, src: "https://e-construct.in/wp-content/uploads/2022/02/X-CM-2-1.jpg", alt: "Event highlight" },
    { id: 3, src: "https://e-construct.in/wp-content/uploads/2021/07/classroom2-min.jpg", alt: "Decoration setup" },
    { id: 4, src: "https://e-construct.in/wp-content/uploads/2022/02/X-CM-2-1.jpg", alt: "Stage view" },
    { id: 5, src: "https://e-construct.in/wp-content/uploads/2021/12/41.jpg", alt: "Guests enjoying" },
    { id: 6, src: "https://e-construct.in/wp-content/uploads/2021/07/classroom5-min.jpg", alt: "Close-up moment" },
    { id: 7, src: "https://e-construct.in/wp-content/uploads/2021/12/18.jpg", alt: "Lighting setup" },
    { id: 8, src: "https://e-construct.in/wp-content/uploads/2021/12/106524842_2909553979271777_2347980788158455249_n.jpg", alt: "Candid shot" },
    { id: 9, src: "https://e-construct.in/wp-content/uploads/2025/02/gallery7.jpg", alt: "Dance moment" },
    { id: 10, src: "https://e-construct.in/wp-content/uploads/2026/02/event6_11zon.webp", alt: "Venue look" },
    { id: 11, src: "https://e-construct.in/wp-content/uploads/2026/02/event5_11zon.webp", alt: "Food setup" },
    { id: 12, src: "https://e-construct.in/wp-content/uploads/2026/02/event4_11zon.webp", alt: "Group photo" },
    { id: 13, src: "https://e-construct.in/wp-content/uploads/2026/02/event-3_11zon.webp", alt: "Night view" },
    { id: 14, src: "https://e-construct.in/wp-content/uploads/2026/02/event2_11zon.webp", alt: "Entry moment" },
    { id: 15, src: "https://e-construct.in/wp-content/uploads/2026/02/event1_11zon.webp", alt: "Final shot" },
  ];

  const interiorDesignsPhotos = [
    '/p1.jpg', '/p2.jpg', '/p4.jpg', '/p5.jpg', '/p6.jpg', 
    '/p7.jpg', '/p8.jpg', '/p9.jpg', '/10.jpg', '/p11.jpg'
  ];

  const projectsPhotos = [
    '/prj1.jpg', '/prj2.jpg', '/prj3.webp', '/prj4.webp', '/prj5.webp',
    '/prj6.jpg', '/prj7.webp', '/prj8.jpg', '/prj9.jpg', '/c4.jpg', '/c5.jpg'
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col justify-start">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/p6.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Our <span className="text-[#fbc02d] drop-shadow-md">Gallery</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-32 px-5 sm:px-10 flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto text-center mb-16 w-full">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-[2px] bg-yellow-500"></span>
          <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
            BIM Hub Gallery
          </span>
          <span className="w-10 h-[2px] bg-yellow-500"></span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Meetings With <span className="text-yellow-500 italic">CM of Karnataka</span>
        </h1>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-lg text-gray-500 font-normal leading-relaxed">
          Exploring visionary infrastructure strategies and collaborative frameworks for future developments.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {photos.map((src, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-2xl bg-white border border-gray-200 group cursor-pointer aspect-square sm:aspect-[4/3] relative shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <img 
              src={src} 
              alt={`Meetings with CM of Karnataka ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
            />
            {/* Elegant overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-8">
               <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Exhibit {index + 1}</span>
               <h3 className="text-white text-xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Leadership Summit</h3>
            </div>
            
            {/* Golden border frame effect on hover */}
            <div className="absolute inset-4 border border-yellow-500/0 group-hover:border-yellow-500/50 scale-105 group-hover:scale-100 transition-all duration-500 rounded-xl pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Events and Training Section */}
      <div className="max-w-[1400px] mx-auto text-center mb-16 mt-32 w-full">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-[2px] bg-yellow-500"></span>
          <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
            Memories & Milestones
          </span>
          <span className="w-10 h-[2px] bg-yellow-500"></span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Events and <span className="text-yellow-500 italic">Training</span>
        </h2>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-lg text-gray-500 font-normal leading-relaxed">
          Showcasing the journey, key events, and the professional training environment at EConstruct.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
        {eventsAndTrainingPhotos.map((img) => (
          <div 
            key={img.id} 
            className="overflow-hidden rounded-2xl bg-white border border-gray-200 group cursor-pointer aspect-square relative shadow-md hover:shadow-xl transition-shadow duration-500"
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
            />
            {/* Elegant overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-4">
               <span className="text-yellow-500 font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Event</span>
               <h3 className="text-white text-sm sm:text-base font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 line-clamp-1">{img.alt}</h3>
            </div>
            
            {/* Golden border frame effect on hover */}
            <div className="absolute inset-3 border border-yellow-500/0 group-hover:border-yellow-500/50 scale-105 group-hover:scale-100 transition-all duration-500 rounded-xl pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Interior Designs Section */}
      <div className="max-w-[1400px] mx-auto text-center mb-16 mt-32 w-full">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-[2px] bg-yellow-500"></span>
          <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
            Project Showcase
          </span>
          <span className="w-10 h-[2px] bg-yellow-500"></span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Interior <span className="text-yellow-500 italic">Designs</span>
        </h2>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-lg text-gray-500 font-normal leading-relaxed">
          Explore our breathtaking interior designs where aesthetics meet functional brilliance.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-12">
        {interiorDesignsPhotos.slice(0, showMoreInterior ? interiorDesignsPhotos.length : 6).map((src, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-2xl bg-white border border-gray-200 group cursor-pointer aspect-square sm:aspect-[4/3] relative shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <img 
              src={src} 
              alt={`Interior Design ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
            />
            {/* Elegant overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-8">
               <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Design {index + 1}</span>
               <h3 className="text-white text-xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Premium Details</h3>
            </div>
            
            {/* Golden border frame effect on hover */}
            <div className="absolute inset-4 border border-yellow-500/0 group-hover:border-yellow-500/50 scale-105 group-hover:scale-100 transition-all duration-500 rounded-xl pointer-events-none"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pb-20">
        <button 
          onClick={() => setShowMoreInterior(!showMoreInterior)}
          className="group relative px-8 py-4 bg-[#fbc02d] overflow-hidden transition-all active:scale-95 shadow-md rounded-lg flex items-center justify-center gap-3"
        >
          <span className="relative z-10 text-gray-900 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2">
            {showMoreInterior ? 'Show Less ↖' : 'View More Images ↗'}
          </span>
          <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Our Projects Section */}
      <div className="max-w-[1400px] mx-auto text-center mb-16 mt-32 w-full">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-10 h-[2px] bg-yellow-500"></span>
          <span className="text-yellow-500 uppercase tracking-[0.3em] text-xs md:text-sm font-bold">
            Project Portfolio
          </span>
          <span className="w-10 h-[2px] bg-yellow-500"></span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Our <span className="text-yellow-500 italic">Projects</span>
        </h2>
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-lg text-gray-500 font-normal leading-relaxed">
          Discover our landmark constructions and large-scale infrastructure projects.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mb-12">
        {projectsPhotos.slice(0, showMoreProjects ? projectsPhotos.length : 6).map((src, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-2xl bg-white border border-gray-200 group cursor-pointer aspect-square sm:aspect-[4/3] relative shadow-xl hover:shadow-2xl transition-shadow duration-500"
          >
            <img 
              src={src} 
              alt={`Project ${index + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
            />
            {/* Elegant overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col justify-end p-8">
               <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Project {index + 1}</span>
               <h3 className="text-white text-xl font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Landmark Status</h3>
            </div>
            
            {/* Golden border frame effect on hover */}
            <div className="absolute inset-4 border border-yellow-500/0 group-hover:border-yellow-500/50 scale-105 group-hover:scale-100 transition-all duration-500 rounded-xl pointer-events-none"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pb-20">
        <button 
          onClick={() => setShowMoreProjects(!showMoreProjects)}
          className="group relative px-8 py-4 bg-[#fbc02d] overflow-hidden transition-all active:scale-95 shadow-md rounded-lg flex items-center justify-center gap-3"
        >
          <span className="relative z-10 text-gray-900 font-bold uppercase tracking-widest text-xs sm:text-sm flex items-center gap-2">
            {showMoreProjects ? 'Show Less ↖' : 'View More Images ↗'}
          </span>
          <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      </section>
    </div>
  );
};

export default BimHubGallery;
