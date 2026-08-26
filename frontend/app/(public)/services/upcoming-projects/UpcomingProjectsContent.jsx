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

function truncateHtml(html, maxLength) {
  if (!html) return "";
  const text = cleanText(html);
  if (text.length <= maxLength) return html;
  return html.substring(0, maxLength);
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  const descriptionShort = project.description_short || "Upcoming Project";
  const needsTruncation = cleanText(project.description_full || "").length > 500;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.3s ease",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,0,0,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)")}
    >
      <div style={{ width: "100%", height: "clamp(250px, 50vw, 400px)", overflow: "hidden", position: "relative" }}>
        {project.thumnail_img && (
          <img
            src={project.thumnail_img}
            alt={project.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
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
            fontFamily: "'Chivo', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1px",
            borderRadius: "4px",
          }}
        >
          Upcoming
        </span>
      </div>

      <div style={{ padding: "clamp(20px, 4vw, 32px)", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#061424",
            fontFamily: "'Chivo', sans-serif",
            marginBottom: "6px",
            lineHeight: 1.3,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "#C9A227",
            fontFamily: "'Chivo', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            marginBottom: "16px",
          }}
        >
          {descriptionShort}
        </p>
        <div
          className="project-desc"
          style={{
            fontSize: "16px",
            color: "#555",
            fontFamily: "'Chivo', sans-serif",
            lineHeight: 1.8,
            marginBottom: "20px",
            textAlign: "justify",
            flex: 1,
          }}
          dangerouslySetInnerHTML={{
            __html: expanded
              ? normalizeHtml(project.description_full || "<p>Details coming soon...</p>")
              : truncateHtml(normalizeHtml(project.description_full), 500) + (needsTruncation ? "..." : ""),
          }}
        />
        {needsTruncation && (
          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: "#C9A227",
              fontFamily: "'Chivo', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s",
              alignSelf: "flex-start",
            }}
          >
            {expanded ? "Show Less" : "Read More"}
            <span style={{ fontSize: "18px", lineHeight: 1 }}>{expanded ? "−" : "+"}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function UpcomingProjectsContent() {
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
        .project-desc p { margin: 0 0 10px; }
        .project-desc p:last-child { margin-bottom: 0; }
        .project-desc strong { font-weight: 700; color: #061424; }
        .project-desc b { font-weight: 700; color: #061424; }
        .project-desc em { font-style: italic; }
        .project-desc br { display: inline; }
        .project-desc ul, .project-desc ol { margin: 8px 0; padding-left: 20px; }
        .project-desc li { margin-bottom: 4px; }
        .project-desc h1, .project-desc h2, .project-desc h3, .project-desc h4 {
          font-family: 'Chivo', sans-serif;
          color: #061424;
          margin: 12px 0 8px;
        }
        .read-more-btn:hover { color: #a88b1f !important; }
      `}</style>

      <PageHeader
        tag=""
        title="Upcoming Projects"
        subtitle="Be the first to discover our exciting new developments coming soon to Dhaka's most prestigious addresses."
        breadcrumbs={[{ label: "Upcoming" }]}
      />

      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          {loading ? (
            <div style={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "3px solid #e0e0e0",
                  borderTopColor: "#C9A227",
                  borderRadius: "50%",
                  animation: "spin 0.8s linear infinite",
                }}
              />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : projects.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 480px), 1fr))", gap: "30px" }}>
              {projects.map((p, i) => (
                <ProjectCard key={p.id || i} project={p} />
              ))}
            </div>
          ) : (
            <p
              style={{
                color: "#999",
                textAlign: "center",
                fontFamily: "'Chivo', sans-serif",
                fontSize: "16px",
                padding: "60px 0",
              }}
            >
              No upcoming projects found.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
