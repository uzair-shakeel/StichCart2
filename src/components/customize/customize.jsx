import React from "react";
import "../../styles/includes/customizeBanner.scss";
import Button from "../button/button";
import offer from "../../assets/offer.png";

const customize = () => {
  return (
    <div className="customize">
      <div className="customizeBanner">
        {/* <h4>Bulk</h4> */}
        <h3>
          SELF <br />
          CUSTOMIZE
        </h3>
        <p>
          Tailor - make your dream <br />
          outfits by one click
        </p>
        <Button className="btn-primary" label="Get Quote" />
      </div>

      <img src={offer} alt="" className="image hideImage" />
    </div>
  );
};

export default customize;
