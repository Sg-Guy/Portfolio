import { motion } from "framer-motion";
import { BiSolidGraduation } from "react-icons/bi";

function Formations({ darkMode }) {
  const formations = [
    {
      period: "2023 — 2026",
      title: "Licence en Informatique",
      school: "UAC — IFRI",
      detail: "Option Génie Logiciel",
      description:
        "Formation orientée vers le développement logiciel, la conception d'applications, les bases de données et l'ingénierie logicielle.",
      featured: true,
    },
    {
      period: "2023 — 2024",
      title: "Baccalauréat Série C",
      school: "Candidature libre",
      detail: "Mention Assez-Bien",
      description:
        "Formation scientifique axée notamment sur les mathématiques et les sciences physiques.",
      featured: false,
    },
    {
      period: "2022 — 2023",
      title: "Baccalauréat Série D",
      school: "CEG YOKO",
      detail: "Mention Bien",
      description:
        "Formation secondaire générale avec une orientation scientifique.",
      featured: false,
    },
  ];

  const textColor = darkMode ? "#f1f5f9" : "#212529";
  const mutedColor = darkMode ? "#94a3b8" : "#6c757d";
  const cardColor = darkMode ? "#1e293b" : "#ffffff";
  const borderColor = darkMode ? "#334155" : "#e9ecef";

  return (
    <section
      id="formation"
      style={{
        padding: "30px 0",
        background: darkMode ? "#0f172a" : "#f8f9fa",
      }}
    >
      <div className="container">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "7px 14px",
              borderRadius: "50px",
              background: darkMode ? "#1e293b" : "#eef2ff",
              color: darkMode ? "#a5b4fc" : "#667eea",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
              marginBottom: "14px",
            }}
          >
            FORMATION
          </span>

          <h2
            style={{
              color: textColor,
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Mon parcours académique
          </h2>

          <p
            style={{
              color: mutedColor,
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Un parcours progressivement orienté vers l'informatique et le
            développement logiciel.
          </p>
        </motion.div>

        {/* Formations */}
        <div className="formation-grid">
          {formations.map((formation, index) => (
            <motion.article
              key={formation.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                minHeight: "300px",
                padding: "28px",
                background: cardColor,
                border: `1px solid ${
                  formation.featured
                    ? darkMode
                      ? "#6366f1"
                      : "#667eea"
                    : borderColor
                }`,
                borderRadius: "18px",
                boxShadow: formation.featured
                  ? darkMode
                    ? "0 15px 40px rgba(99, 102, 241, 0.12)"
                    : "0 15px 40px rgba(102, 126, 234, 0.12)"
                  : darkMode
                  ? "0 10px 30px rgba(0, 0, 0, 0.12)"
                  : "0 10px 30px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Badge période */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "28px",
                }}
              >
                <span
                  style={{
                    color: darkMode ? "#a5b4fc" : "#667eea",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  {formation.period}
                </span>

                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                    background: darkMode ? "#273449" : "#f1f3ff",
                    color: darkMode ? "#a5b4fc" : "#667eea",
                  }}
                >
                  <BiSolidGraduation size={22} />
                </div>
              </div>

              {/* Contenu */}
              <div>
                <h4
                  style={{
                    color: textColor,
                    fontWeight: "700",
                    marginBottom: "10px",
                    lineHeight: "1.3",
                  }}
                >
                  {formation.title}
                </h4>

                <div
                  style={{
                    color: darkMode ? "#cbd5e1" : "#495057",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  {formation.school}
                </div>

                <div
                  style={{
                    color: darkMode ? "#a5b4fc" : "#667eea",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "18px",
                  }}
                >
                  {formation.detail}
                </div>

                <p
                  style={{
                    color: mutedColor,
                    fontSize: "14px",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {formation.description}
                </p>
              </div>

              {/* Indicateur discret */}
              {formation.featured && (
                <div
                  style={{
                    position: "absolute",
                    left: "28px",
                    bottom: "5px",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.8px",
                    color: darkMode ? "#818cf8" : "#667eea",
                  }}
                >
                  PARCOURS ACTUEL
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>

      <style>
        {`
          .formation-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 22px;
          }

          @media (max-width: 991px) {
            .formation-grid {
              grid-template-columns: repeat(2, 1fr);
            }

            .formation-grid article:first-child {
              grid-column: 1 / -1;
            }
          }

          @media (max-width: 767px) {
            .formation-grid {
              grid-template-columns: 1fr;
            }

            .formation-grid article:first-child {
              grid-column: auto;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Formations;