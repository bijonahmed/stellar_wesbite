"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

export default function GalleryGrid({ images }) {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setLightbox({ open: true, index: i })}
            style={{
              aspectRatio: "1",
              overflow: "hidden",
              borderRadius: "8px",
              border: "1px solid rgba(201,162,39,0.1)",
              cursor: "pointer",
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
            />
          </div>
        ))}
      </div>

      {lightbox.open && (
        <Lightbox
          images={images}
          startIndex={lightbox.index}
          onClose={() => setLightbox({ open: false, index: 0 })}
        />
      )}
    </>
  );
}
