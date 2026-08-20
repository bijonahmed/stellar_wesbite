import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Project Map - Stellar Structures Limited",
  description: "Find Stellar Structures Limited projects on the map. Locate our developments across Dhaka including Bashundhara R/A and Jolshiri R/A with full addresses and directions.",
  keywords: ["Stellar Structures locations", "project locations Dhaka", "Bashundhara map", "Jolshiri map"],
  openGraph: { title: "Project Map - Stellar Structures Limited", description: "Find Stellar Structures Limited projects on the map.", type: "website" },
};

const locations = [
  {
    title: "Bashundhara R/A",
    address: "Block C, Bashundhara Residential Area, Dhaka 1229, Bangladesh",
    phone: "+880 1XXX-XXXXXX",
    type: "Residential",
    status: "Ongoing",
    coordinates: { lat: "23.8103", lng: "90.4125" },
    hours: "Saturday - Thursday: 10:00 AM - 7:00 PM",
  },
  {
    title: "Jolshiri R/A",
    address: "Jolshiri Residential Area, Uttara, Dhaka 1230, Bangladesh",
    phone: "+880 1XXX-XXXXXX",
    type: "Residential",
    status: "Upcoming",
    coordinates: { lat: "23.8200", lng: "90.4000" },
    hours: "Saturday - Thursday: 10:00 AM - 7:00 PM",
  },
  {
    title: "Stellar Commercial Hub",
    address: "Block B, Bashundhara R/A, Dhaka 1229, Bangladesh",
    phone: "+880 1XXX-XXXXXX",
    type: "Commercial",
    status: "Completed",
    coordinates: { lat: "23.8110", lng: "90.4130" },
    hours: "Saturday - Thursday: 9:00 AM - 8:00 PM",
  },
];

export default function ProjectMapPage() {
  return (
    <>
      <PageHeader
        tag="Find Us"
        title="Project Map"
        subtitle="Locate our developments across Dhaka. Visit our project sites and sales offices to experience Stellar Structures quality firsthand."
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "Map" }]}
      />
      <section className="section-box" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            <div className="col-lg-7 col-md-12" style={{ marginBottom: "30px" }}>
              <div style={{ width: "100%", height: "500px", background: "#F0F0EA", borderRadius: "4px", overflow: "hidden", position: "relative" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8!2d90.4125!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzM3LjEiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stellar Structures Project Locations"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div style={{ marginBottom: "20px" }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 600, color: "#061424", marginBottom: "8px" }}>Our Locations</h2>
                <p style={{ fontSize: "14px", color: "#8A8A85", lineHeight: 1.7 }}>Visit any of our project locations to learn more about available units and ongoing developments.</p>
              </div>
              {locations.map((loc, i) => (
                <div key={i} style={{ padding: "24px", border: "1px solid #EFEFED", marginBottom: "16px", background: "#fff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 2vw, 1.3rem)", fontWeight: 600, color: "#061424" }}>{loc.title}</h3>
                    <span style={{ padding: "4px 12px", background: loc.status === "Completed" ? "rgba(34,139,34,0.1)" : loc.status === "Ongoing" ? "rgba(201,162,39,0.1)" : "rgba(6,20,36,0.05)", color: loc.status === "Completed" ? "#228B22" : loc.status === "Ongoing" ? "#C9A227" : "#061424", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{loc.status}</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>{loc.type}</p>
                  <p style={{ fontSize: "13px", color: "#8A8A85", marginBottom: "4px" }}>{loc.address}</p>
                  <p style={{ fontSize: "13px", color: "#8A8A85", marginBottom: "4px" }}>{loc.phone}</p>
                  <p style={{ fontSize: "13px", color: "#8A8A85", marginBottom: "12px" }}>{loc.hours}</p>
                  <Link href={`https://www.google.com/maps?q=${loc.coordinates.lat},${loc.coordinates.lng}`} target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "10px 24px", background: "#061424", color: "#fff", fontSize: "12px", fontWeight: 600, textDecoration: "none" }}>Get Directions</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Need Assistance Finding Us?"
        subtitle="Our team is happy to help you reach any of our project locations. Contact us for personalized directions or to schedule a visit."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
        secondaryBtn={{ label: "Schedule Visit", href: "/site-visit" }}
      />
    </>
  );
}
