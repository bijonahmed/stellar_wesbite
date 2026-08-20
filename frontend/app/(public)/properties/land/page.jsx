import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Land & Plots - Stellar Structures Limited",
  description: "Residential and commercial land plots for sale in Bashundhara, Jolshiri, and greater Dhaka. Invest in premium land.",
  keywords: ["land for sale Dhaka", "plots Bashundhara", "commercial land Dhaka", "investment plots Bangladesh"],
  openGraph: {
    title: "Land & Plots - Stellar Structures",
    description: "Premium land and plots for sale in Dhaka's most promising growth corridors.",
    type: "website"
  }
};

const features = [
  { icon: "🏡", title: "Residential Plots", description: "RDA-approved residential plots in gated communities with road access, drainage, and utility connections." },
  { icon: "🏗️", title: "Commercial Land", description: "Prime commercial land parcels on main roads with high visibility for showrooms, plazas, and mixed-use developments." },
  { icon: "📈", title: "Investment Plots", description: "Strategically located land in growth corridors offering exceptional long-term capital appreciation potential." },
  { icon: "✅", title: "Clear Title Deeds", description: "All plots come with verified legal documentation, RDA approval, and hassle-free registration support." },
  { icon: "🛣️", title: "Infrastructure Ready", description: "Plots with paved road access, electricity, water supply, and sewage connections already in place." },
  { icon: "📍", title: "Prime Locations", description: "Land situated in Dhaka's fastest-growing areas near schools, hospitals, and commercial hubs." },
];

const projects = [
  {
    name: "Bashundhara Phase 8",
    status: "Available",
    description: "Residential plots in the well-planned Bashundhara Phase 8 with all modern infrastructure, ideal for constructing custom homes.",
    size: "2,500 - 5,000 sqft",
    type: "Residential"
  },
  {
    name: "Jolshiri Extension Land",
    status: "Pre-Launch",
    description: "Mixed residential and commercial land parcels in the rapidly developing Jolshiri extension area, perfect for early investors.",
    size: "1,500 - 10,000 sqft",
    type: "Residential & Commercial"
  }
];

export default function LandPage() {
  return (
    <>
      <PageHeader
        tag="Properties"
        title="Land & Plots"
        subtitle="Invest in Dhaka's future with premium land parcels in the city's most promising growth areas."
        breadcrumbs={[{ label: "Properties", href: "/properties" }, { label: "Land & Plots" }]}
      />

      <FeatureGrid
        title="Why Invest in Land"
        subtitle="Land remains one of the most reliable and rewarding investment assets in Bangladesh's growing real estate market."
        features={features}
        columns={3}
      />

      

      <CTASection
        title="Invest in Land Today"
        subtitle="Speak with our land specialists to explore verified plots and secure the best deals before they're gone."
        primaryBtn={{ label: "Schedule a Visit", href: "/site-visit" }}
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}