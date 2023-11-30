import { AiOutlineClose, AiFillEye } from "react-icons/ai";
import { BsPeopleFill, BsPersonFillSlash } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { IoIosCall, IoMdMail } from "react-icons/io";

import "./style.css";
import { useState } from "react";
const PreviewAgentDetails = ({
  handlePreviewCloseClick,
  handleViewDetOpenClick,
}) => {
  const [isSuggOpen, setIsSuggOpen] = useState(false);
  const [isCanOpen, setIsCanOpen] = useState(false);
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageMean, setImageMean] = useState("");

  const handleImageMeanChange = (e) => {
    const file1 = e.target.files[0];
    setImageMean(file1.name);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageName(file.name);
  };

  const toggleStatus = () => {
    setIsSuspended(!isSuspended); // toggle the status
  };
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
    <div className="vi-edi-pre-det flex">
      <div className="pre-container-bx ">
        <div className="pre-eit-view-bx">
          <div className="ead-cls flex">
            <div className="head-pre">Agent</div>
            <div className="cls-btn flex" onClick={handlePreviewCloseClick}>
              <AiOutlineClose />
            </div>
          </div>
          <div className="add-pre-edit-view flex">
            <div className="pre-add-txt">A full preview of Agent details </div>
            <div className="edit-view flex" onClick={handleViewDetOpenClick}>
              <AiFillEye />
              <div className="ed-vi">View</div>
            </div>
          </div>
        </div>
        <div className="form-container-pre ndn">
          <table>
            <tr>
              <div className="inpu-sm-bx flex jus-btw">
                <td>
                  <label htmlFor="" className="preview-det">
                    <BsPeopleFill /> First name :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="inp-preview"
                    placeholder="Kenneth "
                  />
                </td>
              </div>
            </tr>
            <tr>
              <div className="inpu-sm-bx flex jus-btw">
                <td>
                  <label htmlFor="" className="preview-det">
                    <BsPeopleFill /> Last name :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="inp-preview"
                    placeholder="Francis"
                  />
                </td>
              </div>
            </tr>
            <tr>
              <div className="inpu-sm-bx flex jus-btw">
                <td>
                  <label htmlFor="" className="preview-det">
                    <IoIosCall /> Mobile Number :
                  </label>
                </td>
                <td>
                  <input
                    type="tel"
                    className="inp-preview"
                    placeholder="090324554332"
                  />
                </td>
              </div>
            </tr>
            <tr>
              <div className="inpu-sm-bx flex jus-btw">
                <td>
                  <label htmlFor="" className="preview-det">
                    <IoMdMail /> Email :
                  </label>
                </td>
                <td>
                  <input
                    type="email"
                    className="inp-preview"
                    placeholder="Knfrancis@gmail.com"
                  />
                </td>
              </div>
            </tr>
            <tr>
              <div className="inpu-sm-bx flex jus-btw">
                <td>
                  <label htmlFor="" className="preview-det">
                    <BiCurrentLocation /> Location :
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    className="inp-preview"
                    placeholder="Kaduna"
                  />
                </td>
              </div>
            </tr>
            <tr>
              <div className="inpu-sm-bx flex jus-btw">
                <td>
                  <label htmlFor="" className="preview-det">
                    <BsPersonFillSlash /> Status :
                  </label>
                </td>
                <td onClick={toggleStatus}>
                  <div
                    className={`actt ${isSuspended ? "susp point" : "point"}`}
                  >
                    {isSuspended ? "Suspended" : "Active"}
                  </div>
                </td>
              </div>
            </tr>
          </table>
          <div className="add-pre-edit-view flex">
            <div className="person-det">Personal Details</div>
          </div>
          <div className="pers-cont-bx">
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Agent Image</label>
                <div className="image-inp-bx flex">
                  <div className="inp-pre mage-ct flex">
                    {imageName || "IMG_65363727218.jpg"}
                  </div>
                  <label htmlFor="imageUpload" className="inpu-pic flex">
                    Browse
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Means of Identification</label>
                <div className="image-inp-bx flex">
                  <div className="inp-pre mage-ct flex">
                    {imageMean || "IMG_65363727218.jpg"}
                  </div>
                  <label htmlFor="imageUploadMean" className="inpu-pic flex">
                    Browse
                  </label>
                  <input
                    type="file"
                    id="imageUploadMean"
                    style={{ display: "none" }}
                    onChange={handleImageMeanChange}
                  />
                </div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Which of this applies to you?</label>
                <input
                  type="text"
                  className="inp-pre"
                  placeholder="I have a car"
                />
              </div>
            </div>
            <div className="inpu-lab">
              <label htmlFor="">Which of these can you do?</label>
              <div className="cat-sear-pref flex">
                <div className="cat-box-sear flex">
                  <div className="txt-err">Pick up an item</div>
                  <AiOutlineClose className="txt-err" />
                </div>
                <div className="cat-box-sear flex">
                  <div className="txt-err">Shop for groceries</div>
                  <AiOutlineClose className="txt-err" />
                </div>
                <div className="cat-box-sear flex">
                  <div className="txt-err">Do data entry</div>
                  <AiOutlineClose className="txt-err" />
                </div>
                <div className="cat-box-sear flex">
                  <div className="txt-err">Carry a household item</div>
                  <AiOutlineClose className="txt-err" />
                </div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Select your hourly rate</label>
                <input type="text" className="inp-pre" placeholder="N2500/hr" />
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Fastest time to a delivery location</label>
                <input type="text" className="inp-pre" placeholder="1hr" />
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">How fast can you deliver?</label>
                <input type="text" className="inp-pre" placeholder="30mins" />
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Bank Name</label>
                <input
                  type="text"
                  className="inp-pre"
                  placeholder="Sterling bank"
                />
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Bank Account Number</label>
                <input
                  type="text"
                  className="inp-pre"
                  placeholder="003848389439"
                />
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Beneficiary Name</label>
                <input
                  type="text"
                  className="inp-pre"
                  placeholder="Kenneth Francis"
                />
              </div>
            </div>
          </div>
          {/* <div className="add-pre-edit-view flex dwn"></div> */}
          <button className="per-btn bbl red-margn">Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default PreviewAgentDetails;
