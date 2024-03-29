import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Links from "./components/Links";
import { createContext, useState } from "react";
import Skills from "./components/Skills";
export const ScrollContext = createContext();

function App() {
  const [scrollToBottom, setScrollToBottom] = useState(false);

  return (
    <ScrollContext.Provider value={{ scrollToBottom, setScrollToBottom }}>
      <div>
        <Navbar />
        <Links />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
