import React from "react";
import school from "../../assets/school uniform.png";
import college from "../../assets/college.png";
import medical from "../../assets/medical.png";
import corporate from "../../assets/corporate.png";
import saree from "../../assets/Saree.png";
import labCoat from "../../assets/LapCoat.png";
import Blazer from "../../assets/Blazer.png";
import whatsapp from "../../assets/whatsapp2.png";

const cards = () => {
  return (
    <div className="cards-container">
      <div className="twoContainer">
        <div
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${school})`,
          }}
        >
          <p>SCHOOL UNIFORM</p>
          <img src={whatsapp} alt="" />
        </div>
        <div
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${college})`,
          }}
        >
          <p>COLLEGE</p>
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="threeContainer">
        <div
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${medical})`,
          }}
        >
          <p>MEDICAL SCRUB</p>
          <img src={whatsapp} alt="" />
        </div>
        <div
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${corporate})`,
          }}
        >
          <p>CORPORATE UNIFORM</p>
          <img src={whatsapp} alt="" />
        </div>
        <div
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${saree})`,
          }}
        >
          <p
            style={{
              position: "absolute",
              transform: "translate(-50%, -50%)", // Move back by half its width and height
              width: "100%",
              textAlign: "center",
            }}
          >
            UNIFORM SAREE BLOUSES
          </p>
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="twoContainer">
        <div
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${labCoat})`,
          }}
        >
          <p>LAB COAT</p>
          <img src={whatsapp} alt="" />
        </div>
        <div
          className="cards"
          style={{
            backgroundImage: `linear-gradient(to bottom, transparent, black), url(${Blazer})`,
          }}
        >
          <p>BLAZER</p>
          <img src={whatsapp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default cards;
