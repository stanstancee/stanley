import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const FadeInAnimation = ({
  children,
  wrapperElement = "div",
  direction = null,
  delay = 0,
  ...props
}) => {
    gsap.registerPlugin(ScrollTrigger);
  const Component = wrapperElement;
  let compRef = useRef(null);
  const distance = 200;
  let fadeDirection;
  switch (direction) {
    case "left":
      fadeDirection = { x: -distance };
      break;
    case "right":
      fadeDirection = { x: distance };
      break;
    case "up":
      fadeDirection = { y: distance };
      break;
    case "down":
      fadeDirection = { y: -distance };
      break;
    default:
      fadeDirection = { x: 0 };
  }
  useEffect(() => {
    gsap.from(compRef.current, 1,{
      ...fadeDirection,
      opacity: 0,
      delay,

      scrollTrigger: {
        trigger: compRef.current,
        start: "top center",
        toggleActions:"restart"
       
        
    }
    });
  }, [compRef, fadeDirection, delay]);
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  );
};

export default FadeInAnimation;