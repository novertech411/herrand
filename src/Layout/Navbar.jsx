import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const data = [
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
  const scrollOffset = -90;
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar_container">
          <ScrollLink
            to="hero-section"
            smooth={true}
            duration={500}
            onClick={handleToggleItem}
            offset={scrollOffset}
          >
            <Link className="logo">
              <img src="images/alo.jpg" alt="" />
            </Link>
          </ScrollLink>
        </div>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
        <ul id="ul" className={toggleIcon ? "active" : ""}>
          {data.map((item, key) => (
            <li key={key}>
              {item.label === "Home" ? (
                <ScrollLink
                  to="hero-section"
                  smooth={true}
                  duration={500}
                  onClick={handleToggleItem}
                  offset={scrollOffset}
                >
                  {item.label}
                </ScrollLink>
              ) : item.label === "About Us" ? (
                <ScrollLink
                  to="about-section"
                  smooth={true}
                  duration={500}
                  onClick={handleToggleItem}
                  offset={scrollOffset}
                >
                  {item.label}
                </ScrollLink>
              ) : item.label === "Our Features" ? (
                <ScrollLink
                  to="our-feature-section"
                  smooth={true}
                  duration={500}
                  onClick={handleToggleItem}
                  offset={scrollOffset}
                >
                  {item.label}
                </ScrollLink>
              ) : item.label === "How it works" ? (
                <ScrollLink
                  to="how-it-works-section"
                  smooth={true}
                  duration={500}
                  onClick={handleToggleItem}
                  offset={scrollOffset}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <div
                  className="navbar_links"
                  to={item.to}
                  onClick={handleToggleItem}
                  offset={scrollOffset}
                >
                  {item.label}
                </div>
              )}
            </li>
          ))}
          <ScrollLink
            to="download-section"
            smooth={true}
            duration={500}
            onClick={handleToggleItem}
            offset={scrollOffset}
          >
            <div className="nav-login nnon">
              <Link className="login-up ">Download the App</Link>
            </div>
          </ScrollLink>
        </ul>
        <ScrollLink
          to="download-section"
          smooth={true}
          duration={500}
          onClick={handleToggleItem}
          offset={scrollOffset}
        >
          <div className="nav-login nnil">
            <Link className="login-up ">Download the App</Link>
          </div>
        </ScrollLink>
      </nav>
    </div>
  );
};

export default Navbar;
