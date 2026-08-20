import PageHeader from "../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Customer Portal - Stellar Structures Limited",
  description: "Access the Stellar Structures customer portal to track construction progress, payment status, documents, and get support.",
  keywords: ["customer portal", "property tracking Dhaka", "buyer portal Bangladesh"],
  openGraph: {
    title: "Customer Portal - Stellar Structures",
    description: "Track your property journey with our customer portal.",
    type: "website",
  },
};

const portalFeatures = [
  {
    icon: "📈",
    title: "Track Progress",
    description:
      "Monitor real-time construction progress of your apartment through photos, videos, and milestone updates. Stay informed about every stage from foundation to handover with detailed progress reports.",
  },
  {
    icon: "💳",
    title: "Payment Status",
    description:
      "View your complete payment history, upcoming installments, and outstanding balances at a glance. Download payment receipts and track every transaction in one place.",
  },
  {
    icon: "📄",
    title: "Documents",
    description:
      "Access all your property documents including booking confirmation, allotment letter, payment receipts, and agreements. Securely store and retrieve important documents anytime from anywhere.",
  },
  {
    icon: "🎧",
    title: "Support",
    description:
      "Raise service requests, track complaints, and connect with your dedicated relationship manager. Our support team ensures your queries are resolved promptly and efficiently.",
  },
];

export default function CustomerPortalPage() {
  return (
    <>
      <PageHeader
        tag="Customers"
        title="Customer Portal"
        subtitle="Your one-stop digital platform to manage your property journey with Stellar Structures Limited."
        breadcrumbs={[{ label: "Customers" }, { label: "Customer Portal" }]}
      />
      <FeatureGrid
        title="Everything You Need, One Place"
        subtitle="The customer portal gives you complete visibility and control over your property purchase from booking to handover."
        features={portalFeatures}
        columns={2}
      />
      <section style={{ padding: "clamp(40px, 5vw, 80px) 0", background: "#F7F7F5" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 600,
              color: "#061424",
              marginBottom: "16px",
            }}
          >
            How to Access
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 1.5vw, 16px)",
              color: "#8A8A85",
              maxWidth: "600px",
              margin: "0 auto 24px",
              lineHeight: 1.8,
            }}
          >
            After completing your booking, you will receive login credentials via email and SMS. The portal is accessible 24/7 on both desktop and mobile browsers.
          </p>
        </div>
      </section>
      <CTASection
        title="Need Help?"
        subtitle="Our team is available to assist you with portal access and any other queries."
        primaryBtn={{ label: "Contact Support", href: "/contact" }}
        secondaryBtn={{ label: "Customer Support", href: "/support" }}
      />
    </>
  );
}
