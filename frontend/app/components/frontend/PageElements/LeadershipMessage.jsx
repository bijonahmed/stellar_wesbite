import CTASection from "./CTASection";

const cardStyle = {
  position: "relative",
  background: "#faf9f6",
  borderRadius: "16px",
  padding: "clamp(24px, 5vw, 64px)",
  border: "1px solid rgba(201,162,39,0.15)",
  boxShadow: "0 4px 40px rgba(6,20,36,0.04)",
};

const quoteMarkStyle = {
  position: "absolute",
  top: "24px",
  left: "clamp(24px, 4vw, 56px)",
  fontSize: "clamp(70px, 8vw, 120px)",
  color: "#C9A227",
  opacity: 0.08,
  fontFamily: "Georgia, serif",
  lineHeight: 1,
  userSelect: "none",
};

const paragraphStyle = {
  color: "#1a1a1a",
  fontSize: "clamp(15px, 1.4vw, 18px)",
  lineHeight: 2,
  textAlign: "justify",
  marginBottom: "28px",
};

const signatureBoxStyle = {
  marginTop: "clamp(24px, 4vw, 48px)",
  paddingTop: "24px",
  borderTop: "1px solid rgba(201,162,39,0.2)",
};

const nameStyle = {
  color: "#C9A227",
  fontSize: "clamp(18px, 1.8vw, 22px)",
  fontWeight: 600,
  marginBottom: "4px",
};

const designationStyle = {
  color: "#555",
  fontSize: "clamp(13px, 1.2vw, 15px)",
  letterSpacing: "0.5px",
};

function SingleMessage({ name, designation, paragraphs }) {
  return (
    <div style={cardStyle}>
      <div style={quoteMarkStyle}>&ldquo;</div>
      <div style={{ position: "relative", zIndex: 1 }}>
        {paragraphs.map((text, i) => (
          <p
            key={i}
            style={{
              ...paragraphStyle,
              marginBottom: i === paragraphs.length - 1 ? "0" : "28px",
            }}
          >
            {text}
          </p>
        ))}
        {name && (
          <div style={signatureBoxStyle}>
            <p style={nameStyle}>{name}</p>
            <p style={designationStyle}>{designation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function DirectorCard({ director, isLast }) {
  return (
    <div style={{ ...cardStyle, marginBottom: isLast ? "0" : "32px" }}>
      <div style={quoteMarkStyle}>&ldquo;</div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              color: "#C9A227",
              fontSize: "clamp(22px, 2.5vw, 30px)",
              fontWeight: 700,
              marginBottom: "8px",
            }}
          >
            {director.name}
          </h2>
          <p
            style={{
              color: "#555",
              fontSize: "clamp(13px, 1.2vw, 15px)",
              marginBottom: "4px",
              fontStyle: "italic",
            }}
          >
            {director.degree}
          </p>
          <p
            style={{
              color: "#1a1a1a",
              fontSize: "clamp(14px, 1.3vw, 16px)",
              fontWeight: 600,
              marginBottom: "4px",
            }}
          >
            {director.title}
          </p>
          <p
            style={{
              color: "#888",
              fontSize: "clamp(12px, 1.1vw, 14px)",
            }}
          >
            Work Experience: {director.experience}
          </p>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(201,162,39,0.2)",
            paddingTop: "24px",
          }}
        >
          <p
            style={{
              ...paragraphStyle,
              marginBottom: "0",
            }}
          >
            {director.bio}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LeadershipMessage({ data }) {
  const isDirectors = !!data.items;

  return (
    <section style={{ padding: "clamp(60px, 2vw, 100px) 0", background: "#fff" }}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {isDirectors
            ? data.items.map((director, index) => (
                <div key={index} className="col-lg-10 col-md-11">
                  <DirectorCard
                    director={director}
                    isLast={index === data.items.length - 1}
                  />
                </div>
              ))
            : (
                <div className="col-lg-9 col-md-11">
                  <SingleMessage
                    name={data.name}
                    designation={data.designation}
                    paragraphs={data.paragraphs}
                  />
                </div>
              )
          }
        </div>
      </div>

      <CTASection
        title={data.cta.title}
        subtitle={data.cta.subtitle}
        primaryBtn={data.cta.primaryBtn}
        secondaryBtn={data.cta.secondaryBtn}
      />
    </section>
  );
}
