import React from "react";
import time from "../assets/image/time.png";
import enjoy from "../assets/image/enjoy.png";
import peace from "../assets/image/peace.png";

function BenefitSender() {
  return (
    <div>
      <div className=" flex md:justify-between  justify-center md:flex-row  gap-11 flex-col mt-[200px]">
        <div className="md:w-[373px]  w-[330px]  bg-blue-100  px-[40px] pb-[70px] pt-4 rounded-2xl  md:h-[545px] mx-auto ">
          <img className=" mx-auto" src={time} alt=" " />

          <div className="text-center font-poppins  text-[20px] my-[30px]">
            <p className=" font-poppins font-[700]">More Free Time</p>
            <p className=" font-[300] mt-[30px]">
              Imagine having more free time to focus on what matters to you. Our
              platform makes it easy for you to have more than 24 hours in your
              day.
            </p>
          </div>
        </div>

        <div className="md:w-[373px]  w-[330px]  bg-blue-100  px-[40px] pt-[70px] rounded-2xl  md:h-[645px] md:-mt-[60px] mx-auto">
          <img className=" mx-auto" src={enjoy} alt=" " />

          <div className="text-center font-poppins  text-[20px] my-[30px]">
            <p className=" font-poppins font-[700]"> Enjoy Convenience</p>
            <p className=" font-[300] mt-[30px]">
              Say goodbye to juggling multiple errands all alone. Our runners
              are vetted and ready to make it easier for you by helping you when
              you need it.
            </p>
          </div>
        </div>

        <div className="md:w-[373px]  w-[330px]  bg-blue-100  px-[40px] pb-[70px] pt-4 rounded-2xl  md:h-[545px] mx-auto ">
          <img className=" mx-auto" src={peace} alt=" " />

          <div className="text-center font-poppins  text-[20px] my-[30px]">
            <p className=" font-poppins font-[700]">Peace of Mind:</p>
            <p className=" font-[300] mt-[30px]">
              Rest easy with our vetted runners, secure platform, responsive
              customer support and safety protocols that guarantee your
              satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitSender;
