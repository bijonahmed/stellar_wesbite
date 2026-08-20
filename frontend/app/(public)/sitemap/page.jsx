import Link from "next/link";
import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";

export const metadata = {
  title: "Sitemap | Stellar Structures Limited",
  description:
    "Navigate the full site map of Stellar Structures Limited. Find all pages including projects, properties, services, media, support, and contact information in one place.",
  keywords: [
    "Stellar Structures sitemap",
    "site map Stellar Structures",
    "website navigation Stellar Structures",
    "Stellar Structures all pages",
    "real estate sitemap Dhaka",
    "Stellar Structures links",
  ],
  openGraph: {
    title: "Sitemap | Stellar Structures Limited",
    description: "Explore all pages and sections of the Stellar Structures Limited website.",
    type: "website",
  },
};

const sitemapSections = [
  {
    title: "Home",
    links: [
      { label: "Stellar Structures Limited", href: "/" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Company Profile", href: "/about" },
      { label: "Our Story", href: "/our-story" },
    { label: "Chairman's Message", href: "/chairman-message" },
      { label: "Managing Director", href: "/managing-director" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "Core Values", href: "/core-values" },
      { label: "Why Stellar Structures", href: "/why-us" },
      { label: "Our Team", href: "/our-team" },
      { label: "Career", href: "/career" },
      { label: "CSR Activities", href: "/csr" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "All Projects", href: "/projects" },
      { label: "Ongoing Projects", href: "/projects/ongoing" },
      { label: "Upcoming Projects", href: "/projects/upcoming" },
      { label: "Residential Projects", href: "/projects/residential" },
      { label: "Commercial Projects", href: "/projects/commercial" },
      { label: "Luxury Apartments", href: "/projects/luxury" },
    ],
  },
  {
    title: "Properties",
    links: [
      { label: "Apartments", href: "/properties/apartments" },
      { label: "Flats", href: "/properties/flats" },
      { label: "Commercial Space", href: "/properties/commercial" },
      { label: "Office Space", href: "/properties/offices" },
      { label: "Shops", href: "/properties/shops" },
      { label: "Land / Plots", href: "/properties/land" },
      { label: "Duplex Houses", href: "/properties/duplex" },
      { label: "Penthouses", href: "/properties/penthouses" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Property Development", href: "/services/development" },
      { label: "Construction Management", href: "/services/construction" },
      { label: "Interior Design", href: "/services/interior" },
      { label: "Architectural Design", href: "/services/architecture" },
      { label: "Investment Consultancy", href: "/services/investment" },
      { label: "Property Valuation", href: "/services/valuation" },
    ],
  },
  {
    title: "Media",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Book Appointment", href: "/appointment" },
      { label: "Schedule Site Visit", href: "/site-visit" },
      { label: "Customer Support", href: "/support" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "EMI Calculator", href: "/emi-calculator" },
      { label: "Payment Plans", href: "/payment-plan" },
      { label: "Booking Process", href: "/booking-process" },
      { label: "Downloads", href: "/downloads" },
      { label: "Notice Board", href: "/notice" },
      { label: "Offices", href: "/offices" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/policy" },
      { label: "Refund Policy", href: "/return" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div>
      <PageHeader
        tag="Site Map"
        title="Explore Our Website"
        subtitle="Find all pages and sections of the Stellar Structures Limited website organized by category."
        breadcrumbs={[{ label: "Sitemap" }]}
      />

      <section style={{ padding: "clamp(48px, 6vw, 88px) 0", background: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "48px 40px",
            }}
          >
            {sitemapSections.map((section, i) => (
              <div key={i}>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(24px, 3vw, 30px)",
                    fontWeight: 700,
                    color: "#061424",
                    marginBottom: "20px",
                    paddingBottom: "14px",
                    borderBottom: "2px solid #C9A227",
                    display: "inline-block",
                  }}
                >
                  {section.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {section.links.map((link, j) => (
                    <li key={j} style={{ marginBottom: "12px" }}>
                      <Link
                        href={link.href}
                        className="ss-sitemap-link"
                        style={{
                          fontSize: "17px",
                          color: "#8A8A85",
                          textDecoration: "none",
                          transition: "color 0.2s",
                          lineHeight: 1.8,
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`.ss-sitemap-link:hover { color: #C9A227 !important; }`}</style>
    </div>
  );
}
