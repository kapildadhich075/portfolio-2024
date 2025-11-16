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
import MediumArticles from "./Blogs";
import { FacebookEmbed, InstagramEmbed } from "react-social-media-embed";
import SocialFeed from "./SocialMedia";

function MainDev() {
  return (
    <>
      <Header />
      <Element name="hero" id="hero">
        <Hero />
      </Element>
      <HomePageText />
      <About />
<SocialFeed/>
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <MediumArticles/>
      <LaptopVideo />
    </>
  );
}

export default MainDev;
