import React from "react";
import Footer from "../componenets/footer";

const Investing = () => {
  return (
    <section className="h-[100dvh] bg-[#00D54B] snap-start relative overflow-hidden">
      <div className="absolute w-screen  flex flex-col gap-16 items-center z-50 ">
        <h1 className="text-3xl font-Agrandir text-white">Investing</h1>
        <div className="flex flex-row gap-20 items-center">
          <div className="flex flex-row gap-8 justify-center items-center ">
            <div className="">
              <h1 className="sm:text-xl text-black font-Agrandir text-[16px]">
                Stocks
              </h1>
              <p className=" text-black font-Mulish ">
                Whether you’re an expert or just getting started, Cash App is
                the fastest and most accessible way to invest in stocks. Start
                now with as little as $1.
              </p>
            </div>
            <img
              src="/assets/investing-stocks.png"
              alt="Investing Stocks"
              className="block sm:w-[100px] w-[50px]"
            />
          </div>
          <div className="flex sm:flex-row sm:gap-8 justify-center items-center flex-col gap-6">
            <img
              src="/assets/investing-bitcoin.png"
              alt="Investing Bitcoin"
              className="block smlap:w-[100px] mob:!w-[50px]"
            />
            <div className="">
              <h1 className="sm:text-xl text-black font-Agrandir text-[16px]">
                Bitcoin
              </h1>
              <p className="revsmlap:w-[350px] mob:!w-[86dvw] text-black font-Mulish text-sm sm:text-base">
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
        className="absolute bottom-0 w-full h-[46%] "
      />
      <img
        src="/assets/investing-graph-1.png"
        alt="Investing Graph 1"
        className="absolute left-0 bottom-0 "
      />
      <img
        src="/assets/investing-graph-2.png"
        alt="Investing Graph 2"
        className="absolute right-0 bottom-[35%] "
      />
      <img
        src="/assets/investing-floor-mobile.png"
        alt="Investing Floor Mobile"
        className="absolute bottom-0 w-full bg-white"
      />
      <Footer themeColor={"white"} />
    </section>
  );
};

export default Investing;
