"use client"; // must be client for localStorage and router

import Script from "next/script";
import AdminNavbar from "../components/admin/AdminNavbar";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminFooter from "../components/admin/AdminFooter";
import { AuthProvider } from "../context/AuthContext";
import AdminAssets from "../components/admin/AdminAssets";
import { useState, useEffect } from "react"; 
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function AdminLayout({ children }) {

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");  
    if (!token) {
      router.replace("/login");  
    } else {
      setLoading(false);  
    }
  }, [router]);

  if (loading) return <p>Loading...</p>;  

  return (

    <AuthProvider>
      <div className="app-wrapper">
        <style>{`
          .app-wrapper .content-wrapper {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
          }
          .app-wrapper .content-wrapper textarea.form-control {
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 10px 14px;
          }
          .app-wrapper .content-wrapper textarea.form-control:focus {
            border-color: #667eea;
            box-shadow: 0 0 0 0.2rem rgba(102,126,234,0.25);
          }
        `}</style>
        <AdminAssets />
        <AdminNavbar />
        <AdminSidebar />
        <div className="content-wrapper">
          {children}
        </div>
        <AdminFooter />
      </div>
    </AuthProvider>

  );
}