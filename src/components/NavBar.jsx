import { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import scrollToSection from "../utils/ScrollToSection";

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const styles = {
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
      whiteSpace: "nowrap",
    },

    navLink: {
      color: darkMode ? "#f1f5f9" : "#212529",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
  };

  const handleNavigation = (section) => {
    scrollToSection (section);
    setOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={styles.navbar}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <button
          className="border-0 bg-transparent p-0"
          onClick={() => handleNavigation("accueil")}
          aria-label="Retour à l'accueil"
        >
          <span style={styles.badge}>Portfolio</span>
        </button>

        {/* Actions */}
        <div className="d-flex align-items-center order-lg-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="btn btn-link p-2 me-2"
            style={{
              color: darkMode ? "#f1f5f9" : "#212529",
              fontSize: "1.5rem",
              textDecoration: "none",
            }}
            aria-label={
              darkMode
                ? "Activer le mode clair"
                : "Activer le mode sombre"
            }
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>

          {/* Menu mobile */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="navbarNav"
            aria-label="Ouvrir le menu"
            style={{
              color: darkMode ? "#f1f5f9" : "#212529",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Navigation */}
        <div
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                style={styles.navLink}
                onClick={() => handleNavigation("accueil")}
              >
                Accueil
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                style={styles.navLink}
                onClick={() => handleNavigation("apropos")}
              >
                À propos
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                style={styles.navLink}
                onClick={() => handleNavigation("experiences")}
              >
                Expériences
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                style={styles.navLink}
                onClick={() => handleNavigation("competences")}
              >
                Compétences
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                style={styles.navLink}
                onClick={() => handleNavigation("projets")}
              >
                Projets
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                style={styles.navLink}
                onClick={() => handleNavigation("formations")}
              >
                Formation
              </button>
            </li>

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                style={styles.navLink}
                onClick={() => handleNavigation("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;