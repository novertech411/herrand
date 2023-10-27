import { AiOutlinePlus } from "react-icons/ai";

import AdminCard from "../Components/AdminCard";
import AddAdmin from "./AddAdmin";
import { useState } from "react";

const ManageAdminModal = ({ handleAdminOpenClose }) => {
  const [addAdmin, setAddAdmin] = useState("");

  const handleAddAdminCOpen = () => {
    setAddAdmin(true);
  };

  const handleAddAdminClose = () => {
    setAddAdmin(false);
  };
  return (
    <div className="pre-container-bx admin-main-bx">
      <div className="pre-eit-view-bx no-padd">
        <div className="admin-header">
          <div className="dmin">Administrators</div>
        </div>
        <div className="list-all-adm">
          <AdminCard name={"Bukunmi Odetayo"} position={"Owner"} />
          <AdminCard name={"Oluwatomiwa Awe"} position={"Admin"} />
          <AdminCard name={"Ibrahim Jamiu"} position={"Admin"} />
          <AdminCard name={"Tesla Balogun"} position={"Admin"} />
          <AdminCard name={"Rasheed Badrudeen"} position={"Admin"} />
          <AdminCard name={"Kelly Balogun"} position={"Admin"} />
        </div>
        {addAdmin && <AddAdmin handleAddAdminClose={handleAddAdminClose} />}
        <div className="bottom-adm-bx flex just-btw">
          <div
            className="cat-box-sear flex cent-jxt"
            onClick={handleAddAdminCOpen}
          >
            <div className="txt-err">Add Administrator</div>
            <AiOutlinePlus className="txt-err" />
          </div>
          <div className="cls-save-btn flex" onClick={handleAdminOpenClose}>
            Close
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAdminModal;
