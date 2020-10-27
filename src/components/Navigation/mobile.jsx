import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { FcAssistant } from "react-icons/fc";
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
      <FcAssistant className="head-icon" />
      </div >
      <div className="col-9" style={headStyle}>
      {see==="yes"? <MdMenu className="icon-menu" onClick={checkSee} />:
       <MdClose className="icon-menu"onClick={checkSee} />}
       </div>
      {see==="no"?<nav className={`col-8`}style={navStyle} >
        
        <Link className="nav-link" style={linkStyle}to="/">
          Home
        </Link>

        <Link className="nav-link" style={linkStyle}to="/About">
          About
        </Link>

        <Link className="nav-link" style={linkStyle}to="/Services">
          Services
        </Link>

        <Link className="nav-link" style={linkStyle}to="/Projects">
          Projects
        </Link>

        <Link className="nav-link" style={linkStyle}to="/Documentation">
          Documentation
        </Link>
        <Link className="nav-link" style={linkStyle}to="/Experience">
          Experience
        </Link>
        </nav>:"" }
    
        </div>
  )
}
