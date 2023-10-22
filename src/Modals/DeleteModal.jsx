import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteModal = ({ handleDelCloseClick }) => {
  return (
    <div className="main-del-bxx">
      <div className="delete-modal-container">
        <div className="top-del" onClick={handleDelCloseClick}>
          <AiOutlineCloseCircle />
        </div>
        <div className="delet-main">
          <RiDeleteBin6Line />
        </div>
        <div className="delt-info">
          Are you sure you want to delete this field ?
        </div>
        <div className="btn-del-bx flex">
          <button className="btn-del">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
