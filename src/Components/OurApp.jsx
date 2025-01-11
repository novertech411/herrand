import Container from "./Container";
import React, { useState } from "react";
import eanr from "../assets/image/earn.png";
import flex from "../assets/image/flexbility.png";
import delivery from "../assets/image/delivery.png";
import BenefitRunner from "./BenefitRunner";
import BenefitSender from "./BenefitSender";

const OurApp = () => {
  const [activeTab, setActiveTab] = useState("runner"); // Default to "runner"

  return (
    <div className="">
      <Container>
        <h3
          data-aos="flip-left"
          className=" font-poppins  text-center text-black md:text-[38px] text-5xl font-[600] mt-[200px] my-11 "
        >
          {" "}
          <span className="text-primary"> What </span>You Stand to Gain with
          <span className="text-primary"> Herrands .</span>{" "}
        </h3>

        <div
          data-aos="fade-right"
          className="bg-[#f5f8ff]  border-8  border-6 border-[#f5f8ff] rounded-full    md:w-[430px]   w-[300px] md::h-[80px] h-[65px] justify-between flex flex-wrap text-white mx-auto   "
        >
          {/* Runner Tab */}
          <div
            className={`rounded-full md:text-[24px]  text-[18px] font-poppins font-[500] px-[6%] flex items-center cursor-pointer ${
              activeTab === "runner"
                ? "bg-blue-600 text-white shadow-xl"
                : "bg-[#f5f8ff] text-blue-600 border border-blue-100 hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => setActiveTab("runner")}
          >
            As a Runner
          </div>

          {/* Sender Tab */}
          <div
            className={`rounded-full md:text-[24px]  text-[18px] font-poppins font-[500] px-[6%] flex items-center cursor-pointer ${
              activeTab === "sender"
                ? "bg-blue-600 text-white shadow-xl"
                : "bg-[#f5f8ff] text-blue-600 border border-blue-100 hover:bg-blue-600 hover:text-white"
            }`}
            onClick={() => setActiveTab("sender")}
          >
            As a Sender
          </div>
        </div>

        <div data-aos="zoom-in-up" className="mt-10 text-center  ">
          {activeTab === "runner" && <BenefitRunner />}
          {activeTab === "sender" && <BenefitSender />}
        </div>
      </Container>
    </div>
  );
};

export default OurApp;
