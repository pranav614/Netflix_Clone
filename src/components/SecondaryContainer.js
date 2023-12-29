import React from "react";
import TrendingMovies from "./MovieCategories/TrendingMovies";
import PopularMovies from "./MovieCategories/PopularMovies";
import TopSeries from "./MovieCategories/TopSeries";
import TopRated from "./MovieCategories/TopRated";
import languageObj from "../utils/languageObject";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const languageValue =useSelector((store)=> store.languageChange.language)
  return (
    <div className=" -mt-28 relative z-12" >
      <h1 className="text-white netflix-Heading mb-5 ml-10">{languageObj[languageValue].trendingMovies}</h1>
      <TrendingMovies />
      <h1 className="text-white netflix-Heading mb-5 ml-10">{languageObj[languageValue].series}</h1>
      <TopSeries />
      <h1 className="text-white netflix-Heading mb-5 ml-10">{languageObj[languageValue].popularMovies}</h1>
      <PopularMovies  />
      <h1 className="text-white netflix-Heading mb-5 ml-10">{languageObj[languageValue].topRated}</h1>
      <TopRated />
    </div>
  );
};

export default SecondaryContainer;
