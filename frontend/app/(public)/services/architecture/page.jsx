import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Architectural Design Services - Stellar Structures Limited",
  description: "Professional architectural design in Dhaka. Conceptual design, structural planning, and sustainable architecture by Stellar Structures Limited.",
  keywords: ["architectural design Dhaka","building architect Bangladesh","house design Dhaka"],
  openGraph: { title: "Architectural Design - Stellar Structures", description: "Professional architectural design in Dhaka.", type: "website" }
};

const features = [
  { icon: "✏️", title: "Conceptual Design", description: "Creative vision development that transforms your ideas into architectural masterpieces." },
  { icon: "📐", title: "Structural Planning", description: "Engineering-driven structural designs ensuring safety, durability, and optimal space utilization." },
  { icon: "🌿", title: "Sustainable Design", description: "Eco-friendly architecture incorporating natural ventilation, daylighting, and energy-efficient systems." },
  { icon: "🏙️", title: "Urban Planning", description: "Community-focused development plans that integrate with surrounding infrastructure and environment." },
  { icon: "🖥️", title: "3D Visualization", description: "Photorealistic 3D renders and walkthroughs to help you visualize your project before construction." },
  { icon: "📋", title: "Regulatory Compliance", description: "Complete management of building permits, approvals, and regulatory documentation." }
];

export default function ArchitecturePage() {
  return (
    <>
      <PageHeader tag="Services" title="Architectural Design" subtitle="Innovative architectural solutions that blend form, function, and sustainability." breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Architectural Design" }]} />
      <FeatureGrid title="Architecture Services" subtitle="Our architects bring creativity and precision to every project." features={features} columns={3} />
      <CTASection title="Have a Vision?" subtitle="Let our architects bring your dream project to life." primaryBtn={{ label: "Start Your Project", href: "/contact" }} secondaryBtn={{ label: "See Our Work", href: "/projects" }} />
    </>
  );
}
