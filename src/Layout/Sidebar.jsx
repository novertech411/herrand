import { RxDashboard } from "react-icons/rx";
import { BsPeople } from "react-icons/bs";
import { MdOutlinePersonOutline, MdSupportAgent } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import "./stylemain.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isCollapsed }) => {
  return (
    <div
      className={isCollapsed ? "sidebar-container  nil" : "sidebar-container"}
    >
      <div className="sidebar-box">
        <div className="logo-side">
          <img src="images/logo.png" alt="" />
        </div>
        <div className="sidebar-items">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <RxDashboard className="side-icon " />
            <div className="sidebar-text">Dashboard</div>
          </NavLink>
          <NavLink
            to="/customer"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <MdOutlinePersonOutline className="side-icon " />
            <div className="sidebar-text">Customers</div>
          </NavLink>
          <NavLink
            to="/agent"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <BsPeople className="side-icon " />
            <div className="sidebar-text">Agents</div>
          </NavLink>
          <NavLink
            to="/errand"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <RiArrowGoBackFill className="side-icon " />
            <div className="sidebar-text">Errands</div>
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <FaHandHoldingUsd className="side-icon " />
            <div className="sidebar-text">Payouts</div>
          </NavLink>
          <NavLink
            to="/people"
            className={({ isActive }) =>
              isActive ? "active_link side-item" : "side-item"
            }
          >
            <MdSupportAgent className="side-icon " />
            <div className="sidebar-text">Support</div>
          </NavLink>

          {/* <div className="side-item lout">
            <IoLogOutOutline className="side-icon " />
            <div className="sidebar-text">Sign out</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
