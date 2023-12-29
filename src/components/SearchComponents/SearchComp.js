import React, { useRef } from 'react'
import languageObj from '../../utils/languageObject'
import { useDispatch, useSelector } from 'react-redux'
import SearchedMovies from '../SearchComponents/SearchedMovies'
import { addChangedTxt } from '../../utils/searchedTxt'
const SearchComp = () => {
  const dispatch=useDispatch();
  const languageValue =useSelector((store)=> store.languageChange.language)
  const searchedText=useRef(null);

  return (
    <div className="flex-col w-full h-full justify-center items-center">
         <form action="" className='w-full' onSubmit={(e)=>{e.preventDefault()}}>
  <div className="text-white w-full h-80 flex justify-center items-center">
    <input
      type="search" ref={searchedText}
      className="py-2 px-4 w-[35%] rounded mr-2 bg-gray-800 text-white border-none"
      placeholder={languageObj[languageValue].placeHolder}
    />
    <button onClick={()=>{
      dispatch(addChangedTxt(searchedText.current.value))
    }} className="py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 focus:outline-none">
      {languageObj[languageValue].searchText}
    </button>
  </div>
</form>

  <div>
    
  </div>         
  <div className='min-h-10'>
  <SearchedMovies />
  </div>
 
    </div>
  )
}

export default SearchComp