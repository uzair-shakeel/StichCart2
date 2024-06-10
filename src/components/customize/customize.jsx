import React from "react";
import "../../styles/includes/customizeBanner.scss";
import offer from "../../assets/offer.png";
import offer1 from "../../assets/Group-73.png";

const Customize = () => {
  return (
    <div className="customize-container">
      <div className="customize-banner">
        <img src={offer1} alt="Offer 1" className="banner-image" />
        <img src={offer} alt="Offer 2" className="banner-image" />
      </div>
    </div>
  );
};

export default Customize;
