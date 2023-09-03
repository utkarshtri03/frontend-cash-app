import React from "react";
import Footer from "./footer";

const Investing = () => {
  return (
    <section className="h-[100dvh] bg-[#00D54B] snap-start relative overflow-hidden">
      <div className="absolute w-screen  flex flex-col gap-16 items-center z-50 top-8">
        <h1 className="text-3xl font-Agrandir text-white">Investing</h1>
        <div className="flex flex-col lg:flex-row  items-center justify-center px-[20%] md:pl-32 space-y-5 sm:space-y-8 md:space-y-0 space-x-0 lg:space-x-8 lg:gap-20 lg:px-[4%]">
          <div className="flex flex-row  justify-center items-center ">
            <div className="flex flex-col space-y-3 md:pb-10 pr-10">
              <h1 className="sm:text-xl text-black font-Agrandir  text-[16px]">
                Stocks
              </h1>
              <p className=" text-black font-Mulish w-28 sm:w-48 md:w-72 text-sm sm:text-base">
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </p>
            </div>
            <img
              src="/assets/investing-stocks.png"
              alt="Investing Stocks"
              className="block w-24 lg:w-40"
            />
          </div>
          <div className="flex flex-row justify-center items-center md:gap-10 md:ml-10 space-x-8">
            <img
              src="/assets/investing-bitcoin.png"
              alt="Investing Bitcoin"
              className="block w-24 lg:w-40"
            />
            <div className="flex flex-col space-y-3">
              <h1 className="sm:text-xl text-black font-Agrandir text-[16px]">
                Bitcoin
              </h1>
              <p className=" text-black font-Mulish text-sm sm:text-base w-28 sm:w-48 md:w-72 ">
                Cash App is the fastest way to convert dollars to bitcoin. From
                your home screen, six taps are all it takes to stack sats, buy
                an entire bitcoin, or just see what it’s all about.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/investing-rays.png"
        alt="Investing Rays"
        className="absolute h-full w-full"
      />
      <img
        src="/assets/investing-floor.png"
        alt="Investing Floor"
        className="absolute bottom-0 w-full h-[40%] "
      />
      <img
        src="/assets/investing-graph-1.png"
        alt="Investing Graph 1"
        className="absolute left-0 bottom-0 w-[50%]"
      />
      <img
        src="/assets/investing-graph-2.png"
        alt="Investing Graph 2"
        className="absolute right-0 bottom-[35%] sm:bottom-[25%] w-[25%]  "
      />
      <div className="hidden lg:block">
        <Footer themeColor={"white"} />
      </div>
    </section>
  );
};

export default Investing;
