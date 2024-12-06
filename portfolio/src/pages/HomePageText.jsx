import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function HomePageText() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from("#rotateText", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#rotateText",
        start: "top 50%",
        end: "top -250%",
        scrub: 2,
      },
    });
  });

  return (
    <div id="section-2" className=" bg-white text-center p-20 text-black">
      <h3 className=" text-gray-500 text-xl font-[anzo3]">
        © KD075 2024 | Designed and Developed
      </h3>
      {/* <div id="rotateText" className="mt-40">
        <h1 className=" text-[42vw] font-[anzo4] uppercase leading-[33vw] ">
          IMPACTFUL
        </h1>
      </div>
      <div id="rotateText">
        <h1 className=" text-[42vw] font-[anzo4] uppercase leading-[33vw]">
          DESIGN
        </h1>
      </div>
      <div id="rotateText">
        <h1 className=" text-[42vw] font-[anzo4] uppercase leading-[33vw]">
          Is The
        </h1>
      </div>
      <div id="rotateText">
        <h1 className=" text-[42vw] font-[anzo4] uppercase leading-[33vw]">
          DESIGN
        </h1>
      </div>
      <div id="rotateText">
        <h1 className=" text-[42vw] font-[anzo4] uppercase leading-[33vw]">
          that
        </h1>
      </div>
      <div id="rotateText">
        <h1 className=" text-[42vw] font-[anzo4] uppercase leading-[33vw]">
          works
        </h1>
      </div> */}

      {/* <div className=" h-1 w-1/2 relative left-1/2 -translate-x-1/2 bg-black"></div> */}
    </div>
  );
}

export default HomePageText;
