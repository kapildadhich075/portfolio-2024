import React from "react";

function AboutCreator() {
  return (
    <section className="bg-black py-32 px-6 md:px-12 border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-white/40 tracking-[0.4em] uppercase text-[10px] mb-8 block">The Philosophy</span>
        
        <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-12 leading-tight tracking-tight">
          "I don't create contents. I capture moments that feel like home."
        </h2>
        
        <div className="space-y-8 text-gray-400 text-lg md:text-xl font-light leading-relaxed text-left max-w-2xl mx-auto">
          <p>
            My journey started with a camera and a curiosity for the silences in between the noise. Mumbai isn't just a city; it's a living, breathing character in my story.
          </p>
          <p>
            Inspired by the raw, kinetic energy of creators like Casey Neistat, I believe in the 'hustle'—not as a metric, but as an emotion. Every reel and every frame is an attempt to find beauty in the mundane.
          </p>
          <p>
            Whether it's the 4 AM train or the golden hour on a busy street, I'm looking for the perspective that makes us feel human.
          </p>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="w-16 h-[1px] bg-white/20 mb-8" />
          <p className="font-serif italic text-white text-2xl tracking-widest">Kapil Dadhich</p>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] mt-2">Creator • Filmmaker • Storyteller</p>
        </div>
      </div>
    </section>
  );
}

export default AboutCreator;
