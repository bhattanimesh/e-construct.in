import React from 'react';
import PdfFlipbook from './PdfFlipbook';

const FlipbookGallery = () => {
  return (
    <section className="flipbook-gallery reveal bg-white py-24 border-b border-black/5 w-full px-4 text-[var(--primary-dark)]">
      <div className="container text-center mb-16 mx-auto">
        <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Interactive Library</span>
        <h2 className="text-5xl text-[var(--primary-dark)] mt-2">Our Digital <span className="text-yellow-500 italic font-serif">Showcase</span></h2>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">Explore our portfolio, brochures, and technical guides in one interactive place.</p>
      </div>
      
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-[1400px] mx-auto">
         {/* Flipbook 1 */}
         <div className="flex flex-col items-center group">
            <h3 className="text-[var(--primary-dark)] text-xl mb-3 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center uppercase tracking-widest">Hospitality Portfolio</h3>
            <div className="flex items-center gap-3 mb-4 text-xs text-amber-500 font-bold uppercase tracking-[0.2em] bg-amber-500/5 px-4 py-2 rounded-full border border-amber-500/20 shadow-sm transition-all group-hover:bg-amber-500/10 active:scale-95">
              <span className="animate-pulse">←</span>
              <span>Swipe to Flip</span>
              <span className="animate-pulse">→</span>
            </div>
            <div className="flex-1 w-full max-w-[560px] flex justify-center">
              <PdfFlipbook 
                width={560} 
                height={400} 
                pdfUrl="/pdfs/econstruct_hospitality.pdf" 
              />
            </div>
         </div>

         {/* Flipbook 2 */}
         <div className="flex flex-col items-center group">
            <h3 className="text-[var(--primary-dark)] text-xl mb-3 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center uppercase tracking-widest">Residential Portfolio</h3>
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
            <h3 className="text-[var(--primary-dark)] text-xl mb-3 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center uppercase tracking-widest">Commercial Portfolio</h3>
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

         {/* Flipbook 4 */}
         <div className="flex flex-col items-center group">
            <h3 className="text-[var(--primary-dark)] text-xl mb-3 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center uppercase tracking-widest">Industrial Portfolio</h3>
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

         {/* Flipbook 5 */}
         <div className="flex flex-col items-center group">
            <h3 className="text-[var(--primary-dark)] text-xl mb-3 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center uppercase tracking-widest">Infrastructure Portfolio</h3>
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

         {/* Flipbook 6 */}
         <div className="flex flex-col items-center group">
            <h3 className="text-[var(--primary-dark)] text-xl mb-3 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center uppercase tracking-widest">Corporate Training Portfolio</h3>
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
  );
};

export default FlipbookGallery;
