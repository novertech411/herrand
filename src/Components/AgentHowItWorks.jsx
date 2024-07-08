import { FaCheckCircle, FaUserPlus } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";

const AgentHowItWorks = () => {
  return (
    <div className="our-feature-container" id="how-it-works-section">
      <div className="our-feature-head">
        <div className="head-tit">How it Works</div>
        <div className="rec-head"></div>

        <div className="inst-works">
          Turn Your Free Time to Cash in 4 Easy Steps
        </div>
      </div>

      <div className="how-it-works-bx">
        <div className="about-section-container works">
          <div className="left-side-about famh">
            <img src="images/Image5.png" alt="" />
          </div>
          <div className="right-side-about">
            <h1 className="abt-h1 fnt incrc-head">Getting Started</h1>

            <div className="abt-body incr">
              <p className="">
                <span className="float-start font-bold text-[#0066f5]">
                  Step 1
                </span>
                <FaUserPlus className=" float-start text-[#0066f5] mx-3 text-3xl" />
                <span className="font-bold  mr-3">Sign Up:</span>
                Download our app, create your profile and complete the vetting
                process.
              </p>

              <br />

              <p className="">
                <span className="float-start font-bold text-[#0066f5]">
                  Step 2
                </span>
                <FaBell className=" float-start text-[#0066f5] mx-3 text-3xl" />
                <span className="font-bold  mr-3">Get Notified:</span>
                Receive notifications of new errands in your area and choose the
                ones that best suits you.
              </p>

              <br />

              <p className="">
                <span className="float-start font-bold text-[#0066f5]">
                  Step 3
                </span>
                <FaCheckCircle className=" float-start text-[#0066f5] mx-3 text-3xl" />
                <span className="font-bold  mr-3">Complete Errands:</span>
                Run the errands you accept effectively to improve your ratings,
                win your sender's trust and get more opportunities.
              </p>
              <br />

              <p className="">
                <span className="float-start font-bold text-[#0066f5]">
                  Step 4
                </span>
                <BiMoney className=" float-start text-[#0066f5] mx-3 text-3xl" />
                <span className="font-bold  mr-3">Get Paid:</span>
                Anything sweeter than credit alerts? Get your money directly
                into your bank account within minutes!
              </p>
            </div>
          </div>
          <div className="button-cont">
            {/* <button className="down-btn">Download the App</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentHowItWorks;
