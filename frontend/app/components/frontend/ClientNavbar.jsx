"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const menuData = [
  {
    label: "Home",
    href: "/",
    children: null,
  },
  {
    label: "About",
    href: "#",
    children: [
      { label: "Company Profile", href: "/about" },
      // { label: "Our Story", href: "/our-story" },
      // { label: "Managing Director's Message", href: "/managing-director" },
      // { label: "Chairman's Message", href: "/chairman-message" },
      // { label: "Director's Message", href: "/directors-message" },
      // { label: "Vision & Mission", href: "/vision-mission" },
      // { label: "Core Values", href: "/core-values" },
      // { label: "Why Stellar Structures", href: "/why-us" },
      { label: "Our Team", href: "/our-team" },
    //  { label: "Career", href: "/career" },
     // { label: "CSR Activities", href: "/csr" },
    ],
  },
  {
    label: "Projects",
    href: "#",
    children: [
      { label: "Construction Management", href: "/projects/construction-management" },
     
      // { label: "Residential Projects", href: "/projects/residential" },
      // { label: "Commercial Projects", href: "/projects/commercial" },
      // { label: "Luxury Apartments", href: "/projects/luxury" },
    ],
  },
  {
    label: "Stellar Homes",
    href: "#",
    children: [
      { label: "Ongoing Projects", href: "/projects/ongoing" },
      { label: "Upcoming Projects", href: "/projects/upcoming" },
      // { label: "Flats", href: "/properties/flats" },
      // { label: "Commercial Space", href: "/properties/commercial" },
      // { label: "Office Space", href: "/properties/offices" },
      // { label: "Shops", href: "/properties/shops" },
      // { label: "Land / Plots", href: "/properties/land" },
      // { label: "Duplex Houses", href: "/properties/duplex" },
      // { label: "Penthouses", href: "/properties/penthouses" },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Property Development", href: "/services/development" },
      { label: "Construction Management", href: "/services/construction" },
      { label: "Interior Design", href: "/services/interior" },
      { label: "Architectural Design", href: "/services/architecture" },
      { label: "Investment Consultancy", href: "/services/investment" },
      ///{ label: "Property Valuation", href: "/services/valuation" },
    ],
  },
  {
    label: "Media",
    href: "#",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Photo Gallery", href: "/gallery/photos" },
    ],
  },
  {
    label: "Contact",
    href: "#",
    children: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book Appointment", href: "/appointment" },
      { label: "Customer Support", href: "/support" },
    ],
  },
  {
    label: "Login",
    href: "#",
    children: [
      { label: "Landowner Login", href: "/login" },
      { label: "Customer Login", href: "/login" },
    ],
  },
];

export default function ClientNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const navRef = useRef(null);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isChildActive = (children) => {
    return children?.some((child) => pathname.startsWith(child.href));
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    if (desktopOpen === null) return;
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setDesktopOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [desktopOpen]);

  // Cleanup hover timeout on unmount
  useEffect(() => {
    return () => clearTimeout(hoverTimeout.current);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleDesktop = (label) => {
    setDesktopOpen(desktopOpen === label ? null : label);
  };

  const hoverTimeout = useRef(null);

  const handleMouseEnter = (label) => {
    clearTimeout(hoverTimeout.current);
    setDesktopOpen(label);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setDesktopOpen(null);
    }, 150);
  };

  const toggleMobile = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div>
      <header className="header sticky-bar" style={{ zIndex: 1000 }}>
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" href="/">
                  <img
                    alt="Stellar Structures Limited"
                    src="/frontend_theme/assets/imgs/template/logo.png"
                    
                  />
                </Link>
              </div>
              <div className="header-nav">
                {/* Desktop Menu */}
                <nav className="nav-main-menu d-none d-xl-block" ref={navRef}>
                  <ul className="main-menu">
                    {menuData.map((item, index) => (
                      <li key={index} className={desktopOpen === item.label ? "active" : ""} onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                        {item.children ? (
                          <>
                            <a
                              href="#"
                              className={isChildActive(item.children) ? "active" : ""}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                              {item.label}{" "}
                              <i className="fi fi-rr-angle-small-down" style={{ transition: "transform 0.2s", transform: desktopOpen === item.label ? "rotate(180deg)" : "rotate(0)" }}></i>
                            </a>
                            <ul
                              className="sub-menu"
                              style={{
                                opacity: desktopOpen === item.label ? 1 : 0,
                                visibility: desktopOpen === item.label ? "visible" : "hidden",
                                transform: desktopOpen === item.label ? "translateY(0)" : "translateY(8px)",
                                transition: "all 0.2s ease",
                                pointerEvents: desktopOpen === item.label ? "auto" : "none",
                                ...(item.label === "Login" ? { minWidth: "180px", width: "180px" } : {}),
                              }}
                            >
                              {item.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <Link
                                    className={isActive(child.href) ? "active" : ""}
                                    href={child.href}
                                    onClick={() => setDesktopOpen(null)}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <Link
                            className={isActive(item.href) ? "active" : ""}
                            href={item.href}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Burger Icon */}
                <div
                  className={`burger-icon burger-icon-white ${mobileOpen ? "burger-open" : ""}`}
                  onClick={() => setMobileOpen(!mobileOpen)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 9998,
          }}
        />
      )}

      {/* Mobile Menu */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: mobileOpen ? 0 : "-100%",
          width: "320px",
          maxWidth: "85vw",
          height: "100vh",
          background: "#061424",
          zIndex: 9999,
          overflowY: "auto",
          transition: "right 0.3s ease",
          padding: "80px 0 40px",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            background: "rgba(255,255,255,0.1)",
            border: "none",
            borderRadius: "50%",
            color: "#fff",
            fontSize: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          &#10005;
        </button>

        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {menuData.map((item, index) => (
              <li key={index}>
                {item.children ? (
                  <>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleMobile(item.label);
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "14px 28px",
                        color: isChildActive(item.children) || openDropdown === item.label ? "#C9A227" : "#fff",
                        fontSize: "16px",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {item.label}
                      <i
                        className="fi fi-rr-angle-small-down"
                        style={{
                          fontSize: "14px",
                          transition: "transform 0.3s",
                          transform: openDropdown === item.label ? "rotate(180deg)" : "rotate(0)",
                        }}
                      ></i>
                    </a>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        maxHeight: openDropdown === item.label ? "500px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                              display: "block",
                              padding: "12px 28px 12px 44px",
                              color: isActive(child.href) ? "#C9A227" : "rgba(255,255,255,0.55)",
                              fontSize: "14px",
                              textDecoration: "none",
                              transition: "color 0.2s",
                              borderBottom: "1px solid rgba(255,255,255,0.03)",
                            }}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      padding: "14px 28px",
                      color: isActive(item.href) ? "#C9A227" : "#fff",
                      fontSize: "16px",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ padding: "24px 28px", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "16px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            &copy; {new Date().getFullYear()} Stellar Structures Limited
          </p>
        </div>
      </div>

      <style>{`
        .burger-open .burger-icon-top {
          transform: rotate(45deg) translate(5px, 5px) !important;
        }
        .burger-open .burger-icon-mid {
          opacity: 0 !important;
        }
        .burger-open .burger-icon-bottom {
          transform: rotate(-45deg) translate(6px, -6px) !important;
        }
      `}</style>
    </div>
  );
}
