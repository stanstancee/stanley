import React from 'react';
import { Link } from "react-router-dom";
import Image from '../image'


export default function desktop(){

  return(
    <div className="desktop-container">
      <div className="first">
   <Image />
      </div>
    <nav className="second">
       

      
       
        <Link className="nav-link" to="/Contact">
         CONTACT ME
        </Link>
        <Link className="nav-link" to="/Portfolio">
         PORTFOLIO
        </Link>
        <Link className="nav-link" to="/">
          HOME
        </Link>
        </nav>
        </div>
  )
}