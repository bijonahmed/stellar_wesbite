"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../components/frontend/PageElements/PageHeader";
import LeadershipMessage from "../../components/frontend/PageElements/LeadershipMessage";

export default function ChairmanMessageContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=chairman-message`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success && result.data.length > 0) {
          const post = result.data[0];
          setData({
            tag: "Leadership",
            title: post.name || "Chairman's Profile",
            subtitle: "Delivering premium residential and commercial projects in Dhaka with a reputation built on trust and excellence.",
            breadcrumbs: [{ label: "About" }, { label: "Chairman's Profile" }],
            name: post.name || "Muhammad Fakhrul Haider",
            designation: "Chairman",
            image: post.thumnail_img || "/frontend_theme/assets/imgs/ourteam/fakhrul-haider-haider-chairman.png",
            paragraphs: post.description_full
              ? post.description_full
                  .split(/\n\n|<\/p>\s*<p[^>]*>|<br\s*\/?>/)
                  .map((p) => p.replace(/&nbsp;|&#160;/g, " ").replace(/<[^>]*>/g, "").trim())
                  .filter(Boolean)
              : [],
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <PageHeader
          tag="Leadership"
          title="Chairman's Profile"
          subtitle="Delivering premium residential and commercial projects in Dhaka with a reputation built on trust and excellence."
          breadcrumbs={[{ label: "About" }, { label: "Chairman's Profile" }]}
        />
        <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
              <div style={{ width: "40px", height: "40px", border: "3px solid #e0e0e0", borderTopColor: "#C9A227", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <PageHeader
          tag="Leadership"
          title="Chairman's Profile"
          subtitle="Delivering premium residential and commercial projects in Dhaka with a reputation built on trust and excellence."
          breadcrumbs={[{ label: "About" }, { label: "Chairman's Profile" }]}
        />
        <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
          <div className="container">
            <p style={{ color: "#999", textAlign: "center", fontFamily: "'Chivo', sans-serif", fontSize: "18px", padding: "60px 0" }}>
              Content coming soon...
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        tag={data.tag}
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={data.breadcrumbs}
      />
      <LeadershipMessage data={data} />
    </>
  );
}
