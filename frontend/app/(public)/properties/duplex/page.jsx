import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Duplex Houses - Stellar Structures Limited",
  description: "Luxury duplex houses for sale in Bashundhara and Jolshiri, Dhaka. Two-floor living with private terraces and premium finishes.",
  keywords: ["duplex houses Dhaka", "duplex Bashundhara", "luxury duplex Dhaka", "two-storey house Bangladesh"],
  openGraph: {
    title: "Duplex Houses - Stellar Structures",
    description: "Elegant duplex homes with two floors of luxury living in Dhaka's finest neighbourhoods.",
    type: "website"
  }
};

const features = [
  { icon: "🏠", title: "Two-Floor Living", description: "Spacious duplex layouts across two levels, offering distinct zones for living, dining, and private bedrooms." },
  { icon: "🌅", title: "Private Terrace", description: "Dedicated rooftop or terrace spaces for outdoor dining, gardening, and family gatherings under the sky." },
  { icon: "✨", title: "Luxury Finishes", description: "Marble flooring, designer lighting, imported kitchen fittings, and premium bathroom fixtures throughout." },
  { icon: "🚗", title: "Private Garage", description: "Attached two-car garage with direct internal access to the ground floor for convenience and security." },
  { icon: "🌿", title: "Private Garden", description: "Front and rear garden spaces with landscaped greenery for a serene and private living environment." },
  { icon: "🔒", title: "Smart Home Ready", description: "Pre-wired for smart home automation including lighting, climate, security, and entertainment systems." },
];

const projects = [
  {
    name: "Bashundhara Duplex Enclave",
    status: "Ongoing",
    description: "Exclusive duplex houses in a gated community within Bashundhara, featuring modern architecture, private gardens, and community amenities.",
    size: "2,800 - 4,500 sqft",
    type: "3-4 Bed Duplex"
  },
  {
    name: "Jolshiri Duplex Villas",
    status: "Upcoming",
    description: "Ultra-luxury duplex villas with panoramic views, private terraces, and bespoke interior finishes in the serene Jolshiri neighbourhood.",
    size: "3,200 - 5,500 sqft",
    type: "4-5 Bed Duplex"
  }
];

export default function DuplexPage() {
  return (
    <>
      <PageHeader
        tag="Properties"
        title="Duplex Houses"
        subtitle="Experience the grandeur of two-floor luxury living in Dhaka's most prestigious residential communities."
        breadcrumbs={[{ label: "Properties", href: "/properties" }, { label: "Duplex Houses" }]}
      />

      <FeatureGrid
        title="Duplex Living Features"
        subtitle="Elegantly designed duplex homes that combine space, privacy, and sophistication for modern families."
        features={features}
        columns={3}
      />

      
      <CTASection
        title="Own a Luxury Duplex"
        subtitle="Arrange a private viewing of our duplex show homes and experience two-floor living firsthand."
        primaryBtn={{ label: "Book a Viewing", href: "/site-visit" }}
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}