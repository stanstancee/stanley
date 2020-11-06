import React from "react";
import  { Link } from "react-router-dom";
import useWindowSize from "../hooks/use-window-hook";
import { FcAssistant } from "react-icons/fc";
import { FaFacebook, FaGithub,  FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
const Footer = ()=>{
const footerLinkStyle = {
   textDecoration:"underline",
    
}
const size = useWindowSize();
const {width} = size ;
if(width <= 760){
  footerLinkStyle.display = "inline"
  footerLinkStyle.margin="5px"
}

return(
 
<div className="row footer">

  <div className="footerStyle col-7">

<table  className="footerStyle">
<caption><h2 className="heading">Get In Touch </h2></caption>
  <thead>

    <tr>
      <th className="para">Github</th>
      <th className="para">Linkedin</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td><button  className="btn-f"><a href="https:/github.com/stanstancee"><FaGithub className="icon-menu" /></a></button></td>
      <td><button name="facebook" className="btn-f"  ><a href="https://www.linkedin.com/in/stancee/"><FaLinkedin className="icon-menu"  
 /></a></button></td>
    </tr>
  </tbody>
</table>


</div>
<div className="col-7" >
  <h3 style={footerLinkStyle} className="para">
  <Link  to="/About" >
          About
        </Link>
  </h3>
  <h3 style={footerLinkStyle} className="para">
  <Link  to="/Services">
          Services
        </Link>
  </h3>
  <h3 style={footerLinkStyle} className="para"><Link  to="/Projects" >
          Projects
        </Link></h3>


        

        

</div>
<div className="footerStyle col-7">
  <h2 className="heading">Connect on Social:</h2>
  <button className="btn-f "><a href="https://web.facebook.com/Chekwubestanley"><FaFacebook className="icon-menu" /></a></button>
  <button className="btn-f"><a href="https://instagram.com/stanstancee"><FaInstagram className="icon-menu" /></a></button>
  <button className="btn-f"><a href="https://twitter.com/luke_stancee"><FaTwitter className="icon-menu" /></a></button>
  <button className="btn-f"> <a href="https://wa.link/663t99"><FaWhatsapp className="icon-menu" /></a></button>
  

  
  
  
  
</div>

<div className="col-" >
  <div className="col-5" >
<FcAssistant className="head-icon" />
</div>
<div>
<h4 className="paragraph"> © created by Stanley Ifeoha. All Rights Reserved</h4>
  </div>
</div>
</div>
)
}
export default Footer;