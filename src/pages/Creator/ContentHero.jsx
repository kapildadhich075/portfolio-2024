function ContentHero() {
  return (
    <div className="h-screen relative px-4 py-4 sm:px-7 sm:py-7" id="hero">
      <div
        id="hero-in"
        className="relative p-10 sm:p-28 h-full w-full rounded-2xl sm:rounded-[50px] shadow-lg shadow-gray-700 overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          src="/herovideo.mov"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
        ></video>

        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-9xl font-[anzo4] text-center leading-tight text-white">
            Creator Mode
          </h1>
          <p className="text-center text-lg font-[anzo3] mt-4 text-white">
            This mode is under development. Please switch back to Developer mode
            for now.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentHero;
