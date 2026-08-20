import Link from "next/link";

export default function PageHeader({ tag, title, subtitle, breadcrumbs }) {
  return (
    <section
      className="ss-page-header"
      style={{
        background: "linear-gradient(135deg, #061424 0%, #0B1F33 100%)",
        padding: "100px 0 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav style={{ marginBottom: "20px" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
              <li>
                <Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s", fontSize: "15px" }}>
                  Home
                </Link>
              </li>
              {breadcrumbs.map((bc, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "rgba(255,255,255,0.25)" }}>&#8250;</span>
                  {bc.href ? (
                    <Link href={bc.href} style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "15px" }}>
                      {bc.label}
                    </Link>
                  ) : (
                    <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px" }}>{bc.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
        {tag && (
          <span
            style={{
              display: "inline-block",
              fontWeight: 600,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C9A227",
              marginBottom: "16px",
              fontSize: "14px",
            }}
          >
            {tag}
          </span>
        )}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: subtitle ? "20px" : 0,
            maxWidth: "700px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: "19px",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "620px",
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
