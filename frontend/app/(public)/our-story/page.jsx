import PageHeader from "../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Our Story | Stellar Structures Limited",
  description:
    "Discover the founding story of Stellar Structures Limited — a journey of vision, integrity, and excellence in Bangladesh's real estate industry. Learn about our milestones, growth, and commitment to building Dhaka's future.",
  keywords: [
    "Stellar Structures story",
    "real estate company history Bangladesh",
    "property developer journey Dhaka",
    "Stellar Structures milestones",
    "founding story real estate Bangladesh",
  ],
  openGraph: {
    title: "Our Story | Stellar Structures Limited",
    description: "Discover the founding story and milestones of Stellar Structures Limited in Bangladesh's real estate industry.",
    type: "website",
  },
};

const milestones = [
  {
    icon: "🏗️",
    title: "Founded in 2019",
    description:
      "Stellar Structures Limited was established with a clear vision to transform Dhaka's real estate landscape through quality construction and transparent practices.",
  },
  {
    icon: "📈",
    title: "First Major Project",
    description:
      "Delivered our first premium residential complex in Banani, setting a new benchmark for design quality and on-time delivery in the capital.",
  },
  {
    icon: "🏆",
    title: "Industry Recognition",
    description:
      "Earned multiple awards for architectural innovation, sustainable building practices, and outstanding customer satisfaction across residential and commercial projects.",
  },
  {
    icon: "🌍",
    title: "National Expansion",
    description:
      "Expanded operations beyond Dhaka to serve clients across Bangladesh with a growing portfolio of residential, commercial, and mixed-use developments.",
  },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHeader
        tag="About Us"
        title="Our Story"
        subtitle="A journey of vision, integrity, and excellence in building Bangladesh's future"
        breadcrumbs={[{ label: "About" }, { label: "Our Story" }]}
      />

      <section style={{ padding: "clamp(40px, 6vw, 80px) 0", background: "#fff" }}>
        <div className="container">
          <div className="row align-items-center" style={{ gap: "40px" }}>
            <div className="col-lg-5 col-md-6">
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #061424, #0a2238)",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "#f5f4f1",
                    fontSize: "clamp(48px, 5vw, 80px)",
                    opacity: 0.3,
                  }}
                >
                  SSL
                </span>
              </div>
            </div>

            <div className="col-lg-6 col-md-5">
              <p
                style={{
                  color: "#C9A227",
                  fontWeight: 600,
                  fontSize: "clamp(12px, 1.2vw, 14px)",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "12px",
                }}
              >
                Est. 2019 — Dhaka, Bangladesh
              </p>
              <h2
                style={{
                  color: "#061424",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                Building Trust, One Structure at a Time
              </h2>
              <p
                style={{
                  color: "#8A8A85",
                  fontSize: "clamp(15px, 1.4vw, 17px)",
                  lineHeight: 1.8,
                  marginBottom: "16px",
                }}
              >
                Stellar Structures Limited was founded with a singular mission —
                to redefine real estate in Bangladesh through uncompromising
                quality, transparent dealings, and a deep commitment to our
                clients' dreams.
              </p>
              <p
                style={{
                  color: "#8A8A85",
                  fontSize: "clamp(15px, 1.4vw, 17px)",
                  lineHeight: 1.8,
                }}
              >
                From our humble beginnings in Dhaka, we have grown into one of
                the most trusted names in the industry, delivering landmark
                projects that stand as testaments to our dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid
        title="Our Journey"
        subtitle="Key milestones that define who we are"
        features={milestones}
        columns={4}
      />

      <CTASection
        title="Ready to Be Part of Our Story?"
        subtitle="Join thousands of satisfied homeowners who chose Stellar Structures Limited for their dream homes."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
        secondaryBtn={{ label: "View Projects", href: "/projects" }}
      />
    </>
  );
}
