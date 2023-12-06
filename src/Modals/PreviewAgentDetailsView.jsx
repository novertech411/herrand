import { AiOutlineClose } from "react-icons/ai";
import { BsPeopleFill, BsPersonFillSlash } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { LuPencilLine } from "react-icons/lu";
import { IoIosCall, IoMdMail } from "react-icons/io";

import "./style.css";
import { useEffect, useState } from "react";
const PreviewAgentDetailsView = ({
  handleViewDetCloseClick,
  handlePreviewOpenClick,
  selectedUserId,
}) => {
  const [isSuggOpen, setIsSuggOpen] = useState(false);
  const [isCanOpen, setIsCanOpen] = useState(false);
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [imageName, setImageName] = useState("");
  const [imageMean, setImageMean] = useState("");
  const [adata, setAdata] = useState([]);
  const token = localStorage.getItem("authToken");

  const data = adata;
  // const toggleStatus = () => {
  //   setIsSuspended(!isSuspended); // toggle the status
  // };

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
  const aData = async () => {
    try {
      const response = await fetch(
        `https://herrand-backend-5a39ee15054e.herokuapp.com/accounts/agent/${selectedUserId}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setAdata(result);
      // Assuming 10 items per page, adjust accordingly
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    aData();
  }, []);
  return (
    <div className="vi-edi-pre-det flex">
      <div className="pre-container-bx ">
        <div className="pre-eit-view-bx">
          <div className="ead-cls flex">
            <div className="head-pre">Agent </div>
            <div className="cls-btn flex" onClick={handleViewDetCloseClick}>
              <AiOutlineClose />
            </div>
          </div>
          <div className="add-pre-edit-view flex">
            <div className="pre-add-txt">A full preview of Agent details </div>
            {/* <div className="edit-view flex" onClick={handlePreviewOpenClick}>
              <LuPencilLine />
              <div className="ed-vi">Edit</div>
            </div> */}
          </div>
        </div>
        <div className="form-container-pre ndn">
          <table>
            <tr>
              <div className="inpu-sm-bx flex jus-btw view-det">
                <td>
                  <label htmlFor="" className="preview-det">
                    <BsPeopleFill /> First name :
                  </label>
                </td>
                <td>
                  <div className="inp-preview">{data?.user?.first_name}</div>
                </td>
              </div>
            </tr>
            <tr>
              <div className="inpu-sm-bx flex jus-btw view-det">
                <td>
                  <label htmlFor="" className="preview-det">
                    <BsPeopleFill /> Last name :
                  </label>
                </td>
                <td>
                  <div className="inp-preview">{data?.user?.last_name}</div>
                </td>
              </div>
            </tr>
            <tr>
              <div className="inpu-sm-bx flex jus-btw view-det">
                <td>
                  <label htmlFor="" className="preview-det">
                    <IoIosCall /> Mobile Number :
                  </label>
                </td>
                <td>
                  <div className="inp-preview">{data?.user?.phone_number}</div>
                </td>
              </div>
            </tr>
            <tr>
              <div className="inpu-sm-bx flex jus-btw view-det">
                <td>
                  <label htmlFor="" className="preview-det">
                    <IoMdMail /> Email :
                  </label>
                </td>
                <td>
                  <div className="inp-preview">{data?.user?.email}</div>
                </td>
              </div>
            </tr>
            <tr>
              <div className="inpu-sm-bx flex jus-btw view-det">
                <td>
                  <label htmlFor="" className="preview-det">
                    <BiCurrentLocation /> Location :
                  </label>
                </td>
                <td>
                  <div className="inp-preview">{data?.state}</div>
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
                <td>
                  <div
                    className={`actt ${isSuspended ? "susp point" : "point"}`}
                  >
                    {isSuspended ? data?.user?.status : data?.user?.status}
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
                    {data?.photo || "IMG_65363727218.jpg"}
                  </div>
                  <label htmlFor="imageUpload" className="inpu-pic flex">
                    Browse
                  </label>
                </div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Means of Identification</label>
                <div className="image-inp-bx flex">
                  <div className="inp-pre mage-ct flex">
                    {data.id_file || "IMG_65363727218.jpg"}
                  </div>
                  <label htmlFor="imageUploadMean" className="inpu-pic flex">
                    Browse
                  </label>
                </div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Which of this applies to you?</label>
                <div className="inp-pre flex">I have a car</div>
              </div>
            </div>
            <div className="inpu-lab">
              <label htmlFor="">Which of these can you do?</label>
              <div className="cat-sear-pref flex">
                <div className="cat-box-sear flex">
                  <div className="txt-err">Pick up an item</div>
                </div>
                <div className="cat-box-sear flex">
                  <div className="txt-err">Shop for groceries</div>
                </div>
                <div className="cat-box-sear flex">
                  <div className="txt-err">Do data entry</div>
                </div>
                <div className="cat-box-sear flex">
                  <div className="txt-err">Carry a household item</div>
                </div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Select your hourly rate</label>
                <div className="inp-pre flex">{data?.pay_per_hour}/hr</div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Fastest time to a delivery location</label>
                <div className="inp-pre flex">{data?.arrival_speed}</div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">How fast can you deliver?</label>
                <div className="inp-pre flex">{data?.delivery_speed}</div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Bank Name</label>
                <div className="inp-pre flex">{data?.bank_name} bank</div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Bank Account Number</label>
                <div className="inp-pre flex">{data?.account_number}</div>
              </div>
            </div>
            <div className="inpu-lab">
              <div className="inpu-sm-bx">
                <label htmlFor="">Beneficiary Name</label>
                <div className="inp-pre flex">{data?.beneficiary_name}</div>
              </div>
            </div>
          </div>
          {/* <div className="add-pre-edit-view flex dwn"></div> */}
          {/* <button className="per-btn bbl red-margn">Save changes</button> */}
        </div>
      </div>
    </div>
  );
};

export default PreviewAgentDetailsView;
