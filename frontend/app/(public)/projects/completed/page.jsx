import Link from "next/link";
import PageHeader from "../../../components/frontend/PageElements/PageHeader";
import CTASection from "../../../components/frontend/PageElements/CTASection";
import GalleryGrid from "../../../components/frontend/PageElements/GalleryGrid";
import StatBar from "../../../components/frontend/PageElements/StatBar";
import FeatureGrid from "../../../components/frontend/PageElements/FeatureGrid";

export const metadata = {
  title: "Completed Projects | Stellar Structures Limited",
  description:
    "Explore completed real estate projects by Stellar Structures Limited in Dhaka. Delivered residential and commercial developments including Stellar Heights, The Pearl Complex, Greenview Apartments, and Summit Plaza with proven quality and 100% on-time delivery.",
  keywords: [
    "completed projects Dhaka",
    "Stellar Structures delivered",
    "finished developments Dhaka",
    "delivered residential towers Bashundhara",
    "handover projects Dhaka",
    "real estate portfolio Stellar Structures",
  ],
  openGraph: {
    title: "Completed Projects | Stellar Structures Limited",
    description: "Explore completed real estate projects by Stellar Structures Limited in Dhaka. Proven quality and timely delivery.",
    type: "website",
  },
};

const completedProjects = [
  {
    title: "Stellar Heights",
    subtitle: "Residential Tower",
    location: "Bashundhara R/A, Dhaka",
    status: "Delivered",
    completed: "2024",
    units: "120",
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-sahilhansda-32174685.jpg",
    desc: "A landmark 20-storey residential tower delivered on schedule, featuring modern apartments with premium amenities and a dedicated community space.",
  },
  {
    title: "The Pearl Complex",
    subtitle: "Mixed-Use Development",
    location: "Bashundhara R/A, Dhaka",
    status: "Delivered",
    completed: "2023",
    units: "85",
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-mubin-khan-29725042-38001976.jpg",
    desc: "Successfully delivered mixed-use complex combining retail outlets with residential apartments, now a thriving community hub in Bashundhara.",
  },
  {
    title: "Greenview Apartments",
    subtitle: "Residential Complex",
    location: "Jolshiri, Dhaka",
    status: "Delivered",
    completed: "2023",
    units: "64",
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-ashraful-islam-2157680935-37370857.jpg",
    desc: "Eco-friendly residential complex featuring landscaped gardens, energy-efficient design, and family-friendly living spaces in Jolshiri.",
  },
  {
    title: "Summit Plaza",
    subtitle: "Commercial Tower",
    location: "Bashundhara R/A, Dhaka",
    status: "Delivered",
    completed: "2022",
    units: "40",
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-tanhatamannasyed-35875306.jpg",
    desc: "Premium commercial tower offering modern office spaces with state-of-the-art facilities, currently home to multiple leading organizations.",
  },
];

const galleryImages = [
  { src: "/frontend_theme/assets/imgs/gallery_img/pexels-sahilhansda-32174685.jpg", alt: "Stellar Heights Residential Tower Completed" },
  { src: "/frontend_theme/assets/imgs/gallery_img/pexels-mubin-khan-29725042-38001976.jpg", alt: "The Pearl Complex Mixed-Use Delivered" },
  { src: "/frontend_theme/assets/imgs/gallery_img/pexels-ashraful-islam-2157680935-37370857.jpg", alt: "Greenview Apartments Eco-Friendly Living" },
  { src: "/frontend_theme/assets/imgs/gallery_img/pexels-tanhatamannasyed-35875306.jpg", alt: "Summit Plaza Commercial Tower" },
  { src: "/frontend_theme/assets/imgs/gallery_img/pexels-tanhatamannasyed-35890511.jpg", alt: "Completed Project Interiors" },
  { src: "/frontend_theme/assets/imgs/gallery_img/pexels-ishtiak-ahamed-2155776675-34560931.jpg", alt: "Delivered Residential Complex" },
  { src: "/frontend_theme/assets/imgs/gallery_img/pexels-saymon-sami-202123-725100.jpg", alt: "Premium Living Space Completed" },
  { src: "/frontend_theme/assets/imgs/gallery_img/pexels-tanhatamannasyed-36042346.jpg", alt: "Modern Architecture Delivered" },
  { src: "/frontend_theme/assets/imgs/gallery_img/pexels-shaddam-hossain-3417842-38072394.jpg", alt: "Residential Complex Handover" },
];

const completedFeatures = [
  { icon: "\u2705", title: "100% On-Time Delivery", description: "Every single project in our portfolio has been delivered on or before the committed date, setting a benchmark in the Dhaka real estate industry." },
  { icon: "\uD83C\uDFD7\uFE0F", title: "Proven Construction Quality", description: "Our completed projects stand as living testimonials to our commitment to premium materials, expert craftsmanship, and rigorous quality control." },
  { icon: "\uD83D\uDC65", title: "309+ Happy Families", description: "Over 309 families have received their dream homes from Stellar Structures, each enjoying the quality and comfort we promised during the sales phase." },
  { icon: "\uD83D\uDCC8", title: "Strong Value Appreciation", description: "Properties in our delivered projects have consistently appreciated above market averages, rewarding homeowners and investors with significant returns." },
  { icon: "\uD83C\uDFC6", title: "Industry Recognition", description: "Our completed developments have earned multiple awards for architectural excellence, sustainable design, and construction innovation." },
  { icon: "\uD83E\uDD1D", title: "Post-Delivery Support", description: "Our relationship does not end at handover. We provide comprehensive maintenance support, facility management, and warranty services for all completed projects." },
];

const projectDetails = [
  {
    title: "Stellar Heights \u2014 A Landmark of Modern Living",
    paragraphs: [
      "Stellar Heights stands as a towering testament to Stellar Structures Limited\u2019s unwavering commitment to delivering premium residential experiences. This 20-storey landmark in the heart of Bashundhara R/A was completed in 2024 and has since become one of the most sought-after residential addresses in the area, housing over 120 families who enjoy a lifestyle defined by comfort, security, and community.",
      "The tower features a diverse range of apartment configurations from efficient 2BHK units ideal for young professionals to expansive 4BHK family homes, all designed with meticulous attention to detail. Every apartment boasts imported Italian marble flooring, modular kitchens with premium German appliances, double-glazed windows for noise insulation, and smart home pre-wiring for future automation.",
      "Residents of Stellar Heights enjoy access to a comprehensive suite of amenities including a rooftop swimming pool with panoramic city views, a fully equipped gymnasium, a dedicated children\u2019s play area, landscaped podium gardens, and a multipurpose community hall. The building features three high-speed elevators, 24/7 CCTV surveillance, biometric access control, and underground parking for all residents.",
      "The successful delivery of Stellar Heights has reinforced our reputation as a developer that delivers on every promise. Property values in the tower have appreciated by over 35% since handover, making it one of the best-performing residential investments in Bashundhara R/A. Our residents consistently report high satisfaction with both the construction quality and the ongoing facility management services."
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-sahilhansda-32174685.jpg",
    completed: "2024",
    units: "120 Units",
    location: "Bashundhara R/A, Dhaka",
  },
  {
    title: "The Pearl Complex \u2014 Where Community Meets Commerce",
    paragraphs: [
      "The Pearl Complex redefined the mixed-use development concept in Bashundhara R/A when Stellar Structures Limited delivered this ambitious project in 2023. Combining 85 residential apartments with a vibrant retail podium, The Pearl Complex has become a thriving community hub where residents enjoy the convenience of having world-class shopping, dining, and essential services literally at their doorstep.",
      "The residential component features thoughtfully designed 2BHK and 3BHK apartments with open floor plans, expansive balconies, and premium finishes throughout. Each unit was crafted to maximize natural light and ventilation, creating living spaces that feel airy, spacious, and connected to the surrounding neighborhood. The building incorporates sound-resistant wall construction and earthquake-resistant structural design.",
      "The retail podium houses a carefully curated mix of retail outlets including a supermarket, pharmacy, restaurants, cafes, and specialty shops, serving not only the residents of The Pearl Complex but also the broader Bashundhara community. This retail success has generated consistent rental yields for investors, averaging 8-10% annually.",
      "Delivered six months ahead of schedule, The Pearl Complex exemplifies our dedication to efficiency without compromising quality. The project received the Bangladesh Real Estate Award for Best Mixed-Use Development in 2023, and its retail spaces maintain a 98% occupancy rate, reflecting the strong demand and community trust that Stellar Structures projects generate."
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-mubin-khan-29725042-38001976.jpg",
    completed: "2023",
    units: "85 Units",
    location: "Bashundhara R/A, Dhaka",
  },
  {
    title: "Greenview Apartments \u2014 Sustainable Living Redefined",
    paragraphs: [
      "Greenview Apartments represents Stellar Structures Limited\u2019s pioneering approach to sustainable residential development in Dhaka. Completed in 2023 in the rapidly developing Jolshiri area, this eco-friendly complex of 64 apartments demonstrates that luxury living and environmental responsibility can coexist beautifully, creating a template for the future of residential construction in Bangladesh.",
      "The project incorporates numerous green building features including solar panels that generate 40% of the building\u2019s common area electricity needs, rainwater harvesting systems that supply irrigation for the landscaped gardens, energy-efficient LED lighting throughout common areas, and a comprehensive waste management system with composting facilities. These features reduce residents\u2019 utility costs by an average of 30% compared to conventional buildings.",
      "Each of the 64 apartments was designed with cross-ventilation principles, ensuring natural airflow reduces dependence on air conditioning. Expansive windows, private balconies overlooking lush greenery, and sound-insulated walls create a serene living environment that feels worlds away from the urban bustle, despite being centrally located in Jolshiri.",
      "Greenview Apartments has become a case study in sustainable development, featured in multiple architecture and real estate publications. The project achieved a gold certification from the Bangladesh Green Building Council and has attracted environmentally conscious homeowners who value both the reduced carbon footprint and the long-term cost savings. Resale values in the complex have increased by over 25% since delivery, proving that sustainability and profitability go hand in hand."
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-ashraful-islam-2157680935-37370857.jpg",
    completed: "2023",
    units: "64 Units",
    location: "Jolshiri, Dhaka",
  },
  {
    title: "Summit Plaza \u2014 The Business Address of Choice",
    paragraphs: [
      "Summit Plaza elevated the standard for commercial real estate in Dhaka when Stellar Structures Limited delivered this premium office tower in 2022. Located in the prime commercial corridor of Bashundhara R/A, this modern commercial development has quickly established itself as the preferred business address for leading organizations seeking prestigious, well-connected, and professionally managed office spaces.",
      "The tower offers 40 premium office units ranging from compact suites ideal for startups and professional practices to expansive floor plates suitable for corporate headquarters. Every office space features raised flooring for flexible cabling, fiber-optic connectivity infrastructure, independent climate control, and floor-to-ceiling windows that flood workspaces with natural light while offering inspiring views of the city.",
      "Summit Plaza provides a comprehensive range of business amenities including a professional reception and concierge service, fully equipped conference rooms available for booking, a business center with secretarial support, secure underground parking with designated visitor spaces, and a ground-floor cafe perfect for informal meetings and networking.",
      "Within just two years of completion, Summit Plaza achieved a 100% occupancy rate, a remarkable feat that speaks to the quality of the development and the demand for premium commercial spaces in Bashundhara. The building houses over 30 organizations including multinational corporations, tech startups, law firms, and financial institutions, creating a dynamic professional ecosystem that benefits all tenants."
    ],
    image: "/frontend_theme/assets/imgs/gallery_img/pexels-tanhatamannasyed-35875306.jpg",
    completed: "2022",
    units: "40 Offices",
    location: "Bashundhara R/A, Dhaka",
  },
];

export default function CompletedProjectsPage() {
  return (
    <>
      <style>{`
        .gallery-item:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <PageHeader
        tag="Our Projects"
        title="Completed Projects"
        subtitle="A legacy of excellence \u2014 explore our delivered developments that stand as testament to quality construction, timely delivery, and unwavering commitment to our clients."
        breadcrumbs={[{ label: "Projects", href: "/projects" }, { label: "Completed" }]}
      />

      <StatBar stats={[{ value: "4", label: "Projects Delivered" }, { value: "309+", label: "Units Handed Over" }, { value: "100%", label: "On-Time Delivery" }, { value: "100%", label: "Client Satisfaction" }]} />

      {/* Project Cards */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Our Delivered Portfolio</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Successfully Completed Developments</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Each completed project in our portfolio tells a story of quality craftsmanship, timely delivery, and the trust that hundreds of families and businesses have placed in Stellar Structures Limited.
            </p>
          </div>
          <div className="row">
            {completedProjects.map((p, i) => (
              <div className="col-lg-3 col-md-6" key={i} style={{ marginBottom: "30px" }}>
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
                        background: "rgba(34,139,34,0.9)",
                        color: "#fff",
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        borderRadius: "4px",
                      }}
                    >
                      Delivered {p.completed}
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
                      {p.units} Units
                    </span>
                  </div>
                  <div style={{ padding: "32px" }}>
                    <h3
                      style={{
                        fontSize: "1.3rem",
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
                      href="/gallery"
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
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#F8F8F5" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Why Trust Stellar Structures</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Our Track Record Speaks</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Every completed project is a promise fulfilled. Here is why homeowners and investors trust Stellar Structures Limited with their most important investment.
            </p>
          </div>
          <FeatureGrid features={completedFeatures} columns={3} />
        </div>
      </section>

      {/* Detailed Project Descriptions */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>Project Stories</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>The Journey Behind Each Delivery</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              Discover the story behind each completed project \u2014 from vision and design to construction and the moment we handed over the keys to our delighted homeowners.
            </p>
          </div>

          {projectDetails.map((project, i) => (
            <div
              key={i}
              className="row"
              style={{
                marginBottom: i < projectDetails.length - 1 ? "80px" : "0",
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
                      background: "rgba(34,139,34,0.1)",
                      color: "rgba(34,139,34,1)",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      borderRadius: "4px",
                      marginRight: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    Delivered {project.completed}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 16px",
                      background: "rgba(6,20,36,0.05)",
                      color: "#061424",
                      fontSize: "12px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      borderRadius: "4px",
                      marginRight: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    {project.units}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "6px 16px",
                      background: "rgba(6,20,36,0.05)",
                      color: "#061424",
                      fontSize: "12px",
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
                  {project.title}
                </h3>
                {project.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: "15px",
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
                    href="/gallery"
                    style={{
                      display: "inline-block",
                      padding: "14px 32px",
                      background: "#061424",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "none",
                      borderRadius: "4px",
                      marginRight: "12px",
                    }}
                  >
                    View Gallery
                  </Link>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-block",
                      padding: "14px 32px",
                      border: "1px solid #061424",
                      color: "#061424",
                      fontSize: "14px",
                      fontWeight: 600,
                      textDecoration: "none",
                      borderRadius: "4px",
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Our Completed Portfolio */}
      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#061424" }}>
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-6" style={{ marginBottom: "40px" }}>
              <p style={{ fontSize: "12px", color: "#C9A227", fontWeight: 500, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>About Our Completed Portfolio</p>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#fff", marginBottom: "20px", lineHeight: 1.3 }}>
                A Legacy Built on Trust and Excellence
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                At Stellar Structures Limited, our completed projects are more than just buildings \u2014 they are the foundation of our reputation and the embodiment of the trust that hundreds of families and businesses have placed in us. Every handover represents a promise kept, a deadline met, and a standard of quality exceeded.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "16px", textAlign: "justify" }}>
                From the moment we break ground to the day we hand over the keys, every decision we make is guided by a single principle: to deliver a home or workspace that our clients will be proud of for generations. Our rigorous quality control processes, experienced construction teams, and premium material sourcing ensure that every project meets the highest international standards.
              </p>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "24px", textAlign: "justify" }}>
                The success of our completed portfolio \u2014 spanning residential towers, mixed-use complexes, eco-friendly apartments, and premium commercial spaces \u2014 fuels our ambition to keep pushing boundaries. Each delivered project teaches us lessons that make our ongoing and upcoming developments even better, creating a virtuous cycle of improvement that benefits every client who chooses Stellar Structures Limited.
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
                  href="/projects"
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
                  View All Projects
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
                  src="/frontend_theme/assets/imgs/gallery_img/pexels-ishtiak-ahamed-2155776675-34560931.jpg"
                  alt="Stellar Structures Completed Projects Portfolio in Dhaka"
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
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, color: "#061424", marginBottom: "16px" }}>Delivered Excellence</h2>
            <p style={{ fontSize: "15px", color: "#8A8A85", maxWidth: "650px", margin: "0 auto", lineHeight: 1.8 }}>
              A visual showcase of our completed developments, reflecting the quality, design, and attention to detail that define every Stellar Structures project.
            </p>
          </div>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CTASection
        title="Impressed by Our Completed Work?"
        subtitle="Explore our ongoing and upcoming projects to find your next investment, or contact us to learn more about our delivered developments."
        primaryBtn={{ label: "View Projects", href: "/projects" }}
        secondaryBtn={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
