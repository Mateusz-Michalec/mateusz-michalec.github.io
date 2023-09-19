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
import useInView from "./hooks/useInView";

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

  const intersection = useInView([
    sectionRefs.hero,
    sectionRefs.education,
    sectionRefs.skills,
    sectionRefs.projects,
    sectionRefs.contact,
  ]);

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
        <Hero ref={sectionRefs.hero} languageData={languageData} />
        <Education ref={sectionRefs.education} languageData={languageData} />
        <Skills ref={sectionRefs.skills} languageData={languageData} />
        <Projects ref={sectionRefs.projects} languageData={languageData} />
        <Contact ref={sectionRefs.contact} languageData={languageData} />
      </main>
    </>
  );
};

export default App;
