const OurApp = () => {
  return (
    <div className="our-app-container">
      {" "}
      <div className="about-section-container">
        <div className="left-side-about our-app-md">
          <img src="images/Image3.png" alt="" />
        </div>
        <div className="right-side-about app-right-text">
          <h2 className="abt-h1 reddd">
            Giving You All the Time You need to Do What You Want
          </h2>

          <div className="abt-body app-bod">
            Our platform is designed to seamlessly connect individuals with
            varying needs – you, the customer who needs to send someone on
            errands, and our dedicated agents who are available on-demand to run
            your errands. The result? A win-win partnership where everyone
            benefits. You gain more time to pursue your passions and achieve
            your goals. Our agents earn by sharing their time with you and
            helping you run your errands.
          </div>
          <div className="flex  sm:w-[80%] lg:w-[60%] xl:w-[60%]">
            <img
              className="w-1/2 h-[64px] p-2 xl:h-[80px] "
              src="images/bad1.png"
              alt=""
            />

            <img
              className="w-1/2 h-[64px] p-2 xl:h-[80px] "
              src="images/bad2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="down-container">
        <div className="down-left-bx">
          <h2 className="abt-h1 reddd red-dw">
            With our easy to use Platform that Suits Your Daily Errands
          </h2>
          <div className="abt-body app-bod">
            We accommodate the diverse range of daily errands you encounter.
            From quick delivery runs, moving the heavy goods you just bought and
            essential household tasks to more intricate personal requests,
            Herrands offers a seamless and intuitive marketplace that simplifies
            your life and empowers you to delegate your daily errands with
            confidence.
          </div>
          <div className="flex  sm:w-[80%] lg:w-[60%] xl:w-[60%]">
            <img
              className="w-1/2 h-[64px] p-2 xl:h-[80px] "
              src="images/bad1.png"
              alt=""
            />

            <img
              className="w-1/2 h-[64px] p-2 xl:h-[80px] "
              src="images/bad2.png"
              alt=""
            />
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
