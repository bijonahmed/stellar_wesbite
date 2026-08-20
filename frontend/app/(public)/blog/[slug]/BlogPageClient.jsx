"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import CTASection from "../../../components/frontend/PageElements/CTASection";

function Sidebar({ popularPosts, searchTerm, setSearchTerm, filteredPosts }) {
  return (
    <aside style={{ padding: "0" }}>
      {/* Search */}
      <div
        style={{
          background: "#F8F8F5",
          padding: "28px",
          marginBottom: "28px",
        }}
      >
        <h4
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#061424",
            marginBottom: "16px",
          }}
        >
          Search
        </h4>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #EFEFED",
              background: "#fff",
              fontSize: "14px",
              color: "#061424",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
          <button
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              color: "#8A8A85",
              cursor: "pointer",
            }}
          >
            <i className="fas fa-search" />
          </button>
        </div>
      </div>

      {/* Popular Posts */}
      <div
        style={{
          background: "#F8F8F5",
          padding: "28px",
        }}
      >
        <h4
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#061424",
            marginBottom: "20px",
          }}
        >
          Popular Posts
        </h4>
        {filteredPosts.length === 0 && (
          <p style={{ fontSize: "14px", color: "#8A8A85" }}>No posts found.</p>
        )}
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            style={{
              display: "flex",
              gap: "14px",
              padding: "14px 0",
              borderBottom: "1px solid #EFEFED",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            <img
              src={post.thumnail_img || "/frontend_theme/blog/default.jpg"}
              alt={post.name}
              style={{
                width: "72px",
                height: "56px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div>
              <h5
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#061424",
                  lineHeight: 1.4,
                  marginBottom: "4px",
                }}
              >
                {post.name}
              </h5>
           
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default function BlogPageClient({ slug }) {
  const [data, setData] = useState(null);
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/public/checkedPostRow/${slug}`,
        { cache: "no-store" }
      );
      const result = await res.json();
      setData(result.data || null);
    } catch (error) {
      console.error("Blog fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPopular = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/public/popularPosts`,
        { cache: "no-store" }
      );
      const result = await res.json();
      setPopularPosts(result.data || []);
    } catch (error) {
      console.error("Popular posts error:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlog();
      fetchPopular();
    }
  }, [slug]);

  const filteredPosts = useMemo(() => {
    if (!searchTerm) return popularPosts;
    return popularPosts.filter((post) =>
      post.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [popularPosts, searchTerm]);

  return (
    <>
      <PageHeader
        tag="Blog"
        title={data?.title || "Blog Details"}
        subtitle={data?.description_full?.replace(/<[^>]+>/g, "").substring(0, 120) || "Read the latest insights and updates from Stellar Structures Limited."}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: data?.title || "Article" },
        ]}
      />

      <section style={{ padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ width: "40px", height: "40px", border: "3px solid #EFEFED", borderTopColor: "#C9A227", borderRadius: "50%", margin: "0 auto 16px", animation: "spin 0.8s linear infinite" }} />
              <p style={{ fontSize: "14px", color: "#8A8A85" }}>Loading article...</p>
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
          ) : data ? (
            <div className="row">
              {/* Main Article */}
              <div className="col-lg-8 col-md-12" style={{ marginBottom: "40px" }}>
                <article>
                  {/* Featured Image */}
                  <div style={{ marginBottom: "32px", overflow: "hidden" }}>
                    <img
                      src={data.image || "/frontend_theme/blog/blog-img4.jpg"}
                      alt={data.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "420px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                 
                  {/* Title */}
                  <h1
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                      fontWeight: 700,
                      color: "#061424",
                      lineHeight: 1.3,
                      marginBottom: "8px",
                    }}
                  >
                    {data.title}
                  </h1>

                  <div style={{ width: "50px", height: "2px", background: "#C9A227", marginBottom: "32px" }} />

                  {/* Content */}
                  <div
                    className="blog-article-content"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                    style={{
                      fontSize: "clamp(15px, 1.6vw, 16px)",
                      lineHeight: 1.9,
                      color: "#333",
                    }}
                  />

                  {/* Tags / Share */}
                  <div
                    style={{
                      marginTop: "48px",
                      paddingTop: "28px",
                      borderTop: "1px solid #EFEFED",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "16px",
                    }}
                  >
                    <Link
                      href="/blog"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#C9A227",
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}
                    >
                      <i className="fas fa-arrow-left" /> Back to Blog
                    </Link>
                  </div>
                </article>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4 col-md-12">
                <Sidebar
                  popularPosts={popularPosts}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  filteredPosts={filteredPosts}
                />
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: "48px", marginBottom: "16px" }}>&#128196;</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#061424", marginBottom: "8px" }}>
                Article Not Found
              </h3>
              <p style={{ fontSize: "14px", color: "#8A8A85", marginBottom: "24px" }}>
                The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
              </p>
              <Link
                href="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 28px",
                  background: "#C9A227",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                <i className="fas fa-arrow-left" /> View All Articles
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Enjoyed This Article?"
        subtitle="Explore more insights or get in touch with our team for expert real estate advice in Dhaka."
        primaryBtn={{ label: "Read More Articles", href: "/blog" }}
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />

      <style>{`
        .blog-article-content h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 600;
          color: #061424;
          margin: 32px 0 16px;
        }
        .blog-article-content h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          font-weight: 600;
          color: #061424;
          margin: 24px 0 12px;
        }
        .blog-article-content p {
          margin-bottom: 20px;
        }
        .blog-article-content img {
          max-width: 100%;
          height: auto;
          margin: 24px 0;
        }
        .blog-article-content ul,
        .blog-article-content ol {
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .blog-article-content li {
          margin-bottom: 8px;
          line-height: 1.8;
        }
        .blog-article-content blockquote {
          border-left: 3px solid #C9A227;
          padding: 16px 24px;
          margin: 24px 0;
          background: #F8F8F5;
          font-style: italic;
          color: #555;
        }
        .blog-article-content a {
          color: #C9A227;
          text-decoration: underline;
        }
        .blog-article-content a:hover {
          color: #061424;
        }
      `}</style>
    </>
  );
}
