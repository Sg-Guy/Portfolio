import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import TypewriterComponent from "typewriter-effect";
import SocialIcon from "./SocialIcon";
import scrollToSection from "../utils/ScrollToSection";
import identGuy from "../assets/ident_guy.jpeg";
import balise from "../assets/code.png";

function Hero({ darkMode }) {
  const styles = {
    heroTitle: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontWeight: "700",
    },

    textMuted: {
      color: darkMode ? "#94a3b8" : "#6c757d",
    },

    textBody: {
      color: darkMode ? "#cbd5e1" : "#495057",
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

    profile: {
      width: "180px",
      height: "180px",
      objectFit: "cover",
      borderRadius: "50%",
      border: `4px solid ${darkMode ? "#f1f5f9" : "#475569"}`,
    },
  };

  return (
    <section
      id="accueil"
      className="hero d-flex align-items-center"
      style={{
        minHeight: "calc(100vh - 70px)",
        padding: "100px 0 60px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-xl-8 text-center">
            {/* Photo */}
            <img
              src={balise}
              alt="Guillaume SAGBO"
              style={styles.profile}
              className="mb-4"
            />

            {/* Nom */}
            <h1
              className="display-4 mb-3"
              style={styles.heroTitle}
            >
              <TypewriterComponent
                options={{
                  strings: ["Guillaume SAGBO"],
                  autoStart: true,
                  loop: false,
                  delay: 90,
                  deleteSpeed: Infinity,
                  cursor: "",
                }}
              />
            </h1>

            {/* Positionnement */}
            <p
              className="fs-4 fw-semibold mb-3"
              style={styles.textBody}
            >
              Développeur Full Stack
              <span className="mx-2">·</span>
              <span style={styles.textMuted}>Orientation Backend</span>
            </p>

            {/* Réseaux */}
            <div className="d-flex justify-content-center gap-3 mb-4">
              <SocialIcon
                icon={<SiFacebook size={26} />}
                styles={{
                  socialIcon: {
                    backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                    color: darkMode ? "#f1f5f9" : "#212529",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  },
                }}
                url="https://www.facebook.com/SG.Zathianos"
                title="Facebook"
              />

              <SocialIcon
                icon={<SiGithub size={26} />}
                styles={{
                  socialIcon: {
                    backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                    color: darkMode ? "#f1f5f9" : "#212529",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  },
                }}
                url="https://github.com/Sg-Guy/"
                title="GitHub"
              />

              <SocialIcon
                icon={<SiLinkedin size={26} />}
                styles={{
                  socialIcon: {
                    backgroundColor: darkMode ? "#1e293b" : "#ffffff",
                    color: darkMode ? "#f1f5f9" : "#212529",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  },
                }}
                url="https://www.linkedin.com/in/guillaume-sagbo-1aaa502a5"
                title="LinkedIn"
              />
            </div>

            {/* Présentation */}
            <p
              className="lead mb-4 mx-auto"
              style={{
                maxWidth: "720px",
                lineHeight: "1.7",
                ...styles.textBody,
              }}
            >
              Je conçois des applications web et des API avec Laravel,
              tout en intervenant sur le frontend avec React et sur le
              développement mobile avec Flutter. Je m'intéresse
              particulièrement à la conception backend, à la gestion
              des données, à l'authentification et à la qualité des
              applications que je développe.
            </p>

            {/* Actions */}
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button
                className="btn btn-lg text-white"
                style={styles.btnPrimary}
                onClick={() => scrollToSection("projets")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Voir mes projets
              </button>

              <button
                className="btn btn-lg"
                style={styles.btnOutline}
                onClick={() => scrollToSection("contact")}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode
                    ? "#334155"
                    : "#f8f9fa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;