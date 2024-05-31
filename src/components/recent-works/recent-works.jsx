import React from "react";
import image1 from "../../assets/works1.png";
import image2 from "../../assets/works2.png";
import image3 from "../../assets/works3.png";

const RecentWorks = () => {
  return (
    <div className={"recentWorks"}>
      <div className="textContainer">
        <h1>
          OUR <br /> RECENT WORK
        </h1>
      </div>
      <div className={"imagesContainer"}>
        <img src={image1} alt="Work 1" />
      </div>
      <div className={"imagesContainer"}>
        <img src={image2} alt="Work 2" />
      </div>
      <div className={"imagesContainer"}>
        <img src={image3} alt="Work 3" />
      </div>
    </div>
  );
};

export default RecentWorks;
