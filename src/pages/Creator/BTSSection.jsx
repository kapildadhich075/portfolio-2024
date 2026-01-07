import React from "react";

const btsMoments = [
  { id: 1, image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop", title: "The Prep" },
  { id: 2, image: "https://images.unsplash.com/photo-1533441818224-ec5c0d65b796?q=80&w=2070&auto=format&fit=crop", title: "Golden Hour" },
  { id: 3, image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop", title: "Late Edits" },
  { id: 4, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2070&auto=format&fit=crop", title: "The Gear" },
];

function BTSSection() {
  return (
    <section className="bg-black py-24 pb-40">
      <div className="px-6 md:px-12 mb-12">
        <span className="text-white/40 tracking-[0.3em] uppercase text-xs mb-2 block">Process</span>
        <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight">Behind the Lens</h2>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 md:px-12 no-scrollbar pb-10">
        {btsMoments.map((moment) => (
          <div 
            key={moment.id} 
            className="flex-shrink-0 w-72 md:w-96 aspect-[4/5] relative rounded-2xl overflow-hidden group border border-white/5"
          >
            <img 
              src={moment.image} 
              alt={moment.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <span className="text-white text-sm font-light tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {moment.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BTSSection;
