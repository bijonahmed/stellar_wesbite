"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow({ onClick }) {
  return (
    <button onClick={onClick} className="pg-arrow pg-arrow-prev" aria-label="Previous image">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button onClick={onClick} className="pg-arrow pg-arrow-next" aria-label="Next image">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </button>
  );
}

const ZOOM_MIN = 1;
const ZOOM_MAX = 4;
const ZOOM_STEP = 0.5;

export default function ProjectGallery({ cover, images, title }) {
  const allImages = [cover, ...images];
  const [activeIdx, setActiveIdx] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPos({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(z + ZOOM_STEP, ZOOM_MAX));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(z - ZOOM_STEP, ZOOM_MIN);
      if (next === 1) setPos({ x: 0, y: 0 });
      return next;
    });
  }, []);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomIn, zoomOut]);

  const handleMouseDown = useCallback((e) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current = { ...pos };
  }, [zoom, pos]);

  const handleMouseMove = useCallback((e) => {
    if (!dragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPos({
      x: posStart.current.x + dx,
      y: posStart.current.y + dy,
    });
  }, [dragging]);

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleImageClick = useCallback(() => {
    if (zoom > 1) {
      resetZoom();
    } else {
      zoomIn();
    }
  }, [zoom, zoomIn, resetZoom]);

  const settings = {
    dots: false,
    infinite: allImages.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_, next) => {
      setActiveIdx(next);
      resetZoom();
    },
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  const currentImage = allImages[activeIdx];

  return (
    <>
      <style>{`
        .pg-main { border-radius: 10px; overflow: hidden; border: 1px solid rgba(201,162,39,0.15); position: relative; background: #f5f5f0; }
        .pg-main-img { width: 100%; max-height: 600px; object-fit: contain; display: block; transition: opacity 0.35s ease, transform 0.3s ease; }
        .pg-main-img.zoomed { cursor: grab; }
        .pg-main-img.zoomed.dragging { cursor: grabbing; }
        .pg-main-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(6,20,36,0.6)); padding: 30px 24px 16px; pointer-events: none; }
        .pg-main-overlay span { color: #fff; font-size: 12px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; }
        .pg-thumbs { position: relative; margin-top: 12px; }
        .pg-thumbs .slick-track { display: flex; gap: 10px; }
        .pg-thumbs .slick-slide { padding: 0 5px; }
        .pg-thumbs .slick-list { margin: 0 -5px; }
        .pg-arrow { position: absolute; top: 50%; transform: translateY(-50%); z-index: 10; width: 36px; height: 36px; border-radius: 50%; border: none; background: #061424; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.2); }
        .pg-arrow:hover { background: #C9A227; transform: translateY(-50%) scale(1.08); }
        .pg-arrow-prev { left: -14px; }
        .pg-arrow-next { right: -14px; }
        .pg-thumb { border-radius: 6px; overflow: hidden; border: 2px solid transparent; cursor: pointer; transition: all 0.3s ease; aspect-ratio: 4/3; }
        .pg-thumb.active { border-color: #C9A227; box-shadow: 0 3px 12px rgba(201,162,39,0.35); }
        .pg-thumb:hover { border-color: #C9A227; }
        .pg-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.35s ease; }
        .pg-thumb:hover img { transform: scale(1.06); }
        .pg-counter { position: absolute; top: 12px; right: 12px; background: rgba(6,20,36,0.75); color: #fff; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 4px; letter-spacing: 0.5px; pointer-events: none; z-index: 5; }
        .pg-zoom-controls { position: absolute; top: 12px; left: 12px; display: flex; gap: 4px; z-index: 10; }
        .pg-zoom-btn { width: 34px; height: 34px; border-radius: 6px; border: none; background: rgba(6,20,36,0.75); color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s ease; font-size: 18px; font-weight: 600; }
        .pg-zoom-btn:hover { background: #C9A227; }
        .pg-zoom-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .pg-zoom-btn:disabled:hover { background: rgba(6,20,36,0.75); }
        .pg-zoom-level { background: rgba(6,20,36,0.75); color: #fff; font-size: 11px; font-weight: 600; padding: 0 8px; border-radius: 6px; display: flex; align-items: center; letter-spacing: 0.5px; user-select: none; }
        .pg-visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
        .pg-zoom-hint { position: absolute; bottom: 50px; left: 50%; transform: translateX(-50%); background: rgba(6,20,36,0.8); color: #fff; font-size: 12px; padding: 6px 14px; border-radius: 6px; pointer-events: none; opacity: 0; transition: opacity 0.3s ease; white-space: nowrap; z-index: 6; }
        .pg-main:hover .pg-zoom-hint { opacity: 1; }
        @media (max-width: 576px) {
          .pg-arrow { width: 30px; height: 30px; }
          .pg-arrow-prev { left: -10px; }
          .pg-arrow-next { right: -10px; }
          .pg-main-img { max-height: 400px; }
          .pg-zoom-controls { top: 8px; left: 8px; }
          .pg-zoom-btn { width: 30px; height: 30px; font-size: 16px; }
        }
      `}</style>

      {/* SEO: hidden img for crawlers */}
      {allImages.map((img, idx) => (
        <img
          key={`seo-${idx}`}
          src={img.src}
          alt={img.alt || `${title} project image ${idx + 1}`}
          width="1200"
          height="800"
          loading={idx === 0 ? "eager" : "lazy"}
          className="pg-visually-hidden"
          aria-hidden="true"
        />
      ))}

      {/* Main Image with Zoom */}
      <figure className="pg-main" style={{ margin: 0 }}>
        {/* Zoom Controls */}
        <div className="pg-zoom-controls">
          <button
            type="button"
            className="pg-zoom-btn"
            onClick={zoomIn}
            disabled={zoom >= ZOOM_MAX}
            aria-label="Zoom in"
          >
            +
          </button>
          <span className="pg-zoom-level">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            className="pg-zoom-btn"
            onClick={zoomOut}
            disabled={zoom <= ZOOM_MIN}
            aria-label="Zoom out"
          >
            −
          </button>
        </div>

        {/* Zoom Hint */}
        {zoom <= 1 && (
          <span className="pg-zoom-hint">Click image or use +/− to zoom</span>
        )}

        {/* Image */}
        <img
          ref={imgRef}
          key={activeIdx}
          src={currentImage.src}
          alt={currentImage.alt || `${title} project photo ${activeIdx + 1}`}
          width="1200"
          height="800"
          loading={activeIdx === 0 ? "eager" : "lazy"}
          className={`pg-main-img ${zoom > 1 ? "zoomed" : ""} ${dragging ? "dragging" : ""}`}
          style={{
            transform: `scale(${zoom}) translate(${pos.x / zoom}px, ${pos.y / zoom}px)`,
            transformOrigin: "center center",
          }}
          onClick={handleImageClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          draggable={false}
        />

        <span className="pg-counter" aria-live="polite">
          {activeIdx + 1} / {allImages.length}
        </span>
        <figcaption className="pg-main-overlay">
          <span>{allImages.length} Photos</span>
        </figcaption>
      </figure>

      {/* Thumbnail Slider */}
      {allImages.length > 1 && (
        <nav className="pg-thumbs" aria-label={`${title} image gallery thumbnails`}>
          <Slider {...settings}>
            {allImages.map((img, idx) => (
              <div key={idx}>
                <button
                  type="button"
                  className={`pg-thumb ${activeIdx === idx ? "active" : ""}`}
                  onClick={() => {
                    setActiveIdx(idx);
                    resetZoom();
                  }}
                  aria-label={`View ${img.alt || `image ${idx + 1}`}`}
                  aria-pressed={activeIdx === idx}
                >
                  <img
                    src={img.src}
                    alt={img.alt || `${title} thumbnail ${idx + 1}`}
                    width="300"
                    height="225"
                    loading="lazy"
                  />
                </button>
              </div>
            ))}
          </Slider>
        </nav>
      )}
    </>
  );
}
