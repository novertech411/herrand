import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

const AddMore = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <div className="add-admin-cont">
      <div className="all-inp-admin-bx flex">
        <input
          type="text"
          className={`adm-add-inp`}
          placeholder="Enter Email Address"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div
        className={`cat-box-sear flex cent-jxt mj-tb ${
          inputValue.length === 0 ? "dulll" : ""
        }`}
      >
        <div className="txt-err">Apply changes</div>
        <MdEdit className="app-icon" />
      </div>
    </div>
  );
};

export default AddMore;
