import { useState } from "react";
import Chart from "react-apexcharts";
import "./style.css";

const ChartComp = () => {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "01 Oct",
          "02 Oct",
          "03 Oct",
          "04 Oct",
          "05 Oct",
          "06 Oct",
          "07 Oct",
          "08 Oct",
          "09 Oct",
        ],
        labels: {
          style: {
            colors: ["#000"], // X-axis label color
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: ["#000"], // Y-axis label color
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ["#008FFB", "#00E396"],
      },
      title: {
        text: "User Data",
        align: "left",
        style: {
          color: "#000", // Chart title color
        },
      },
      legend: {
        position: "top",
      },
    },
    series: [
      {
        name: "Customers",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 100],
      },
      {
        name: "Agents",
        data: [10, 70, 5, 20, 90, 40, 60, 80, 167],
      },
    ],
  });

  return (
    <div className="chart-container">
      <div className="button-container">
        <div className="select-buttons">
          <select className="bbb">
            <option value="">Month</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
          </select>
        </div>
      </div>
      <Chart options={state.options} series={state.series} type="bar" />
    </div>
  );
};

export default ChartComp;
