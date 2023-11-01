import "../css/about.css";
const AboutSection = () => {
  return (
    <div className="about-section-container" id="about-section">
      <div className="left-side-about">
        <img src="images/lan2.jpeg" alt="" />
      </div>
      <div className="right-side-about">
        <div className="advice-txt">Save Time, Stay Organised, Live Better</div>
        <h1 className="abt-h1">About us</h1>

        <div className="abt-body">
          Our mission at Herrands is clear: connect busy individuals like you
          with reliable agents who run errands, so you can reclaim your valuable
          time. We are not just another service; we are your partners in time
          management. We understand the chaos of modern life, and that's why
          we're here to connect you with vetted agents who will run your
          errands, whether it's a simple grocery run, picking up the dry
          cleaning, or more complex tasks. Our goal is simple: to provide you
          with more than just time – we give you freedom, peace of mind, and the
          opportunity to lead a more fulfilling life.
        </div>
        <div className="button-cont">
          <button className="down-btn">Download the App</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
