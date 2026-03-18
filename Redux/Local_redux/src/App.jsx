import React from 'react'
import {Login} from './Components/Login'
import { AllRoutes } from './Routes/AllRoutes'
import {Navbar} from './Components/Navbar'

export const App =()=>{
  return(
    <>
    <Navbar />
    <AllRoutes />
    </>
  )
}

