import Link from "next/link";

export default function CTASection({ title, subtitle, primaryBtn, secondaryBtn }) {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #061424 0%, #0B1F33 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(201,162,39,0.08), transparent 60%)",
          borderRadius: "50%",
        }}
      />
      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "20px",
            maxWidth: "700px",
            margin: "0 auto 20px",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.8 }}>
            {subtitle}
          </p>
        )}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          {primaryBtn && (
            <Link
              href={primaryBtn.href}
              className="btn btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#C9A227",
                color: "#FFFFFF",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              {primaryBtn.label}
            </Link>
          )}
          {secondaryBtn && (
            <Link
              href={secondaryBtn.href}
              className="btn btn-default"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "transparent",
                color: "#FFFFFF",
                border: "1px solid rgba(255,255,255,0.3)",
                fontWeight: 600,
                letterSpacing: "0.5px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              {secondaryBtn.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
