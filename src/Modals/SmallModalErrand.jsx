import { AiOutlineStop } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const SmallModalErrand = ({ handleDelopenClick }) => {
  return (
    <>
      <div className="small-modal-container">
        <div className={`sus-act-bx flex `}>
          <AiOutlineStop />
          <div className="sus-act-txt">Cancel</div>
        </div>
        <div className="sus-act-bx flex" onClick={handleDelopenClick}>
          <RiDeleteBin6Line />
          <div className="sus-act-txt">Delete</div>
        </div>
      </div>
    </>
  );
};

export default SmallModalErrand;
