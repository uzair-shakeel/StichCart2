import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "../../actions/category-action";
import whatsapp from "../../assets/whatsapp2.png";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryState.categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    dispatch(loadCategories());

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

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
