import { useState } from 'react'

import './App.css'
import { Navbar } from './Components/Navbar'
import { AllRoutes } from './Routes/AllRoutes'

export function App() {
 
  return (
    <>
      <Navbar/>
      <AllRoutes/>
    </>
  )
}