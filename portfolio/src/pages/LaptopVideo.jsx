import "remixicon/fonts/remixicon.css";

function LaptopVideo() {
  return (
    <div className="bg-white relative flex-col flex md:flex-row items-center justify-center gap-10 mb-20 ">
      <video
        autoPlay
        loop
        muted
        className="h-[45vh] xl:w-[35vw] 2xl:w-[38vw] md:w-[24vw] object-cover relative z-10 rounded-3xl shadow-xl shadow-gray-700"
        src="/rickshaw.MOV"
        alt="Rickshaw"
      ></video>

      <div className="flex flex-col items-center gap-3">
        <h1 className=" text-8xl font-[anzo4] text-center">
          Working from anywhere?
        </h1>
        <p className=" font-[anzo3] text-sm">
          Want to chat? Just shoot me a DM with a direct question on my socials.
        </p>
        {/* <div className=" flex flex-row items-center mt-4 gap-4">
          <a
            target="_blank"
            className="bg-black px-4 py-2 text-white rounded-lg "
            href="https://calendly.com/kapildadhich075/30min"
          >
            <i className="ri-calendar-view text-xl mr-2"></i> Book a Meeting
          </a>
        </div> */}

        <div className="flex gap-2 outline-dashed rounded-md p-2">
          <a
            href="https://www.linkedin.com/in/kapildadhich075/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-fill text-5xl hover:text-blue-500 hover:scale-110"></i>
          </a>
          <a
            href="https://www.youtube.com/@kapildadhich075"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-youtube-fill text-5xl hover:text-red-500 hover:scale-110"></i>
          </a>
          <a
            href="https://www.instagram.com/075kapildadhich"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill text-5xl hover:text-transparent hover:bg-gradient-to-tr hover:from-pink-500 hover:scale-110 hover:to-orange-500 hover:bg-clip-text"></i>
          </a>
          <a
            href="https://github.com/kapildadhich075"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill text-5xl hover:text-black hover:scale-110"></i>
          </a>
          <a
            href="https://x.com/kapildadhich075"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-twitter-x-line text-5xl hover:text-black hover:scale-110"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LaptopVideo;
