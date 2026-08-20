"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import CTASection from "../../../components/frontend/PageElements/CTASection";

const basePath = "/frontend_theme/assets/imgs/gallery_img";
const photos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `${basePath}/stellar-structures-limited-${i + 1}.jpg`,
  alt: `Stellar Structures Limited — Photo ${i + 1}`,
}));

/* ─── Lightbox with Zoom ─── */
function Lightbox({ index, photos, onClose, onPrev, onNext }) {
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef({ sx: 0, sy: 0, px: 0, py: 0 });
  const containerRef = useRef(null);
  const touchRef = useRef({ dist: 0, zoom: 1 });
  const isZoomed = zoom > 1;

  const clampPos = useCallback((x, y, z) => {
    if (z <= 1) return { x: 0, y: 0 };
    const c = containerRef.current;
    if (!c) return { x, y };
    const mx = (c.clientWidth * (z - 1)) / 2;
    const my = (c.clientHeight * (z - 1)) / 2;
    return { x: Math.max(-mx, Math.min(mx, x)), y: Math.max(-my, Math.min(my, y)) };
  }, []);

  const zoomTo = useCallback((next) => {
    const clamped = Math.max(1, Math.min(5, next));
    setZoom(clamped);
    setPos((p) => clampPos(p.x, p.y, clamped));
  }, [clampPos]);

  const resetZoom = useCallback(() => { setZoom(1); setPos({ x: 0, y: 0 }); }, []);

  const goPrev = useCallback(() => { resetZoom(); onPrev(); }, [resetZoom, onPrev]);
  const goNext = useCallback(() => { resetZoom(); onNext(); }, [resetZoom, onNext]);

  /* Keyboard */
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") { isZoomed ? resetZoom() : onClose(); }
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "+" || e.key === "=") zoomTo(zoom + 0.5);
      if (e.key === "-") zoomTo(zoom - 0.5);
      if (e.key === "0") resetZoom();
    };
    document.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose, goPrev, goNext, zoom, zoomTo, resetZoom, isZoomed]);

  /* Wheel */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const w = (e) => { e.preventDefault(); zoomTo(zoom + (e.deltaY < 0 ? 0.3 : -0.3)); };
    el.addEventListener("wheel", w, { passive: false });
    return () => el.removeEventListener("wheel", w);
  }, [zoom, zoomTo]);

  /* Mouse drag */
  const onMD = (e) => { if (!isZoomed) return; e.preventDefault(); setDragging(true); dragRef.current = { sx: e.clientX, sy: e.clientY, px: pos.x, py: pos.y }; };
  const onMM = (e) => { if (!dragging) return; setPos(clampPos(dragRef.current.px + e.clientX - dragRef.current.sx, dragRef.current.py + e.clientY - dragRef.current.sy, zoom)); };
  const onMU = () => setDragging(false);

  /* Touch pinch */
  const getDist = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
  const onTS = (e) => {
    if (e.touches.length === 2) { e.preventDefault(); touchRef.current = { dist: getDist(e.touches), zoom }; }
    else if (e.touches.length === 1 && isZoomed) { setDragging(true); dragRef.current = { sx: e.touches[0].clientX, sy: e.touches[0].clientY, px: pos.x, py: pos.y }; }
  };
  const onTM = (e) => {
    if (e.touches.length === 2) { e.preventDefault(); const nz = Math.max(1, Math.min(5, touchRef.current.zoom * (getDist(e.touches) / touchRef.current.dist))); setZoom(nz); setPos((p) => clampPos(p.x, p.y, nz)); }
    else if (e.touches.length === 1 && dragging) { setPos(clampPos(dragRef.current.px + e.touches[0].clientX - dragRef.current.sx, dragRef.current.py + e.touches[0].clientY - dragRef.current.sy, zoom)); }
  };
  const onTE = () => setDragging(false);

  useEffect(() => { resetZoom(); }, [index]);

  const photo = photos[index];

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(6,20,36,0.97)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <style>{`
        @keyframes lbFadeIn { from{opacity:0}to{opacity:1} }
        .lb-x{position:fixed;top:16px;right:20px;z-index:10}
        .lb-ct{position:fixed;bottom:0;left:0;right:0;z-index:10;display:flex;justify-content:center;padding:16px 0}
        .lb-n{position:fixed;top:50%;transform:translateY(-50%);z-index:10}
        .lb-n.l{left:16px} .lb-n.r{right:16px}
        @media(max-width:768px){.lb-n{width:36px!important;height:36px!important;font-size:18px!important}}
      `}</style>
      <div style={{ animation: "lbFadeIn 0.2s ease", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>

        {/* Close */}
        <button className="lb-x" onClick={onClose} style={btnS} onMouseEnter={hIn} onMouseLeave={hOut}>&#10005;</button>

        {/* Counter */}
        <div style={{ position: "fixed", top: "24px", left: "24px", color: "rgba(255,255,255,0.35)", fontSize: "13px", fontWeight: 500, letterSpacing: "1px", zIndex: 10, fontVariantNumeric: "tabular-nums" }}>
          {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
        </div>

        {/* Prev */}
        <button className="lb-n l" onClick={(e) => { e.stopPropagation(); goPrev(); }} style={navS} onMouseEnter={hIn} onMouseLeave={hOut}>&#8249;</button>

        {/* Next */}
        <button className="lb-n r" onClick={(e) => { e.stopPropagation(); goNext(); }} style={navS} onMouseEnter={hIn} onMouseLeave={hOut}>&#8250;</button>

        {/* Zoom controls */}
        <div className="lb-ct" onClick={(e) => e.stopPropagation()}>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "rgba(10,10,10,0.85)", border: "1px solid rgba(255,255,255,0.08)", padding: "6px 10px", backdropFilter: "blur(12px)" }}>
            <button onClick={() => zoomTo(zoom - 0.5)} disabled={zoom <= 1} style={{ ...ctrlS, opacity: zoom <= 1 ? 0.25 : 1 }}>&#8722;</button>
            <span style={{ color: "#fff", fontSize: "12px", fontWeight: 600, minWidth: "42px", textAlign: "center", fontVariantNumeric: "tabular-nums", letterSpacing: "0.5px" }}>{Math.round(zoom * 100)}%</span>
            <button onClick={() => zoomTo(zoom + 0.5)} disabled={zoom >= 5} style={{ ...ctrlS, opacity: zoom >= 5 ? 0.25 : 1 }}>&#43;</button>
            <div style={{ width: "1px", height: "18px", background: "rgba(255,255,255,0.12)", margin: "0 6px" }} />
            <button onClick={resetZoom} disabled={!isZoomed} style={{ ...ctrlS, opacity: isZoomed ? 1 : 0.25 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9" /><polyline points="3 3 3 9 9 9" /></svg>
            </button>
          </div>
        </div>

        {/* Image container */}
        <div
          ref={containerRef}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={onMD} onMouseMove={onMM} onMouseUp={onMU} onMouseLeave={onMU}
          onTouchStart={onTS} onTouchMove={onTM} onTouchEnd={onTE}
          style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", cursor: isZoomed ? (dragging ? "grabbing" : "grab") : "default", userSelect: "none", padding: "60px 60px 80px" }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            draggable={false}
            style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", transform: `scale(${zoom}) translate(${pos.x / zoom}px, ${pos.y / zoom}px)`, transition: dragging ? "none" : "transform 0.2s ease" }}
          />
        </div>
      </div>
    </div>
  );
}

const btnS = { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "18px", transition: "all 0.2s" };
const navS = { ...btnS, width: "48px", height: "48px", fontSize: "22px" };
const ctrlS = { background: "none", border: "none", color: "#fff", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "16px", fontWeight: 500, borderRadius: "4px", transition: "background 0.15s" };
const hIn = (e) => { e.currentTarget.style.background = "rgba(201,162,39,0.25)"; e.currentTarget.style.borderColor = "rgba(201,162,39,0.4)"; };
const hOut = (e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; };

/* ─── Main ─── */
export default function PhotoGalleryClient() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [loaded, setLoaded] = useState({});

  const handlePrev = useCallback(() => { setLightboxIndex((i) => (i === 0 ? photos.length - 1 : i - 1)); }, []);
  const handleNext = useCallback(() => { setLightboxIndex((i) => (i === photos.length - 1 ? 0 : i + 1)); }, []);

  return (
    <>
      <PageHeader
        tag="Gallery"
        title="Photo Gallery"
        subtitle="Explore the visual journey of Stellar Structures Limited — from construction sites to completed developments, captured in stunning detail."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }, { label: "Photos" }]}
      />

      {/* Gallery Grid */}
      <section style={{ padding: "clamp(32px, 5vw, 64px) 0" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "4px",
          }}
          className="photo-grid"
          >
            {photos.map((photo, i) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(i)}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#0d1a2a",
                  aspectRatio: "4/3",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector(".ghov").style.opacity = "1";
                  e.currentTarget.querySelector(".gimg").style.transform = "scale(1.05)";
                  e.currentTarget.querySelector(".gbar").style.transform = "translateY(0)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector(".ghov").style.opacity = "0";
                  e.currentTarget.querySelector(".gimg").style.transform = "scale(1)";
                  e.currentTarget.querySelector(".gbar").style.transform = "translateY(100%)";
                }}
              >
                {/* Image */}
                <img
                  className="gimg"
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  onLoad={() => setLoaded((p) => ({ ...p, [photo.id]: true }))}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    display: "block",
                    opacity: loaded[photo.id] ? 1 : 0,
                  }}
                />

                {/* Skeleton loader */}
                {!loaded[photo.id] && (
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, #0d1a2a 30%, #162435 50%, #0d1a2a 70%)", backgroundSize: "200% 100%", animation: "shimmer 1.5s infinite" }} />
                )}

                {/* Hover overlay — full */}
                <div className="ghov" style={{ position: "absolute", inset: 0, background: "rgba(6,20,36,0.55)", opacity: 0, transition: "opacity 0.3s ease" }} />

                {/* Bottom bar */}
                <div className="gbar" style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px", background: "linear-gradient(transparent, rgba(6,20,36,0.9))", transform: "translateY(100%)", transition: "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <p style={{ fontSize: "10px", color: "#C9A227", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "2px" }}>Photo {String(i + 1).padStart(2, "0")}</p>
                      <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", fontWeight: 600, color: "#fff", margin: 0 }}>{photo.alt}</h4>
                    </div>
                    <div style={{ width: "30px", height: "30px", background: "rgba(201,162,39,0.9)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .photo-grid { grid-template-columns: repeat(4, 1fr) !important; }
        @media(max-width:1199px){ .photo-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media(max-width:767px){ .photo-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media(max-width:480px){ .photo-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 3px !important; } }
        @media(max-width:576px){ .gbar h4{font-size:12px!important} .gbar p{font-size:9px!important} }
      `}</style>

      <CTASection
        title="See Our Projects in Person"
        subtitle="Schedule a site visit to experience the Stellar Structures quality firsthand."
        primaryBtn={{ label: "Schedule Visit", href: "/site-visit" }}
        secondaryBtn={{ label: "View Videos", href: "/gallery/videos" }}
      />

      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} photos={photos} onClose={() => setLightboxIndex(null)} onPrev={handlePrev} onNext={handleNext} />
      )}
    </>
  );
}
