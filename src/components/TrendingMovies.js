import React from 'react'
import { useSelector } from 'react-redux'

const TrendingMovies = () => {
  const trendingMovies=useSelector((store)=> store.nowPlayingMovies.newMovies)
  if(trendingMovies==null){
    return (
      <div>
        loading...
      </div>
    )
  }
  return (
<div className="ml-10 mb-16">

  <div className="flex gap-2 overflow-scroll justify-start  ">
    {trendingMovies.map((trendingCard) => (
      <div key={trendingCard.id} className="w-60 h-36 flex-shrink-0 flex-grow-0 ">
        
        <img
          className="w-60 h-36 bg-center rounded-sm cursor-pointer"
          src={"https://image.tmdb.org/t/p/w500/" + trendingCard.poster_path}
          alt="No img"
        />
      </div>
    ))}
  </div>
</div>

  )
}

export default TrendingMovies