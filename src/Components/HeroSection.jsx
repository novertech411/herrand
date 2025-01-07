import heropic from "../assets/image/herobanner.png";
import Container from "./Container";
import adndriod from "../assets/image/andriod.png";
import apple from "../assets/image/appel.png";

const HeroSection = () => {
  return (
    <div className=" relative w-full  overflow-hidden ">
      <Container>
        <div className="">
          <div className=" md:w-[55%] pt-10 sm:w-[80%] lg:pt-10">
            <div className=" md:py-[100px]">
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
              <div className="flex  mt-8 sm:w-[80%] lg:w-[60%] xl:w-[60%] ">
                <div className="md:w-1/2   md:h-[64px] p-2 xl:h-[80px]  w-[40%] ">
                  <img className=" " src={adndriod} alt="" />
                </div>

                <div className="relative md:w-1/2   md:h-[60px] p-2 xl:h-[75px]  w-[4%]">
                  <img className="  " src={apple} alt="" />
                  <div className="absolute bg-blue-100 text-primary py-2  px-3 rounded-lg -top-8 -right-11 font-poppins text-[15px] font-[500]">
                    {" "}
                    Coming Soon...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%]    bg-black   z-20">
            <img
              className=" absolute  right-0 w-[45%] top-0   md:flex hidden"
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
