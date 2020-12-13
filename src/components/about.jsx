import Button from "./button";
import React from "react";
import canvasJsReact  from ".././assets/canvasjs.react";
const {CanvasJS, CanvasJSChart} = canvasJsReact;

export default function About(){
    const options = {
        animationEnabled :true,
        animationDuration:3000,
        theme:"light2",
        title:{text:"Skills based on previous projects and Pluralsight IQ Test"},
        axisY:{
            title:"Percentile",
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
                  }


              ]
          }
        ]

    }
    return(
            <div id="about">
        <div className="flex" >
        <CanvasJSChart options={options} />
        </div>
            
            

            <section className="flex">
                <h3> About Me </h3>
                <p>
                Stanley is a developer who is ready to build a Web presence from the ground up -- from concept, navigation, responsive web page, beautiful user interface and engaging user experience. 
Skilled at writing well-designed, testable and efficient code using current best practices in Web development 
Also a fast learner and team player who is proficient in Javascript and technical Toolbox in writing programmes for the web on both ends.
I"d love you to check out my work

                </p>
                <Button name="Portfolio" />

            </section>

            </div>
    )
}