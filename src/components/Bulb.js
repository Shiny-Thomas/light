import React, { useState } from "react";
import './Bulb.css'
import Onoroff from "./Onoroff";
const Bulb=(props)=>{
const [yellow,setYellow]=useState('yellowbulb')
const colorChange=(myval)=>{
    setYellow(myval)
}


    return(

        <>
       
        <div className={yellow}></div>
        <Onoroff setParentData={colorChange}/>
        
        </>
    )
}

export default Bulb
