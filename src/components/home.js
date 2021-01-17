import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa"
import About from "./about";
import {Button, Card }from  'react-bootstrap'
import "./home-style.css"
import Question from "./question";
import {BiSmile} from 'react-icons/bi'
import {Link} from "react-router-dom"
import image from "../assets/image.jpg"
import Services from './services'

const Home = ({setIsTrue,isTrue}) => {
const date = new Date();


const currentTime  = date.getHours();
let greeting;
if(currentTime >= 12 && currentTime<=16){
  greeting ="Good Aftrernoon"
}
else if(currentTime<12){
  greeting="Good Morning"
}
else{
  greeting = "Good Evening"
}
console.log(currentTime)
  return ( 
    <section>
    <div className="home">
    <article>
  
      <Card  style={{ background:"radial-gradient(90deg, rgba(131,58,180) 0%, rgba(255,255,255,1) 50%, rgba(200,18,116,0.41220238095238093) 100%)", border:"0"}} >
  <Card.Body > 
    <Card.Title><h3 className="stan">{greeting} <BiSmile className="smile" /></h3>  <h1>I'm Stanley Ifeoha</h1> </Card.Title>
    <Card.Text>
   
    <h3 className="stan">Fullstack Web Developer</h3>
    <p>I'm a professional web developer with front-end and back-end skills. I develop generally with Javascript.</p>
    </Card.Text>
    <Link to="/Contact">  <Button size="lg" variant="info">Hire Me</Button></Link>
    <div className="social">
    <button className="btn-1"> <a className="a-1" href="https://github.com/stanstancee"><FaGithub className="i-1" />GitHub</a>  </button>
    <button className="btn-2"> <a  className="a-2" href="https://www.linkedin.com/in/stancee/">Linkedin<FaLinkedin className="i-2"  /></a></button>
    </div>
  </Card.Body>
</Card>
    </article>
    <div className="right-image"><img src={image} alt="ifeoha Stanley"></img></div>
    </div>
    <About setIsTrue={setIsTrue} isTrue={isTrue}/>
    <Services />
    <Question  message="Interested in doing a project together?" name="contact me" link="/Contact"/>

</section>

  )}
  export default Home; 
