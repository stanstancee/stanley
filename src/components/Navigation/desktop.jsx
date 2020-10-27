import React from 'react';
import { Link } from "react-router-dom";
import { FcAssistant } from "react-icons/fc";

export default function desktop(){

  return(
    <div className="desk">
      <div className="col-10" >
  <FcAssistant className="head-icon" />
      </div>
    <nav className={`col-9`} >
        <Link className="nav-link" to="/">
          Home
        </Link>

        <Link className="nav-link" to="/About">
          About
        </Link>

        <Link className="nav-link" to="/Services">
          Services
        </Link>

        <Link className="nav-link" to="/Projects">
          Projects
        </Link>

        <Link className="nav-link" to="/Documentation">
          Documentation
        </Link>
        <Link className="nav-link" to="/Experience">
          Experience
        </Link>
        </nav>
        </div>
  )
}