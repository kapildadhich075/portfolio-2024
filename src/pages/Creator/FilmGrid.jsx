import React from "react";
import { Play } from "lucide-react";

const films = [
  {
    id: 1,
    title: "Perspective",
    category: "Short Film",
    video: "/Automatic.MP4",
    caption: "A look at the city of Mumbai through a lens of solitude and chaos.",
    link: "https://www.instagram.com/reel/DGJmlXKzJ4_/",
    theme: "Perspective"
  },
  {
    id: 2,
    title: "You're Not Alone",
    category: "Real Life",
    video: "/portfolio-1.mp4",
    caption: "Finding connections in the most unexpected urban moments.",
    link: "https://www.instagram.com/reel/C_aGNS6SePa/",
    theme: "Emotion"
  },
  {
    id: 3,
    title: "The Grind",
    category: "Hustle",
    video: "/herovideo.mov", // Placeholder for another video if available
    caption: "The unseen effort behind the cinematic shots.",
    link: "https://instagram.com/075kapildadhich",
    theme: "Hustle"
  }
];

function FilmGrid() {
  return (
    <section className="bg-black py-24 px-6 md:px-12" id="film-grid">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-white/40 tracking-[0.3em] uppercase text-xs mb-2 block">Curation</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-white tracking-tight">Selected Works</h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Every frame is a choice. Every edit is a heartbeat. A collection of moments that stayed with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film) => (
            <a
              key={film.id}
              href={film.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col bg-[#111] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={film.video}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Play className="text-white fill-white w-4 h-4" />
                </div>
              </div>

              <div className="p-8">
                <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-2 block">{film.category}</span>
                <h3 className="text-2xl font-serif italic text-white mb-3 group-hover:text-gray-300 transition-colors uppercase tracking-wide">
                  {film.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {film.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FilmGrid;
