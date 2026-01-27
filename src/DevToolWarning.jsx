import { useEffect, useState } from "react";
import "./DevToolsWarning.css"; // On stylise le modal avec du CSS

export default function DevToolsWarning() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const detectDevTools = () => {
      const threshold = 160; // seuil de détection
      const isDevToolsOpen =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;

      if (isDevToolsOpen) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    };

    const interval = setInterval(detectDevTools, 500);
    return () => clearInterval(interval);
  }, []);

  // Bloquer clic droit et F12
  useEffect(() => {
    const blockKeys = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        setShowWarning(true);
        
      }
    };

    const blockRightClick = (e) => e.preventDefault();

    document.addEventListener("keydown", blockKeys);
    document.addEventListener("contextmenu", blockRightClick);

    return () => {
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("contextmenu", blockRightClick);
    };
  }, []);

  if (!showWarning) return null;

  return (
    <div className="devtools-modal">
      <div className="devtools-content">
        <p>Remerciement</p>
        <h2>Merci d'avoir visité ce site </h2>
      </div>
    </div>
  );
}
