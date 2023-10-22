import { AiOutlineClose, AiFillEye } from "react-icons/ai";
import { BsFillCartFill, BsPhoneVibrateFill } from "react-icons/bs";
import { GiOfficeChair, GiPostOffice } from "react-icons/gi";
import { RiEBike2Fill } from "react-icons/ri";

import "./style.css";
const AddPreferenceCos = ({ handleEditPreCloseClick, handlePreOpenClick }) => {
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
          <div className="pre-add-txt">Add preferences for customer</div>
          <div className="edit-view flex" onClick={handlePreOpenClick}>
            <AiFillEye />
            <div className="ed-vi">View</div>
          </div>
        </div>
      </div>
      <div className="form-container-pre">
        <div className="inpu-lab">
          <label htmlFor="">Where are you going?</label>
          <input
            type="text"
            className="inp-pre"
            placeholder="Where are you going?"
          />
        </div>
        <div className="inpu-lab">
          <label htmlFor="">What errand are you running today?</label>
          <input
            type="text"
            className="inp-pre"
            placeholder="What errand are you running today??"
          />
        </div>
        <div className="inpu-lab">
          <label htmlFor="">Search by category</label>
          <div className="cat-sear-pref flex">
            <div className="cat-box-sear flex">
              <RiEBike2Fill />
              <div className="txt-err">Routine errands </div>
            </div>
            <div className="cat-box-sear flex">
              <BsFillCartFill />
              <div className="txt-err">Grocery shopping</div>
            </div>
            <div className="cat-box-sear flex">
              <BsPhoneVibrateFill />
              <div className="txt-err">Social media</div>
            </div>
            <div className="cat-box-sear flex">
              <GiOfficeChair />
              <div className="txt-err">Office duty</div>
            </div>
            <div className="cat-box-sear flex">
              <GiPostOffice />
              <div className="txt-err">Household chores</div>
            </div>
          </div>
        </div>
        <button className="per-btn bbl">Save changes</button>
      </div>
    </div>
  );
};

export default AddPreferenceCos;
