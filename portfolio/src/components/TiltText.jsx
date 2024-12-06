import { forwardRef } from "react";

const TiltText = forwardRef(function TiltText(props, ref) {
  return (
    <div className=" mt-32" ref={ref} id="tiltDiv">
      <h1 className=" text-[5.5vw] text-white uppercase font-[anzo1] leading-[4vw]">
        I&apos;m
        <span className=" bg-gradient-to-bl from-pink-500 to-orange-600 ml-2  rounded-[10px] text-transparent bg-clip-text  shadow-black">
          FRONTEND<span className=" text-white">™</span>
        </span>
      </h1>
      <h1 className=" text-9xl font-[anzo1] text-white leading-[7vw]">
        DEVELOPER
      </h1>
      <h1 className=" text-7xl font-[anzo1] text-white leading-[4vw]">
        TO HIRE
      </h1>
    </div>
  );
});

export default TiltText;
