import "remixicon/fonts/remixicon.css";

import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import { ArrowUp, Code, Video } from "lucide-react";
import MainDev from "./pages/Developer/Main-Dev";
import MainCreator from "./pages/Creator/MainCreator";
import ModeModal from "./components/ModeModal";

function AppContent() {
  const [isAtHero, setIsAtHero] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  // Determine current display based on path
  const currentDisplay = location.pathname === "/creator" ? "creator" : "developer";

  useEffect(() => {
    const savedMode = localStorage.getItem("userMode");
    
    // If at root, redirect based on saved preference or show modal
    if (location.pathname === "/") {
      if (savedMode) {
        navigate(`/${savedMode === "creator" ? "creator" : "dev"}`, { replace: true });
      } else {
        setShowModal(true);
      }
    }
  }, [location.pathname, navigate]);

  const handleModeSelection = (mode) => {
    localStorage.setItem("userMode", mode);
    setShowModal(false);
    navigate(`/${mode === "creator" ? "creator" : "dev"}`);
  };

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
      <Helmet>
        <title>Portfolio | Kapil Dadhich</title>
        <meta name="description" content="Kapil Dadhich's Professional Portfolio" />
      </Helmet>

      {showModal && <ModeModal onSelect={handleModeSelection} />}
      
      {!showModal && <Switcher display={currentDisplay} />}

      <Routes>
        <Route path="/dev" element={
          <>
            <Helmet>
              <title>Developer Portfolio | Kapil Dadhich</title>
              <meta name="description" content="Explore my software development projects, technical skills, and engineering work." />
            </Helmet>
            <MainDev />
            {!isAtHero && <ScrollToTop />}
          </>
        } />
        <Route path="/creator" element={
          <>
            <Helmet>
              <title>Creator Portfolio | Kapil Dadhich</title>
              <meta name="description" content="Check out my content creation, video production, and creative storytelling projects." />
            </Helmet>
            <MainCreator />
          </>
        } />
        {/* Redirect unknown routes / root will be handled by useEffect redirector */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

function Switcher({ display }) {
  const navigate = useNavigate();

  const toggleMode = (mode) => {
    localStorage.setItem("userMode", mode);
    navigate(`/${mode === "creator" ? "creator" : "dev"}`);
  };

  return (
    <div className="fixed z-50 md:top-12 md:right-1/2 md:transform md:translate-x-1/2 bottom-6 left-6 md:left-auto">
      <div className="bg-gray-200/80 backdrop-blur-md rounded-xl p-1 inline-flex shadow-lg border border-white/20">
        <button
          onClick={() => toggleMode("developer")}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
            display === "developer"
              ? "bg-black text-white shadow-md scale-105"
              : "text-gray-600 hover:bg-gray-300"
          }`}
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          onClick={() => toggleMode("creator")}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
            display === "creator"
              ? "bg-black text-white shadow-md scale-105"
              : "text-gray-600 hover:bg-gray-300"
          }`}
        >
          <Video className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ScrollToTop() {
  return (
    <ScrollLink
      to="hero"
      smooth={true}
      duration={500}
      className="fixed bottom-6 right-6 bg-black hover:bg-gray-800 text-white p-3 rounded-full cursor-pointer shadow-lg transition-all duration-300 z-50"
    >
      <ArrowUp className="w-6 h-6" />
    </ScrollLink>
  );
}
