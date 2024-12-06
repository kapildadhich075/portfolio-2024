import "remixicon/fonts/remixicon.css";

function HeroBottom() {
  return (
    <div className=" absolute left-0 p-36 flex items-end justify-between bottom-0 w-full  text-white">
      <div className="bg-black/70 py-2 px-4 rounded-xl">
        <h2 className=" text-2xl font-[anzo3]">
          WEB DEVELOPMENT | CONTENT CREATION
        </h2>
        <h3 className=" text-2xl font-[anzo2]">BESPOKE FREELANCE</h3>
      </div>
      <div className=" flex gap-2 outline-dashed rounded-md p-2">
        <i className="ri-linkedin-box-fill text-5xl hover:text-blue-500 hover:scale-110"></i>
        <i className="ri-youtube-fill text-5xl hover:text-red-500 hover:scale-110"></i>
        <i className="ri-instagram-fill text-5xl hover:text-transparent hover:bg-gradient-to-tr hover:from-pink-500 hover:scale-110 hover:to-orange-500 hover:bg-clip-text"></i>
        <i className="ri-github-fill text-5xl hover:text-black hover:scale-110"></i>
        <i className="ri-twitter-x-line text-5xl hover:text-black hover:scale-110"></i>
      </div>
    </div>
  );
}

export default HeroBottom;
