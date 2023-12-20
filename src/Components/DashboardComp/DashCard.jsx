import "../../css/DashCss/DashBoardComp.css";
import { HiUsers } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { LiaHandsHelpingSolid } from "react-icons/lia";

const DashCard = ({ card, cardName, user, profit, info }) => {
  // agent, customer, errand, Payout;
  // let changePercentageClass = profit.includes("-") ? "negative" : "positive";
  let iconToDisplay;
  switch (card) {
    case "agent":
      iconToDisplay = <HiUsers />;
      break;
    case "customer":
      iconToDisplay = <FaUserAlt />;
      break;
    case "errand":
      iconToDisplay = <LiaHandsHelpingSolid />;
      break;
    case "payout":
      iconToDisplay = <FaHandHoldingUsd />;
      break;
    default:
      iconToDisplay = null;
  }
  return (
    <div className="dash-card-container flex ">
      <div className="left-cont">
        <div className="card-title">{cardName}</div>
        <div className="tot-cus-agt">
          {user} <span className={profit}>{profit}</span>
        </div>
        <div className="per-mont">{info}</div>
      </div>
      <div className="rit-cont">
        <div className={`iconbx flex `} id={card}>
          {iconToDisplay}
        </div>
      </div>
    </div>
  );
};

export default DashCard;
