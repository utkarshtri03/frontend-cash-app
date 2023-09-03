import React from "react";
import Navbar from "../componenets/navbar";
import Footer from "../componenets/footer";

const Hero = () => {
  return (
    <section className="h-[100dvh] bg-black snap-start relative overflow-hidden">
      <Navbar />
      <img
        src="/assets/blast.png"
        alt="Vector blast"
        className="w-[100dvw] h-[100dvh] object-cover absolute top-0 left-0"
      />
      <div className="text-center text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-46%] md:text-[150px] sm:text-[110px] text-[75px] leading-[1] font-Agrandir p-10">
        <div className="relative z-10">CASH</div>
        <div className="relative z-20">APP</div>
        <img
          src="/assets/intro-phone-1.png"
          alt="Intro phone"
          className="h-full w-auto absolute z-[15] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      <img
        src="/assets/down.png"
        alt="Scroll down indicator"
        className="sm:w-7 sm:h-9 w-5 h-7 absolute bottom-0 left-[50%] translate-x-[-50%] mb-6"
      />
      <div>
        <img
          src="/assets/intro-cube-1.png"
          alt="Intro Cube 1"
          className="absolute md:left-[15%] md:w-28 sm:left-[10%] sm:w-24 md:top-[10%] left-[7%] top-[10%] w-16"
        />
        <img
          src="/assets/intro-stairs-1.png"
          alt="Intro Stairs"
          className="z-5 absolute md:right-[12%] md:w-52 sm:right-[3%] sm:w-44 sm:top-[10%] right-[6%] w-28"
        />
        <img
          src="/assets/intro-cubes-1.png"
          alt="Intro Cubes 1"
          className="absolute md:left-[15%] bottom-12 md:w-52 sm:left-[10%] sm:w-32 sm:bottom-[10%] left-[7%] w-28"
        />
        <img
          src="/assets/intro-pillar-1.png"
          alt="Intro Pillar 1"
          className="absolute md:right-[18%] md:bottom-[-11%] md:w-72 sm:right-[-7%] sm:bottom-[-5%] sm:w-72 right-[1%] bottom-[7%] w-40"
        />
      </div>
      <div className="hidden lg:block">
        <Footer themeColor={"black"} />
      </div>
    </section>
  );
};

export default Hero;
