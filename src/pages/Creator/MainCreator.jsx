import React, { useEffect } from "react";
import CreatorHero from "./CreatorHero";
import FilmGrid from "./FilmGrid";
import AboutCreator from "./AboutCreator";
import BTSSection from "./BTSSection";
import CreatorCTA from "./CreatorCTA";
import YoutubeGrid from "./YoutubeGrid";

function MainCreator() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black min-h-screen selection:bg-white selection:text-black antialiased relative">
      {/* Global Film Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Grain.jpg')] mix-blend-overlay" />
      
      {/* Immersive Scroll Experience */}
      <CreatorHero />
      
      <div className="relative z-10 w-full overflow-hidden">
        <YoutubeGrid />
        <FilmGrid />
        <AboutCreator />
        <BTSSection />
        <CreatorCTA />
      </div>

      {/* Retro Date/Time Overlay (Casey Neistat style) */}
      <div className="fixed bottom-12 left-12 z-[60] text-white/20 font-mono text-[10px] hidden md:block uppercase tracking-tighter">
        {new Date().toLocaleDateString()} // Mumbai, India // 18.90° N, 72.82° E
      </div>
    </main>
  );
}

export default MainCreator;
