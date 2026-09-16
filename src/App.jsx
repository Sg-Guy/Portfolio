import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import ProjectCard from "./Components/ProjectCard";

import ProjectModal from "./Components/ProjectModal";
import ReactGA from "react-ga4";
import TypewriterComponent from "typewriter-effect";
import Navbar from "./components/NavBar";
import Hero from "./components/HeroSection";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Competences from "./Components/Competences";
import Projects from "./components/Projects";
import Formations from "./Components/Formations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
ReactGA.initialize("G-KXNRTXBTHE"); // ID de suivi google Analytics


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const styles = {
    body: {
      backgroundColor: darkMode ? "#0f172a" : "#f8f9fa",
      color: darkMode ? "#f1f5f9" : "#212529",
      minHeight: "100vh",
      width: "100vw",
      margin: 0,
      padding: 5,
      overflowX: "hidden",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
  };
  return (
    <div style={styles.body}>
      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experiences darkMode={darkMode} />
        <Competences darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Formations darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
