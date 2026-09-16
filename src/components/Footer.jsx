import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiArrowUp } from "react-icons/hi";

function Footer({ darkMode }) {
  const textColor = darkMode ? "#f1f5f9" : "#212529";
  const mutedColor = darkMode ? "#94a3b8" : "#6c757d";
  const borderColor = darkMode ? "#334155" : "#e9ecef";

  const navItems = [
    { label: "Accueil", id: "accueil" },
    { label: "À propos", id: "about" },
    { label: "Expériences", id: "experiences" },
    { label: "Compétences", id: "competences" },
    { label: "Projets", id: "projets" },
    { label: "Formation", id: "formation" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode ? "#0b1120" : "#ffffff",
        borderTop: `1px solid ${borderColor}`,
        padding: "45px 0 25px",
      }}
    >
      <div className="container">
        {/* Partie principale */}
        <div
          className="footer-main"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
            paddingBottom: "35px",
          }}
        >
          {/* Identité */}
          <div style={{ maxWidth: "320px" }}>
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              style={{
                border: "none",
                background: "transparent",
                padding: 0,
                color: textColor,
                fontSize: "21px",
                fontWeight: "800",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              Guillaume SAGBO
            </button>

            <p
              style={{
                color: mutedColor,
                fontSize: "14px",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              Développeur Full Stack
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h6
              style={{
                color: textColor,
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Navigation
            </h6>

            <div
              className="footer-nav"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 20px",
                maxWidth: "430px",
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    color: mutedColor,
                    fontSize: "13px",
                    cursor: "pointer",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.color = darkMode
                      ? "#a5b4fc"
                      : "#667eea";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.color = mutedColor;
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Réseaux */}
          <div>
            <h6
              style={{
                color: textColor,
                fontWeight: "700",
                marginBottom: "15px",
              }}
            >
              Réseaux
            </h6>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <SocialLink
                href="https://github.com/"
                label="GitHub"
                darkMode={darkMode}
              >
                <SiGithub size={17} />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/"
                label="LinkedIn"
                darkMode={darkMode}
              >
                <SiLinkedin size={17} />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Ligne inférieure */}
        <div
          style={{
            borderTop: `1px solid ${borderColor}`,
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <p
            style={{
              color: mutedColor,
              fontSize: "12px",
              margin: 0,
            }}
          >
            © {currentYear} Guillaume SAGBO. Tous droits réservés.
          </p>

          <motion.button
            type="button"
            onClick={() => scrollToSection("accueil")}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Retour en haut"
            title="Retour en haut"
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
            <HiArrowUp size={18} />
          </motion.button>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 767px) {
            .footer-main {
              flex-direction: column !important;
              gap: 30px !important;
            }

            .footer-main > div {
              width: 100%;
            }
          }

          @media (max-width: 480px) {
            footer .container > div:last-child {
              align-items: flex-start !important;
            }
          }
        `}
      </style>
    </footer>
  );
}

function SocialLink({ href, label, children, darkMode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      style={{
        width: "38px",
        height: "38px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        background: darkMode ? "#1e293b" : "#f1f3f5",
        color: darkMode ? "#cbd5e1" : "#495057",
        textDecoration: "none",
        transition: "all 0.25s ease",
      }}
    >
      {children}
    </motion.a>
  );
}

export default Footer;
