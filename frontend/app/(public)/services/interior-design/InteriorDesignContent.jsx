"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";

function cleanText(text) {
  if (!text) return "";
  return text
    .replace(/&nbsp;|&#160;|&NonBreakingSpace;/g, " ")
    .replace(/<[^>]*>/g, "")
    .trim();
}

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

export default function InteriorDesignContent() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=interior-design`)
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
        .project-desc p { margin: 0 0 12px; }
        .project-desc p:last-child { margin-bottom: 0; }
        .project-desc strong, .project-desc b { font-weight: 700; color: #061424; }
        .project-desc em { font-style: italic; }
        .project-desc br { display: inline; }
        .project-desc ul, .project-desc ol { margin: 8px 0; padding-left: 20px; }
        .project-desc li { margin-bottom: 4px; }
        .pd-item { border-bottom: 1px solid #eee; }
        .pd-item:last-child { border-bottom: none; }
      `}</style>

      <PageHeader
        tag=""
        title="Interior Design"
        subtitle="Discover our exquisite interior design solutions that transform spaces into elegant and functional environments."
        breadcrumbs={[{ label: "Interior Design" }]}
      />

      <section style={{ padding: "clamp(50px, 2vw, 90px) 0", background: "#fff" }}>
        <div className="container" style={{ margin: "0 auto", padding: "0 20px" }}>
          {loading ? (
            <div style={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
              <div style={{ width: "40px", height: "40px", border: "3px solid #e0e0e0", borderTopColor: "#C9A227", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : projects.length > 0 ? (
            projects.map((p, i) => (
              <div
                key={p.id || i}
                className="pd-item"
                style={{ padding: "clamp(30px, 4vw, 0px) 0" }}
              >
               
                <div
                  className="project-desc"
                  style={{
                    fontSize: "18px",
                    color: "#555",
                    fontFamily: "'Chivo', sans-serif",
                    lineHeight: 1.9,
                    textAlign: "justify",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: normalizeHtml(p.description_full || "<p>Details coming soon...</p>"),
                  }}
                />
              </div>
            ))
          ) : (
            <p style={{ color: "#999", textAlign: "center", fontFamily: "'Chivo', sans-serif", fontSize: "18px", padding: "60px 0" }}>
              No interior design projects found.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
