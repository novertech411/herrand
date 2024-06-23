import { FaDownload } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const CustomerHowItWorks = () => {
  return (
    <div className="our-feature-container" id="how-it-works-section">
      <div className="our-feature-head">
        <div className="head-tit">How it Works</div>
        <div className="rec-head"></div>

        <div className="inst-works">
          Enjoy Your Newfound Lifestyle in 4 Easy Steps
        </div>
      </div>

      <div className="how-it-works-bx">
        <div className="about-section-container works">
          <div className="left-side-about famh">
            <img src="images/Image7.png" alt="" />
          </div>
          <div className="right-side-about">
            <h1 className="abt-h1 fnt incrc-head">Getting Started</h1>

            <div className="abt-body incr">
              <p className="">
                <span className="float-start font-bold text-[#0066f5]">
                  Step 1
                </span>
                <FaDownload className=" float-start text-[#0066f5] mx-3 text-3xl" />
                <span className="font-bold  mr-3">
                  Download the App:
                </span>
                Get started by downloading our user-friendly mobile app on your
                iOS or Android device.
              </p>
              <br />

              <p className="">
                <span className="float-start font-bold text-[#0066f5]">
                  Step 2
                </span>
                <MdPersonAdd className=" float-start text-[#0066f5] mx-3 text-3xl" />
                <span className="font-bold mr-3">
                  Create Your Account:
                </span>
                Our app's user-friendly interface ensures that creating your
                account is a breeze. In just a few minutes, you'll have your
                profile up and running, and you'll be well on your way to
                managing your time more efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section-container worker">
          <div className="left-side-about">
            <h1 className="abt-h1 fnt incrc-head">
              Experience the Era of Limitless Hours
            </h1>

            <div className="abt-body incr">
              <p className="">
                <span className="float-start font-bold text-[#0066f5]">
                  Step 3
                </span>
                <FaPaperPlane className=" float-start text-[#0066f5] mx-3 text-3xl" />
                <span className="font-bold mr-3">
                  Send Your Errand:
                </span>
                Our intuitive platform makes it easy for you to request
                assistance with your errands. Simply select the type of errand
                or task you need help with, and we'll connect you with a trusted
                agent who will run it for you.
              </p>

              <br />

              <p className="">
                <span className="float-start font-bold text-[#0066f5]">
                  Step 4
                </span>
                <FaMapMarkerAlt className=" float-start text-[#0066f5] mx-3 text-3xl" />
                <span className="font-bold  mr-3">
                  Track and Relax:
                </span>
                Sit back, relax, and monitor the progress of your errand with
                your dedicated agent while you enjoy convenience and more time.
              </p>
            </div>
            <div className="button-cont">
              {/* <button className="down-btn">Download the App</button> */}
            </div>
          </div>
          <div className="right-side-about">
            <img
              className="w-[40%] translate-x-[80%] "
              src="images/Image8.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHowItWorks;
