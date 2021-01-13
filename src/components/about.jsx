import {Button ,Spinner}from  'react-bootstrap'
import image from "../assets/me.jpg"
import React, {useState} from "react";
import { Link } from "react-router-dom";
import canvasJsReact  from ".././assets/canvasjs.react";
import {FaSmile} from "react-icons/fa";


const {CanvasJS} = canvasJsReact;


export default function About({setIsTrue,isTrue}){
    const [anime,setAnime] = useState(false)

window.addEventListener("scroll" ,()=>{
    if(window.scrollY >=460){
         setIsTrue(true)
       
const chart = new CanvasJS.Chart(
    "chartContainer",{
    animationEnabled: `${scrollY===460? true:false}`,
    animationDuration:3000,
    theme:"light1",
    title:{
      text: "Skills based on previous projects and Pluralsight IQ Test"
    },
    axisY:{
        title:"Percetage",
        labelFormatter:(e)=>{
            return `${e.value}%`
        }
    },
    axisX:{
       title:"Skills",
       reversed:true
    },
    data:[
        {
            type:"bar",
            dataPoints:[
                {
                    y:93,label:"HTML"
                },
                {
                    y:82, label:"JavaScript",
                },
                {
                 y:56,label:"CSS"   
                },
                {
                  y:53,label:"Angular"  
                },
                {
                    y:57,label:"React"
                },
                {
                    y:60,label:"NodeJS"
                },
                {
                    y:88, label:"Websites with HTML, CSS, and JavaScript"
                }


            ]
        }
      ]
}
)
chart.render();
}


if(window.scrollY >460){
    setAnime(true)
    
}
else if(window.scrollY < 400){

    setAnime(false)
  }
})
 


  
    return(
            <div id="about"  style={{backgroundColor:"hsl(0, 0%, 97%)",color:"hsl(255, 11%, 22%)"}}>
        <div className="flex" >

     { isTrue ? <div id="chartContainer" ></div> :<img  src={image} alt="stanley" style={{width:"100%",height:"400px",filter:"grayscale(50%)"}}></img>}
        </div>
            
            

            <section className="flex">
           
                <h3> About Me </h3>
              {anime?   <p className={anime?"an":""} >
               <span className="name" style={{color:"#17a2b8"}}> Stanley</span> is a developer who is ready to build a Web presence from the ground up -- from concept, navigation, responsive web page, beautiful user interface and engaging user experience. 
Skilled at writing <span className="strong" >well-designed, testable and efficient</span>  code using current best practices in Web development 
Also a fast learner and team player who is proficient in <span className="strong" style={{color:"#17a2b8"}}>Javascript</span> and technical Toolbox in writing programmes for the web on both ends.
<span className="bottom">I"d love you to check out my work. <FaSmile /></span>
 
                </p>: <div  style={{fontSize:"40px", margin:"20px"}}>  <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="light" />
  <Spinner animation="grow" variant="dark" /></div>  }
                <Link className="nav-link" to="/Portfolio">
                <Button variant="secondary">Portfolio</Button>
            </Link>
             

            </section>

            </div>
    )
}
