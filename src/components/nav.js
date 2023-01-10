import React from "react";
import Desktop from './Navigation/desktop'
import useWindowSize from "../hooks/use-window-hook";
import Mobile from './Navigation/mobile'
const Nav = ({setIsTrue}) => {
  const size = useWindowSize();
 const {width} = size;

 

  
  return (
    <div className="">
      {(width >= 768)? <Desktop setIsTrue={setIsTrue} />:<Mobile setIsTrue={setIsTrue} />}
  
    </div>
  );
};
export default Nav;
