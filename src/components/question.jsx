
import React from "react";
import Button from './button'
import {Link} from 'react-router-dom'

const Question = (props)=>{
    return(
        <div id="question">
            <p className="question">{props.message}</p>
            <div className="rule"></div>
            <div  className="bt" >
            <Link to={props.link}>
            <Button icon={true}  name={props.name}/>
               </Link >
            </div>
            </div>
            
       
    )
}
export default Question;