import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "About Us | Stellar Structures Limited",
  description:
    "Learn about Stellar Structures Limited — Bangladesh's leading real estate developer committed to quality, transparency, and innovation in residential and commercial projects across Dhaka.",
  keywords: [
    "about Stellar Structures",
    "real estate company Bangladesh",
    "property developer Dhaka",
    "real estate digitalization",
    "premium properties Bangladesh",
    "Stellar Structures Limited about",
    "housing developer Dhaka",
  ],
  openGraph: {
    title: "About Us | Stellar Structures Limited",
    description: "Learn about Stellar Structures Limited — Bangladesh's trusted real estate developer building premium residential and commercial projects in Dhaka.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        tag="About Us"
        title="About Stellar Structures"
        subtitle="Building Bangladesh future through quality, transparency, and digital innovation"
        breadcrumbs={[{ label: "About" }, { label: "About Us" }]}
      />

      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11">
              <div
                style={{
                  position: "relative",
                  background: "#faf9f6",
                  borderRadius: "16px",
                  padding: "clamp(18px, 6vw, 80px)",
                  border: "1px solid rgba(201,162,39,0.15)",
                  boxShadow: "0 4px 40px rgba(6,20,36,0.04)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "32px",
                    left: "clamp(32px, 5vw, 64px)",
                    fontSize: "clamp(80px, 10vw, 140px)",
                    color: "#C9A227",
                    opacity: 0.08,
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  &ldquo;
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <p
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(16px, 1.5vw, 19px)",
                      lineHeight: 2,
                      textAlign: "justify",
                      marginBottom: "28px",
                    }}
                  >
                    Stellar Structures Limited is a premier real estate development company in Bangladesh, dedicated to creating exceptional residential and commercial spaces that redefine modern living. Since our inception, we have been driven by a singular mission — to deliver premium quality properties that combine innovative design, superior craftsmanship, and sustainable building practices. Our portfolio spans across luxury apartments, commercial complexes, duplexes, penthouses, and mixed-use developments, each designed to meet the evolving needs of discerning homeowners and investors in Dhaka and beyond.
                  </p>
                  <p
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(16px, 1.5vw, 19px)",
                      lineHeight: 2,
                      textAlign: "justify",
                      marginBottom: "28px",
                    }}
                  >
                    What sets Stellar Structures apart is our unwavering commitment to transparency and trust. In an industry where uncertainty can often cloud decisions, we have built our reputation on complete openness — from clear pricing and detailed project timelines to regular progress updates and honest communication. Every client who partners with Stellar receives the same level of dedication and respect, regardless of project size. We believe that trust is the foundation of every successful development, and we work tirelessly to earn and maintain that trust through every interaction, every milestone, and every handover.
                  </p>
                  <p
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(16px, 1.5vw, 19px)",
                      lineHeight: 2,
                      textAlign: "justify",
                      marginBottom: "28px",
                    }}
                  >
                    As a forward-thinking company, we are embracing digitalization to transform the way real estate is experienced in Bangladesh. From virtual reality property tours and AI-powered design optimization to smart building management systems and digital customer portals, we are leveraging cutting-edge technology to enhance every step of the property journey. Our digital initiatives ensure that clients have real-time access to project updates, payment schedules, and document management — all from the convenience of their devices. We are not just building properties; we are building a digital ecosystem that empowers our clients with transparency, convenience, and control.
                  </p>
                  <p
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(16px, 1.5vw, 19px)",
                      lineHeight: 2,
                      textAlign: "justify",
                      marginBottom: "0",
                    }}
                  >
                    At Stellar Structures Limited, our vision extends beyond individual buildings. We are committed to shaping communities and contributing to the sustainable development of Bangladesh. Every project we undertake is designed with environmental responsibility in mind, incorporating energy-efficient systems, eco-friendly materials, and green spaces that promote healthy living. Our team of architects, engineers, and project managers work collaboratively to deliver developments that stand the test of time — not just in structural integrity, but in the value they bring to families, businesses, and neighborhoods. Discover the Stellar difference, where quality meets innovation and trust meets excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the Stellar Difference"
        subtitle="Discover why discerning homeowners and investors choose Stellar Structures Limited for their real estate needs."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
        secondaryBtn={{ label: "View Projects", href: "/projects" }}
      />
    </>
  );
}
