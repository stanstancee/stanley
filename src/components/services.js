import React from 'react';
import services from "./serviceArray";


export default function Service(){


let colors = ["rgba(23,162,176,1)","rgba(86,148,88,1)","rgba(32,19,19,1)"]

let returnstyle1= (index)=>{
  // let slice = colors[index].slice(0,-1)
let see=     {
      color:"#fff",
      backgroundColor:colors[index]
    }
    console.log(see)
    return see
}
let returnstyle2 = (index)=>{
  let see = {
    borderBottom: `15px solid ${colors[index]}`,
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px"
  }
  return see;
}
  return(

<section style={{  backgroundColor: "hsl(220, 16%, 96%)",  marginTop:"80px" }}>
  <h1 className="head">My Services</h1>
  <div id="services">
{services.map((service,index)=>{
   return ( <article key={index} id={"s"+index} style={returnstyle2(index)}>
  <div className="s-icon" style={returnstyle1(service.id)}> <service.icon className="icon"/>  </div>
  <h3 >{service.title}</h3>
  <p>{service.content}</p>
    </article> 
    )
})}
</div>

  </section>

  )
}