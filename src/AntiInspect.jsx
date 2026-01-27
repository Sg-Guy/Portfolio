import { useEffect } from "react";

function AntiInspect() {
  useEffect(() => {
    const detectDevTools = () => {
      const threshold = 160;
      const isDevToolsOpen =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;

      if (isDevToolsOpen) {
        document.body.innerHTML = `
          <div style="
            display:flex;
            align-items:center;
            justify-content:center;
            height:100vh;
            font-family:Arial;
            background:#0f172a;
            color:#38bdf8;
            text-align:center;
          ">
            <h1>🚫 Inspection détectée<br/><br/>Ce contenu est protégé</h1>
          </div>
        `;
      }
    };

    const interval = setInterval(detectDevTools, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default AntiInspect;
