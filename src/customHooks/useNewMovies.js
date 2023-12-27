import { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { newMovies } from '../utils/newMoviesSlice';
import { options } from '../utils/constants';

const useNewMovies = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
      nowPlayingMovies();
   
    },[]);
    
    const nowPlayingMovies=async ()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
      const jsonData=await data.json();
      dispatch(newMovies(jsonData.results))
    }

}

export default useNewMovies