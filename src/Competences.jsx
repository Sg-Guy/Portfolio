import App from "./App";
import SkillCard from "./SkillCard";
import {
  SiReact,
  SiLaravel,
  SiPhp,
  SiWordpress,
  SiMysql,
  SiHtml5,
  SiBootstrap,
  SiFlutter,
  SiFastapi,
  SiSqlite,
  SiOracle,
  SiGit,
  SiVscodium,
  SiPython,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiXcode,
} from "react-icons/si";

function Competences () {
     const styles = {
    body: {
      backgroundColor: App.darkMode ? "#0f172a" : "#f8f9fa",
      color: App.darkMode ? "#f1f5f9" : "#212529",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      transition: "all 0.3s ease",
    },
    navbar: {
      backgroundColor: App.darkMode
        ? "rgba(15, 23, 42, 0.95)"
        : "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      color: App.darkMode ? "#f1f5f9" : "#212529",
    },
    badge: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      fontFamily: "monospace",
    },
    heroTitle: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontWeight: "bold",
    },
    btnPrimary: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      border: "none",
      padding: "0.75rem 2rem",
      borderRadius: "50px",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    btnOutline: {
      border: `2px solid ${App.darkMode ? "#475569" : "#dee2e6"}`,
      backgroundColor: "transparent",
      color: App.darkMode ? "#f1f5f9" : "#212529",
      padding: "0.75rem 2rem",
      borderRadius: "50px",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    card: {
      backgroundColor: App.darkMode ? "#1e293b" : "#ffffff",
      color: App.darkMode ? "#f1f5f9" : "#212529",
      border: "none",
      borderRadius: "1rem",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    },
    sectionBg: {
      backgroundColor: App.darkMode ? "#1e293b" : "#ffffff",
      color: App.darkMode ? "#f1f5f9" : "#212529",
      borderRadius: "1rem",
      padding: "3rem",
    },
    iconGradient: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "1rem",
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },
    socialIcon: {
      backgroundColor: App.darkMode ? "#1e293b" : "#ffffff",
      color: App.darkMode ? "#f1f5f9" : "#212529",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    navLink: {
      color: App.darkMode ? "#f1f5f9" : "#212529",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    textMuted: {
      color: App.darkMode ? "#94a3b8" : "#6c757d",
    },
    textBody: {
      color: App.darkMode ? "#cbd5e1" : "#495057",
    },

    profil: {
      width: "200px",
      height: "200px",
      BsBorderStyle: "double",
      MdBorderColor: "white",
      borderRadius: "50%",
    },
  };
    return <div>
        {/* Langages de programmation */}
          <div className="mb-5">
            <h3
              className="h3 fw-semibold mb-4"
              
            >
              Langages de programmation
            </h3>
            <div className="row g-4">
              <SkillCard
                icon={<SiPhp size={50} color="#7c0a73" />}
                name="PHP"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiPython size={50} color="#525cf1da" />}
                name="Python"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiJavascript size={50} color="#f5e83c" />}
                name="Js"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiCplusplus size={50} color="#02569B" />}
                name="C++"
                darkMode={App.darkMode}
                styles={styles}
              />
            </div>
          </div>
          <br />
        {/* Frontend */}
          <div className="mb-5">
            <h3
              className="h3 fw-semibold mb-4"
              
            >
              Front-end
            </h3>
            <div className="row g-4">
              <SkillCard
                icon={<SiHtml5 size={50} color="#E34F26" />}
                name="HTML/CSS"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiBootstrap size={50} color="#7952B3" />}
                name="Bootstrap"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiReact size={50} color="#61DAFB" />}
                name="React.js"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiFlutter size={50} color="#02569B" />}
                name="Flutter"
                darkMode={App.darkMode}
                styles={styles}
              />
            </div>
          </div>

          {/* Backend */}
          <div className="mb-5">
            <h3
              className="h3 fw-semibold mb-4"
            >
              Back-end
            </h3>
            <div className="row g-4">
              <SkillCard
                icon={<SiPhp size={50} color="#777BB4" />}
                name="PHP"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiLaravel size={50} color="#FF2D20" />}
                name="Laravel"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiFastapi size={50} color="#009688" />}
                name="FastAPI"
                darkMode={App.darkMode}
                styles={styles}
              />
            </div>
          </div>

          {/* Database */}
          <div className="mb-5">
            <h3
              className="h3 fw-semibold mb-4"
            >
              Base de données
            </h3>
            <div className="row g-4">
              <SkillCard
                icon={<SiMysql size={50} color="#4479A1" />}
                name="MySQL"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiSqlite size={50} color="#003B57" />}
                name="SQLite"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiOracle size={50} color="#F80000" />}
                name="Oracle"
                darkMode={App.darkMode}
                styles={styles}
              />
            </div>
          </div>

          {/* CMS */}
          <div>
            <h3
              className="h3 fw-semibold mb-4"
            >
              CMS
            </h3>
            <div className="row g-4">
              <SkillCard
                icon={<SiWordpress size={50} color="#21759B" />}
                name="WordPress"
                darkMode={App.darkMode}
                styles={styles}
              />
            </div>
          </div>
<br />

          {/* Versionning */}
          <div>
            <h3
              className="h3 fw-semibold mb-4"
            >
              Outils
            </h3>
            <div className="row g-4">
              <SkillCard
                icon={<SiGit size={50} color="#ec6149" />}
                name="Git"
                darkMode={App.darkMode}
                styles={styles}
              />
              <SkillCard
                icon={<SiXcode size={50} color="#ec6149" />}
                name="Git"
                darkMode={App.darkMode}
                styles={styles}
              />
            </div>
          </div>
    </div>
} ;
export default Competences ;