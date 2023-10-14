import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/jobslisting",
  },
  {
    label: "Our Features",
    to: "/bl",
  },
  {
    label: "How it works",
    to: "/b",
  },
  {
    label: "Contact Us",
    to: "/blog",
  },
];
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  const handleToggleItem = () => {
    setToggleIcon(false);
  };
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar_container">
          <Link to={"/"} className="logo">
            <img src="images/alo.jpg" alt="" />
          </Link>
        </div>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
        <ul id="ul" className={toggleIcon ? "active" : ""}>
          {data.map((item, key) => (
            <li key={key}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "navbar_links"
                }
                to={item.to}
                onClick={handleToggleItem}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <div className="nav-login nnon">
            <Link to={"/login"} className="login-up ">
              Download the App
            </Link>
          </div>
        </ul>
        <div className="nav-login nnil">
          <Link to={"/login"} className="login-up ">
            Download the App
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
