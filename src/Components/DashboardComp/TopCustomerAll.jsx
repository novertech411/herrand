import { useEffect, useState } from "react";
import TopCusAgentCol from "./TopCusAgentCol";

const TopCustomerAll = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("authToken");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jellyfish-app-gd9q8.ondigitalocean.app/api/top-customers/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      console.log(result);
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
    <div className="top-customer-cont">
      <TopCusAgentCol data={data} />
    </div>
  );
};

export default TopCustomerAll;
