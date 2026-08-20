"use client";
export default function FeatureGrid({ title, subtitle, features, columns = 3 }) {
  const colClass = columns === 4 ? "col-lg-3 col-md-6" : columns === 2 ? "col-lg-6 col-md-6" : "col-lg-4 col-md-6";

  return (
    <section className="section-box" style={{ padding: "80px 0" }}>
      <div className="container">
        {(title || subtitle) && (
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            {title && (
              <h2
                className="text-heading-1"
                style={{
                  color: "#061424",
                  marginBottom: subtitle ? "12px" : 0,
                }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-body-lead-large color-gray-600" style={{ maxWidth: "560px", margin: "0 auto" }}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="row">
          {features.map((f, i) => (
            <div className={colClass} key={i} style={{ marginBottom: "24px" }}>
              <div
                style={{
                  padding: "32px 24px",
                  background: "#FFFFFF",
                  border: "1px solid #EFEFED",
                  height: "100%",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "transparent";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#EFEFED";
                }}
              >
                {f.icon && (
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "linear-gradient(135deg, #C9A227, #d4b44a)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      marginBottom: "16px",
                      color: "#FFFFFF",
                    }}
                  >
                    {f.icon}
                  </div>
                )}
                <h3
                  className="text-heading-4"
                  style={{
                    color: "#061424",
                    marginBottom: "10px",
                  }}
                >
                  {f.title}
                </h3>
                <p className="text-body-text color-gray-600" style={{ margin: 0, textAlign: "justify" }}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
