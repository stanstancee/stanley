import React from 'react';
import {Button }from  'react-bootstrap'
import Question from '../question';
import './portfolio.css'
import useWindowSize from "../../hooks/use-window-hook";

const PortfolioList = (props)=>{
    const size = useWindowSize();
    const {width} = size;
   

    const checkEven = (num)=>{
 return num % 2
    }
   return(
<div>    
      {props.projects.map((project,index)=>{
         return(
             <div key={index} className="p-list" >
             <div className={(checkEven(index+1) === 0 ) && (width >= 760) ? "p-list-1-o":"p-list-1"} >
                 <h2>{project.title}</h2>
                 <p>{project.bookmark}</p>
               <div   id={index} onClick={()=>{
                   props.setIndex(index)
                   props.setView(true)
               }} >
           <div style={{marginTop:"8px"}}>
               <Button variant="secondary" >View Project</Button> </div>
               </div>
                 </div>
                 <div className="p-list-2">
                 <img src={project.image1} alt={project.title} ></img>
                 </div>
             </div>
         )
      })}
      <div>
      <Question message="Interested in doing a project together?" name="contact me" link="/Contact"  />
      </div>
   
      </div> 
   )
}
export default PortfolioList