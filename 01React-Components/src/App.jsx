import React from "react"
import './App.css';
import Card from "./components/Card";
import Navbar from "./components/Navbar";
 

const App = () =>{

  return(
    <div>
      <Card />
      <Navbar/>
      <Card/>

    </div>
  )
}

export default App;