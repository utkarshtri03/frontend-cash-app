import React from "react";

const Payments = () => {
  return (
    <section className="h-[100dvh] bg-[#F8F6F6] snap-start relative overflow-y-hidden">
      <div className="absolute  flex flex-col  md:flex-row bottom-44 z-20 sm:top-12 px-10 sm:left-[20%] md:left-0 top-12 md:top-24 ">
        <div className="relative  lg:top-[20%] lg:left-[29%] z-10  md:left-24">
          <h1 className="sm:text-3xl text-xl font-Agrandir text-[#00D54B]">
            Payments
          </h1>
          <p className="sm:w-[350px] w-[86dvw] font-Mulish text-sm sm:text-base ">
            Send and receive money with anyone, donate to an important cause, or
            tip professionals. Just enter a $cashtag, phone number, or scan
            their QR code to pay.
          </p>
        </div>
        <img
          src="/assets/payments-phone-1.png"
          alt="Payments Phone 1"
          className="relative right-32 left-4 md:left-0 lg:left-10"
        />
      </div>

      <img
        src="/assets/payments-column-1.png"
        alt="Payments column 1"
        className="absolute sm:bottom-0 w-[25%] sm:w-[12%] bottom-[-5%] z-[5]"
      />
      <img
        src="/assets/payments-column-2.png"
        alt="Payments column 2"
        className="absolute sm:bottom-0  md:right-[17%] sm:z-10  sm:right-[7%] w-[50%] right-[5%] bottom-[-5%] z-0"
      />
      <img
        src="/assets/payments-column-3.png"
        alt="Payments column 3"
        className="absolute bottom-[10%] h-[445px] w-[40%] right-0 hidden sm:block "
      />
      <img
        src="/assets/payments-pillar-small.png"
        alt="Payments pillar small"
        className="absolute bottom-[8%] h-[125px] w-[10%] left-[21%] hidden md:block "
      />
      <img
        src="/assets/payments-pillar-medium.png"
        alt="Payments pillar medium"
        className="absolute bottom-[3%] h-[240px] left-[14%] w-[12%] hidden md:block "
      />
      <img
        src="/assets/payments-pillar-medium.png"
        alt="Payments pillar medium"
        className="absolute bottom-[5%] h-[240px] left-[50%] w-[25%] sm:w-[13%] -translate-x-[50%] z-50 "
      />
      <img
        src="/assets/payments-pillar-medium.png"
        alt="Payments pillar medium"
        className="absolute bottom-[-10%] h-[240px] w-[13%] right-[34%]  z-30 hidden sm:block "
      />
      <img
        src="/assets/payments-pillar-large.png"
        alt="Payments pillar large"
        className="absolute sm:bottom-[8.4%] sm:right-[33%] bottom-[79%] right-[67%] w-[17%] hidden md:block "
      />
      <img
        src="/assets/payments-pillar-medium.png"
        alt="Payments pillar medium"
        className="absolute sm:bottom-[24%] sm:h-[230px] right-[14.5%] bottom-[82%] h-[145px] hidden md:block "
      />
    </section>
  );
};

export default Payments;
