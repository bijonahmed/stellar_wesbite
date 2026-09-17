"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";

function normalizeHtml(html) {
  if (!html) return "";
  return html
    .replace(/<br\s*\/?>\s*<br\s*\/?>/g, "<br/>")
    .replace(/<br\s*\/?>\s*<br\s*\/?>/g, "<br/>")
    .replace(/<br\s*\/?>\s*<br\s*\/?>/g, "<br/>")
    .replace(/<p>\s*&nbsp;\s*<\/p>/g, "")
    .replace(/<p>\s*<\/p>/g, "")
    .replace(/\n\s*\n/g, "\n")
    .trim();
}

export default function AboutContent() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=company-profile`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data.length > 0) {
          setPost(data.data[0]);
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
        .about-desc p { margin: 0 0 28px; }
        .about-desc p:last-child { margin-bottom: 0; }
        .about-desc strong, .about-desc b { font-weight: 700; color: #061424; }
        .about-desc em { font-style: italic; }
        .about-desc br { display: inline; }
        .about-desc ul, .about-desc ol { margin: 8px 0; padding-left: 20px; }
        .about-desc li { margin-bottom: 4px; }
        .about-desc h1, .about-desc h2, .about-desc h3, .about-desc h4 {
          font-family: 'Chivo', sans-serif;
          color: #061424;
          margin: 16px 0 12px;
        }
      `}</style>

      <PageHeader
        tag="About Us"
        title={post?.name || "About Stellar Structures"}
        subtitle="Building Bangladesh future through quality, transparency, and digital innovation"
        breadcrumbs={[{ label: "About" }, { label: "About Us" }]}
      />

      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11">
              <div
                style={{
                  position: "relative",
                  background: "#faf9f6",
                  borderRadius: "16px",
                  padding: "clamp(18px, 6vw, 80px)",
                  border: "1px solid rgba(201,162,39,0.15)",
                  boxShadow: "0 4px 40px rgba(6,20,36,0.04)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "32px",
                    left: "clamp(32px, 5vw, 64px)",
                    fontSize: "clamp(80px, 10vw, 140px)",
                    color: "#C9A227",
                    opacity: 0.08,
                    fontFamily: "'Chivo', sans-serif",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  &ldquo;
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  {loading ? (
                    <div style={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
                      <div style={{ width: "40px", height: "40px", border: "3px solid #e0e0e0", borderTopColor: "#C9A227", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </div>
                  ) : post?.description_full ? (
                    <div
                      className="about-desc"
                      style={{
                        fontSize: "clamp(16px, 1.5vw, 19px)",
                        color: "#1a1a1a",
                        lineHeight: 2,
                        fontFamily: "'Chivo', sans-serif",
                        textAlign: "justify",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: normalizeHtml(post.description_full),
                      }}
                    />
                  ) : (
                    <p style={{ color: "#999", textAlign: "center", fontSize: "18px", fontFamily: "'Chivo', sans-serif" }}>
                      Content coming soon...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
