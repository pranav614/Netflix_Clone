import React from 'react'
import VideoTitle from './VideoTitle'

import {  useSelector } from 'react-redux';
import useVideoData from '../customHooks/useVideoData';
import { youtubeLink } from '../utils/constants';




const Video = ({videoName1,videoOverView1,id}) => {
  const movieId=id;
  useVideoData({movieId});
  const key=useSelector((store)=>store.nowPlayingMovies.movieKey);
  return (
    key&&(
      <div className='relative h-screen  w-screen'>
        <div className='absolute h-screen bg-gradient-to-r from-black to-transparent w-screen '></div>
      <iframe width="100%" className='h-screen' src={youtubeLink+key+"?autoplay=1&mute=1&rel=0"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowFullScreen></iframe>
       <VideoTitle videoName={videoName1} videoOverView={videoOverView1} />
    </div>
    )
    
  )
}

export default Video