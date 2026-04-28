import React, { useState } from 'react';

const VideoGallery = () => {
  const [showMoreVideos, setShowMoreVideos] = useState(false);

  return (
    <section className="videos-section reveal py-16 md:py-24 px-4 md:px-8 bg-white border-b border-black/5 relative text-[var(--primary-dark)]">
      <div className="parallax-bg" data-speed="0.05"></div>
      <div className="container text-center mb-12 md:mb-16 mx-auto px-4">
        <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Project Visuals</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--primary-dark)] mt-2 tracking-tight">Engineering <span className="accent-text italic">Excellence in Action</span></h2>
      </div>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 max-w-[1400px] mx-auto px-4">
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
        <button onClick={() => setShowMoreVideos(!showMoreVideos)} className="w-full sm:w-auto px-8 md:px-10 py-4 bg-yellow-500 hover:bg-black hover:text-white text-black font-bold rounded-xl transition-all duration-500 uppercase tracking-wider text-sm md:text-base active:scale-95 min-w-[280px]">
          {showMoreVideos ? 'View Less Videos ↖' : 'Explore More Videos ↗'}
        </button>
      </div>
    </section>
  );
};

export default VideoGallery;
