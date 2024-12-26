import "remixicon/fonts/remixicon.css";
import Modal from "../components/Modal";
import Contact from "../pages/Contact";

import { useState } from "react";

function LaptopVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-white relative flex flex-col md:flex-row items-center justify-center gap-10 p-4 sm:p-8 md:p-12 lg:p-16 mb-20">
      <div>
        <video
          autoPlay
          loop
          muted
          className="w-full md:w-auto h-[30vh] sm:h-[40vh] md:h-[45vh] xl:w-[35vw] 2xl:w-[38vw] object-cover relative z-10 rounded-3xl shadow-xl shadow-gray-700"
          src="/rickshaw.MOV"
          alt="Rickshaw"
        ></video>
      </div>

      <div className="flex flex-col items-center gap-3 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-[anzo1]">
          Working from anywhere?
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-[anzo3]">
          Want to chat? Just shoot me a DM with a direct question on my socials.
        </p>
        <div className="flex flex-row items-center mt-4 gap-4">
          <a
            target="_blank"
            className="bg-black px-4 py-2 text-white rounded-lg flex items-center cursor-pointer"
            href="https://calendly.com/kapildadhich075/30min"
          >
            <i className="ri-calendar-view text-xl mr-2"></i> Book a Meeting
          </a>

          <a
            target="_blank"
            className="bg-black px-4 py-2 text-white rounded-lg flex items-center cursor-pointer"
            onClick={handleModal}
          >
            Send Message <i className="ri-mail-send-fill text-xl ml-2"></i>
          </a>
        </div>

        <Modal isOpen={isModalOpen} onClose={handleModal}>
          <Contact />
        </Modal>

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
    </div>
  );
}

export default LaptopVideo;
