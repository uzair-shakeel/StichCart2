import React from "react";
import Button from "../button/button";
import { MdArrowOutward } from "react-icons/md";

const HomeTalk = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+917200168295"; // Replace with the actual phone number in international format, e.g., '1234567890'
    const message = "Hello, I would like to chat with you."; // Optional message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="home-talk">
      <div className="chat" onClick={openWhatsApp}></div>
      <div className="home-talk__button-container">
        <Button className="btn-outline" label="Call or WhatsApp Now" />
      </div>
      <h1 className="home-talk__heading">
        Book your appointment now and experience the luxury of personalized
        tailoring without stepping out of your home
      </h1>
      <div className="home-talk__button-container">
        <button className="btn-transparent">
          Let's Talk Us <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default HomeTalk;
