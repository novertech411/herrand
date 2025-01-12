import { Link as ScrollLink } from "react-scroll";
import "../css/about.css";
import info from "../assets/image/info.png";
import Container from "./Container";

const AboutSection = () => {
  const scrollOffset = -90;

  return (
    <div>
      <Container>
        <div
          className="about-section-container gap-[100px] font-poppins mt-[100px]"
          id="about-section"
        >
          <div className="left-side-about">
            <div
              data-aos="flip-up"
              className="relative  md:max-w-6xl mx-auto md:h-[500px]   w-full"
              style={{ paddingTop: "56.25%" /* 16:9 Aspect Ratio */ }}
            >
              <iframe
                className="absolute inset-0 w-full md:h-[500px] h-[200px]"
                src="https://www.youtube.com/embed/u7iZJL5zxxE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div data-aos="fade-up" className="right-side-about ">
            <div className=" font-poppins font-[600] md:text-[38px]  text-5xl text-left">
              What To <span className="text-primary"> Know About</span>
              <br></br> Herrands
            </div>

            <div className=" md:text-[18px]  text-[15px] text-gray-500  py-8 ">
              Herrands is a P2P time-sharing app for busy people who want to
              regain valuable time and enjoy more convenience. Our platform
              connects you with reliable runners who will run your errands, so
              you can avoid the stress of juggling multiple errands all alone
              and make time for what matters to you. Whether it’s picking up
              your items or returning packages, last-minute delivery, doing
              household chores, having someone follow you to run errands
              together, intercepting buses, going to motor parks to collect or
              send your items, carrying your newly bought household appliances
              and many more, there's always someone you can send on Herrands.
            </div>
            <ScrollLink
              to="download-section"
              smooth={true}
              duration={500}
              offset={scrollOffset}
            ></ScrollLink>
          </div>
        </div>

        <div
          className=" flex font-poppins mt-[100px]  md:flex-row flex-col-reverse    gap-[100px] "
          id="about-section"
        >
          <div data-aos="zoom-in" className="right-side-about ">
            <div className=" font-poppins font-[600]  md:text-[38px]  text-5xl text-left md:block hidden">
              <span className="text-primary">Easy. </span> Fast.{" "}
              <span className="text-primary"> Reliable. </span> Safe!
            </div>
            <div className=" md:text-[18px] text-[15px] text-gray-500  py-8 ">
              Herrands gives you all the time you need to do what you want. Our
              platform seamlessly connects individuals with diverse but
              complementary needs – You, the sender, who needs to send someone
              on errands, and our vetted runners, who are available on-demand to
              run your errands. The result is a win-win partnership where
              everyone benefits by making time for what matters to them.
            </div>

            <button
              className=" font-poppins  mt-11 text-[20px] bg-black border-2 border-black text-white p-3 font-[500] rounded-2xl hover:bg-white hover:text-primary   cursor-pointer"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.herrands",
                  "_blank"
                )
              }
            >
              Download App
            </button>
          </div>
          <div data-aos="flip-up" className=" md:w-[50%]  w-full] mx-auto">
            <div className=" font-poppins font-[600]  md:text-[38px]  text-5xl text-left md:hidden  block ">
              <span className="text-primary">Easy .</span> Fast .{" "}
              <span className="text-primary">Reliable . </span>Safe !
            </div>
            <img src={info} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutSection;
