import { useRef, useState } from "react";
import HeroBottom from "../components/HeroBottom";
import TiltText from "../components/TiltText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        90
    );
    setYVal(
      (-e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().width / 2) /
        70
    );
    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: "elastic.out(1,0.3)",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      onMouseMove={(e) => mouseMoving(e)}
      className="h-screen relative px-4 py-4 sm:px-7 sm:py-7"
      id="hero"
    >
      <div
        id="hero-in"
        className="relative p-10 sm:p-28 h-full w-full bg-[url(./assets/hero.jpg)] bg-cover rounded-2xl sm:rounded-[50px] shadow-lg shadow-gray-700"
      >
        <h1 className="text-4xl sm:text-[5rem] font-serif text-white">KD</h1>
        <TiltText ref={tiltRef} />
        <HeroBottom />
      </div>
    </div>
  );
}

export default Hero;
