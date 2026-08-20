import PageHeader from "../../components/frontend/PageElements/PageHeader";
import CTASection from "../../components/frontend/PageElements/CTASection";
import leadershipData from "../../data/leadershipMessages.json";

const md = leadershipData.managingDirector;

export const metadata = {
  title: "Our Team | Stellar Structures Limited",
  description:
    "Meet the dedicated team behind Stellar Structures Limited — experienced professionals driving innovation and excellence in Bangladesh's real estate industry through expertise and commitment.",
  keywords: [
    "Stellar Structures team",
    "real estate team Dhaka",
    "property developer leadership Bangladesh",
    "construction company professionals",
  ],
  openGraph: {
    title: "Our Team | Stellar Structures Limited",
    description: "Meet the experienced professionals behind Stellar Structures Limited's success in real estate.",
    type: "website",
  },
};

const gold = "#C9A227";
const dark = "#061424";

const passportImgStyle = {
  width: "180px",
  height: "220px",
  objectFit: "cover",
  objectPosition: "top center",
  borderRadius: "8px",
  border: `3px solid ${gold}`,
  boxShadow: "0 8px 24px rgba(6,20,36,0.12)",
};

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "clamp(24px, 4vw, 48px)",
  boxShadow: "0 2px 16px rgba(6,20,36,0.06)",
  border: "1px solid rgba(0,0,0,0.05)",
};

const sectionTitle = {
  color: dark,
  fontSize: "clamp(26px, 3vw, 40px)",
  fontWeight: 700,
  marginBottom: "8px",
};

const sectionTag = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  color: gold,
  fontSize: "13px",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "4px",
  marginBottom: "12px",
};

const goldLine = {
  width: "60px",
  height: "3px",
  background: gold,
  margin: "20px 0 28px",
};

const bioStyle = {
  color: "#444",
  fontSize: "clamp(15px, 1.2vw, 16px)",
  lineHeight: 1.9,
  textAlign: "justify",
  margin: 0,
};

export default function OurTeamPage() {
  const chairman = leadershipData.chairman;
  const directors = leadershipData.directors;

  return (
    <>
      <PageHeader
        tag="About Us"
        title="Our Team"
        subtitle="Driving digital innovation and excellence in Bangladesh real estate industry through technology and commitment"
        breadcrumbs={[{ label: "About" }, { label: "Our Team" }]}
      />

      {/* Chairman Section */}
      <section style={{ padding: "clamp(20px, 2vw, 40px) 0", background: "#f8f7f3" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={cardStyle}>
                <div className="row align-items-start g-4">
                  {/* Passport Photo */}
                  <div className="col-md-auto text-center">
                    <img
                      src={chairman.image}
                      alt={chairman.name}
                      style={{ ...passportImgStyle, display: "block", margin: "0 auto" }}
                    />
                    <p
                      style={{
                        color: dark,
                        fontSize: "clamp(16px, 1.5vw, 18px)",
                        fontWeight: 700,
                        marginTop: "12px",
                        marginBottom: "2px",
                      }}
                    >
                      {chairman.name}
                    </p>
                    <p
                      style={{
                        color: gold,
                        fontSize: "clamp(12px, 1vw, 14px)",
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {chairman.designation}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="col">
                    <span style={sectionTag}>
                      <span style={{ width: "24px", height: "2px", background: gold }} />
                      {chairman.tag}
                    </span>
                    <h2 style={sectionTitle}>{chairman.title}</h2>
                    <div style={goldLine} />

                    {chairman.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        style={{
                          ...bioStyle,
                          marginBottom: i === chairman.paragraphs.length - 1 ? "0" : "18px",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Director Section */}
      <section style={{ padding: "clamp(20px, 2vw, 40px) 0", background: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={cardStyle}>
                <div className="row align-items-start g-4">
                  {/* Passport Photo */}
                  <div className="col-md-auto text-center">
                    {md.image ? (
                      <img
                        src={md.image}
                        alt={md.name}
                        style={{ ...passportImgStyle, display: "block", margin: "0 auto" }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "180px",
                          height: "220px",
                          borderRadius: "8px",
                          border: `3px solid ${gold}`,
                          background: `linear-gradient(135deg, ${dark}10, ${dark}05)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                        }}
                      >
                        <span style={{ fontSize: "48px", color: gold, opacity: 0.3 }}>
                          {md.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <p
                      style={{
                        color: dark,
                        fontSize: "clamp(16px, 1.5vw, 18px)",
                        fontWeight: 700,
                        marginTop: "12px",
                        marginBottom: "2px",
                      }}
                    >
                      {md.name}
                    </p>
                    <p
                      style={{
                        color: gold,
                        fontSize: "clamp(12px, 1vw, 14px)",
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {md.designation}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="col">
                    <span style={sectionTag}>
                      <span style={{ width: "24px", height: "2px", background: gold }} />
                      {md.tag}
                    </span>
                    <h2 style={sectionTitle}>{md.title}</h2>
                    <div style={goldLine} />

                    {md.paragraphs.map((para, i) => (
                      <p
                        key={i}
                        style={{
                          ...bioStyle,
                          marginBottom: i === md.paragraphs.length - 1 ? "0" : "18px",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section style={{ padding: "clamp(20px, 2vw, 40px) 0", background: "#fff" }}>
        <div className="container">
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <span style={sectionTag}>
              <span style={{ width: "32px", height: "2px", background: gold }} />
              {directors.tag}
              <span style={{ width: "32px", height: "2px", background: gold }} />
            </span>
            <h2 style={sectionTitle}>{directors.title}</h2>
            <div style={{ ...goldLine, margin: "20px auto 0" }} />
          </div>

          {/* Director Cards */}
          <div className="row g-4 justify-content-center">
            {directors.items.map((director, i) => (
              <div key={i} className="col-lg-10">
                <div style={cardStyle}>
                  <div className="row align-items-start g-4">
                    {/* Passport Photo */}
                    <div className="col-md-auto text-center">
                      {director.image ? (
                        <img
                          src={director.image}
                          alt={director.name}
                          style={{ ...passportImgStyle, display: "block", margin: "0 auto" }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "180px",
                            height: "220px",
                            borderRadius: "8px",
                            border: `3px solid ${gold}`,
                            background: `linear-gradient(135deg, ${dark}10, ${dark}05)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "0 auto",
                          }}
                        >
                          <span style={{ fontSize: "48px", color: gold, opacity: 0.3 }}>
                            {director.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <p
                        style={{
                          color: dark,
                          fontSize: "clamp(16px, 1.5vw, 18px)",
                          fontWeight: 700,
                          marginTop: "12px",
                          marginBottom: "2px",
                        }}
                      >
                        {director.name}
                      </p>
                      <p
                        style={{
                          color: gold,
                          fontSize: "clamp(12px, 1vw, 14px)",
                          fontWeight: 600,
                          marginBottom: "4px",
                        }}
                      >
                        {director.title}
                      </p>
                      <p
                        style={{
                          color: "#999",
                          fontSize: "clamp(11px, 0.9vw, 13px)",
                          fontWeight: 500,
                          margin: 0,
                        }}
                      >
                        {director.experience}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="col">
                      <div style={{ marginBottom: "8px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            background: `${gold}15`,
                            color: gold,
                            fontSize: "12px",
                            fontWeight: 600,
                            padding: "4px 12px",
                            borderRadius: "20px",
                            marginBottom: "8px",
                          }}
                        >
                          {director.degree}
                        </span>
                      </div>

                      <div style={goldLine} />

                      <p style={bioStyle}>{director.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
}
