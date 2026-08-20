import Link from "next/link";
import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";


export const metadata = {
  title: "Career | Stellar Structures Limited",
  description:
    "Explore career opportunities at Stellar Structures Limited — join Bangladesh's leading real estate company. Find open positions in construction, architecture, sales, marketing, and project management in Dhaka.",
  keywords: [
    "Stellar Structures career",
    "real estate jobs Dhaka",
    "construction jobs Bangladesh",
    "architecture jobs Dhaka",
    "property developer careers",
    "real estate company hiring Bangladesh",
  ],
  openGraph: {
    title: "Career | Stellar Structures Limited",
    description: "Join Stellar Structures Limited — explore career opportunities in Bangladesh's leading real estate company.",
    type: "website",
  },
};

export default function CareerPage() {
  return (
    <>
      <PageHeader
        tag="Join Our Team"
        title="Career Opportunities"
        subtitle="Build your future with Bangladesh leading real estate company driving digital innovation"
        breadcrumbs={[{ label: "About" }, { label: "Career" }]}
      />

      <section style={{ padding: "clamp(60px, 2vw, 120px) 0", background: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11">
              <div
                style={{
                  position: "relative",
                  background: "#faf9f6",
                  borderRadius: "16px",
                  padding: "clamp(18px, 6vw, 80px)",
                  border: "1px solid rgba(201,162,39,0.15)",
                  boxShadow: "0 4px 40px rgba(6,20,36,0.04)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "32px",
                    left: "clamp(32px, 5vw, 64px)",
                    fontSize: "clamp(80px, 10vw, 140px)",
                    color: "#C9A227",
                    opacity: 0.08,
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  &ldquo;
                </div>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <p
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(16px, 1.5vw, 19px)",
                      lineHeight: 2,
                      textAlign: "justify",
                      marginBottom: "28px",
                    }}
                  >
                    A career at Stellar Structures Limited is more than just a job — it is an invitation to be part of something extraordinary. We are shaping the skyline of Bangladesh, one landmark project at a time, and we are looking for passionate, driven, and innovative individuals to join our growing team. Whether you are an experienced professional or just starting your career, Stellar offers a dynamic environment where talent is nurtured, ideas are valued, and every contribution matters. We believe that our people are the foundation of our success, and we are committed to providing opportunities that allow our team members to grow, thrive, and make a real impact.
                  </p>
                  <p
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(16px, 1.5vw, 19px)",
                      lineHeight: 2,
                      textAlign: "justify",
                      marginBottom: "28px",
                    }}
                  >
                    As we embrace digitalization and technological innovation across every facet of our operations, we are creating exciting new roles in data analytics, smart building technology, digital project management, and customer experience design. Our investment in cutting-edge tools and platforms means our team members work with the latest technologies, gaining skills that are shaping the future of real estate. We foster a culture of continuous learning, offering training programs, mentorship, and professional development initiatives that empower our employees to stay ahead in a rapidly evolving industry. At Stellar, you do not just keep pace with change — you lead it.
                  </p>
                  <p
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(16px, 1.5vw, 19px)",
                      lineHeight: 2,
                      textAlign: "justify",
                      marginBottom: "28px",
                    }}
                  >
                    We offer competitive compensation packages, comprehensive benefits, and a supportive work environment that prioritizes work-life balance. Our offices are designed to inspire creativity and collaboration, with modern amenities and a culture that celebrates teamwork. From architecture and engineering to finance, marketing, and customer service, every department at Stellar operates with a shared commitment to excellence. We value diversity and believe that different perspectives drive innovation. Our recruitment process is designed to identify not just skills and experience, but also passion, integrity, and the desire to make a difference.
                  </p>
                  <p
                    style={{
                      color: "#1a1a1a",
                      fontSize: "clamp(16px, 1.5vw, 19px)",
                      lineHeight: 2,
                      textAlign: "justify",
                      marginBottom: "0",
                    }}
                  >
                    Joining Stellar Structures Limited means becoming part of a legacy of trust, quality, and innovation. You will work alongside industry leaders on projects that define communities and transform lives. We are building more than buildings — we are building futures, and we want you to be part of that journey. Explore our current openings below and take the first step toward a rewarding career with one of Bangladesh most respected real estate companies. Your future starts here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      <CTASection
        title="Ready to Build Your Future?"
        subtitle="Join a team that is redefining real estate in Bangladesh through innovation, integrity, and excellence."
        primaryBtn={{ label: "Contact Us", href: "/contact" }}
        secondaryBtn={{ label: "View Projects", href: "/projects" }}
      />
    </>
  );
}
