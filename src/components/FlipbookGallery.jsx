import React from 'react';
import PdfFlipbook from './PdfFlipbook';

const FlipbookGallery = () => {
  return (
    <section className="flipbook-gallery reveal bg-white py-24 border-b border-black/5 w-full px-4 text-[var(--primary-dark)]">
      <div className="container text-center mb-16 mx-auto">
        <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase">Interactive Library</span>
        <h2 className="text-5xl text-[var(--primary-dark)] mt-2">Our Digital <span className="text-yellow-500 italic">Showcase</span></h2>
        <p className="text-[var(--text-muted)] mt-4 max-w-2xl mx-auto">Explore our portfolio, brochures, and technical guides in one interactive place.</p>
      </div>
      
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-[1400px] mx-auto">
         {/* Flipbook 1 */}
         <div className="flex flex-col items-center">
            <h3 className="text-[var(--primary-dark)] text-xl mb-8 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center">Residential Home Construction</h3>
            <PdfFlipbook 
              width={400} 
              height={560} 
              pdfUrl="/pdfs/econ_presentation.pdf" 
            />
         </div>

         {/* Flipbook 2 */}
         <div className="flex flex-col items-center">
            <h3 className="text-[var(--primary-dark)] text-xl mb-8 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center">BIM Project & Services</h3>
            <PdfFlipbook 
              width={400} 
              height={560} 
              pdfUrl="/pdfs/econstruct_bim.pdf" 
            />
         </div>

         {/* Flipbook 3 */}
         <div className="flex flex-col items-center">
            <h3 className="text-[var(--primary-dark)] text-xl mb-8 font-medium italic underline underline-offset-8 decoration-[#fbc02d]/30 text-center">Tushar Dawda Associate</h3>
            <PdfFlipbook 
              width={400} 
              height={560} 
              pdfUrl="/pdfs/econstruct_tushar.pdf" 
            />
         </div>
      </div>
    </section>
  );
};

export default FlipbookGallery;
