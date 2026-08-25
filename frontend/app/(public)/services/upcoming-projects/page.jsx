"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";

const upcomingFeatures = [
  { icon: "🔮", title: "Future-Ready Design", description: "Every upcoming project is designed with tomorrow in mind, featuring smart home infrastructure, EV charging provisions, and sustainable building systems." },
  { icon: "💎", title: "Pre-Launch Pricing", description: "Early investors enjoy exclusive pre-launch pricing with significant discounts, ensuring maximum value appreciation as the project progresses." },
  { icon: "🏗️", title: "Innovative Architecture", description: "Our upcoming developments push the boundaries of design with cutting-edge architecture, premium materials, and iconic structures that redefine Dhaka's skyline." },
  { icon: "📱", title: "Smart Home Integration", description: "Every unit comes pre-equipped with smart home technology, allowing you to control lighting, climate, security, and entertainment from your smartphone." },
  { icon: "🌿", title: "Sustainable Living", description: "Green building certifications, rainwater harvesting, solar panels, and energy-efficient systems are built into every upcoming development from day one." },
  { icon: "🤝", title: "Priority Registration", description: "Register early to secure your preferred unit, floor, and orientation. Priority members receive exclusive updates, site visits, and first access to bookings." },
];

function cleanText(text) {
  if (!text) return "";
  return text
    .replace(/&nbsp;|&#160;|&NonBreakingSpace;/g, " ")
    .replace(/<[^>]*>/g, "")
    .trim();
}

export default function UpcomingProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=upcoming-projects`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setProjects(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <style>{`
        .gallery-item:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <PageHeader
        tag="Our Projects"
        title="Upcoming Projects"
        subtitle="Be the first to discover our exciting new developments coming soon to Dhaka's most prestigious addresses."
        breadcrumbs={[{ label: "Upcoming" }]}
      />

    
      {/* Project Cards */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
         
          <div className="row">
            {loading ? (
              <p style={{ color: "#999", textAlign: "center", width: "100%" }}>Loading...</p>
            ) : projects.length > 0 ? (
              projects.map((p, i) => (
                <div className="col-lg-4 col-md-6" key={p.id || i} style={{ marginBottom: "30px" }}>
                  <div
                    style={{
                      border: "1px solid rgba(201,162,39,0.15)",
                      borderRadius: "12px",
                      overflow: "hidden",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        aspectRatio: "16/10",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      {p.thumnail_img && (
                        <img
                          src={p.thumnail_img}
                          alt={p.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      )}
                      <span
                        style={{
                          position: "absolute",
                          top: "16px",
                          left: "16px",
                          padding: "8px 20px",
                          background: "rgba(6,20,36,0.85)",
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          borderRadius: "4px",
                        }}
                      >
                        Upcoming
                      </span>
                    </div>
                    <div style={{ padding: "32px" }}>
                      <h3
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: 600,
                          color: "#061424",
                          marginBottom: "6px",
                        }}
                      >
                        {p.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#C9A227",
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          marginBottom: "10px",
                        }}
                      >
                        {p.description_short || "Upcoming Development"}
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#8A8A85",
                          lineHeight: 1.8,
                          marginBottom: "24px",
                          textAlign: "justify",
                        }}
                      >
                        {cleanText(p.description_full)?.substring(0, 200) || "Details coming soon..."}
                        {(cleanText(p.description_full)?.length > 200) ? "..." : ""}
                      </p>
                      <Link
                        href="/contact"
                        style={{
                          display: "inline-block",
                          padding: "14px 32px",
                          background: "#061424",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: 600,
                          textDecoration: "none",
                          borderRadius: "4px",
                        }}
                      >
                        Register Interest
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: "#999", textAlign: "center", width: "100%" }}>No upcoming projects found.</p>
            )}
          </div>
        </div>
      </section>

    

      {/* Detailed Project Descriptions */}
    

    </>
  );
}
