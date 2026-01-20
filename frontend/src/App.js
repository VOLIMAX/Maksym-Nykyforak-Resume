import React from "react";
import "./App.css";
import { portfolioData } from "./mockData";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-[#0a0a0a] min-h-screen">
      <Header />
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.about} />
      <Skills data={portfolioData.skills} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Education data={portfolioData.education} />
      <Certifications data={portfolioData.certifications} />
      <Contact data={portfolioData.personal} />
      <Footer />
    </div>
  );
}

export default App;
