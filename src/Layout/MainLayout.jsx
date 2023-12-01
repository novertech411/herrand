import { useState } from "react";
import Sidebar from "./Sidebar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import NavBarDas from "./NavBarDas";
import PriceControl from "../Pages/Dashboard/PriceControl";

const MainLayout = ({ children, pname, tot_user }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const handlePriceOpenClick = () => {
    setIsPriceOpen(true);
  };
  const handlePriceCloseClick = () => {
    setIsPriceOpen(false);
  };

  const handleCollapseIcon = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      {" "}
      {isPriceOpen && (
        <div className="land-lay flex">
          <PriceControl handlePriceCloseClick={handlePriceCloseClick} />
        </div>
      )}
      <div className="layout-container">
        <div
          className={isCollapsed ? "ctrl-btn lst" : "ctrl-btn"}
          onClick={handleCollapseIcon}
        >
          {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
        </div>
        <div className="sidebar-boxxx">
          <Sidebar
            isCollapsed={isCollapsed}
            handlePriceOpenClick={handlePriceOpenClick}
          />
        </div>
        <div className="nav-cild">
          <NavBarDas pname={pname} tot_user={tot_user} />
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
