import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/ProjectsList";

function Projects({ darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projets"
      style={{
        padding: "30px 0",
        background: darkMode ? "#1e293b" : "#ffffff",
      }}
    >
      <div className="container">
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
              background: darkMode ? "#273449" : "#eef2ff",
              color: darkMode ? "#a5b4fc" : "#667eea",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1px",
              marginBottom: "14px",
            }}
          >
            PROJETS
          </span>

          <h2
            style={{
              color: darkMode ? "#f1f5f9" : "#212529",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Quelques projets réalisés
          </h2>

          <p
            style={{
              color: darkMode ? "#94a3b8" : "#6c757d",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Une sélection de projets développés au cours de ma formation,
            de mes expérimentations et de mes expériences.
          </p>
        </motion.div>

        <div className="row g-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="col-md-6 col-lg-4"
            >
              <ProjectCard
                {...project}
                darkMode={darkMode}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          darkMode={darkMode}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;