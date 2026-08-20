"use client";

import { useState } from "react";
import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Head Office",
    lines: ["The Laureate, Level # C5-C7, House # 56, Road # 11, Block # F, Banani-11, Dhaka, Bangladesh, 1213"],
    link: "https://maps.google.com/?q=Gulshan-2+Dhaka",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    lines: ["# 58814651, 58814692"],
   // link: "tel:+880288345678",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    lines: ["info@stellarstructuresbd.com", "sales@stellarstructuresbd.com"],
    link: "mailto:info@stellarstructuresbd.com",
  },
 
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    border: "1px solid #EFEFED",
    background: "#FAFAF8",
    fontSize: "14px",
    color: "#061424",
    outline: "none",
    fontFamily: "inherit",
    transition: "all 0.25s ease",
  };

  const inputFocus = (e, focus) => {
    e.target.style.borderColor = focus ? "#C9A227" : "#EFEFED";
    e.target.style.background = focus ? "#fff" : "#FAFAF8";
    e.target.style.boxShadow = focus ? "0 0 0 3px rgba(201,162,39,0.08)" : "none";
  };

  return (
    <>
      <PageHeader
        tag="Contact"
        title="Get In Touch"
        subtitle="Have a question about our projects, pricing, or booking process? We'd love to hear from you. Our team is ready to help."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* Contact Info Cards */}
      <section style={{ padding: "clamp(32px, 5vw, 64px) 0 0" }}>
        <div className="container">
          <div className="row" style={{ margin: 0 }}>
            {contactInfo.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i} style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    padding: "28px 24px",
                    background: "#fff",
                    border: "1px solid #EFEFED",
                    height: "100%",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 16px 48px rgba(6,20,36,0.06)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.querySelector(".ci-icon").style.background = "#C9A227";
                    e.currentTarget.querySelector(".ci-icon").style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#EFEFED";
                    e.currentTarget.querySelector(".ci-icon").style.background = "rgba(201,162,39,0.08)";
                    e.currentTarget.querySelector(".ci-icon").style.color = "#C9A227";
                  }}
                >
                  <div className="ci-icon" style={{ width: "48px", height: "48px", background: "rgba(201,162,39,0.08)", color: "#C9A227", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", transition: "all 0.3s ease" }}>
                    {item.icon}
                  </div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 1.5vw, 1.15rem)", fontWeight: 600, color: "#061424", marginBottom: "10px" }}>
                    {item.label}
                  </h4>
                  {item.lines.map((line, j) => (
                    item.link ? (
                      <a key={j} href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel={item.link.startsWith("http") ? "noreferrer" : undefined} style={{ display: "block", fontSize: "13.5px", color: "#8A8A85", textDecoration: "none", lineHeight: 1.6, marginBottom: "2px", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.target.style.color = "#C9A227")}
                        onMouseLeave={(e) => (e.target.style.color = "#8A8A85")}
                      >{line}</a>
                    ) : (
                      <p key={j} style={{ fontSize: "13.5px", color: "#8A8A85", lineHeight: 1.6, margin: 0 }}>{line}</p>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map Section */}
      <section style={{ padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div className="container">
          <div className="row" style={{ margin: 0 }}>
            {/* Form */}
            <div className="col-lg-7" style={{ marginBottom: "40px" }}>
              <div style={{ marginBottom: "32px" }}>
                <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Send a Message</p>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 600, color: "#061424", marginBottom: "12px" }}>
                  Let&apos;s Start a Conversation
                </h2>
                <p style={{ fontSize: "14px", color: "#8A8A85", lineHeight: 1.7 }}>
                  Fill in the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {status === "success" && (
                <div style={{ padding: "14px 18px", background: "#F0FDF4", border: "1px solid #BBF7D0", color: "#166534", fontSize: "14px", fontWeight: 500, marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  Your message has been sent successfully. We&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div style={{ padding: "14px 18px", background: "#FEF2F2", border: "1px solid #FECACA", color: "#991B1B", fontSize: "14px", fontWeight: 500, marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row" style={{ margin: 0 }}>
                  <div className="col-md-6" style={{ padding: 0, paddingRight: "12px", marginBottom: "16px" }}>
                    <input type="text" name="name" required placeholder="Full Name *" value={formData.name} onChange={handleChange} onFocus={(e) => inputFocus(e, true)} onBlur={(e) => inputFocus(e, false)} style={inputStyle} />
                  </div>
                  <div className="col-md-6" style={{ padding: 0, paddingLeft: "12px", marginBottom: "16px" }}>
                    <input type="email" name="email" required placeholder="Email Address *" value={formData.email} onChange={handleChange} onFocus={(e) => inputFocus(e, true)} onBlur={(e) => inputFocus(e, false)} style={inputStyle} />
                  </div>
                  <div className="col-md-6" style={{ padding: 0, paddingRight: "12px", marginBottom: "16px" }}>
                    <input type="tel" name="phone" required placeholder="Phone Number *" value={formData.phone} onChange={handleChange} onFocus={(e) => inputFocus(e, true)} onBlur={(e) => inputFocus(e, false)} style={inputStyle} />
                  </div>
                  <div className="col-md-6" style={{ padding: 0, paddingLeft: "12px", marginBottom: "16px" }}>
                    <input type="text" name="subject" required placeholder="Subject *" value={formData.subject} onChange={handleChange} onFocus={(e) => inputFocus(e, true)} onBlur={(e) => inputFocus(e, false)} style={inputStyle} />
                  </div>
                </div>
                <textarea name="message" required rows={6} placeholder="Tell us about your inquiry... *" value={formData.message} onChange={handleChange} onFocus={(e) => inputFocus(e, true)} onBlur={(e) => inputFocus(e, false)} style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }} />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 36px",
                    background: status === "loading" ? "#8A8A85" : "#C9A227",
                    color: "#fff",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.3s ease",
                    marginTop: "8px",
                  }}
                  onMouseEnter={(e) => { if (status !== "loading") { e.currentTarget.style.background = "#061424"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                  onMouseLeave={(e) => { if (status !== "loading") { e.currentTarget.style.background = "#C9A227"; e.currentTarget.style.transform = "translateY(0)"; } }}
                >
                  {status === "loading" ? (
                    <>Sending... <span style={{ display: "inline-block", animation: "spin 0.8s linear infinite" }}>&#8635;</span></>
                  ) : (
                    <>Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="col-lg-5">
              <div style={{ position: "relative", overflow: "hidden", border: "1px solid #EFEFED", height: "100%", minHeight: "480px" }}>
                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=800&height=448&hl=en&q=House No 396,  Road 29 New DOHS, Mohakhali&t=&z=16&ie=UTF8&iwloc=B&output=embed" /><a href="https://embed-googlemap.com">google maps embed</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;width:100%;height:448px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:448px;}.gmap_iframe {height:448px!important;}" }} /></div>

                {/* Map overlay label */}
                <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "#fff", padding: "10px 16px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: "10px", zIndex: 5, pointerEvents: "none" }}>
                  <div style={{ width: "32px", height: "32px", background: "#C9A227", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: "#061424", margin: 0 }}>Stellar Structures</p>
                    <p style={{ fontSize: "11px", color: "#8A8A85", margin: 0 }}>Gulshan-2, Dhaka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Find Your Dream Home?"
        subtitle="Schedule a visit to our sales gallery or speak with our property consultants today."
        primaryBtn={{ label: "Schedule Site Visit", href: "/site-visit" }}
        secondaryBtn={{ label: "View Projects", href: "/projects" }}
      />

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
