import React from 'react';
import Button from '../button';
import Question from '../question';
import './portfolio.css'

const PortfolioList = (props)=>{
    const checkEven = (num)=>{
 return num % 2
    }
   return(
<div>    
      {props.projects.map((project,index)=>{
         return(
             <div key={index} className="p-list" >
             <div className={checkEven(index+1) === 0? "p-list-1-o":"p-list-1"}>
                 <h2>{project.title}</h2>
                 <p>{project.bookmark}</p>
               <div   id={index} onClick={()=>{
                   props.setIndex(index)
                   props.setView(true)
               }} >
           
               <Button name="view project"  /> </div>
                 </div>
                 <div className="p-list-2">
                 <img src={project.image1} alt={project.title} ></img>
                 </div>
             </div>
         )
      })}
     <Question message="Interested in doing a project together?" name="contact me" link="/Contact"  />
      </div> 
   )
}
export default PortfolioList