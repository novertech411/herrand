import { BiDotsVerticalRounded } from "react-icons/bi";

const AdminCard = () => {
  return (
    <div className="admin-card-cont flex">
      <div className="image-details-admin flex">
        <img src="images/land5.jpg" alt="" />
        <div className="detal-admin-bx">
          <div className="admin-name">Bukunmi Odetayo</div>
          <div className="position-admin">Admin</div>
        </div>
      </div>
      <BiDotsVerticalRounded className="dot-adm" />
    </div>
  );
};

export default AdminCard;
