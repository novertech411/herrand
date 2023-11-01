import { AiOutlinePlus } from "react-icons/ai";

import AdminCard from "../Components/AdminCard";
import AddAdmin from "./AddAdmin";
import { useState } from "react";
import AdminRight from "./AdminRight";
import DismissModal from "./DismissModal";

const ManageAdminModal = ({ handleAdminOpenClose }) => {
  const [addAdmin, setAddAdmin] = useState("");
  const [WhatAdmin, setWhatAdmin] = useState(false);
  const [isAdminDismiss, setIsAdminDismiss] = useState(false);
  const handleAdminDismissCOpen = () => {
    setIsAdminDismiss(true);
  };

  const handleAdminDismissClose = () => {
    setIsAdminDismiss(false);
  };
  const handleWhatAdminCOpen = () => {
    setWhatAdmin(true);
  };

  const handleWhatAdminClose = () => {
    setWhatAdmin(false);
  };

  const handleAddAdminCOpen = () => {
    setAddAdmin(true);
  };

  const handleAddAdminClose = () => {
    setAddAdmin(false);
  };
  return (
    <>
      {WhatAdmin && (
        <div className="main-modal-overlay layadm-rig">
          <AdminRight handleWhatAdminClose={handleWhatAdminClose} />
        </div>
      )}
      {isAdminDismiss && (
        <div className="main-modal-overlay layadm-rig">
          <DismissModal handleAdminDismissClose={handleAdminDismissClose} />
        </div>
      )}
      <div className="pre-container-bx admin-main-bx">
        <div className="pre-eit-view-bx no-padd">
          <div className="admin-header">
            <div className="dmin">Administrators</div>
          </div>
          <div className="list-all-adm">
            <AdminCard
              name={"Bukunmi Odetayo"}
              position={"Owner"}
              handleWhatAdminCOpen={handleWhatAdminCOpen}
              handleAdminDismissCOpen={handleAdminDismissCOpen}
            />
            <AdminCard
              name={"Oluwatomiwa Awe"}
              position={"Admin"}
              handleWhatAdminCOpen={handleWhatAdminCOpen}
              handleAdminDismissCOpen={handleAdminDismissCOpen}
            />
            <AdminCard
              name={"Ibrahim Jamiu"}
              position={"Admin"}
              handleWhatAdminCOpen={handleWhatAdminCOpen}
              handleAdminDismissCOpen={handleAdminDismissCOpen}
            />
            <AdminCard
              name={"Tesla Balogun"}
              position={"Admin"}
              handleWhatAdminCOpen={handleWhatAdminCOpen}
              handleAdminDismissCOpen={handleAdminDismissCOpen}
            />
            <AdminCard
              name={"Rasheed Badrudeen"}
              position={"Admin"}
              handleWhatAdminCOpen={handleWhatAdminCOpen}
              handleAdminDismissCOpen={handleAdminDismissCOpen}
            />
            <AdminCard
              name={"Kelly Balogun"}
              position={"Admin"}
              handleWhatAdminCOpen={handleWhatAdminCOpen}
              handleAdminDismissCOpen={handleAdminDismissCOpen}
            />
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
    </>
  );
};

export default ManageAdminModal;
