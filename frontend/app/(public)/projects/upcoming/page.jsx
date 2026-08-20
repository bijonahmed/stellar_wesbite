import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import CTASection from "../../../components/frontend/PageElements/CTASection";
import GalleryGrid from "../../../components/frontend/PageElements/GalleryGrid";
import StatBar from "../../../components/frontend/PageElements/StatBar";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";

export const metadata = {
  title: "Upcoming Projects | Stellar Structures Limited",
  description:
    "Discover upcoming real estate projects by Stellar Structures Limited in Dhaka. Future premium residential developments in Jolshiri R/A and Bashundhara R/A with luxury amenities and smart home technology.",
  keywords: [
    "upcoming projects Dhaka",
    "Jolshiri R/A upcoming",
    "Stellar Structures future projects",
    "new residential developments Dhaka",
    "luxury apartments coming soon",
    "pre-launch real estate Dhaka",
  ],
  openGraph: {
    title: "Upcoming Projects | Stellar Structures Limited",
    description: "Discover upcoming real estate projects by Stellar Structures Limited in Dhaka. Premium developments launching soon.",
    type: "website",
  },
};

const upcomingProjects = [
  {
    title: "Jolshiri R/A",
    subtitle: "Luxury Redefined",
    location: "Jolshiri, Dhaka",
    status: "Upcoming",
    launch: "Q2 2026",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-2.jpg",
    desc: "An upcoming luxury residential development set in the prestigious Jolshiri area, featuring panoramic views, smart home integration, and premium lifestyle amenities.",
  },
  {
    title: "Riverview Residences",
    subtitle: "Waterfront Elegance",
    location: "Bashundhara R/A, Dhaka",
    status: "Upcoming",
    launch: "Q4 2026",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-4.jpg",
    desc: "A stunning waterfront residential project offering serene views, landscaped gardens, and modern architectural design for discerning homeowners.",
  },
  {
    title: "The Grand Avenue",
    subtitle: "Urban Living Perfected",
    location: "Jolshiri, Dhaka",
    status: "Upcoming",
    launch: "Q1 2027",
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-6.jpg",
    desc: "A landmark urban development combining contemporary apartments with curated retail spaces, designed to redefine modern city living in Dhaka.",
  },
];

const galleryImages = [
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-2.jpg", alt: "Jolshiri R/A Upcoming Luxury Project" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-4.jpg", alt: "Riverview Residences Waterfront Design" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-6.jpg", alt: "The Grand Avenue Urban Development" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-8.jpg", alt: "Future Residential Concept" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-10.jpg", alt: "Modern Architecture Preview" },
  { src: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-12.jpg", alt: "Premium Living Spaces Concept" },
];

const upcomingFeatures = [
  { icon: "🔮", title: "Future-Ready Design", description: "Every upcoming project is designed with tomorrow in mind, featuring smart home infrastructure, EV charging provisions, and sustainable building systems." },
  { icon: "💎", title: "Pre-Launch Pricing", description: "Early investors enjoy exclusive pre-launch pricing with significant discounts, ensuring maximum value appreciation as the project progresses." },
  { icon: "🏗️", title: "Innovative Architecture", description: "Our upcoming developments push the boundaries of design with cutting-edge architecture, premium materials, and iconic structures that redefine Dhaka's skyline." },
  { icon: "📱", title: "Smart Home Integration", description: "Every unit comes pre-equipped with smart home technology, allowing you to control lighting, climate, security, and entertainment from your smartphone." },
  { icon: "🌿", title: "Sustainable Living", description: "Green building certifications, rainwater harvesting, solar panels, and energy-efficient systems are built into every upcoming development from day one." },
  { icon: "🤝", title: "Priority Registration", description: "Register early to secure your preferred unit, floor, and orientation. Priority members receive exclusive updates, site visits, and first access to bookings." },
];

const projectDetails = [
  {
    title: "Jolshiri R/A — Luxury Redefined",
    paragraphs: [
      "The Jolshiri R/A project by Stellar Structures Limited is poised to become the most sought-after luxury residential address in Dhaka. Nestled in the prestigious Jolshiri Residential Area, this development promises an unparalleled living experience that combines architectural brilliance with the tranquility of a well-planned neighborhood.",
      "This expansive development will feature a curated collection of 3BHK and 4BHK luxury apartments, each designed to offer sweeping panoramic views of the surrounding landscape. Floor plans have been meticulously crafted by internationally acclaimed architects to ensure every square foot serves a purpose, with open-concept living areas, master suites with walk-in closets, and imported Italian marble flooring throughout.",
      "The project will boast an exceptional array of amenities including an infinity-edge rooftop pool, a state-of-the-art gymnasium with personal training studios, a spa and wellness center, landscaped sky gardens on multiple floors, and a grand clubhouse for exclusive member events. Smart home technology will be seamlessly integrated into every unit, giving residents complete control over their living environment.",
      "With construction slated to begin in Q2 2026, the Jolshiri R/A project represents a rare opportunity to secure a premium property at pre-launch prices. Early registrants will benefit from preferential pricing, priority unit selection, and exclusive access to detailed floor plans and interior design options. This is more than a home — it is a legacy investment in Dhaka's most exciting residential future."
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-2.jpg",
    launch: "Q2 2026",
    units: "200+",
    location: "Jolshiri, Dhaka",
  },
  {
    title: "Riverview Residences — Waterfront Elegance",
    paragraphs: [
      "Riverview Residences brings a new dimension to luxury living in Dhaka with its breathtaking waterfront location along the Bashundhara R/A corridor. This upcoming development is designed for those who seek the perfect balance between urban convenience and the serenity of waterside living, offering an escape from the city's bustle without leaving its heart.",
      "The residential tower will house a thoughtfully planned mix of 2BHK, 3BHK, and penthouse units, each oriented to maximize river views and natural ventilation. Expansive balconies, floor-to-ceiling glass facades, and premium wooden finishes create an atmosphere of understated luxury that appeals to both young professionals and established families.",
      "Beyond the residences, Riverview Residences will feature a curated retail promenade along the waterfront, complete with artisan cafes, boutique shopping, and a gourmet grocery store. A private marina, jogging trails along the riverbank, and a dedicated children's adventure park will make this development a destination in itself.",
      "Launching in Q4 2026, Riverview Residences offers an exceptional investment opportunity in one of Dhaka's fastest-appreciating corridors. The waterfront premium ensures strong rental yields and capital growth, while Stellar Structures' reputation for quality delivery provides the confidence every investor needs. Register today to secure your waterfront address."
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-4.jpg",
    launch: "Q4 2026",
    units: "150+",
    location: "Bashundhara R/A, Dhaka",
  },
  {
    title: "The Grand Avenue — Urban Living Perfected",
    paragraphs: [
      "The Grand Avenue is Stellar Structures Limited's bold vision for the future of urban living in Dhaka. Located in the rapidly developing Jolshiri area, this landmark mixed-use development will seamlessly integrate premium residential apartments with world-class retail and commercial spaces, creating a vibrant self-contained community.",
      "The residential component will feature a diverse range of unit types from efficient studio apartments for young professionals to expansive 4BHK family homes, all finished to the highest standards. Each floor will offer unique layouts and orientations, with select units featuring private terraces, double-height living spaces, and panoramic city views.",
      "The retail podium, designed by an award-winning retail consultancy, will house an international-standard shopping mall, a gourmet food hall, a multi-screen cinema, and a dedicated co-working hub. The development will also include a rooftop infinity pool, a fully equipped fitness center, landscaped gardens, and a children's play area designed by landscape architects.",
      "With a planned launch in Q1 2027, The Grand Avenue represents the next evolution of mixed-use development in Bangladesh. The project has already generated significant interest from both domestic and international investors who recognize the transformative potential of well-designed urban spaces. Early registration ensures priority access to unit selection and exclusive pre-launch pricing advantages."
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-6.jpg",
    launch: "Q1 2027",
    units: "180+",
    location: "Jolshiri, Dhaka",
  },
];

export default function UpcomingProjectsPage() {
  return (
    <>
      <style>{`
        .gallery-item:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <PageHeader
        tag="Our Projects"
        title="Upcoming Projects"
        subtitle="Be the first to discover our exciting new developments coming soon to Dhaka's most prestigious addresses."
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "Upcoming" }]}
      />

    
      {/* Project Cards */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Coming Soon</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Upcoming Developments</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Our upcoming projects represent the next generation of premium living in Dhaka. Register your interest early to secure pre-launch pricing and priority unit selection.
            </p>
          </div>
          <div className="row">
            {upcomingProjects.map((p, i) => (
              <div className="col-lg-4 col-md-6" key={i} style={{ marginBottom: "30px" }}>
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
                        background: "rgba(6,20,36,0.85)",
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
                        background: "rgba(201,162,39,0.9)",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "1px",
                        borderRadius: "4px",
                      }}
                    >
                      Launch {p.launch}
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
                      Register Interest
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
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Why Register Early</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>The Early Investor Advantage</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Registering early with Stellar Structures Limited gives you exclusive benefits that reward your foresight and trust in our vision for Dhaka's future.
            </p>
          </div>
          <FeatureGrid features={upcomingFeatures} columns={3} />
        </div>
      </section>

      {/* Detailed Project Descriptions */}
    

      {/* About Our Upcoming Developments */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#061424" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6" style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>About Our Upcoming Developments</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#fff", marginBottom: "20px", lineHeight: 1.3 }}>
                Shaping the Future of Dhaka Living
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                At Stellar Structures Limited, our upcoming projects are born from a deep understanding of how Dhaka is evolving and what its residents will need in the years ahead. Every development we plan is the result of extensive market research, architectural innovation, and a genuine desire to create spaces that enhance the way people live, work, and connect.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                We believe that investing in a pre-launch project should never feel like a leap of faith. That is why we provide comprehensive project walkthroughs, detailed architectural renderings, virtual reality site tours, and one-on-one consultations with our design team. Our goal is to ensure that every early investor feels informed, confident, and excited about the home they are helping to create.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "24px", textAlign: "justify" }}>
                Dhaka's real estate market is entering a transformative period, with infrastructure development, improved connectivity, and growing international interest driving unprecedented demand for quality housing. By registering with our upcoming projects today, you position yourself at the forefront of this growth, securing premium properties at the most favorable prices before they reach the open market.
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
            <div className="col-lg-6">
              <div
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(201,162,39,0.2)",
                }}
              >
                <img
                  src="/frontend_theme/assets/imgs/gallery_img/stellar-structures-limited-12.jpg"
                  alt="Stellar Structures Upcoming Premium Developments in Dhaka"
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
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Project Gallery</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Design Previews</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              A visual glimpse into the future of premium living in Dhaka, showcasing the architectural vision and design philosophy behind our upcoming projects.
            </p>
          </div>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CTASection
        title="Want Early Access to Our Upcoming Projects?"
        subtitle="Register your interest today and receive priority updates on pricing, floor plans, and exclusive pre-launch offers."
        primaryBtn={{ label: "Register Now", href: "/contact" }}
        secondaryBtn={{ label: "Download Brochure", href: "#" }}
      />
    </>
  );
}
