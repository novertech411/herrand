import { useState } from "react";
import { AiOutlineStop, AiOutlineCheckCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const SmallModal = ({ handleDelopenClick }) => {
  const [isActivated, setIsActivated] = useState(false);

  const handleToggle = () => {
    setIsActivated(!isActivated);
  };
  return (
    <>
      <div className="small-modal-container">
        <div
          className={`sus-act-bx flex ${isActivated ? "vate" : ""}`}
          onClick={handleToggle}
        >
          {isActivated ? <AiOutlineCheckCircle /> : <AiOutlineStop />}
          <div className="sus-act-txt">
            {isActivated ? "Activate" : "Suspend"}
          </div>
        </div>
        <div className="sus-act-bx flex" onClick={handleDelopenClick}>
          <RiDeleteBin6Line />
          <div className="sus-act-txt">Delete</div>
        </div>
      </div>
    </>
  );
};

export default SmallModal;
