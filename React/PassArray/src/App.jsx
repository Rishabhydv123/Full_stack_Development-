import React from "react";
import Showcity from './Showcity';
import "./App.css";
// import User from './User';
import Passhtml from "./Passhtml";

function App(){
  // const cities = ["Pune", "Mumbai", "Delhi", "Kolkata"];

  return (
    <>

    {/* <Showcity name={cities[1]}> </Showcity> */}
    {/* <User name = "Rishabh"></User> */}

    <Passhtml color="blue">
    <h1>We are Learning React</h1>
    </Passhtml>
    <Passhtml color="yellow">
      <h2>hello React Pass Array</h2>
    </Passhtml>
    </>
  )
}

export default App;