import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Property Development Services - Stellar Structures Limited",
  description: "End-to-end property development services in Dhaka. From land acquisition to handover, Stellar Structures Limited delivers excellence.",
  keywords: ["property development Dhaka","real estate developer Bangladesh","construction company Dhaka"],
  openGraph: { title: "Property Development - Stellar Structures", description: "End-to-end property development in Dhaka.", type: "website" }
};

const steps = [
  { icon: "📍", title: "Site Identification", description: "Strategic selection of prime locations based on market analysis, connectivity, and growth potential." },
  { icon: "📐", title: "Feasibility Study", description: "Comprehensive analysis of project viability including market demand, financial projections, and regulatory compliance." },
  { icon: "🏗️", title: "Design & Planning", description: "Collaboration with top architects to create designs that blend aesthetics with functionality." },
  { icon: "🔨", title: "Construction", description: "Rigorous project management with quality control at every stage using premium materials." },
  { icon: "✅", title: "Quality Assurance", description: "Third-party inspections and internal audits ensure every detail meets our exacting standards." },
  { icon: "🔑", title: "Handover", description: "Seamless handover process with complete documentation, warranty coverage, and after-sales support." }
];

export default function DevelopmentPage() {
  return (
    <>
      <PageHeader tag="Services" title="Property Development" subtitle="Comprehensive development services from concept to completion, delivering premium living spaces across Dhaka." breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Property Development" }]} />
      <FeatureGrid title="Our Development Process" subtitle="A meticulous approach that ensures excellence at every stage." features={steps} columns={3} />
      <CTASection title="Planning a Development Project?" subtitle="Let our experienced team guide you from concept to reality." primaryBtn={{ label: "Get in Touch", href: "/contact" }} secondaryBtn={{ label: "Our Projects", href: "/projects" }} />
    </>
  );
}
