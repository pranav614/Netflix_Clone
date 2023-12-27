import React from "react";
import { useSelector } from "react-redux";
import useCategories from "../customHooks/useCategories";

const PopularMovies = () => {
  const popularMovies = useSelector((store) => store.categories.popular);
  useCategories();
  if (popularMovies == null) {
    return <div>Loading..</div>;
  }
  return (
    <div className="ml-10 mb-16">

      <div className="flex gap-2 overflow-scroll justify-start  ">
        {popularMovies.map((popCard) => (
          <div key={popCard.id} className="w-60 h-36 flex-shrink-0 flex-grow-0">
            <img
              className="w-full h-full bg-no-repeat bg-center cursor-pointer rounded-sm"
              src={"https://image.tmdb.org/t/p/w500/" + popCard.poster_path}
              alt="no img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
