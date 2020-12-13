import React from "react";

import image from "../assets/monitor.png";
import About from "./about";
import Button from "./button";
import "./home-style.css"
import Question from "./question";
import Service from "./services";
const Home = () => {

  return (
    <div>
    <div className="home">
    <article>
    <p>Hey, I'm Stanley Ifeoha. I'm a Fullstack web developer.</p>
      <Button  icon={true} name="about me"/>
    </article>
      
    </div>
    <About />
    <Question />
</div>

  )}
  export default Home; 
