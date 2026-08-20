import Link from "next/link";
import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";
import ProjectsClient from "./ProjectsClient";

export const metadata = {
  title: "All Projects | Stellar Structures Limited",
  description:
    "Explore all real estate projects by Stellar Structures Limited in Dhaka, Bangladesh. Premium residential, commercial, and luxury developments in Bashundhara R/A, Jolshiri R/A, and other prestigious locations.",
  keywords: [
    "Stellar Structures projects",
    "real estate projects Dhaka",
    "Bashundhara R/A apartments",
    "Jolshiri R/A development",
    "premium properties Bangladesh",
    "residential projects Dhaka",
    "commercial projects Bangladesh",
    "luxury apartments Dhaka",
  ],
  openGraph: {
    title: "All Projects | Stellar Structures Limited",
    description: "Explore premium residential and commercial developments across Dhaka's most sought-after locations.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        tag="Our Portfolio"
        title="All Projects"
        subtitle="Explore our premium residential and commercial developments across Dhaka's most sought-after locations."
        breadcrumbs={[{ label: "Projects" }]}
      />

      <ProjectsClient />

      <CTASection
        title="Interested in Our Projects?"
        subtitle="Get in touch with our sales team to learn more about available units, pricing, and flexible payment plans."
        primaryBtn={{ label: "Contact Sales Team", href: "/contact" }}
        secondaryBtn={{ label: "Schedule Site Visit", href: "/site-visit" }}
      />
    </div>
  );
}
