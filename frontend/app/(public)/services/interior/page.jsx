import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Interior Design Services - Stellar Structures Limited",
  description: "Custom interior design solutions in Dhaka. Modern aesthetics, space optimization, and personalized home interiors by Stellar Structures Limited.",
  keywords: ["interior design Dhaka","home interior Bangladesh","apartment interior design"],
  openGraph: { title: "Interior Design - Stellar Structures", description: "Custom interior design solutions in Dhaka.", type: "website" }
};

const features = [
  { icon: "🎨", title: "Space Planning", description: "Optimized layouts that maximize usable space while maintaining aesthetic appeal and flow." },
  { icon: "🪑", title: "Material Selection", description: "Curated selection of premium fabrics, woods, tiles, and finishes for a cohesive look." },
  { icon: "🛋️", title: "Custom Furniture", description: "Bespoke furniture design and sourcing to perfectly match your space and style." },
  { icon: "💡", title: "Lighting Design", description: "Strategic lighting plans that enhance ambiance and functionality throughout your home." },
  { icon: "🍳", title: "Kitchen Design", description: "Modern kitchen layouts with premium countertops, cabinetry, and appliance integration." },
  { icon: "🚿", title: "Bathroom Design", description: "Luxurious bathroom interiors with premium fixtures, fittings, and waterproofing solutions." }
];

export default function InteriorPage() {
  return (
    <>
      <PageHeader tag="Services" title="Interior Design" subtitle="Transform your living space with expert interior design that reflects your personality and lifestyle." breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Interior Design" }]} />
      <FeatureGrid title="Interior Design Services" subtitle="From concept to completion, we create interiors that inspire and delight." features={features} columns={3} />
      <CTASection title="Ready to Transform Your Space?" subtitle="Let our interior designers create your dream home." primaryBtn={{ label: "Book Consultation", href: "/appointment" }} secondaryBtn={{ label: "View Projects", href: "/projects" }} />
    </>
  );
}
