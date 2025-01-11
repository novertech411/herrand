import { useState } from "react";
import "../css/ourfeature.css";
import AgentComp from "./AgentComp";
import CustomerComp from "./CustomerComp";
import CustomerHowItWorks from "./CustomerHowItWorks";
import AgentHowItWorks from "./AgentHowItWorks";
import { Container } from "react-bootstrap";
import RunnersComp from "./RunnersComp";
const OurFeature = () => {
  const [isAgent, setIsAgent] = useState(false);

  const handleAgentClick = () => {
    setIsAgent(!isAgent);
  };

  const [activeTab, setActiveTab] = useState("runner");

  return (
    <div
      className="our-feature-container bg-blue-100 py-[100px]"
      id="how-it-works-section"
    >
      <div className="our-feature-head">
        <h2
          data-aos="flip-left"
          className="font-[600] md:text-[38px]  text-5xl font-poppins  "
        >
          How <span className="text-primary"> Herrands </span> Works
        </h2>
      </div>

      <div
        data-aos="fade-right"
        className="bg-[#cbe2fc] mt-[6rem]  mb-[9rem] border-8  border-6 border-[#cbe2fc] rounded-full    md:w-[430px]   w-[300px] md::h-[80px] h-[65px] justify-between flex flex-wrap text-white mx-auto   "
      >
        {/* Runner Tab */}
        <div
          className={`rounded-full md:text-[24px]  text-[18px] font-poppins font-[500]    px-[5%]  flex items-center cursor-pointer ${
            activeTab === "runner"
              ? "bg-blue-600 text-white shadow-xl"
              : "bg-[#cbe2fc] text-blue-600 border border-[#cbe2fc] hover:bg-blue-600 hover:text-white"
          }`}
          onClick={() => setActiveTab("runner")}
        >
          As a Runner
        </div>

        {/* Sender Tab */}
        <div
          className={`rounded-full md:text-[24px]  text-[18px] font-poppins font-[500] px-[5%] flex items-center cursor-pointer ${
            activeTab === "sender"
              ? "bg-blue-600 text-white shadow-xl"
              : "bg-[#cbe2fc] text-blue-600 border border-[#cbe2fc] hover:bg-blue-600 hover:text-white"
          }`}
          onClick={() => setActiveTab("sender")}
        >
          As a Sender
        </div>
      </div>

      <Container>
        {activeTab === "runner" && <CustomerComp />}
        {activeTab === "sender" && <RunnersComp />}
      </Container>
    </div>
  );
};

export default OurFeature;
