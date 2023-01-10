import React from "react";
import {FaGithub, FaLinkedin} from "react-icons/fa"
import About from "./about";
import {Button, Card }from  'react-bootstrap'
import "./home-style.css"
import Question from "./question";
import {BiSmile} from 'react-icons/bi'
import {Link} from "react-router-dom"

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
    <div>
    <div className="home">
    <article>
  
      <Card >
  <Card.Body>
    <Card.Title>{greeting}  <BiSmile className="smile" />  </Card.Title>
    <Card.Text>
    I'm Stanley Ifeoha,  Fullstack web developer.
    </Card.Text>
    <Link to="/Portfolio">  <Button variant="info">Check My Work</Button></Link>
  </Card.Body>
</Card>
    </article>
    <div className="social">
    <button className="btn-1"> <a className="a-1" href="https:/github.com/stanstancee"><FaGithub className="i-1" />GitHub</a>  </button>
    <button className="btn-2"> <a  className="a-2" href="https://www.linkedin.com/in/stancee/">Linkedin<FaLinkedin className="i-2"  /></a></button>
    </div>
    </div>
    <About setIsTrue={setIsTrue} isTrue={isTrue}/>
    <Question  message="Interested in doing a project together?" name="contact me" link="/Contact"/>

</div>

  )}
  export default Home; 
