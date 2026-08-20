import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";
import CTASection from "../../../components/frontend/PageElements/CTASection";
import StatBar from "../../../components/frontend/PageElements/StatBar";
import GalleryGrid from "../../../components/frontend/PageElements/GalleryGrid";

export const metadata = {
  title: "Residential Projects | Stellar Structures Limited",
  description:
    "Explore premium residential projects by Stellar Structures Limited in Dhaka. Luxury apartments in Bashundhara R/A and Jolshiri R/A featuring modern amenities, smart home technology, and world-class finishes.",
  keywords: [
    "residential projects Dhaka",
    "apartments Bashundhara R/A",
    "luxury apartments Dhaka",
    "Jolshiri R/A apartments",
    "premium residential living Dhaka",
    "Stellar Structures residential",
    "3BHK apartments Dhaka",
    "4BHK luxury flats Dhaka",
  ],
  openGraph: {
    title: "Residential Projects | Stellar Structures Limited",
    description: "Discover premium residential developments by Stellar Structures Limited in Dhaka. Luxury apartments with world-class amenities.",
    type: "website",
  },
};

const residentialFeatures = [
  { icon: "🏗️", title: "Quality Construction", description: "Built with premium materials and reinforced structures ensuring longevity and safety for every resident." },
  { icon: "🏊", title: "Modern Amenities", description: "Swimming pool, gymnasium, children's play area, and community hall for a complete lifestyle experience." },
  { icon: "🔐", title: "24/7 Security", description: "Round-the-clock CCTV surveillance, access control systems, and dedicated security personnel for your peace of mind." },
  { icon: "🌿", title: "Green Spaces", description: "Landscaped gardens, rooftop terraces, and tree-lined pathways creating a serene living environment." },
  { icon: "🅿️", title: "Dedicated Parking", description: "Covered multi-level parking with assigned spots for every unit and visitor parking facilities." },
  { icon: "⚡", title: "Smart Home Ready", description: "Pre-installed smart home infrastructure with automated lighting, climate control, and security integration." },
];

const residentialProjects = [
  {
    title: "Bashundhara R/A",
    subtitle: "Premium Residential Living",
    location: "Bashundhara, Dhaka",
    status: "Ongoing",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-13.jpg",
    desc: "Thoughtfully designed residential enclave featuring spacious 2BHK, 3BHK, and 4BHK apartments with premium finishes and panoramic views.",
  },
  {
    title: "Jolshiri R/A",
    subtitle: "Luxury Redefined",
    location: "Jolshiri, Dhaka",
    status: "Upcoming",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-14.jpg",
    desc: "An upcoming luxury residential development offering meticulously planned apartments with smart home features and resort-style amenities.",
  },
];

const galleryImages = [
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-13.jpg", alt: "Bashundhara R/A Premium Residential Project" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-14.jpg", alt: "Jolshiri R/A Luxury Residential Development" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-15.jpg", alt: "Modern Residential Architecture Dhaka" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-16.jpg", alt: "Residential Interior Design Concept" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-17.jpg", alt: "Premium Living Spaces Concept" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-18.jpg", alt: "Luxury Apartment Living Dhaka" },
];

const projectDetails = [
  {
    title: "Bashundhara R/A — Premium Residential Living",
    paragraphs: [
      "The Bashundhara R/A project by Stellar Structures Limited stands as one of the most desirable residential addresses in Dhaka. Situated in the heart of Bashundhara Residential Area, this ongoing development brings together thoughtful architecture, modern convenience, and a vibrant community atmosphere to deliver a living experience that is second to none.",
      "This meticulously planned residential enclave offers a curated selection of 2BHK, 3BHK, and 4BHK apartments, each designed to maximize natural light, ventilation, and usable living space. The floor plans have been crafted by experienced architects who understand the needs of modern Bangladeshi families, ensuring generous room dimensions, efficient kitchen layouts, and bathrooms finished with high-quality sanitaryware and fittings.",
      "Residents of Bashundhara R/A will enjoy access to a comprehensive suite of amenities including a temperature-controlled swimming pool, a fully equipped gymnasium with cardio and strength zones, a landscaped children's play area, a multipurpose community hall for gatherings and events, and beautifully maintained green spaces that provide a tranquil escape from the pace of city life.",
      "The project also incorporates practical essentials that families value, such as covered multi-level parking, 24/7 CCTV surveillance with biometric access control, reliable backup power generation, and high-speed elevator systems. With construction progressing on schedule, the Bashundhara R/A development continues to attract strong interest from homebuyers seeking quality residential living in one of Dhaka's most established neighborhoods. This is not just a home — it is a long-term investment in comfort, security, and community.",
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-13.jpg",
    units: "150+",
    location: "Bashundhara, Dhaka",
    status: "Ongoing",
  },
  {
    title: "Jolshiri R/A — Luxury Redefined",
    paragraphs: [
      "The Jolshiri R/A project by Stellar Structures Limited is poised to become the most sought-after luxury residential address in Dhaka. Nestled in the prestigious Jolshiri Residential Area, this upcoming development promises an unparalleled living experience that combines architectural brilliance with the tranquility of a well-planned neighborhood surrounded by greenery.",
      "This expansive residential development will feature a curated collection of 3BHK and 4BHK luxury apartments, each designed to offer sweeping panoramic views of the surrounding landscape. Floor plans have been meticulously crafted to ensure every square foot serves a purpose, with open-concept living areas flowing into private dining spaces, master suites with walk-in closets, and imported Italian marble flooring throughout the residence.",
      "The project will boast an exceptional array of amenities including an infinity-edge rooftop pool offering breathtaking skyline views, a state-of-the-art gymnasium with personal training studios, a dedicated spa and wellness center, landscaped sky gardens on multiple floors, and a grand clubhouse designed for exclusive member events and social gatherings. Smart home technology will be seamlessly integrated into every unit, giving residents complete control over lighting, climate, security, and entertainment from a single smartphone application.",
      "With construction slated to begin in the near future, the Jolshiri R/A project represents a rare opportunity to secure a premium property at pre-launch prices. Early registrants will benefit from preferential pricing, priority unit selection, and exclusive access to detailed floor plans and interior design customization options. This is more than a home — it is a legacy investment in Dhaka's most exciting residential future, offering the perfect blend of luxury, technology, and timeless design for discerning homeowners.",
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-14.jpg",
    units: "200+",
    location: "Jolshiri, Dhaka",
    status: "Upcoming",
  },
];

export default function ResidentialProjectsPage() {
  return (
    <>
      <style>{`
        .gallery-item:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <PageHeader
        tag="Our Projects"
        title="Residential Projects"
        subtitle="Discover our thoughtfully crafted residential developments offering premium apartment living in Dhaka's most desirable neighborhoods."
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "Residential" }]}
      />

    
      {/* Project Cards */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Our Developments</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Residential Projects</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Each residential project by Stellar Structures Limited is designed to offer the perfect blend of luxury, comfort, and modern convenience in Dhaka's most prestigious addresses.
            </p>
          </div>
          <div className="row">
            {residentialProjects.map((p, i) => (
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
                        background: p.status === "Ongoing" ? "rgba(201,162,39,0.9)" : "rgba(6,20,36,0.85)",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        borderRadius: "4px",
                      }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <div style={{ padding: "32px" }}>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: 600,
                        color: "#061424",
                        marginBottom: "6px",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#C9A227",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        marginBottom: "10px",
                      }}
                    >
                      {p.subtitle}
                    </p>
                    <p style={{ fontSize: "15px", color: "#8A8A85", marginBottom: "6px" }}>
                      {p.location}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
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
                        padding: "14px 32px",
                        background: "#061424",
                        color: "#fff",
                        fontSize: "14px",
                        fontWeight: 600,
                        textDecoration: "none",
                        borderRadius: "4px",
                      }}
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#F8F8F5" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Why Choose Us</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Residential Excellence</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Every Stellar Structures residential project is designed with your comfort, safety, and lifestyle in mind, setting new standards for premium living in Dhaka.
            </p>
          </div>
          <FeatureGrid features={residentialFeatures} columns={3} />
        </div>
      </section>

      {/* Detailed Project Descriptions */}
    

      {/* About Our Residential Projects */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#061424" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-12" style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>About Our Residential Projects</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#fff", marginBottom: "20px", lineHeight: 1.3 }}>
                Crafting Homes That Inspire Living
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                At Stellar Structures Limited, we believe that a home is far more than four walls — it is the foundation of memories, the backdrop of family life, and a reflection of personal aspiration. Every residential project we undertake is born from a deep understanding of how families in Dhaka live, grow, and thrive, and it is this insight that drives us to create spaces that are as functional as they are beautiful.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                Our commitment to quality begins at the foundation and extends to every finishing detail. We source premium construction materials from trusted suppliers, employ rigorous quality control at every stage of construction, and work exclusively with architects and designers who share our passion for excellence. The result is residential developments that stand the test of time — structurally, aesthetically, and in the satisfaction of the families who call them home.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "24px", textAlign: "justify" }}>
                From the planning stage through handover and beyond, we maintain transparent communication with every homeowner, providing regular construction updates, detailed walkthroughs, and responsive after-sales support. Whether you are a first-time homebuyer searching for the perfect 2BHK apartment or a growing family seeking an expansive 4BHK residence with premium finishes, Stellar Structures Limited has a residential project designed to meet your needs and exceed your expectations.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "14px 32px",
                    background: "#C9A227",
                    color: "#061424",
                    fontSize: "14px",
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
                    padding: "14px 32px",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                    borderRadius: "4px",
                  }}
                >
                  Book a Site Visit
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Gallery */}
    

      <CTASection
        title="Find Your Dream Home with Stellar Structures"
        subtitle="Explore our residential projects and discover a living experience crafted with care, quality, and attention to every detail."
        primaryBtn={{ label: "Contact Sales", href: "/contact" }}
       
      />
    </>
  );
}
