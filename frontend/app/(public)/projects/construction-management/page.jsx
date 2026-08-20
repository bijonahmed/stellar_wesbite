import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import CTASection from "../../../components/frontend/PageElements/CTASection";
import ProjectGallery from "./ProjectGallery";

export const metadata = {
  title: "Construction Management Projects | Stellar Structures Limited Dhaka",
  description:
    "Explore construction management projects by Stellar Structures Limited in Dhaka, Bangladesh. Premium residential, commercial, and luxury developments in Bashundhara R/A, Jolshiri with quality craftsmanship.",
  keywords: [
    "construction management Dhaka",
    "Stellar Structures projects",
    "premium developments Bangladesh",
    "residential construction Dhaka",
    "commercial projects Bashundhara",
    "real estate projects Jolshiri",
    "luxury apartments Dhaka",
    "building construction Bangladesh",
  ],
  openGraph: {
    title: "Construction Management Projects | Stellar Structures Limited",
    description: "Explore our construction management portfolio — premium residential and commercial developments across Dhaka.",
    type: "website",
    url: "https://stellarstructures.com/projects/construction-management",
  },
  alternates: {
    canonical: "https://stellarstructures.com/projects/construction-management",
  },
};

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    subtitle: "Premium Residential Development",
    location: "Bashundhara R/A, Dhaka",
    status: "Ongoing",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_1/project_1.png", alt: "Project Alpha premium residential development in Bashundhara R/A Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_1/project_1_1.png", alt: "Project Alpha construction phase 1 structural work in Dhaka" },
      { src: "/frontend_theme/assets/imgs/projects/project_1/project_1_2.png", alt: "Project Alpha building framework and foundation progress" },
      { src: "/frontend_theme/assets/imgs/projects/project_1/project_1_3.png", alt: "Project Alpha interior development and finishing" },
      { src: "/frontend_theme/assets/imgs/projects/project_1/project_1_4.png", alt: "Project Alpha exterior finishing touches and landscaping" },
    ],
  },
  {
    id: 2,
    title: "Project Beta",
    subtitle: "Modern Commercial Complex",
    location: "Jolshiri, Dhaka",
    status: "Ongoing",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_2/project_2.jfif", alt: "Project Beta modern commercial complex construction in Jolshiri Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_2/project_2_1.png", alt: "Project Beta commercial building construction progress" },
    ],
  },
  {
    id: 3,
    title: "Project Gamma",
    subtitle: "Luxury Apartment Complex",
    location: "Bashundhara R/A, Dhaka",
    status: "Upcoming",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_3/project_3.png", alt: "Project Gamma luxury apartment complex upcoming in Bashundhara Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_3/project_3_1.png", alt: "Project Gamma foundation and groundwork preparation" },
      { src: "/frontend_theme/assets/imgs/projects/project_3/project_3_2.png", alt: "Project Gamma structural framework and steel reinforcement" },
      { src: "/frontend_theme/assets/imgs/projects/project_3/project_3_3.png", alt: "Project Gamma exterior architectural design rendering" },
      { src: "/frontend_theme/assets/imgs/projects/project_3/project_3_4.png", alt: "Project Gamma interior layout and floor plan design" },
    ],
  },
  {
    id: 4,
    title: "Project Delta",
    subtitle: "Residential Tower",
    location: "Jolshiri, Dhaka",
    status: "Ongoing",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_4/project_4.png", alt: "Project Delta residential tower construction in Jolshiri Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_4/project_4_1.png", alt: "Project Delta residential tower construction overview" },
      { src: "/frontend_theme/assets/imgs/projects/project_4/project_4_2.png", alt: "Project Delta building progress and elevation work" },
    ],
  },
  {
    id: 5,
    title: "Project Epsilon",
    subtitle: "Mixed-Use Development",
    location: "Bashundhara R/A, Dhaka",
    status: "Completed",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_5/project_5.png", alt: "Project Epsilon completed mixed-use development in Bashundhara Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_5/project_5_1.png", alt: "Project Epsilon construction phase and site progress" },
      { src: "/frontend_theme/assets/imgs/projects/project_5/project_5_2.png", alt: "Project Epsilon structural work and building frame" },
      { src: "/frontend_theme/assets/imgs/projects/project_5/project_5_3.png", alt: "Project Epsilon final completed building exterior" },
    ],
  },
  {
    id: 6,
    title: "Project Zeta",
    subtitle: "Modern Living Spaces",
    location: "Dhaka",
    status: "Ongoing",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_6/project_6.png", alt: "Project Zeta modern living spaces construction in Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_6/project_6_1.png", alt: "Project Zeta development progress and building work" },
    ],
  },
  {
    id: 7,
    title: "Project Eta",
    subtitle: "Contemporary Residences",
    location: "Bashundhara R/A, Dhaka",
    status: "Upcoming",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_7/project_7.png", alt: "Project Eta contemporary residences upcoming in Bashundhara Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_7/project_7_1.png", alt: "Project Eta construction site and initial groundwork" },
    ],
  },
  {
    id: 8,
    title: "Project Theta",
    subtitle: "Premium Office Complex",
    location: "Jolshiri, Dhaka",
    status: "Ongoing",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_8/project_8.jfif", alt: "Project Theta premium office complex construction in Jolshiri Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_8/project_8_1.png", alt: "Project Theta office building construction progress" },
    ],
  },
  {
    id: 9,
    title: "Project Iota",
    subtitle: "Residential Community",
    location: "Dhaka",
    status: "Completed",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_9/project_9.png", alt: "Project Iota completed residential community in Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_9/project_9_1.png", alt: "Project Iota residential construction overview" },
      { src: "/frontend_theme/assets/imgs/projects/project_9/project_9_2.png", alt: "Project Iota final completed community exterior" },
    ],
  },
  {
    id: 10,
    title: "Project Kappa",
    subtitle: "Luxury Penthouse Suites",
    location: "Bashundhara R/A, Dhaka",
    status: "Upcoming",
    cover: { src: "/frontend_theme/assets/imgs/projects/project_10/project_10.png", alt: "Project Kappa luxury penthouse suites upcoming in Bashundhara Dhaka" },
    images: [
      { src: "/frontend_theme/assets/imgs/projects/project_10/project_10_1.png", alt: "Project Kappa architectural design concept rendering" },
      { src: "/frontend_theme/assets/imgs/projects/project_10/project_10_2.png", alt: "Project Kappa structural steel and framework work" },
      { src: "/frontend_theme/assets/imgs/projects/project_10/project_10_3.png", alt: "Project Kappa interior preview and layout design" },
      { src: "/frontend_theme/assets/imgs/projects/project_10/project_10_4.png", alt: "Project Kappa exterior facade and elevation view" },
      { src: "/frontend_theme/assets/imgs/projects/project_10/project_10_5.png", alt: "Project Kappa amenities and lifestyle features" },
    ],
  },
];

const statusColors = {
  Ongoing: { bg: "rgba(201,162,39,0.9)", text: "#fff" },
  Upcoming: { bg: "rgba(6,20,36,0.85)", text: "#fff" },
  Completed: { bg: "rgba(34,139,34,0.9)", text: "#fff" },
};

const baseUrl = "https://stellarstructures.com";

function ProjectJsonLd({ project }) {
  const allImages = [project.cover.src, ...project.images.map((i) => i.src)];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateProject",
    name: project.title,
    description: `${project.subtitle} by Stellar Structures Limited in ${project.location}. Status: ${project.status}.`,
    url: `${baseUrl}/projects/construction-management#${project.title.toLowerCase().replace(/\s+/g, "-")}`,
    image: allImages.map((img) => `${baseUrl}${img}`),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    developer: {
      "@type": "Organization",
      name: "Stellar Structures Limited",
      url: baseUrl,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: project.location.split(",")[0],
        addressRegion: "Dhaka",
        addressCountry: "BD",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function ConstructionManagementPage() {
  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Construction Management Projects by Stellar Structures Limited",
    description: "Premium residential, commercial, and luxury construction projects in Dhaka, Bangladesh.",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "RealEstateProject",
        name: p.title,
        description: `${p.subtitle} in ${p.location}`,
        url: `${baseUrl}/projects/construction-management#${p.title.toLowerCase().replace(/\s+/g, "-")}`,
        image: `${baseUrl}${p.cover.src}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />

      <PageHeader
        tag="Our Portfolio"
        title="Construction Management"
        subtitle="Explore our diverse portfolio of construction projects — from luxury residences to commercial complexes — each built with precision, quality, and attention to detail."
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "Construction Management" }]}
      />

      {/* Company Profile PDF */}
      <section style={{ padding: "0 0 10px", background: "#fff" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
              padding: "14px 20px",
              background: "#F8F8F5",
              borderRadius: "8px",
              border: "1px solid rgba(201,162,39,0.15)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: 0 }}>
              <span style={{ fontSize: "20px", flexShrink: 0 }}>📄</span>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 600, color: "#061424", margin: 0, lineHeight: 1.2 }}>
                  Stellar Structures Limited — Company Profile
                </h3>
                <p style={{ fontSize: "12px", color: "#8A8A85", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Learn about our projects, vision & quality construction
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
              <a
                href="/frontend_theme/assets/imgs/projects/stellar_structures_profile.pdf"
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "8px 16px",
                  background: "#C9A227",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "5px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download
              </a>
              <a
                href="/frontend_theme/assets/imgs/projects/stellar_structures_profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "8px 16px",
                  border: "1px solid #061424",
                  color: "#061424",
                  fontSize: "11px",
                  fontWeight: 600,
                  textDecoration: "none",
                  borderRadius: "5px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Open
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section aria-labelledby="portfolio-heading" style={{ padding: "40px 0 20px", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "8px" }}>Our Projects</p>
            <h2 id="portfolio-heading" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424" }}>Construction Portfolio</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              A showcase of our active and completed construction projects, demonstrating our commitment to excellence in every build.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Projects */}
      {projects.map((project, index) => (
        <article
          key={project.id}
          id={project.title.toLowerCase().replace(/\s+/g, "-")}
          aria-labelledby={`project-${project.id}-title`}
          style={{
            padding: "30px 0",
            background: index % 2 === 0 ? "#fff" : "#F8F8F5",
          }}
        >
          <ProjectJsonLd project={project} />
          <div className="container">
            {/* Project Header */}
            <header className="row align-items-center" style={{ marginBottom: "16px" }}>
              <div className="col-lg-8">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "4px 14px",
                      background: statusColors[project.status].bg,
                      color: statusColors[project.status].text,
                      fontSize: "10px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      borderRadius: "4px",
                    }}
                  >
                    {project.status}
                  </span>
                  <span style={{ fontSize: "12px", color: "#8A8A85" }}>
                    {project.location}
                  </span>
                </div>
                <h3
                  id={`project-${project.id}-title`}
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
                    fontWeight: 600,
                    color: "#061424",
                    marginBottom: "2px",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "1px" }}>
                  {project.subtitle}
                </p>
              </div>
              <div className="col-lg-4 text-lg-end" style={{ marginTop: "10px" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    background: "#C9A227",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 600,
                    textDecoration: "none",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  Enquire Now
                </Link>
              </div>
            </header>

            {/* Gallery: Main Image + Thumbnail Slider */}
            <ProjectGallery cover={project.cover} images={project.images} title={project.title} />
          </div>
        </article>
      ))}

      <CTASection
        title="Interested in Our Projects?"
        subtitle="Get in touch with our sales team to learn more about available units, pricing, and flexible payment plans."
        primaryBtn={{ label: "Contact Sales Team", href: "/contact" }}
        secondaryBtn={{ label: "Schedule Site Visit", href: "/site-visit" }}
      />
    </>
  );
}
