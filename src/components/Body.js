
import Login from './Login'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import MainPage from './MainPage';


const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>, 
        },
        {
          path:'/mainpage',
          element:<MainPage/>, 
      }
    ])
   


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body