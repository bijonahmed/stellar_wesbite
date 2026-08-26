"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

const CACHE_KEY = "stellar_nav_menu";
const CACHE_TTL = 60 * 60 * 1000;

function getCachedMenu() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function setCachedMenu(data) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {}
}

const fallbackMenu = [
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
      { label: "Our Team", href: "/our-team" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: null,
  },
  {
    label: "Contact",
    href: "/contact",
    children: null,
  },
];

export default function ClientNavbar({ initialMenu = [] }) {
  const pathname = usePathname();
  const { isLoggedIn, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [desktopSubOpen, setDesktopSubOpen] = useState(null);
  const navRef = useRef(null);
  const hoverTimeout = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [dynamicMenu, setDynamicMenu] = useState(
    initialMenu.length > 0 ? initialMenu : fallbackMenu
  );

  useEffect(() => {
    setMounted(true);
    const cached = getCachedMenu();
    if (cached && cached.length > 0) {
      setDynamicMenu(cached);
    }
    fetch(`${process.env.NEXT_PUBLIC_API_BASE}/public/getNavbarMenu`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setCachedMenu(data.data);
          setDynamicMenu(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const baseMenuData = dynamicMenu;

  const filteredMenuData = (items) =>
    items.filter((item) => item.label !== "Blog");

  const menuData =
    mounted && isLoggedIn
      ? filteredMenuData([
          ...baseMenuData,
          {
            label: "My Portal",
            href: "/myportal",
            children: [
              { label: "Account Information", href: "/myportal" },
              { label: "Change Password", href: "/changepassword" },
              { label: "My Documents", href: "/mydocuments" },
            ],
          },
          {
            label: "Logout",
            href: "#",
            children: null,
            isLogout: true,
          },
        ])
      : filteredMenuData([
          ...baseMenuData,
          {
            label: "Login",
            href: "#",
            children: [
              { label: "Landowner Login", href: "/login" },
              { label: "Buyer Login", href: "/login" },
            ],
          },
        ]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isChildActive = (children) => {
    return children?.some(
      (child) =>
        pathname.startsWith(child.href) ||
        (child.children && isChildActive(child.children))
    );
  };

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setDesktopSubOpen(null);
    setMobileSubOpen(null);
  }, [pathname]);

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

  useEffect(() => {
    return () => clearTimeout(hoverTimeout.current);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

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

  const toggleMobileSub = (label) => {
    setMobileSubOpen(mobileSubOpen === label ? null : label);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setMobileOpen(false);
    setDesktopOpen(null);
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
                <nav
                  className="nav-main-menu d-none d-xl-block"
                  ref={navRef}
                >
                  <ul className="main-menu">
                    {menuData.map((item, index) => (
                      <li
                        key={index}
                        className={
                          desktopOpen === item.label ? "active" : ""
                        }
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.children ? (
                          <>
                            <a
                              href="#"
                              className={
                                isChildActive(item.children) ? "active" : ""
                              }
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                              {item.label}{" "}
                              <i
                                className="fi fi-rr-angle-small-down"
                                style={{
                                  transition: "transform 0.2s",
                                  transform:
                                    desktopOpen === item.label
                                      ? "rotate(180deg)"
                                      : "rotate(0)",
                                }}
                              ></i>
                            </a>
                            <ul
                              className="sub-menu"
                              style={{
                                opacity:
                                  desktopOpen === item.label ? 1 : 0,
                                visibility:
                                  desktopOpen === item.label
                                    ? "visible"
                                    : "hidden",
                                transform:
                                  desktopOpen === item.label
                                    ? "translateY(0)"
                                    : "translateY(8px)",
                                transition: "all 0.2s ease",
                                pointerEvents:
                                  desktopOpen === item.label
                                    ? "auto"
                                    : "none",
                              }}
                            >
                              {item.children.map((child, childIndex) => (
                                <li
                                  key={childIndex}
                                  className={
                                    child.children ? "has-children" : ""
                                  }
                                  onMouseEnter={() =>
                                    child.children &&
                                    setDesktopSubOpen(child.label)
                                  }
                                  onMouseLeave={() =>
                                    child.children &&
                                    setDesktopSubOpen(null)
                                  }
                                >
                                  {child.children ? (
                                    <>
                                      <a
                                        href="#"
                                        className={
                                          isActive(child.href) ||
                                          isChildActive(child.children)
                                            ? "active"
                                            : ""
                                        }
                                        onClick={(e) => {
                                          e.preventDefault();
                                          e.stopPropagation();
                                        }}
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        {child.label}
                                        <i
                                          className="fi fi-rr-angle-small-right"
                                          style={{
                                            fontSize: "10px",
                                            marginLeft: "4px",
                                          }}
                                        ></i>
                                      </a>
                                      <ul
                                        className="sub-menu sub-menu-nested"
                                        style={{
                                          opacity:
                                            desktopSubOpen === child.label
                                              ? 1
                                              : 0,
                                          visibility:
                                            desktopSubOpen === child.label
                                              ? "visible"
                                              : "hidden",
                                          transform:
                                            desktopSubOpen === child.label
                                              ? "translateY(0)"
                                              : "translateY(8px)",
                                          transition: "all 0.2s ease",
                                          pointerEvents:
                                            desktopSubOpen === child.label
                                              ? "auto"
                                              : "none",
                                          left: "100%",
                                          top: 0,
                                          position: "absolute",
                                          minWidth: "180px",
                                        }}
                                      >
                                        {child.children.map(
                                          (subChild, subIndex) => (
                                            <li key={subIndex}>
                                              <Link
                                                className={
                                                  isActive(subChild.href)
                                                    ? "active"
                                                    : ""
                                                }
                                                href={subChild.href}
                                                onClick={() =>
                                                  setDesktopOpen(null)
                                                }
                                              >
                                                {subChild.label}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </>
                                  ) : (
                                    <Link
                                      className={
                                        isActive(child.href)
                                          ? "active"
                                          : ""
                                      }
                                      href={child.href}
                                      onClick={() =>
                                        setDesktopOpen(null)
                                      }
                                    >
                                      {child.label}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : item.isLogout ? (
                          <a
                            href="#"
                            onClick={handleLogout}
                            style={{ cursor: "pointer" }}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            className={
                              isActive(item.href) ? "active" : ""
                            }
                            href={item.href}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div
                  className={`burger-icon burger-icon-white ${
                    mobileOpen ? "burger-open" : ""
                  }`}
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
                        color:
                          isChildActive(item.children) ||
                          openDropdown === item.label
                            ? "#C9A227"
                            : "#fff",
                        fontSize: "18px",
                        fontFamily: "'Chivo', sans-serif",
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
                          transform:
                            openDropdown === item.label
                              ? "rotate(180deg)"
                              : "rotate(0)",
                        }}
                      ></i>
                    </a>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        maxHeight:
                          openDropdown === item.label ? "1000px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          {child.children ? (
                            <>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleMobileSub(child.label);
                                }}
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  padding: "12px 28px 12px 44px",
                                  color:
                                    isActive(child.href) ||
                                    isChildActive(child.children) ||
                                    mobileSubOpen === child.label
                                      ? "#C9A227"
                                      : "rgba(255,255,255,0.55)",
                                  fontSize: "18px",
                                  fontFamily: "'Chivo', sans-serif",
                                  textDecoration: "none",
                                  transition: "color 0.2s",
                                  borderBottom:
                                    "1px solid rgba(255,255,255,0.03)",
                                }}
                              >
                                {child.label}
                                <i
                                  className="fi fi-rr-angle-small-down"
                                  style={{
                                    fontSize: "12px",
                                    transition: "transform 0.3s",
                                    transform:
                                      mobileSubOpen === child.label
                                        ? "rotate(180deg)"
                                        : "rotate(0)",
                                  }}
                                ></i>
                              </a>
                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: 0,
                                  margin: 0,
                                  maxHeight:
                                    mobileSubOpen === child.label
                                      ? "500px"
                                      : "0",
                                  overflow: "hidden",
                                  transition: "max-height 0.3s ease",
                                  background: "rgba(255,255,255,0.02)",
                                }}
                              >
                                {child.children.map(
                                  (subChild, subIndex) => (
                                    <li key={subIndex}>
                                      <Link
                                        href={subChild.href}
                                        onClick={() =>
                                          setMobileOpen(false)
                                        }
                                        style={{
                                          display: "block",
                                          padding:
                                            "10px 28px 10px 60px",
                                          color: isActive(
                                            subChild.href
                                          )
                                            ? "#C9A227"
                                            : "rgba(255,255,255,0.4)",
                                          fontSize: "18px",
                                          fontFamily: "'Chivo', sans-serif",
                                          textDecoration: "none",
                                          transition: "color 0.2s",
                                          borderBottom:
                                            "1px solid rgba(255,255,255,0.02)",
                                        }}
                                      >
                                        {subChild.label}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            </>
                          ) : (
                              <Link
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                  display: "block",
                                  padding: "12px 28px 12px 44px",
                                  color: isActive(child.href)
                                    ? "#C9A227"
                                    : "rgba(255,255,255,0.55)",
                                  fontSize: "18px",
                                  fontFamily: "'Chivo', sans-serif",
                                  textDecoration: "none",
                                transition: "color 0.2s",
                                borderBottom:
                                  "1px solid rgba(255,255,255,0.03)",
                              }}
                            >
                              {child.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : item.isLogout ? (
                  <a
                    href="#"
                    onClick={handleLogout}
                    style={{
                      display: "block",
                      padding: "14px 28px",
                      color: "#dc3545",
                      fontSize: "18px",
                      fontFamily: "'Chivo', sans-serif",
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      padding: "14px 28px",
                      color: isActive(item.href) ? "#C9A227" : "#fff",
                      fontSize: "18px",
                      fontFamily: "'Chivo', sans-serif",
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

        <div
          style={{
            padding: "24px 28px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: "16px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
              margin: 0,
            }}
          >
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
        .main-menu > li {
          position: relative;
        }
        .sub-menu > li.has-children {
          position: relative;
        }
      `}</style>
    </div>
  );
}
