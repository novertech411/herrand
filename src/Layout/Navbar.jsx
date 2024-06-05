import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";
import { useEffect,  useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from 'react-router-dom';
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
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar_container">
          <ScrollLink
            to="hero-section"
            smooth={true}
            duration={5}
            onClick={handleToggleItem}
            offset={scrollOffset}
          >
            <Link className="logo" to="/">
              <img src="images/alo.jpg" alt="" />
            </Link>
          </ScrollLink>
        </div>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? (
            <HiX size={30} />
          ) : (
            <FaBars size={30} className="bars" />
          )}
        </div>
        <ul id="ul" className={toggleIcon ? "active" : ""}>
         
          <li>
            <Link
            className="no-underline text-current"
              to={`${homePageUrl}#about-section`}
              onClick={handleToggleItem}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
            className="no-underline text-current"
              to={`${homePageUrl}#our-feature-section`}
              onClick={handleToggleItem}
            >
              Our Features
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
          <li>
            <Link className="no-underline text-current" to="/guides">
              Guides
            </Link>
          </li>

          <li>
            <Link className="no-underline text-current" to="/safety">
              Safety
            </Link>
          </li>


          <ScrollLink
            to="download-section"
            smooth={true}
            duration={5}
            onClick={handleToggleItem}
            offset={scrollOffset}
          >
            <div className="nav-login nnon">
              <Link className="login-up ">Download the App</Link>
            </div>
          </ScrollLink>
        </ul>
        {/* <ScrollLink
          to="download-section"
          smooth={true}
          duration={5}
          onClick={handleToggleItem}
          offset={scrollOffset}
        > */}
        <div className="nav-login nnil">
          <Link className="login-up" to="/#download-section">
            Download the App
          </Link>
        </div>
        {/* </ScrollLink> */}
      </nav>
    </div>
  );
};

export default Navbar;
