import "remixicon/fonts/remixicon.css";

function HeroBottom() {
  return (
    <div className="absolute left-0 p-8 sm:p-12 lg:p-36 flex flex-col sm:flex-row items-end justify-between bottom-0 w-full text-white">
      <div className="bg-black/70 py-2 px-4 rounded-xl mb-4 sm:mb-0">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-[anzo3]">
          WEB DEVELOPMENT | CONTENT CREATION
        </h2>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-[anzo2]">
          BESPOKE FREELANCE
        </h3>
      </div>
      <div className="flex gap-2 outline-dashed rounded-md p-2">
        <a
          href="https://www.linkedin.com/in/kapildadhich075/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-box-fill text-3xl sm:text-4xl lg:text-5xl hover:text-blue-500 hover:scale-110"></i>
        </a>
        <a
          href="https://www.youtube.com/@kapildadhich075"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-youtube-fill text-3xl sm:text-4xl lg:text-5xl hover:text-red-500 hover:scale-110"></i>
        </a>
        <a
          href="https://www.instagram.com/075kapildadhich"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-fill text-3xl sm:text-4xl lg:text-5xl hover:text-transparent hover:bg-gradient-to-tr hover:from-pink-500 hover:scale-110 hover:to-orange-500 hover:bg-clip-text"></i>
        </a>
        <a
          href="https://github.com/kapildadhich075"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill text-3xl sm:text-4xl lg:text-5xl hover:text-black hover:scale-110"></i>
        </a>
        <a
          href="https://x.com/kapildadhich075"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-twitter-x-line text-3xl sm:text-4xl lg:text-5xl hover:text-black hover:scale-110"></i>
        </a>
      </div>
    </div>
  );
}

export default HeroBottom;
