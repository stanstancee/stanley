import React from 'react';
import { Link } from "react-router-dom";
import { BsFillShieldFill} from "react-icons/bs";

export default function desktop(){

  return(
    <div className="desktop-container">
      <div className="first">
  <BsFillShieldFill className="head-icon" />
      </div>
    <nav className="second">
        <Link className="nav-link" to="/">
          HOME
        </Link>

      
        <Link className="nav-link" to="/Portfolio">
         PORTFOLIO
        </Link>
        <Link className="nav-link" to="/Contact">
         CONTACT ME
        </Link>
        </nav>
        </div>
  )
}