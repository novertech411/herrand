import { useState } from "react";

const ToggleBtn = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className="contro-title-bx flex">
      <div className="perm-txt-eac">{title}</div>

      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" checked={isChecked} onChange={toggleSwitch} />
          <span
            className={isChecked ? "slider round checked" : "slider round"}
          ></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleBtn;
