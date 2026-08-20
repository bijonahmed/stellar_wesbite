import PageHeader from "../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Book an Appointment - Stellar Structures Limited",
  description: "Book an appointment with Stellar Structures Limited for property consultation, project discussion, and personalized guidance in Dhaka.",
  keywords: ["book appointment Dhaka", "property consultation Bangladesh", "real estate meeting"],
  openGraph: {
    title: "Book an Appointment - Stellar Structures",
    description: "Schedule a consultation with our team.",
    type: "website",
  },
};

const consultationTypes = [
  {
    icon: "💼",
    title: "Sales Consultation",
    description:
      "Meet with our experienced sales advisors to explore available units, pricing, and payment plans. We walk you through project details and help you find the perfect apartment.",
  },
  {
    icon: "📐",
    title: "Design & Customization",
    description:
      "Discuss interior layout options, finish customization, and design preferences with our in-house design team. Tailor your apartment to match your personal style.",
  },
  {
    icon: "💰",
    title: "Financial Planning",
    description:
      "Get expert guidance on payment plans, bank financing options, tax implications, and overall financial planning for your property investment in Bangladesh.",
  },
  {
    icon: "🤝",
    title: "Investment Advisory",
    description:
      "Consult with our investment specialists to understand market trends, expected appreciation, rental yields, and make informed decisions about property investments.",
  },
];

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        tag="Customers"
        title="Book an Appointment"
        subtitle="Schedule a personalized consultation with our expert team. We are here to guide you every step of the way."
        breadcrumbs={[{ label: "Customers" }, { label: "Appointment" }]}
      />
      <FeatureGrid
        title="Choose Your Consultation"
        description="Select the type of consultation that best fits your needs. All consultations are free of charge and carry no obligation."
        features={consultationTypes}
        columns={2}
      />
    
      <CTASection
        title="Prefer to Call?"
        subtitle="Our sales team is available during working hours to assist you immediately."
       
        secondaryBtn={{ label: "Contact", href: "/contact" }}
      />
    </>
  );
}
