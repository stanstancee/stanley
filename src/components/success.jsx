import React from "react";
import {Link} from 'react-router-dom'
const Success = (props)=>{
   return(
     <div>
       
    <h1>Thanks for contacting me. I will get back to you shortly</h1>
    <h2>This page will redirect in {props.counter} seconds...</h2>
<p>
You advice or contribution is highly demanded as it will help me greatly in my career. 

</p>
<button className="btn-f"><Link to="/About" />My full Profile</button>
  <button className="btn-f"><Link to="/Projects" />Check My Recent Projects</button>
     </div>
   )
}
export default Success;