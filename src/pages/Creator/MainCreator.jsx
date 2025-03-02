import { Link } from "lucide-react";
import LaptopVideo from "../Developer/LaptopVideo";
import ContentHero from "./ContentHero";

function MainCreator() {
  return (
    <>
      <ContentHero />
      <div className="h-screen relative px-4 py-4 sm:px-7 sm:py-7" id="hero">
        <div className="flex md:flex-row justify-center items-center h-full md:space-x-5 flex-col space-y-5">
          {/* Video Cards */}
          {[
            {
              video: "/Automatic.MP4",
              title: "𝑷𝒆𝒓𝒔𝒑𝒆𝒄𝒕𝒊𝒗𝒆",
              link: "https://www.instagram.com/reel/DGJmlXKzJ4_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            },
            {
              video: "/portfolio-1.mp4",
              title: "𝒀𝒐𝒖'𝒓𝒆 𝒏𝒐𝒕 𝑨𝒍𝒐𝒏𝒆",
              link: "https://www.instagram.com/reel/C_aGNS6SePa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            },
          ].map((item, index) => (
            <div
              key={index}
              id="hero-in"
              className="relative p-10 sm:p-28 cursor-pointer h-full w-full rounded-2xl sm:rounded-[50px] 
              shadow-lg shadow-gray-700 overflow-hidden group 
              transform transition-all duration-500 "
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                src={item.video}
                className="absolute inset-0 w-full h-full object-cover z-0 
                transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div
                className="absolute bottom-4 left-8 z-10 text-white 
                transform translate-y-10 group-hover:translate-y-0 
                transition-transform duration-500"
              >
                <h3
                  className="text-2xl font-semibold font-[anzo3] 
                  text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
                >
                  {item.title}
                </h3>
                <a
                  href="https://instagram.com/075kapildadhich"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  @075kapildadhich
                </a>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center 
                opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="transform scale-0 group-hover:scale-100 transition-transform duration-500"
                >
                  <Link className="h-8 w-8 animate-bounce text-white" />
                  <span
                    className="bg-white text-black m-5 px-4 py-2 rounded-full 
                  hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    Check this out!
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LaptopVideo />
    </>
  );
}

export default MainCreator;
