import { motion } from "framer-motion"; // Remplacer useState par motion

// Project Card Component
function ProjectCard({
  url,
  image,
  styles,
  name,
  description,
  technologies,
  onClick,
}) {
  return (
    // Animation d'entrée pour la carte (fade in + slide up)
    <motion.div 
      className="col-md-6 col-lg-4" 
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="card h-100"
        style={{
          ...styles.card,
          overflow: "hidden",
          cursor: "pointer",
        }}
        // Animation au survol (remplace le isHovered manuel)
        whileHover={{ 
          y: -10, 
          scale: 1.02,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)" 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <a href={url} target="_blank" rel="noreferrer" style={{ display: 'block', overflow: 'hidden' }}>
          <motion.div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "200px",
              width: "100%",
              height: "200px",
              backgroundImage: `url(${image})`,
            }}
            // Effet de zoom sur l'image au survol de la carte
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          ></motion.div>
        </a>

        <div className="card-body p-4">
          <h5 className="card-title fw-bold mb-3">
            {name}
          </h5>
          <p
            className="card-text"
            style={{ opacity: '70%' }}
          >
            {description}
          </p>

          <MapTech elements={technologies} />
        </div>
      </motion.div>
    </motion.div>
  );
}

function MapTech({ elements }) {
  return (
    <div className="d-flex flex-wrap gap-2"> {/* flex-wrap pour éviter les débordements */}
      {elements.map((element, index) => (
        <motion.span
          className="badge text-bg-light text-center rounded-pill opacity-75"
          key={index}
          style={{ padding: "5px 12px" }}
          // Petit effet d'apparition pour chaque badge
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {element}
        </motion.span>
      ))}
    </div>
  );
}

export default ProjectCard;