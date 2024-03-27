import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { createContext, useState } from "react";
export const ScrollContext = createContext();

function App() {
  const [scrollToBottom, setScrollToBottom] = useState(false);

  return (
    <ScrollContext.Provider value={{ scrollToBottom, setScrollToBottom }}>
      <div>
        <Navbar />
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
