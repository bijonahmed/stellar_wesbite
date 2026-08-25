"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";

const ongoingFeatures = [
  { icon: "🏗️", title: "Modern Construction", description: "Built using advanced engineering techniques and premium-grade materials to ensure structural integrity and long-lasting durability." },
  { icon: "📐", title: "Thoughtful Design", description: "Every layout is carefully planned to maximize natural light, ventilation, and usable space for comfortable modern living." },
  { icon: "🏗️", title: "Timely Delivery", description: "We maintain strict project timelines with regular milestone updates, ensuring your investment is delivered on schedule." },
  { icon: "📊", title: "Transparent Updates", description: "Access real-time construction progress reports, site photos, and milestone tracking through our customer portal." },
  { icon: "💰", title: "Flexible Payment Plans", description: "Choose from multiple payment options designed to make premium real estate accessible with manageable installments." },
  { icon: "🏆", title: "Proven Track Record", description: "Backed by a legacy of successfully delivered projects, Stellar Structures guarantees quality you can trust." },
];

function cleanText(text) {
  if (!text) return "";
  return text
    .replace(/&nbsp;|&#160;|&NonBreakingSpace;/g, " ")
    .replace(/<[^>]*>/g, "")
    .trim();
}

function parseParagraphs(text) {
  if (!text) return [];
  return text
    .split(/\n\n|<\/p>\s*<p[^>]*>|<br\s*\/?>/)
    .map((p) => cleanText(p))
    .filter(Boolean);
}

export default function OngoingProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=ongoing-projects`)
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
        title="Ongoing Projects"
        subtitle="Explore our active developments bringing premium living spaces to Dhaka's most prestigious addresses."
        breadcrumbs={[{ label: "Ongoing" }]}
      />

    
      {/* Project Cards */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
         
          <div className="row">
            {loading ? (
              <p style={{ color: "#999", textAlign: "center", width: "100%" }}>Loading...</p>
            ) : projects.length > 0 ? (
              projects.map((p, i) => (
                <div className="col-lg-6 col-md-6" key={p.id || i} style={{ marginBottom: "30px" }}>
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
                          background: "rgba(201,162,39,0.9)",
                          color: "#fff",
                          fontSize: "12px",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          borderRadius: "4px",
                        }}
                      >
                        Ongoing
                      </span>
                    </div>
                    <div style={{ padding: "32px" }}>
                      <h3
                        style={{
                          fontSize: "1.5rem",
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
                        {p.description_short || "Ongoing Development"}
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
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: "#999", textAlign: "center", width: "100%" }}>No ongoing projects found.</p>
            )}
          </div>
        </div>
      </section>


      {/* Detailed Project Descriptions */}
    

      
      {/* Gallery */}
     

    </>
  );
}
