import React from "react";
import {DiJavascript1 }from  "react-icons/di";
import {FaNode,FaHtml5, FaCss3, FaAngular, FaReact} from "react-icons/fa";



const checkEven = (num)=>{
    return num % 2
       }


const Logo = ()=>{
    let logos = [<FaNode />, <FaHtml5 />,<FaCss3 />, <FaAngular />, <FaReact />, <DiJavascript1 />]
return(
    <section className="logo-container" style={{backgroundColor:"hsl(0, 0%, 97%)",color:"hsl(255, 11%, 22%)"}}>
      {logos.map(( logo,index) =>{
          return  <div key={index} className="logo" style={{color:`${checkEven(index)?"rgb(86, 148, 88)":" #554f4f"}`}}>{logo}</div>
      })}
    </section>
)
}

export default Logo