import MainLayout from "../../Layout/MainLayout";
import { BiSearch, BiDotsHorizontalRounded } from "react-icons/bi";
import Pagination from "react-bootstrap/Pagination";
import { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AgentSmallModal from "../../Modals/AgentSmallModal";
import ViewPreferenceAgent from "../../Modals/ViewPreferenceAgent";
import AddPreferenceAgent from "../../Modals/AddPreferenceAgent";
import PreviewAgentDetails from "../../Modals/PreviewAgentDetails";
import PreviewAgentDetailsView from "../../Modals/PreviewAgentDetailsView";
import DeleteModal from "../../Modals/DeleteModal";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import DownComp from "../../Components/DownComp";
import RunnersComp from "../../Components/RunnersComp";
import Container from "../../Components/Container";
import CustomerComp from "../../Components/CustomerComp";
import BenefitRunner from "../../Components/BenefitRunner";

const Agent = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div className=" mb-[9rem]">
          <h3
            data-aos="flip-left"
            className=" font-poppins  text-center text-black md:text-[38px] text-5xl font-[600] mt-[200px] my-11 "
          >
            {" "}
            <span className="text-primary"> What </span>You Stand to{" "}
            <span className="text-primary">Gain </span> as a
            <span className="text-primary"> Runner</span>{" "}
          </h3>

          <div
            data-aos="flip-right"
            className=" md:w-[60%] w-[90%] mx-auto md:text-[22px]  text-[15px] text-gray-500  py-8 text-center  "
          >
            Are you looking for a flexible way to earn extra income while
            helping others? Join Herrands as a runner and enjoy the freedom of
            setting your own schedule, meeting new people, and making a
            difference in your community.
          </div>

          <BenefitRunner />
        </div>
      </Container>

      <div className="bg-blue-200 pt-11">
        <h2
          data-aos="flip-left"
          className="font-[600] md:text-[38px]  text-5xl font-poppins  my-[50px] text-center "
        >
          How <span className="text-primary"> Herrands </span> Works
        </h2>
        <Container>
          <CustomerComp />
        </Container>
      </div>

      <DownComp />
      <Footer />
    </div>
  );
};

export default Agent;
