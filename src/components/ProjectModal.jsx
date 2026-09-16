import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiChevronLeft,
  HiChevronRight,
  HiExternalLink,
  HiX,
} from "react-icons/hi";

function ProjectModal({ project, onClose, darkMode }) {
  const images =
    project?.images?.length > 0
      ? project.images
      : project?.image
        ? [project.image]
        : [];

  const [activeIndex, setActiveIndex] = useState(0);

  const textColor = darkMode ? "#f1f5f9" : "#212529";
  const mutedColor = darkMode ? "#94a3b8" : "#6c757d";
  const modalColor = darkMode ? "#1e293b" : "#ffffff";
  const borderColor = darkMode ? "#334155" : "#e9ecef";

  const hasMultipleImages = images.length > 1;

  const nextSlide = () => {
    if (!hasMultipleImages) return;

    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const prevSlide = () => {
    if (!hasMultipleImages) return;

    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const selectSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, onClose]);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1050,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          background: "rgba(15, 23, 42, 0.82)",
          backdropFilter: "blur(5px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          onClick={(event) => event.stopPropagation()}
          className="project-modal"
          style={{
            width: "100%",
            maxWidth: "950px",
            maxHeight: "92vh",
            overflowY: "auto",
            background: modalColor,
            borderRadius: "20px",
            border: `1px solid ${borderColor}`,
            boxShadow: "0 25px 70px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 24px",
              borderBottom: `1px solid ${borderColor}`,
            }}
          >
            <div>
              <div
                style={{
                  color: darkMode ? "#a5b4fc" : "#667eea",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.8px",
                  marginBottom: "4px",
                }}
              >
                {project.type}
              </div>

              <h4
                style={{
                  margin: 0,
                  color: textColor,
                  fontWeight: "700",
                }}
              >
                {project.name}
              </h4>
            </div>

            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Fermer"
              style={{
                width: "44px",
                height: "44px",
                minWidth: "44px",
                minHeight: "44px",
                padding: 0,
                border: "none",
                borderRadius: "50%",
                background: "rgba(15, 23, 42, 0.8)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              <HiX size={21} />
            </motion.button>
          </div>

          {/* Galerie */}
          <div style={{ padding: "24px 24px 0" }}>
            <div
              className="project-gallery"
              style={{
                position: "relative",
                height: "430px",
                overflow: "hidden",
                borderRadius: "14px",
                background: darkMode ? "#0f172a" : "#f1f3f5",
              }}
            >
              {images.length > 0 ? (
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${project.id}-${activeIndex}`}
                    src={images[activeIndex]}
                    alt={`${project.name} - capture ${activeIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </AnimatePresence>
              ) : (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: mutedColor,
                  }}
                >
                  Aucune image disponible
                </div>
              )}

              {/* Navigation */}
              {hasMultipleImages && (
                <>
                  <GalleryButton
                    direction="left"
                    onClick={prevSlide}
                    darkMode={darkMode}
                  />

                  <GalleryButton
                    direction="right"
                    onClick={nextSlide}
                    darkMode={darkMode}
                  />

                  {/* Compteur */}
                  <div
                    style={{
                      position: "absolute",
                      right: "15px",
                      bottom: "15px",
                      padding: "6px 10px",
                      borderRadius: "8px",
                      background: "rgba(15, 23, 42, 0.75)",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {activeIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Miniatures */}
            {hasMultipleImages && (
              <div
                className="gallery-thumbnails"
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "12px",
                  overflowX: "auto",
                  paddingBottom: "4px",
                }}
              >
                {images.map((image, index) => (
                  <motion.button
                    key={image}
                    type="button"
                    onClick={() => selectSlide(index)}
                    whileHover={{ y: -2 }}
                    style={{
                      flex: "0 0 80px",
                      height: "55px",
                      padding: 0,
                      overflow: "hidden",
                      borderRadius: "8px",
                      border:
                        activeIndex === index
                          ? `2px solid ${darkMode ? "#818cf8" : "#667eea"}`
                          : `1px solid ${borderColor}`,
                      background: darkMode ? "#0f172a" : "#f1f3f5",
                      cursor: "pointer",
                      opacity: activeIndex === index ? 1 : 0.6,
                      transition: "all 0.2s ease",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Miniature ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Informations */}
          <div style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
                marginBottom: "15px",
              }}
            >
              <h5
                style={{
                  color: textColor,
                  fontWeight: "700",
                  margin: 0,
                }}
              >
                À propos du projet
              </h5>

              {project.url && (
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "8px 12px",
                    borderRadius: "9px",
                    background: darkMode ? "#273449" : "#eef2ff",
                    color: darkMode ? "#a5b4fc" : "#667eea",
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                  }}
                >
                  Voir le projet
                  <HiExternalLink size={16} />
                </motion.a>
              )}
            </div>

            <p
              style={{
                color: mutedColor,
                lineHeight: "1.7",
                marginBottom: "22px",
              }}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div>
              <div
                style={{
                  color: textColor,
                  fontSize: "13px",
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Technologies
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {project.technologies?.map((technology) => (
                  <span
                    key={technology}
                    style={{
                      padding: "6px 10px",
                      borderRadius: "7px",
                      background: darkMode ? "#273449" : "#f1f3f5",
                      color: darkMode ? "#cbd5e1" : "#495057",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "0 24px 24px",
            }}
          >
            <motion.button
              type="button"
              onClick={onClose}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "9px 18px",
                border: "none",
                borderRadius: "9px",
                background: darkMode ? "#273449" : "#f1f3f5",
                color: textColor,
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Fermer
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function GalleryButton({ direction, onClick, darkMode }) {
  const Icon = direction === "left" ? HiChevronLeft : HiChevronRight;

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        [direction === "left" ? "left" : "right"]: "15px",
        transform: "translateY(-50%)",
        zIndex: 5,
      }}
    >
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.92 }}
        aria-label={
          direction === "left" ? "Image précédente" : "Image suivante"
        }
        style={{
          width: "44px",
          height: "44px",
          minWidth: "44px",
          minHeight: "44px",
          padding: 0,
          border: "none",
          borderRadius: "50%",
          background: "rgba(15, 23, 42, 0.8)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1,
          cursor: "pointer",
          boxSizing: "border-box",
        }}
      >
        <Icon
          size={24}
          strokeWidth={2}
          style={{
            display: "block",
            flexShrink: 0,
          }}
        />
      </motion.button>
    </div>
  );
}

export default ProjectModal;
