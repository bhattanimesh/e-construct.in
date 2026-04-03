import React, { useState, useEffect, useCallback, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './Flipbook.css';

// Set worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const PdfPage = React.forwardRef(({ pageNumber, width, height }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content bg-white shadow-inner">
        <Page 
          pageNumber={pageNumber} 
          width={width} 
          height={height}
          devicePixelRatio={2} 
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="pdf-page-render"
        />
      </div>
    </div>
  );
});

const PdfFlipbook = ({ pdfUrl, width = 560, height = 400 }) => {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [flipbookSize, setFlipbookSize] = useState({ width: width, height: height });
  const containerRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newWidth = Math.min(width, containerWidth);
        const newHeight = newWidth * (height / width); 
        setFlipbookSize({ width: newWidth, height: newHeight });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [width, height]);

  return (
    <div className="flipbook-wrapper w-full flex flex-col items-center" ref={containerRef}>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="text-slate-400 py-32 italic">Loading PDF Presentation...</div>}
        error={<div className="text-red-500 py-10">Failed to load PDF.</div>}
      >
        {numPages && (
          <HTMLFlipBook
            width={flipbookSize.width}
            height={flipbookSize.height}
            size="stretch"
            minWidth={280}
            maxWidth={800}
            minHeight={200}
            maxHeight={600}
            maxShadowOpacity={0.5}
            showCover={true}
            onFlip={onFlip}
            className="demo-book"
            mobileScrollSupport={true}
            useMouseEvents={true}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <PdfPage 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                width={flipbookSize.width}
                height={flipbookSize.height}
              />
            ))}
          </HTMLFlipBook>
        )}
      </Document>
      
      {numPages && (
        <div className="mt-10 px-6 py-2.5 bg-slate-900 border border-slate-800 rounded-full shadow-xl">
           <span className="text-slate-200 text-[0.75rem] font-black tracking-[0.2em] uppercase">
             Page {currentPage + 1} of {numPages}
           </span>
        </div>
      )}
    </div>
  );
};

export default PdfFlipbook;
