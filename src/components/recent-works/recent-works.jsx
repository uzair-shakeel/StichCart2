import React from "react";
import recentWorksData from "../../json/new-products.json";

const RecentWorks = () => {
  const recentWorks = recentWorksData;
  console.log(recentWorks);

  return (
    <div className="recentWorks">
      <div className="textContainer">
        <h1>
          Our <br /> Recent Works
        </h1>
      </div>
      {recentWorks.map((work) => (
        <div key={work.id} className="imagesContainer">
          <img src={work.url} alt={work.name} />
        </div>
      ))}
    </div>
  );
};

export default RecentWorks;
