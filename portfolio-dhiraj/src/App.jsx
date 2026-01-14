import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Social from "./components/Social";


function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
      {/* {showContact && <Contact />} */}
<Social />

    </>
  );
}

export default App;

