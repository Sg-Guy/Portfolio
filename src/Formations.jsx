
import { BiSolidGraduation } from "react-icons/bi";

function Formations () {
  const parcours = [
    
    {
      annee: "2023 - 2026",
      titre: "Licence en Informatique",
      lieu: "UAC-Institut de Formation et de Recherche en Informatique (IFRI)",
      details: "Options : Génie Logiciel",
      color: "#011f38",
      en_cours : true,
    },
    {
      annee: "2023-2024",
      titre: "Baccalauréat Série C",
      lieu: "Candidature Libre",
      details: "Mention : Assez-Bien",
      color: "#011f38",
      en_cours : false,
    },
    {
      annee: "2022-2023",
      titre: "Baccalauréat Série D",
      lieu: "CEG YOKO",
      details: "Mention : Bien",
      color: "#011f38",
      en_cours : false,
    },
  ];

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {parcours.map((item, index) => (
        <div key={index} style={{ display: "flex", gap: "20px" }}>
          {/* Colonne de gauche : La ligne et le point */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Icon chapeau pour les formations  */}
            <BiSolidGraduation
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                //backgroundColor: item.color,
                border: "4px solid rgba(255,255,255,0.1)",
                boxShadow: `0 0 5px ${item.color}`,
                zIndex: 0,
              }}

            />
            

            {/* La ligne (sauf pour le dernier élément) */}
            {index !== parcours.length - 1 && (
              <div
                style={{
                  width: "2px",
                  flexGrow: 1,
                  backgroundColor: "#475569",
                  margin: "1px 0",
                }}
              ></div>
            )}
          </div>

          {/* Colonne de droite : Le contenu */}
          <div style={{ paddingBottom: "40px", flex: 1 }}>
            <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  //color: item.color,
                  textTransform: "uppercase",
                }}
              >
                {item.annee} 
              </span>
            <div
              style={{
                backgroundColor: "rgba(30, 41, 59, 0.7)",
                padding: "20px",
                borderRadius: "12px",
                //borderLeft: `4px solid ${item.color}`,
                backdropFilter: "blur(5px)",
              }}
            >
              {item.en_cours ? (<span className="badge badge-sm text-success rounded" style={{
                border : ' 0.1px solid',
                background : 'white'
              }}> en cours</span>) : ''}
              <h3
                style={{ margin: "5px 0", fontSize: "1.25rem", color: "#fff" }}
              >
                {item.titre}
              </h3>
              <h4
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "1rem",
                  color: "#94a3b8",
                }}
              >
                {item.lieu}
              </h4>
              <p style={{ margin: 0, color: "#cbd5e1", fontSize: "0.95rem" , fontStyle : 'italic' }}>
                {item.details}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Formations ;