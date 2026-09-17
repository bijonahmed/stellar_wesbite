"use client";

import { useEffect, useState } from "react";
import PageHeader from "../../components/frontend/PageElements/PageHeader";

const gold = "#C9A227";
const dark = "#061424";

const passportImgStyle = {
  width: "180px",
  height: "220px",
  objectFit: "cover",
  objectPosition: "top center",
  borderRadius: "8px",
  border: `3px solid ${gold}`,
  boxShadow: "0 8px 24px rgba(6,20,36,0.12)",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "clamp(24px, 4vw, 48px)",
  boxShadow: "0 2px 16px rgba(6,20,36,0.06)",
  border: "1px solid rgba(0,0,0,0.05)",
};

const sectionTitle = {
  color: dark,
  fontSize: "clamp(26px, 3vw, 40px)",
  fontWeight: 700,
  fontFamily: "'Chivo', sans-serif",
  marginBottom: "8px",
};

const sectionTag = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  color: gold,
  fontSize: "13px",
  fontWeight: 700,
  fontFamily: "'Chivo', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "4px",
  marginBottom: "12px",
};

const goldLine = {
  width: "60px",
  height: "3px",
  background: gold,
  margin: "20px 0 28px",
};

const bioStyle = {
  color: "#444",
  fontSize: "clamp(15px, 1.2vw, 16px)",
  lineHeight: 1.9,
  fontFamily: "'Chivo', sans-serif",
  textAlign: "justify",
  margin: 0,
};

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

function PersonImage({ src, name, style }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={{ ...style, display: "block", margin: "0 auto" }}
      />
    );
  }
  return (
    <div
      style={{
        width: "180px",
        height: "220px",
        borderRadius: "8px",
        border: `3px solid ${gold}`,
        background: `linear-gradient(135deg, ${dark}10, ${dark}05)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      <span style={{ fontSize: "48px", color: gold, opacity: 0.3 }}>
        {name?.charAt(0) || "?"}
      </span>
    </div>
  );
}

export default function OurTeamContent() {
  const [chairmanPost, setChairmanPost] = useState(null);
  const [mdPost, setMdPost] = useState(null);
  const [directorsPosts, setDirectorsPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=chairman-message`).then((r) => r.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=managing-director`).then((r) => r.json()),
      fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=directors-message`).then((r) => r.json()),
    ])
      .then(([chairmanData, mdData, directorsData]) => {
        if (chairmanData.success && chairmanData.data.length > 0) {
          setChairmanPost(chairmanData.data[0]);
        }
        if (mdData.success && mdData.data.length > 0) {
          setMdPost(mdData.data[0]);
        }
        if (directorsData.success && directorsData.data.length > 0) {
          setDirectorsPosts(directorsData.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  const chairmanParagraphs = parseParagraphs(chairmanPost?.description_full);
  const mdParagraphs = parseParagraphs(mdPost?.description_full);

  return (
    <>
      <PageHeader
        tag="About Us"
        title="Our Team"
        subtitle="Driving digital innovation and excellence in Bangladesh real estate industry through technology and commitment"
        breadcrumbs={[{ label: "About" }, { label: "Our Team" }]}
      />

      {/* Chairman Section */}
      <section style={{ padding: "clamp(20px, 2vw, 40px) 0", background: "#f8f7f3" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={cardStyle}>
                <div className="row align-items-start g-4">
                  <div className="col-md-auto text-center">
                    <PersonImage
                      src={chairmanPost?.thumnail_img}
                      name={chairmanPost?.name}
                      style={passportImgStyle}
                    />
                    <p
                      style={{
                        color: dark,
                        fontSize: "clamp(16px, 1.5vw, 18px)",
                        fontWeight: 700,
                        fontFamily: "'Chivo', sans-serif",
                        marginTop: "12px",
                        marginBottom: "2px",
                      }}
                    >
                      {chairmanPost?.name || ""}
                    </p>
                    <p
                      style={{
                        color: gold,
                        fontSize: "clamp(12px, 1vw, 14px)",
                        fontWeight: 600,
                        fontFamily: "'Chivo', sans-serif",
                        margin: 0,
                      }}
                    >
                      {chairmanPost?.description_short || "Chairman"}
                    </p>
                    <p>{chairmanPost?.text_1 || ""}</p>
                  </div>

                  <div className="col">
                    <span style={sectionTag}>
                      <span style={{ width: "24px", height: "2px", background: gold }} />
                      Leadership
                    </span>
                    <h2 style={sectionTitle}>Chairman&apos;s Profile</h2>
                    <div style={goldLine} />

                    {loading ? (
                      <div style={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
                        <div style={{ width: "40px", height: "40px", border: "3px solid #e0e0e0", borderTopColor: "#C9A227", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                      </div>
                    ) : chairmanParagraphs.length > 0 ? (
                      chairmanParagraphs.map((para, i) => (
                        <p
                          key={i}
                          style={{
                            ...bioStyle,
                            marginBottom: i === chairmanParagraphs.length - 1 ? "0" : "18px",
                          }}
                        >
                          {para}
                        </p>
                      ))
                    ) : (
                      <p style={{ color: "#999", fontFamily: "'Chivo', sans-serif" }}>Content coming soon...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section style={{ padding: "clamp(20px, 2vw, 40px) 0", background: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={cardStyle}>
                <div className="row align-items-start g-4">
                  <div className="col-md-auto text-center">
                    <PersonImage
                      src={mdPost?.thumnail_img}
                      name={mdPost?.name}
                      style={passportImgStyle}
                    />
                    <p
                      style={{
                        color: dark,
                        fontSize: "clamp(16px, 1.5vw, 18px)",
                        fontWeight: 700,
                        fontFamily: "'Chivo', sans-serif",
                        marginTop: "12px",
                        marginBottom: "2px",
                      }}
                    >
                      {mdPost?.name || ""}
                    </p>
                  
                    <p
                      style={{
                        color: gold,
                        fontSize: "clamp(12px, 1vw, 14px)",
                        fontWeight: 600,
                        fontFamily: "'Chivo', sans-serif",
                        margin: 0,
                      }}
                    >
                      {mdPost?.description_short || "Managing Director"}
                    </p>

                      <p>{mdPost?.text_1 || ""}</p>
                  </div>

                  <div className="col">
                    <span style={sectionTag}>
                      <span style={{ width: "24px", height: "2px", background: gold }} />
                      Leadership
                    </span>

                    <h2 style={sectionTitle}>Managing Director&apos;s Profile</h2>
                    <div style={goldLine} />

                    {loading ? (
                      <div style={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
                        <div style={{ width: "40px", height: "40px", border: "3px solid #e0e0e0", borderTopColor: "#C9A227", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                      </div>
                    ) : mdParagraphs.length > 0 ? (
                      mdParagraphs.map((para, i) => (
                        <p
                          key={i}
                          style={{
                            ...bioStyle,
                            marginBottom: i === mdParagraphs.length - 1 ? "0" : "18px",
                          }}
                        >
                          {para}
                        </p>
                      ))
                    ) : (
                      <p style={{ color: "#999", fontFamily: "'Chivo', sans-serif" }}>Content coming soon...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section style={{ padding: "clamp(20px, 2vw, 40px) 0", background: "#fff" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <span style={sectionTag}>
              <span style={{ width: "32px", height: "2px", background: gold }} />
              Leadership
              <span style={{ width: "32px", height: "2px", background: gold }} />
            </span>
            <h2 style={sectionTitle}>Directors&apos; Profile</h2>
            <div style={{ ...goldLine, margin: "20px auto 0" }} />
          </div>

          <div className="row g-4 justify-content-center">
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", padding: "60px 0", width: "100%" }}>
                <div style={{ width: "40px", height: "40px", border: "3px solid #e0e0e0", borderTopColor: "#C9A227", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </div>
            ) : directorsPosts.length > 0 ? (
              [...directorsPosts].sort((a, b) => (a.id === 18 ? 1 : b.id === 18 ? -1 : 0)).map((director, i) => {
                const directorParagraphs = parseParagraphs(director.description_full);
                return (
                  <div key={i} className="col-lg-10">
                    <div style={cardStyle}>
                      <div className="row align-items-start g-4">
                        <div className="col-md-auto text-center">
                          <PersonImage
                            src={director.thumnail_img}
                            name={director.name}
                            style={passportImgStyle}
                          />
                          <p
                            style={{
                              color: dark,
                              fontSize: "clamp(16px, 1.5vw, 18px)",
                              fontWeight: 700,
                              fontFamily: "'Chivo', sans-serif",
                              marginTop: "12px",
                              marginBottom: "2px",
                            }}
                          >
                            {director.name}
                          </p>
                          <p
                            style={{
                              color: gold,
                              fontSize: "clamp(12px, 1vw, 14px)",
                              fontWeight: 600,
                              fontFamily: "'Chivo', sans-serif",
                              marginBottom: "4px",
                            }}
                          >
                            {/* {director.description_short || "Director"} */}
                          </p>
                          <p>{director?.text_1 || ""}</p>
                        </div>

                        <div className="col">
                          <div style={goldLine} />
                          {directorParagraphs.length > 0 ? (
                            directorParagraphs.map((para, j) => (
                              <p
                                key={j}
                                style={{
                                  ...bioStyle,
                                  marginBottom: j === directorParagraphs.length - 1 ? "0" : "18px",
                                }}
                              >
                                {para}
                              </p>
                            ))
                          ) : (
                            <p style={bioStyle}>{cleanText(director.description_full) || "Bio coming soon..."}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p style={{ color: "#999", textAlign: "center", fontFamily: "'Chivo', sans-serif" }}>Content coming soon...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
