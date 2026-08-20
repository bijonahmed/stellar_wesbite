import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Downloads - Stellar Structures Limited",
  description: "Download brochures, floor plans, payment schedules, and other resources from Stellar Structures Limited.",
  keywords: ["property brochure download", "floor plan PDF", "real estate documents Dhaka"],
  openGraph: {
    title: "Downloads - Stellar Structures",
    description: "Access brochures, floor plans, and more.",
    type: "website",
  },
};

const downloads = [
  {
    icon: "📘",
    title: "Company Brochure",
    desc: "Comprehensive overview of Stellar Structures Limited including our portfolio, vision, and project highlights.",
    format: "PDF · 2.4 MB",
  },
  {
    icon: "🏢",
    title: "Project Catalogue 2025",
    desc: "Detailed catalogue of all ongoing and upcoming residential projects across Dhaka.",
    format: "PDF · 5.1 MB",
  },
  {
    icon: "🗺️",
    title: "Master Floor Plans",
    desc: "Complete floor plans for all unit types across our residential projects including areas and layouts.",
    format: "PDF · 3.8 MB",
  },
  {
    icon: "💰",
    title: "Payment Schedule Template",
    desc: "Standard payment schedule template showing installment breakdowns for during and post construction plans.",
    format: "PDF · 840 KB",
  },
  {
    icon: "📐",
    title: "Amenities Overview",
    desc: "List of all amenities, features, and specifications provided in our residential developments.",
    format: "PDF · 1.2 MB",
  },
  {
    icon: "📋",
    title: "Booking Checklist",
    desc: "Complete checklist of documents and steps required for a hassle-free booking experience.",
    format: "PDF · 560 KB",
  },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        tag="Resources"
        title="Downloads"
        subtitle="Access brochures, floor plans, payment schedules, and other useful resources."
        breadcrumbs={[{ label: "Resources" }, { label: "Downloads" }]}
      />
      <section style={{ padding: "clamp(40px, 5vw, 80px) 0" }}>
        <div className="container">
          <div className="row">
            {downloads.map((item, i) => (
              <div className="col-lg-4 col-md-6" key={i} style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    padding: "28px",
                    background: "#FAFAF8",
                    border: "1px solid #EFEFED",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 0.3s ease",
                    cursor: "pointer",
                  }}
                >
                  <span style={{ fontSize: "32px", marginBottom: "16px" }}>
                    {item.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(18px, 2vw, 22px)",
                      fontWeight: 600,
                      color: "#061424",
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#8A8A85",
                      lineHeight: 1.7,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {item.desc}
                  </p>
                  <div
                    style={{
                      marginTop: "16px",
                      paddingTop: "14px",
                      borderTop: "1px solid #EFEFED",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#8A8A85",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {item.format}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#C9A227",
                        fontWeight: 600,
                      }}
                    >
                      Download
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Need More Information?"
        subtitle="Reach out to our team for project-specific details not available in our brochures."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
        secondaryBtn={{ label: "Site Visit", href: "/site-visit" }}
      />
    </>
  );
}
