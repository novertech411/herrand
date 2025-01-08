import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import Container from "../Components/Container";
import logo from "../assets/image/logoherr.png";
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const homePageUrl = "/";
  const location = useLocation();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  const handleToggleItem = () => {
    setToggleIcon(false);
  };

  const scrollOffset = -90;

  useEffect(() => {
    // Check if URL contains a hash
    if (location.hash) {
      // Get the element corresponding to the hash
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        // Scroll smoothly to the target element
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.hash]);

  return (
    <div className=" font-poppins bg-white pt-5">
      <Container>
        <nav className="navbar  ">
          <div className=" w-[150px]">
            <Link className="" to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? (
              <HiX size={30} />
            ) : (
              <FaBars size={30} className="bars" />
            )}
          </div>
          <ul
            id="ul"
            className={` font-poppins  font-[400] flex  items-center  ${
              toggleIcon ? "active" : ""
            }`}
          >
            <li>
              <Link
                className="no-underline text-current font-poppins  font-[400]"
                to={`${homePageUrl}#about-section`}
                onClick={handleToggleItem}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                className="no-underline text-current"
                to={`${homePageUrl}#how-it-works-section`}
                onClick={handleToggleItem}
              >
                How it works
              </Link>
            </li>

            <li className="relative group">
              <span className="cursor-pointer no-underline text-current">
                Support
              </span>
              <ul className="absolute hidden group-hover:block bg-white rounded-md shadow-md z-10 pb-3 text-left w-[120px]">
                <li>
                  <Link
                    className="no-underline text-2xl block  py-3 text-gray-700 hover:text-[#0066f5]"
                    to="/safety"
                  >
                    Safety
                  </Link>
                </li>
                <li>
                  <Link
                    className="no-underline text-2xl block  py-3 text-gray-700 hover:text-[#0066f5]"
                    to="/guides"
                  >
                    Guides
                  </Link>
                </li>

                <li>
                  <Link
                    className="no-underline text-2xl py-3 text-gray-700 hover:text-[#0066f5]"
                    to={`#footer`}
                    onClick={handleToggleItem}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li>
            <Link className="no-underline text-current" to="/guides">
              Guides
            </Link>
          </li>

          <li>
            <Link className="no-underline text-current" to="/safety">
              Safety
            </Link>
          </li> */}

            <ScrollLink
              to="download-section"
              smooth={true}
              duration={5}
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.herrands",
                  "_blank"
                )
              }
              offset={scrollOffset}
            >
              <div className="nav-login nnon">
                <Link
                  className="login-up "
                  to="https://play.google.com/store/apps/details?id=com.herrands"
                >
                  Become a Runner
                </Link>
              </div>
            </ScrollLink>
          </ul>

          <Link className=" hidden md:flex" to="/#download-section">
            <div
              className=" font-poppins  bg-primary border-2 border-primary text-white p-3 font-[500] rounded-2xl hover:bg-white hover:text-primary   cursor-pointer "
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.herrands",
                  "_blank"
                )
              }
            >
              Become a Runner
            </div>
          </Link>

          {/* </ScrollLink> */}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
