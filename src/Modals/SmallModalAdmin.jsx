import { AiOutlineMinusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const SmallModalAdmin = ({ handleAdminDismissCOpen, handleWhatAdminCOpen }) => {
  return (
    <>
      <div className="small-modal-container cincr">
        <div
          className={`sus-act-bx flex adm-smm`}
          onClick={handleWhatAdminCOpen}
        >
          <BiEdit className="chg" />
          <div className="sus-act-txt adm-ttst chg">Edit admin rights</div>
        </div>
        <div
          className="sus-act-bx flex adm-smm"
          onClick={handleAdminDismissCOpen}
        >
          <AiOutlineMinusCircle />
          <div className="sus-act-txt adm-ttst">Dismiss admin</div>
        </div>
      </div>
    </>
  );
};

export default SmallModalAdmin;
