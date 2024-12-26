function About() {
  return (
    <div className=" max-w-5xl mx-auto p-5 h-screen">
      <h1 className=" font-[anzo4] text-9xl">About</h1>
      <p className="font-[anzo3] text-justify py-5 text-lg">
        My journey began in 8th grade, crafting web pages while playing
        state-level cricket as a fast bowler. Competing in hackathons as the
        youngest participant sparked my passion for tech. Pursuing a BCA degree,
        I balanced studies with internships across diverse roles, becoming a
        generalist skilled in problem-solving and adaptability. Now, I’m eager
        to focus my experience on building impactful software solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <video
            autoPlay
            loop
            muted
            className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover relative z-10 rounded-3xl shadow-xl shadow-gray-700 mx-auto"
            src="https://ik.imagekit.io/umdiwr6ma/portfolio/IMG_3605.MOV/ik-video.mp4?updatedAt=1735230935453"
            alt="About"
          ></video>
        </div>
        <div className="col-span-1  flex-col gap-4 hidden md:flex">
          <video
            autoPlay
            loop
            muted
            src="https://ik.imagekit.io/umdiwr6ma/portfolio/video.mp4?updatedAt=1735241051306"
            alt="About"
            className="object-cover w-full h-[40vh] sm:h-[50vh] md:h-[30vh] xl:w-[35vw] 2xl:w-[38vw] rounded-3xl shadow-xl shadow-gray-700"
          />
          <video
            autoPlay
            loop
            muted
            src="https://ik.imagekit.io/umdiwr6ma/portfolio/cricket.MP4?updatedAt=1735242503869"
            alt="About"
            className="object-cover w-full h-[40vh] sm:h-[50vh] md:h-[30vh] xl:w-[35vw] 2xl:w-[38vw] rounded-3xl shadow-xl shadow-gray-700"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
