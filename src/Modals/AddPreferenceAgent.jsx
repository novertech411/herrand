import { AiOutlineClose, AiFillEye } from "react-icons/ai";

import "./style.css";
import LocatedModal from "./LocatedModal";
import { useState } from "react";
import YouCanModal from "./YouCanModal";
import WhatCanModal from "./WhatCanModal";
const AddPreferenceAgent = ({
  handleEditPreCloseClick,
  handlePreOpenClick,
}) => {
  const [isSuggOpen, setIsSuggOpen] = useState(false);
  const [isCanOpen, setIsCanOpen] = useState(false);
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  const handleSuggOpenClick = () => {
    setIsCanOpen(false);
    setIsWhatOpen(false);
    setIsSuggOpen(!isSuggOpen);
  };
  const handleCanClick = () => {
    setIsSuggOpen(false);
    setIsWhatOpen(false);
    setIsCanOpen(!isCanOpen);
  };
  const handlWhatClick = () => {
    setIsCanOpen(false);
    setIsSuggOpen(false);
    setIsWhatOpen(!isWhatOpen);
  };
  return (
    <div className="pre-container-bx">
      <div className="pre-eit-view-bx">
        <div className="ead-cls flex">
          <div className="head-pre">Preferences</div>
          <div className="cls-btn flex" onClick={handleEditPreCloseClick}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="add-pre-edit-view flex">
          <div className="pre-add-txt">Add preferences for agent</div>
          <div className="edit-view flex" onClick={handlePreOpenClick}>
            <AiFillEye />
            <div className="ed-vi">View</div>
          </div>
        </div>
      </div>
      <div className="form-container-pre">
        <div className="inpu-lab">
          <div className="inpu-sm-bx" onClick={handleSuggOpenClick}>
            <label htmlFor="">Where are you located?</label>
            <input
              type="text"
              className="inp-pre"
              placeholder="Where are you located?"
            />
          </div>
          {isSuggOpen && <LocatedModal />}
        </div>
        <div className="inpu-lab">
          <div className="inpu-sm-bx" onClick={handleCanClick}>
            <label htmlFor="">Which of these applies to you?</label>
            <input
              type="text"
              className="inp-pre"
              placeholder="Which of these applies to you?"
            />
          </div>
          {isCanOpen && <YouCanModal />}
        </div>
        <div className="inpu-lab">
          <div className="inpu-sm-bx" onClick={handlWhatClick}>
            <label htmlFor="">Which of these can you do?</label>
            <input
              type="text"
              className="inp-pre"
              placeholder="which of these can you do?"
            />
          </div>
          {isWhatOpen && <WhatCanModal />}
        </div>
        <div className="add-pre-edit-view flex dwn"></div>
        <button className="per-btn bbl">Save changes</button>
      </div>
    </div>
  );
};

export default AddPreferenceAgent;
