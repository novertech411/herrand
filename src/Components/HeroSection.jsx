import heropic from "../assets/image/herobanner.png";
import Container from "./Container";

const HeroSection = () => {
  return (
    <div className=" relative w-full  overflow-hidden ">
      <Container>
        <div className="hero-section-container" id="hero-section ">
          <div className=" w-[90%] pt-10 sm:w-[80%] lg:pt-10">
            <div className=" py-[100px]">
              <div className="main-hero-head font-[300] font-poppins leading-normal text-5xl sm:text-5xl lg:text-[50px] xl:text-[70px] sm:leading-snug *:lg:leading-snug ">
                Send Your <span> Errands Anywhere</span> In No Time
              </div>
              <div className="hero-simple">
                In a fast-paced world where every second counts, the value of
                your time should never be compromised. Herrands connects you
                with vetted runners who share their time with you and handle
                your errands on-demand, giving you the freedom to focus on what
                truly matters. It’s easy, quick and safe!
              </div>
              <div className="flex  mt-8 sm:w-[80%] lg:w-[60%] xl:w-[60%]">
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
          <div className="w-[65%]    bg-black   z-20">
            <img
              className=" absolute  right-0 w-[45%] top-0"
              src={heropic}
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
