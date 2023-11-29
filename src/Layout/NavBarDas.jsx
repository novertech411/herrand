import { PiBellSimpleLight } from "react-icons/pi";
import { BiChevronDown } from "react-icons/bi";
import LogModal from "../Modals/LogModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBarDas = ({ pname }) => {
  const [isLogOpen, setIsLogOpen] = useState(false);
  const navigate = useNavigate();

  const gotoLog = () => {
    navigate("/admin/login");
  };

  const handlePreOpenClick = () => {
    setIsLogOpen(!isLogOpen);
  };

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="images/logo.png" alt="" className="logo-img" />
        <div className="logo-text">{pname}</div>
      </div>
      <div className="searc-profile">
        {/* <div className="notif-cont">
          <div className="bell-count"></div>
          <PiBellSimpleLight className="bell" />
        </div> */}
        <div className="profile-container" onClick={handlePreOpenClick}>
          <img
            src="https://image.cnbcfm.com/api/v1/image/107228941-1682027700192-_DSC5658.jpg?v=1682427601&w=1920&h=1080"
            alt=""
          />
          <div className="pro-txt-bx">
            <div className="name-down">
              <div className="pro-text ban">Adeniyi Tosin</div>
              <BiChevronDown className="dww" />
            </div>
            <div className="adm-tst">Admin</div>
          </div>

          {isLogOpen && <LogModal gotoLog={gotoLog} />}
        </div>
      </div>
    </div>
  );
};

export default NavBarDas;
