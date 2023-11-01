import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const DismissModal = ({ handleAdminDismissClose }) => {
  return (
    <div className="main-del-bxx">
      <div className="delete-modal-container">
        <div className="top-del" onClick={handleAdminDismissClose}>
          <AiOutlineCloseCircle />
        </div>
        <div className="delet-main">
          <RiDeleteBin6Line />
        </div>
        <div className="delt-info">
          Are you sure you want to dismiss this admin ?
        </div>
        <div className="btn-del-bx flex">
          <button className="btn-del">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DismissModal;
