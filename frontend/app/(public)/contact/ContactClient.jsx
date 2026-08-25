"use client";

import { useState, useEffect } from "react";
import PageHeader from "../../components/frontend/PageElements/PageHeader";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getSetting`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.settingData) {
          setSettings(data.settingData);
        }
      })
      .catch(() => {});
  }, []);

  const contactInfo = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Head Office",
      lines: [settings?.address || "The Laureate, Level # C5-C7, House # 56, Road # 11, Block # F, Banani-11, Dhaka, Bangladesh, 1213"],
      link: "#",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      lines: [settings?.email || "info@stellarstructuresbd.com"],
      link: settings?.email ? `mailto:${settings.email}` : "mailto:info@stellarstructuresbd.com",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      label: "WhatsApp",
      lines: [settings?.whatsApp ? `+88${settings.whatsApp.replace(/[^0-9]/g, "").replace(/^88/, "")}` : "+88"],
      link: settings?.whatsApp ? `https://wa.me/88${settings.whatsApp.replace(/[^0-9]/g, "").replace(/^88/, "")}` : "#",
    },
  ];

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

              {settings?.whatsApp && (
                <a
                  href={`https://wa.me/88${settings.whatsApp.replace(/[^0-9]/g, "").replace(/^88/, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    padding: "24px 28px",
                    marginBottom: "32px",
                    background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
                    border: "1px solid #bbf7d0",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 16px 48px rgba(37,211,102,0.12)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.borderColor = "#25d366";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#bbf7d0";
                  }}
                >
                  <div style={{
                    width: "64px",
                    height: "64px",
                    minWidth: "64px",
                    background: "#25D366",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
                  }}>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="#fff">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "13px", color: "#16a34a", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "4px", fontFamily: "inherit" }}>
                      Quick Communication
                    </p>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 600, color: "#061424", margin: "0 0 4px 0" }}>
                      Chat with us on WhatsApp
                    </h3>
                    <p style={{ fontSize: "13.5px", color: "#8A8A85", margin: 0, lineHeight: 1.5 }}>
                      +88{settings.whatsApp.replace(/[^0-9]/g, "").replace(/^88/, "")}
                    </p>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ minWidth: "24px" }}>
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              )}


              <form onSubmit={handleSubmit} className="d-none">
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
                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" height="450" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://www.google.com/maps?q=The+Laureate%2C+Level+%23+C5-C7%2C+House+%23+56%2C+Road+%23+11%2C+Block+%23+F%2C+Banani-11%2C+Dhaka%2C+Bangladesh%2C+1213&amp;z=14&amp;t=m&amp;hl=en&amp;output=embed" /><a href="https://www.24meteo.com/">24meteo.com</a></div><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;width:100%;height:450px}.gmap_canvas{overflow:hidden;background:none!important;width:100%;height:450px}.gmap_iframe{width:100%!important;height:450px!important}" }} /></div>

                {/* Map overlay label */}
                <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "#fff", padding: "10px 16px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", gap: "10px", zIndex: 5, pointerEvents: "none" }}>
                  <div style={{ width: "32px", height: "32px", background: "#C9A227", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: 600, color: "#061424", margin: 0 }}>Stellar Structures</p>
                    <p style={{ fontSize: "11px", color: "#8A8A85", margin: 0 }}>Banani-11, Dhaka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </>
  );
}
