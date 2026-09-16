import { motion } from "framer-motion";
import { HiCode, HiOutlineAcademicCap, HiOutlineLightBulb } from "react-icons/hi";
import identGuy from "../assets/ident_guy.jpeg";

function About({ darkMode }) {
  const textColor = darkMode ? "#f1f5f9" : "#212529";
  const mutedColor = darkMode ? "#94a3b8" : "#6c757d";
  const bodyColor = darkMode ? "#cbd5e1" : "#495057";
  const cardColor = darkMode ? "#1e293b" : "#ffffff";
  const borderColor = darkMode ? "#334155" : "#e9ecef";

  return (
    <section
      id="about"
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
            À PROPOS
          </span>

          <h2
            style={{
              color: textColor,
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Mon parcours et ma façon d'aborder le développement
          </h2>

          <p
            style={{
              color: mutedColor,
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Un profil Full Stack avec une orientation particulière vers le
            Backend.
          </p>
        </motion.div>

        {/* Contenu principal */}
        <div className="row align-items-center g-5">
          {/* Visuel */}
          <motion.div
            className="col-lg-4 text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "7px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
              }}
            >
              <img
                src={identGuy}
                alt="Guillaume SAGBO"
                style={{
                  width: "230px",
                  height: "230px",
                  objectFit: "conatain",
                  borderRadius: "50%",
                  border: `5px solid ${darkMode ? "#0f172a" : "#f8f9fa"}`,
                  display: "block",
                }}
              />
            </div>

            <div
              className="d-flex justify-content-center flex-wrap gap-2 mt-4"
            >
              <span
                style={{
                  padding: "7px 13px",
                  border: `1px solid ${borderColor}`,
                  borderRadius: "50px",
                  color: bodyColor,
                  fontSize: "0.82rem",
                }}
              >
                Full Stack
              </span>

              <span
                style={{
                  padding: "7px 13px",
                  border: `1px solid ${borderColor}`,
                  borderRadius: "50px",
                  color: bodyColor,
                  fontSize: "0.82rem",
                }}
              >
                Backend
              </span>

              <span
                style={{
                  padding: "7px 13px",
                  border: `1px solid ${borderColor}`,
                  borderRadius: "50px",
                  color: bodyColor,
                  fontSize: "0.82rem",
                }}
              >
                Génie Logiciel
              </span>
            </div>
          </motion.div>

          {/* Présentation */}
          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                background: cardColor,
                border: `1px solid ${borderColor}`,
                borderRadius: "20px",
                padding: "32px",
                boxShadow: darkMode
                  ? "0 15px 35px rgba(0, 0, 0, 0.12)"
                  : "0 10px 30px rgba(0, 0, 0, 0.05)",
              }}
            >
              <p
                style={{
                  color: bodyColor,
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Étudiant en dernière année de Licence en Génie Logiciel et développeur Full Stack, je
                m'intéresse particulièrement au développement Backend et à la
                conception d'applications web structurées et fiables.
              </p>

              <p
                style={{
                  color: bodyColor,
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                Je travaille principalement avec{" "}
                <strong style={{ color: textColor }}>PHP et Laravel</strong>{" "}
                pour développer des API REST, mettre en place des systèmes
                d'authentification et d'autorisation, gérer les données et
                organiser la logique métier d'une application.
              </p>

              <p
                style={{
                  color: bodyColor,
                  lineHeight: 1.8,
                  marginBottom: "28px",
                }}
              >
                Je possède également des compétences en développement
                frontend avec <strong style={{ color: textColor }}>React</strong>{" "}
                et en développement mobile avec{" "}
                <strong style={{ color: textColor }}>Flutter</strong>, ce qui
                me permet d'intervenir sur différentes parties d'un projet.
              </p>

              {/* Domaines d'intérêt */}
              <div className="row g-3">
                <div className="col-md-4">
                  <div
                    style={{
                      height: "100%",
                      padding: "18px",
                      borderRadius: "14px",
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    <HiCode
                      size={24}
                      style={{
                        color: "#667eea",
                        marginBottom: "10px",
                      }}
                    />

                    <h6
                      style={{
                        color: textColor,
                        fontWeight: 600,
                        marginBottom: "6px",
                      }}
                    >
                      Backend
                    </h6>

                    <small style={{ color: mutedColor, lineHeight: 1.5 }}>
                      API, logique métier, authentification et données.
                    </small>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    style={{
                      height: "100%",
                      padding: "18px",
                      borderRadius: "14px",
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    <HiOutlineAcademicCap
                      size={24}
                      style={{
                        color: "#667eea",
                        marginBottom: "10px",
                      }}
                    />

                    <h6
                      style={{
                        color: textColor,
                        fontWeight: 600,
                        marginBottom: "6px",
                      }}
                    >
                      Progression
                    </h6>

                    <small style={{ color: mutedColor, lineHeight: 1.5 }}>
                      Approfondissement de l'architecture et de la qualité
                      logicielle.
                    </small>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    style={{
                      height: "100%",
                      padding: "18px",
                      borderRadius: "14px",
                      border: `1px solid ${borderColor}`,
                    }}
                  >
                    <HiOutlineLightBulb
                      size={24}
                      style={{
                        color: "#667eea",
                        marginBottom: "10px",
                      }}
                    />

                    <h6
                      style={{
                        color: textColor,
                        fontWeight: 600,
                        marginBottom: "6px",
                      }}
                    >
                      Problèmes concrets
                    </h6>

                    <small style={{ color: mutedColor, lineHeight: 1.5 }}>
                      Concevoir des solutions utiles, structurées et
                      maintenables.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Objectif professionnel */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              padding: "28px 32px",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.10), rgba(118, 75, 162, 0.10))",
              border: `1px solid ${darkMode ? "rgba(102, 126, 234, 0.25)" : "rgba(102, 126, 234, 0.18)"}`,
            }}
          >
            <div className="row align-items-center g-3">
              <div className="col-lg-3">
                <span
                  style={{
                    color: "#667eea",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    fontFamily: "monospace",
                    letterSpacing: "0.08em",
                  }}
                >
                  OBJECTIF PROFESSIONNEL
                </span>
              </div>

              <div className="col-lg-9">
                <p
                  style={{
                    color: bodyColor,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Évoluer en tant que développeur Full Stack avec une forte
                  orientation Backend, participer à des projets concrets et
                  approfondir progressivement mes compétences en architecture
                  et en conception logicielle.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;