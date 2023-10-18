import HowCompFirst from "./HowCompFirst";
import HowCompSecond from "./HowCompSecond";

const HowItWorks = () => {
  return (
    <div className="our-feature-container" id="how-it-works-section">
      <div className="our-feature-head">
        <div className="head-tit">How it Works</div>
        <div className="rec-head"></div>

        <div className="inst-works">
          Enjoy Your Newfound Freedom to Focus on what truly matters to You in 4
          Easy Steps
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
