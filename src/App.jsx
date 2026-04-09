import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/helper/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import CV from "./components/CV";
import SplashCursor from "./components/SplashCursor";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-surface min-h-screen transition-colors duration-300">
      <SplashCursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="pt-0 md:pt-14">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/features" element={<Features />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
