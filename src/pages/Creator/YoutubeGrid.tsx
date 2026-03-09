import React from "react";

const youtubeVideos = [
  {
    id: 1,
    title: "Street Stories",
    category: "Cinematic",
    embed: "https://www.youtube.com/embed/05YqatMm1lw?si=53kEE1f-r4N_HPrK",
    caption: "Learning by Watching Someone Build"
  },
  {
    id: 2,
    title: "Mumbai Nights",
    category: "Visual Film",
    embed: "https://www.youtube.com/embed/JHsmiTGEEks?si=qS0YJwzKVIWvUsjy",
    caption: "A cinematic journey through the restless nights of a young adult"
  },
  {
    id: 3,
    title: "Behind The Lens",
    category: "Process",
    embed: "https://www.youtube.com/embed/i-4LPJiZj94?si=kIE7UcUfxfeMjS5F",
    caption: "Mumbai Cha Raja: लालबागचा राजा विसर्जन 2025 | एक शहर, एक धड़कन | Ganpati Visarjan"
  }
];

function YouTubeGrid() {
  return (
    <section className="bg-black py-24 px-6 md:px-12" id="youtube-grid">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-white/40 tracking-[0.3em] uppercase text-xs mb-2 block">
              YouTube
            </span>

            <h2 className="text-5xl md:text-7xl font-serif italic text-white tracking-tight">
              Video Essays
            </h2>
          </div>

          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Longer stories and visual explorations shared on YouTube.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {youtubeVideos.map((video) => (
            <div
              key={video.id}
              className="group bg-[#111] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >

              {/* Video */}
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  src={video.embed}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-2 block">
                  {video.category}
                </span>

                <h3 className="text-2xl font-serif italic text-white mb-3 uppercase tracking-wide">
                  {video.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {video.caption}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default YouTubeGrid;
