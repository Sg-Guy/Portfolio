import { motion } from "framer-motion";
import {
  SiReact,
  SiLaravel,
  SiPhp,
  SiWordpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPython,
  SiPostman,
} from "react-icons/si";
import {
  HiCode,
  HiDatabase,
  HiDeviceMobile,
  HiCog,
} from "react-icons/hi";

function Competences({ darkMode }) {
  const textColor = darkMode ? "#f1f5f9" : "#212529";
  const mutedColor = darkMode ? "#94a3b8" : "#6c757d";
  const bodyColor = darkMode ? "#cbd5e1" : "#495057";
  const cardColor = darkMode ? "#1e293b" : "#ffffff";
  const borderColor = darkMode ? "#334155" : "#e9ecef";

  const categories = [
    {
      title: "Backend",
      icon: HiCode,
      description:
        "Conception d'API, logique métier, authentification et structuration des applications.",
      skills: [
        { name: "PHP", icon: SiPhp , iconColor: "blue" },
        { name: "Laravel", icon: SiLaravel , iconColor: "red" },
        { name: "API REST", icon: HiCode , iconColor: "#667eea" },
        { name: "Sanctum", icon: HiCog , iconColor: "#667eea" },
        { name: "Policies", icon: HiCog , iconColor: "#667eea" },
        { name: "Services", icon: HiCog , iconColor: "#667eea" },
        { name: "Jobs", icon: HiCog , iconColor: "#667eea" },
        { name: "Queues", icon: HiCog , iconColor: "#667eea" },
        { name: "Events", icon: HiCog , iconColor: "#667eea" },
        { name: "Listeners", icon: HiCog , iconColor: "#667eea" },
      ],
    },
    {
      title: "Frontend",
      icon: SiReact,
      description:
        "Création d'interfaces web réactives et intégration avec des API.",
      skills: [
        { name: "React", icon: SiReact , iconColor: "aqua" },
        { name: "JavaScript", icon: SiJavascript , iconColor: "#f7d30c" },
        { name: "HTML5", icon: SiHtml5 , iconColor: "#f7620c" },
        { name: "CSS3", icon: SiCss3 , iconColor: "red" },
        { name: "Tailwind CSS", icon: SiTailwindcss , iconColor: "667eea" },
        { name: "Bootstrap", icon: HiCode , iconColor: "#667eea" },
      ],
    },
    {
      title: "Mobile",
      icon: HiDeviceMobile,
      description:
        "Développement d'applications mobiles et intégration avec des services Backend.",
      skills: [
        { name: "Flutter", icon: SiFlutter , iconColor: "" },
        { name: "Dart", icon: SiDart , iconColor: "" },
        { name: "GetX", icon: HiCog , iconColor: "" },
      ],
    },
    {
      title: "Base de Données & outils",
      icon: HiDatabase,
      description:
        "Gestion des données, versionnement et tests des API.",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql , iconColor: "#0628e9bd" },
        { name: "MySQL", icon: SiMysql , iconColor: "" },
        { name: "SQLite", icon: SiSqlite , iconColor: "" },
        { name: "Git", icon: SiGit , iconColor: "" },
        { name: "GitHub", icon: SiGithub , iconColor: "" },
        { name: "Postman", icon: SiPostman , iconColor: "" },
        { name: "Bruno", icon: HiCode , iconColor: "" },
        { name: "Insomnia", icon: HiCode , iconColor: "" },
      ],
    },
  ];

  return (
    <section
      id="competences"
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
            COMPÉTENCES
          </span>

          <h2
            style={{
              color: textColor,
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Technologies et pratiques
          </h2>

          <p
            style={{
              color: mutedColor,
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Les technologies et concepts que j'utilise pour concevoir,
            développer et faire évoluer mes applications.
          </p>
        </motion.div>

        {/* Catégories */}
        <div className="row g-4">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                className="col-md-6"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    padding: "28px",
                    background: cardColor,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "18px",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = darkMode
                      ? "0 15px 30px rgba(0, 0, 0, 0.15)"
                      : "0 12px 25px rgba(0, 0, 0, 0.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Titre */}
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "linear-gradient(135deg, #667eea, #764ba2)",
                        flexShrink: 0,
                      }}
                    >
                      <CategoryIcon size={23} color="#fff" />
                    </div>

                    <h4
                      style={{
                        color: textColor,
                        fontWeight: 700,
                        margin: 0,
                      }}
                    >
                      {category.title}
                    </h4>
                  </div>

                  <p
                    style={{
                      color: mutedColor,
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      marginBottom: "22px",
                    }}
                  >
                    {category.description}
                  </p>

                  {/* Compétences */}
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="d-flex align-items-center gap-2"
                          style={{
                            padding: "8px 11px",
                            borderRadius: "9px",
                            background: darkMode ? "#263449" : "#f8f9fa",
                            border: `1px solid ${borderColor}`,
                          }}
                        >
                          <SkillIcon
                            size={17}
                            color={skill.iconColor ? skill.iconColor : "#667eea"}
                            style={{flexShrink: 0,}}
                          />

                          <span
                            style={{
                              color: bodyColor,
                              fontSize: "0.8rem",
                              fontWeight: 500,
                            }}
                          >
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Competences;