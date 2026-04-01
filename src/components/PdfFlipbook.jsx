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

const PdfPage = React.forwardRef(({ pageNumber, width }, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <Page 
          pageNumber={pageNumber} 
          width={width} 
          devicePixelRatio={3} 
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="pdf-page-render"
        />
      </div>
    </div>
  );
});

const PdfFlipbook = ({ pdfUrl, width = 550, height = 733 }) => {
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

  // Responsive sizing logic
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newWidth = Math.min(width, containerWidth / 2 - 20);
        const newHeight = newWidth * (height / width); 
        setFlipbookSize({ width: newWidth, height: newHeight });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="flipbook-wrapper" ref={containerRef} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div className="text-white">Loading PDF...</div>}
        error={<div className="text-red-500">Failed to load PDF. Please check the URL.</div>}
      >
        {numPages && (
          <HTMLFlipBook
            width={flipbookSize.width}
            height={flipbookSize.height}
            size="stretch"
            minWidth={315}
            maxWidth={800}
            minHeight={420}
            maxHeight={1200}
            maxShadowOpacity={0.5}
            showCover={true}
            onFlip={onFlip}
            className="demo-book"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <PdfPage 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                width={flipbookSize.width}
              />
            ))}
          </HTMLFlipBook>
        )}
      </Document>
      
      {numPages && (
        <div className="flipbook-controls mt-8">
           <span className="text-white/50 text-sm">
             Page {currentPage + 1} of {numPages}
           </span>
        </div>
      )}
    </div>
  );
};

export default PdfFlipbook;
