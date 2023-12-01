import { useState } from "react";
import Sidebar from "./Sidebar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import NavBarDas from "./NavBarDas";

const MainLayout = ({ children, pname, tot_user }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseIcon = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="layout-container">
      <div
        className={isCollapsed ? "ctrl-btn lst" : "ctrl-btn"}
        onClick={handleCollapseIcon}
      >
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </div>
      <div className="sidebar-boxxx">
        <Sidebar isCollapsed={isCollapsed} />
      </div>
      <div className="nav-cild">
        <NavBarDas pname={pname} tot_user={tot_user} />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
