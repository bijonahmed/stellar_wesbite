"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";
import usePost from "../../hooks/useBlogPostSearch";

function BlogCard({ post }) {
  const excerpt = post.description_full
    ?.replace(/<[^>]+>/g, "")
    .substring(0, 120);

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article
        style={{
          background: "#fff",
          border: "1px solid #EFEFED",
          overflow: "hidden",
          transition: "all 0.3s ease",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(6,20,36,0.08)";
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={post.thumnail_img || "/frontend_theme/blog/default.jpg"}
            alt={post.name}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60px",
              background: "linear-gradient(transparent, rgba(6,20,36,0.4))",
            }}
          />
        </div>

        <div
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
       

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              fontWeight: 600,
              color: "#061424",
              marginBottom: "12px",
              lineHeight: 1.3,
            }}
          >
            {post.name}
          </h3>

          <p
            style={{
              fontSize: "14px",
              color: "#8A8A85",
              lineHeight: 1.7,
              marginBottom: "20px",
              flexGrow: 1,
            }}
          >
            {excerpt}...
          </p>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#C9A227",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Read Article <i className="fas fa-arrow-right" style={{ fontSize: "11px" }} />
          </span>
        </div>
      </article>
    </Link>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "48px", flexWrap: "wrap" }}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        style={{
          padding: "10px 16px",
          border: "1px solid #EFEFED",
          background: "#fff",
          color: currentPage === 1 ? "#ccc" : "#061424",
          cursor: currentPage === 1 ? "default" : "pointer",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        &#8249; Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            padding: "10px 16px",
            border: currentPage === page ? "none" : "1px solid #EFEFED",
            background: currentPage === page ? "#C9A227" : "#fff",
            color: currentPage === page ? "#fff" : "#061424",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: currentPage === page ? 600 : 500,
          }}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        style={{
          padding: "10px 16px",
          border: "1px solid #EFEFED",
          background: "#fff",
          color: currentPage === totalPages ? "#ccc" : "#061424",
          cursor: currentPage === totalPages ? "default" : "pointer",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        Next &#8250;
      </button>
    </div>
  );
}

export default function BlogClient() {
  const categoryId = 7;
  const { postData = [], loading } = usePost(categoryId);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(postData.length / postsPerPage);

  const currentPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return postData.slice(start, start + postsPerPage);
  }, [postData, currentPage]);

  const [pageLoading, setPageLoading] = useState(false);

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setPageLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setPageLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <PageHeader
        tag="Insights"
        title="Blog & News"
        subtitle="Stay informed with the latest real estate trends, property investment insights, construction updates, and expert advice from Stellar Structures Limited."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section style={{ padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>
              News & Articles
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>
              Learn More From Our Latest Blog
            </h2>
            <div style={{ width: "60px", height: "2px", background: "#C9A227", margin: "0 auto" }} />
          </div>

          {loading || pageLoading ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ width: "40px", height: "40px", border: "3px solid #EFEFED", borderTopColor: "#C9A227", borderRadius: "50%", margin: "0 auto 16px", animation: "spin 0.8s linear infinite" }} />
              <p style={{ fontSize: "14px", color: "#8A8A85" }}>Loading articles...</p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : currentPosts.length > 0 ? (
            <div className="row">
              {currentPosts.map((post) => (
                <div className="col-lg-4 col-md-6" key={post.id} style={{ marginBottom: "32px" }}>
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: "48px", marginBottom: "16px" }}>&#128221;</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#061424", marginBottom: "8px" }}>
                No Blog Posts Found
              </h3>
              <p style={{ fontSize: "14px", color: "#8A8A85" }}>
                We haven&apos;t published any articles yet. Check back soon for insights and updates.
              </p>
            </div>
          )}

          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </section>

      <CTASection
        title="Have a Question?"
        subtitle="Our team is ready to help you with property inquiries, investment advice, and project information."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
        secondaryBtn={{ label: "Schedule Visit", href: "/site-visit" }}
      />
    </>
  );
}
