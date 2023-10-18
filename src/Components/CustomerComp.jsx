const CustomerComp = () => {
  return (
    <div className="about-section-container">
      <div className="left-side-about">
        <img src="images/fam5.png" alt="" />
      </div>
      <div className="right-side-about">
        <div className="advice-txt">FOCUS ON YOUR PRIORITY</div>
        <h1 className="abt-h1 fnt">Become a Customer</h1>

        <div className="abt-body">
          - Unlock Productivity: Imagine having more hours in your day to
          concentrate on your passions, career, or family. Our service takes the
          burdensome tasks off your plate.
          <br />
          <br />
          - Convenience: No more juggling hectic schedules to fit in errands.
          Simply delegate them to our trustworthy agents. <br />
          <br />- Peace of Mind: Rest easy knowing that our agents are vetted,
          reliable, and dedicated to providing you with top-tier service. Your
          transactions are secure, and your satisfaction is guaranteed.
        </div>
        <div className="button-cont">
          <button className="down-btn">Download the App</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerComp;
