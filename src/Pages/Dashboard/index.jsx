import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ChartComp from "../../Components/DashboardComp/ChartComp";
import DashCard from "../../Components/DashboardComp/DashCard";
import MainLayout from "../../Layout/MainLayout";
import TopCustomerAll from "../../Components/DashboardComp/TopCustomerAll";
import TopAgentAll from "../../Components/DashboardComp/TopAgentAll";
import { useState } from "react";
const Dashboard = () => {
  const [displayedComponent, setDisplayedComponent] = useState("customer");

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setDisplayedComponent("customer");
    } else if (direction === "right") {
      setDisplayedComponent("agent");
    }
  };
  return (
    <>
      <MainLayout pname={"Dashboard"}>
        <div className="dashboard-container">
          <div className="dash-card-row flex justify">
            <DashCard
              card={"agent"}
              cardName={"New Agents"}
              user={"564"}
              profit="+3.35%"
              info={"Users this month"}
            />
            <DashCard
              card={"customer"}
              cardName={"New Customers"}
              user={"143"}
              profit="-3.35%"
              info={"Agents this month"}
            />
            <DashCard
              card={"errand"}
              cardName={"Errands"}
              user={"143"}
              profit="-3.35%"
              info={"Errands this month"}
            />
            <DashCard
              card={"payout"}
              cardName={"Payouts"}
              user={"143"}
              profit="+3.35%"
              info={"Payouts this month"}
            />
          </div>
          <div className="chart-top-cus-row">
            <ChartComp />
            <div className="right-side-cont">
              <div className="head-controller-bx">
                {displayedComponent === "customer"
                  ? "Top Customer"
                  : "Top Agent"}
                <div className="navigator-box">
                  <AiOutlineLeft onClick={() => handleArrowClick("left")} />
                  <AiOutlineRight onClick={() => handleArrowClick("right")} />
                </div>
              </div>

              {displayedComponent === "customer" ? (
                <TopCustomerAll />
              ) : (
                <TopAgentAll />
              )}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Dashboard;
