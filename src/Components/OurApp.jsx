const OurApp = () => {
  return (
    <div className="our-app-container">
      {" "}
      <div className="about-section-container">
        <div className="left-side-about our-app-md">
          <img src="images/fam1.png" alt="" />
        </div>
        <div className="right-side-about app-right-text">
          <h2 className="abt-h1 reddd">
            Giving You All the Time You need to Do More Productive Work
          </h2>

          <div className="abt-body app-bod">
            Our platform is designed to seamlessly connect individuals with
            varying needs – you, the customer, and our dedicated agents. The
            result? A win-win partnership where everyone benefits. You gain more
            time to pursue your passions and achieve your goals. Our agents earn
            by sharing their time with you and helping you run your errands.
          </div>
          <div className="app-badge-box indd">
            <img src="images/bad1.png" alt="" />

            <img src="images/bad2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="down-container">
        <div className="down-left-bx">
          <h2 className="abt-h1 reddd red-dw">
            With our easy to use App that Suits Your Daily Errands
          </h2>
          <div className="abt-body app-bod">
            Our mobile app is meticulously designed to accommodate the diverse
            range of daily errands you encounter. From quick grocery runs and
            essential household tasks to more intricate personal requests, we
            offer a seamless, intuitive platform that simplifies your life and
            empowers you to delegate your daily errands with confidence.
          </div>
          <div className="img-badg">
            <img src="images/bad1.png" alt="" />

            <img src="images/bad2.png" alt="" />
          </div>
        </div>
        <div className="down-right-container">
          <img src="images/nw.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurApp;
