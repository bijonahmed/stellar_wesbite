import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Office Locations - Stellar Structures Limited",
  description: "Visit Stellar Structures Limited offices in Dhaka. Head office in Gulshan and sales office in Banani.",
  keywords: ["Stellar Structures office", "real estate office Dhaka", "property developer Banani"],
  openGraph: {
    title: "Office Locations - Stellar Structures",
    description: "Find our offices across Dhaka.",
    type: "website",
  },
};

const offices = [
  {
    type: "Head Office",
    address: "Plot 45, Road 11, Gulshan-2, Dhaka 1212, Bangladesh",
    phone: "+880 2 8834 5678",
    email: "info@stellarstructuresbd.com",
    hours: "Sunday – Thursday: 9:00 AM – 6:00 PM",
    note: "General inquiries, corporate communications, and management office.",
  },
  {
    type: "Sales Office",
    address: "Level 3, Bashati Garments Building, Road 4, Banani, Dhaka 1213, Bangladesh",
    phone: "+880 2 8834 5700",
    email: "sales@stellarstructuresbd.com",
    hours: "Sunday – Thursday: 10:00 AM – 7:00 PM | Saturday: 11:00 AM – 4:00 PM",
    note: "Walk-in consultations, project model viewing, and booking assistance.",
  },
];

export default function OfficesPage() {
  return (
    <>
      <PageHeader
        tag="Company"
        title="Office Locations"
        subtitle="Visit us at any of our offices across Dhaka for in-person consultations and project tours."
        breadcrumbs={[{ label: "Company" }, { label: "Office Locations" }]}
      />
      <section style={{ padding: "clamp(40px, 5vw, 80px) 0" }}>
        <div className="container">
          <div className="row">
            {offices.map((office, i) => (
              <div className="col-lg-6" key={i} style={{ marginBottom: "30px" }}>
                <div
                  style={{
                    padding: "36px",
                    background: "#FAFAF8",
                    border: "1px solid #EFEFED",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(22px, 2.5vw, 28px)",
                      fontWeight: 600,
                      color: "#061424",
                      marginBottom: "24px",
                      paddingBottom: "16px",
                      borderBottom: "2px solid #C9A227",
                    }}
                  >
                    {office.type}
                  </h3>
                  <div style={{ marginBottom: "16px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#C9A227",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      Address
                    </span>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#061424",
                        lineHeight: 1.6,
                        margin: "6px 0 0",
                      }}
                    >
                      {office.address}
                    </p>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#C9A227",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      Phone
                    </span>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#061424",
                        margin: "6px 0 0",
                      }}
                    >
                      {office.phone}
                    </p>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#C9A227",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      Email
                    </span>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#061424",
                        margin: "6px 0 0",
                      }}
                    >
                      {office.email}
                    </p>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#C9A227",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      }}
                    >
                      Working Hours
                    </span>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#8A8A85",
                        margin: "6px 0 0",
                      }}
                    >
                      {office.hours}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#8A8A85",
                      fontStyle: "italic",
                      margin: 0,
                      borderTop: "1px solid #EFEFED",
                      paddingTop: "14px",
                    }}
                  >
                    {office.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Schedule a Visit"
        subtitle="We recommend booking an appointment before visiting to ensure a dedicated representative is available."
        primaryBtn={{ label: "Book Appointment", href: "/appointment" }}
        secondaryBtn={{ label: "Site Visit", href: "/site-visit" }}
      />
    </>
  );
}
