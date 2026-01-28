import { useState } from "react";
import DarkMode from "./DarkMode";

// Project Card Component
function ProjectCard({
  url,
  image,
  styles,
  name,
  description,
  technologies,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="card h-100"
        style={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {}),
          overflow: "hidden",
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href={url }  
          target="_blank"
        >
          <div
          style={{
            backgroundSize: "cover", // L'image couvre toute la div
            backgroundPosition: "center", // Centrage de l'image
            backgroundRepeat: "no-repeat", // Pas de répétition
            minHeight: "200px", // Une hauteur est nécessaire pour voir la div
            width: "100%",
            height: "200px",
            backgroundImage: `url(${image})`,
            //background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        ></div>
        </a>
        <div className="card-body p-4">
          <h5
            className="card-title fw-bold mb-3"
            //style={{ color: "#ffffff" }}
          >
            {name}
          </h5>
          <p
            className="card-text"
            //style={DarkMode.darkMode ? { color: "#94a3b8" } : { color: "#6c757d" }}
            style={{opacity: '70%'}}
          >
            {description}
          </p>

          <MapTech elements={technologies} />
        </div>
      </div>
    </div>
  );
}

function MapTech({ elements }) {
  return (
    <div className="d-flex flex-row gap-3 ">
      {elements.map((element, index) => (
        <span
          className="badge text-bg-light text-center rounded-pill opacity-75"
          key={index}
          style={{ height: "20px" }}
        >
          {element}
        </span>
      ))}
    </div>
  );
}

export default ProjectCard