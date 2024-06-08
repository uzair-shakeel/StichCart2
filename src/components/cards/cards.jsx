import React, { useEffect, useState } from "react";
import whatsapp from "../../assets/whatsapp2.png";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import categoriesData from "../../json/categories.json";

const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setCategories(categoriesData);
      setIsLoading(false);
    }, 2000); // Simulating a 2-second delay
  }, []);

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

  const renderSkeletonCard = (index) => (
    // <div key={index}>
    //   <Skeleton className="cards" />
    // </div>
    <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton className="cards" />
      </p>
    </SkeletonTheme>
  );

  return (
    <div className="cards-container">
      <div className="twoContainer">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) =>
              renderSkeletonCard(index)
            )
          : firstTwo.map(renderCard)}
      </div>
      <div className="threeContainer">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) =>
              renderSkeletonCard(index)
            )
          : nextThree.map(renderCard)}
      </div>
      <div className="twoContainer">
        {isLoading
          ? Array.from({ length: 2 }).map((_, index) =>
              renderSkeletonCard(index)
            )
          : lastTwo.map(renderCard)}
      </div>
    </div>
  );
};

export default Cards;
