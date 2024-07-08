import { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTiktok } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = ({ handleTermsOpenClick, handlePrivacyOpenClick }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="footer-container" id="footer">
      <div className="footer-main-container">
        <div className="footer-logo-bx">
          <img src="images/alof.jpg" alt="" className="one-mg" />
          <div className="badge-app-cont">
            <img src="images/bad1.png" alt="" />
            <img src="images/bad2.png" alt="" />
          </div>
        </div>
        <div className="the-all-footer-txt">
          <div className="each-col-cont">
            <div className="txt-foot">
              <Link to="/terms" className="no-underline text-white">
                Terms of Service
              </Link>
            </div>
            <div className="txt-foot">
              <Link to="/privacy" className="no-underline text-white">
                Privacy Policy
              </Link>
            </div>
            <div className="txt-foot">
              <Link to="/guides" className="no-underline text-white">
                Guides for Runners
              </Link>
            </div>
            <div className="txt-foot">
              <Link to="/safety" className="no-underline text-white">
                Safety for Senders
              </Link>
            </div>
          </div>
          <div className="each-col-cont">
            <div className="txt-foot chg-wd">
              Vibranium Valley, <br />
              42, Local Airport Road, 
              <br />
              Ikeja, Lagos.
            </div>
          </div>
          <div className="each-col-cont ">
            <div className="txt-foot">+234704 418 4306</div>
            <div className="txt-foot">+234701 526 3608</div>
            <div className="txt-foot">send@herrands.com </div>
            <div className="social-mdia">
              <a href="https://web.facebook.com/sendherrands">
                <BsFacebook className="face" />
              </a>
              <a href="https://www.instagram.com/sendherrands/">
                <AiFillInstagram className="instam" />
              </a>
              <a href="https://www.tiktok.com/@sendherrands">
                <BsTiktok className="" />
              </a>
              <a href="https://www.youtube.com/@sendherrands">
                <FaYoutube className="tube" />
              </a>
              <a href="https://twitter.com/sendherrands">
                <FaXTwitter className="" />
              </a>
              <a href="https://www.linkedin.com/company/sendherrands/">
                <AiFillLinkedin className="lin" />
              </a>
              {/* <a href="https://web.facebook.com/sendherrands">
                <img src="/images/fa.png" alt="" />
              </a>
              <a href="https://www.instagram.com/sendherrands/">
                <img src="/images/insta.png" alt="" />
              </a>
              <a href="https://www.tiktok.com/@sendherrands">
                <img src="/images/tik.png" alt="" />
              </a>
              <a href="https://www.youtube.com/@sendherrands">
                <img src="/images/tube.png" alt="" />
              </a>
              <a href="https://twitter.com/sendherrands">
                <img src="/images/x.png" alt="" />
              </a>
              <a href="https://www.linkedin.com/company/sendherrands/">
                <img src="/images/in.png" alt="" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <hr className="line-foot" />
      <div className="pol-copy">
        <div className="copp"></div>
        <div className="copp">
          ©{currentYear} Herrands Solutions Limited. All rights reserved
        </div>
        <div className="copp"></div>
      </div>
    </div>
  );
};

export default Footer;
