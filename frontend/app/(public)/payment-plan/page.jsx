import PageHeader from "../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Payment Plans - Stellar Structures Limited",
  description: "Explore flexible payment plans at Stellar Structures Limited. During construction, post-handover, full payment, and bank financing options available.",
  keywords: ["payment plans Dhaka", "apartment payment schedule", "real estate installments"],
  openGraph: {
    title: "Payment Plans - Stellar Structures",
    description: "Flexible payment plans for every buyer.",
    type: "website",
  },
};

const plans = [
  {
    icon: "📊",
    title: "During Construction",
    description:
      "Pay in installments aligned with construction milestones. Typically spread across 24-36 months with small down payment at booking. Ideal for buyers who want to spread payments over the construction period with zero interest.",
  },
  {
    icon: "🏠",
    title: "Post Handover",
    description:
      "Pay a portion during construction and the remaining balance after receiving handover. This plan gives you time to arrange finances while securing your apartment at today's price.",
  },
  {
    icon: "💰",
    title: "Full Payment",
    description:
      "Receive the most attractive discount when you pay the full amount upfront. This is the best option for investors and buyers with available funds looking for maximum value.",
  },
  {
    icon: "🏦",
    title: "Bank Financing",
    description:
      "We partner with leading banks in Bangladesh to offer mortgage financing options. Our team assists with documentation and liaises with partner banks to simplify the approval process.",
  },
];

export default function PaymentPlanPage() {
  return (
    <>
      <PageHeader
        tag="Customers"
        title="Payment Plans"
        subtitle="Flexible plans designed to make your homeownership journey comfortable and stress-free."
        breadcrumbs={[{ label: "Customers" }, { label: "Payment Plans" }]}
      />
      <FeatureGrid
        title="Choose Your Payment Plan"
        subtitle="Select from a range of flexible options tailored to suit different financial situations."
        features={plans}
        columns={2}
      />
      <CTASection
        title="Need a Custom Plan?"
        subtitle="Talk to our sales team to discuss a payment schedule that works best for you."
        primaryBtn={{ label: "Contact Sales", href: "/contact" }}
        secondaryBtn={{ label: "EMI Calculator", href: "/emi-calculator" }}
      />
    </>
  );
}
