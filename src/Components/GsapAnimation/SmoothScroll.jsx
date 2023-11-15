import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/all';
import "./scroll.css"
import Logo1 from "../../assets/Images/LogoA.jpg"
import Logo2 from "../../assets/Images/LogoB.png"
import Logo3 from "../../assets/Images/LogoC.png"
import Logo4 from "../../assets/Images/LogoD.png"
const SmoothScroll = () => {
  gsap.registerPlugin(Flip);

  const layouts = ["final", "plain", "columns"];
  let curLayout = 0; 

  const containerRef = useRef(null);

  const nextState = () => {
    const state = Flip.getState(".letter, .for, .gsap", { props: "color,backgroundColor", simple: true });

    containerRef.current.classList.remove(layouts[curLayout]);
    curLayout = (curLayout + 1) % layouts.length;
    containerRef.current.classList.add(layouts[curLayout]);

    Flip.from(state, {
      absolute: true,
      stagger: 0.07,
      duration: 0.7,
      ease: "power2.inOut",
      spin: curLayout === 0,
      simple: true,
      onEnter: (elements, animation) =>
        gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, delay: animation.duration() - 0.1 }),
      onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
    });

    gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
  };

  useEffect(() => {
    gsap.delayedCall(1, nextState);
  }, []);


  return (
      <div className="wrapper">
        <div className="container final" ref={containerRef}>
          <div class="letter F"><img src={Logo1} alt="" width={"60%"} /></div>
          <div class="letter l"><img src={Logo2} alt="" width={"60%"}/></div>
          <div class="letter i"><img src={Logo3} alt="" width={"60%"}/></div>
          <div class="letter p"><img src={Logo4} alt="" width={"60%"}/></div>
          <div class="for">from</div>
          <div class="gsap">PRIMEPIXELHUB</div>
        </div>
      </div>
  );
};

export default SmoothScroll;
