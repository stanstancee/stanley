import {Button }from  'react-bootstrap'
import React from "react";
import {Link} from 'react-router-dom'
const Success = (props)=>{
  const margin={
    margin:"15px"
  }
   return(
     <div>
       
    <h2 style={margin}>Thanks for contacting me. I will get back to you as soon as can. </h2>
    <h4 style={margin} className="name">This page will redirect in {props.counter} seconds...</h4>
<p style={margin} className="para">
Please, don't forget to connect with me on my social handles below. 

</p>
<Link to="/"  style={margin}><Button variant="secondary">Go Home</Button></Link>
<Link to="/Portfolio" style={margin} ><Button variant="secondary">Check My Recent Projects</Button></Link>
     </div>
   )
}
export default Success;