const HeroSection = () => {
  return (
    <div className="hero-section-container" id="hero-section">
      <div className="left-side-hero w-[90%] pt-28 sm:w-[90%] lg:pt-10">
        <div className="head-line-box">
          <div className="main-hero-head leading-normal text-5xl sm:text-5xl lg:text-[35px] xl:text-[50px] sm:leading-snug *:lg:leading-snug ">
            Experience  <span> Time-freedom and Convenience</span>
          </div>
          <div className="hero-simple pt-20 xl:pt-5">
          In a fast-paced world where every second counts, the value of your time should
          never be compromised. Herrands connects you with vetted agents who share their
          time with you and handle your errands on-demand, giving you the freedom to focus
          on what truly matters, and the convenience to enjoy and relax. It’s easy, quick and safe!
          </div>
          <div className="flex  sm:w-[80%] lg:w-[60%] xl:w-[60%]">
            <img className="w-1/2 h-[64px] p-2 xl:h-[80px] " src="images/bad1.png" alt="" />

            <img className="w-1/2 h-[64px] p-2 xl:h-[80px] " src="images/bad2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="right-side-containe w-3/4  hidden sm:block ">
        <img className="w-[70%] ml-24 lg:w-[50%] xl:w-[40%]" src="images/Image1.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
