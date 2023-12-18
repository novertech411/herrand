import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const response = await axios.post(
        `https://jellyfish-app-gd9q8.ondigitalocean.app/accounts/token/obtain/`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        // console.log(response);
        localStorage.setItem("authToken", response.data.access);
        setMessage("Login Succefully");
        navigate("/dashboard");
      } else {
        console.log("dkkl");
      }
    } catch (error) {
      if (error.response) {
        // console.log(error.response);
        setMessage("Something went wrong");

        // handleErrorClick(error.response.data.error);
      } else {
        console.log("An error occurred during the login process.");
      }
    }
  };
  return (
    <div className="admin-login-container">
      <div className="log-bx-cont">
        <div className="admin-top">
          <div className="admin-top-txt">Welcome</div>
          <div className="small-ad-tst">Login to resume your session...</div>
        </div>
        <div className="mess">{message}</div>
        <div className="tit-top">Admin Login</div>
        <form action="" onSubmit={handleLogin}>
          <input
            type="email"
            className="adm-inp"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="adm-inp"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="log-bbtn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
