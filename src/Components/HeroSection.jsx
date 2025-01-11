import heropic from "../assets/image/herobanner.png";
import React, { useState } from "react";
import Container from "./Container";
import adndriod from "../assets/image/andriod.png";
import apple from "../assets/image/appel.png";

const HeroSection = () => {
  const [isComingSoonVisible, setComingSoonVisible] = useState(false);

  const handleParentClick = () => {
    setComingSoonVisible(true);
    // Optional: Hide after a delay (e.g., 3 seconds)
    setTimeout(() => setComingSoonVisible(false), 3000);
  };

  return (
    <div className=" relative w-full  overflow-hidden  pb-[70px]">
      <Container>
        <div className="">
          <div className=" md:w-[55%] pt-10 sm:w-[80%] lg:pt-10">
            <div className=" md:py-[100px]">
              <div className="main-hero-head font-[300] font-poppins leading-normal text-5xl sm:text-5xl lg:text-[50px] xl:text-[70px] sm:leading-snug *:lg:leading-snug  mb-11">
                Send Your <span> Errands Anywhere</span> In No Time
              </div>
              <div className="hero-simple mt-11">
                Connect with vetted runners who have plenty of time and send
                them your errands on demand. Enjoy the convenience and time
                freedom to focus on what matters to you. It’s easy, quick and
                safe!
              </div>

              <div className="flex     sm:w-[80%] lg:w-[60%] xl:w-[60%] md:mt-11  mt-[50px]">
                <div className="md:w-1/2   md:h-[64px] p-2 xl:h-[80px]  w-[40%] ">
                  <a href="https://play.google.com/store/apps/details?id=com.herrands">
                    <img className=" " src={adndriod} alt="" />
                  </a>
                </div>

                <div
                  className="relative md:w-1/2   md:h-[60px] p-2 xl:h-[75px] bg-  w-[38%] "
                  onClick={handleParentClick}
                >
                  <img className="  " src={apple} alt="" />
                  <div
                    className={`absolute bg-blue-100 text-primary py-2 px-3 rounded-lg -top-8 -right-11 font-poppins text-[15px] font-[500] 
          transition-transform duration-300 ease-out 
          ${
            isComingSoonVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
                  >
                    Coming Soon...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%]    bg-black   z-20">
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
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
