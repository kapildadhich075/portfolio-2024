import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { ChevronDown } from "lucide-react";

function CreatorHero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black" id="hero">
      {/* Cinematic Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/herovideo.mov" type="video/quicktime" />
        <source src="/herovideo.mov" type="video/mp4" />
      </video>

      {/* Film Grain Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Grain.jpg')] mix-blend-overlay" />
      
      {/* Vignette and Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="mb-6 overflow-hidden">
          <span className="block text-white/60 tracking-[0.4em] uppercase text-xs md:text-sm animate-in slide-in-from-bottom duration-1000">
            A Storyteller's Perspective
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic text-white mb-8 tracking-tighter leading-none animate-in fade-in zoom-in duration-1000">
          Kapil Dadhich
        </h1>
        
        <p className="max-w-xl text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-12 animate-in slide-in-from-bottom duration-1000 delay-300">
          Capturing the hustle, the silence, and the stories in between. 
          Mumbai through my lens.
        </p>

        <ScrollLink
          to="film-grid"
          smooth={true}
          duration={800}
          className="group cursor-pointer flex flex-col items-center gap-4 animate-bounce"
        >
          <span className="text-white/40 text-[10px] tracking-widest uppercase group-hover:text-white transition-colors">Enter the Story</span>
          <ChevronDown className="text-white/40 group-hover:text-white transition-colors" size={24} />
        </ScrollLink>
      </div>
      
      {/* Film Frame Borders (Optional Aesthetic) */}
      <div className="absolute top-0 left-0 w-full h-4 bg-black/40" />
      <div className="absolute bottom-0 left-0 w-full h-4 bg-black/40" />
    </div>
  );
}

export default CreatorHero;
