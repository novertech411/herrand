const Footer = () => {
  return (
    <div className="footer-container">
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
            <div className="txt-foot">About Us</div>
            <div className="txt-foot">Our Features</div>
            <div className="txt-foot">How it works</div>
            <div className="txt-foot">Support</div>
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
        <div className="copp">COPYRIGHT BY HERRAND </div>
        <div className="copp">PRIVACY POLICY</div>
      </div>
    </div>
  );
};

export default Footer;
