import React, { useEffect } from 'react'
import { options } from '../utils/constants';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const SearchedMovies = () => {
    const [movieData,setMovieData]=useState(null);
    console.log(movieData);
    const movieName=useSelector((store)=> store.searchedMovies.changedTxt)
    useEffect(()=>{
        searchedData();
    },[])
    const searchedData=async ()=>{
        const fetchedMovieData=await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', options)
        const data=await fetchedMovieData.json();
        setMovieData(data);
    }
    if(movieData==null || movieName==null){
        return(
            <div className='text-white text-lg text-center'>Search for any movie...</div>
        )
    }
  return (
    <div className='flex'>
        {
            movieData.results.map((movie)=>(
                <div key={movie.id}  className="w-80 h-40 ">
        <img
          className="w-full h-full bg-center rounded-sm cursor-pointer"
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="no img"
        />
      </div>
            ))
        }
        
    </div>
  )
}

export default SearchedMovies