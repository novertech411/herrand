// import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
// import { BsFacebook, BsTiktok } from "react-icons/bs";
// import { FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
const Footer = ({ handleTermsOpenClick }) => {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-main-container">
        <div className="footer-logo-bx">
          <img src="images/logo.png" alt="" className="one-mg" />
          <div className="badge-app-cont">
            <img src="images/bad1.png" alt="" />
            <img src="images/bad2.png" alt="" />
          </div>
        </div>
        <div className="the-all-footer-txt">
          <div className="each-col-cont">
            <div className="txt-foot" onClick={handleTermsOpenClick}>
              Terms of Service
            </div>
            <div className="txt-foot">Privacy Policy</div>
            <div className="txt-foot">Guides for Agents</div>
            <div className="txt-foot">Safety for Customers</div>
          </div>
          <div className="each-col-cont">
            <div className="txt-foot chg-wd">
              Gwarimpa, 900108 <br />
              FCT, Nigeria
            </div>
          </div>
          <div className="each-col-cont ">
            <div className="txt-foot">0704 418 4306</div>
            <div className="txt-foot">send@herrands.com </div>
            <div className="social-mdia">
              {/* <BsFacebook className="face" />
              <AiFillInstagram />
              <BsTiktok />
              <FaYoutube />
              <FaXTwitter />
              <AiFillLinkedin /> */}
              <a href="https://web.facebook.com/sendherrands">
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
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="line-foot" />
      <div className="pol-copy">
        <div className="copp"></div>
        <div className="copp">
          ©2023 Herrands Solutions Limited. All rights reserved
        </div>
        <div className="copp"></div>
      </div>
    </div>
  );
};

export default Footer;
