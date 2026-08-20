import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Retail Shops - Stellar Structures Limited",
  description: "Prime retail shop spaces for sale in Bashundhara and Jolshiri, Dhaka. Ground floor, mezzanine, and corner units available.",
  keywords: ["retail shops Dhaka", "shop for sale Bashundhara", "commercial shop Dhaka", "retail space Bangladesh"],
  openGraph: {
    title: "Retail Shops - Stellar Structures",
    description: "High-visibility retail shops in Dhaka's busiest commercial corridors.",
    type: "website"
  }
};

const features = [
  { icon: "🛍️", title: "Ground Floor Units", description: "High-footfall ground-floor shops with large frontage, ideal for showrooms, boutiques, and pharmacies." },
  { icon: "🏬", title: "Mezzanine Shops", description: "Versatile mezzanine-level retail spaces perfect for cafés, salons, and service-based businesses." },
  { icon: "🔲", title: "Corner Units", description: "Premium corner shops with dual-street exposure and maximum visibility for brand-focused businesses." },
  { icon: "🚶", title: "High Foot Traffic", description: "Located in commercial zones with strong pedestrian flow and proximity to residential communities." },
  { icon: "🔌", title: "Ready to Fit Out", description: "Shops delivered with basic electrical, water, and drainage connections ready for custom fit-out." },
  { icon: "📐", title: "Flexible Sizes", description: "Units ranging from 200 to 2,000 sqft to accommodate businesses of every scale and budget." },
];

const projects = [
  {
    name: "Bashundhara Market Square",
    status: "Ongoing",
    description: "Ground-floor and mezzanine retail shops in a high-traffic market area near Bashundhara City, attracting thousands of daily visitors.",
    size: "200 - 1,200 sqft",
    type: "Ground & Mezzanine"
  },
  {
    name: "Jolshiri Avenue Shops",
    status: "Upcoming",
    description: "Corner and standard retail units along the main Jolshiri avenue, perfect for restaurants, banks, and lifestyle brands.",
    size: "300 - 2,000 sqft",
    type: "Corner & Standard"
  }
];

export default function ShopsPage() {
  return (
    <>
      <PageHeader
        tag="Properties"
        title="Retail Shops"
        subtitle="Prime retail spaces in Dhaka's most commercially active zones, developed by Stellar Structures Limited."
        breadcrumbs={[{ label: "Properties", href: "/properties" }, { label: "Shops" }]}
      />

      <FeatureGrid
        title="Retail Shop Features"
        subtitle="Strategically positioned shops designed to maximise visibility, foot traffic, and business revenue."
        features={features}
        columns={3}
      />

      

      <CTASection
        title="Secure Your Retail Space"
        subtitle="Talk to our sales team to reserve a shop in our upcoming and ongoing commercial projects."
        primaryBtn={{ label: "Reserve Now", href: "/site-visit" }}
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}