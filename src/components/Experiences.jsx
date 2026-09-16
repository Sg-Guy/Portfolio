import { motion } from "framer-motion";
import { HiBriefcase } from "react-icons/hi";

function Experiences({ darkMode }) {
  const textColor = darkMode ? "#f1f5f9" : "#212529";
  const mutedColor = darkMode ? "#94a3b8" : "#6c757d";
  const bodyColor = darkMode ? "#cbd5e1" : "#495057";
  const cardColor = darkMode ? "#1e293b" : "#ffffff";
  const borderColor = darkMode ? "#334155" : "#e9ecef";

  const experiences = [
    {
      period: "20 avril 2026 — 24 juillet 2026",
      company: "Ma-Info",
      role: "Stagiaire en développement Backend",
      description:
        "Stage en développement Backend au sein de Ma-info. Ma mission principale a été de générer des données massives allant jusqu'à 1 million pour alimenter la base de données d'un ERP en évolution. Pendant le deroulement de stage , j'ai appris l'importance des travaux d'équipe et à mieux structurer mes codes pour permettre une meilleure lisibilité et rendre facile la maintenance.",
      technologies: ["PHP", "Laravel", "API REST", "PostgreSQL"],
    },
    {
      period: "Juillet 2025 — août 2025",
      company: "Diha's",
      role: "Stagiaire en développement Web",
      description:
        "Stage en développement web orienté WordPress, avec participation à la réalisation de sites web de vente de livres et de formations. Ce stage ma particulièrement permis de prendre connaissance du fonctionnement d'un environnement professionnel.",
      technologies: ["WordPress", "PHP", "HTML", "CSS"],
    },
  ];

  return (
    <section
      id="experiences"
      style={{
        padding: "30px 0",
        background: darkMode ? "#0f172a" : "#f8f9fa",
      }}
    >
      <div className="container">
        {/* En-tête */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "7px 16px",
              borderRadius: "50px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              fontSize: "0.8rem",
              fontWeight: 600,
              fontFamily: "monospace",
              marginBottom: "15px",
            }}
          >
            EXPÉRIENCES
          </span>

          <h2
            style={{
              color: textColor,
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Mes expériences professionnelles
          </h2>

          <p
            style={{
              color: mutedColor,
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Les expériences qui m'ont permis de confronter mes connaissances à
            des projets et environnements professionnels.
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Ligne centrale */}
          <div
            className="d-none d-md-block"
            style={{
              position: "absolute",
              top: "12px",
              bottom: "12px",
              left: "24px",
              width: "2px",
              background: darkMode ? "#334155" : "#dee2e6",
            }}
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              className="d-flex gap-4 mb-5"
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              {/* Point de timeline */}
              <div
                className="d-none d-md-flex justify-content-center align-items-center flex-shrink-0"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  background: cardColor,
                  border: "2px solid #667eea",
                }}
              >
                <HiBriefcase
                  size={21}
                  style={{
                    color: "#667eea",
                  }}
                />
              </div>

              {/* Contenu */}
              <div
                style={{
                  flex: 1,
                  background: cardColor,
                  border: `1px solid ${borderColor}`,
                  borderRadius: "16px",
                  padding: "25px 28px",
                  boxShadow: darkMode
                    ? "0 10px 25px rgba(0, 0, 0, 0.10)"
                    : "0 8px 25px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-2 mb-3">
                  <div>
                    <h4
                      style={{
                        color: textColor,
                        fontWeight: 700,
                        marginBottom: "5px",
                      }}
                    >
                      {experience.company}
                    </h4>

                    <p
                      style={{
                        color: "#667eea",
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {experience.role}
                    </p>
                  </div>

                  <span
                    style={{
                      display: "inline-block",
                      width: "fit-content",
                      padding: "6px 11px",
                      borderRadius: "8px",
                      background: darkMode ? "#293548" : "#f1f3f5",
                      color: mutedColor,
                      fontSize: "0.78rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {experience.period}
                  </span>
                </div>

                <p
                  style={{
                    color: bodyColor,
                    lineHeight: 1.7,
                    marginBottom: "18px",
                  }}
                >
                  {experience.description}
                </p>

                <div className="d-flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      style={{
                        padding: "5px 10px",
                        borderRadius: "6px",
                        border: `1px solid ${borderColor}`,
                        color: mutedColor,
                        fontSize: "0.75rem",
                        fontFamily: "monospace",
                      }}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;