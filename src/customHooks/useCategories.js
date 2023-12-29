import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular, addSeries, addTopRated } from "../utils/movieCategories";
import { options } from "../utils/constants";
import { addToList, removeListItem } from "../utils/addList";


const useCategories = () => {
  const [toogle,settoogle]=useState({});
  const dispatch=useDispatch();
  const movieList=useSelector((store)=>store.list.myList);
  const popularMovies = useSelector((store) => store.categories.popular);
  
  const handleAddList=(card)=>{
    settoogle((prevToggles) => ({
      ...prevToggles,
      [card.id]: !prevToggles[card.id],
    }))
    if(!toogle[card.id]){
      dispatch(addToList(card));
    }
    else{
      dispatch(removeListItem(card.id))
    }
    
  }
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
        return {
          handleAddList,
          movieList,
          popularMovies,
          toogle,

        }
}


export default useCategories