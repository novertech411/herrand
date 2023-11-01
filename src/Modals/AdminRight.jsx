// import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ToggleBtn from "../Components/ToggleBtn";

const AdminRight = ({ handleWhatAdminClose }) => {
  return (
    <div className="admin-right-container">
      <div className="admin-rigt-box">
        <div className="top-adm-rit flex">
          <AiOutlineArrowLeft
            onClick={handleWhatAdminClose}
            className="backcls"
          />
          <div className="main-addm">Admin Right</div>
        </div>
        <div className="am-profil flex">
          <img src="images/land5.jpg" alt="" />
          <div className="admin-nnamm">Oluwatomiwa Awe</div>
        </div>
        <div className="perm-txt">What can this admin do?</div>
        <div className="perm-all-box">
          <ToggleBtn title={"Suspend Users"} />
          <ToggleBtn title={"Delete Users"} />
          <ToggleBtn title={"Delete Errands"} />
          <ToggleBtn title={"Cancel Errands"} />
          <ToggleBtn title={"Cancel Payout"} />
          <ToggleBtn title={"Delete Payout"} />
          <ToggleBtn title={"Manage Support"} />
          <ToggleBtn title={"Add New Admin"} />
        </div>

        <div className="save-btn">
          <button className="sv-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AdminRight;
