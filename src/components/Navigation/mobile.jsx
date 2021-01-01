import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { MdMenu, MdClose } from "react-icons/md";
import Image from '../image'


export default function Mobile(){
  const [see, setSee] = useState("yes");

function checkSee(){
   setSee(see==="yes"?"no":"yes")
}
  
  return(
    <div className="mobile">
    <div className="m-c" >
      <div  className="m-c-1">
     <Image />
      </div>
      <div className="m-c-2">
      {see==="yes"? <MdMenu  onClick={checkSee} />:
       <MdClose onClick={checkSee} />}
       </div>
       </div>
      {see==="no"?<nav>
        <div>
        <Link onClick={checkSee} className="a" to="/">
          HOME
        </Link>
        </div>
       <div>
       <Link onClick={checkSee} className="a" to="/Contact">
        CONTACT ME
        </Link>
       </div>

        <div>
        <Link onClick={checkSee} className="a" to="/Portfolio">
         PORTFOLIO
        </Link>
        </div>

  

        

       
        </nav>:"" }
    
       
        </div>
  )
}
