import Button from './button'
import React from "react";
import {Link} from 'react-router-dom'
const Success = (props)=>{
   return(
     <div>
       
    <h1>Thanks for contacting me. I will get back to you shortly</h1>
    <h2>This page will redirect in {props.counter} seconds...</h2>
<p className="para">
You advice or contribution is highly demanded as it will help me greatly in my career. 

</p>
<Link to="/" ><Button name="Go Home" /></Link>
<Link to="/Portfolio" ><Button name="Check My Recent Projects" /></Link>
     </div>
   )
}
export default Success;