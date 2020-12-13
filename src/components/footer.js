import React from "react";
import  { Link } from "react-router-dom";
// import useWindowSize from "../hooks/use-window-hook";
import { BsFillShieldFill} from "react-icons/bs";
import { FaFacebook, FaGithub,  FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
const Footer = ()=>{

return(
 <footer>
<div id="footer">

 
<div><BsFillShieldFill className="footer-icon" /></div>
<div className="first" >


<div><Link  to="/About" >
          HOME
        </Link>

 

<Link  to="/Portfolio" >
         PORTFOLIO
        </Link>
 
  <Link  to="/Contact">
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
<h4 className="paragraph"> © created by Stanley Ifeoha. All Rights Reserved</h4>
  </div>

</div>
</footer>
)
}
export default Footer;