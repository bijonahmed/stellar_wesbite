"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import useCategories from "../../../hooks/useCategories";
import Link from "next/link";

export default function UserAddPage() {
  const { token, permissions } = useAuth();
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const title = "Post Add";

  const { categoryData } = useCategories();

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  const [formData, setFormData] = useState({
    name: "",
    meta_title: "",
    meta_description: "",
    meta_keyword: "",
    categoryId: "",
    subcategoryId: "",
    description_full: "",
    files: null,
    text_1: "",
    text_2: "",
    status: 1,
  });

  const [subcategoryList, setSubcategoryList] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else if (name === "categoryId") {
      setFormData({ ...formData, categoryId: value, subcategoryId: "" });
      fetchSubcategories(value);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const fetchSubcategories = async (categoryId) => {
    if (!categoryId) {
      setSubcategoryList([]);
      return;
    }
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/product-category/checkSubcategory`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ category_id: categoryId }),
        }
      );
      const text = await res.text();
      try {
        const data = JSON.parse(text);
        setSubcategoryList(data?.data || []);
      } catch {
        setSubcategoryList([]);
      }
    } catch (err) {
      console.error("Subcategory fetch error:", err);
      setSubcategoryList([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.categoryId == 13 &&
      (!formData.files || formData.files.length === 0)
    ) {
      alert("You must upload a file for this category!");
      return;
    }

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("meta_title", formData.meta_title);
    payload.append("meta_description", formData.meta_description);
    payload.append("meta_keyword", formData.meta_keyword);
    payload.append("categoryId", formData.categoryId);
    payload.append("subcategoryId", formData.subcategoryId);
    payload.append("description_full", formData.description_full);
    payload.append("status", formData.status);

    if (formData.files instanceof File) {
      payload.append("files", formData.files);
    }
    payload.append("text_1", formData.text_1);
    payload.append("text_2", formData.text_2);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/posts/create`,
        {
          method: "POST",
          body: payload,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        toast.error("Server error. Please try again.");
        return;
      }
      if (res.ok) {
        setUser(data);
        toast.success("Post add successfully");
        router.push("/post");
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

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center py-5"></p>;
  }

  if (!permissions.includes("create posts")) {
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
          <div className="row g-4">
            <div className="col-md-12">
              <div className="card card-primary card-outline mb-4">
                <Toaster position="top-right" />
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && errors.name.length > 0 && (
                        <div className="invalid-feedback">{errors.name[0]}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Meta Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="meta_title"
                        value={formData.meta_title}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Meta Keyword</label>
                      <input
                        type="text"
                        className="form-control"
                        name="meta_keyword"
                        value={formData.meta_keyword}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Meta Description</label>
                      <textarea
                        className="form-control"
                        name="meta_description"
                        rows={5}
                        cols={5}
                        value={formData.meta_description}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Main Category</label>
                      <select
                        className={`form-control ${
                          errors.categoryId ? "is-invalid" : ""
                        }`}
                        name="categoryId"
                        value={formData.categoryId}
                        onChange={handleChange}
                      >
                        <option value="">-- Select Main Category --</option>
                        {categoryData.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
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
                      <label className="form-label">Subcategory</label>
                      <select
                        className="form-control"
                        name="subcategoryId"
                        value={formData.subcategoryId}
                        onChange={handleChange}
                      >
                        <option value="">-- Select Subcategory --</option>
                        {subcategoryList.map((sub) => (
                          <option key={sub.id} value={sub.id}>
                            {sub.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Full Description</label>
                      <CKEditor
                        editor={ClassicEditor}
                        data={formData.description_full}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setFormData({ ...formData, description_full: data });
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Upload Image</label>
                      <input
                        type="file"
                        name="files"
                        accept="image/*"
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    {formData.files && (
                      <div className="mb-3">
                        <img
                          src={URL.createObjectURL(formData.files)}
                          alt="Preview"
                          className="img-thumbnail"
                          style={{ maxHeight: "150px" }}
                        />
                      </div>
                    )}

                    <div className="mb-3">
                      <label className="form-label">Text 1</label>
                      <input
                        type="text"
                        name="text_1"
                        value={formData.text_1}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter text 1"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Text 2</label>
                      <input
                        type="text"
                        name="text_2"
                        value={formData.text_2}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter text 2"
                      />
                    </div>
                  </div>
                  <div className="card-footer text-end">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
