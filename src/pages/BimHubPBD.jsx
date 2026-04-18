import React from 'react';

const BimHubPBD = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-start">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/prj8.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-10">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            <span className="text-[#fbc02d] drop-shadow-md">PBD</span>
          </h1>
          <p className="mt-6 text-white text-lg md:text-xl font-medium tracking-wide drop-shadow-md max-w-3xl text-center leading-relaxed">
            Performance Based Design Documentation and Insights
          </p>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="bg-slate-50 py-12 flex flex-col justify-center items-center overflow-hidden border-t border-gray-200">
        <div className="w-full px-4 sm:px-8 md:px-16 flex flex-col items-center max-w-[1800px] mx-auto pb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
            <span className="text-[#fbc02d] font-bold uppercase tracking-[0.2em] text-sm sm:text-base">Document Explorer</span>
            <span className="w-12 h-[2px] bg-[#fbc02d]"></span>
          </div>

          {/* Full Screen PDF Viewer Container */}
          <div className="w-full h-[90vh] min-h-[600px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
            <iframe 
              src="/pdfs/PBD_compressed.pdf#view=FitH" 
              className="w-full h-full"
              title="PBD Document"
              frameBorder="0"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default BimHubPBD;
