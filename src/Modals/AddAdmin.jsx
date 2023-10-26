import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdEdit } from "react-icons/md";

const AddAdmin = ({ handleAddAdminClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [displayedEmails, setDisplayedEmails] = useState([]);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setIsValidEmail(true); // Reset the email validation on input change
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      if (inputValue.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        setDisplayedEmails((prevEmails) => [...prevEmails, inputValue]);
        setInputValue("");
      } else {
        setIsValidEmail(false);
      }
    }
  };

  const handleRemoveEmail = (email) => {
    const filteredEmails = displayedEmails.filter((item) => item !== email);
    setDisplayedEmails(filteredEmails);
  };

  return (
    <div className="add-admin-cont">
      <div className="all-inp-admin-bx flex">
        {displayedEmails.map((email, index) => (
          <div className="input-email flex" key={index}>
            {email}
            <div className="cls-eml" onClick={() => handleRemoveEmail(email)}>
              <AiOutlineClose />
            </div>
          </div>
        ))}

        <input
          type="email"
          className={`adm-add-inp ${!isValidEmail ? "invalid-email" : ""}`}
          placeholder="Enter Email Address"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnter}
        />
      </div>
      <div
        className={`cat-box-sear flex cent-jxt mj-tb ${
          displayedEmails.length === 0 ? "dulll" : ""
        }`}
        onClick={displayedEmails.length === 0 ? null : handleAddAdminClose}
      >
        <div className="txt-err">Apply changes</div>
        <MdEdit className="app-icon" />
      </div>
    </div>
  );
};

export default AddAdmin;
