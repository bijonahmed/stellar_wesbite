import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Construction Management Services - Stellar Structures Limited",
  description: "Expert construction management in Dhaka. Quality control, timeline management, and premium material sourcing by Stellar Structures Limited.",
  keywords: ["construction management Dhaka","building construction Bangladesh","quality construction"],
  openGraph: { title: "Construction Management - Stellar Structures", description: "Expert construction management in Dhaka.", type: "website" }
};

const features = [
  { icon: "🎯", title: "Quality Control", description: "Multi-layered quality checks at every construction phase to ensure structural integrity and finish quality." },
  { icon: "📅", title: "Timeline Management", description: "Proactive scheduling and monitoring to deliver projects on time without compromising quality." },
  { icon: "🧱", title: "Material Sourcing", description: "Direct partnerships with premium material suppliers for quality bricks, cement, steel, and fixtures." },
  { icon: "🛡️", title: "Safety Standards", description: "Strict adherence to international safety protocols protecting workers and ensuring site safety." },
  { icon: "👷", title: "Project Oversight", description: "Experienced site engineers and project managers providing daily supervision and progress reporting." },
  { icon: "💰", title: "Cost Management", description: "Transparent budgeting with no hidden costs, ensuring maximum value for every taka invested." }
];

export default function ConstructionPage() {
  return (
    <>
      <PageHeader tag="Services" title="Construction Management" subtitle="Expert construction management delivering quality buildings with precision and care." breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Construction Management" }]} />
      <FeatureGrid title="Why Choose Our Construction" subtitle="We combine traditional craftsmanship with modern techniques for superior results." features={features} columns={3} />
      <CTASection title="Need Construction Services?" subtitle="Discuss your project requirements with our expert team today." primaryBtn={{ label: "Contact Us", href: "/contact" }} secondaryBtn={{ label: "Our Process", href: "/services/development" }} />
    </>
  );
}
