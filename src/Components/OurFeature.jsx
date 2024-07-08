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
    <div className="our-feature-container">
      <div className="our-feature-head">
        <div className="head-tit">Our Features</div>
        <div className="rec-head"></div>
      </div>
      <div className="agent-custom">
        <div className="become-ag-cus-container">
          <div
            className={
              isAgent ? "become-ae-cus-bx " : "become-ae-cus-bx act-tab"
            }
            onClick={handleAgentClick}
          >
            Become a Runner
          </div>
          <div
            className={
              isAgent ? "become-ae-cus-bx act-tab " : "become-ae-cus-bx "
            }
            onClick={handleAgentClick}
          >
            Become a Sender
          </div>
        </div>
      </div>
      {isAgent ? <CustomerComp /> : <AgentComp />}

      {isAgent ? <CustomerHowItWorks /> : <AgentHowItWorks />}
      
   
    </div>
  );
};

export default OurFeature;
