import PageHeader from "../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Schedule a Site Visit - Stellar Structures Limited",
  description: "Book a site visit to see Stellar Structures Limited projects in person. Tour active construction sites and sample flats.",
  keywords: ["site visit Dhaka", "property visit Bangladesh", "construction site tour"],
  openGraph: {
    title: "Schedule a Site Visit - Stellar Structures",
    description: "See our projects in person.",
    type: "website",
  },
};

const steps = [
  {
    icon: "📅",
    title: "Pick a Date & Time",
    description:
      "Choose a convenient date and time slot through our booking form or by calling our sales team. We operate Sunday through Saturday and can accommodate morning or afternoon visits.",
  },
  {
    icon: "📍",
    title: "Confirm Location",
    description:
      "Select the project you want to visit from our active portfolio. We will confirm the exact address, provide directions, and arrange parking at the site.",
  },
  {
    icon: "🚗",
    title: "Transportation",
    description:
      "For select projects, we offer complimentary pick-up and drop-off from central locations in Dhaka. Simply let us know your preferred pickup point when booking.",
  },
];

const expectations = [
  {
    icon: "🏗️",
    title: "Construction Walkthrough",
    description:
      "Walk through the active construction site with our project engineer. See the actual progress, construction quality, and materials being used in your future home.",
  },
  {
    icon: "🏠",
    title: "Model Flat Tour",
    description:
      "Experience our fully furnished model flats to get a clear picture of the finished product. View actual room sizes, fittings, fixtures, and finish quality.",
  },
  {
    icon: "🗺️",
    title: "Neighborhood Overview",
    description:
      "Explore the surrounding neighborhood including access roads, schools, hospitals, markets, and public transport connectivity from the project location.",
  },
  {
    icon: "🗣️",
    title: "One-on-One Consultation",
    description:
      "Have an in-depth discussion with our sales representative about pricing, payment plans, customization options, and any questions about your potential new home.",
  },
];

export default function SiteVisitPage() {
  return (
    <>
      <PageHeader
        tag="Customers"
        title="Schedule a Site Visit"
        subtitle="Experience our projects in person. Tour construction sites, view model flats, and meet our team."
        breadcrumbs={[{ label: "Customers" }, { label: "Site Visit" }]}
      />
      <FeatureGrid
        title="How to Schedule"
        subtitle="Booking a site visit is quick and easy. Follow these simple steps to get started."
        features={steps}
        columns={3}
      />
      <FeatureGrid
        title="What to Expect"
        subtitle="Your site visit includes a comprehensive tour designed to give you complete confidence in your decision."
        features={expectations}
        columns={4}
      />
      <CTASection
        title="Ready to Visit?"
        subtitle="Call us or fill the contact form and our team will arrange a personalized tour for you."
        primaryBtn={{ label: "Contact Sales", href: "/contact" }}
        secondaryBtn={{ label: "Book Appointment", href: "/appointment" }}
      />
    </>
  );
}
