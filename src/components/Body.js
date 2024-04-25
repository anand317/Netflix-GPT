import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import { useDispatch, UseDispatch } from 'react-redux'




const Body = () => {

 

    const routeApp = createBrowserRouter ([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    


  return (
    <div>
         <RouterProvider router={routeApp}/>
    </div>
   

   
  )
}

export default Body