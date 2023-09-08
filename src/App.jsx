import "./App.scss";

import React from "react";
import Hero from "./components/Hero/Hero";
import Options from "./components/Options/Options";
import Menu from "./components/Menu/Menu";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Options />
      <Menu />
      <main className="app">
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
