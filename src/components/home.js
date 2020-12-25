import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa"
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
    <div className="social">
    <button className="btn-1"> <a className="a-1" href="https:/github.com/stanstancee"><FaGithub className="i-1" />GitHub</a>  </button>
    <button className="btn-2"> <a  className="a-2" href="https://www.linkedin.com/in/stancee/">Linkedin<FaLinkedin className="i-2"  /></a></button>
    </div>
    </div>
    <About />
    <Question />
</div>

  )}
  export default Home; 
