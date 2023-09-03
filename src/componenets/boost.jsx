import React from "react";

const Boost = () => {
  return (
    <section className="h-[100dvh] bg-black snap-start relative">
      <div className="absolute flex flex-col md:flex-row items-center justify-center z-50 left-[10%] sm:left-[12%] top-[10%]">
        <div className="relative z-10 revsmlap:bottom-16">
          <h1 className="text-3xl mob:text-xl font-Agrandir text-[#00D54B]">
            Cash Card & Boost
          </h1>
          <p className="sm:w-[350px] w-[70%] text-white font-Mulish text-sm sm:text-base">
            The Cash Card is a free, customizable debit card that lets you pay
            online and in stores. It’s the only way to get Boosts—instant
            discounts that work at places where you want to spend.
          </p>
        </div>
        <img
          src="/assets/boost-phone.png"
          alt="Boost phone"
          className="h-[40%] w-[50%] md:w-[70%] "
        />
      </div>
      <img
        src="/assets/boost-stairs-2.png"
        alt="Boost Stairs 2"
        className="absolute bottom-0 left-0 w-[50%] sm:w-[23%]"
      />
      <img
        src="/assets/boost-stairs-1.png"
        alt="Boost Stairs 1"
        className="absolute bottom-0 right-0 sm:w-[60%] w-[75%]"
      />
      <img
        src="/assets/boost-shoe.png"
        alt="Boost Shoe"
        className="absolute md:bottom-[23%] lg:bottom-[34.7%] md:right-[3%] lg:right-[1.4%] w-[6.5%] hidden md:block"
      />
      <img
        src="/assets/boost-coffee.png"
        alt="Boost Coffee"
        className="absolute bottom-[16%] right-[20%] w-[5%] hidden md:block"
      />
      <img
        src="/assets/boost-burger.png"
        alt="Boost Burger"
        className="absolute bottom-[35%] right-[26.5%] w-[4.8%] hidden md:block"
      />
      <img
        src="/assets/boost-card.png"
        alt="Boost Card"
        className="absolute md:bottom-[38%] lg:bottom-[55%] right-[20%] w-[5%] hidden md:block"
      />
      <img
        src="/assets/boost-hand.png"
        alt="Boost Hand"
        className="absolute md:top-[35%] lg:top-[12%] md:right-[13%] w-[4.7%] sm:bottom-[40%] sm:right-[13%] bottom-[28%] right-[17%]"
      />
    </section>
  );
};

export default Boost;
