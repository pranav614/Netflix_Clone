import React, { useEffect } from 'react'
import { options } from '../utils/constants';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const SearchedMovies = () => {
    const [movieData,setMovieData]=useState(null);
    const movieName=useSelector((store)=> store.searchedMovies.changedTxt)
    
    useEffect(()=>{
        searchedData();
    },[movieName])
    const searchedData=async ()=>{
      if (!movieName) return;
        const fetchedMovieData=await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', options)
        const data=await fetchedMovieData.json();
        const filtereData=data.results.filter(movie=>movie.poster_path!=null);
        setMovieData(filtereData)
    }

    if(movieData==null || movieName==null ){
        return(
            <div className='text-white text-lg text-center'>Search for any movie ...😊
          </div>
        )
    }
  return (
    <div className='searched-img-div'>
        {
          movieData.length===0?<div><p className='text-white text-xl'>Movie which you have serached is not present.🥲</p></div>:
            movieData.map((movie)=>(
                <div key={movie.id}  className="w-80 h-40 mb-10 ">
        <img
          className="w-full h-full bg-center rounded-sm cursor-pointer img1 "
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt="no img"
        />
        <p className='text-white '>{movie.title}</p>
      </div>
            ))
        }
        
    </div>
  )
}

export default SearchedMovies