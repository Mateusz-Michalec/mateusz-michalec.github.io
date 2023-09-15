import "./App.scss";

import React, { useRef } from "react";
import Hero from "./components/Hero/Hero";
import Options from "./components/Options/Options";
import Menu from "./components/Menu/Menu";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  const sectionRefs = {
    hero: useRef(),
    education: useRef(),
    skills: useRef(),
    projects: useRef(),
    contact: useRef(),
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Options />
      <Menu sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      <main className="app">
        <div className="scroll-div" ref={sectionRefs.hero}>
          <Hero />
        </div>
        <div className="scroll-div" ref={sectionRefs.education}>
          <Education />
        </div>
        <div className="scroll-div" ref={sectionRefs.skills}>
          <Skills />
        </div>
        <div className="scroll-div" ref={sectionRefs.projects}>
          <Projects />
        </div>
        <div className="scroll-div" ref={sectionRefs.contact}>
          <Contact />
        </div>
      </main>
    </>
  );
};

export default App;
