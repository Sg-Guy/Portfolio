import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";

function Contact({ darkMode }) {
  const textColor = darkMode ? "#f1f5f9" : "#212529";
  const mutedColor = darkMode ? "#94a3b8" : "#6c757d";
  const cardColor = darkMode ? "#1e293b" : "#ffffff";
  const borderColor = darkMode ? "#334155" : "#e9ecef";

  const contacts = [
    {
      icon: HiMail,
      label: "Email",
      value: "gsagbo541@gmail.com",
      href: "mailto:gsagbo541@gmail.com",
    },
    {
      icon: HiPhone,
      label: "Téléphone",
      value: "+2290151426320",
      href: "tel:+2290151426320",
    },
    {
      icon: HiLocationMarker,
      label: "Localisation",
      value: "Calavi, Bénin",
      href: null,
    },
  ];

  const socials = [
    {
      icon: SiGithub,
      label: "GitHub",
      href: "https://github.com/Sg-Guy",
    },
    {
      icon: SiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/guillaume-sagbo-1aaa502a5",
    },
  ];

  return (
    <section
      id="contact"
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
            CONTACT
          </span>

          <h2
            style={{
              color: textColor,
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Échangeons sur un projet
          </h2>

          <p
            style={{
              color: mutedColor,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Une question, une opportunité ou un projet à discuter ? Vous
            pouvez me contacter directement.
          </p>
        </motion.div>

        {/* Contenu */}
        <div
          className="contact-layout"
          style={{
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          {/* Bloc principal */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              padding: "32px",
              background: cardColor,
              border: `1px solid ${borderColor}`,
              borderRadius: "18px",
              boxShadow: darkMode
                ? "0 10px 30px rgba(0, 0, 0, 0.12)"
                : "0 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h4
              style={{
                color: textColor,
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              Prenons contact
            </h4>

            <p
              style={{
                color: mutedColor,
                lineHeight: "1.7",
                marginBottom: "28px",
              }}
            >
              Je suis ouvert aux échanges autour du développement web, des
              projets logiciels et des opportunités professionnelles.
            </p>

            <div
              style={{
                display: "grid",
                gap: "14px",
              }}
            >
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <ContactItem
                    key={contact.label}
                    icon={Icon}
                    label={contact.label}
                    value={contact.value}
                    href={contact.href}
                    darkMode={darkMode}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Réseaux */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              padding: "32px",
              background: darkMode
                ? "linear-gradient(145deg, #1e293b, #182235)"
                : "linear-gradient(145deg, #ffffff, #f5f7ff)",
              border: `1px solid ${borderColor}`,
              borderRadius: "18px",
              boxShadow: darkMode
                ? "0 10px 30px rgba(0, 0, 0, 0.12)"
                : "0 10px 30px rgba(0, 0, 0, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "14px",
                  background: darkMode ? "#273449" : "#eef2ff",
                  color: darkMode ? "#a5b4fc" : "#667eea",
                  marginBottom: "22px",
                }}
              >
                <HiExternalLink size={23} />
              </div>

              <h4
                style={{
                  color: textColor,
                  fontWeight: "700",
                  marginBottom: "10px",
                }}
              >
                Retrouvez-moi en ligne
              </h4>

              <p
                style={{
                  color: mutedColor,
                  lineHeight: "1.7",
                  marginBottom: "25px",
                }}
              >
                Découvrez mes projets et mon parcours professionnel sur mes
                profils.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "9px",
                      padding: "10px 15px",
                      borderRadius: "10px",
                      background: darkMode ? "#273449" : "#f1f3f5",
                      color: textColor,
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <Icon size={17} />
                    {social.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <style>
        {`
          .contact-layout {
            display: grid;
            grid-template-columns: 1.15fr 0.85fr;
            gap: 22px;
          }

          @media (max-width: 767px) {
            .contact-layout {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  darkMode,
}) {
  const textColor = darkMode ? "#f1f5f9" : "#212529";
  const mutedColor = darkMode ? "#94a3b8" : "#6c757d";

  const content = (
    <>
      <div
        style={{
          width: "42px",
          height: "42px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "11px",
          background: darkMode ? "#273449" : "#f1f3ff",
          color: darkMode ? "#a5b4fc" : "#667eea",
        }}
      >
        <Icon size={20} />
      </div>

      <div>
        <div
          style={{
            color: mutedColor,
            fontSize: "12px",
            marginBottom: "3px",
          }}
        >
          {label}
        </div>

        <div
          style={{
            color: textColor,
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
          {value}
        </div>
      </div>
    </>
  );

  return href ? (
    <motion.a
      href={href}
      whileHover={{ x: 3 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "12px",
        borderRadius: "12px",
        textDecoration: "none",
      }}
    >
      {content}
    </motion.a>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "12px",
      }}
    >
      {content}
    </div>
  );
}

export default Contact;