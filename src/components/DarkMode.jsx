import { useState } from "react";
import { create } from "zustand";


function DarkMode () {
      const [darkMode, setDarkMode] = useState(false);

      const [lightMode, setLightMode] = useState(!darkMode) ;
    }

export default DarkMode;