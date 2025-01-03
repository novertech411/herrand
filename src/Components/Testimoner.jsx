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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <Container>
        <h2 className="font-[600] text-[38px] font-poppins  text-center">
          What Our Users Have To Say
        </h2>

        <Slider {...settings}>
          <Testcard />
          <Testcard />
          <Testcard />
          <Testcard />
          <Testcard />
          <Testcard />
        </Slider>
      </Container>
    </div>
  );
}

export default Testimoner;
