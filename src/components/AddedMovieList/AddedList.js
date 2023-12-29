import React from 'react'
import img from '../NoList.png'

const AddedList = ({array}) => {
    console.log(array)
  if( array.length===0){
    return (
        <div className='flex justify-center items-center h-full'>
            <img src={img} alt="" />
        </div>
    )
  }
return (


    <div className='px-4 py-2  '>

       { 
       array.map((movie)=>(
        <div className='each-list px-2 mb-2' key={movie.id}>
            <div >
                <p>{movie.original_title||movie.name}</p>
            </div>
            <div className='flex gap-2'>
                <p>Release Date: {movie.release_date}</p>
                <p>Language: {movie.original_language}</p>
            </div>
        </div>
       ))}
    </div>
  )
}

export default AddedList