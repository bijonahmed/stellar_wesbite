"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Link from "next/link";

export default function DocumentEditPage() {
  const { token, permissions } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [documentCategory, setDocumentCategorys] = useState([]);
  const [landowners, setLandowners] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const title = "Document Edit";

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  const [formData, setFormData] = useState({
    name: "",
    meta_keyword: "",
    categoryId: "",
    description_full: "",
    files: null,
    document_file: null,
    is_landowner: false,
    landowner_id: "",
    is_buyer: false,
    buyer_id: "",
    status: 1,
  });

  const [existingImage, setExistingImage] = useState("");
  const [existingDocument, setExistingDocument] = useState("");

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "is_landowner" && checked) {
        setFormData((prev) => ({
          ...prev,
          is_landowner: true,
          is_buyer: false,
          buyer_id: "",
        }));
      } else if (name === "is_buyer" && checked) {
        setFormData((prev) => ({
          ...prev,
          is_buyer: true,
          is_landowner: false,
          landowner_id: "",
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [rowRes, catRes, loRes, buyerRes] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/documents/postrow/${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/documents/documentCategorysearch`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/users/byRole/2`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API_BASE}/users/byRole/3`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          ),
        ]);

        const rowData = await rowRes.json();
        const catData = await catRes.json();
        const loData = await loRes.json();
        const buyerData = await buyerRes.json();

        if (rowRes.ok && rowData.data) {
          setFormData({
            name: rowData.data.name || "",
            meta_keyword: rowData.data.meta_keyword || "",
            categoryId: rowData.data.categoryId || "",
            description_full: rowData.data.description_full || "",
            files: null,
            document_file: null,
            is_landowner: rowData.data.landowner_id ? true : false,
            landowner_id: rowData.data.landowner_id || "",
            is_buyer: rowData.data.buyer_id ? true : false,
            buyer_id: rowData.data.buyer_id || "",
            status: rowData.data.status ?? 1,
          });
          setExistingImage(rowData.images || "");
          setExistingDocument(rowData.document_file_url || "");
        }

        if (catRes.ok) setDocumentCategorys(catData);
        if (loRes.ok) setLandowners(loData);
        if (buyerRes.ok) setBuyers(buyerData);
      } catch (err) {
        console.error("API error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchData();
  }, [id, token, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.is_landowner && !formData.landowner_id) {
      toast.error("Please select a Landowner");
      return;
    }
    if (formData.is_buyer && !formData.buyer_id) {
      toast.error("Please select a Buyer");
      return;
    }
    if (!formData.name.trim()) {
      toast.error("Document name is required");
      return;
    }
    if (!formData.categoryId) {
      toast.error("Document category is required");
      return;
    }
    if (!formData.document_file && !existingDocument) {
      toast.error("Document file is required");
      return;
    }

    const payload = new FormData();
    payload.append("id", id);
    payload.append("name", formData.name);
    payload.append("meta_keyword", formData.meta_keyword);
    payload.append("categoryId", formData.categoryId);
    payload.append("description_full", formData.description_full);
    payload.append("status", formData.status);

    if (formData.is_landowner && formData.landowner_id) {
      payload.append("landowner_id", formData.landowner_id);
    }
    if (formData.is_buyer && formData.buyer_id) {
      payload.append("buyer_id", formData.buyer_id);
    }

    if (formData.files instanceof File) {
      payload.append("files", formData.files);
    }
    if (formData.document_file instanceof File) {
      payload.append("document_file", formData.document_file);
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/documents/update`,
        {
          method: "POST",
          body: payload,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        toast.success("Document updated successfully");
        router.push("/documents");
      } else if (data.errors) {
        toast.error(Object.values(data.errors).flat().join("\n"), {
          style: { whiteSpace: "pre-line" },
        });
        setErrors(data.errors);
      } else {
        toast.error(data.message || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network or server error!");
    }
  };

  if (loading) {
    return <p className="text-center py-5"></p>;
  }

  if (!permissions.includes("edit posts")) {
    router.replace("/dashboard");
    return false;
  }

  return (
    <main className="app-main" id="main" tabIndex={-1}>
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
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      router.back();
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    ← Back
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="app-content">
        <div className="container-fluid">
          <Toaster position="top-right" />
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              {/* Left Column - Basic Info */}
              <div className="col-md-8">
                <div
                  className="card mb-4"
                  style={{
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className="card-header"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: "12px 12px 0 0",
                      border: "none",
                      padding: "16px 20px",
                    }}
                  >
                    <h6 className="mb-0 text-white">
                      <i className="bi bi-file-earmark-text me-2"></i>
                      Document Information
                    </h6>
                  </div>
                  <div className="card-body" style={{ padding: "24px" }}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Document Name</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        name="name"
                        placeholder="Enter document name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ borderRadius: "8px", padding: "10px 14px" }}
                      />
                      {errors.name && errors.name.length > 0 && (
                        <div className="invalid-feedback">{errors.name[0]}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Document Category</label>
                      <select
                        className={`form-control ${
                          errors.categoryId ? "is-invalid" : ""
                        }`}
                        name="categoryId"
                        value={formData.categoryId}
                        onChange={handleChange}
                        style={{ borderRadius: "8px", padding: "10px 14px" }}
                      >
                        <option value="">-- Select Category --</option>
                        {documentCategory.map((pcategory) => (
                          <option key={pcategory.id} value={pcategory.id}>
                            {pcategory.name}
                          </option>
                        ))}
                      </select>
                      {errors.categoryId && errors.categoryId.length > 0 && (
                        <div className="invalid-feedback">
                          {errors.categoryId[0]}
                        </div>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Description</label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={formData.description_full}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setFormData({ ...formData, description_full: data });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Assign & Upload */}
              <div className="col-md-4">
                {/* Landowner Card */}
                <div
                  className="card mb-4"
                  style={{
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    borderTop: "4px solid #28a745",
                  }}
                >
                  <div className="card-body" style={{ padding: "20px" }}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="form-check form-switch me-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="is_landowner"
                          name="is_landowner"
                          checked={formData.is_landowner}
                          onChange={handleChange}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <label
                        className="form-label fw-bold mb-0"
                        style={{ color: "#28a745", fontSize: "15px" }}
                      >
                        <i className="bi bi-person-bounding-box me-1"></i>
                        Landowner
                      </label>
                    </div>

                    {formData.is_landowner && (
                      <div className="mt-2">
                        <select
                          className="form-control"
                          name="landowner_id"
                          value={formData.landowner_id}
                          onChange={handleChange}
                          style={{ borderRadius: "8px", padding: "10px 14px" }}
                        >
                          <option value="">-- Select Landowner --</option>
                          {landowners.map((lo) => (
                            <option key={lo.id} value={lo.id}>
                              {lo.name} ({lo.phone_number || lo.email})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Buyer Card */}
                <div
                  className="card mb-4"
                  style={{
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    borderTop: "4px solid #007bff",
                  }}
                >
                  <div className="card-body" style={{ padding: "20px" }}>
                    <div className="d-flex align-items-center mb-3">
                      <div className="form-check form-switch me-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="is_buyer"
                          name="is_buyer"
                          checked={formData.is_buyer}
                          onChange={handleChange}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <label
                        className="form-label fw-bold mb-0"
                        style={{ color: "#007bff", fontSize: "15px" }}
                      >
                        <i className="bi bi-person-check me-1"></i>
                        Buyer
                      </label>
                    </div>

                    {formData.is_buyer && (
                      <div className="mt-2">
                        <select
                          className="form-control"
                          name="buyer_id"
                          value={formData.buyer_id}
                          onChange={handleChange}
                          style={{ borderRadius: "8px", padding: "10px 14px" }}
                        >
                          <option value="">-- Select Buyer --</option>
                          {buyers.map((b) => (
                            <option key={b.id} value={b.id}>
                              {b.name} ({b.phone_number || b.email})
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Upload Card */}
                <div
                  className="card mb-4"
                  style={{
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    borderTop: "4px solid #ffc107",
                  }}
                >
                  <div
                    className="card-header"
                    style={{
                      background: "#fff8e1",
                      borderRadius: "12px 12px 0 0",
                      border: "none",
                      padding: "12px 20px",
                    }}
                  >
                    <h6 className="mb-0" style={{ color: "#e67e00" }}>
                      <i className="bi bi-cloud-upload me-2"></i>
                      Upload Files
                    </h6>
                  </div>
                  <div className="card-body" style={{ padding: "20px" }}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold" style={{ fontSize: "13px" }}>
                        Thumbnail Image
                      </label>
                      <input
                        type="file"
                        name="files"
                        accept="image/*"
                        onChange={handleChange}
                        className="form-control"
                        style={{ borderRadius: "8px", fontSize: "13px" }}
                      />
                    </div>
                    {existingImage && !formData.files && (
                      <div className="mb-3">
                        <img
                          src={existingImage}
                          alt="Existing"
                          className="img-thumbnail"
                          style={{ maxHeight: "120px", borderRadius: "8px" }}
                        />
                      </div>
                    )}
                    {formData.files && (
                      <div className="mb-3">
                        <img
                          src={URL.createObjectURL(formData.files)}
                          alt="Preview"
                          className="img-thumbnail"
                          style={{ maxHeight: "120px", borderRadius: "8px" }}
                        />
                      </div>
                    )}
                    <div className="mb-0">
                      <label className="form-label fw-semibold" style={{ fontSize: "13px" }}>
                        Document File
                      </label>
                      <input
                        type="file"
                        name="document_file"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar"
                        onChange={handleChange}
                        className="form-control"
                        style={{ borderRadius: "8px", fontSize: "13px" }}
                      />
                    </div>
                    {existingDocument && !formData.document_file && (
                      <div className="mt-2">
                        <a
                          href={existingDocument}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-primary"
                          style={{ borderRadius: "8px" }}
                        >
                          <i className="bi bi-file-earmark"></i> View Current Document
                        </a>
                      </div>
                    )}
                    {formData.document_file && (
                      <div className="mt-2">
                        <span className="badge bg-success">
                          <i className="bi bi-check-circle me-1"></i>
                          {formData.document_file.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status */}
                <div
                  className="card mb-4"
                  style={{
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="card-body" style={{ padding: "20px" }}>
                    <label className="form-label fw-semibold">Status</label>
                    <select
                      className="form-control"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      style={{ borderRadius: "8px", padding: "10px 14px" }}
                    >
                      <option value={1}>Active</option>
                      <option value={0}>Inactive</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  style={{
                    borderRadius: "8px",
                    padding: "12px",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  <i className="bi bi-check-circle me-2"></i>
                  Update Document
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
