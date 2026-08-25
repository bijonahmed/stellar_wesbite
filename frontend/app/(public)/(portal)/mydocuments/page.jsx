"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import Sidebar from "../myportal/sidebar";
import { useEffect, useState } from "react";

export default function MyDocumentsPage() {
  const { token } = useAuth();
  const router = useRouter();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    }
    fetchDocuments();
  }, [token, currentPage]);

  useEffect(() => {
    document.title = "My Documents";
  }, []);

  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/my-documents?page=${currentPage}&pageSize=10&searchQuery=${searchQuery}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setDocuments(data.data || []);
        setTotalPages(data.total_pages || 1);
        setTotalRecords(data.total_records || 0);
      }
    } catch (err) {
      console.error("Failed to fetch documents:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchDocuments();
  };

  const fileIcon = (fileName) => {
    if (!fileName) return "bi bi-file-earmark";
    const ext = fileName.split(".").pop().toLowerCase();
    if (["pdf"].includes(ext)) return "bi bi-file-earmark-pdf";
    if (["doc", "docx"].includes(ext)) return "bi bi-file-earmark-word";
    if (["xls", "xlsx"].includes(ext)) return "bi bi-file-earmark-excel";
    if (["jpg", "jpeg", "png", "gif"].includes(ext)) return "bi bi-file-earmark-image";
    return "bi bi-file-earmark";
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
            <li style={{ color: "#495057", fontSize: "14px", fontWeight: "600" }}>My Documents</li>
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
                {/* Header Card */}
                <div
                  className="card mb-4"
                  style={{
                    border: "none",
                    borderRadius: "16px",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      padding: "24px 30px",
                      color: "white",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <h4 style={{ margin: 0, fontWeight: "700", color: "white" }}>
                          <i className="bi bi-folder2-open me-2"></i>
                          My Documents
                        </h4>
                        <p style={{ margin: "6px 0 0", opacity: 0.85, fontSize: "14px" }}>
                          {totalRecords} document{totalRecords !== 1 ? "s" : ""} available
                        </p>
                      </div>
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "3px solid rgba(255,255,255,0.3)",
                        }}
                      >
                        <i className="bi bi-file-earmark-text" style={{ fontSize: "28px" }}></i>
                      </div>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div style={{ padding: "20px 30px", background: "#f8f9fa" }}>
                    <form onSubmit={handleSearch} className="d-flex gap-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search documents..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                          borderRadius: "10px",
                          padding: "10px 16px",
                          border: "1px solid #e0e0e0",
                        }}
                      />
                      <button
                        type="submit"
                        className="btn"
                        style={{
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          color: "white",
                          borderRadius: "10px",
                          padding: "10px 20px",
                          fontWeight: "600",
                          border: "none",
                        }}
                      >
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>
                </div>

                {/* Documents List */}
                {loading ? (
                  <div
                    className="card"
                    style={{
                      border: "none",
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      padding: "60px",
                      textAlign: "center",
                    }}
                  >
                    <div className="spinner-border text-primary text-center" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3 text-muted">Loading documents...</p>
                  </div>
                ) : documents.length === 0 ? (
                  <div
                    className="card"
                    style={{
                      border: "none",
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                      padding: "60px",
                      textAlign: "center",
                    }}
                  >
                    <i
                      className="bi bi-inbox"
                      style={{ fontSize: "48px", color: "#dee2e6" }}
                    ></i>
                    <h5 className="mt-3 text-muted">No documents found</h5>
                    <p className="text-muted" style={{ fontSize: "14px" }}>
                      You don&apos;t have any documents yet.
                    </p>
                  </div>
                ) : (
                  <div className="row g-3">
                    {documents.map((doc) => (
                      <div key={doc.id} className="col-12">
                        <div
                          className="card h-100"
                          style={{
                            border: "none",
                            borderRadius: "12px",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                            transition: "all 0.2s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                          }}
                        >
                          <div className="card-body d-flex align-items-center gap-3 p-4">
                            {/* File Icon */}
                            <div
                              style={{
                                width: "56px",
                                height: "56px",
                                borderRadius: "12px",
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                              }}
                            >
                              <i
                                className={fileIcon(doc.document_file)}
                                style={{ fontSize: "24px", color: "white" }}
                              ></i>
                            </div>

                            {/* Document Info */}
                            <div className="flex-grow-1 min-width-0">
                              <h6
                                className="mb-1"
                                style={{
                                  fontWeight: "600",
                                  color: "#212529",
                                  fontSize: "15px",
                                }}
                              >
                                {doc.name}
                              </h6>
                              <div className="d-flex align-items-center gap-3 flex-wrap">
                                {doc.category_name && (
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      color: "#667eea",
                                      fontWeight: "500",
                                      background: "rgba(102,126,234,0.1)",
                                      padding: "2px 8px",
                                      borderRadius: "6px",
                                    }}
                                  >
                                    <i className="bi bi-tag me-1"></i>
                                    {doc.category_name}
                                  </span>
                                )}
                                <small className="text-muted">
                                  <i className="bi bi-calendar3 me-1"></i>
                                  {doc.created_at}
                                </small>
                              </div>
                              {doc.description_full && (
                                <p
                                  className="mt-2 mb-0 text-muted"
                                  style={{
                                    fontSize: "13px",
                                    lineHeight: "1.5",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                  }}
                                  dangerouslySetInnerHTML={{ __html: doc.description_full }}
                                />
                              )}
                            </div>

                            {/* Actions */}
                            <div className="d-flex gap-2 flex-shrink-0">
                              {doc.document_file && (
                                <a
                                  href={doc.document_file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm"
                                  style={{
                                    background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
                                    color: "white",
                                    borderRadius: "8px",
                                    padding: "8px 14px",
                                    fontWeight: "600",
                                    fontSize: "13px",
                                    textDecoration: "none",
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <i className="bi bi-download me-1"></i>
                                  Download
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="d-flex justify-content-center mt-4">
                    <nav>
                      <ul className="pagination mb-0">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            style={{ borderRadius: "8px 0 0 8px" }}
                          >
                            <i className="bi bi-chevron-left"></i>
                          </button>
                        </li>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(page)}
                              style={
                                currentPage === page
                                  ? {
                                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                      border: "none",
                                    }
                                  : {}
                              }
                            >
                              {page}
                            </button>
                          </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                          <button
                            className="page-link"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            style={{ borderRadius: "0 8px 8px 0" }}
                          >
                            <i className="bi bi-chevron-right"></i>
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
