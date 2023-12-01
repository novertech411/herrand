import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Password = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleOne, setPasswordVisibleOne] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibilityOne = () => {
    setPasswordVisibleOne(!passwordVisibleOne);
  };

  return (
    <div className="admin-login-container">
      <div className="log-bx-cont">
        <div className="tit-top">Set Your Password</div>
        <form action="">
          <div className="pass-con">
            <input
              type={passwordVisible ? "text" : "password"}
              className="adm-inp"
              placeholder="Password"
            />

            <div className="eye-box" onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <BsEyeSlashFill className="eye-icon" />
              ) : (
                <BsEyeFill className="eye-icon" />
              )}
            </div>
          </div>
          <div className="pass-con">
            <input
              type={passwordVisibleOne ? "text" : "password"}
              className="adm-inp"
              placeholder="Confirm Password"
            />

            <div className="eye-box" onClick={togglePasswordVisibilityOne}>
              {passwordVisibleOne ? (
                <BsEyeSlashFill className="eye-icon" />
              ) : (
                <BsEyeFill className="eye-icon" />
              )}
            </div>
          </div>

          <button className="log-bbtn">Set Password</button>
        </form>
      </div>
    </div>
  );
};

export default Password;
