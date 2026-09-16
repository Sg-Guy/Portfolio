import { motion } from "framer-motion";

function ProjectCard({
  url,
  image,
  name,
  description,
  technologies = [],
  onClick,
  darkMode,
}) {
  const textColor = darkMode ? "#f1f5f9" : "#212529";
  const mutedColor = darkMode ? "#94a3b8" : "#6c757d";
  const cardColor = darkMode ? "#1e293b" : "#ffffff";
  const borderColor = darkMode ? "#334155" : "#e9ecef";

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.article
      onClick={handleClick}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      style={{
        height: "100%",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      <div
        style={{
          height: "100%",
          overflow: "hidden",
          background: cardColor,
          border: `1px solid ${borderColor}`,
          borderRadius: "18px",
          boxShadow: darkMode
            ? "0 10px 25px rgba(0, 0, 0, 0.12)"
            : "0 8px 25px rgba(0, 0, 0, 0.05)",
          transition: "box-shadow 0.25s ease",
        }}
      >
        {/* Image */}
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            style={{
              display: "block",
              overflow: "hidden",
            }}
          >
            <ProjectImage image={image} name={name} />
          </a>
        ) : (
          <ProjectImage image={image} name={name} />
        )}

        {/* Contenu */}
        <div
          style={{
            padding: "24px",
          }}
        >
          <h5
            style={{
              color: textColor,
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            {name}
          </h5>

          <p
            style={{
              color: mutedColor,
              lineHeight: 1.7,
              fontSize: "0.9rem",
              marginBottom: "20px",
            }}
          >
            {description}
          </p>

          <MapTech
            elements={technologies}
            darkMode={darkMode}
          />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectImage({ image, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      style={{
        height: "210px",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      role="img"
      aria-label={`Aperçu du projet ${name}`}
    />
  );
}

function MapTech({ elements, darkMode }) {
  const textColor = darkMode ? "#cbd5e1" : "#495057";
  const backgroundColor = darkMode ? "#263449" : "#f1f3f5";
  const borderColor = darkMode ? "#334155" : "#e9ecef";

  return (
    <div className="d-flex flex-wrap gap-2">
      {elements.map((element) => (
        <motion.span
          key={element}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          style={{
            padding: "6px 11px",
            borderRadius: "50px",
            background: backgroundColor,
            border: `1px solid ${borderColor}`,
            color: textColor,
            fontSize: "0.75rem",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}
        >
          {element}
        </motion.span>
      ))}
    </div>
  );
}

export default ProjectCard;