import React from "react";
import Container from "./Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testcard from "../Components/Testcard";

function Testimoner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <div className=" ">
      <Container>
        <h2 className="font-[600] font-poppins  text-center md:text-[38px] text-5xl ">
          What Our <span className="text-primary"> Users </span> Have To Say
        </h2>
        <div className="my-[60px]">
          <Slider {...settings}>
            <div className="">
              <Testcard />
            </div>

            <div>
              <Testcard />
            </div>

            <div>
              <Testcard />
            </div>

            <div>
              <Testcard />
            </div>

            <div>
              <Testcard />
            </div>

            <div>
              <Testcard />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Testimoner;
