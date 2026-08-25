"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import Sidebar from "../myportal/sidebar";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [updating, setUpdating] = useState(false);
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    document.title = "Change Password";
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New Password and Confirm Password do not match");
      return;
    }

    setUpdating(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/customerChangePassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentPassword: formData.currentPassword,
            newPassword: formData.newPassword,
            newPassword_confirmation: formData.confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Password updated successfully!");
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        toast.error(data.message || "Failed to update password");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <main className="ps-page--my-account">
      <div style={{ background: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
        <div className="container">
          <ul style={{ display: "flex", listStyle: "none", padding: "12px 0", margin: 0, alignItems: "center", gap: "8px" }}>
            <li>
              <Link href="/" style={{ color: "#667eea", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Home</Link>
            </li>
            <li style={{ color: "#6c757d", fontSize: "14px" }}>/</li>
            <li>
              <Link href="/myportal" style={{ color: "#667eea", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Account</Link>
            </li>
            <li style={{ color: "#6c757d", fontSize: "14px" }}>/</li>
            <li style={{ color: "#495057", fontSize: "14px", fontWeight: "600" }}>Change Password</li>
          </ul>
        </div>
      </div>
      <section className="ps-section--account">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ps-section__left">
                <Sidebar />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="ps-section__right">
                <Toaster position="top-right" />

                <div
                  className="card mb-4"
                  style={{
                    border: "none",
                    borderRadius: "16px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                      padding: "30px",
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
                        margin: "0 auto 15px",
                        border: "3px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <i className="bi bi-shield-lock-fill" style={{ fontSize: "36px" }}></i>
                    </div>
                    <h4 style={{ margin: 0, fontWeight: "700", color: "white" }}>Change Password</h4>
                    <p style={{ margin: "5px 0 0", opacity: 0.85, fontSize: "14px" }}>
                      Keep your account secure with a strong password
                    </p>
                  </div>

                  {/* Form */}
                  <div className="card-body" style={{ padding: "24px" }}>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Current Password</label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter current password"
                          value={formData.currentPassword}
                          onChange={(e) =>
                            setFormData({ ...formData, currentPassword: e.target.value })
                          }
                          style={{ borderRadius: "10px", padding: "12px 16px" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">New Password</label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Enter new password"
                          value={formData.newPassword}
                          onChange={(e) =>
                            setFormData({ ...formData, newPassword: e.target.value })
                          }
                          style={{ borderRadius: "10px", padding: "12px 16px" }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Confirm Password</label>
                        <input
                          className="form-control"
                          type="password"
                          placeholder="Confirm new password"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            setFormData({ ...formData, confirmPassword: e.target.value })
                          }
                          style={{ borderRadius: "10px", padding: "12px 16px" }}
                        />
                      </div>
                      <button
                        className="btn w-100"
                        type="submit"
                        disabled={updating}
                        style={{
                          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                          border: "none",
                          color: "white",
                          borderRadius: "10px",
                          padding: "12px",
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        {updating ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Updating...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-key me-2"></i>
                            Update Password
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
