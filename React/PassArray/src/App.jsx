import React from "react";
import Showcity from './Showcity';
import "./App.css";

function App(){
  const cities = ["Pune", "Mumbai", "Delhi", "Kolkata"];

  return (
    <>

    <Showcity name={cities[1]}> </Showcity>
    </>
  )
}

export default App;