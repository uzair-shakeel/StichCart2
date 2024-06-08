import React from "react";
import whatsapp from "../../assets/whatsapp2.png";
import categoriesData from "../../json/categories.json";

const cards = () => {
  const categories = categoriesData;

  const firstTwo = categories.slice(0, 2);
  const nextThree = categories.slice(2, 5);
  const lastTwo = categories.slice(5, 7);

  const renderCard = (category) => (
    <div
      key={category.id}
      className="cards"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, black), url(${category.media[0].url})`,
      }}
    >
      <p>{category.name.toUpperCase()}</p>
      <img src={whatsapp} alt="" />
    </div>
  );

  return (
    <div className="cards-container">
      <div className="twoContainer">{firstTwo.map(renderCard)}</div>
      <div className="threeContainer">{nextThree.map(renderCard)}</div>
      <div className="twoContainer">{lastTwo.map(renderCard)}</div>
    </div>
  );
};

export default cards;
