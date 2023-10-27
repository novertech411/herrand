import { BiDotsVerticalRounded } from "react-icons/bi";

const AdminCard = ({ name, position }) => {
  return (
    <div className="admin-card-cont flex">
      <div className="image-details-admin flex">
        <img src="images/land5.jpg" alt="" />
        <div className="detal-admin-bx">
          <div className="admin-name">{name}</div>
          <div className="position-admin">{position}</div>
        </div>
      </div>
      <BiDotsVerticalRounded className="dot-adm" />
    </div>
  );
};

export default AdminCard;
