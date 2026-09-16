import { useState } from "react";

// Skill Card Component
function SkillCard({ icon, name, darkMode, styles }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div
        className="card h-100 text-center"
        style={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {}),
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
          <div className="mb-3">{icon}</div>
          <h6
            className="mb-0 fw-semibold"
            style={{ color: darkMode ? "#f1f5f9" : "#212529" }}
          >
            {name}
          </h6>
        </div>
      </div>
    </div>
  );
}
export default SkillCard;