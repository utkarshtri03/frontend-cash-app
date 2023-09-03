import React from "react";

const Banking = () => {
  return (
    <section className="h-[100dvh] bg-[#00D54B] snap-start relative flex justify-center">
      <div className="absolute flex flex-col md:flex-row justify-center items-center  z-50 top-[20%]  md:left-[10%] lg:left-[17%] space-y-6 ">
        <div className="relative z-10 left-16 sm:left-4">
          <h1 className="sm:text-3xl text-xl font-Agrandir text-white">
            Banking
          </h1>
          <p className="sm:w-[350px] w-[70%] font-Mulish text-sm sm:text-base">
            Receive your paycheck, tax returns, and other direct deposits up to
            two days early using your Cash App routing and account number.
          </p>
        </div>
        <img
          src="/assets/banking-phone.png"
          alt="Banking phone"
          className=" h-1/2 lg:h-1/3 w-2/6"
        />
      </div>
      <img
        src="/assets/banking-hole.png"
        alt="Banking hole top"
        className="absolute top-0 left-0 sm:h-[20%] sm:w-[23%] w-[25%]"
      />
      <img
        src="/assets/banking-column.png"
        alt="Banking column"
        className="absolute top-[5%] sm:top-[14%] left-[5%] z-10 sm:h-[30%] sm:w-[8%] w-[9%]"
      />
      <img
        src="/assets/banking-track-1.png"
        alt="Banking Track 2"
        className="absolute top-[23%] right-[47%] w-[15%] hidden md:block"
      />
      <img
        src="/assets/banking-stairs-2.png"
        alt="Banking Stairs 2"
        className="absolute h-[20%] bottom-[13%] left-[4%] z-10 sm:w-[6%] sm:h-[30%]"
      />
      <img
        src="/assets/banking-ramp-2.png"
        alt="Banking Ramp 2"
        className="absolute bottom-[4%] left-[13%] sm:w-[25%] sm:block hidden"
      />
      <img
        src="/assets/banking-tube.png"
        alt="Banking Tube"
        className="absolute bottom-0 left-[36%] sm:w-[9%] sm:block hidden"
      />
      <img
        src="/assets/banking-hole-b.png"
        alt="Banking Hole bottom"
        className="absolute bottom-0 right-[19%] sm:w-[30%]"
      />
      <img
        src="/assets/banking-monster.png"
        alt="Banking Monster"
        className="absolute bottom-[7%] right-[5%] sm:w-[10%] w-[15%] "
      />
      <img
        src="/assets/banking-cubes.png"
        alt="Banking Cubes"
        className="absolute bottom-[11%] right-[20%] sm:w-[15%]  sm:h-[20%] h-[15%]"
      />
      <img
        src="/assets/banking-stairs-1.png"
        alt="Banking Stairs 1"
        className="absolute bottom-[30%] right-[9%] sm:w-[5%] hidden sm:block "
      />
      <img
        src="/assets/banking-ramp-1.png"
        alt="Banking Ramp 1"
        className="absolute bottom-[47%] right-[10%] lg:right-[15%] w-[20%] md:right-[10%] min-w-10 "
      />
      <img
        src="/assets/banking-track-2.png"
        alt="Banking Track 2"
        className="absolute top-[1%] right-[12%] sm:w-[18%] w-[35%]"
      />
    </section>
  );
};

export default Banking;
