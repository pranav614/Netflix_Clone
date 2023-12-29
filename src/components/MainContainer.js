import React from 'react'
import Video from './BackGroundVideoContainer/Video'
import useNewMovies from '../customHooks/useNewMovies'
import { useSelector } from 'react-redux'


const MainContainer = () => {
  useNewMovies();
  const newMovie=useSelector((store)=> store.nowPlayingMovies.newMovies)
  if (!newMovie)return;
    const {original_title,overview,id}=newMovie[1];
 
  
  return (
    <div className='' >
        <Video videoName1={original_title} videoOverView1={overview} id={id}/>
    </div>
    
  )
}

export default MainContainer