export default function TeamCard({ name, role, description, initials }) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          background: "linear-gradient(135deg, #061424, #0B1F33)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#C9A227",
          }}
        />
        <span
          className="text-heading-2"
          style={{
            color: "#C9A227",
            opacity: 0.8,
          }}
        >
          {initials}
        </span>
      </div>
      <h3
        className="text-heading-4"
        style={{
          color: "#061424",
          marginBottom: "4px",
        }}
      >
        {name}
      </h3>
      <p className="text-body-excerpt color-gray-900" style={{ textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
        {role}
      </p>
      {description && (
        <p className="text-body-text color-gray-600" style={{ margin: 0 }}>
          {description}
        </p>
      )}
    </div>
  );
}
