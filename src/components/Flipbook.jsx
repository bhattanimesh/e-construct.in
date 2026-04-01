import React, { useState, useCallback } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Flipbook.css';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">Page Header - {props.number}</h2>
        <div className="page-image">
           <img src={props.image} alt={`Page ${props.number}`} className="w-full h-full object-cover" />
        </div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

const Flipbook = ({ pages, width = 550, height = 733 }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onInit = useCallback(() => {
    console.log('Flipbook initialized');
  }, []);

  const onPage = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  return (
    <div className="flipbook-container">
      <HTMLFlipBook
        width={width}
        height={height}
        size="stretch"
        minWidth={150}
        maxWidth={800}
        minHeight={200}
        maxHeight={1200}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPage}
        className="demo-book"
      >
        {pages.map((page, index) => (
          <div key={index} className="page" data-density="hard">
            <div className="page-content">
              <img src={page} alt={`Page ${index + 1}`} className="page-img" />
            </div>
          </div>
        ))}
      </HTMLFlipBook>
      <div className="flipbook-controls">
         <span className="text-white/50 text-sm">Flip pages to explore • Showing {currentPage + 1} of {pages.length}</span>
      </div>
    </div>
  );
};

export default Flipbook;
