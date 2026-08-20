"use client"; // Required in Next.js App Router for client-side component

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import DataTable from "react-data-table-component";
import Link from "next/link";
import CategoryTree from "./CategoryTree";
import { useAuth } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

export default function UserPage() {
  const router = useRouter();
  const { token, permissions } = useAuth();
  const perms = Array.isArray(permissions)
    ? permissions
    : permissions?.split(",") || [];
  const pathname = usePathname();
  const title = "Banner Seeting";
  //const title = pathname ? pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2) : "";
  // update document title
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
  const [homeSliderFile, setHomeSliderFile] = useState(null);
  const [homeSliderPreview, setHomeSliderPreview] = useState(null);
  const [homeSliderValid, setHomeSliderValid] = useState(false);

  const [bannerFile, setBannerFile] = useState(null);
  const [homeslider, setHomeSliderData] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [bannerPreview, setBannerPreview] = useState(null);
  const [bannerValid, setBannerValid] = useState(false);

  const [message, setMessage] = useState("");

  const HOME_SLIDER_DIM = { width: 1853, height: 849 };
  const BANNER_DIM = { width: 1853, height: 849 };

  // Home Slider Preview & Validation
  const handleHomeSliderChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (
        img.width === HOME_SLIDER_DIM.width &&
        img.height === HOME_SLIDER_DIM.height
      ) {
        setHomeSliderFile(file);
        setHomeSliderPreview(img.src);
        setHomeSliderValid(true);
        setMessage("");
      } else {
        setHomeSliderFile(null);
        setHomeSliderPreview(null);
        setHomeSliderValid(false);
        setMessage(
          `Home Slider must be ${HOME_SLIDER_DIM.width}x${HOME_SLIDER_DIM.height}px`
        );
      }
    };
  };

  // Banner Image Preview & Validation
  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width === BANNER_DIM.width && img.height === BANNER_DIM.height) {
        setBannerFile(file);
        setBannerPreview(img.src);
        setBannerValid(true);
        setMessage("");
      } else {
        setBannerFile(null);
        setBannerPreview(null);
        setBannerValid(false);
        setMessage(
          `Banner Image must be ${BANNER_DIM.width}x${BANNER_DIM.height}px`
        );
      }
    };
  };

  // Upload Handlers
  const handleHomeSliderSubmit = async (e) => {
    e.preventDefault();
    if (!homeSliderValid) return;

    const formData = new FormData();
    formData.append("home_slider", homeSliderFile);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE}/banner/SliderStore`;

      const res = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHomeSliderPreview(null);
      const data = await res.json();
      fetchData();

      setMessage(
        res.ok
          ? "Home Slider uploaded successfully!"
          : data.error || "Upload failed"
      );
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    }
  };

  const onDelete = async (id) => {
    const formData = new FormData();
    formData.append("id", id);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE}/banner/deleteHomeSlider`;

      const res = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHomeSliderPreview(null);
      const data = await res.json();
      fetchData();

      setMessage(
        res.ok
          ? "Home Slider uploaded successfully!"
          : data.error || "Upload failed"
      );
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong");
    }
  };

  const handleBannerSubmit = async (e) => {
    e.preventDefault();
    if (!bannerValid) return;

    const formData = new FormData();
    formData.append("banner_image", bannerFile);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE}/banner/bannerStore`;
      const res = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchData();

      const data = await res.json();
      setMessage(
        res.ok ? "Banner uploaded successfully!" : data.error || "Upload failed"
      );
    } catch {
      setMessage("Something went wrong");
    }
  };

  const fetchData = async () => {
    //    setLoading(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE}/banner/index`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      let result;
      try {
        result = await res.json();
      } catch (e) {
        result = null;
      }

      if (!res.ok) {
        if (result && result.message) {
          throw new Error(result.message);
        } else {
          throw new Error(`HTTP Error: ${res.status}`);
        }
      }
      setHomeSliderData(result.data || []);
      setBannerData(result.data || []);
    } catch (err) {
      console.error("Fetch users failed:", err.message);
      toast.error(err.message || "Something went wrong!");
    } finally {
      //  setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!perms.includes("view banner")) {
    router.replace("/dashboard");
    return false;
  }

  return (
    <main className="app-main" id="main" tabIndex={-1}>
      {/*begin::App Content Header*/}
      <div className="app-content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">{title}</h3>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-end">
                <li className="breadcrumb-item">
                  <Link href="/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-right" />
      <div className="app-content">
        <div className="container-fluid">
          <div className="card card-primary card-outline mb-4">
            <div className="card-body p-0">
              <div className="row g-0">
                {/* Sidebar Tabs */}
                <div className="col-lg-3 col-md-4 border-end" style={{ background: "#f8f9fa" }}>
                  <div className="p-3">
                    <h6 className="text-muted text-uppercase fw-semibold mb-3" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
                      Settings
                    </h6>
                    <div className="nav flex-column nav-pills" id="v-tabs" role="tablist" aria-orientation="vertical">
                      <button
                        className="nav-link active text-start mb-2"
                        id="tab-home"
                        data-bs-toggle="pill"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        style={{ borderRadius: "8px", padding: "12px 16px", fontSize: "14px", fontWeight: 500 }}
                      >
                        <i className="bi bi-image me-2"></i>
                        Home Slider
                      </button>
                      <button
                        className="nav-link text-start mb-2"
                        id="tab-profile"
                        data-bs-toggle="pill"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        style={{ borderRadius: "8px", padding: "12px 16px", fontSize: "14px", fontWeight: 500 }}
                      >
                        <i className="bi bi-card-image me-2"></i>
                        Banner Image
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="col-lg-9 col-md-8">
                  <div className="p-4">
                    <div className="tab-content" id="v-tabsContent">
                      {/* Home Slider Tab */}
                      <div className="tab-pane fade show active" id="home" role="tabpanel">
                        <div className="mb-4">
                          <h5 className="mb-1" style={{ fontSize: "16px", fontWeight: 600 }}>Upload Home Slider</h5>
                          <p className="text-muted mb-0" style={{ fontSize: "13px" }}>Recommended size: 1853 x 849 pixels</p>
                        </div>
                        <form onSubmit={handleHomeSliderSubmit}>
                          <div className="mb-4">
                            <div
                              className="border rounded-3 p-4 text-center"
                              style={{ background: "#f8f9fa", borderStyle: "dashed !important" }}
                            >
                              <i className="bi bi-cloud-arrow-up fs-1 text-muted mb-2 d-block"></i>
                              <label htmlFor="home_slider" className="form-label mb-2" style={{ fontSize: "14px", cursor: "pointer" }}>
                                <span className="text-primary fw-medium">Click to upload</span> or drag and drop
                              </label>
                              <input
                                type="file"
                                className="form-control d-none"
                                id="home_slider"
                                name="home_slider"
                                accept="image/*"
                                onChange={handleHomeSliderChange}
                              />
                              <p className="text-muted mb-0" style={{ fontSize: "12px" }}>PNG, JPG, WEBP (MAX. 5MB)</p>
                            </div>
                          </div>
                          {homeSliderPreview && (
                            <div className="mb-4">
                              <div className="position-relative d-inline-block">
                                <img
                                  src={homeSliderPreview}
                                  alt="Home Slider Preview"
                                  className="img-fluid rounded-3 border"
                                  style={{ maxHeight: "300px", objectFit: "contain" }}
                                />
                                <span className="badge bg-success position-absolute top-0 end-0 m-2">
                                  <i className="bi bi-check-lg"></i> Ready
                                </span>
                              </div>
                            </div>
                          )}
                          <button type="submit" className="btn btn-primary px-4" disabled={!homeSliderValid} style={{ borderRadius: "8px", fontSize: "14px", fontWeight: 500 }}>
                            <i className="bi bi-upload me-2"></i>Upload Slider
                          </button>
                        </form>

                        <hr className="my-4" />

                        <div className="mb-3">
                          <h6 className="fw-semibold" style={{ fontSize: "14px" }}>Uploaded Sliders</h6>
                        </div>
                        <div className="row g-3">
                          {homeslider && homeslider.length > 0 ? (
                            homeslider
                              .filter((item) => item.type === "slider")
                              .map((item) => (
                                <div className="col-12" key={item.id}>
                                  <div className="card border-0 shadow-sm" style={{ borderRadius: "10px" }}>
                                    <div className="position-relative">
                                      <img
                                        src={item.home_slider}
                                        alt={item.name}
                                        className="card-img-top"
                                        style={{ objectFit: "cover", height: "200px" }}
                                      />
                                      <button
                                        className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                                        style={{ width: "30px", height: "30px", borderRadius: "50%", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}
                                        onClick={() => {
                                          if (window.confirm("Are you sure you want to delete this slider?")) {
                                            onDelete(item.id);
                                          }
                                        }}
                                      >
                                        <i className="bi bi-trash"></i>
                                      </button>
                                    </div>
                                    <div className="card-body py-2 px-3">
                                      <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>{item.name}</p>
                                    </div>
                                  </div>
                                </div>
                              ))
                          ) : (
                            <div className="col-12">
                              <div className="text-center py-4 text-muted">
                                <i className="bi bi-image fs-1 mb-2 d-block"></i>
                                <p className="mb-0" style={{ fontSize: "14px" }}>No sliders uploaded yet</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Banner Image Tab */}
                      <div className="tab-pane fade" id="profile" role="tabpanel">
                        <div className="mb-4">
                          <h5 className="mb-1" style={{ fontSize: "16px", fontWeight: 600 }}>Upload Banner Image</h5>
                          <p className="text-muted mb-0" style={{ fontSize: "13px" }}>Recommended size: 1853 x 849 pixels</p>
                        </div>
                        <form onSubmit={handleBannerSubmit}>
                          <div className="mb-4">
                            <div
                              className="border rounded-3 p-4 text-center"
                              style={{ background: "#f8f9fa", borderStyle: "dashed !important" }}
                            >
                              <i className="bi bi-cloud-arrow-up fs-1 text-muted mb-2 d-block"></i>
                              <label htmlFor="banner_image" className="form-label mb-2" style={{ fontSize: "14px", cursor: "pointer" }}>
                                <span className="text-primary fw-medium">Click to upload</span> or drag and drop
                              </label>
                              <input
                                type="file"
                                className="form-control d-none"
                                id="banner_image"
                                name="banner_image"
                                accept="image/*"
                                onChange={handleBannerChange}
                              />
                              <p className="text-muted mb-0" style={{ fontSize: "12px" }}>PNG, JPG, WEBP (MAX. 5MB)</p>
                            </div>
                          </div>
                          {bannerPreview && (
                            <div className="mb-4">
                              <div className="position-relative d-inline-block">
                                <img
                                  src={bannerPreview}
                                  alt="Banner Preview"
                                  className="img-fluid rounded-3 border"
                                  style={{ maxHeight: "300px", objectFit: "contain" }}
                                />
                                <span className="badge bg-success position-absolute top-0 end-0 m-2">
                                  <i className="bi bi-check-lg"></i> Ready
                                </span>
                              </div>
                            </div>
                          )}
                          <button type="submit" className="btn btn-primary px-4" disabled={!bannerValid} style={{ borderRadius: "8px", fontSize: "14px", fontWeight: 500 }}>
                            <i className="bi bi-upload me-2"></i>Upload Banner
                          </button>
                        </form>

                        <hr className="my-4" />

                        <div className="mb-3">
                          <h6 className="fw-semibold" style={{ fontSize: "14px" }}>Uploaded Banners</h6>
                        </div>
                        <div className="row g-3">
                          {bannerData && bannerData.length > 0 ? (
                            bannerData
                              .filter((item) => item.type === "top_banner")
                              .map((item) => (
                                <div className="col-12" key={item.id}>
                                  <div className="card border-0 shadow-sm" style={{ borderRadius: "10px" }}>
                                    <img
                                      src={item.banner_image}
                                      alt={item.name}
                                      className="card-img-top"
                                      style={{ objectFit: "cover", height: "200px" }}
                                    />
                                    <div className="card-body py-2 px-3">
                                      <p className="mb-0 text-muted" style={{ fontSize: "13px" }}>{item.name}</p>
                                    </div>
                                  </div>
                                </div>
                              ))
                          ) : (
                            <div className="col-12">
                              <div className="text-center py-4 text-muted">
                                <i className="bi bi-image fs-1 mb-2 d-block"></i>
                                <p className="mb-0" style={{ fontSize: "14px" }}>No banners uploaded yet</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {message && (
                      <div className="alert alert-info mt-4 mb-0" style={{ borderRadius: "8px", fontSize: "14px" }}>
                        <i className="bi bi-info-circle me-2"></i>{message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
