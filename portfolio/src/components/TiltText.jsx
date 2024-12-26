import { forwardRef } from "react";

const TiltText = forwardRef(function TiltText(props, ref) {
  return (
    <div className="mt-16 sm:mt-32" ref={ref} id="tiltDiv">
      <h1 className="text-2xl sm:text-3xl lg:text-[5.5vw] text-white uppercase font-[anzo1] leading-6 sm:leading-8 lg:leading-[4vw]">
        I&apos;m
        <span className="bg-gradient-to-bl from-pink-500 to-orange-600 ml-2 rounded-[10px] text-transparent bg-clip-text shadow-black">
          FRONTEND<span className="text-white">™</span>
        </span>
      </h1>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-9xl font-[anzo1] text-white leading-6 sm:leading-tight lg:leading-[7vw]">
        DEVELOPER
      </h1>
      <h1 className="text-3xl sm:text-4xl lg:text-7xl font-[anzo1] text-white leading-6 sm:leading-tight lg:leading-[4vw]">
        TO HIRE
      </h1>
    </div>
  );
});

export default TiltText;
