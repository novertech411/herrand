import { useState } from "react";
import "../css/ourfeature.css";
import AgentComp from "./AgentComp";
import CustomerComp from "./CustomerComp";
import CustomerHowItWorks from "./CustomerHowItWorks";
import AgentHowItWorks from "./AgentHowItWorks";
const OurFeature = () => {
  const [isAgent, setIsAgent] = useState(false);

  const handleAgentClick = () => {
    setIsAgent(!isAgent);
  };

  return (
    <div className="our-feature-container bg-blue-100 py-[100px]">
      <div className="our-feature-head">
        <h2 className="font-[600] text-[38px] font-poppins ">
          How Herrand Works
        </h2>
      </div>

      <CustomerComp />
    </div>
  );
};

export default OurFeature;
