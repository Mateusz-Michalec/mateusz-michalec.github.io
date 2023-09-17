import "./App.scss";

import React, { useRef } from "react";
import Hero from "./components/Hero/Hero";
import Options from "./components/Options/Options";
import Menu from "./components/Menu/Menu";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useLanguage } from "./context/LanguageContext";
import langPL from "./assets/lang/lang-pl.json";
import langEN from "./assets/lang/lang-en.json";

const App = () => {
  const sectionRefs = {
    hero: useRef(),
    education: useRef(),
    skills: useRef(),
    projects: useRef(),
    contact: useRef(),
  };

  const { language } = useLanguage();
  const languageData = language === "en" ? langEN : langPL;

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Options languageData={languageData} />
      <Menu
        languageData={languageData}
        sectionRefs={sectionRefs}
        scrollToSection={scrollToSection}
      />
      <main className="app">
        <div className="scroll-div" ref={sectionRefs.hero}>
          <Hero languageData={languageData} />
        </div>
        <div className="scroll-div" ref={sectionRefs.education}>
          <Education languageData={languageData} />
        </div>
        <div className="scroll-div" ref={sectionRefs.skills}>
          <Skills languageData={languageData} />
        </div>
        <div className="scroll-div" ref={sectionRefs.projects}>
          <Projects languageData={languageData} />
        </div>
        <div className="scroll-div" ref={sectionRefs.contact}>
          <Contact languageData={languageData} />
        </div>
      </main>
    </>
  );
};

export default App;
