import { useState } from "react";
import "../css/ourfeature.css";
import AgentComp from "./AgentComp";
import CustomerComp from "./CustomerComp";
const OurFeature = () => {
  const [isAgent, setIsAgent] = useState(false);

  const handleAgentClick = () => {
    setIsAgent(true);
  };

  const handleCustomerClick = () => {
    setIsAgent(false);
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
              isAgent ? "become-ae-cus-bx act-tab" : "become-ae-cus-bx"
            }
            onClick={handleAgentClick}
          >
            Become an agent
          </div>
          <div
            className={
              !isAgent ? "become-ae-cus-bx act-tab" : "become-ae-cus-bx"
            }
            onClick={handleCustomerClick}
          >
            Become a Customer
          </div>
        </div>
      </div>
      {isAgent ? <AgentComp /> : <CustomerComp />}
    </div>
  );
};

export default OurFeature;
