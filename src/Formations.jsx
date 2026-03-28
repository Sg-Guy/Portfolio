import { BiSolidGraduation } from "react-icons/bi";
import { motion } from "framer-motion";

function Formations() {
  const parcours = [
    {
      annee: "2023 - 2026",
      titre: "Licence en Informatique",
      lieu: "UAC-IFRI",
      details: "Options : Génie Logiciel",
      color: "#011f38",
      en_cours: true,
    },
    {
      annee: "2023-2024",
      titre: "Baccalauréat Série C",
      lieu: "Candidature Libre",
      details: "Mention : Assez-Bien",
      color: "#011f38",
      en_cours: false,
    },
    {
      annee: "2022-2023",
      titre: "Baccalauréat Série D",
      lieu: "CEG YOKO",
      details: "Mention : Bien",
      color: "#011f38",
      en_cours: false,
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {parcours.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          style={{ display: "flex", gap: "20px" }}
        >
          {/* Colonne gauche */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Icône animée */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <BiSolidGraduation
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "4px solid rgba(255,255,255,0.1)",
                  boxShadow: `0 0 10px ${item.color}`,
                }}
              />
            </motion.div>

            {/* Ligne */}
            {index !== parcours.length - 1 && (
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.6 }}
                style={{
                  width: "2px",
                  flexGrow: 1,
                  backgroundColor: "#475569",
                  margin: "5px 0",
                }}
              />
            )}
          </div>

          {/* Contenu */}
          <div style={{ paddingBottom: "40px", flex: 1 }}>
            <span
              style={{
                fontSize: "0.85rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#94a3b8",
              }}
            >
              {item.annee}
            </span>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.7)",
                padding: "20px",
                borderRadius: "12px",
                backdropFilter: "blur(5px)",
                cursor: "pointer",
              }}
            >
              {item.en_cours && (
                <span
                  style={{
                    border: "0.5px solid",
                    background: "white",
                    color: "#067a3a",
                    padding: "2px 8px",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                  }}
                >
                  en cours
                </span>
              )}

              <h3 style={{ margin: "5px 0", color: "#fff" }}>
                {item.titre}
              </h3>

              <h4 style={{ color: "#94a3b8" }}>{item.lieu}</h4>

              <p
                style={{
                  color: "#cbd5e1",
                  fontStyle: "italic",
                }}
              >
                {item.details}
              </p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Formations;