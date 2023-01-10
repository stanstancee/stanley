import {Button }from  'react-bootstrap'
import React from "react";
import {Link} from 'react-router-dom'
const Success = (props)=>{
  const margin={
    margin:"15px"
  }
   return(
     <div>
       
    <h2 style={margin}>Thanks for contacting me. I will get back to you shortly</h2>
    <h4 style={margin} className="name">This page will redirect in {props.counter} seconds...</h4>
<p style={margin} className="para">
You advice or contribution is highly demanded as it will help me greatly in my career. 

</p>
<Link to="/"  style={margin}><Button variant="secondary">Go Home</Button></Link>
<Link to="/Portfolio" style={margin} ><Button variant="secondary">Check My Recent Projects</Button></Link>
     </div>
   )
}
export default Success;