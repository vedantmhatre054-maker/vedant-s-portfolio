import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ChatBot from "./components/ChatBot";


import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme}-theme`}>
    
      <BrowserRouter>
        <Navbar
          theme={theme}
          setTheme={setTheme}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <ChatBot />
    </div>
  );
}

export default App;