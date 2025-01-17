import "remixicon/fonts/remixicon.css";

import { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import Header from "./components/Header";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import HomePageText from "./pages/HomePageText";
import LaptopVideo from "./pages/LaptopVideo";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  const [isAtHero, setIsAtHero] = useState(true);

  const handleScroll = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      const rect = heroElement.getBoundingClientRect();
      setIsAtHero(rect.top >= 0 && rect.bottom <= window.innerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Element name="hero" id="hero">
        <Hero />
      </Element>
      <HomePageText />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <LaptopVideo />
      {!isAtHero && (
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="fixed bottom-4 right-4 bg-black text-white p-2 rounded-full cursor-pointer"
        >
          <i className="ri-arrow-up-line p-1"></i>
        </Link>
      )}
    </>
  );
}

export default App;
