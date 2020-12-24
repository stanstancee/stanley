import React from "react";
import Desktop from './Navigation/desktop'
import useWindowSize from "../hooks/use-window-hook";
import Mobile from './Navigation/mobile'
const Nav = () => {
  const size = useWindowSize();
 const {width} = size;

 

  
  return (
    <div>
     {(width >= 600)? <Desktop />:<Mobile />}
  
    </div>
  );
};
export default Nav;
