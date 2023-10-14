import "../css/about.css";
const AboutSection = () => {
  return (
    <div className="about-section-container">
      <div className="left-side-about">
        <img src="images/land5.jpg" alt="" />
      </div>
      <div className="right-side-about">
        <div className="advice-txt">SAVE TIME AND ENGERY</div>
        <h1 className="abt-h1">About us</h1>

        <div className="abt-body">
          Lorem ipsum dolor sit amet consectetur. Scelerisque mauris sit proin
          urna tristique sed purus. Sed tristique nunc vulputate magna orci.
          Magna nisi tortor fusce vitae sed accumsan purus. Adipiscing massa id
          ullamcorper gravida egestas nunc.Lorem ipsum dolor sit amet
          consectetur. Scelerisque mauris sit proin urna tristique sed purus.
          Sed tristique nunc vulputate magna orci. Magna nisi tortor fusce vitae
          sed accumsan purus. Adipiscing massa id ullamcorper gravida egestas
          nunc.
        </div>
        <div className="button-cont">
          <button className="down-btn">Download the App</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
