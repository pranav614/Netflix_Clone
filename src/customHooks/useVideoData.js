import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieKey } from "../utils/newMoviesSlice";

const useVideoData = (props) => {
    const dispatch=useDispatch();
  
  const fetchVideo=async ()=>{
    const fetchedData=await fetch("https://api.themoviedb.org/3/movie/"+props.movieId+"/videos?language=en-US", options)
    const jsonData=await fetchedData.json();
        const filteredVideoData = jsonData.results.filter((res) => res.type === 'Trailer');
        const video = filteredVideoData.length ? filteredVideoData[0] : jsonData.results[0];
        dispatch(addMovieKey(video.key));
    } 
  useEffect(()=>{

    fetchVideo();
 
  },[]);
  
}

export default useVideoData