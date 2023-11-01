import { BiDotsVerticalRounded } from "react-icons/bi";
import SmallModalAdmin from "../Modals/SmallModalAdmin";
import { useState } from "react";

const AdminCard = ({
  name,
  position,
  handleWhatAdminCOpen,
  handleAdminDismissCOpen,
}) => {
  const [isAdminMdOpen, setIsAdminMdOpen] = useState(false);

  const handleAdmiMdClick = () => {
    setIsAdminMdOpen(!isAdminMdOpen);
  };

  return (
    <div className="admin-card-cont flex">
      <div className="image-details-admin flex">
        <img src="images/land5.jpg" alt="" />
        <div className="detal-admin-bx">
          <div className="admin-name">{name}</div>
          <div className="position-admin">{position}</div>
        </div>
      </div>
      <div className="icon-ddot-bx">
        {position !== "Owner" && (
          <BiDotsVerticalRounded
            className="dot-adm"
            onClick={handleAdmiMdClick}
          />
        )}
        {isAdminMdOpen && (
          <div className="admin-small-md">
            <SmallModalAdmin
              handleWhatAdminCOpen={() => {
                handleWhatAdminCOpen();
                setIsAdminMdOpen(false);
              }}
              handleAdminDismissCOpen={handleAdminDismissCOpen}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCard;
