import { useState } from "react";
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
  SiCss3,
  SiFacebook,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { HiMail, HiPhone, HiMoon, HiSun } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./assets/img.jpg"
import step from "./assets/step.png"
import campus from "./assets/campus.png"

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
      backgroundColor: darkMode ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)",
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
  };

  return (
    <div style={styles.body}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg fixed-top" style={styles.navbar}>
        <div className="container">
          <span style={styles.badge}>SGZ-Portfolio 1.0</span>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <button className="nav-link btn btn-link" style={styles.navLink} onClick={() => scrollToSection('accueil')}>
                  Accueil
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" style={styles.navLink} onClick={() => scrollToSection('apropos')}>
                  À propos
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" style={styles.navLink} onClick={() => scrollToSection('competences')}>
                  Compétences
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" style={styles.navLink} onClick={() => scrollToSection('projets')}>
                  Projets
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" style={styles.navLink} onClick={() => scrollToSection('contact')}>
                  Contact
                </button>
              </li>
            </ul>
            
            <button
              className="btn btn-sm"
              onClick={() => setDarkMode(!darkMode)}
              style={{
                backgroundColor: darkMode ? "#334155" : "#e2e8f0",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
              }}
            >
              {darkMode ? <HiSun size={20} color="white"/> : <HiMoon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-vh-100 d-flex align-items-center" style={{ paddingTop: "80px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <p className="fs-5 mb-3" style={styles.textMuted}>
                Salut, Je m'appelle
              </p>
              <h1 className="display-1 mb-3" style={styles.heroTitle}>
                Guillaume SAGBO
              </h1>
              <h2 className="display-6 fw-semibold mb-4" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>
                Développeur Web et Mobile
              </h2>
              <p className="lead mb-5" style={{ maxWidth: "700px", margin: "0 auto", ...styles.textBody }}>
                Actuellement étudiant en Génie Logiciel à IFRI. Passionné par le développement web et mobile, 
                je construis petit à petit mon univers numérique. Je suis en apprentissage de Laravel, React.js, 
                JavaScript, PHP et WordPress.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button
                  className="btn btn-lg text-white"
                  style={styles.btnPrimary}
                  onClick={() => scrollToSection('contact')}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                >
                  Me contacter
                </button>
                <button
                  className="btn btn-lg"
                  style={styles.btnOutline}
                  onClick={() => scrollToSection('projets')}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = darkMode ? "#334155" : "#f8f9fa";
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
                <h2 className="display-4 fw-bold mb-4 text-center" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>À propos</h2>
                <p className="lead" style={styles.textBody}>
                  Actuellement en parcours de Génie Logiciel, j'ai choisi de mettre mes compétences au service 
                  de la création de solutions web modernes, intuitives et accessibles. Curieux, je conçois des 
                  sites vitrines, des applications web et des interfaces utilisateurs adaptées aux besoins réels. 
                  Mon objectif est simple : transformer vos idées en expériences numériques de qualité. Je maîtrise 
                  les bases du HTML, CSS, JavaScript, PHP, MySQL, ainsi que des frameworks et outils modernes comme 
                  React, Laravel et WordPress. Pour moi, chaque projet est une opportunité d'apprendre, d'innover 
                  et de créer de la valeur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-5">
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>Compétences</h2>
          
          {/* Frontend */}
          <div className="mb-5">
            <h3 className="h3 fw-semibold mb-4" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>Front-end</h3>
            <div className="row g-4">
              <SkillCard icon={<SiHtml5 size={50} color="#E34F26" />} name="HTML/CSS" darkMode={darkMode} styles={styles} />
              <SkillCard icon={<SiBootstrap size={50} color="#7952B3" />} name="Bootstrap" darkMode={darkMode} styles={styles} />
              <SkillCard icon={<SiReact size={50} color="#61DAFB" />} name="React.js" darkMode={darkMode} styles={styles} />
              <SkillCard icon={<SiFlutter size={50} color="#02569B" />} name="Flutter" darkMode={darkMode} styles={styles} />
            </div>
          </div>

          {/* Backend */}
          <div className="mb-5">
            <h3 className="h3 fw-semibold mb-4" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>Back-end</h3>
            <div className="row g-4">
              <SkillCard icon={<SiPhp size={50} color="#777BB4" />} name="PHP" darkMode={darkMode} styles={styles} />
              <SkillCard icon={<SiLaravel size={50} color="#FF2D20" />} name="Laravel" darkMode={darkMode} styles={styles} />
              <SkillCard icon={<SiFastapi size={50} color="#009688" />} name="FastAPI" darkMode={darkMode} styles={styles} />
            </div>
          </div>

          {/* Database */}
          <div className="mb-5">
            <h3 className="h3 fw-semibold mb-4" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>Base de données</h3>
            <div className="row g-4">
              <SkillCard icon={<SiMysql size={50} color="#4479A1" />} name="MySQL" darkMode={darkMode} styles={styles} />
              <SkillCard icon={<SiSqlite size={50} color="#003B57" />} name="SQLite" darkMode={darkMode} styles={styles} />
              <SkillCard icon={<SiOracle size={50} color="#F80000" />} name="Oracle" darkMode={darkMode} styles={styles} />
            </div>
          </div>

          {/* CMS */}
          <div>
            <h3 className="h3 fw-semibold mb-4" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>CMS</h3>
            <div className="row g-4">
              <SkillCard icon={<SiWordpress size={50} color="#21759B" />} name="WordPress" darkMode={darkMode} styles={styles} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-5">
        <div className="container">
          <div style={styles.sectionBg}>
            <h2 className="display-4 fw-bold mb-5 text-center" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>Mes Réalisations</h2>
            <div className="row g-4">
              <ProjectCard darkMode={darkMode} image={img} styles={styles} />
              <ProjectCard darkMode={darkMode} image={step} styles={styles} />
              <ProjectCard darkMode={darkMode} image={campus} styles={styles} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="display-4 fw-bold mb-5 text-center" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>Contact</h2>
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card h-100" style={styles.card}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center">
                    <div style={styles.iconGradient} className="me-3">
                      <HiMail size={30} color="#fff" />
                    </div>
                    <div>
                      <p className="mb-1" style={styles.textMuted}>Email</p>
                      <h5 className="mb-0" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>guyi@gmail.com</h5>
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
                      <p className="mb-1" style={styles.textMuted}>Téléphone</p>
                      <h5 className="mb-0" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>+229 01 51 65 83</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="d-flex justify-content-center gap-4">
            <SocialIcon icon={<SiFacebook size={24} />} styles={styles} />
            <SocialIcon icon={<SiGithub size={24} />} styles={styles} />
            <SocialIcon icon={<SiLinkedin size={24} />} styles={styles} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center" style={{ backgroundColor: darkMode ? "#0f172a" : "#e9ecef" }}>
        <p className="mb-0" style={styles.textMuted}>
          © 2024 Guillaume SAGBO. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

// Skill Card Component
function SkillCard({ icon, name, darkMode, styles }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div
        className="card h-100 text-center"
        style={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {}),
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
          <div className="mb-3">{icon}</div>
          <h6 className="mb-0 fw-semibold" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>{name}</h6>
        </div>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ darkMode, image , styles }) {
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
        <div style={{
          
    backgroundSize: 'cover',      // L'image couvre toute la div
    backgroundPosition: 'center',  // Centrage de l'image
    backgroundRepeat: 'no-repeat', // Pas de répétition
    minHeight: '200px',            // Une hauteur est nécessaire pour voir la div
    width: '100%',
          height: "200px",
          backgroundImage: `url(${image})`,
          //background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}></div>
        <div className="card-body p-4">
          <h5 className="card-title fw-bold mb-3" style={{ color: darkMode ? "#f1f5f9" : "#212529" }}>Projet en cours</h5>
          <p className="card-text" style={darkMode ? { color: "#94a3b8" } : { color: "#6c757d" }}>
            Description du projet avec les technologies utilisées et les fonctionnalités principales.
          </p>
          <a href="#" className="text-decoration-none fw-semibold" style={{ color: "#667eea" }}>
            Voir plus →
          </a>
        </div>
      </div>
    </div>
  );
}

// Social Icon Component
function SocialIcon({ icon, styles }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      style={{
        ...styles.socialIcon,
        transform: isHovered ? "scale(1.1)" : "scale(1)",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
    </a>
  );
}

export default App;