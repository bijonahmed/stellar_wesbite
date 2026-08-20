import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Property Valuation Services - Stellar Structures Limited",
  description: "Professional property valuation in Dhaka. Accurate market valuation, legal verification, and investment appraisal by Stellar Structures Limited.",
  keywords: ["property valuation Dhaka","real estate appraisal Bangladesh","property price estimate"],
  openGraph: { title: "Property Valuation - Stellar Structures", description: "Professional property valuation in Dhaka.", type: "website" }
};

const features = [
  { icon: "💎", title: "Market Valuation", description: "Accurate property valuation based on current market conditions, location analysis, and comparable sales." },
  { icon: "🔍", title: "Independent Assessment", description: "Unbiased third-party property evaluation ensuring fair and transparent pricing." },
  { icon: "📜", title: "Legal Verification", description: "Thorough verification of property documents, title deeds, and encumbrance status." },
  { icon: "💰", title: "Investment Appraisal", description: "Detailed analysis of potential returns, rental yields, and capital appreciation projections." },
  { icon: "🏦", title: "Bank Loan Valuation", description: "Valuation reports accepted by major banks and financial institutions for mortgage processing." },
  { icon: "⚖️", title: "Comparative Analysis", description: "Side-by-side comparison of properties to help you make the best decision for your needs." }
];

export default function ValuationPage() {
  return (
    <>
      <PageHeader tag="Services" title="Property Valuation" subtitle="Accurate and transparent property valuation services to help you make informed decisions." breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Property Valuation" }]} />
      <FeatureGrid title="Valuation Services" subtitle="Trust our experts to provide accurate and reliable property assessments." features={features} columns={3} />
      <CTASection title="Need a Property Valuation?" subtitle="Contact us for a professional valuation report." primaryBtn={{ label: "Request Valuation", href: "/contact" }} 
       />
    </>
  );
}
