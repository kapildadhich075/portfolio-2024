import React from "react";
import { Code, Video } from "lucide-react";

const ModeModal = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:flex-row bg-black overflow-hidden animate-in fade-in duration-500">
      {/* Developer Side */}
      <button
        onClick={() => onSelect("developer")}
        className="group relative flex-1 flex flex-col items-center justify-center p-8 transition-all duration-700 hover:flex-[1.5] border-b md:border-b-0 md:border-r border-white/10"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
        >
          <source src="https://ik.imagekit.io/umdiwr6ma/portfolio/IMG_3605.MOV/ik-video.mp4?updatedAt=1735230935453" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:bg-black/20 transition-all duration-700" />
        
        <div className="relative z-10 flex flex-col items-center transform group-hover:scale-110 transition-transform duration-500">
          <div className="mb-6 p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-2xl">
            <Code className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Developer</h2>
          <p className="text-gray-300 text-center max-w-sm text-sm md:text-base font-light px-4">
            Engineering robust solutions and interactive digital experiences.
          </p>
        </div>
      </button>

      {/* Creator Side */}
      <button
        onClick={() => onSelect("creator")}
        className="group relative flex-1 flex flex-col items-center justify-center p-8 transition-all duration-700 hover:flex-[1.5]"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
        >
          <source src="/herovideo.mov" type="video/quicktime" />
          <source src="/herovideo.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:bg-black/20 transition-all duration-700" />
        
        <div className="relative z-10 flex flex-col items-center transform group-hover:scale-110 transition-transform duration-500">
          <div className="mb-6 p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-500 shadow-2xl">
            <Video className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Creator</h2>
          <p className="text-gray-300 text-center max-w-sm text-sm md:text-base font-light px-4">
            Visual storytelling, content strategy, and creative production.
          </p>
        </div>
      </button>

      {/* Center Label (Optional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 hidden md:block">
        <div className="bg-white/10 backdrop-blur-lg px-8 py-3 rounded-full border border-white/20">
          <span className="text-white font-medium tracking-[0.2em] uppercase text-xs">Choose Your Path</span>
        </div>
      </div>
    </div>
  );
};

export default ModeModal;
