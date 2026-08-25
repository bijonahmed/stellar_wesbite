import PageHeader from "../../components/frontend/PageElements/PageHeader";
import FaqPageClient from "../../components/frontend/FaqPageClient";

export const metadata = {
  title: "FAQ | Stellar Structures Limited",
  description:
    "Find answers to frequently asked questions about Stellar Structures Limited projects, apartment booking process, payment plans, construction standards, NRB investment, and customer support in Dhaka, Bangladesh.",
  keywords: [
    "Stellar Structures FAQ",
    "apartment booking Dhaka",
    "payment plan real estate Bangladesh",
    "how to buy apartment Dhaka",
    "NRB investment Bangladesh",
    "real estate FAQ Dhaka",
    "property booking process",
    "construction standards Bangladesh",
  ],
  openGraph: {
    title: "FAQ | Stellar Structures Limited",
    description: "Find answers to common questions about our projects, booking process, payment plans, and services.",
    type: "website",
  },
};

export default function FaqPage() {
  return (
    <div>
      <PageHeader
        tag="Help Center"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our projects, booking process, payment plans, construction standards, and services."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <FaqPageClient />
    </div>
  );
}
