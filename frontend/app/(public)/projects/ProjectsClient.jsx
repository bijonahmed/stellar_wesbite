"use client";

import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { num: 1, alt: "Stellar Heights — Bashundhara" },
  { num: 9, alt: "Stellar Tower — Luxury Living" },
  { num: 12, alt: "Stellar Commercial Hub" },
  { num: 16, alt: "Stellar Residences — Jolshiri" },
  { num: 5, alt: "Stellar Prime — Urban Living" },
  { num: 13, alt: "Stellar Business Center" },
  { num: 20, alt: "Stellar Duplex Villas" },
  { num: 8, alt: "Stellar Plaza — Retail Complex" },
];

const projects = [
  {
    id: 1,
    title: "Stellar Heights",
    subtitle: "Premium Residential Living",
    location: "Block C, Bashundhara R/A, Dhaka",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-1.jpg",
    desc: "A landmark residential tower in Bashundhara offering spacious apartments with modern amenities, smart home features, and panoramic city views.",
    features: ["Smart Home", "Rooftop Garden", "24/7 Security", "Power Backup"],
  },
  {
    id: 2,
    title: "Stellar Tower",
    subtitle: "Luxury Redefined",
    location: "Block D, Bashundhara R/A, Dhaka",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-2.jpg",
    desc: "An exclusive luxury residential tower featuring premium finishes, private elevators, and world-class recreational facilities for discerning homeowners.",
    features: ["Private Elevator", "Infinity Pool", "Concierge Service", "Gym"],
  },
  {
    id: 3,
    title: "Stellar Commercial Hub",
    subtitle: "Business Excellence",
    location: "Block B, Bashundhara R/A, Dhaka",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-3.jpg",
    desc: "A state-of-the-art commercial complex designed for modern businesses, offering flexible office spaces, retail zones, and conference facilities.",
    features: ["High-Speed Elevator", "Fiber Optic", "Parking Complex", "CCTV"],
  },
  {
    id: 4,
    title: "Stellar Residences",
    subtitle: "Family Living Perfected",
    location: "Jolshiri R/A, Dhaka",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-4.jpg",
    desc: "An upcoming family-oriented residential project in the serene Jolshiri area, designed for comfortable living with green spaces and community amenities.",
    features: ["Children's Play Area", "Community Hall", "Landscaped Garden", "Jogging Track"],
  },
  {
    id: 5,
    title: "Stellar Prime",
    subtitle: "Urban Living at Its Best",
    location: "Block A, Bashundhara R/A, Dhaka",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-5.jpg",
    desc: "A contemporary residential development offering well-designed apartments with efficient layouts, natural ventilation, and proximity to all essential services.",
    features: ["Double Glazed Windows", "Modular Kitchen", "Visitor Parking", "Security"],
  },
  {
    id: 6,
    title: "Stellar Business Center",
    subtitle: "Corporate Spaces",
    location: "Block E, Bashundhara R/A, Dhaka",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-6.jpg",
    desc: "A premium business center designed for corporations and startups, featuring open-plan offices, private cabins, meeting rooms, and co-working spaces.",
    features: ["Co-Working Space", "Meeting Rooms", "Reception Area", "Cafeteria"],
  },
  {
    id: 7,
    title: "Stellar Duplex Villas",
    subtitle: "Exclusive Duplex Living",
    location: "Jolshiri R/A, Dhaka",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-7.jpg",
    desc: "Exclusive duplex villas offering private terraces, landscaped gardens, and premium finishes for families seeking an elevated lifestyle.",
    features: ["Private Garden", "Terrace", "Home Theater", "Wine Cellar"],
  },
  {
    id: 8,
    title: "Stellar Plaza",
    subtitle: "Retail & Office Complex",
    location: "Block F, Bashundhara R/A, Dhaka",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-8.jpg",
    desc: "A mixed-use commercial plaza combining retail shops, showroom spaces, and corporate offices in a high-traffic location with excellent visibility.",
    features: ["Showroom Spaces", "Escalators", "Loading Dock", "Anchor Tenant"],
  },
];

const stats = [
  { number: "25+", label: "Projects Delivered" },
  { number: "3,500+", label: "Happy Families" },
  { number: "12M+", label: "Sq Ft Developed" },
  { number: "15+", label: "Years of Excellence" },
];

export default function ProjectsClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, nextImage, prevImage]);

  return (
    <>
      {/* Stats Bar */}
      <section style={{ padding: "clamp(40px, 5vw, 64px) 0", background: "#061424" }}>
        <div className="container">
          <div className="row">
            {stats.map((s, i) => (
              <div className="col-lg-3 col-6" key={i} style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700, color: "#C9A227", marginBottom: "8px" }}>
                  {s.number}
                </div>
                <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "2px", fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: "clamp(48px, 6vw, 96px) 0", background: "#fff" }}>
        <div className="container">
          <div className="row">
            {projects.map((p) => (
              <div className="col-lg-4 col-md-6" key={p.id} style={{ marginBottom: "32px" }}>
                <div
                  className="ss-project-card"
                  style={{
                    border: "1px solid #EFEFED",
                    overflow: "hidden",
                    transition: "all 0.3s",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    />
                  </div>

                  <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <i className="fi fi-rr-marker" style={{ fontSize: "14px", color: "#C9A227" }} />
                      <span style={{ fontSize: "13px", color: "#C9A227", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>
                        {p.location}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 2.5vw, 28px)", fontWeight: 700, color: "#061424", marginBottom: "6px" }}>
                      {p.title}
                    </h3>

                    <p style={{ fontSize: "15px", color: "#8A8A85", fontWeight: 500, marginBottom: "16px" }}>
                      {p.subtitle}
                    </p>

                    <p style={{ fontSize: "15px", color: "#8A8A85", lineHeight: 1.8, marginBottom: "20px", flex: 1 }}>
                      {p.desc}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                      {p.features.map((f, fi) => (
                        <span key={fi} style={{ padding: "5px 12px", background: "#FAFAF8", fontSize: "12px", color: "#8A8A85", fontWeight: 500 }}>
                          {f}
                        </span>
                      ))}
                    </div>

                    <a
                      href="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        padding: "14px 28px",
                        background: "#061424",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "background 0.3s",
                        textAlign: "center",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#C9A227")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#061424")}
                    >
                      Enquire Now
                      <i className="fi fi-rr-arrow-right" style={{ fontSize: "12px" }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {projects.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: "18px", color: "#8A8A85" }}>No projects found for this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: "clamp(48px, 6vw, 96px) 0", background: "#FAFAF8" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ display: "block", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#C9A227", fontSize: "14px", marginBottom: "14px" }}>Visual Showcase</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#061424", marginBottom: "16px" }}>
              Project Gallery
            </h2>
            <p style={{ fontSize: "18px", color: "#8A8A85", maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>
              A glimpse into our ongoing and completed developments across Dhaka.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
            {galleryImages.map((img, i) => (
              <div
                key={img.num}
                className="ss-gallery-thumb"
                onClick={() => openLightbox(i)}
                style={{ position: "relative", aspectRatio: "1", overflow: "hidden", cursor: "pointer" }}
              >
                <img
                  src={`/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-${img.num}.jpg`}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                />
                <div
                  className="ss-gallery-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(6,20,36,0.7) 100%)",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "16px",
                  }}
                >
                  <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "ss-fadeIn 0.25s ease",
          }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "24px",
              width: "48px",
              height: "48px",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,162,39,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            &#10005;
          </button>

          {/* Counter */}
          <div style={{ position: "absolute", top: "28px", left: "28px", color: "rgba(255,255,255,0.6)", fontSize: "15px", fontWeight: 500, zIndex: 10 }}>
            {lightboxIndex + 1} / {galleryImages.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            style={{
              position: "absolute",
              left: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "56px",
              height: "56px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,162,39,0.4)"; e.currentTarget.style.borderColor = "#C9A227"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            &#8249;
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "85vw", maxHeight: "85vh", position: "relative" }}
          >
            <img
              src={`/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-${galleryImages[lightboxIndex].num}.jpg`}
              alt={galleryImages[lightboxIndex].alt}
              style={{
                maxWidth: "85vw",
                maxHeight: "80vh",
                objectFit: "contain",
                display: "block",
                animation: "ss-fadeIn 0.25s ease",
              }}
              key={galleryImages[lightboxIndex].num}
            />
            <div style={{ textAlign: "center", marginTop: "16px", color: "rgba(255,255,255,0.7)", fontSize: "16px", fontWeight: 500 }}>
              {galleryImages[lightboxIndex].alt}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "56px",
              height: "56px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,162,39,0.4)"; e.currentTarget.style.borderColor = "#C9A227"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
          >
            &#8250;
          </button>

          {/* Thumbnails strip */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              bottom: "24px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
              padding: "8px 12px",
              background: "rgba(0,0,0,0.5)",
              borderRadius: "8px",
              zIndex: 10,
              maxWidth: "90vw",
              overflowX: "auto",
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={img.num}
                onClick={() => setLightboxIndex(i)}
                style={{
                  width: "56px",
                  height: "56px",
                  flexShrink: 0,
                  overflow: "hidden",
                  cursor: "pointer",
                  border: i === lightboxIndex ? "2px solid #C9A227" : "2px solid transparent",
                  opacity: i === lightboxIndex ? 1 : 0.5,
                  transition: "all 0.2s",
                }}
              >
                <img
                  src={`/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-${img.num}.jpg`}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .ss-project-card:hover { border-color: rgba(201,162,39,0.3) !important; box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
        .ss-project-card:hover img { transform: scale(1.05); }
        .ss-gallery-thumb:hover img { transform: scale(1.1); }
        .ss-gallery-thumb:hover .ss-gallery-overlay { opacity: 1 !important; }
        @keyframes ss-fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
        @media (max-width: 768px) {
          .ss-gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  );
}
