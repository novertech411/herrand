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

const Agent = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-blue-200">
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
