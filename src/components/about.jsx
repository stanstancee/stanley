import Button from "./button";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import canvasJsReact  from ".././assets/canvasjs.react";
const {CanvasJS} = canvasJsReact;

export default function About({setIsTrue,isTrue}){

window.addEventListener("scroll" ,()=>{
    if(window.scrollY ===200){
        setIsTrue(true)
const chart = new CanvasJS.Chart(
    "chartContainer",{
    animationEnabled: true,
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

})



  
    return(
            <div id="about">
        <div className="flex" >

     { isTrue ? <div id="chartContainer" ></div> :""}
        </div>
            
            

            <section className="flex">
                <h3> About Me </h3>
                <p>
                Stanley is a developer who is ready to build a Web presence from the ground up -- from concept, navigation, responsive web page, beautiful user interface and engaging user experience. 
Skilled at writing well-designed, testable and efficient code using current best practices in Web development 
Also a fast learner and team player who is proficient in Javascript and technical Toolbox in writing programmes for the web on both ends.
I"d love you to check out my work.
 
                </p>
                <Link className="nav-link" to="/Portfolio">
                <Button name="Portfolio" icon={true} />
            </Link>
             

            </section>

            </div>
    )
}