import React from "react";
import './portfolio.css'

const Next =(props)=>{
const {projects,index,NextFunc,name} = props;
    return(
        <div onClick={NextFunc} className="next-me">
     { name==="Previous" && <props.BsChevron className="next-1"/>}
     <div  className="next-2">
     <h3> {
          index >  projects.length ?projects[0]["title"]: projects[index]["title"]}
          </h3> 
        <p className="p-name">{name}</p>
    
          </div>
          {name==="Next" && <props.BsChevron className="next-1" />}
        </div>
    )
}

export default Next