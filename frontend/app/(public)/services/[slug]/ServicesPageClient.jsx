"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

const FALLBACK_SERVICES = [
  { id: "pd", name: "Property Development", slug: "property-development" },
  { id: "id", name: "Interior Design", slug: "interior-design" },
  { id: "ad", name: "Architectural Design", slug: "architectural-design" },
  { id: "ic", name: "Investment Consultancy", slug: "investment-consultancy" },
  { id: "cm", name: "Construction Management", slug: "construction-management" },
  { id: "op", name: "Ongoing Projects", slug: "ongoing-projects" },
  { id: "up", name: "Upcoming Projects", slug: "upcoming-projects" },
];

function normalizeService(raw) {
  if (!raw) return null;
  return {
    ...raw,
    title: raw.title || raw.name || "",
    name: raw.name || raw.title || "",
    description: raw.description || raw.description_full || raw.description_short || "",
    image: raw.image || raw.thumnail_img || "",
    thumnail_img: raw.thumnail_img || raw.image || "",
    author: raw.author || "Admin",
    slug: raw.slug,
  };
}

export default function ServicesPageClient({ slug }) {
  const [data, setData] = useState(null);
  const [popularPosts, setPopularPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBlog = async () => {
    setLoading(true);
    try {
      let service = null;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/public/checkedPostRow/${slug}`,
        { cache: "no-store" }
      );
      if (res.ok) {
        const result = await res.json();
        service = result.data || null;
      }
      if (!service) {
        const fallbackRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/public/getsPost?slug=${slug}`,
          { cache: "no-store" }
        );
        const fallbackResult = await fallbackRes.json();
        service = Array.isArray(fallbackResult.data)
          ? fallbackResult.data.find((item) => item.slug === slug) ||
            fallbackResult.data[0] ||
            null
          : fallbackResult.data || null;
      }
      setData(normalizeService(service));
    } catch (error) {
      console.error("Service fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPopular = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/public/getsAllServices`,
        { cache: "no-store" }
      );
      const result = await res.json();
      const list = (result.data || []).map(normalizeService);
      setPopularPosts(list.length > 0 ? list : FALLBACK_SERVICES);
    } catch (error) {
      console.error("Popular posts error:", error);
      setPopularPosts(FALLBACK_SERVICES);
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
      <div className="page-title-area style-four bg4">
        <div className="container">
          <div className="page-title-content text-start">
            <h2>{data?.title || "Service Details"}</h2>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li>Service Details</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="blog-details-area ptb-100">
        <div className="container">
          {loading && <p>Loading...</p>}
          {!loading && data && (
            <div className="row">
              <div className="col-12 col-lg-8 col-md-12">
                <div className="blog-details-desc">
                  <div className="article-image">
                    <img src={data.image || "/frontend_theme/blog/blog-img4.jpg"} alt={data.name} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
                  </div>
                  <div className="article-content" style={{ color: "#000" }}>
                    <div className="entry-meta mb-3">
                      <ul style={{ display: "flex", gap: "20px", padding: 0, listStyle: "none", fontSize: "14px", color: "#555", fontFamily: "'Chivo', sans-serif", flexWrap: "wrap" }}>
                        <li><i className="far fa-user-circle" /> <span>{data.author || "Admin"}</span></li>
                        <li><i className="far fa-calendar-alt" /> <time dateTime={data.created_at}>{data.created_at}</time></li>
                      </ul>
                    </div>
                    <h1 style={{ fontSize: "clamp(22px, 4vw, 28px)", fontWeight: "700", marginBottom: "15px", fontFamily: "'Chivo', sans-serif" }}>{data.title}</h1>
                    <hr style={{ margin: "25px 0", opacity: 0.2 }} />
                    <div className="blog-content-body" dangerouslySetInnerHTML={{ __html: data.description }} style={{ fontSize: "16px", lineHeight: "1.9", color: "#111", fontFamily: "'Chivo', sans-serif" }} />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 col-md-12" style={{ marginTop: "40px" }}>
                <aside className="widget-area extra-padding">
                  <div className="widget widget_search">
                    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                      <input type="search" className="search-field" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: "100%", padding: "12px 16px", border: "1px solid #ddd", borderRadius: "6px", outline: "none", fontFamily: "'Chivo', sans-serif", fontSize: "14px" }} />
                      <button type="submit"><i className="fas fa-search" /></button>
                    </form>
                  </div>
                  <div className="widget widget_noke_posts_thumb">
                    <h3 className="widget-title" style={{ fontFamily: "'Chivo', sans-serif" }}>Popular Posts</h3>
                    {filteredPosts.length === 0 && <p>No posts found</p>}
                    {filteredPosts.map((post) => (
                      <article className="item" key={post.id} style={{ paddingBottom: "20px", marginBottom: "20px", borderBottom: "1px solid #eee", display: "flex", gap: "12px" }}>
                        <Link href={`/services/${post.slug}`} className="thumb" style={{ flexShrink: 0 }}>
                          <img src={post.thumnail_img} alt={post.name} style={{ width: "80px", height: "60px", objectFit: "cover", borderRadius: "6px" }} />
                        </Link>
                        <div style={{ fontWeight: "400", marginTop: "0" }}>
                          <Link href={`/services/${post.slug}`} style={{ fontWeight: "400", color: "#000", textDecoration: "none", fontSize: "14px", lineHeight: "1.4", fontFamily: "'Chivo', sans-serif" }}>{post.name}</Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </aside>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
