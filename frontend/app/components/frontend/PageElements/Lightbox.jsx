"use client";

import { useState, useEffect, useCallback } from "react";

export default function Lightbox({ images, startIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "20px",
          right: "24px",
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "32px",
          cursor: "pointer",
          zIndex: 10,
          lineHeight: 1,
          padding: "8px",
        }}
      >
        &#10005;
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          fontSize: "24px",
          cursor: "pointer",
          padding: "16px 12px",
          borderRadius: "8px",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,162,39,0.4)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
      >
        &#10094;
      </button>

      <div
        style={{ position: "relative", maxWidth: "85vw", maxHeight: "85vh", textAlign: "center" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          style={{
            maxWidth: "85vw",
            maxHeight: "80vh",
            objectFit: "contain",
            borderRadius: "8px",
          }}
        />
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "12px" }}>
          {images[currentIndex].alt} — {currentIndex + 1} / {images.length}
        </p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          fontSize: "24px",
          cursor: "pointer",
          padding: "16px 12px",
          borderRadius: "8px",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,162,39,0.4)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
      >
        &#10095;
      </button>
    </div>
  );
}
