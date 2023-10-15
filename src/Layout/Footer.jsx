const Footer = () => {
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
            <div className="txt-foot">Terms of Service</div>
            <div className="txt-foot">Privacy Policy</div>
            <div className="txt-foot">Guides for Agents</div>
            <div className="txt-foot">Safety for Customers</div>
          </div>
          <div className="each-col-cont">
            <div className="txt-foot chg-wd">
              Beside Wema bank <br /> 23rd saint marcus Street <br />
              90001 Abuja
            </div>
          </div>
          <div className="each-col-cont ">
            <div className="txt-foot">090343474859</div>
            <div className="txt-foot">090473484656</div>
            <div className="txt-foot">Herrands@gmail.com</div>
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
