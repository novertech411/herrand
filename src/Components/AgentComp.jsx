import { FaArrowRightLong } from "react-icons/fa6";

const AgentComp = () => {
  return (
    <div className="about-section-container">
      <div className="left-side-about ant">
        <img src="images/ant2.jpg" alt="" />
      </div>
      <div className="right-side-about">
        <div className="advice-txt">MAKE MONEY WITH YOUR FREE TIME</div>
        <h1 className="abt-h1 fnt">Become an Agent</h1>

        <div className="abt-body">
          <FaArrowRightLong className="arr-lf" /> Earn-as-You-Go: If you're
          looking to turn your available time into a source of income, our
          platform is the ideal solution for you. Get paid for running errands
          and helping others. <br />
          <br />
          <FaArrowRightLong className="arr-lf" /> Flexibility: We value your
          freedom. Work on your schedule and choose errands that suit you.
          Whether you want to run errands occasionally or make it a regular gig,
          the choice is yours. <br />
          <br /> <FaArrowRightLong className="arr-lf" /> Community: Join our
          thriving community of like-minded individuals making a difference. By
          becoming an agent, you're not only helping others; you're also
          contributing to a community that upholds your values.
        </div>
        <div className="button-cont">
          <button className="down-btn">Download the App</button>
        </div>
      </div>
    </div>
  );
};

export default AgentComp;
