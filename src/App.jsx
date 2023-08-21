import "./App.scss";

import React from "react";
import Hero from "./components/Hero/Hero";
import Options from "./components/Hero/Options/Options";

const App = () => {
  return (
    <>
      <Options />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default App;
