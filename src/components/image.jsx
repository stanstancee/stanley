import image from "../assets/me.jpg";
import React from 'react'

const Image = (props)=>{

    return(
        <>
        <img src={image} alt="stanley" className="img-img"></img>
        </>
    )
}

export default  Image;