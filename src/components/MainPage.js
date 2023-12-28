import React, { useEffect, useState } from 'react'
import Header from './Header';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import SearchComp from './SearchComp';
import SmallerHeader from './SmallerHeader';
import { useMediaQuery } from 'react-responsive';

const MainPage = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  const searchBoolean=useSelector((store)=>store.mySearch.mySearchComp)
  return (
    <div className='relative' >
        {isLargeScreen?<Header/>:<SmallerHeader/>}
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