const HeroSection = () => {
  return (
    <div className="hero-section-container" id="hero-section">
      <div className="left-side-hero">
        <div className="head-line-box">
          <div className="main-hero-head">
            <span>Empower Your Day</span> with Time-Sharing
          </div>
          <div className="hero-simple">
            In a fast-paced world where every second counts, the value of your
            time should never be compromised. Herrands connects you with vetted
            runners who share their time with you and handle your errands
            on-demand, giving you the freedom to focus on what truly matters.
            It’s easy, quick and safe!
          </div>
          <div className="app-badge-box">
            <img src="images/bad1.png" alt="" />

            <img src="images/bad2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="right-side-containe">
        <img src="images/land1.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
