import { FaClock, FaUsers } from "react-icons/fa6";
import { FaHandHoldingUsd } from "react-icons/fa";
const AgentComp = () => {
  return (
    <div className="about-section-container">
      <div className="left-side-about ant redddu">
        <img src="images/ant1.jpg" alt="" />
      </div>
      <div className="right-side-about">
        <div className="advice-txt">MAKE MONEY WITH YOUR FREE TIME</div>
        <h1 className="abt-h1 fnt">Become an Agent</h1>

        <div className="abt-body">
          <FaHandHoldingUsd className="arr-lf" />
          <span className=" font-bold">Earn-as-You-Go: </span> Turn your free
          time into a source of income by running errands for others. Join
          Herrands as an agent and start earning by helping others with their
          errands. <br />
          <br />
          <FaClock className="arr-lf" />{" "}
          <span className=" font-bold">Flexible Hours: </span> We value your
          freedom. Work on your schedule and choose errands that suit you.
          Whether you're looking for a full-time gig or part-time hustle, we
          offer flexible opportunities to fit your schedule. <br />
          <br /> <FaUsers className="arr-lf" />{" "}
          <span className="font-bold">Supportive Community: </span>
          Join our thriving community of like-minded individuals making a
          difference. By becoming an agent, you're not only helping others;
          you're also contributing to a community that upholds your values.
        </div>
        <div className="button-cont">
          <button className="down-btn">Download the App</button>
        </div>
      </div>
    </div>
  );
};

export default AgentComp;
