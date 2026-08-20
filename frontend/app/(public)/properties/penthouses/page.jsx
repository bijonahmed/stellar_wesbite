import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Penthouses - Stellar Structures Limited",
  description: "Exclusive penthouses for sale in Bashundhara and Jolshiri, Dhaka. Top-floor luxury with panoramic city views and exclusive amenities.",
  keywords: ["penthouse Dhaka", "luxury penthouse Bashundhara", "penthouse apartment Dhaka", "exclusive homes Bangladesh"],
  openGraph: {
    title: "Penthouses - Stellar Structures",
    description: "The pinnacle of luxury living with panoramic views in Dhaka's skyline.",
    type: "website"
  }
};

const features = [
  { icon: "🏙️", title: "Top Floor Living", description: "Exclusive penthouses situated on the highest floors, offering unmatched privacy and prestige." },
  { icon: "🌅", title: "Panoramic Views", description: "360-degree views of Dhaka's skyline, green spaces, and surrounding neighbourhoods from every room." },
  { icon: "👑", title: "Exclusive Amenities", description: "Private elevator access, personal infinity pool, jacuzzi, and dedicated concierge services." },
  { icon: "✨", title: "Bespoke Interiors", description: "Custom-designed interiors with imported marble, Italian fixtures, and handcrafted finishing details." },
  { icon: "🍷", title: "Entertainment Spaces", description: "Private home theatre, wine cellar, and expansive living areas designed for grand entertaining." },
  { icon: "🌿", title: "Rooftop Garden", description: "Exclusive rooftop terrace with landscaped garden, outdoor kitchen, and al fresco dining area." },
];

const projects = [
  {
    name: "Bashundhara Sky Residences",
    status: "Ongoing",
    description: "Limited-edition penthouses atop a premium residential tower in Bashundhara, featuring private pools, concierge, and panoramic views of the city.",
    size: "4,000 - 7,000 sqft",
    type: "4-5 Bed Penthouse"
  },
  {
    name: "Jolshiri Crown Penthouses",
    status: "Upcoming",
    description: "Ultra-exclusive penthouses with private terraces and bespoke interiors in the prestigious Jolshiri area, reserved for the most discerning buyers.",
    size: "5,000 - 9,000 sqft",
    type: "5-6 Bed Penthouse"
  }
];

export default function PenthousesPage() {
  return (
    <>
      <PageHeader
        tag="Properties"
        title="Penthouses"
        subtitle="The pinnacle of luxury living in Dhaka, crafted for those who accept nothing less than extraordinary."
        breadcrumbs={[{ label: "Properties", href: "/properties" }, { label: "Penthouses" }]}
      />

      <FeatureGrid
        title="Penthouse Features"
        subtitle="Unrivalled luxury and exclusivity define every penthouse by Stellar Structures Limited."
        features={features}
        columns={3}
      />

      

      <CTASection
        title="Reserve Your Penthouse"
        subtitle="Schedule a private appointment to experience our penthouse show homes and secure your exclusive residence."
        primaryBtn={{ label: "Private Viewing", href: "/site-visit" }}
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}