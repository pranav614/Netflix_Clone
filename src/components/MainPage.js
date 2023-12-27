import React from 'react'
import Header from './Header';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import SearchComp from './SearchComp';





const MainPage = () => {
  const searchBoolean=useSelector((store)=>store.mySearch.mySearchComp)
  return (
    <div className='relative' >
        <Header/>
        {
          !searchBoolean?(
            <>
            <MainContainer/>
        <SecondaryContainer/>
            </>
          ):<div><SearchComp/></div>
        }
        
    </div>
  )
}

export default MainPage