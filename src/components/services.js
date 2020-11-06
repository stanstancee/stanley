import React from 'react';
import sevice from "./serviceArray"
export default function Service(props){
  const {title,content} = props;
  return(

<div className="col-2">

<props.icon />
  <h3 >{title}</h3>
  <p>{content}</p>
  </div>

  )
}