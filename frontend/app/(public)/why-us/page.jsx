import PageHeader from "../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../components/frontend/PageElements/FeatureGrid";
import StatBar from "../../components/frontend/PageElements/StatBar";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Why Choose Stellar | Stellar Structures Limited",
  description:
    "Discover why Stellar Structures Limited is Dhaka's most trusted real estate developer — quality construction, transparent process, prime locations, and unmatched customer satisfaction.",
  keywords: [
    "why Stellar Structures",
    "best real estate developer Dhaka",
    "trusted property developer Bangladesh",
    "quality construction Dhaka",
    "Stellar Structures reviews",
  ],
  openGraph: {
    title: "Why Choose Stellar | Stellar Structures Limited",
    description: "Discover why Stellar Structures Limited is Dhaka's most trusted real estate developer.",
    type: "website",
  },
};

const reasons = [
  {
    icon: "🏗️",
    title: "Proven Track Record",
    description:
      "Delivering premium residential and commercial projects in Dhaka with a reputation built on trust and excellence.",
  },
  {
    icon: "📐",
    title: "Architectural Excellence",
    description:
      "Our in-house design team collaborates with leading architects to create spaces that are both aesthetically stunning and functionally superior.",
  },
  {
    icon: "🔒",
    title: "Transparent Transactions",
    description:
      "No hidden costs, no surprises. We provide complete clarity on pricing, timelines, and project milestones throughout the entire journey.",
  },
  {
    icon: "⏰",
    title: "On-Time Delivery",
    description:
      "We respect your time. Our efficient project management ensures that every development is completed on schedule without compromising quality.",
  },
  {
    icon: "🌿",
    title: "Sustainable Development",
    description:
      "From energy-efficient designs to eco-friendly materials, we build responsibly to protect the environment and reduce long-term costs.",
  },
  {
    icon: "❤️",
    title: "Post-Handover Support",
    description:
      "Our relationship doesn't end at handover. We provide comprehensive after-sales service and maintenance to keep your property in pristine condition.",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "2,500+", label: "Happy Homeowners" },
  { value: "100%", label: "Transparency Record" },
];

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        tag="About Us"
        title="Why Choose Stellar"
        subtitle="Discover what sets us apart in Bangladesh's competitive real estate landscape"
        breadcrumbs={[{ label: "About" }, { label: "Why Choose Us" }]}
      />

      <FeatureGrid
        title="6 Reasons to Choose Stellar"
        subtitle="We go beyond construction — we create lasting value"
        features={reasons}
        columns={3}
      />

    
      <CTASection
        title="Make the Right Choice"
        subtitle="Experience the Stellar difference — where quality meets trust and innovation meets tradition."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
        secondaryBtn={{ label: "View Projects", href: "/projects" }}
      />
    </>
  );
}
