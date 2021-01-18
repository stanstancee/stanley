import React from "react";
import  { Link } from "react-router-dom";
// import useWindowSize from "../hooks/use-window-hook";
import Image from './image'
import { FaFacebook, FaGithub,  FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
const Footer = ()=>{

return(
 <footer>
<div id="footer">

 
<Image />
<div className="first" >


<div><Link className="nv"  to="/" >
          HOME
        </Link>

 

<Link className="nv" to="/Portfolio" >
         PORTFOLIO
        </Link>
 
  <Link className="nv"  to="/Contact">
     CONTACT ME

 </Link>
 </div>


</div>
<div className="second">

  <a href="https:/github.com/stanstancee"><FaGithub className="icon-menu" /></a>
<a href="https://www.linkedin.com/in/stancee/"><FaLinkedin className="icon-menu"  /></a>
  <a href="https://web.facebook.com/Chekwubestanley"><FaFacebook className="icon-menu" /></a>
  <a href="https://instagram.com/stanstancee"><FaInstagram className="icon-menu" /></a>
  <a href="https://twitter.com/luke_stancee"><FaTwitter className="icon-menu" /></a>
  <a href="https://wa.link/663t99"><FaWhatsapp className="icon-menu" /></a>
  

  
  
  
  
</div>


 
<div className="third">
<p className="paragraph"> © created by Stanley Ifeoha. All Rights Reserved</p>
  </div>

</div>
</footer>
)
}
export default Footer;