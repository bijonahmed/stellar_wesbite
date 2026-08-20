import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";
import BookingProcessClient from "./BookingProcessClient";

export const metadata = {
  title: "Booking Process | Stellar Structures Limited",
  description:
    "Follow the simple 5-step booking process at Stellar Structures Limited. From initial consultation and unit selection to documentation, payment plan selection, and final confirmation — we guide you every step of the way.",
  keywords: [
    "booking process Stellar Structures",
    "how to book apartment Dhaka",
    "property booking steps Bangladesh",
    "apartment purchase process",
    "real estate booking guide Dhaka",
    "Stellar Structures booking",
    "buy apartment in Dhaka",
    "property documentation Bangladesh",
  ],
  openGraph: {
    title: "Booking Process | Stellar Structures Limited",
    description: "Simple 5-step process to secure your dream home with Stellar Structures Limited.",
    type: "website",
  },
};

export default function BookingProcessPage() {
  return (
    <div>
      <PageHeader
        tag="Customers"
        title="Booking Process"
        subtitle="A transparent and straightforward journey to secure your dream home — from first consultation to final confirmation."
        breadcrumbs={[{ label: "Customers" }, { label: "Booking Process" }]}
      />

      <BookingProcessClient />

      <CTASection
        title="Ready to Begin Your Journey?"
        subtitle="Our dedicated sales team is here to guide you through every step. Book a consultation today."
        primaryBtn={{ label: "Contact Sales Team", href: "/contact" }}
        secondaryBtn={{ label: "Schedule Site Visit", href: "/site-visit" }}
      />
    </div>
  );
}
