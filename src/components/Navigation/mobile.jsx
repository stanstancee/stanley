import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { DiCodeBadge } from "react-icons/di";
import { MdMenu, MdClose } from "react-icons/md";
import m from "./m";

export default function Mobile(){
  const [see, setSee] = useState("yes");
  const {headStyle,linkStyle, navStyle} = m;
function checkSee(){
   setSee(see==="yes"?"no":"yes")
}
  
  return(
    <div className="row">
      <div className="col-10">
      <DiCodeBadge className="head-icon" />
      </div>
      <div className="col-9" style={headStyle}>
      {see==="yes"? <MdMenu className="icon-menu" onClick={checkSee} />:
       <MdClose className="icon-menu"onClick={checkSee} />}
       </div>
      {see==="no"?<nav className={`col-8 , abs`}style={navStyle} >
        
        <Link className="nav-link" style={linkStyle}to="/">
          HOME
        </Link>

        <Link className="nav-link" style={linkStyle}to="/Contact">
        CONTACT ME
        </Link>

  

        <Link className="nav-link" style={linkStyle}to="/Portfolio">
         PORTFOLIO
        </Link>

       
        </nav>:"" }
    
        </div>
  )
}
