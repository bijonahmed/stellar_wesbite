"use client"; // Required in Next.js App Router for client-side component

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

export default function UserPage() {
  const router = useRouter();
  const { token, permissions } = useAuth();
  //console.log("Permissions:", permissions);
  const perms = Array.isArray(permissions)
    ? permissions
    : permissions?.split(",") || [];
  const pathname = usePathname();
  const title = "Post List";
  //const title = pathname ? pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2) : "";
  // update document title
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
  const [statusFilter, setStatusFilter] = useState("");
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [viewModal, setViewModal] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [totalRecords, setTotalRecords] = useState(0);

  const fetchUsers = async (
    page = 1,
    pageSize = 15,
    searchQuery = "",
    selectedFilter = statusFilter !== "" ? statusFilter : 1
  ) => {
    setLoading(true);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE}/posts/index?page=${page}&pageSize=${pageSize}&searchQuery=${searchQuery}&selectedFilter=${selectedFilter}`;

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

      setData(result.data || []);
      setTotalRecords(result.total_records || 0);
    } catch (err) {
      console.error("Fetch users failed:", err.message);
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page, perPage, search);
  }, [page, perPage, search]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/posts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // আপনার AuthContext থেকে token নিন
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Delete failed");
        return;
      }
      toast.success("Post deleted successfully");
      // Refresh table / remove deleted row from state
      setData((prev) => prev.filter((row) => row.id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  const handleView = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/posts/postrow/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        setViewData(data?.data || {});
        setViewModal(true);
      } catch {
        toast.error("Failed to load post details");
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  const totalPages = Math.ceil(totalRecords / perPage);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, page - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    fetchUsers(newPage, perPage, search);
  };

  const handlePerRowsChange = (newPerPage) => {
    setPerPage(newPerPage);
    setPage(1);
    fetchUsers(1, newPerPage, search);
  };

  if (!perms.includes("view posts")) {
    router.replace("/dashboard");
    return false;
  }
  return (
    <main className="app-main" id="main" tabIndex={-1}>
      {/*begin::App Content Header*/}
      <div className="app-content-header">
        {/*begin::Container*/}
        <div className="container-fluid">
          {/*begin::Row*/}
          <div className="row">
            <div className="col-sm-6">
              <h3 className="mb-0">{title}</h3>
            </div>
            <div className="col-sm-6">
              <ul style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: "8px", fontSize: "14px", alignItems: "center", justifyContent: "flex-end" }}>
                <li>
                  <Link href="/dashboard" style={{ color: "#667eea", textDecoration: "none" }}>Home</Link>
                </li>
                <li style={{ color: "#6c757d" }}>/</li>
                <li style={{ color: "#495057", fontWeight: "600" }}>
                  {title}
                </li>
              </ul>
            </div>
          </div>
          {/*end::Row*/}
        </div>
        {/*end::Container*/}
      </div>

      {/*begin::App Content*/}
      <Toaster position="top-right" />
      <div className="app-content">
        {/*begin::Container*/}
        <div className="container-fluid">
          {/*begin::Row*/}
          <div className="card card-primary card-outline mb-4">
            {/* Header */}
            <div className="card-header">
              <div className="card-title w-100">
                <div className="row g-2 align-items-center">
                  {/* Column 1: Search input */}
                  <div className="col-12 col-md-6 col-lg-6">
                    <input
                      type="text"
                      placeholder="Search name..."
                      className="form-control"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                  {/* Status Filter */}
                  <div className="col-4 col-md-4 col-lg-3">
                    <select
                      className="form-control"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                  </div>
                  {/* Column 2: Fetch button */}
                  <div className="col-6 col-md-3 col-lg-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary w-100"
                      onClick={() => fetchUsers()}
                    >
                      Fetch
                    </button>
                  </div>

                  {/* Column 3: Add User button */}

                  <div className="col-6 col-md-3 col-lg-1 ms-auto">
                    {perms.includes("create posts") ? (
                      <button
                        className="btn btn-primary w-100"
                        onClick={() => router.push(`/post/add/`)}
                      >
                        Add New
                      </button>
                    ) : null}{" "}
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="card-body p-0">
              {loading ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : data.length === 0 ? (
                <div className="text-center py-4 text-muted">No records found</div>
              ) : (
                <>
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead style={{ background: "#f8f9fa" }}>
                        <tr>
                          <th style={{ padding: "12px 16px", fontSize: "13px", fontWeight: "600", color: "#495057" }}>#</th>
                          <th style={{ padding: "12px 16px", fontSize: "13px", fontWeight: "600", color: "#495057" }}>Name</th>
                          <th style={{ padding: "12px 16px", fontSize: "13px", fontWeight: "600", color: "#495057" }}>Category</th>
                          <th style={{ padding: "12px 16px", fontSize: "13px", fontWeight: "600", color: "#495057" }}>Subcategory</th>
                          <th style={{ padding: "12px 16px", fontSize: "13px", fontWeight: "600", color: "#495057" }}>Status</th>
                          <th style={{ padding: "12px 16px", fontSize: "13px", fontWeight: "600", color: "#495057", textAlign: "center" }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((row, index) => (
                          <tr key={row.id}>
                            <td style={{ padding: "10px 16px", fontSize: "14px" }}>{(page - 1) * perPage + index + 1}</td>
                            <td style={{ padding: "10px 16px", fontSize: "14px" }}>{row.name}</td>
                            <td style={{ padding: "10px 16px", fontSize: "14px" }}>{row.category_name}</td>
                            <td style={{ padding: "10px 16px", fontSize: "14px" }}>{row.subcategory_name || "-"}</td>
                            <td style={{ padding: "10px 16px" }}>
                              <span className={`badge ${row.status == 1 ? "bg-success" : "bg-danger"}`} style={{ fontSize: "12px" }}>
                                {row.status == 1 ? "Active" : "Inactive"}
                              </span>
                            </td>
                            <td style={{ padding: "10px 16px", textAlign: "center" }}>
                              <div className="d-flex gap-2 justify-content-center">
                                <button className="btn btn-sm btn-info" onClick={() => handleView(row.id)}>
                                  <i className="bi bi-eye"></i> View
                                </button>
                                {perms.includes("edit posts") && (
                                  <button className="btn btn-sm btn-primary" onClick={() => router.push(`/post/edit?id=${row.id}`)}>
                                    <i className="bi bi-pencil"></i> Edit
                                  </button>
                                )}
                                {perms.includes("delete posts") && (
                                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(row.id)}>
                                    <i className="bi bi-trash"></i> Delete
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", gap: "8px" }}>
                    <button
                      className="btn btn-sm"
                      disabled={page === 1}
                      onClick={() => handlePageChange(page - 1)}
                      style={{ padding: "6px 12px", border: "1px solid #dee2e6", borderRadius: "6px", background: page === 1 ? "#f8f9fa" : "white", color: page === 1 ? "#adb5bd" : "#495057" }}
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>
                    {getPageNumbers().map((num) => (
                      <button
                        key={num}
                        className="btn btn-sm"
                        onClick={() => handlePageChange(num)}
                        style={{
                          padding: "6px 12px",
                          minWidth: "36px",
                          border: num === page ? "none" : "1px solid #dee2e6",
                          borderRadius: "6px",
                          background: num === page ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : "white",
                          color: num === page ? "white" : "#495057",
                          fontWeight: num === page ? "600" : "400",
                          fontSize: "14px",
                        }}
                      >
                        {num}
                      </button>
                    ))}
                    <button
                      className="btn btn-sm"
                      disabled={page === totalPages}
                      onClick={() => handlePageChange(page + 1)}
                      style={{ padding: "6px 12px", border: "1px solid #dee2e6", borderRadius: "6px", background: page === totalPages ? "#f8f9fa" : "white", color: page === totalPages ? "#adb5bd" : "#495057" }}
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                    <span style={{ marginLeft: "12px", fontSize: "14px", color: "#6c757d" }}>
                      Showing {data.length > 0 ? (page - 1) * perPage + 1 : 0} to {Math.min(page * perPage, totalRecords)} of {totalRecords} entries
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/*end::Body*/}
        </div>

        {/*end::Row*/}
      </div>
      {/*end::Container*/}
      {/*end::App Content*/}

      {/* View Modal */}
      {viewModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setViewModal(false)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-scrollable"
            onClick={(e) => e.stopPropagation()}
            style={{ marginTop: "40px" }}
          >
            <div className="modal-content" style={{ border: "none", borderRadius: "12px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
              {/* Header */}
              <div className="modal-header" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "white", padding: "16px 24px", border: "none" }}>
                <h5 className="modal-title fw-bold" style={{ fontSize: "18px" }}>
                  <i className="bi bi-eye me-2"></i>Post Details
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setViewModal(false)} style={{ fontSize: "12px" }}></button>
              </div>

              {/* Body */}
              <div className="modal-body" style={{ padding: "0" }}>
                {viewData && (
                  <>
                    {/* Top Section: Thumbnail + Basic Info */}
                    <div style={{ display: "flex", gap: "24px", padding: "24px 24px 0" }}>
                      {/* Thumbnail */}
                      <div style={{ flexShrink: 0 }}>
                        {viewData.thumnail_img ? (
                          <img
                            src={viewData.thumnail_img}
                            alt="Thumbnail"
                            style={{ width: "250px", height: "290px", objectFit: "cover", borderRadius: "10px", border: "2px solid #e9ecef" }}
                          />
                        ) : (
                          <div style={{ width: "180px", height: "140px", borderRadius: "10px", background: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center", border: "2px dashed #dee2e6" }}>
                            <span style={{ color: "#adb5bd", fontSize: "14px" }}>No Image</span>
                          </div>
                        )}
                      </div>
                      {/* Basic Info */}
                      <div style={{ flex: 1 }}>
                        <h4 style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: "700", color: "#212529" }}>{viewData.name || "-"}</h4>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                          <span className={`badge ${viewData.status == 1 ? "bg-success" : "bg-danger"}`} style={{ fontSize: "12px", padding: "5px 10px", borderRadius: "6px" }}>
                            {viewData.status == 1 ? "Active" : "Inactive"}
                          </span>
                          <span className="badge bg-primary" style={{ fontSize: "12px", padding: "5px 10px", borderRadius: "6px" }}>
                            {viewData.category_name || "No Category"}
                          </span>
                          {viewData.subcategory_name && (
                            <span className="badge bg-secondary" style={{ fontSize: "12px", padding: "5px 10px", borderRadius: "6px" }}>
                              {viewData.subcategory_name}
                            </span>
                          )}
                        </div>
                        <div style={{ display: "flex", gap: "24px" }}>
                          <div>
                            <span style={{ fontSize: "12px", color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.5px" }}>Text 1</span>
                            <p style={{ margin: "2px 0 0", fontWeight: "600", color: "#495057" }}>{viewData.text_1 || "-"}</p>
                          </div>
                          <div>
                            <span style={{ fontSize: "12px", color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.5px" }}>Text 2</span>
                            <p style={{ margin: "2px 0 0", fontWeight: "600", color: "#495057" }}>{viewData.text_2 || "-"}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <hr style={{ margin: "20px 24px 0", borderColor: "#e9ecef" }} />

                    {/* Meta Info Section */}
                    <div style={{ padding: "16px 24px" }}>
                      <h6 style={{ fontSize: "14px", fontWeight: "700", color: "#667eea", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                        <i className="bi bi-info-circle me-1"></i>Meta Information
                      </h6>
                      <div className="row g-3">
                        <div className="col-md-4">
                          <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px", height: "100%" }}>
                            <span style={{ fontSize: "11px", color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.5px" }}>Meta Title</span>
                            <p style={{ margin: "4px 0 0", fontWeight: "500", color: "#212529", fontSize: "14px" }}>{viewData.meta_title || "-"}</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px", height: "100%" }}>
                            <span style={{ fontSize: "11px", color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.5px" }}>Meta Keyword</span>
                            <p style={{ margin: "4px 0 0", fontWeight: "500", color: "#212529", fontSize: "14px" }}>{viewData.meta_keyword || "-"}</p>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px", height: "100%" }}>
                            <span style={{ fontSize: "11px", color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.5px" }}>Status</span>
                            <p style={{ margin: "4px 0 0", fontWeight: "500", color: "#212529", fontSize: "14px" }}>{viewData.status == 1 ? "Active" : "Inactive"}</p>
                          </div>
                        </div>
                        <div className="col-12">
                          <div style={{ background: "#f8f9fa", padding: "12px", borderRadius: "8px" }}>
                            <span style={{ fontSize: "11px", color: "#6c757d", textTransform: "uppercase", letterSpacing: "0.5px" }}>Meta Description</span>
                            <p style={{ margin: "4px 0 0", fontWeight: "500", color: "#212529", fontSize: "14px" }}>{viewData.meta_description || "-"}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <hr style={{ margin: "0 24px", borderColor: "#e9ecef" }} />

                    {/* Description Section */}
                    <div style={{ padding: "16px 24px 24px" }}>
                      <h6 style={{ fontSize: "14px", fontWeight: "700", color: "#667eea", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>
                        <i className="bi bi-file-text me-1"></i>Description
                      </h6>
                      <div style={{ background: "#f8f9fa", padding: "16px", borderRadius: "8px", border: "1px solid #e9ecef" }}>
                        <div
                          style={{ fontSize: "14px", color: "#495057", lineHeight: "1.6", textAlign: "justify" }}
                          dangerouslySetInnerHTML={{ __html: viewData.description_full || "<em>No description</em>" }}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="modal-footer" style={{ borderTop: "1px solid #e9ecef", padding: "12px 24px" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ borderRadius: "6px", padding: "6px 20px", fontSize: "14px" }}
                  onClick={() => setViewModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
