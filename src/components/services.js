import React from 'react';
import services from "./serviceArray"
export default function Service(){

  return(

<div id="services">
{services.map((service)=>{
   return ( <div>
    <service.icon className="icon"/>
  <h3 >{service.title}</h3>
  <p>{service.content}</p>
    </div> )
})}


  </div>

  )
}