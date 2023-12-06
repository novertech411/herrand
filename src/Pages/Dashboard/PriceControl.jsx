import { useEffect, useState } from "react";

const PriceControl = ({ handlePriceCloseClick }) => {
  const [data, setData] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const token = localStorage.getItem("authToken");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://herrand-backend-5a39ee15054e.herokuapp.com/api/vehicle-metric/`,
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

  const handleInputChange = (event, vehicleType) => {
    const { value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [vehicleType]: value,
    }));
  };
  const handleFormSubmit = async (event, vehicleType, id) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://herrand-backend-5a39ee15054e.herokuapp.com/api/vehicle-metric/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            cost: inputValues[vehicleType],
          }),
        }
      );

      if (response.ok) {
        console.log(`Successfully updated ${vehicleType} data`);
        // You may want to refetch the data or update the local state after a successful update
        window.location.reload();
      } else {
        console.error("Failed to update data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="terms-privacy-container">
      <div className="top-box-cont">PRICE CONTROL</div>
      <form action="">
        {data.map((item) => (
          <div className="top-box-cont rght flex" key={item.id}>
            <div className="lab-inp-container">
              <label htmlFor={`vehicle-${item.vehicle_type}`}>
                {`I need a ${item.vehicle_type} for this errand`}
              </label>
              <input
                type="text"
                className="pri-con"
                id={`vehicle-${item.vehicle_type}`}
                placeholder={item.cost ? `#${item.cost}` : ""}
                onChange={(event) =>
                  handleInputChange(event, item.vehicle_type)
                }
              />
              <label htmlFor={`vehicle-${item.vehicle_type}`}>
                {item.cost ? "/km" : "/hr"}
              </label>
            </div>

            <button
              className="close-bbtn nobg"
              onClick={(event) =>
                handleFormSubmit(event, item.vehicle_type, item.id)
              }
            >
              Update
            </button>
          </div>
        ))}
      </form>
      <div className="top-box-cont rght flex">
        <button className="close-bbtn" onClick={handlePriceCloseClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PriceControl;
