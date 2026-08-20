import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";
import GalleryGrid from "../../../components/frontend/PageElements/GalleryGrid";

export const metadata = {
  title: "Commercial Projects | Stellar Structures Limited",
  description:
    "Explore premium commercial projects by Stellar Structures Limited in Dhaka. Grade-A office spaces, retail outlets, and mixed-use developments with modern infrastructure in Bashundhara R/A and Jolshiri.",
  keywords: [
    "commercial projects Dhaka",
    "office space Bashundhara R/A",
    "retail space Dhaka",
    "mixed-use development Dhaka",
    "commercial real estate Dhaka",
    "Stellar Structures commercial",
    "Grade-A office Dhaka",
    "co-working space Dhaka",
  ],
  openGraph: {
    title: "Commercial Projects | Stellar Structures Limited",
    description: "Discover premium commercial developments by Stellar Structures Limited in Dhaka. Office spaces, retail, and mixed-use projects.",
    type: "website",
  },
};

const features = [
  {
    icon: "🏢",
    title: "Prime Locations",
    description: "Every Stellar Structures commercial project is strategically situated in high-traffic commercial zones that maximize business visibility, client accessibility, and employee convenience. Our developments in Bashundhara R/A and Jolshiri offer direct access to major arterial roads, proximity to Dhaka's key business districts, and visibility from thousands of daily commuters — ensuring that your business benefits from the kind of premium location that attracts customers, impresses clients, and makes daily operations seamless for your team."
  },
  {
    icon: "📐",
    title: "Flexible Layouts",
    description: "We understand that every business has unique spatial requirements, which is why our commercial developments offer highly customizable floor plans that adapt to your specific needs. From compact studio offices ideal for startups and freelancers to expansive corporate floors suitable for multinational headquarters, our spaces feature modular partitioning systems, raised flooring for easy cable management, and adaptable configurations that allow your workspace to grow and evolve alongside your business without the need for costly relocations."
  },
  {
    icon: "🔌",
    title: "Modern Infrastructure",
    description: "Our commercial buildings are engineered with the technological and operational infrastructure that modern businesses demand. Every floor is equipped with high-speed fiber-optic internet connectivity, centralized HVAC systems providing consistent climate control, full-building backup power generators that activate within seconds of an outage, advanced fire detection and suppression systems meeting international safety codes, and smart building management systems that optimize energy consumption while maintaining a comfortable, productive working environment for all tenants."
  },
  {
    icon: "🅿️",
    title: "Ample Parking",
    description: "We recognize that convenient parking is a critical factor for both businesses and their clients, which is why every Stellar Structures commercial development includes multi-level dedicated parking facilities with generous capacity. Our parking complexes feature well-lit interiors, clearly marked bays with easy elevator access to office floors, designated visitor parking with simple entry procedures, EV charging stations for electric vehicles, and in select properties, automated car lift systems and valet services that create a premium arrival experience for your clients and partners."
  },
  {
    icon: "🏪",
    title: "Retail Spaces",
    description: "Our ground-floor and podium-level retail spaces are designed to capture maximum foot traffic and provide high-visibility storefronts for businesses that rely on customer walk-ins. Each retail unit features large display windows, flexible interior layouts suitable for showrooms, restaurants, cafes, boutiques, and service outlets, dedicated utility connections including three-phase power and commercial-grade plumbing, and proximity to anchor tenants and foot traffic generators that ensure a steady stream of potential customers throughout the day and evening."
  },
  {
    icon: "🌐",
    title: "Business Ecosystem",
    description: "Beyond individual office and retail units, Stellar Structures commercial developments are designed as integrated business ecosystems that foster collaboration, networking, and professional growth. Our buildings include shared conference rooms equipped with presentation technology, professional business lounges for informal meetings and client receptions, dedicated co-working zones with hot desks and private pods, event spaces for product launches and corporate gatherings, and common areas designed to encourage organic interaction among tenants — creating a vibrant commercial community within each building."
  },
];

const commercialProjects = [
  {
    title: "Stellar Commercial Hub",
    subtitle: "Office & Retail Complex",
    location: "Bashundhara R/A, Dhaka",
    status: "Completed",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-19.jpg",
    desc: "A state-of-the-art commercial complex offering premium office spaces, retail outlets, and food court areas. Currently housing multiple leading organizations and brands.",
    units: "40+",
    paragraphs: [
      "The Stellar Commercial Hub stands as a landmark achievement in Dhaka's commercial real estate landscape. Located in the bustling heart of Bashundhara Residential Area, this completed development has quickly established itself as the preferred business address for leading organizations, multinational corporations, and ambitious enterprises seeking a prestigious presence in one of Dhaka's most dynamic commercial corridors.",
      "The complex offers a meticulously planned mix of Grade-A office spaces ranging from compact units ideal for startups and tech companies to expansive floor plates suitable for corporate headquarters and regional offices. Every workspace has been designed with input from commercial interior specialists, ensuring optimal natural lighting, efficient HVAC distribution, high-speed fiber-optic connectivity, and acoustic insulation that creates a productive professional environment.",
      "The ground and lower floors house a vibrant retail ecosystem featuring national and international brands, a curated food court with diverse dining options, specialty cafes, and essential service outlets including banking, courier, and business centers. This integrated retail component ensures that tenants and visitors have seamless access to everything they need without leaving the building, creating a self-sustaining commercial community.",
      "With a current occupancy rate exceeding ninety-five percent, the Stellar Commercial Hub demonstrates the strong market demand for well-designed commercial spaces in Dhaka. The building features advanced building management systems, 24/7 security with biometric access, multi-level covered parking with over two hundred dedicated spots, and a professional facility management team that ensures the property is maintained to the highest standards. For businesses seeking a commercial address that communicates professionalism, stability, and success, the Stellar Commercial Hub delivers on every front."
    ]
  },
  {
    title: "The Gateway",
    subtitle: "Mixed-Use Development",
    location: "Jolshiri, Dhaka",
    status: "Upcoming",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-20.jpg",
    desc: "An upcoming mixed-use commercial development featuring Grade-A office spaces, premium retail floors, and co-working facilities designed for the modern business landscape.",
    units: "60+",
    paragraphs: [
      "The Gateway represents Stellar Structures Limited's ambitious vision for the future of commercial real estate in Dhaka. Situated in the rapidly developing Jolshiri area, this upcoming mixed-use development is designed to be a transformative destination that seamlessly blends premium office environments with world-class retail experiences, creating a vibrant commercial ecosystem that serves both businesses and the broader community.",
      "The commercial component will offer a diverse range of spaces from efficient studio offices perfect for freelancers and digital agencies to expansive corporate suites with private meeting rooms and executive lounges. Each floor has been designed by an award-winning architectural firm with a focus on flexibility, sustainability, and technological readiness, featuring raised flooring for easy cable management, smart building management systems, and floor-to-ceiling glazing that floods workspaces with natural light while reducing energy consumption.",
      "The retail floors will house an international-standard shopping experience with anchor tenants, boutique retail spaces, a gourmet food hall featuring local and international cuisines, a multi-screen cinema complex, and a dedicated wellness zone with a premium gymnasium and spa. The development will also include a purpose-built co-working hub with hot desks, private offices, meeting rooms, and event spaces designed to attract Dhaka's growing community of entrepreneurs and remote professionals.",
      "With construction progressing on schedule and an anticipated launch that will set new benchmarks for mixed-use commercial developments in Bangladesh, The Gateway offers an exceptional investment opportunity for forward-thinking businesses and investors. Early tenants will benefit from competitive lease rates, customized fit-out support, and priority selection of premium floor positions with the best views and foot traffic exposure. The Gateway is not just a building — it is a catalyst for the next generation of commerce in Dhaka."
    ]
  }
];

const galleryImages = [
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-19.jpg", alt: "Stellar Commercial Hub Office Complex Dhaka" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-20.jpg", alt: "The Gateway Mixed-Use Development Jolshiri" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-21.jpg", alt: "Modern Commercial Interior Design" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-1.jpg", alt: "Premium Office Space Concept" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-2.jpg", alt: "Retail Space Architecture Dhaka" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-3.jpg", alt: "Commercial Building Exterior" },
];

export default function CommercialProjectsPage() {
  return (
    <>
      <style>{`
        .gallery-item:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <PageHeader
        tag="Our Projects"
        title="Commercial Projects"
        subtitle="Premium commercial developments designed to elevate your business presence in Dhaka's thriving commercial landscape."
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "Commercial" }]}
      />

      <FeatureGrid
        title="Commercial Excellence"
        subtitle="Our commercial spaces are engineered to meet the demands of modern businesses with world-class infrastructure, strategic locations, and versatile designs."
        features={features}
        columns={3}
      />

      {/* Project Cards */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(30px, 4vw, 50px)" }}>
            <p style={{ fontSize: "clamp(11px, 1vw, 12px)", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Our Developments</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Commercial Projects</h2>
            <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Each commercial development by Stellar Structures Limited is engineered to deliver maximum business value through strategic locations, modern infrastructure, and versatile spaces.
            </p>
          </div>
          <div className="row">
            {commercialProjects.map((p, i) => (
              <div className="col-lg-6 col-md-6" key={i} style={{ marginBottom: "30px" }}>
                <div
                  style={{
                    border: "1px solid rgba(201,162,39,0.15)",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "all 0.3s",
                  }}
                >
                  <div
                    style={{
                      aspectRatio: "16/10",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        left: "16px",
                        padding: "8px 20px",
                        background: p.status === "Completed" ? "rgba(34,139,34,0.9)" : "rgba(6,20,36,0.85)",
                        color: "#fff",
                        fontSize: "clamp(10px, 1vw, 12px)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        borderRadius: "4px",
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div style={{ padding: "clamp(24px, 3vw, 32px)" }}>
                    <h3
                      style={{
                        fontSize: "clamp(1.2rem, 2vw, 1.4rem)",
                        fontWeight: 600,
                        color: "#061424",
                        marginBottom: "6px",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "clamp(12px, 1vw, 14px)",
                        color: "#C9A227",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "10px",
                      }}
                    >
                      {p.subtitle}
                    </p>
                    <p style={{ fontSize: "clamp(13px, 1.1vw, 15px)", color: "#8A8A85", marginBottom: "6px" }}>
                      {p.location}
                    </p>
                    <p
                      style={{
                        fontSize: "clamp(14px, 1.2vw, 16px)",
                        color: "#8A8A85",
                        lineHeight: 1.8,
                        marginBottom: "24px",
                        textAlign: "justify",
                      }}
                    >
                      {p.desc}
                    </p>
                    <Link
                      href="/contact"
                      style={{
                        display: "inline-block",
                        padding: "clamp(12px, 1.5vw, 14px) clamp(24px, 3vw, 32px)",
                        background: "#061424",
                        color: "#fff",
                        fontSize: "clamp(12px, 1vw, 14px)",
                        fontWeight: 600,
                        textDecoration: "none",
                        borderRadius: "4px",
                      }}
                    >
                      {p.status === "Completed" ? "Lease Now" : "Register Interest"}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Project Descriptions */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#F8F8F5" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(30px, 4vw, 60px)" }}>
            <p style={{ fontSize: "clamp(11px, 1vw, 12px)", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Project Details</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>In-Depth Project Overview</h2>
            <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Learn about the vision, design philosophy, and business value behind each of our commercial developments in Dhaka.
            </p>
          </div>

          {commercialProjects.map((project, i) => (
            <div
              key={i}
              className="row"
              style={{
                marginBottom: i < commercialProjects.length - 1 ? "clamp(50px, 6vw, 80px)" : "0",
                alignItems: "center",
              }}
            >
              <div className={`col-lg-6 ${i % 2 === 0 ? "" : "order-lg-2"}`} style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(201,162,39,0.15)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                      aspectRatio: "16/10",
                    }}
                  />
                </div>
              </div>
              <div className={`col-lg-6 ${i % 2 === 0 ? "" : "order-lg-1"}`}>
                <div style={{ marginBottom: "16px" }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 16px",
                      background: project.status === "Completed" ? "rgba(34,139,34,0.1)" : "rgba(201,162,39,0.1)",
                      color: project.status === "Completed" ? "#228B22" : "#C9A227",
                      fontSize: "clamp(10px, 1vw, 12px)",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      borderRadius: "4px",
                      marginRight: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    {project.status}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 16px",
                      background: "rgba(6,20,36,0.05)",
                      color: "#061424",
                      fontSize: "clamp(10px, 1vw, 12px)",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      borderRadius: "4px",
                      marginRight: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    {project.units} Units
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 16px",
                      background: "rgba(6,20,36,0.05)",
                      color: "#061424",
                      fontSize: "clamp(10px, 1vw, 12px)",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      borderRadius: "4px",
                      marginBottom: "8px",
                    }}
                  >
                    {project.location}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    fontWeight: 600,
                    color: "#061424",
                    marginBottom: "20px",
                    lineHeight: 1.3,
                  }}
                >
                  {project.title} — {project.subtitle}
                </h3>
                {project.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: "clamp(13px, 1.2vw, 15px)",
                      color: "#8A8A85",
                      lineHeight: 1.8,
                      marginBottom: "16px",
                      textAlign: "justify",
                    }}
                  >
                    {para}
                  </p>
                ))}
                <div style={{ marginTop: "24px" }}>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-block",
                      padding: "clamp(12px, 1.5vw, 14px) clamp(24px, 3vw, 32px)",
                      background: "#061424",
                      color: "#fff",
                      fontSize: "clamp(12px, 1vw, 14px)",
                      fontWeight: 600,
                      textDecoration: "none",
                      borderRadius: "4px",
                      marginRight: "12px",
                    }}
                  >
                    {project.status === "Completed" ? "Lease Now" : "Register Interest"}
                  </Link>
                  <Link
                    href="/site-visit"
                    style={{
                      display: "inline-block",
                      padding: "clamp(12px, 1.5vw, 14px) clamp(24px, 3vw, 32px)",
                      border: "1px solid #061424",
                      color: "#061424",
                      fontSize: "clamp(12px, 1vw, 14px)",
                      fontWeight: 600,
                      textDecoration: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Schedule Visit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Our Commercial Projects */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#061424" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6" style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "clamp(11px, 1vw, 12px)", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>About Our Commercial Projects</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#fff", marginBottom: "20px", lineHeight: 1.3 }}>
                Building Spaces That Drive Business Growth
              </h2>
              <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                At Stellar Structures Limited, we understand that a commercial space is more than a physical address — it is the stage on which businesses build their reputation, attract talent, and serve their customers. Every commercial project we develop is designed with a deep appreciation for the operational needs of modern enterprises, combining strategic location advantages with thoughtfully engineered infrastructure that supports productivity, growth, and long-term success.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                Our approach to commercial development prioritizes long-term value creation. We invest in durable construction materials, energy-efficient building systems, and flexible floor plans that allow spaces to adapt as businesses evolve. From retail storefronts that maximize street-level visibility to corporate offices that inspire productivity and collaboration, every element of our commercial projects is selected to support the success of the tenants who occupy them.
              </p>
              <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "24px", textAlign: "justify" }}>
                Dhaka's commercial real estate market is experiencing unprecedented growth, driven by expanding industries, rising foreign investment, and a thriving entrepreneurial ecosystem. Stellar Structures Limited is committed to delivering commercial developments that meet this demand with quality, innovation, and reliability. Whether you are seeking a compact office for a growing startup, a flagship retail space for your brand, or a mixed-use environment that integrates work and lifestyle, our commercial projects offer the foundation your business deserves.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "clamp(12px, 1.5vw, 14px) clamp(24px, 3vw, 32px)",
                    background: "#C9A227",
                    color: "#061424",
                    fontSize: "clamp(12px, 1vw, 14px)",
                    fontWeight: 600,
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/site-visit"
                  style={{
                    display: "inline-block",
                    padding: "clamp(12px, 1.5vw, 14px) clamp(24px, 3vw, 32px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    fontSize: "clamp(12px, 1vw, 14px)",
                    fontWeight: 600,
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  Book a Site Visit
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(201,162,39,0.2)",
                }}
              >
                <img
                  src="/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-2.jpg"
                  alt="Stellar Structures Premium Commercial Developments in Dhaka"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                    aspectRatio: "4/3",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "clamp(30px, 4vw, 50px)" }}>
            <p style={{ fontSize: "clamp(11px, 1vw, 12px)", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Project Gallery</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Commercial Design Previews</h2>
            <p style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              A visual showcase of our commercial developments, highlighting the architectural design, premium workspaces, and retail environments that define Stellar Structures business properties.
            </p>
          </div>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CTASection
        title="Looking for Premium Commercial Space?"
        subtitle="Explore our office and retail developments designed to give your business the perfect address in Dhaka's most sought-after commercial locations."
        primaryBtn={{ label: "Get in Touch", href: "/contact" }}
        secondaryBtn={{ label: "Download Brochure", href: "#" }}
      />
    </>
  );
}
