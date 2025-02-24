import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ChartComp from "../../Components/DashboardComp/ChartComp";
import DashCard from "../../Components/DashboardComp/DashCard";
import MainLayout from "../../Layout/MainLayout";
import TopCustomerAll from "../../Components/DashboardComp/TopCustomerAll";
import TopAgentAll from "../../Components/DashboardComp/TopAgentAll";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [displayedComponent, setDisplayedComponent] = useState("customer");
  const [data, setData] = useState([]);
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/admin/login");
    }
  }, [token, navigate]);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setDisplayedComponent("customer");
    } else if (direction === "right") {
      setDisplayedComponent("agent");
    }
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jellyfish-app-gd9q8.ondigitalocean.app/api/errands-dashboard/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      // console.log(result);
      setData(result);
      // Assuming 10 items per page, adjust accordingly
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <MainLayout pname={"Dashboard"}>
        <div className="dashboard-container">
          <div className="dash-card-row flex justify">
            <DashCard
              card={"agent"}
              cardName={"New Agents"}
              user={data?.agents?.current_month}
              profit={data?.errands?.percentage_change}
              info={"Agents this month"}
            />
            <DashCard
              card={"customer"}
              cardName={"New Customers"}
              user={data?.customers?.current_month}
              profit={data?.errands?.percentage_change}
              info={"Customers this month"}
            />
            <DashCard
              card={"errand"}
              cardName={"Errands"}
              user={data?.errands?.current_month}
              profit={data?.errands?.percentage_change}
              info={"Errands this month"}
            />
            {/* <DashCard
              card={"payout"}
              cardName={"Payouts"}
              user={data?.agents?.current_month}
              profit={data?.errands?.percentage_change}
              info={"Payouts this month"}
            /> */}
          </div>

          {/* <div className="">
            <select className="bbb">
              <option value="value1">Month</option>
              <option value="value2">Option 2</option>
            </select>
          </div> */}
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
