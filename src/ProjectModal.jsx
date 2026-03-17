import React, { useState } from "react";

function ProjectModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = Array.isArray(project.images) ? project.images : [project.image];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose} style={{ zIndex: 1050 }}></div>
      
      <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1060 }}>
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            
            {/* CARROUSEL CUSTOM */}
            <div className="position-relative bg-dark" style={{ height: "400px" }}>
              <button 
                onClick={onClose} 
                className="btn-close btn-close-red position-absolute top-0 end-0 m-3 z-3"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" , color: "#fff" }}
              ></button>

              <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                <img 
                  src={images[activeIndex]} 
                  className="img-fluid h-75 w-100" 
                  style={{ objectFit: "contain", transition: "all 0.5s ease" }}
                  alt={`Slide ${activeIndex}`}
                />
              </div>

              {/* Contrôles du Carrousel (Affichés si > 1 image) */}
              {images.length > 1 && (
                <>
                  <button className="carousel-control-prev" onClick={prevSlide}>
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button className="carousel-control-next" onClick={nextSlide}>
                    <span className="carousel-control-next-icon"></span>
                  </button>
                  
                  {/* Indicateurs */}
                  <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
                    {images.map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded-circle ${i === activeIndex ? 'bg-white' : 'bg-white opacity-50'}`}
                        style={{ width: "8px", height: "8px", cursor: "pointer" }}
                        onClick={() => setActiveIndex(i)}
                      ></div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* CONTENU TEXTUEL */}
            <div className="modal-body p-4 bg-white">
              <h2 className="fw-bold mb-3">{project.name}</h2>
              
              <div className="mb-4">
                <div className="d-flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h6 className="text-muted text-uppercase fw-bold small mb-2">Détails du projet</h6>
              <p className="text-secondary lh-lg" style={{ whiteSpace: "pre-line" }}>
                {project.description}
              </p>
            </div>

            <div className="modal-footer border-0 p-3">
              <button className="btn btn-light rounded-pill px-4" onClick={onClose}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectModal;
