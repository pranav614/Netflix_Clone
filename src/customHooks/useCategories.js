import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular, addSeries, addTopRated } from "../utils/movieCategories";
import { options } from "../utils/constants";


const useCategories = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
      fetchedPopularMovies();
      topRated();
      series();
    },[])
    const fetchedPopularMovies=async()=>{
      const PopularMovies=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      const fetchedPopData=await PopularMovies.json();
      dispatch(addPopular(fetchedPopData.results))
    }
    const topRated=async()=>{
        const fetchTopRated=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        const data=await fetchTopRated.json();
        dispatch(addTopRated(data.results))
      }
      const series=async ()=>{
        const seriesFeteched=await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
        const seriesData= await seriesFeteched.json();
        dispatch(addSeries(seriesData.results));
        }
}

export default useCategories