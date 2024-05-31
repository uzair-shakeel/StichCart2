import React from "react";
import "../../styles/includes/carBanner.scss";
import Button from "../button/button";
import image from "../../assets/car.png";

const homeBanner = () => {
  return (
    <div className="carBanner">
      <div className="second">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <p>CURRENT DELIVERY LOCATIONS - </p>
        <p>TAMBARAM, PALLAVARAM, PORUR & MANNIVAKKAM</p>
      </div>
      <div className="first">
        <h5>Shriram properties</h5>

        <p>apartments where we currently offer stitching service </p>
        <p>
          Would you like our doorstep stitching service in your apartment?{" "}
          <br />
          If yes, please call us or message us on WhatsApp{" "}
        </p>
        <Button
          className="btnStyle btn-primary"
          label="Book your fitting today"
        />
      </div>
    </div>
  );
};

export default homeBanner;
