"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import DataTable from "react-data-table-component";
import Link from "next/link";
import { customStyles } from "../../components/styles/customDataTable";
import { useAuth } from "../../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

export default function DocumentCategoryPage() {
  const router = useRouter();
  const { token, permissions } = useAuth();
  const perms = Array.isArray(permissions)
    ? permissions
    : permissions?.split(",") || [];
  const pathname = usePathname();
  const title = "Document Categories List";

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
  const [statusFilter, setStatusFilter] = useState("");
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const [search, setSearch] = useState("");

  const fetchUsers = async (
    page = 1,
    pageSize = 15,
    searchQuery = "",
    selectedFilter = statusFilter !== "" ? statusFilter : 1
  ) => {
    setLoading(true);

    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE}/documents-category/index?page=${page}&pageSize=${pageSize}&searchQuery=${searchQuery}&selectedFilter=${selectedFilter}`;
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
      setTotalRows(result.total_records || 0);
      setTotalPages(result.total_pages || 0);
    } catch (err) {
      console.error("Fetch users failed:", err.message);
      toast.error(err.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete?")) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/documents-category/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Delete failed");
        return;
      }
      toast.success("Deleted successfully");
      setData((prev) => prev.filter((row) => row.id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchUsers(page, perPage, search);
  }, [page, perPage, search]);

  const columns = [
    { name: "Name", selector: (row) => row.name, sortable: true },
    {
      name: "Status",
      selector: (row) => (row.status === 1 ? "Active" : "Inactive"),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex gap-2">
          {perms.includes("edit posts category") ? (
            <button
              className="btn btn-sm btn-primary"
              onClick={() => router.push(`/documentcategories/edit?id=${row.id}`)}
            >
              <i className="bi bi-pencil"></i> Edit
            </button>
          ) : null}

          {perms.includes("delete posts category") ? (
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(row.id)}
            >
              <i className="bi bi-trash"></i> Delete
            </button>
          ) : null}
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  const handlePageChange = (newPage) => setPage(newPage);
  const handlePerRowsChange = (newPerPage) => {
    setPerPage(newPerPage);
    setPage(1);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisible = 5;
    let startPage = Math.max(1, page - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    if (page > 1) {
      pages.push(
        <li key="prev" className="page-item">
          <button className="page-link" onClick={() => handlePageChange(page - 1)}>
            &laquo;
          </button>
        </li>
      );
    }

    if (startPage > 1) {
      pages.push(
        <li key={1} className="page-item">
          <button className="page-link" onClick={() => handlePageChange(1)}>
            1
          </button>
        </li>
      );
      if (startPage > 2) {
        pages.push(
          <li key="dots1" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={`page-item ${i === page ? "active" : ""}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <li key="dots2" className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        );
      }
      pages.push(
        <li key={totalPages} className="page-item">
          <button className="page-link" onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        </li>
      );
    }

    if (page < totalPages) {
      pages.push(
        <li key="next" className="page-item">
          <button className="page-link" onClick={() => handlePageChange(page + 1)}>
            &raquo;
          </button>
        </li>
      );
    }

    return (
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <span className="text-muted">
          Showing {data.length > 0 ? (page - 1) * perPage + 1 : 0} to{" "}
          {Math.min(page * perPage, totalRows)} of {totalRows} entries
        </span>
        <nav>
          <ul className="pagination pagination-sm mb-0">{pages}</ul>
        </nav>
      </div>
    );
  };

  if (!perms.includes("view posts category")) {
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
                <li>{title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <Toaster position="top-right" />
      <div className="app-content">
        <div className="container-fluid">
          <div className="card card-primary card-outline mb-4">
            <div className="card-header">
              <div className="card-title w-100">
                <div className="row g-2 align-items-center">
                  <div className="col-12 col-md-6 col-lg-6">
                    <input
                      type="text"
                      placeholder="Search name..."
                      className="form-control"
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                      }}
                    />
                  </div>
                  <div className="col-4 col-md-4 col-lg-3">
                    <select
                      className="form-control"
                      value={statusFilter}
                      onChange={(e) => {
                        setStatusFilter(e.target.value);
                        setPage(1);
                      }}
                    >
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                  </div>
                  <div className="col-6 col-md-3 col-lg-2">
                    <button
                      type="button"
                      className="btn btn-outline-secondary w-100"
                      onClick={() => {
                        setPage(1);
                        fetchUsers(1, perPage, search);
                      }}
                    >
                      Fetch
                    </button>
                  </div>
                  <div className="col-6 col-md-3 col-lg-1 ms-auto">
                    {perms.includes("create posts category") ? (
                      <button
                        className="btn btn-primary w-100"
                        onClick={() =>
                          router.push(`/documentcategories/addCategories/`)
                        }
                      >
                        Add New
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body p-0">
              <DataTable
                columns={columns}
                data={data}
                progressPending={loading}
                pagination={false}
                customStyles={customStyles}
              />
              {renderPagination()}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
