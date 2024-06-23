import { FaClockRotateLeft } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { FaPeace } from "react-icons/fa";

const CustomerComp = () => {
  return (
    <div className="about-section-container">
      <div className="left-side-about resdas ">
        <img src="images/Image6.png" alt="" />
      </div>
      <div className="right-side-about">
        <div className="advice-txt">ENJOY MORE TIME AND CONVENIENCE</div>
        <h1 className="abt-h1 fnt">Become a Sender</h1>

        <div className="abt-body">
          <FaClockRotateLeft className="arr-lf" />
          <span className="font-bold">Get More Time:</span> Imagine having more
          hours in your day to concentrate on your passions, career, or family.
          Our service takes the burdensome tasks off your plate.
          <br />
          <br />
          <MdSecurity className="arr-lf" />
          <span className="font-bold">Safe and Secure:</span> With our real-time
          tracking and feedback mechanism, you can rely on our platform to
          provide you with the best experience.
          <br />
          <br /> <FaPeace className="arr-lf" />
          <span className="font-bold">Peace of Mind:</span> Rest easy knowing
          that our runners are vetted, reliable, and dedicated to providing you
          with top-tier service. Your transactions are secure, and your
          satisfaction is guaranteed.
        </div>
        <div className="button-cont">
          <button className="down-btn">Download the App</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerComp;
