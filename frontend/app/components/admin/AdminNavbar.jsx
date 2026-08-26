"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
export default function AdminNavbar() {
  const { logout, username, roles } = useAuth();
  const router = useRouter();
  const [open, setOpen] = useState(false); // track dropdown

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
   // router.push("/login");
    window.location.href = "/login";
  };
  
const capitalizeFirst = (value) => {
  if (!value) return "";           // null, undefined, or empty
  const str = String(value);       // convert to string if not already
  return str.charAt(0).toUpperCase() + str.slice(1);
};

  return (
    <nav className="app-header navbar navbar-expand bg-body" style={{ borderBottom: "1px solid #e9ecef", padding: "0 16px" }}>
      <div className="container-fluid" style={{ padding: "0" }}>
        {/* Left side */}
        <ul className="navbar-nav" style={{ alignItems: "center", gap: "4px" }}>
          <li className="nav-item">
            <a
              className="nav-link"
              data-lte-toggle="sidebar"
              href="#"
              role="button"
              style={{ padding: "8px 12px", fontSize: "18px", color: "#6c757d" }}
            >
              <i className="bi bi-list" />
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="/dashboard" className="nav-link" style={{ padding: "8px 14px", fontSize: "14px", fontWeight: 500, color: "#495057", display: "flex", alignItems: "center", gap: "6px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
              </svg>
              Refresh
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="/" className="nav-link" target="_blank" style={{ padding: "8px 14px", fontSize: "14px", fontWeight: 500, color: "#495057", display: "flex", alignItems: "center", gap: "6px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 2 7.5V14a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V7.5a.5.5 0 0 0-.146-.354l-6-6z"/>
              </svg>
              Home 
            </a>
          </li>
        </ul>
        {/* Right side */}
        <ul className="navbar-nav ms-auto" style={{ alignItems: "center" }}>
          {/* User Dropdown */}
          <li
            className={`nav-item dropdown user-menu ${open ? "show" : ""}`}
            onClick={() => setOpen(!open)}
            style={{ position: "relative" }}
          >
            <a href="#" className="nav-link dropdown-toggle" style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 12px", borderRadius: "8px", transition: "background 0.2s" }}>
              <img
                src="/src/assets/img/user2-160x160.jpg"
                className="user-image rounded-circle shadow"
                alt="User Image"
                style={{ width: "32px", height: "32px", objectFit: "cover", border: "2px solid #e9ecef" }}
              />
              <span className="d-none d-md-inline" style={{ fontSize: "14px", fontWeight: 500, color: "#495057" }}>
                {capitalizeFirst(username)}
              </span>
            </a>
            <ul
              className={`dropdown-menu dropdown-menu-lg dropdown-menu-end ${
                open ? "show" : ""
              }`}
              style={{ right: 0, left: "auto", marginTop: "8px", borderRadius: "10px", border: "1px solid #e9ecef", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", minWidth: "180px" }}
            >
              {/*begin::User Image*/}
              <li className="user-header text-bg-primary" style={{ padding: "20px 16px", textAlign: "center", borderRadius: "10px 10px 0 0" }}>
                <img
                  src="/src/assets/img/user2-160x160.jpg"
                  className="rounded-circle shadow"
                  alt="User Image"
                  style={{ width: "60px", height: "60px", marginBottom: "10px" }}
                />
                <p style={{ marginBottom: "2px", fontSize: "15px", fontWeight: 600 }}>
                  {capitalizeFirst(username)}
                </p>
                <small style={{ fontSize: "12px", opacity: 0.85 }}>{capitalizeFirst(roles)}</small>
              </li>
              <li className="user-footer" style={{ display: "flex", justifyContent: "space-between", padding: "12px 16px", gap: "10px" }}>
                <Link href="/profile" className="btn btn-default btn-flat" style={{ flex: 1, fontSize: "13px", fontWeight: 500, borderRadius: "6px", padding: "6px 12px" }}>
                  Profile
                </Link>
                <a
                  href="#"
                  className="btn btn-default btn-flat"
                  onClick={handleLogout}
                  style={{ flex: 1, fontSize: "13px", fontWeight: 500, borderRadius: "6px", padding: "6px 12px" }}
                >
                  Sign out
                </a>
              </li>
              {/*end::Menu Footer*/}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
