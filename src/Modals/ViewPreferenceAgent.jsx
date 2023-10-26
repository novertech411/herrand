import { AiOutlineClose } from "react-icons/ai";
import { LuPencilLine } from "react-icons/lu";

import "./style.css";
const ViewPreferenceAgent = ({
  handlePreCloseClick,
  handleEditPreOpenClick,
}) => {
  return (
    <div className="pre-container-bx">
      <div className="pre-eit-view-bx">
        <div className="ead-cls flex">
          <div className="head-pre">Preferences</div>
          <div className="cls-btn flex" onClick={handlePreCloseClick}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="add-pre-edit-view flex">
          <div className="pre-add-txt">Add preferences for agent</div>
          <div className="edit-view flex" onClick={handleEditPreOpenClick}>
            <LuPencilLine />
            <div className="ed-vi">Edit</div>
          </div>
        </div>
      </div>
      <div className="form-container-pre">
        <div className="inpu-lab">
          <label htmlFor="">Where are you located?</label>
          <div
            type="text"
            className="inp-pre flex  coll"
            placeholder="Where are you going?"
          >
            Where are you located?
          </div>
        </div>
        <div className="inpu-lab">
          <label htmlFor="">Which of these applies to you?</label>
          <div type="text" className="inp-pre flex coll" placeholder="">
            Which of these applies to you??
          </div>
        </div>
        <div className="inpu-lab">
          <label htmlFor="">which of these can you do?</label>
          <div type="text" className="inp-pre flex coll" placeholder="">
            which of these can you do?
          </div>
        </div>
        <div className="add-pre-edit-view flex dwn"></div>
        <button className="per-btn">Save changes</button>
      </div>
    </div>
  );
};

export default ViewPreferenceAgent;
