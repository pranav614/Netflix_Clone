import React from "react";
import { useSelector } from "react-redux";

const TopSeries = () => {
  const series = useSelector((store) => store.categories.series);
  
 

if (series  == null) {
  return (<div>loading...</div>);
}

    

  
  
  return (
    <div className="ml-10 mb-16">

      <div className="overflow-x-auto">
        <div className="flex gap-2  justify-start ">
        {series.map((topRatedCard) => (
  <div
    key={topRatedCard.id}
    className="w-60 h-48 flex-shrink-0 flex-grow-0 imgDiv "
  >
    <img
      className="w-60 h-36 bg-center rounded-sm cursor-pointer"
      src={`https://image.tmdb.org/t/p/w500/${topRatedCard.poster_path}`}
      alt="no img"
    />
    <div
      className="text-white my"
      
    >
      <div className="rounder mt-1 px-0.4 py-0.4">
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="38"
            viewBox="0 -960 960 960"
            width="30"
          >
            <path
              d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
              fill="white"
            />
          </svg>
        
         
        
      </div>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
};

export default TopSeries;
