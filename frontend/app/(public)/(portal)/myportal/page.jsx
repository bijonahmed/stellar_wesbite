"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function customerDhasboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const [userdata, setUserdata] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const base = "Customer Dashboard";
    if (userdata && userdata.name) {
      document.title = `${base} — ${userdata.name}`;
    } else {
      document.title = base;
    }
  }, [userdata]);

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/profile`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setUserdata(data.user);
        } else {
          console.error("Auth error:", data.message);
        }
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/updateCustomerProfile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userdata),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Profile updated successfully!");
        window.location.reload();
      } else {
        toast.error(data.message || "Failed to update profile");
      }
    } catch (err) {
      toast.error("API error: " + err.message);
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
            <li style={{ color: "#495057", fontSize: "14px", fontWeight: "600" }}>Account Information</li>
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

                {/* Profile Card */}
                <div
                  className="card mb-4"
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
                      padding: "30px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 15px",
                        border: "4px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <i className="bi bi-person-fill" style={{ fontSize: "40px" }}></i>
                    </div>
                    <h4 style={{ margin: 0, fontWeight: "700", color: "white" }}>
                      {userdata?.name || "N/A"}
                    </h4>
                    <p style={{ margin: "5px 0 0", opacity: 0.85, fontSize: "14px" }}>
                      {userdata?.email || "N/A"}
                    </p>
                  </div>

                  {/* Profile Info */}
                  <div className="card-body" style={{ padding: "24px" }}>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div
                          style={{
                            background: "#f8f9fa",
                            borderRadius: "10px",
                            padding: "15px",
                          }}
                        >
                          <small className="text-muted d-block mb-1">
                            <i className="bi bi-telephone me-1"></i> Phone
                          </small>
                          <strong>{userdata?.phone_number || "N/A"}</strong>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div
                          style={{
                            background: "#f8f9fa",
                            borderRadius: "10px",
                            padding: "15px",
                          }}
                        >
                          <small className="text-muted d-block mb-1">
                            <i className="bi bi-envelope me-1"></i> Email
                          </small>
                          <strong>{userdata?.email || "N/A"}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Edit Profile Card */}
                <div
                  className="card mb-4"
                  style={{
                    border: "none",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
                      padding: "18px 24px",
                      borderRadius: "16px 16px 0 0",
                    }}
                  >
                    <h5 className="mb-0 text-white" style={{ fontWeight: "600" }}>
                      <i className="bi bi-pencil-square me-2"></i>
                      Edit Profile
                    </h5>
                  </div>
                  <div className="card-body" style={{ padding: "24px" }}>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Full Name</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your name..."
                          value={userdata?.name || ""}
                          onChange={(e) =>
                            setUserdata({ ...userdata, name: e.target.value })
                          }
                          style={{ borderRadius: "10px", padding: "12px 16px" }}
                        />
                      </div>
                      <div className="row g-3">
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <label className="form-label fw-semibold">Phone Number</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter phone number..."
                              value={userdata?.phone_number || ""}
                              onChange={(e) =>
                                setUserdata({
                                  ...userdata,
                                  phone_number: e.target.value,
                                })
                              }
                              style={{ borderRadius: "10px", padding: "12px 16px" }}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <label className="form-label fw-semibold">Email Address</label>
                            <input
                              className="form-control"
                              type="email"
                              placeholder="Enter your email..."
                              value={userdata?.email || ""}
                              onChange={(e) =>
                                setUserdata({
                                  ...userdata,
                                  email: e.target.value,
                                })
                              }
                              style={{ borderRadius: "10px", padding: "12px 16px" }}
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn w-100"
                        type="submit"
                        disabled={updating}
                        style={{
                          background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
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
                            <i className="bi bi-check-circle me-2"></i>
                            Save Changes
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
