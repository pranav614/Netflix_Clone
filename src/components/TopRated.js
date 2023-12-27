import React from "react";
import { useSelector } from "react-redux";
import useCategories from "../customHooks/useCategories";

const TopRated = () => {
  const topRated = useSelector((store) => store.categories.topRated);
  useCategories();
  if(topRated==null){
    return (
      <div>
        loading...
      </div>
    )
  }
  return (
    <div className="ml-10 mb-16">

  <div className="flex gap-2 overflow-scroll justify-start">
    {topRated.map((topRatedCard) => (
      <div key={topRatedCard.id} className="w-60 h-36 flex-shrink-0 flex-grow-0">
        <img
          className="w-full h-full bg-center rounded-sm cursor-pointer"
          src={"https://image.tmdb.org/t/p/w500/" + topRatedCard.poster_path}
          alt="no img"
        />
      </div>
    ))}
  </div>
</div>
  );
};

export default TopRated;
