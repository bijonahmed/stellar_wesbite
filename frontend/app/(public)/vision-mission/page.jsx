import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Vision & Mission | Stellar Structures Limited",
  description:
    "Explore the vision and mission of Stellar Structures Limited — building a future of excellence, trust, and innovation in Bangladesh's real estate industry.",
  keywords: [
    "Stellar Structures vision",
    "Stellar Structures mission",
    "real estate company vision Bangladesh",
    "property developer mission Dhaka",
    "construction company goals Bangladesh",
  ],
  openGraph: {
    title: "Vision & Mission | Stellar Structures Limited",
    description: "Explore the vision and mission driving Stellar Structures Limited's real estate development in Bangladesh.",
    type: "website",
  },
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader
        tag="About Us"
        title="Vision & Mission"
        subtitle="The guiding principles that define our purpose and direction"
        breadcrumbs={[{ label: "About" }, { label: "Vision & Mission" }]}
      />

      <section style={{ padding: "clamp(60px, 8vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div
                style={{
                  background: "#061424",
                  borderRadius: "16px",
                  padding: "clamp(32px, 4vw, 56px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "4px",
                    background: "#C9A227",
                    borderRadius: "2px",
                    marginBottom: "24px",
                  }}
                />
                <h2
                  style={{
                    color: "#C9A227",
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  Our Vision
                </h2>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "clamp(16px, 1.5vw, 19px)",
                    lineHeight: 1.8,
                    marginBottom: "16px",
                  }}
                >
                  To be Bangladesh&apos;s most trusted and innovative real estate
                  company — setting the benchmark for quality construction,
                  timeless design, and sustainable development across the nation.
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "clamp(14px, 1.3vw, 16px)",
                    lineHeight: 1.8,
                  }}
                >
                  We envision a future where every Stellar Structures project
                  becomes a landmark — a symbol of trust, architectural
                  excellence, and community enrichment that endures for
                  generations.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                style={{
                  background: "linear-gradient(135deg, #061424 0%, #0a2238 100%)",
                  borderRadius: "16px",
                  padding: "clamp(32px, 4vw, 56px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  border: "1px solid rgba(201, 162, 39, 0.2)",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "4px",
                    background: "#C9A227",
                    borderRadius: "2px",
                    marginBottom: "24px",
                  }}
                />
                <h2
                  style={{
                    color: "#C9A227",
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  Our Mission
                </h2>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "clamp(16px, 1.5vw, 19px)",
                    lineHeight: 1.8,
                    marginBottom: "16px",
                  }}
                >
                  To deliver exceptional real estate developments through
                  uncompromising quality, transparent practices, and innovative
                  solutions — creating value that enriches lives and transforms
                  communities.
                </p>
                <ul
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "clamp(14px, 1.3vw, 16px)",
                    lineHeight: 2,
                    paddingLeft: "20px",
                    listStyle: "none",
                  }}
                >
                  <li style={{ position: "relative", paddingLeft: "20px" }}>
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#C9A227",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    Deliver projects on time with world-class quality
                  </li>
                  <li style={{ position: "relative", paddingLeft: "20px" }}>
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#C9A227",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    Maintain full transparency in all transactions
                  </li>
                  <li style={{ position: "relative", paddingLeft: "20px" }}>
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#C9A227",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    Embrace sustainable and eco-friendly building practices
                  </li>
                  <li style={{ position: "relative", paddingLeft: "20px" }}>
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "#C9A227",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    Prioritize customer satisfaction above all else
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Aligned With Your Vision?"
        subtitle="Let Stellar Structures Limited bring your dream property to life with our unwavering commitment to excellence."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
        secondaryBtn={{ label: "View Projects", href: "/projects" }}
      />
    </>
  );
}
