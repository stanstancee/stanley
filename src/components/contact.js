import React, { useState, useEffect} from "react";
// import axios from "axios";
import Success from "./success";
import Question from '../components/question'

import {
  FaMapMarkerAlt as Location,
  FaPhone as Phone,
  FaEnvelopeOpen as Mail,
  FaUserAlt as Name,
  FaPenSquare as Message
} from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner"
export default function Contact() {
const [contact, setContact] = useState({
name:"",
email:"",
phone:"",
message:""

});
const [submitted, setSubmit] = useState(false);
const [counter, setCounter] = useState(20);
const [loading, setLoading] = useState(false);


useEffect(() => {
  
  const interval = setInterval(() => {
    setCounter(counter => counter - 1);
  }, 1000);

  return () => {
    clearInterval(interval);
    setLoading(false);
  };
}, []);


   const handleChange = (event)=>{
    const {name,value }= event.target
    setContact((previousValue)=>{
     return   {
          ...previousValue,
          [name]:value
        }
      
    })
   }
   
   const handleSubmit = (event)=>{
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setLoading(false);
         setSubmit(true)
         setCounter(20)
      } 
    };
    xhr.send(data);
 
   
    // let {name,email, phone, message} =contact;
    //     const userContact = {
    //       name:name,
    //       email:email,
    //       phone:phone,
    //       message:message
    //     }
    //       axios.post("https://intense-brushlands-67616.herokuapp.com/contact", userContact )
    //       .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //         setLoading(false);
    //         setSubmit(true)
    //         setCounter(20)
    //         setContact({
    //           name:"",
    //           email:"",
    //            phone:"",
    //           message:""

    //         })
           
    //       });
}
  return (
    <div id="contact" style={{backgroundColor:"hsl(0, 0%, 97%)",color:"hsl(255, 11%, 22%)"}}>
    
      <h1>Get In Touch With Me.</h1>
      <div className="contact">
      <address className='row-1'>
        
        <h3 className="para">Address </h3>
        <div className="a-details">
        <Location className="para" />
              <p>8, Adewale Adegun Street, Karaole Estate, College Road. Ogba   Lagos</p>  
              
           
        </div>
        <div className="a-details">
        <Phone className="para" />
              <p>  2348149181923</p>  
              
           
        </div>
        <div className="a-details">
        <Mail  className="para"/>
              <p>stanstancee@gmail.com</p>  
              
           
        </div>
          
          
          
  
           
          <div className="a-details">   <iframe     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0457982824582!2d3.328393114449821!3d6.641235223626713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b914fff2c63fd%3A0xcfb813da136b6291!2sCollege%20Rd%2C%20Lagos!5e0!3m2!1sen!2sng!4v1604334658423!5m2!1sen!2sng" 
 height="300" frameBorder="0"  aria-hidden="false" tabIndex="0" title="my location"></iframe>
             
             
             </div>   
            
              
               
       
      </address>
      <div  className="form">
{  submitted && counter>1 ?<Success counter={counter} />:
    <form onSubmit={handleSubmit}
        action="https://formspree.io/f/mdopjqeb"
        method="POST"
    >
   <h3 className="para">Get In Touch</h3>
   <div className="a-details">
   <label htmlFor="name" required><span><Name className="para"/> </span> Name </label>
   <input type='text' onChange={handleChange} name="name" value={contact.name} placeholder="Luke Prince" required />
   </div>
   <div className="a-details">
   <label htmlFor="email" required><span><Mail className="para" /> </span> Email </label>
   <input type='email' onChange={handleChange}name="email" value={contact.email} placeholder="name@email.com" required  />
   </div>
   <div className="a-details">
   <label htmlFor="phone"><span><Phone className="para" /> </span> Phone </label>
   <input type='tel' onChange={handleChange} name="phone" placeholder="234800008990" value={contact.phone}required  />  
   </div>
   <div className="a-details">
   <label   htmlFor="message"> <span><Message className="para"/></span>Message</label>
  <textarea cols="60" rows="5" onChange={handleChange} name="message" placeholder="I want to work with you." value={contact.message} required  ></textarea>
 



  </div> 
<div className="a-details">
{loading? <Button variant="secondary" size="lg" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading...
  </Button>: <Button  type="submit" variant="secondary" size="lg" >Submit</Button>}
</div>

  

    </form>
}
      </div>
      </div>
      <Question  message="Take a look at my previous Projects" name="Portfolio" link="/Portfolio"/>
    </div> 
  );
}
