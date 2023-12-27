import React from 'react'
import languageObj from '../utils/languageObject'
import { useSelector } from 'react-redux'
const SearchComp = () => {
  const languageValue =useSelector((store)=> store.languageChange.language)
  console.log(languageObj["en"])
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="text-white w-full flex justify-center items-center">
        <input
          type="search"
          className="py-2 px-4 w-[30%] rounded mr-2 bg-gray-800 text-white border-none"
          placeholder={languageObj[languageValue].placeHolder}
        />
        <button className="py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 focus:outline-none">
        {languageObj[languageValue].searchText}
        </button>
      </div>
    </div>
  )
}

export default SearchComp