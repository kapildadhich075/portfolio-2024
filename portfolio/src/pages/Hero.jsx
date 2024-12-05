import HeroBottom from "../components/HeroBottom";
import TiltText from "../components/TiltText";

function Hero() {
  return (
    <div className=" h-screen  px-7 py-7">
      <div className=" h-full w-full bg-[url(./assets/hero.jpg)] bg-cover rounded-[50px] shadow-lg shadow-gray-700 ">
        <h1 className=" text-5xl font-serif text-white">KD</h1>
        <TiltText />
        <HeroBottom />
      </div>
    </div>
  );
}

export default Hero;
