import { useState } from "react";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import { HiMail, HiPhone, HiMoon, HiSun } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import img from "./assets/img.jpg";
import step from "./assets/step.png";
import campus from "./assets/campus.png";
import tech from "./assets/tech.png";
import zone from "./assets/zone.png";
import ident_guy from "./assets/ident_guy.jpg";
import SocialIcon from "./SocialIcon";
import SkillCard from "./SkillCard";
import Formations from "./Formations";
import Competences from "./Competences";
import ProjectCard from "./ProjectCard";
import scrollToSection from "./ScrollToSection";
import AntiInspect from "./AntiInspect";

const infoProjet = {
  projet1: {
    name: "TechZone",
    image: zone,
    description:
      "TechZone est une application mobile réalisé dans le cadre du cours de développement d'application mobile... ",
    technologies: ["Dart", "Flutter", "Laravel", "MySql"],

    details:
      "TechZone est une application mobile réalisé dans le cadre du cours de développement d'application mobile. Il s'agit d'une application de vente d'objet technologique en ligne.",
  },
  projet2: {
    name: "CampusConnect",
    image: campus,
    description:
      "TechZone est une application mobile réalisé dans le cadre du cours de développement d'application web . Il s'agit d'une application de vente d'objet technologique en ligne.",
    technologies: ["PHP", "Laravel", "MySql"],
  },
  projet3: {
    name: "StepByStep",
    image: step,
    description:
      "TechZone est une application mobile réalisé dans le cadre du cours de développement d'application mobile. Il s'agit d'une application de vente d'objet technologique en ligne.",
    technologies: ["PHP", "Laravel", "MySql"],
  },
};

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);

  const styles = {
    body: {
      backgroundColor: darkMode ? "#0f172a" : "#f8f9fa",
      color: darkMode ? "#f1f5f9" : "#212529",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
      overflowX: "hidden",
      transition: "all 0.3s ease",
    },
    navbar: {
      backgroundColor: darkMode
        ? "rgba(15, 23, 42, 0.95)"
        : "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      color: darkMode ? "#f1f5f9" : "#212529",
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
      border: `2px solid ${darkMode ? "#475569" : "#dee2e6"}`,
      backgroundColor: "transparent",
      color: darkMode ? "#f1f5f9" : "#212529",
      padding: "0.75rem 2rem",
      borderRadius: "50px",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    card: {
      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
      color: darkMode ? "#f1f5f9" : "#212529",
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
      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
      color: darkMode ? "#f1f5f9" : "#212529",
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
      backgroundColor: darkMode ? "#1e293b" : "#ffffff",
      color: darkMode ? "#f1f5f9" : "#212529",
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
      color: darkMode ? "#f1f5f9" : "#212529",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    textMuted: {
      color: darkMode ? "#94a3b8" : "#6c757d",
    },
    textBody: {
      color: darkMode ? "#cbd5e1" : "#495057",
    },

    profil: {
      width: "200px",
      height: "200px",
      BsBorderStyle: "double",
      MdBorderColor: "white",
      borderRadius: "50%",
    },
  };
  return (
    <div style={styles.body}>
      <AntiInspect />
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top" style={styles.navbar}>
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo / Badge */}
          <span style={styles.badge}>SGZ-Portfolio 1.0</span>

          <div className="d-flex align-items-center order-lg-3">
            {/* Bouton Dark Mode : Toujours visible */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="btn btn-link p-2 me-2"
              style={{
                color: darkMode ? "#f1f5f9" : "#212529",
                fontSize: "1.5rem",
                textDecoration: "none",
              }}
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </button>

            {/* Bouton Hamburger Mobile */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              onClick={() => setOpen(!open)}
              style={{ color: darkMode ? "white" : "black" }}
            >
              <span style={{ fontSize: "1.5rem" }}>{open ? "✕" : "☰"}</span>
            </button>
          </div>

          {/* Liens du menu (cachés sur mobile dans le collapse) */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={styles.navLink}
                  onClick={() => scrollToSection("accueil")}
                >
                  Accueil
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={styles.navLink}
                  onClick={() => scrollToSection("apropos")}
                >
                  À propos
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={styles.navLink}
                  onClick={() => scrollToSection("formations")}
                >
                  Formations
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={styles.navLink}
                  onClick={() => scrollToSection("competences")}
                >
                  Compétences
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={styles.navLink}
                  onClick={() => scrollToSection("projets")}
                >
                  Projets
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  style={styles.navLink}
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        id="accueil"
        className="min-vh-100 d-flex align-items-center"
        style={{ paddingTop: "80px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <img src={ident_guy} alt="imgr" style={styles.profil} />
              <h6 className="display-4 mb-3" style={styles.heroTitle}>
                Guillaume SAGBO
              </h6>
              <p className="fs-5 mb-3" style={styles.textMuted}>
                Développeur Full Stack | Junior
              </p>
              <div className="d-flex justify-content-center gap-4">
                <SocialIcon
                  icon={<SiFacebook size={30} />}
                  styles={styles}
                  url={"https://www.facebook.com/SG.Zathianos"}
                />
                <div
                  onClick={() =>
                    window.open(
                      "https://github.com/Sg-Guy/",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <SocialIcon
                    icon={<SiGithub size={30} />}
                    styles={styles}
                    url={"https://github.com/Sg-Guy/"}
                  />
                </div>
                <SocialIcon
                  icon={<SiLinkedin size={30} />}
                  styles={styles}
                  url={"https://www.linkedin.com/in/guillaume-sagbo-1aaa502a5"}
                />
              </div>
              <br />
              <p
                className="lead mb-5"
                style={{
                  maxWidth: "700px",
                  margin: "0 auto",
                  ...styles.textBody,
                }}
              >
                Actuellement étudiant en Génie Logiciel à IFRI. Passionné par le
                développement web et mobile, je construis petit à petit mon
                univers numérique.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button
                  className="btn btn-lg text-white"
                  style={styles.btnPrimary}
                  onClick={() => scrollToSection("contact")}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Me contacter
                </button>
                <button
                  className="btn btn-lg"
                  style={styles.btnOutline}
                  onClick={() => scrollToSection("projets")}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = darkMode
                      ? "#334155"
                      : "#f8f9fa";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  Voir mes réalisations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div style={styles.sectionBg}>
                <h2
                  className="display-4 fw-bold mb-4 text-center"
                  style={{ color: darkMode ? "#f1f5f9" : "#212529" }}
                >
                  À propos
                </h2>
                <p className="lead" style={styles.textBody}>
                  Actuellement en parcours de Génie Logiciel, j'ai choisi de
                  mettre mes compétences au service de la création de solutions
                  web modernes, intuitives et accessibles. Curieux, je conçois
                  des sites vitrines, des applications web et des interfaces
                  utilisateurs adaptées aux besoins réels. Mon objectif est
                  simple : transformer vos idées en expériences numériques de
                  qualité. Je maîtrise les bases du HTML, CSS, JavaScript, PHP,
                  MySQL, ainsi que des frameworks et outils modernes comme
                  React, Laravel et WordPress. Pour moi, chaque projet est une
                  opportunité d'apprendre, d'innover et de créer de la valeur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section id="formations" className="py-5">
        <div className="container">
          <h2
            className="display-4 fw-bold mb-4 text-center"
            style={{ color: darkMode ? "#f1f5f9" : "#212529" }}
          >
            Formations
          </h2>
          <Formations />
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-5">
        <div className="container">
          <h2
            className="display-4 fw-bold mb-5 text-center"
            style={{ color: darkMode ? "#f1f5f9" : "#212529" }}
          >
            Compétences
          </h2>
          <Competences />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-5">
        <div className="container">
          <div style={styles.sectionBg}>
            <h2
              className="display-4 fw-bold mb-5 text-center"
              style={{ color: darkMode ? "#f1f5f9" : "#212529" }}
            >
              Mes Réalisations
            </h2>
            <div className="row g-4">
              <ProjectCard
                darkMode={darkMode}
                image={infoProjet.projet1.image}
                styles={styles}
                name={infoProjet.projet1.name}
                description={infoProjet.projet1.description}
                technologies={infoProjet.projet1.technologies}
              />
              <ProjectCard
                darkMode={darkMode}
                image={infoProjet.projet2.image}
                name={infoProjet.projet2.name}
                description={infoProjet.projet2.description}
                technologies={infoProjet.projet2.technologies}
                styles={styles}
              />
              <ProjectCard
                darkMode={darkMode}
                image={infoProjet.projet3.image}
                styles={styles}
                name={infoProjet.projet3.name}
                description={infoProjet.projet3.description}
                technologies={infoProjet.projet3.technologies}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2
            className="display-4 fw-bold mb-5 text-center"
            style={{ color: darkMode ? "#f1f5f9" : "#212529" }}
          >
            Contact
          </h2>
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card h-100" style={styles.card}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center">
                    <div style={styles.iconGradient} className="me-3">
                      <HiMail size={30} color="#fff" />
                    </div>
                    <div>
                      <p className="mb-1" style={styles.textMuted}>
                        Email
                      </p>
                      <h5
                        className="mb-0"
                        style={{ color: darkMode ? "#f1f5f9" : "#212529" }}
                      >
                        gsagbo541@gmail.com
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100" style={styles.card}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center">
                    <div style={styles.iconGradient} className="me-3">
                      <HiPhone size={30} color="#fff" />
                    </div>
                    <div>
                      <p className="mb-1" style={styles.textMuted}>
                        Téléphone
                      </p>
                      <h5
                        className="mb-0"
                        style={{ color: darkMode ? "#f1f5f9" : "#212529" }}
                      >
                        +229 01 51 42 63 20
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-4">
            <SocialIcon
              icon={<SiFacebook size={24} />}
              styles={styles}
              url={"https://www.facebook.com/SG.Zathianos"}
            />

            <div
              onClick={() =>
                window.open(
                  "https://github.com/Sg-Guy/",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              style={{ cursor: "pointer" }}
            >
              <SocialIcon
                icon={<SiGithub size={24} />}
                styles={styles}
                url={"https://github.com/Sg-Guy/"}
              />
            </div>

            <SocialIcon
              icon={<SiLinkedin size={24} />}
              styles={styles}
              url={"https://github.com/Sg-Guy/"}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-4 text-center"
        style={{ backgroundColor: darkMode ? "#0f172a" : "#e9ecef" }}
      >
        <p className="mb-0" style={styles.textMuted}>
          © 2026 | Guillaume SAGBO. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default App;
