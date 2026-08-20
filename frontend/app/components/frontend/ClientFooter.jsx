"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const footerLinks = [
  {
    title: "About Us",
    links: [
      { label: "Company Profile", href: "/about" },
      { label: "Our Story", href: "/our-story" },
      // { label: "Chairman's Message", href: "/chairman-message" },
      // { label: "Director's Message", href: "/directors-message" },
      // { label: "Managing Director", href: "/managing-director" },
      // { label: "Vision & Mission", href: "/vision-mission" },
      // { label: "Core Values", href: "/core-values" },
      // { label: "Why Stellar Structures", href: "/why-us" },
      // { label: "Our Team", href: "/our-team" },
      // { label: "Career", href: "/career" },
      // { label: "CSR Activities", href: "/csr" },
    ],
  },
  {
    title: "Projects",
    links: [
       { label: "Construction Management", href: "/projects/construction-management" },
    ],
  },

   {
    title: "Stellar Homes Development",
    links: [
      { label: "Ongoing Projects", href: "/projects/ongoing" },
      { label: "Upcoming Projects", href: "/projects/upcoming" },
    ],
  },


  {
    title: "Services",
    links: [
      { label: "Property Development", href: "/services/development" },
      { label: "Construction Management", href: "/services/construction" },
      { label: "Interior Design", href: "/services/interior" },
      { label: "Architectural Design", href: "/services/architecture" },
      { label: "Investment Consultancy", href: "/services/investment" },
      { label: "Property Valuation", href: "/services/valuation" },
    ],
  },
  {
    title: "Media & Support",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Photo Gallery", href: "/gallery/photos" },
    //  { label: "Events", href: "/events" },
      { label: "FAQ", href: "/faq" },
      { label: "Customer Support", href: "/support" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book Appointment", href: "/appointment" },
      { label: "Schedule Site Visit", href: "/site-visit" },
      { label: "Booking Process", href: "/booking-process" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
 
];

export default function ClientFooter() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer style={{ background: "#061424", color: "rgba(255,255,255,0.7)", paddingTop: "clamp(48px, 6vw, 80px)" }}>
        <div className="container">
      

          {/* Link columns */}
          <div className="row">
            {footerLinks.map((col, i) => (
              <div className="col-lg-2 col-md-4 col-sm-6 col-6" key={i} style={{ marginBottom: "32px", flex: footerLinks.length === 7 ? "0 0 auto" : undefined }}>
                <h5 style={{ fontSize: "13px", fontWeight: 600, color: "#fff", marginBottom: "16px" }}>{col.title}</h5>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.links.map((link, j) => (
                    <li key={j} style={{ marginBottom: "8px" }}>
                      <Link
                        href={link.href}
                        style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s", lineHeight: 1.8 }}
                        onMouseEnter={(e) => (e.target.style.color = "#C9A227")}
                        onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 0" }}>
          <div className="container">
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-6">
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", margin: 0 }}>
                  &copy; {new Date().getFullYear()} Stellar Structures Limited. All rights reserved.
                </p>
              </div>
              <div className="col-md-6" style={{ textAlign: "right" }}>
                {/* <div style={{ display: "inline-flex", gap: "12px" }}>
                  <Link href="/terms" style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
                    onMouseEnter={(e) => (e.target.style.color = "#C9A227")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.35)")}
                  >Terms</Link>
                 
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "44px",
            height: "44px",
            background: "#C9A227",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            zIndex: 999,
            boxShadow: "0 4px 20px rgba(201,162,39,0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#061424"; e.currentTarget.style.transform = "translateY(-3px)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A227"; e.currentTarget.style.transform = "translateY(0)"; }}
        >
          &#8593;
        </button>
      )}
    </>
  );
}
