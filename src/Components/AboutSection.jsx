import { Link as ScrollLink } from "react-scroll";
import "../css/about.css";

const AboutSection = () => {
  const scrollOffset = -90;

  return (
    <div className="about-section-container" id="about-section">
      <div className="left-side-about">
        <img src="/images/Image2.png" alt="" autoPlay loop />
      </div>
      <div className="right-side-about">
        <div className="advice-txt text-[#0066f5]">
          Save Time. Stay Organised. Live Better.
        </div>
        <h1 className="abt-h1">About us</h1>

        <div className="abt-body">
          Our mission at Herrands is to connect busy individuals like you with
          reliable people who will run your errands, so you can reclaim your
          valuable time and enjoy convenience. We are not just another service;
          we are your partners in time management. We understand the chaos of
          modern life, and that's why we're here to connect you with vetted
          runners who will run your errands, whether it's a simple grocery run,
          picking up the dry cleaning, or more complex tasks. Our goal is to
          provide you with more than just time and give you freedom, peace of
          mind, and the opportunity to lead a more fulfilling life.
        </div>
        <ScrollLink
          to="download-section"
          smooth={true}
          duration={500}
          offset={scrollOffset}
        >
          <div className="button-cont">
            <button className="down-btn">Download the App</button>
          </div>
        </ScrollLink>
      </div>
    </div>
  );
};

export default AboutSection;
