import { useState } from "react";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Github } from "./Components/Github";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Skills } from "./Components/Skills";
import { Work } from "./Components/Work";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Work/>
      <Github/>
      <Contact/>
      
    </div>
  );
}

export default App;
