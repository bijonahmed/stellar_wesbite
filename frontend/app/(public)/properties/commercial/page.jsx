import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Commercial Spaces - Stellar Structures Limited",
  description: "Premium commercial spaces in Bashundhara and Jolshiri, Dhaka. Retail shops, office floors, and business centres for sale.",
  keywords: ["commercial spaces Dhaka", "office space Bashundhara", "retail shops Dhaka", "business centre Bangladesh"],
  openGraph: {
    title: "Commercial Spaces - Stellar Structures",
    description: "Invest in premium commercial real estate in Dhaka's business corridors.",
    type: "website"
  }
};

const features = [
  { icon: "🏪", title: "Retail Shops", description: "Ground-floor and mezzanine retail spaces in high-traffic commercial zones with excellent visibility." },
  { icon: "🏢", title: "Office Floors", description: "Full-floor and partial office spaces with modern infrastructure for corporate and business operations." },
  { icon: "💼", title: "Business Centres", description: "Fully serviced business centres with meeting rooms, reception, and shared amenities for startups." },
  { icon: "📈", title: "High ROI", description: "Strategic locations offering strong rental yields and long-term capital appreciation in Dhaka." },
  { icon: "🚗", title: "Ample Parking", description: "Multi-level parking facilities for tenants, customers, and visitors in all commercial projects." },
  { icon: "🔌", title: "Modern Infrastructure", description: "High-speed internet, centralised AC, fire safety systems, and power backup in every space." },
];

const projects = [
  {
    name: "Bashundhara Commercial Hub",
    status: "Ongoing",
    description: "Mixed-use commercial complex featuring retail shops, office floors, and food court in the bustling Bashundhara area near the airport.",
    size: "400 - 5,000 sqft",
    type: "Shops & Offices"
  },
  {
    name: "Jolshiri Business Park",
    status: "Upcoming",
    description: "Modern business park designed for corporate offices and retail brands, located on the main road with excellent public transport access.",
    size: "500 - 3,500 sqft",
    type: "Offices & Retail"
  }
];

export default function CommercialPage() {
  return (
    <>
      <PageHeader
        tag="Properties"
        title="Commercial Spaces"
        subtitle="Invest in Dhaka's thriving commercial real estate market with Stellar Structures Limited."
        breadcrumbs={[{ label: "Properties", href: "/properties" }, { label: "Commercial" }]}
      />

      <FeatureGrid
        title="Commercial Property Features"
        subtitle="Purpose-built commercial spaces designed to maximise business potential and returns."
        features={features}
        columns={3}
      />

      
      <CTASection
        title="Invest in Commercial Real Estate"
        subtitle="Speak with our commercial property specialists to explore available units and investment plans."
        primaryBtn={{ label: "Request a Viewing", href: "/site-visit" }}
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}