import React from "react";
import image1 from "../../../public/Group 70 copy.png";
import image2 from "../../../public/Group 70 copy 2.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

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
          slidesToShow: 2,
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
        <div className={"carousalContainer"}>
          <img src={image1} alt="Work 1" />
        </div>
        <div className={"carousalContainer"}>
          <img src={image2} alt="Work 2" />
        </div>
      </Slider>
    </div>
    // <div className={"carousal"}>
    //   <div className="textContainer">
    //     <h1>
    //       What our <br /> Customer <br /> are Saying
    //     </h1>
    //   </div>
    //   <div className={"carousalContainer"}>
    //     <img src={image1} alt="Work 1" />
    //   </div>
    //   <div className={"carousalContainer"}>
    //     <img src={image2} alt="Work 2" />
    //   </div>
    // </div>
  );
};

export default Carousal;
