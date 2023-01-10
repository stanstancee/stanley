
import React from "react";
import {Button }from  'react-bootstrap'
import {Link} from 'react-router-dom'

const Question = (props)=>{
    return(
        <div id="question">
            <p className="question">{props.message}</p>
            <div className="rule"></div>
            <div  className="bt" >
            <Link to={props.link}>
            <Button variant="secondary" block>{props.name}</Button>
               </Link >
            </div>
            </div>
            
       
    )
}
export default Question;