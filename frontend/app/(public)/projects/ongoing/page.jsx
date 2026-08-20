import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import CTASection from "../../../components/frontend/PageElements/CTASection";
import GalleryGrid from "../../../components/frontend/PageElements/GalleryGrid";
import StatBar from "../../../components/frontend/PageElements/StatBar";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";

export const metadata = {
  title: "Ongoing Projects | Stellar Structures Limited",
  description:
    "Explore ongoing real estate projects by Stellar Structures Limited in Dhaka. Active premium residential developments in Bashundhara R/A with modern amenities and quality construction.",
  keywords: [
    "ongoing projects Dhaka",
    "Bashundhara R/A ongoing",
    "Stellar Structures construction",
    "real estate projects in progress",
    "premium residential Dhaka",
  ],
  openGraph: {
    title: "Ongoing Projects | Stellar Structures Limited",
    description: "Explore ongoing real estate projects by Stellar Structures Limited in Dhaka.",
    type: "website",
  },
};

const ongoingProjects = [
  {
    title: "Bashundhara R/A",
    subtitle: "Premium Residential Living",
    location: "Bashundhara, Dhaka",
    status: "Ongoing",
    completion: "2027",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-1.jpg",
    desc: "A thoughtfully designed residential enclave featuring spacious floor plans, premium finishes, and world-class amenities. Currently in advanced construction stages with rapid progress being made.",
  },
  {
    title: "Sunset Tower",
    subtitle: "Mixed-Use Development",
    location: "Bashundhara R/A, Dhaka",
    status: "Ongoing",
    completion: "2027",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-3.jpg",
    desc: "A modern mixed-use tower combining luxury apartments with retail spaces, designed for urban professionals seeking convenience and elegance.",
  },
];

const galleryImages = [
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-1.jpg", alt: "Bashundhara R/A Ongoing Project" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-3.jpg", alt: "Sunset Tower Mixed-Use Development" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-5.jpg", alt: "Construction Progress" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-7.jpg", alt: "Premium Living Space Under Construction" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-9.jpg", alt: "Modern Architecture in Progress" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-11.jpg", alt: "Residential Complex Development" },
];

const ongoingFeatures = [
  { icon: "🏗️", title: "Modern Construction", description: "Built using advanced engineering techniques and premium-grade materials to ensure structural integrity and long-lasting durability." },
  { icon: "📐", title: "Thoughtful Design", description: "Every layout is carefully planned to maximize natural light, ventilation, and usable space for comfortable modern living." },
  { icon: "🏗️", title: "Timely Delivery", description: "We maintain strict project timelines with regular milestone updates, ensuring your investment is delivered on schedule." },
  { icon: "📊", title: "Transparent Updates", description: "Access real-time construction progress reports, site photos, and milestone tracking through our customer portal." },
  { icon: "💰", title: "Flexible Payment Plans", description: "Choose from multiple payment options designed to make premium real estate accessible with manageable installments." },
  { icon: "🏆", title: "Proven Track Record", description: "Backed by a legacy of successfully delivered projects, Stellar Structures guarantees quality you can trust." },
];

const projectDetails = [
  {
    title: "Bashundhara R/A — Premium Residential Living",
    paragraphs: [
      "The Bashundhara R/A project by Stellar Structures Limited represents the pinnacle of modern residential living in one of Dhaka's most coveted addresses. Situated in the heart of Bashundhara Residential Area, this development offers a seamless blend of luxury, comfort, and convenience that discerning homeowners demand.",
      "Featuring a carefully curated selection of 2BHK, 3BHK, and 4BHK apartment configurations, each unit has been designed with meticulous attention to space optimization, natural ventilation, and panoramic views of the surrounding greenery. Premium imported fixtures, Italian marble flooring, and modular kitchen setups come as standard in every apartment.",
      "Residents will enjoy access to a wide array of world-class amenities including a temperature-controlled swimming pool, a fully equipped fitness center, dedicated children's play zones, landscaped rooftop gardens, and a community hall for social gatherings. The project also features 24/7 CCTV surveillance, biometric access control, and backup power generation for uninterrupted living.",
      "With construction progressing rapidly and over 85% of the structural work completed, the Bashundhara R/A project is on track for its 2027 delivery date. Early investors have already seen significant appreciation in property value, making this an excellent opportunity for both end-users and real estate investors looking for premium developments in Dhaka."
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-1.jpg",
    completion: "2027",
    units: "120+",
    location: "Bashundhara, Dhaka",
  },
  {
    title: "Sunset Tower — Mixed-Use Development",
    paragraphs: [
      "Sunset Tower is Stellar Structures Limited's flagship mixed-use development, strategically positioned in the vibrant Bashundhara R/A corridor. This ambitious project brings together luxury residential apartments and premium retail spaces under one roof, creating a self-sustained urban ecosystem for modern professionals and families.",
      "The residential floors offer meticulously designed apartments ranging from efficient studio units to spacious 3BHK family homes, each featuring floor-to-ceiling windows that bathe interiors in natural light while offering breathtaking sunset views — the inspiration behind the tower's name. Smart home integration comes pre-installed in every unit, allowing residents to control lighting, climate, and security systems from their smartphones.",
      "The retail podium at the base of Sunset Tower is designed to house boutique shops, gourmet restaurants, a supermarket, and essential services, ensuring that residents have everything they need within walking distance. A dedicated co-working space on the upper floors caters to the growing remote workforce, providing a professional environment without the commute.",
      "Construction on Sunset Tower is well underway, with the foundation and lower floors already completed. The project has attracted significant interest from young professionals and investors who recognize the value of mixed-use developments in Dhaka's rapidly evolving real estate landscape. With competitive pricing and flexible payment schedules, Sunset Tower represents an unparalleled investment opportunity in one of the city's fastest-growing neighborhoods."
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-3.jpg",
    completion: "2027",
    units: "85+",
    location: "Bashundhara R/A, Dhaka",
  },
];

export default function OngoingProjectsPage() {
  return (
    <>
      <style>{`
        .gallery-item:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <PageHeader
        tag="Our Projects"
        title="Ongoing Projects"
        subtitle="Explore our active developments bringing premium living spaces to Dhaka's most prestigious addresses."
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "Ongoing" }]}
      />

    
      {/* Project Cards */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Our Active Developments</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Currently Under Construction</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Our ongoing projects represent the future of premium living in Dhaka. Each development is built with uncompromising quality, innovative design, and a commitment to delivering exceptional value to homeowners and investors alike.
            </p>
          </div>
          <div className="row">
            {ongoingProjects.map((p, i) => (
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
                        background: "rgba(201,162,39,0.9)",
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
                    <span
                      style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        padding: "8px 20px",
                        background: "rgba(6,20,36,0.85)",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "1px",
                        borderRadius: "4px",
                      }}
                    >
                      Est. {p.completion}
                    </span>
                  </div>
                  <div style={{ padding: "32px" }}>
                    <h3
                      style={{
                        fontSize: "1.5rem",
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

      {/* Why Invest Section */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#F8F8F5" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Why Invest</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>The Stellar Structures Advantage</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              When you invest in a Stellar Structures ongoing project, you gain more than just a property — you gain a partner committed to excellence at every stage of construction and beyond.
            </p>
          </div>
          <FeatureGrid features={ongoingFeatures} columns={3} />
        </div>
      </section>

      {/* Detailed Project Descriptions */}
    

      {/* About Our Ongoing Developments */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#061424" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-12" style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>About Our Ongoing Developments</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#fff", marginBottom: "20px", lineHeight: 1.3 }}>
                Building Tomorrow's Landmarks, Today
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                At Stellar Structures Limited, every ongoing project is a reflection of our unwavering commitment to quality, innovation, and customer satisfaction. Our construction philosophy centers on using globally sourced materials, internationally trained engineers, and cutting-edge building technologies to create developments that stand the test of time.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                We understand that purchasing a property under construction requires trust and transparency. That is why we provide regular construction updates, on-site visits for all investors, and a dedicated customer service team that keeps you informed at every milestone. Our open-door policy ensures that you are never left wondering about the progress of your investment.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "24px", textAlign: "justify" }}>
                Dhaka's real estate market continues to grow at an unprecedented pace, and investing in an ongoing project with Stellar Structures Limited positions you to benefit from significant capital appreciation. Whether you are a first-time homebuyer, a growing family, or a seasoned investor, our ongoing developments offer something exceptional for everyone.
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
        title="Interested in Our Ongoing Projects?"
        subtitle="Book your unit today and be part of Dhaka's finest residential developments. Flexible payment plans available."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
      
      />
    </>
  );
}
