import "remixicon/fonts/remixicon.css";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { ArrowUp, Code, Video } from "lucide-react";
import MainDev from "./pages/Developer/Main-Dev";
import MainCreator from "./pages/Creator/MainCreator";

function App() {
  const [isAtHero, setIsAtHero] = useState(true);
  const [display, setDisplay] = useState("developer");

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
      {/* Switch button with responsive positioning */}
      <Switcher display={display} setDisplay={setDisplay} />

      {/* Render the Developer or Creator mode */}

      {display === "developer" ? (
        <>
          <MainDev />
          {!isAtHero && <ScrollToTop />}
        </>
      ) : (
        <>
          <MainCreator />
        </>
      )}
    </>
  );
}

export default App;

function Switcher({ display, setDisplay }) {
  return (
    <>
      <div className="fixed z-50 md:top-12 md:right-1/2 md:transform md:translate-x-1/2 bottom-6 left-6 md:left-auto">
        <div className="bg-gray-200 rounded-xl p-1 inline-flex">
          <button
            onClick={() => setDisplay("developer")}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
              display === "developer"
                ? "bg-black text-white"
                : "hover:bg-gray-300"
            }`}
          >
            <Code className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDisplay("creator")}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
              display === "creator"
                ? "bg-black text-white"
                : "hover:bg-gray-300"
            }`}
          >
            <Video className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}

function ScrollToTop() {
  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
      className="fixed bottom-6 right-6 bg-black hover:bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg transition-all duration-300"
    >
      <ArrowUp className="w-6 h-6" />
    </Link>
  );
}
