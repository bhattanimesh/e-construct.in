import React, { useState, useEffect, useCallback, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Maximize2, X, Download } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './Flipbook.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

/* ── Preloader ─────────────────────────────────────────────────────────── */
const FlipbookPreloader = ({ width, height }) => (
  <div className="rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center gap-5"
    style={{ width, height }}>
    <div className="relative w-16 h-16">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="absolute inset-0 rounded-md bg-white border border-slate-200 shadow-sm origin-left"
          style={{ animation: `pageFan 1.4s ease-in-out ${i * 0.18}s infinite alternate`, transform: `rotate(${(i - 1) * 8}deg)` }} />
      ))}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-yellow-400 rounded-l-md z-10" />
    </div>
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-2 h-2 rounded-full bg-yellow-400"
          style={{ animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite` }} />
      ))}
    </div>
    <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">Loading Portfolio…</p>
    <style>{`
      @keyframes pageFan { 0% { opacity:.5 } 100% { transform:rotate(8deg); opacity:1 } }
      @keyframes dotBounce { 0%,100% { transform:translateY(0); opacity:.4 } 50% { transform:translateY(-6px); opacity:1 } }
    `}</style>
  </div>
);

/* ── Single PDF page ── */
const PdfPage = React.forwardRef(({ pageNumber, pageWidth, pageHeight }, ref) => (
  <div className="page" ref={ref}>
    <div className="page-content bg-white">
      <Page pageNumber={pageNumber} width={pageWidth} height={pageHeight}
        devicePixelRatio={2} renderTextLayer={false} renderAnnotationLayer={false}
        className="pdf-page-render" />
    </div>
  </div>
));

/* ── Inline viewer ─────────────────────────────────────────────────────── */
const InlineViewer = ({ pdfUrl, containerWidth, onExpand, numPages, setNumPages }) => {
  const [currentPage, setCurrentPage]   = useState(0);
  const [isLoaded, setIsLoaded]         = useState(false);
  const [showControls, setShowControls] = useState(false);
  const bookRef   = useRef(null);
  const hideTimer = useRef(null);

  // Single-page display: pageW = full container width, aspect 4:3
  const pageW = containerWidth;
  const pageH = Math.round(containerWidth * 0.65);

  const onFlip = useCallback((e) => setCurrentPage(e.data), []);
  const prev   = () => bookRef.current?.pageFlip()?.flipPrev();
  const next   = () => bookRef.current?.pageFlip()?.flipNext();
  const onLoad = ({ numPages: n }) => { setNumPages(n); setIsLoaded(true); };

  const show = () => { clearTimeout(hideTimer.current); setShowControls(true); };
  const hide = () => { hideTimer.current = setTimeout(() => setShowControls(false), 1800); };

  return (
    <div className="relative w-full" onMouseEnter={show} onMouseLeave={hide} onClick={show}>
      {!isLoaded && <FlipbookPreloader width={pageW} height={pageH} />}

      <div className={isLoaded ? 'w-full' : 'hidden'}>
        <Document file={pdfUrl} onLoadSuccess={onLoad} loading={null}
          error={<div className="text-red-500 py-6 text-sm text-center">Failed to load PDF.</div>}>
          {numPages && (
            <div style={{ width: pageW, height: pageH }}>
              <HTMLFlipBook
                ref={bookRef}
                width={pageW}
                height={pageH}
                size="fixed"
                maxShadowOpacity={0.35}
                showCover={false}
                singlePage={true}
                onFlip={onFlip}
                className="demo-book"
                mobileScrollSupport={false}
                useMouseEvents={true}
                swipeDistance={30}
              >
                {Array.from({ length: numPages }, (_, i) => (
                  <PdfPage key={`p${i}`} pageNumber={i + 1} pageWidth={pageW} pageHeight={pageH} />
                ))}
              </HTMLFlipBook>
            </div>
          )}
        </Document>
      </div>

      {/* Overlay controls */}
      {isLoaded && numPages && (
        <div className={`absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-10 transition-all duration-300
          ${showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          <button onClick={prev} disabled={currentPage === 0}
            className="w-8 h-8 rounded-full bg-black/65 text-white backdrop-blur-sm flex items-center justify-center hover:bg-yellow-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft size={16} />
          </button>
          <div className="px-3 py-1 bg-black/65 backdrop-blur-sm rounded-full">
            <span className="text-white text-[0.6rem] font-black tracking-[0.2em] uppercase">
              {currentPage + 1} / {numPages}
            </span>
          </div>
          <button onClick={next} disabled={currentPage + 1 >= numPages}
            className="w-8 h-8 rounded-full bg-black/65 text-white backdrop-blur-sm flex items-center justify-center hover:bg-yellow-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight size={16} />
          </button>
          <button onClick={onExpand}
            className="w-8 h-8 rounded-full bg-black/65 text-white backdrop-blur-sm flex items-center justify-center hover:bg-yellow-500 transition-colors">
            <Maximize2 size={13} />
          </button>
        </div>
      )}
    </div>
  );
};

/* ── Modal viewer ──────────────────────────────────────────────────────── */
const ModalViewer = ({ pdfUrl, onClose }) => {
  const [numPages, setNumPages]       = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoaded, setIsLoaded]       = useState(false);
  const [pageW, setPageW]             = useState(400);
  const [pageH, setPageH]             = useState(280);
  const bookRef = useRef(null);

  const onFlip = useCallback((e) => setCurrentPage(e.data), []);
  const prev   = () => bookRef.current?.pageFlip()?.flipPrev();
  const next   = () => bookRef.current?.pageFlip()?.flipNext();
  const onLoad = ({ numPages: n }) => { setNumPages(n); setIsLoaded(true); };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const calc = () => {
      const maxW = Math.min(window.innerWidth * 0.90, 1000);
      const maxH = window.innerHeight - 140;
      const h    = Math.round(maxW * 0.65);
      if (h > maxH) {
        const hc = maxH;
        setPageW(Math.round(hc / 0.65)); setPageH(hc);
      } else {
        setPageW(Math.round(maxW)); setPageH(h);
      }
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  useEffect(() => {
    const handle = (e) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape')     onClose();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [onClose]);

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = pdfUrl; a.download = pdfUrl.split('/').pop() || 'portfolio.pdf'; a.target = '_blank'; a.click();
  };

  const bookW = pageW; // single page mode — book width = one page width

  return (
    <div className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        style={{ width: pageW + 48, maxWidth: '95vw', maxHeight: '95vh' }}>

        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between px-5 py-3 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Portfolio Viewer</span>
          <div className="flex items-center gap-2">
            <button onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-yellow-500 transition-colors">
              <Download size={13} /> Download
            </button>
            <button onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center">
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Flipbook */}
        <div className="flex flex-col items-center justify-center gap-4 p-5 overflow-hidden">
          {!isLoaded && <FlipbookPreloader width={bookW} height={pageH} />}

          <div className={isLoaded ? 'flex flex-col items-center gap-4' : 'hidden'}>
            <Document file={pdfUrl} onLoadSuccess={onLoad} loading={null}
              error={<div className="text-red-500 text-sm">Failed to load PDF.</div>}>
              {numPages && (
                <div style={{ width: pageW, height: pageH, flexShrink: 0 }}>
                  <HTMLFlipBook ref={bookRef} width={pageW} height={pageH}
                    size="fixed" maxShadowOpacity={0.4} showCover={false} singlePage={true} onFlip={onFlip}
                    className="demo-book" mobileScrollSupport={false} useMouseEvents={true} swipeDistance={30}>
                    {Array.from({ length: numPages }, (_, i) => (
                      <PdfPage key={`m${i}`} pageNumber={i + 1} pageWidth={pageW} pageHeight={pageH} />
                    ))}
                  </HTMLFlipBook>
                </div>
              )}
            </Document>

            {numPages && (
              <div className="flex items-center gap-3">
                <button onClick={prev} disabled={currentPage === 0}
                  className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-yellow-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                  <ChevronLeft size={18} />
                </button>
                <div className="px-5 py-2 bg-slate-900 rounded-full">
                  <span className="text-slate-200 text-[0.7rem] font-black tracking-[0.2em] uppercase">
                    Page {currentPage + 1} of {numPages}
                  </span>
                </div>
                <button onClick={next} disabled={currentPage + 1 >= numPages}
                  className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-yellow-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main export ───────────────────────────────────────────────────────── */
const PdfFlipbook = ({ pdfUrl, width = 560, height = 400 }) => {
  const [showModal, setShowModal]         = useState(false);
  const [numPages, setNumPages]           = useState(null);
  const [containerWidth, setContainerWidth] = useState(width);
  const containerRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <div className="w-full" ref={containerRef}>
        <InlineViewer
          pdfUrl={pdfUrl}
          containerWidth={containerWidth}
          onExpand={() => setShowModal(true)}
          numPages={numPages}
          setNumPages={setNumPages}
        />
      </div>
      {showModal && <ModalViewer pdfUrl={pdfUrl} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default PdfFlipbook;
