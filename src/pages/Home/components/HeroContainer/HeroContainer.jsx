import React, { useRef, useEffect } from "react";
import "./HeroContainer.css";
import { ReactTyped } from "react-typed";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Buttons from "../HeroContainer/buttons/Buttons"

const HeroContainer = () => {
    useEffect(() => {
        gsap.from(".animationType , .h1Text , .opacityText , .buttons", {
          opacity: 0,
          y: -200,
          duration: 2.2,
        });
      });
    
 
      useGSAP(() => {
        gsap.to(".heroText", {
          y: -200,
          opacity: 0,
          stagger: 0.5,
          duration: 2,
          scrollTrigger: {
            trigger: ".heroText",
            start: "top top",
            scrub: true,
          },
        });
      });
  return (
    <div className="heroPage">
    <div className="heroText">
      <h1 className="h1Text">
       Güngördü Çiftliği
      </h1>
      <ReactTyped
        className="animationType"
        strings={["Lezzetli,Organik,Ekonomik tarım ürünleri..."]}
        typeSpeed={40}
        backSpeed={40}
        loop
      />

      <p className="opacityText">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam magnam
        dicta suscipit, nesciunt iure inventore temporibus nobis facere! Quae,
        vitae!
      </p>

      <div className="buttons">
        <Buttons />
      </div>
    </div>
  </div>
  )
}

export default HeroContainer