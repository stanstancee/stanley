import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { DiCodeBadge } from "react-icons/di";
import { MdMenu, MdClose } from "react-icons/md";


export default function Mobile(){
  const [see, setSee] = useState("yes");

function checkSee(){
   setSee(see==="yes"?"no":"yes")
}
  
  return(
    <div >
      <div >
      <DiCodeBadge className="head-icon" />
      </div>
      <div >
      {see==="yes"? <MdMenu  onClick={checkSee} />:
       <MdClose onClick={checkSee} />}
       </div>
      {see==="no"?<nav>
        
        <Link to="/">
          HOME
        </Link>

        <Link to="/Contact">
        CONTACT ME
        </Link>

  

        <Link to="/Portfolio">
         PORTFOLIO
        </Link>

       
        </nav>:"" }
    
        </div>
  )
}
