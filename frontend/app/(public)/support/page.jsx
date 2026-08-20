import PageHeader from "../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Customer Support - Stellar Structures Limited",
  description: "Get dedicated customer support from Stellar Structures Limited. Phone, email, portal, and in-person assistance for all buyers.",
  keywords: ["customer support Dhaka", "property developer support", "apartment buyer help Bangladesh"],
  openGraph: {
    title: "Customer Support - Stellar Structures",
    description: "Dedicated support for every Stellar Structures buyer.",
    type: "website",
  },
};

const supportChannels = [
  {
    icon: "📞",
    title: "Phone Support",
    description:
      "Call our dedicated customer support line at +880 2 8834 5678. Available Sunday through Thursday from 9 AM to 6 PM. Our team handles booking queries, payment issues, construction updates, and general assistance.",
  },
  {
    icon: "✉️",
    title: "Email Support",
    description:
      "Write to us at support@stellarstructuresbd.com for detailed inquiries, document requests, and formal communications. Our team responds within 24 business hours with comprehensive answers.",
  },
  {
    icon: "💻",
    title: "Online Portal",
    description:
      "Log in to the customer portal to raise service requests, track complaint resolution status, and access real-time project updates. Available 24/7 with a dashboard showing all your interactions.",
  },
  {
    icon: "🏢",
    title: "In-Person Support",
    description:
      "Visit our office for face-to-face assistance. Our customer relationship team at the Banani sales office handles all post-purchase queries, document collection, and walkthrough requests in person.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        tag="Customers"
        title="Customer Support"
        subtitle="Your satisfaction is our priority. Reach us through multiple channels for prompt and reliable assistance."
        breadcrumbs={[{ label: "Customers" }, { label: "Support" }]}
      />
      <FeatureGrid
        title="How to Reach Us"
        subtitle="Choose the support channel that works best for you. Our trained professionals are ready to assist."
        features={supportChannels}
        columns={2}
      />
      
      <CTASection
        title="We Are Here to Help"
        subtitle="No question is too small. Reach out and our team will ensure you get the support you deserve."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
       
      />
    </>
  );
}
