import { useState } from "react"
import './app.css'


function App() {

 const [isBlack,setBlack]=useState(true) 
 const [isButton,setBtn]=useState("dark")
  
  function  change()  {
    setBlack(isBlack=>!isBlack)
    if(isButton=="dark"){
      setBtn("white")
    }
    else{
      setBtn("dark")
    }   
  }
  
  return <div className="a" style={ isBlack?{background:'white'}:{background:'black'}} >
    <button className="btn" onClick={change} >{isButton}</button>
  </div>
}


export default App
