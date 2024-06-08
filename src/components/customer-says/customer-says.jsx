import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import carouselData from "../../json/customer-testimonials.json";

const Carousal = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <MdKeyboardArrowRight color="white" />,
    prevArrow: <MdKeyboardArrowLeft color="white" />,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container" style={{ padding: "0 5%", width: "98%" }}>
      <Slider {...settings}>
        <div className="textContainer">
          <h1>
            What our <br /> Customer <br /> are Saying
          </h1>
        </div>
        {carouselData.map((item) => (
          <div key={item.id} className={"carousalContainer"}>
            <img src={item.mediaUrl} alt={item.author} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousal;
