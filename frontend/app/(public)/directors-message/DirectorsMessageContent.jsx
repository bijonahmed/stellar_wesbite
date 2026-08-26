"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../components/frontend/PageElements/PageHeader";
import LeadershipMessage from "../../components/frontend/PageElements/LeadershipMessage";

export default function DirectorsMessageContent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=directors-message`)
      .then((res) => res.json())
      .then((result) => {
        if (result.success && result.data.length > 0) {
          const post = result.data[0];
          setData({
            tag: "Leadership",
            title: post.name || "Directors' Profile",
            subtitle: "Meet the visionary leaders behind Stellar Structures Limited — dedicated to excellence in structural engineering, architecture, and real estate development.",
            breadcrumbs: [{ label: "About" }, { label: "Directors' Profile" }],
            items: [
              {
                name: post.name || "Directors",
                degree: "",
                title: "Director",
                experience: "",
                image: post.thumnail_img || "",
                bio: post.description_full
                  ? post.description_full.replace(/<[^>]*>/g, "").replace(/&nbsp;|&#160;/g, " ").trim()
                  : "",
              },
            ],
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
          title="Directors' Profile"
          subtitle="Meet the visionary leaders behind Stellar Structures Limited — dedicated to excellence in structural engineering, architecture, and real estate development."
          breadcrumbs={[{ label: "About" }, { label: "Directors' Profile" }]}
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
          title="Directors' Profile"
          subtitle="Meet the visionary leaders behind Stellar Structures Limited — dedicated to excellence in structural engineering, architecture, and real estate development."
          breadcrumbs={[{ label: "About" }, { label: "Directors' Profile" }]}
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
