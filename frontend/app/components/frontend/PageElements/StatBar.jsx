export default function StatBar({ stats }) {
  return (
    <section style={{ padding: "48px 0", background: "#FFFFFF", borderBottom: "1px solid #EFEFED" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${stats.length}, 1fr)`, gap: 0 }}>
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "28px 16px",
                borderRight: i < stats.length - 1 ? "1px solid #EFEFED" : "none",
              }}
            >
              <div
                className="text-heading-2"
                style={{
                  color: "#061424",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {s.value}
              </div>
              <div className="text-body-excerpt color-gray-600" style={{ textTransform: "uppercase", letterSpacing: "2px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="grid-template-columns"] > div {
            border-right: none !important;
            border-bottom: 1px solid #EFEFED;
          }
          div[style*="grid-template-columns"] > div:nth-last-child(-n+2) {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
