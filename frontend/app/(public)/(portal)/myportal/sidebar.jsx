"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

const navItems = [
  { href: "/myportal", icon: "bi bi-person-circle", label: "My Portal" },
  { href: "/changepassword", icon: "bi bi-shield-lock", label: "Change Password" },
  { href: "/mydocuments", icon: "bi bi-file-earmark-text", label: "My Documents" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const { username } = useAuth();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getNormalized = (p = "") => {
    const noQuery = p.split("?")[0].split("#")[0];
    if (noQuery === "/") return "/";
    return noQuery.replace(/\/+$/, "");
  };

  const current = useMemo(() => getNormalized(pathname || "/"), [pathname]);

  const isActive = (href, { allowSubroutes = true } = {}) => {
    const normHref = getNormalized(href);
    if (normHref === "/") return current === "/";
    if (allowSubroutes) {
      return current === normHref || current.startsWith(normHref + "/");
    }
    return current === normHref;
  };

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } finally {
      router.push("/login");
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  };

  return (
    <aside
      style={{
        border: "none",
        borderRadius: "16px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Profile Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "30px 24px",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 14px",
            border: "3px solid rgba(255,255,255,0.3)",
          }}
        >
          <i className="bi bi-person-fill" style={{ fontSize: "36px" }}></i>
        </div>
        <p style={{ margin: 0, opacity: 0.8, fontSize: "13px", fontWeight: "500" }}>
          Welcome back,
        </p>
        <h5 style={{ margin: "4px 0 0", fontWeight: "700", fontSize: "16px", color: "white" }}>
          {mounted ? username : ""}
        </h5>
      </div>

      {/* Navigation Links */}
      <nav style={{ padding: "12px 0" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 24px",
                    color: active ? "#667eea" : "#495057",
                    fontWeight: active ? "600" : "500",
                    fontSize: "14px",
                    textDecoration: "none",
                    background: active
                      ? "linear-gradient(90deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.05) 100%)"
                      : "transparent",
                    borderLeft: active ? "3px solid #667eea" : "3px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.background = "rgba(102,126,234,0.05)";
                      e.currentTarget.style.color = "#667eea";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#495057";
                    }
                  }}
                >
                  <i
                    className={item.icon}
                    style={{ fontSize: "18px", width: "22px", textAlign: "center" }}
                  ></i>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Divider */}
      <div style={{ height: "1px", background: "#e9ecef", margin: "0 24px" }} />

      {/* Logout */}
      <div style={{ padding: "8px 0 16px" }}>
        <a
          href="#"
          onClick={handleLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 24px",
            color: "#dc3545",
            fontWeight: "500",
            fontSize: "14px",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(220,53,69,0.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          <i className="bi bi-box-arrow-right" style={{ fontSize: "18px", width: "22px", textAlign: "center" }}></i>
          Logout
        </a>
      </div>
    </aside>
  );
}
