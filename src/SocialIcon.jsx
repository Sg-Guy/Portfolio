import { useState } from "react";

function SocialIcon({ icon, styles, url }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.socialIcon,
        transform: isHovered ? "scale(1.3)" : "scale(1)",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
    </a>
  );
}
export default SocialIcon;