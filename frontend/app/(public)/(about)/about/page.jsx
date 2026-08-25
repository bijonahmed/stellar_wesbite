"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";

export default function AboutPage() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching about content...");
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=company-profile`)
      .then((res) => {
        console.log("API Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("API Response data:", data);
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

  const paragraphs = post?.description_full
    ? post.description_full
        .split(/\n\n|<\/p>\s*<p[^>]*>|<br\s*\/?>/)
        .map((p) => p        .replace(/&nbsp;|&#160;|&NonBreakingSpace;/g, " ")
        .replace(/<[^>]*>/g, "").trim())
        .filter(Boolean)
    : [];

  return (
    <>
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
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  &ldquo;
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  {loading ? (
                    <p style={{ color: "#999", textAlign: "center", fontSize: "18px" }}>Loading...</p>
                  ) : paragraphs.length > 0 ? (
                    paragraphs.map((text, i) => (
                      <p
                        key={i}
                        style={{
                          color: "#1a1a1a",
                          fontSize: "clamp(16px, 1.5vw, 19px)",
                          lineHeight: 2,
                          textAlign: "justify",
                          marginBottom: i === paragraphs.length - 1 ? "0" : "28px",
                        }}
                      >
                        {text}
                      </p>
                    ))
                  ) : (
                    <p style={{ color: "#999", textAlign: "center", fontSize: "18px" }}>
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
