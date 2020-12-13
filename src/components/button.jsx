import React from "react";
import{ FaAngleDoubleDown }from "react-icons/fa"

const Button = ({name,icon})=>{
    name = name.toUpperCase();
    return(
        <div className="Button">
 {icon? <button className="btn dark"><FaAngleDoubleDown className="in" />  {name}</button> :<button className="btn light">{name}</button>}
     </div>
    )
}

export default Button;  