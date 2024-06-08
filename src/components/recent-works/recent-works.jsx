import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecentWorks } from "../../actions/recentWorksAction";

const RecentWorks = () => {
  const dispatch = useDispatch();
  const recentWorks = useSelector((state) => state.recentWorks.recentWorks);
  const loading = useSelector((state) => state.recentWorks.loading);
  const error = useSelector((state) => state.recentWorks.error);

  useEffect(() => {
    // Dispatch the action to load recent works data when the component mounts
    dispatch(loadRecentWorks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
