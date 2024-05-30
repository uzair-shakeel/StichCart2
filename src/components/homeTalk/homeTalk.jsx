import React from "react";
import Button from "../button/button";

const HomeTalk = () => {
  return (
    <div className="home-talk">
      <div className="home-talk__button-container">
        <Button className="btn-outline" label="Call or WhatsApp Now" />
      </div>
      <h1 className="home-talk__heading">
        Book your appointment now and experience the luxury of <br />
        personalized tailoring without stepping out of your home
      </h1>
      <div className="home-talk__button-container">
        <Button className="btn-transparent" label="Let's Talk Us" />
      </div>
    </div>
  );
};

export default HomeTalk;
