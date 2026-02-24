import React from "react";
import { Instagram, Youtube, Mail } from "lucide-react";

function CreatorCTA() {
  return (
    <section className="bg-black pt-20 pb-40 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-serif italic text-white mb-12 tracking-tight">
          Let's tell a story.
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl mb-16 font-light max-w-xl mx-auto leading-relaxed">
          Open for collaborations, creative directing, or just a conversation about perspective.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <a
            href="https://instagram.com/075kapildadhich"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-4 text-white/50 hover:text-white transition-all duration-500"
          >
            <Instagram size={32} className="group-hover:scale-110 transition-transform duration-500" />
            <span className="text-[10px] tracking-[0.3em] uppercase">Instagram</span>
          </a>
          
          <a
            href="https://youtube.com/@kapildadhich"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-4 text-white/50 hover:text-white transition-all duration-500"
          >
            <Youtube size={32} className="group-hover:scale-110 transition-transform duration-500" />
            <span className="text-[10px] tracking-[0.3em] uppercase">YouTube</span>
          </a>

          <a
            href="mailto:contact@kapildadhich.com"
            className="group flex flex-col items-center gap-4 text-white/50 hover:text-white transition-all duration-500"
          >
            <Mail size={32} className="group-hover:scale-110 transition-transform duration-500" />
            <span className="text-[10px] tracking-[0.3em] uppercase">Connect</span>
          </a>
        </div>

        <div className="mt-40 text-white/10 text-[8px] tracking-[0.5em] uppercase text-center">
          © 2024 KAPIL DADHICH • COLLECTIVE PERSPECTIVE
        </div>
      </div>
    </section>
  );
}

export default CreatorCTA;
