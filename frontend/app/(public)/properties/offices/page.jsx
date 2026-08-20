import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Office Spaces - Stellar Structures Limited",
  description: "Executive office spaces for sale in Bashundhara and Jolshiri, Dhaka. Open plan, corporate offices, and executive suites.",
  keywords: ["office space Dhaka", "executive suites Bashundhara", "corporate office Dhaka", "office for sale Bangladesh"],
  openGraph: {
    title: "Office Spaces - Stellar Structures",
    description: "Premium office spaces in Dhaka's prime business districts.",
    type: "website"
  }
};

const features = [
  { icon: "👔", title: "Executive Suites", description: "Premium private offices with elegant finishes, ideal for leadership teams and client-facing operations." },
  { icon: "📋", title: "Open Plan Offices", description: "Flexible open floor plates that can be configured for collaborative teams of any size." },
  { icon: "🏛️", title: "Corporate Offices", description: "Full-floor corporate offices with dedicated lobbies, boardrooms, and executive washrooms." },
  { icon: "📶", title: "Tech-Ready", description: "Structured cabling, server rooms, and high-speed internet infrastructure pre-installed." },
  { icon: "🌡️", title: "Centralised Climate", description: "HVAC systems with individual zone control for comfortable working environments year-round." },
  { icon: "🔐", title: "Access Control", description: "Biometric entry systems, visitor management, and 24/7 security for complete peace of mind." },
];

const projects = [
  {
    name: "Bashundhara Tower",
    status: "Ongoing",
    description: "Grade-A office tower in Bashundhara featuring executive suites and open-plan floors with panoramic city views and premium lobby finishes.",
    size: "1,200 - 8,000 sqft",
    type: "Executive & Corporate"
  },
  {
    name: "Jolshiri Office Complex",
    status: "Upcoming",
    description: "Modern office complex offering flexible floor plans for businesses of all sizes, located on the main arterial road with excellent connectivity.",
    size: "800 - 5,000 sqft",
    type: "Open Plan & Suites"
  }
];

export default function OfficesPage() {
  return (
    <>
      <PageHeader
        tag="Properties"
        title="Office Spaces"
        subtitle="Professional office environments in Dhaka's premier business districts, developed by Stellar Structures Limited."
        breadcrumbs={[{ label: "Properties", href: "/properties" }, { label: "Offices" }]}
      />

      <FeatureGrid
        title="Office Space Features"
        subtitle="World-class workspaces built to elevate your business presence and productivity."
        features={features}
        columns={3}
      />

     

      <CTASection
        title="Upgrade Your Workspace"
        subtitle="Connect with our office space consultants to find the perfect fit for your business."
        primaryBtn={{ label: "Book a Tour", href: "/site-visit" }}
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}