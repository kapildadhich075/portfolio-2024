import Header from "../../components/Header";

import Hero from "./Hero";
import HomePageText from "./HomePageText";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import LaptopVideo from "./LaptopVideo";

import { Element } from "react-scroll";

function MainDev() {
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
    </>
  );
}

export default MainDev;
