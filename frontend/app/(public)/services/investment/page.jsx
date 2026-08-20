import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Investment Consultancy - Stellar Structures Limited",
  description: "Real estate investment consultancy in Dhaka. Market analysis, ROI advisory, and portfolio guidance by Stellar Structures Limited.",
  keywords: ["real estate investment Dhaka","property investment Bangladesh","investment consultancy"],
  openGraph: { title: "Investment Consultancy - Stellar Structures", description: "Real estate investment consultancy in Dhaka.", type: "website" }
};

const features = [
  { icon: "📊", title: "Market Analysis", description: "In-depth market research and trend analysis to identify the best investment opportunities." },
  { icon: "📈", title: "ROI Advisory", description: "Data-driven return on investment projections to help you make informed decisions." },
  { icon: "💼", title: "Portfolio Diversification", description: "Strategic advice on diversifying your real estate portfolio across property types and locations." },
  { icon: "⚠️", title: "Risk Assessment", description: "Comprehensive risk analysis identifying potential challenges and mitigation strategies." },
  { icon: "⚖️", title: "Legal Guidance", description: "Expert guidance on legal requirements, documentation, and compliance for property transactions." },
  { icon: "🌏", title: "NRB Investment Support", description: "Specialized support for Non-Resident Bangladeshis looking to invest in premium properties." }
];

export default function InvestmentPage() {
  return (
    <>
      <PageHeader tag="Services" title="Investment Consultancy" subtitle="Expert guidance to maximize your real estate investment potential in Bangladesh." breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Investment Consultancy" }]} />
      <FeatureGrid title="Investment Services" subtitle="Make smart investment decisions backed by data and expertise." features={features} columns={3} />
      <CTASection title="Start Investing Today" subtitle="Speak with our investment advisors to explore premium opportunities." primaryBtn={{ label: "Speak to Advisor", href: "/contact" }} secondaryBtn={{ label: "View Projects", href: "/projects" }} />
    </>
  );
}
