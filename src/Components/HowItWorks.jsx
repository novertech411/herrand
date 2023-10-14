import HowCompFirst from "./HowCompFirst";
import HowCompSecond from "./HowCompSecond";

const HowItWorks = () => {
  return (
    <div className="our-feature-container">
      <div className="our-feature-head">
        <div className="head-tit">How it Works</div>
        <div className="rec-head"></div>

        <div className="inst-works">
          Lorem ipsum dolor sit amet consectetur. Lacus porttitor sed arcu
          integer non duis. Eget et odio non
        </div>
      </div>

      <div className="how-it-works-bx">
        <HowCompFirst />
        <HowCompSecond />
      </div>
    </div>
  );
};

export default HowItWorks;
